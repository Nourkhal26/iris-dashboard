// ─── IRIS AUTH ───────────────────────────────────────────────────────────────

const Auth = {
  login(email, password) {
    const e = email.trim().toLowerCase();
    const p = password.trim();

    // Check admin
    if (e === IRIS_CONFIG.admin.email.toLowerCase() && p === IRIS_CONFIG.admin.password) {
      const session = { role: 'admin', name: IRIS_CONFIG.admin.name, email: e };
      sessionStorage.setItem('iris_session', JSON.stringify(session));
      return { success: true, role: 'admin' };
    }

    // Check team
    const teamMember = IRIS_CONFIG.team.find(t => t.email.toLowerCase() === e && t.password === p);
    if (teamMember) {
      const session = { role: 'team', name: teamMember.name, email: e };
      sessionStorage.setItem('iris_session', JSON.stringify(session));
      return { success: true, role: 'team' };
    }

    // Check client users
    for (const client of IRIS_CONFIG.clients) {
      const user = client.users.find(u => u.email.toLowerCase() === e && u.password === p);
      if (user) {
        const session = { role: 'client', clientId: client.id, clientName: client.name, email: e };
        sessionStorage.setItem('iris_session', JSON.stringify(session));
        return { success: true, role: 'client', clientId: client.id };
      }
    }

    return { success: false };
  },

  getSession() {
    const s = sessionStorage.getItem('iris_session');
    return s ? JSON.parse(s) : null;
  },

  logout() {
    sessionStorage.removeItem('iris_session');
    window.location.href = 'index.html';
  },

  requireAuth(allowedRoles) {
    const session = this.getSession();
    if (!session) { window.location.href = 'index.html'; return null; }
    if (allowedRoles && !allowedRoles.includes(session.role)) {
      window.location.href = 'index.html'; return null;
    }
    return session;
  }
};
