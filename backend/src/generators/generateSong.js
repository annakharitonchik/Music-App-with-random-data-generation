import { faker } from "@faker-js/faker";
import likesGenerator from "./generateLikes.js";
import seedrandom from "seedrandom";
const generateSong = (seed, index, likes) => {
  faker.seed(seed + index);
  const rng = seedrandom(seed + index);

  return {
    index,
    artist: faker.music.artist(),
    songName: faker.music.songName(),
    genre: faker.music.genre(),
    album: faker.music.album(),
    likes: likesGenerator(likes, rng),
    year: faker.number.int({ min: 1980, max: 2026 }),
  };
};
console.log();
export default generateSong;
