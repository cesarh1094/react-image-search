import { useState, useEffect } from 'react';

// API
import unsplash from '../api/unsplash';

// Utilities
import { get } from 'lodash';
import { handle } from '../utils';

export const useSearchPhotos = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const retrieveImages = async () => {
      const [response, error] = await handle(
        unsplash.get(`/search/photos`, {
          params: { query: 'cars' },
        })
      );

      if (error) {
        console.error(error);
        return;
      }

      const images = get(response, ['data', 'results'], []);
      setImages(images);
    };

    retrieveImages();
  }, []);

  return [images, setImages];
};
