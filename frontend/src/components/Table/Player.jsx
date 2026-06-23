import { useState, useRef } from "react";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const formatTime = (timeInSec) => {
  const minutes = Math.floor(timeInSec / 60);
  const seconds = Math.floor(timeInSec % 60);

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
};
const Player = ({ song }) => {
  const musicRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const clickPlay = () => {
    if (!musicRef.current) return;

    if (play) {
      musicRef.current.pause();
    } else {
      musicRef.current.play();
    }

    setPlay((prev) => !prev);
  };
  const updateTime = () => {
    const audio = musicRef.current;

    if (!audio) return;

    setTime(audio.currentTime);
  };
  const trackTime = (e) => {
    const audio = musicRef.current;

    if (!audio || !duration) return;

    const value = Number(e.target.value);

    audio.currentTime = (value / 100) * duration;
  };
  return (
    <div className="d-flex align-items-center gap-3">
      <button
        className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: "25px", height: "25px" }}
        onClick={clickPlay}
      >
        <FontAwesomeIcon
          className="text-white"
          icon={play ? faPause : faPlay}
          size="xs"
        />
      </button>

      <input
        type="range"
        min="0"
        max="100"
        value={duration ? (time / duration) * 100 : 0}
        onChange={trackTime}
        className="flex-grow-1 form-range"
      />

      <span
        className="rounded-5 d-flex justify-content-center  px-2 text-white
        fw-semibold"
        style={{
          backgroundColor: "#c4c4c4",
          paddingBottom: "1px",
          fontSize: "12px",
        }}
      >
        {formatTime(time)}
      </span>

      <audio
        ref={musicRef}
        src="https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"
        // {song.audioUrl}
        onTimeUpdate={updateTime}
        onLoadedMetadata={() => {
          setDuration(musicRef.current?.duration || 0);
        }}
        onEnded={() => setPlay(false)}
      />
    </div>
  );
};
export default Player;
