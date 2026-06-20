import getSongs from "../services/songsApi.js";
import { useState, useEffect } from "react";

const useSongs = ({ page = 1, quantity = 20, seed = 2026, likes = 5.8 }) => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    const fetchSongs = async () => {
      const loadedSongs = await getSongs({
        page,
        quantity,
        seed,
        likes,
      });
      console.log(loadedSongs.songs);
      setSongs(loadedSongs.songs);
    };
    fetchSongs();
  }, []);
  return songs;
};

export default useSongs;
