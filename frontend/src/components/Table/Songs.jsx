import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, Fragment } from "react";
import SongDescription from "./SongDescription.jsx";
const Songs = ({ songs }) => {
  const [openedSongId, setOpenedSongId] = useState(null);
  return (
    <>
      {songs.map((song) => (
        <Fragment key={song.index}>
          <tr>
            <td className="text-truncate align-middle">
              <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  icon={
                    song.index === openedSongId ? faChevronUp : faChevronDown
                  }
                  size="lg"
                  style={{ color: "#c4c4c4" }}
                  onClick={() => {
                    setOpenedSongId(
                      song.index === openedSongId ? null : song.index,
                    );
                  }}
                />
              </div>
            </td>
            <td className="text-truncate">{song.index}</td>
            <td className="text-truncate">{song.songName}</td>
            <td className="text-truncate">{song.artist}</td>
            <td
              className={`text-truncate ${song.album === "Single" ? "text-muted" : ""}`}
            >
              {song.album}
            </td>
            <td className="text-truncate">{song.genre}</td>
          </tr>
          {openedSongId === song.index && (
            <tr>
              <td colSpan="6">
                <SongDescription song={song} />
              </td>
            </tr>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default Songs;
