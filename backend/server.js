import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import songsRouter from "./src/routes/songs.routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

app.use("/songs", await songsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server listening on port ${PORT} http://localhost:5000/songs?page=1&quantity=10&seed=123&likes=5.7`,
  );
});
