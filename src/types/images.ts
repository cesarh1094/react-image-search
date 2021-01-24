export enum ImageActionTypes {
  Fetching = 'images/FETCHING',
  Success = 'images/SUCCESS',
  Error = 'images/ERROR',
}
export interface ImagesState {
  status: null | string;
  error: null | any;
  images: [];
  maxPages: number;
}

export interface ImagesFetchingAction {
  type: ImageActionTypes.Fetching;
}

export interface ImagesSuccessAction {
  type: ImageActionTypes.Success;
  payload: Image[];
}

export interface ImagesErrorAction {
  type: ImageActionTypes.Error;
  error: any;
}

export type ImagesAction =
  | ImagesFetchingAction
  | ImagesSuccessAction
  | ImagesErrorAction;

export interface Image {
  id: string | number;
  alt_description: string;
  urls: { regular: string };
  links: { download: string };
}

export interface ImageCardProps {
  image: Image;
}

export interface ImageListProps {
  images: Image[];
}
