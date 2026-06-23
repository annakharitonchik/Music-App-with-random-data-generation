import images from "./images/images.js";

export const generateImages = (index) => {
  return images[index % images.length];
};
