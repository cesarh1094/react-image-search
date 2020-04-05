import React, { useState } from 'react';

// Components
import Aux from './components/Aux';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import Status from './components/Status';

// Custom Hooks
import { useSearchPhotos } from './hooks/useSearchPhotos';

// Styles
import './App.css';

// Logo
import { ReactComponent as Logo } from './logo.svg';

const App = () => {
  const [search, setSearch] = useState('cars');
  const [state] = useSearchPhotos(search);
  const { images, status } = state;
  const onSearchSubmit = (search: string) => setSearch(search);

  return (
    <Aux>
      <SearchBar onSubmit={onSearchSubmit} />
      <Status {...{ status }}>
        {({ status }) => {
          if (!status) {
            return null;
          }

          const search = status.toLowerCase().search('fetching');

          if (-1 === search) {
            return null;
          }

          return <p>Loading</p>;
        }}
      </Status>
      <ImageList images={images} />
      <div className="wrapper">
        <footer>
          <p>Powered By:</p>
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <Logo className="logo" />
          </a>
        </footer>
      </div>
    </Aux>
  );
};

export default App;
