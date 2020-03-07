import { useEffect, useReducer } from 'react';

// API
import unsplash from '../api/unsplash';

// Reducers
import imagesReducer, { defaultState, fetching, success, error } from '../reducers/images';

// Utilities
import { get } from 'lodash';
import { handle } from '../utils';

export const useSearchPhotosReducer = keyword => {
  const [state, dispatch] = useReducer(imagesReducer, defaultState);

  useEffect(() => {
    const retrieveImages = async () => {
      dispatch(fetching());

      const [response, errorResponse] = await handle(
        unsplash.get(`/search/photos`, {
          params: { query: keyword },
        })
      );

      if (errorResponse) {
        dispatch(error(errorResponse));
        return;
      }

      const images = get(response, ['data', 'results'], []);
      dispatch(success(images));
    };

    retrieveImages();
  }, [keyword]);

  return [state];
};
