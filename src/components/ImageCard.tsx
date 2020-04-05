import React, { FC } from 'react';

// Types
import { ImageCardProps } from '../types/images';

const ImageCard: FC<ImageCardProps> = (props) => {
  const { image } = props;
  const { alt_description, urls, id, links } = image;
  const { download } = links;

  return (
    <div className="image" data-id={id}>
      <a href={download} target="_blank" rel="noopener noreferrer" className="image-download">
        <img src={urls.regular} alt={alt_description} loading="lazy" />
      </a>
    </div>
  );
};

export default ImageCard;
