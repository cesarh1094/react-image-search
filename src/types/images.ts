export interface ImagesState {
  status: null | any;
  error: null | any;
  images: [];
  maxPages: number;
}

export interface ImagesAction {
  type: string;
  payload?: [];
}

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
