import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Songs = ({ songs }) => {
  return (
    <>
      {songs.map((song) => (
        <tr key={song.index}>
          <td className="text-truncate">
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon
                icon={faChevronDown}
                size="lg"
                className="text-secondary"
              />
            </div>
          </td>
          <td className="text-truncate">{song.index}</td>
          <td className="text-truncate">{song.songName}</td>
          <td className="text-truncate">{song.artist}</td>
          <td
            className={`text-truncate ${song.album === "Single" ? "text-secondary" : ""}`}
          >
            {song.album}
          </td>
          <td className="text-truncate">{song.genre}</td>
        </tr>
      ))}
    </>
  );
};

export default Songs;
