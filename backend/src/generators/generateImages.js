import images from "./images/images.js";

export const generateImages = (index, album, artist) => {
  const image = images[index % images.length];
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 300;

    const img = new Image();

    img.onload = () => {
      ctx.drawImage(img, 0, 0, 300, 300);

      ctx.fillStyle = "white";
      ctx.font = "bold 18px Arial";
      ctx.textAlign = "center";

      // верхний текст дугой
      const text = album.toUpperCase();
      const radius = 100;

      ctx.save();
      ctx.translate(150, 150);

      for (let i = 0; i < text.length; i++) {
        const angle = (i - text.length / 2) * 0.12;

        ctx.save();
        ctx.rotate(angle);

        ctx.fillText(text[i], 0, -radius);

        ctx.restore();
      }

      ctx.restore();

      // артист снизу
      ctx.fillText(artist, 150, 270);

      resolve(canvas.toDataURL("image/png"));
    };

    img.src = image;
  });
};
