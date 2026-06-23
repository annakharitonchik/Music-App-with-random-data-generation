import generateSong from "../generators/generateSong.js";

const loadSongs = async (language, page, quantity, seed, likes) => {
  const songs = [];

  let start = quantity * (page - 1) + 1;

  for (let index = start; index < start + quantity; index++) {
    songs.push(await generateSong(language, seed, index, likes));
  }
  return songs;
};

export default loadSongs;
