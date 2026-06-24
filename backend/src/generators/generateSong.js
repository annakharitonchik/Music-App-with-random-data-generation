import getFaker from "../services/getFaker.js";
import likesGenerator from "./generateLikes.js";
import seedrandom from "seedrandom";
import { generateImages } from "./generateImages.js";
const generateSong = async (language, seed, index, likes) => {
  const UpperCase = (word) => word.charAt(0).toUpperCase() + word.slice(1);
  const faker = getFaker(language);
  faker.seed(Number(BigInt.asUintN(32, BigInt(seed) + BigInt(index))));

  const rng = seedrandom(seed - index);

  const songName = `${UpperCase(faker.word.adjective())} ${UpperCase(
    faker.word.noun(),
  )}`;
  return {
    index,
    artist: faker.person.fullName(),
    songName,
    genre: UpperCase(faker.word.words(1)),
    album: faker.helpers.arrayElement([
      UpperCase(faker.word.noun()),
      UpperCase(faker.word.sample()),
      UpperCase(faker.word.sample()),
      UpperCase(faker.word.sample()),
      "Single",
    ]),
    likes: likesGenerator(likes, rng),
    year: faker.number.int({ min: 1980, max: 2026 }),
    image: generateImages(songName),
  };
};

export default generateSong;
