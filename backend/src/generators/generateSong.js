import getFaker from "../services/getFaker.js";
import likesGenerator from "./generateLikes.js";
import seedrandom from "seedrandom";
import { generateImages } from "./generateImages.js";
const generateSong = async (language, seed, index, likes) => {
  const UpperCase = (word) => word.charAt(0).toUpperCase() + word.slice(1);
  const faker = getFaker(language);
  faker.seed(Number(BigInt.asUintN(32, BigInt(seed) + BigInt(index))));

  const rng = seedrandom(seed - index);

  const artist = faker.person.fullName();

  const album = faker.helpers.arrayElement([
    UpperCase(faker.word.noun()),
    UpperCase(faker.word.sample()),
    UpperCase(faker.word.sample()),
    UpperCase(faker.word.sample()),
    "Single",
  ]);
  const image = await generateImages(index, album, artist);
  return {
    index,
    artist,
    songName: `${UpperCase(
      faker.word.adjective(),
    )} ${UpperCase(faker.word.noun())}`,
    genre: UpperCase(faker.word.words(1)),
    album,
    likes: likesGenerator(likes, rng),
    year: faker.number.int({ min: 1980, max: 2026 }),
    image,
  };
};

export default generateSong;
