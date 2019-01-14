import React from 'react';
import ImageGallery from 'react-image-gallery';

const ImageViewer = props => {
  const { imagesArray, folder } = props;
  const formattedImages = imagesArray.map(image => ({
    original: require(`../database/${folder}/images/${image}`),
    thumbnail: require(`../database/${folder}/images/${image}`),
  }));
  return <ImageGallery items={formattedImages} />;
};

export default ImageViewer;
