import React, { useState } from 'react';

// Components
import Aux from './components/Aux';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

// Custom Hooks
import { useSearchPhotosReducer } from './services/hooks';

// Styles
import './App.css';

// Logo
import { ReactComponent as Logo } from './logo.svg';

const App = () => {
  const [search, setSearch] = useState('cars');
  const [state] = useSearchPhotosReducer(search);
  const { images, status } = state;

  const onSearchSubmit = search => setSearch(search);

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
