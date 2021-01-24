// Types
import {
  ImagesState,
  ImagesAction,
  ImagesErrorAction,
  ImagesSuccessAction,
  ImagesFetchingAction,
  ImageActionTypes,
} from '../types/images';

export const fetching = (): ImagesFetchingAction => ({
  type: ImageActionTypes.Fetching,
});

export const success = (response: any): ImagesSuccessAction => ({
  type: ImageActionTypes.Success,
  payload: response,
});

export const error = (response: any): ImagesErrorAction => ({
  type: ImageActionTypes.Error,
  error: response,
});

export const defaultState: ImagesState = {
  status: null,
  error: null,
  images: [],
  maxPages: 1,
};

const imagesReducer = (state: ImagesState, action: ImagesAction) => {
  switch (action.type) {
    case ImageActionTypes.Fetching: {
      return { ...state, status: action.type };
    }
    case ImageActionTypes.Success: {
      const { payload } = action;

      return { ...state, status: action.type, images: payload };
    }
    case ImageActionTypes.Error: {
      const { error } = action;

      return { ...state, status: action.type, error };
    }
    default:
      return state;
  }
};

export default imagesReducer;
