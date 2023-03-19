import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import {
  SearchBarContainer,
  SearchInput,
  SearchIconContainer,
  ResetIconContainer,
  ResetIcon,
} from './SearchBar.styled';

const SearchBar = ({ setNews }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);

  const handleSearch = event => {
    event.preventDefault();
    axios
      .get('https://newsapi.org/v2/everything', {
        params: {
          q: searchTerm,
          apiKey: '83133a4f0221416bbbf3ca7f6aacf757',
        },
      })
      .then(response => setNews(response.data.articles.slice(0, 6)))
      .catch(error => console.log(error));
  };

  const handleResetSearch = () => {
    setSearchTerm('');
    setIsSearchEmpty(true);
    setNews([]);
  };

  const handleSearchInputChange = event => {
    setSearchTerm(event.target.value);
    setIsSearchEmpty(event.target.value === '');
  };

  return (
    <SearchBarContainer onSubmit={handleSearch}>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={handleSearchInputChange}
        placeholder="Search news"
      />
      {isSearchEmpty && (
        <SearchIconContainer>
          <FaSearch />
        </SearchIconContainer>
      )}
      {!isSearchEmpty && (
        <ResetIconContainer onClick={handleResetSearch}>
          <ResetIcon />
        </ResetIconContainer>
      )}
      <button type="submit">Search</button>
    </SearchBarContainer>
  );
};

export default SearchBar;
