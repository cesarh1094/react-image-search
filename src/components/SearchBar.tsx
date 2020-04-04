import React, { useState, FC, FormEvent, ChangeEvent } from 'react';
import Aux from './aux';

interface SearchBarProps {
  onSubmit(search: string): void;
}

const SearchBar: FC<SearchBarProps> = props => {
  const [search, setSearch] = useState('');
  const { onSubmit } = props;

  const onInputChange = (event: ChangeEvent) => setSearch((event.target as HTMLInputElement).value);

  const onFormSubmit = (event: FormEvent) => {
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
