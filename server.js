// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// --- Telegram Ayarları ---
const BOT_TOKEN = "8469490723:AAEauc3N_2l2Touo7ohP4ZXmLqKRv2viXgc"; // senin verdiğin token
const CHAT_ID = "YOUR_TELEGRAM_CHAT_ID"; // kendi Telegram ID'ni buraya koy

// --- POST route ---
app.post("/send", async (req, res) => {
  const { text } = req.body;
  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text })
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

// --- Server başlat ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend çalışıyor: ${PORT}`));
