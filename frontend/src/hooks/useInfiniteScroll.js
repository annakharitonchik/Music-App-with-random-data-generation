import getSongs from "../services/songsApi.js";
import { useEffect, useState, useCallback, useRef } from "react";

const useInfiniteScroll = ({ language, seed, likes }) => {
  const [scrollSongs, setScrollSongs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const pageRef = useRef(1);

  const fetchSongs = useCallback(
    async (pageNum) => {
      return await getSongs({
        language,
        page: pageNum,
        quantity: 20,
        seed,
        likes,
      }).then((result) => result.songs);
    },
    [language, seed, likes],
  );

  const loadMore = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    const currentPage = pageRef.current;
    const newSongs = await fetchSongs(currentPage);

    setScrollSongs((prev) => [...prev, ...newSongs]);

    const nextPage = currentPage + 1;
    pageRef.current = nextPage;
    setPage(nextPage);
    setLoading(false);
  }, [loading, fetchSongs]);

  useEffect(() => {
    const reload = async () => {
      setLoading(true);
      // setScrollSongs([]);

      pageRef.current = 1;
      const songs = await fetchSongs(1);

      setScrollSongs(songs);
      pageRef.current = 2;
      setPage(2);
      setLoading(false);
    };

    reload();
  }, [fetchSongs]);

  return {
    scrollSongs,
    loadMore,
    loading,
  };
};

export default useInfiniteScroll;
