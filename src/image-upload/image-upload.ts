export const imageUpload = () => {
  const input = document.getElementById("image-upload")! as HTMLInputElement;
  const image = document.getElementById("image")!;

  const validImageTypes = [
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/png",
    "image/tiff",
    "image/webp",
  ];

  if (image.firstChild) {
    image.removeChild(image.firstChild);
  }

  const curFiles = input.files;
  if (curFiles && curFiles.length !== 0) {
    const file = curFiles[0];

    if (validImageTypes.includes(file.type)) {
      const imageUpload: HTMLImageElement = document.createElement("img");
      imageUpload.src = URL.createObjectURL(file);
      imageUpload.alt = imageUpload.title = file.name;
      image.appendChild(imageUpload);
    }
  }
};
