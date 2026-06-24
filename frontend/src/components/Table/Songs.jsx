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
          <tr
            onClick={() => {
              setOpenedSongId(song.index === openedSongId ? null : song.index);
            }}
            style={{
              backgroundColor: "rgba(13, 110, 253, 0.17)",
              cursor: "pointer",
            }}
          >
            <td
              className="text-truncate align-middle"
              style={{
                backgroundColor:
                  openedSongId === song.index
                    ? "rgba(13,110,253,0.17)"
                    : "white",
              }}
            >
              <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  icon={
                    song.index === openedSongId ? faChevronUp : faChevronDown
                  }
                  size="lg"
                  style={{ color: "#c4c4c4" }}
                />
              </div>
            </td>
            <td
              className="text-truncate"
              style={{
                backgroundColor:
                  openedSongId === song.index
                    ? "rgba(13,110,253,0.17)"
                    : "white",
              }}
            >
              {song.index}
            </td>
            <td
              className="text-truncate"
              style={{
                backgroundColor:
                  openedSongId === song.index
                    ? "rgba(13,110,253,0.17)"
                    : "white",
              }}
            >
              {song.songName}
            </td>
            <td
              className="text-truncate"
              style={{
                backgroundColor:
                  openedSongId === song.index
                    ? "rgba(13,110,253,0.17)"
                    : "white",
              }}
            >
              {song.artist}
            </td>
            <td
              className={`text-truncate ${song.album === "Single" ? "text-muted" : ""}`}
              style={{
                backgroundColor:
                  openedSongId === song.index
                    ? "rgba(13,110,253,0.17)"
                    : "white",
              }}
            >
              {song.album}
            </td>
            <td
              className="text-truncate"
              style={{
                backgroundColor:
                  openedSongId === song.index
                    ? "rgba(13,110,253,0.17)"
                    : "white",
              }}
            >
              {song.genre}
            </td>
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
