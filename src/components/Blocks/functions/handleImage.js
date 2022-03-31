import Image from 'next/image';

const HandleImage = ({ imgSrc, imgLayout, imgObjectFit, imgAlt, priority }) => {
  if (!imgSrc) {
    return null;
  } else {
    return (
      <Image
        src={imgSrc}
        layout={imgLayout}
        objectFit={imgObjectFit}
        alt={imgAlt}
        priority={priority ? true : false}
      />
    );
  }
};

export default HandleImage;