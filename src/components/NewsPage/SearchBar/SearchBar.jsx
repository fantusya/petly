import React, { useState } from 'react';
// import { useFetchingData } from 'hooks/useFetchingData';
import {
  SearchBarContainer,
  SearchInput,
  SearchIconContainer,
  ResetIconContainer,
  ResetIcon,
  SearchIcon,
  SearchButton,
} from './SearchBar.styled';

const SearchBar = ({ setNews }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);

  const handleSearch = event => {
    // ЛОГІКУ фільтрування та сортування ВИКОНУЄ Міша!!!!!!!!!!!
    // ДОДAСТЬ після мержа гілки!!!!!!!!!!!!!!
    event.preventDefault();
    //  const [news, setNews] = useState([]);
    //  const { status, results } = useFetchingData(1, 'api/news');
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
    <SearchBarContainer>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={handleSearchInputChange}
        placeholder="Search"
      />
      <SearchButton onClick={handleSearch}>
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
      </SearchButton>
      {!isSearchEmpty && (
        <ResetIconContainer onClick={handleResetSearch}>
          <ResetIcon />
        </ResetIconContainer>
      )}
    </SearchBarContainer>
  );
};

export default SearchBar;
