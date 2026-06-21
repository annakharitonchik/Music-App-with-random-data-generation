import Toolbar from "../components/Toolbar/Toolbar.jsx";
import SongsTable from "../components/Table/SongsTable.jsx";
import useSongs from "../hooks/useSongs.js";
import { useState } from "react";

const HomePage = () => {
  const [language, setLanguage] = useState("en-US");
  const [page, setPage] = useState(1);
  const [likes, setLikes] = useState(5);
  const [seed, setSeed] = useState(2026);
  const songs = useSongs({
    language,
    page,
    quantity: 1,
    seed,
    likes,
  });
  return (
    <div>
      <Toolbar
        language={language}
        setLanguage={setLanguage}
        seed={seed}
        setSeed={setSeed}
        likes={likes}
        setLikes={setLikes}
      />
      <SongsTable songs={songs} />
    </div>
  );
};
export default HomePage;
