const Songs = ({ songs }) => {
  return (
    <>
      {songs.map((song) => (
        <tr key={song.index}>
          <td className="text-truncate">{song.index}</td>
          <td className="text-truncate">{song.songName}</td>
          <td className="text-truncate">{song.artist}</td>
          <td className="text-truncate">{song.album}</td>
          <td className="text-truncate">{song.genre}</td>
        </tr>
      ))}
    </>
  );
};

export default Songs;
