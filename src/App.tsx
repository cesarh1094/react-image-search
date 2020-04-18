import React, { useState } from 'react';

// Components
import Aux from './components/Aux';
import SearchBar from './components/SearchBar/SearchBar';
import ImageList from './components/ImageList';
import PageControls from './components/PageControls/PageControls';
import { ThemeContextProvider } from './context/ThemeContext/ThemeContext';
import ToggleTheme from './components/ToggleTheme';
import Status from './components/Status';

// Custom Hooks
import { useSearchPhotos } from './hooks/useSearchPhotos';

// Utilities
import { isEmpty } from 'lodash';

// Styles
import './App.css';

// Logo
import { ReactComponent as Logo } from './logo.svg';

const App = () => {
  const [search, setSearch] = useState('cars');
  const [page, setPage] = useState(1);
  const imagesState = useSearchPhotos(search, page);
  const { images, status, maxPages } = imagesState;

  const onSearchSubmit = (search: string) => {
    setSearch(isEmpty(search) ? 'cars' : search);
    setPage(1);
  };

  return (
    <ThemeContextProvider>
      <Aux>
        <ToggleTheme />
        <SearchBar onSubmit={onSearchSubmit} />
        <PageControls
          currentPage={page}
          maxPage={maxPages}
          setCurrentPage={setPage}
        />
        <Status {...{ status }}>
          {({ status }) => {
            if (!status) {
              return null;
            }

            const search = status.toLowerCase().search('loading');

            if (-1 === search) {
              return null;
            }

            return <p>Loading</p>;
          }}
        </Status>
        <ImageList images={images} />
        <PageControls
          currentPage={page}
          maxPage={maxPages}
          setCurrentPage={setPage}
        />
        <div className="wrapper">
          <footer>
            <p>Powered By:</p>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer">
              <Logo className="logo" />
            </a>
          </footer>
        </div>
      </Aux>
    </ThemeContextProvider>
  );
};

export default App;
