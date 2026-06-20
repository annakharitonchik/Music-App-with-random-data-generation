import Toolbar from "../components/Toolbar";
import SongsTable from "../components/SongsTable";
import useSongs from "../hooks/useSongs.js";
import { useState } from "react";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [likes, setLikes] = useState(5);
  const [seed, setSeed] = useState(2026);
  const songs = useSongs({
    page,
    quantity: 20,
    seed,
    likes,
  });
  return (
    <div>
      <Toolbar
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
