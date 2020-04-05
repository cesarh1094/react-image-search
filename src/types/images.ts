export interface ImagesState {
  status: null | any;
  error: null | any;
  images: [];
}

export interface ImagesAction {
  type: string;
  payload?: any;
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
