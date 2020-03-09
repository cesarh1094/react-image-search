import React from 'react';

// Components
import Aux from './aux';
import ImageCard from './image-card';

const ImageList = props => {
  const { images } = props;

  const imageCards = images.map(({ id, alt_description, urls, links: { download } }) => (
    <ImageCard image={{ alt_description, urls, id, download }} key={id} />
  ));

  return <Aux className="images">{imageCards}</Aux>;
};

export default ImageList;