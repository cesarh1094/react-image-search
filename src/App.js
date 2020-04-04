import React, { useState } from 'react';

// Components
import Aux from './components/aux';
import SearchBar from './components/search-bar';
import ImageList from './components/image-list';

// Custom Hooks
import { useSearchPhotosReducer } from './hooks/search-photos';

// Styles
import './App.css';

// Logo
import { ReactComponent as Logo } from './logo.svg';
import Status from './components/status';

const App = () => {
  const [search, setSearch] = useState('cars');
  const [state] = useSearchPhotosReducer(search);
  const { images, status } = state;
  const onSearchSubmit = search => setSearch(search);

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
            <Logo className="logo" alt="React" />
          </a>
        </footer>
      </div>
    </Aux>
  );
};

export default App;
