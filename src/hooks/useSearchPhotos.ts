import { usePaginatedQuery } from 'react-query';

// Types
import { ImagesState } from '../types/images';

// API
import unsplash from '../api/unsplash';

// Utilities
import { get } from 'lodash';

export const useSearchPhotos = (keyword: string, page = 0): ImagesState => {
  const {
    status: paginationStatus,
    resolvedData,
    error: paginationError,
  } = usePaginatedQuery(['imagesPaginated', keyword, page], fetchImage);
  const maxPages = get(resolvedData, 'total_pages', 0);
  const images = get(resolvedData, 'results', []);

  return { status: paginationStatus, error: paginationError, images, maxPages };
};

const fetchImage = async (key: string, keyword: string, page = 0) => {
  const { data } = await unsplash.get(`/search/photos`, {
    params: { query: keyword, page },
  });

  return data;
};
