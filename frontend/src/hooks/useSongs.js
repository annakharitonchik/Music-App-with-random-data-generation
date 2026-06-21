import getSongs from "../services/songsApi.js";
import { useState, useEffect } from "react";

const useSongs = ({ language, page, quantity, seed, likes }) => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchSongs = async () => {
        const loadedSongs = await getSongs({
          language,
          page,
          quantity,
          seed,
          likes,
        });
        setSongs(loadedSongs.songs);
      };
      fetchSongs();
    }, 500);
    return () => clearTimeout(timer);
  }, [language, page, quantity, seed, likes]);
  return songs;
};

export default useSongs;
