import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { search } from 'redux/notices/slice';
import {
  SearchBarForm,
  SearchInput,
  SearchIconContainer,
  ResetIconContainer,
  ResetIcon,
  SearchIcon,
  SearchButton,
} from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);

  const location = useLocation();
  const currentPage = location.pathname.split('/')[1];
  const dispatch = useDispatch();

  const handleSearch = event => {
    event.preventDefault();

    onSubmit(searchTerm);
    if (currentPage === 'notices') {
      dispatch(search(searchTerm));
    }

    setSearchTerm(searchTerm);
  };

  const handleResetSearch = () => {
    setSearchTerm('');
    setIsSearchEmpty(true);
    onSubmit('');
  };

  const handleSearchInputChange = event => {
    setSearchTerm(event.target.value);
    setIsSearchEmpty(event.target.value === '');
  };

  return (
    <SearchBarForm onSubmit={handleSearch}>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={handleSearchInputChange}
        placeholder="Search"
      />
      <SearchButton type="submit">
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
      </SearchButton>
      {!isSearchEmpty && (
        <ResetIconContainer onClick={handleResetSearch}>
          <ResetIcon />
        </ResetIconContainer>
      )}
    </SearchBarForm>
  );
};

export default SearchBar;
