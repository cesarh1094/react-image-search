import { useEffect, Dispatch } from 'react';

// Types
import { ImagesState } from '../types/images';

// API
import unsplash from '../api/unsplash';

// Custom Hook
import useThunkReducer from './useThunkReducer';

// Reducers
import imagesReducer, {
  defaultState,
  fetching,
  success,
  error,
} from '../reducers/images';

// Utilities
import { get } from 'lodash';
import { handle } from '../utils';
import { Action } from '../types/reducer';

export const useSearchPhotos = (keyword: string): ImagesState => {
  const [state, dispatch] = useThunkReducer(imagesReducer, defaultState);

  useEffect(() => {
    dispatch(async (dispatch: Dispatch<Action>) => {
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
    });
  }, [keyword, dispatch]);

  return state;
};
