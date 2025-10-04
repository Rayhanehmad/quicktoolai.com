// server.js - Express server with currency updater
import express from "express";
import fs from "fs";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = 'public';

app.use(express.static(PUBLIC_DIR));

async function updateRates() {
  try {
    const resp = await fetch('https://api.exchangerate.host/latest');
    if (!resp.ok) throw new Error(`Status ${resp.status}`);
    const data = await resp.json();
    fs.writeFileSync(`${PUBLIC_DIR}/rates.json`, JSON.stringify(data, null, 2));
    console.log('Rates updated:', new Date().toISOString());
  } catch (err) {
    console.error('Failed to update rates:', err.message);
  }
}

updateRates();
setInterval(updateRates, 1000 * 60 * 60 * 24);

app.get('/api/health', (req, res) => res.json({ ok: true, updated: fs.existsSync('public/rates.json') ? fs.statSync('public/rates.json').mtime : null }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
