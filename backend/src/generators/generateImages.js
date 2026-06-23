import images from "./images/images.js";

export const generateImages = (songName) => {
  const randomNum = [...songName].reduce(
    (acc, char) => acc + char.charCodeAt(0),
    0,
  );

  return images[randomNum % images.length];
};
