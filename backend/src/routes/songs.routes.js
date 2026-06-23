import express from "express";

import LoadSongs from "../services/loadSongs.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const page = Number(req.query.page || 125);
  const quantity = Number(req.query.quantity || 1025);
  const seed = Number(req.query.seed || 202625);
  const likes = Math.min(Math.max(0, Number(req.query.likes || 5)), 10);
  const language = req.query.language || "en-US";
  const songs = await LoadSongs(language, page, quantity, seed, likes);
  res.json({ language, page, quantity, seed, songs });
});

export default router;
