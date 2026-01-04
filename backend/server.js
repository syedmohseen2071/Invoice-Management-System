// server.js
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./database.db");

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});


db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS invoices (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      invoiceNumber TEXT UNIQUE NOT NULL,
      clientName TEXT NOT NULL,
      date TEXT NOT NULL,
      amount REAL NOT NULL,
      status TEXT NOT NULL
    )
  `);
});

app.post("/invoices", (req, res) => {
  const { invoiceNumber, clientName, date, amount, status } = req.body;

  db.run(
    `INSERT INTO invoices (invoiceNumber, clientName, date, amount, status)
     VALUES (?, ?, ?, ?, ?)`,
    [invoiceNumber, clientName, date, amount, status],
    function (err) {
      if (err) return res.status(400).json(err);
      res.json({ id: this.lastID });
    }
  );
});


// Get All Invoices
app.get("/invoices", (req, res) => {
  db.all("SELECT * FROM invoices", [], (err, rows) => {
    if (err) return res.status(400).json(err);
    res.json(rows);
  });
});

// Update Invoice
app.put("/invoices/:id", (req, res) => {
  const { clientName, date, amount, status } = req.body;
  db.run(
    `UPDATE invoices SET clientName=?, date=?, amount=?, status=? WHERE id=?`,
    [clientName, date, amount, status, req.params.id],
    function (err) {
      if (err) return res.status(400).json(err);
      res.json({ updated: this.changes });
    }
  );
});

// Delete Invoice
app.delete("/invoices/:id", (req, res) => {
  db.run(
    `DELETE FROM invoices WHERE id=?`,
    [req.params.id],
    function (err) {
      if (err) return res.status(400).json(err);
      res.json({ deleted: this.changes });
    }
  );
});

app.listen(5000, () => console.log("Backend running on port 5000"));
