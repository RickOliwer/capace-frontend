import Image from 'next/image';

/**
 * handle next/image component, if user did not add image in back end return null
 * @param {*} param0 
 * @returns string
 */
const HandleImage = ({ imgSrc, imgLayout, imgObjectFit, imgAlt, imgWidth, imgHeight, priority }) => {
  if (!imgSrc) {
    return null;
  } else {
    return (
      <Image
        src={imgSrc}
        layout={imgLayout}
        objectFit={imgObjectFit}
        width={imgWidth}
        height={imgHeight}
        alt={imgAlt}
        priority={priority ? true : false}
      />
    );
  }
};

export default HandleImage;