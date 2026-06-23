import Toolbar from "../components/Toolbar/Toolbar.jsx";
import SongsTable from "../components/Table/SongsTable.jsx";
import useSongs from "../hooks/useSongs.js";
import Pagination from "../components/Pagination/Pagination.jsx";
import useTableSize from "../hooks/useTableSize.js";
import { useState } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll.js";

const HomePage = () => {
  const [language, setLanguage] = useState("en-US");
  const [page, setPage] = useState(1);
  const [likes, setLikes] = useState(5);
  const [seed, setSeed] = useState(2026);
  const [viewType, setViewType] = useState("pages");
  const {
    toolbarRef,
    headerRef,
    paginationRef,
    rowRef,
    quantity,
    heightForScroll,
  } = useTableSize();

  const songs = useSongs({
    language,
    page,
    quantity,
    seed,
    likes,
  });
  const { scrollSongs, loadMore, resetScrollRef } = useInfiniteScroll({
    language,
    seed,
    likes,
  });

  return (
    <div className="d-flex flex-column vh-100">
      <audio hidden />
      <Toolbar
        toolbarRef={toolbarRef}
        language={language}
        setLanguage={setLanguage}
        seed={seed}
        setSeed={setSeed}
        likes={likes}
        setLikes={setLikes}
        viewType={viewType}
        setViewType={setViewType}
      />
      <div className="flex-grow-1">
        <SongsTable
          heightForScroll={heightForScroll}
          headerRef={headerRef}
          rowRef={rowRef}
          paginationRef={paginationRef}
          viewType={viewType}
          loadMore={loadMore}
          songs={viewType === "scroll" ? scrollSongs : songs}
          resetScrollRef={resetScrollRef}
        />
      </div>
      {viewType === "pages" && (
        <div className="mt-auto" ref={paginationRef}>
          <Pagination page={page} setPage={setPage} />
        </div>
      )}
    </div>
  );
};
export default HomePage;
