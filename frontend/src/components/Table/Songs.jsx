const Songs = ({ songs }) => {
  return (
    <>
      {songs.map((song) => (
        <tr key={song.index}>
          <td>{song.index}</td>
          <td>{song.songName}</td>
          <td>{song.artist}</td>
          <td>{song.album}</td>
          <td>{song.genre}</td>
        </tr>
      ))}
    </>
  );
};

export default Songs;
