import React, { FC } from 'react';

// Types
import { ImageListProps } from '../types/images';

// Components
import Aux from './Aux';
import ImageCard from './ImageCard';

const ImageList: FC<ImageListProps> = (props) => {
  const { images } = props;

  const imageCards = images.map(({ id, alt_description, urls, links }) => (
    <ImageCard image={{ alt_description, urls, id, links }} key={id} />
  ));

  return <Aux className="images">{imageCards}</Aux>;
};

export default ImageList;
