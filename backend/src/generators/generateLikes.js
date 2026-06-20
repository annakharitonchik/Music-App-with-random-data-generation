import times from "./times.js";
const generateLikes = (likes, rng) => {
  return times(likes, (x) => x + 1, rng)(0);
};

export default generateLikes;
