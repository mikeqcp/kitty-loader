import readImgSize from 'image-size';
export const raw = true;

function getSize(value) {
  if (Array.isArray(value)) {
    const min = value[0];
    const max = value[1];

    return Math.floor(Math.random() * (max - min) + min);
  } else {
    return value;
  }
}

export default function(content) {
  const {greyscale, width, height} = this.query;

  let imgSize;
  if (!width || !height) {
    imgSize = readImgSize(content);
  }

  return `http://placekitten.com${greyscale ? '/g' : ''}/${getSize(width || imgSize.width)}/${getSize(height || imgSize.height)}`;
}
