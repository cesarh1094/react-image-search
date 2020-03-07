import React, { useState } from 'react';
import Aux from './aux';

const SearchBar = props => {
  const [search, setSearch] = useState('');
  const { onSubmit } = props;

  const onInputChange = event => setSearch(event.target.value);

  const onFormSubmit = event => {
    event.preventDefault();
    onSubmit(search);
  };

  return (
    <Aux className="search-wrapper">
      <form onSubmit={onFormSubmit}>
        <div className="search">
          <input type="text" value={search} onChange={onInputChange} placeholder="Search images" />
        </div>
      </form>
    </Aux>
  );
};

export default SearchBar;
