import getFaker from "../services/getFaker.js";
import likesGenerator from "./generateLikes.js";
import seedrandom from "seedrandom";

const generateSong = (language, seed, index, likes) => {
  const UpperCase = (word) => word.charAt(0).toUpperCase() + word.slice(1);
  const faker = getFaker(language);
  faker.seed(seed + index + language);

  const rng = seedrandom(seed + index);

  return {
    index,
    artist: faker.person.fullName(),
    songName: `${UpperCase(faker.word.adjective())} ${UpperCase(faker.word.noun())}`,
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
  };
};

export default generateSong;
