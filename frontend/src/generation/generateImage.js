export const generateImage = (imageUrl, title) => {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 300;

    const img = new Image();

    img.crossOrigin = "anonymous";

    img.onload = () => {
      ctx.drawImage(img, 0, 0, 300, 300);

      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(0, 220, 300, 80);

      ctx.fillStyle = "white";
      ctx.font = "bold 20px Arial";

      ctx.fillText(title, 20, 260);

      resolve(canvas.toDataURL("image/png"));
    };

    img.src = imageUrl;
  });
};
