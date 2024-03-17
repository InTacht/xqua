export const loadImages = async function () {
  try {
    return import.meta.glob("@assets/images/*");
  } catch (e) {
    return null;
  }
};

export const findImage = async (img_path: string) => {
  if (img_path.startsWith("http://") || img_path.startsWith("https://")) {
    return img_path;
  }

  if (!img_path.startsWith("@assets")) {
    return null;
  }

  const images = await loadImages();
  const key = img_path.replace("@", "/src/");

  if (images == null) {
    return null;
  }

  return await images[key]();
};
