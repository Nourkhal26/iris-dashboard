// ─── IRIS SALES GROUP — CLIENT CONFIGURATION ───────────────────────────────
// Add / edit clients here. Each client has:
//   id         : unique slug (no spaces)
//   name       : display name
//   sheetUrl   : Google Sheets "Publish to web" CSV URL
//   users      : array of { email, password, role: 'client' | 'team' }

const IRIS_CONFIG = {

  // ── ADMIN CREDENTIALS ──────────────────────────────────────────────────────
  admin: {
    email: 'admin@irissalesgroup.com',
    password: 'iris2026!',
    name: 'Iris Admin'
  },

  // ── CLIENTS ───────────────────────────────────────────────────────────────
  clients: [
    {
      id: 'capitalism',
      name: 'Capitalism.com',
sheetUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTKc7hflUCBf8-tkX5c-CottOTHEStLMKpfEfbwiLEPztZiZA0e9gwiWk-ce5V-jklJUpD9QGsiH7iv/pub?gid=979060701&single=true&output=csv',      users: [
        { email: 'manager@capitalism.com', password: 'client123', role: 'client' }
      ],
      closers: ['Walter', 'Doru', 'Jason', 'Finlay', 'Aaron', 'Ryan']
    }
    // Add more clients here:
    // {
    //   id: 'client2',
    //   name: 'Client Two',
    //   sheetUrl: '',
    //   users: [{ email: 'user@client2.com', password: 'pass123', role: 'client' }],
    //   closers: []
    // }
  ],

  // ── TEAM ACCOUNTS (see all clients) ───────────────────────────────────────
  team: [
    { email: 'team@irissalesgroup.com', password: 'team2026!', name: 'Iris Team' }
  ],

  // ── SHEET COLUMN MAP ──────────────────────────────────────────────────────
  // Map your Google Sheet column names to the fields the dashboard uses.
  // Adjust these to match your actual column headers exactly.
  columns: {
    date:          'Date',
    clientName:    'Client Name',
    product:       'Product',
    cashCollected: 'Cash Collected',
    contractValue: 'Contract Value',
    setter:        'Setter',
    closer:        'Closer'
  }
};
