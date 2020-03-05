import React from 'react';

// API
import unsplash from './api/unsplash';

// Components
import Aux from './components/Aux';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

// Custom Hooks
import { useSearchPhotos } from './services/hooks';

// Utilities
import { get } from 'lodash';

// Styles
import './App.css';

// Logo
import { ReactComponent as Logo } from './logo.svg';

const App = () => {
  const [images, setImages] = useSearchPhotos();

  const onSearchSubmit = async search => {
    const response = await unsplash.get(`/search/photos`, {
      params: { query: search },
    });

    const images = get(response, ['data', 'results'], []);
    setImages(images);
  };

  return (
    <Aux>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
      <div className="wrapper">
        <footer>
          <p>Powered By:</p>
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <Logo className="logo" alt="React" />
          </a>
        </footer>
      </div>
    </Aux>
  );
};

export default App;
