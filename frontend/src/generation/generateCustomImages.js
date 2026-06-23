export const generateCustomImages = (imageUrl, artist, album) => {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 300;

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      ctx.drawImage(img, 0, 0, 300, 300);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      let r = 0;
      let g = 0;
      let b = 0;
      let count = 0;

      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
        count++;
      }

      r = Math.round(r / count);
      g = Math.round(g / count);
      b = Math.round(b / count);

      ctx.fillStyle = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "bold 40px Arial";

      const startYAlbum = 70;
      const lineHeightAlbum = 50;
      const maxWidthAlbum = 260;
      let lineAlbum = "";
      const linesAlbum = [];
      const wordsAlbum = album.split(" ");

      for (const word of wordsAlbum) {
        const testLineAlbum = lineAlbum + word + " ";

        if (ctx.measureText(testLineAlbum).width > maxWidthAlbum && lineAlbum) {
          linesAlbum.push(lineAlbum.trim());
          lineAlbum = word + " ";
        } else {
          lineAlbum = testLineAlbum;
        }
      }

      linesAlbum.push(lineAlbum.trim());

      const totalHeightAlbum = linesAlbum.length * lineHeightAlbum;
      const firstLineYAlbum = startYAlbum - totalHeightAlbum / 2;

      linesAlbum.forEach((text, index) => {
        ctx.fillText(
          text,
          canvas.width / 2,
          firstLineYAlbum + index * lineHeightAlbum,
        );
      });

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "bold 40px Arial";
      const startY = 260;
      const lineHeight = 50;
      const maxWidth = 260;
      let line = "";
      const lines = [];
      const words = artist.split(" ");

      for (const word of words) {
        const testLine = line + word + " ";

        if (ctx.measureText(testLine).width > maxWidth && line) {
          lines.push(line.trim());
          line = word + " ";
        } else {
          line = testLine;
        }
      }

      lines.push(line.trim());

      const totalHeight = lines.length * lineHeight;
      const firstLineY = startY - totalHeight / 2;

      lines.forEach((text, index) => {
        ctx.fillText(text, canvas.width / 2, firstLineY + index * lineHeight);
      });
      resolve(canvas.toDataURL("image/png"));
    };

    img.src = imageUrl;
  });
};
