const FETCHING = 'images/FETCHING';
const SUCCESS = 'images/SUCCESS';
const ERROR = 'images/ERROR';

export const fetching = () => ({ type: FETCHING });
export const success = (response: any) => ({ type: SUCCESS, payload: response });
export const error = (response: any) => ({ type: ERROR, payload: response });

interface ImagesState {
  status: null | any;
  error: null | any;
  images: [];
}

interface ImagesAction {
  type: string;
  payload?: any;
}

export const defaultState: ImagesState = {
  status: null,
  error: null,
  images: [],
};

const imagesReducer = (state = defaultState, action: ImagesAction) => {
  const { type, payload } = action;

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
