// Types
import { ImagesState, ImagesAction } from '../types/images';

const FETCHING = 'images/FETCHING';
const SUCCESS = 'images/SUCCESS';
const ERROR = 'images/ERROR';

export const fetching = () => ({ type: FETCHING });
export const success = (response: any) => ({
  type: SUCCESS,
  payload: response,
});
export const error = (response: any) => ({ type: ERROR, payload: response });

export const defaultState: ImagesState = {
  status: null,
  error: null,
  images: [],
  maxPages: 1,
};

const imagesReducer = (state = defaultState, action: ImagesAction) => {
  const { type, payload = [] } = action;

  switch (type) {
    case FETCHING: {
      return { ...state, status: type };
    }
    case SUCCESS: {
      return { ...state, status: type, images: payload };
    }
    case ERROR: {
      return { ...state, status: type, error: payload };
    }
    default:
      return state;
  }
};

export default imagesReducer;
