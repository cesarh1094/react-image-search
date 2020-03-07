const FETCHING = 'images/FETCHING';
const SUCCESS = 'images/SUCCESS';
const ERROR = 'images/ERROR';

export const fetching = () => ({ type: FETCHING });
export const success = response => ({ type: SUCCESS, payload: response });
export const error = response => ({ type: ERROR, payload: response });

export const defaultState = {
  status: null,
  error: null,
  images: [],
};

const imagesReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case FETCHING: {
      return { ...defaultState, status: type };
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
