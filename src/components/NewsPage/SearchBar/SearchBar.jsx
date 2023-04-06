import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { search } from 'redux/notices/slice';
import { useTranslation } from 'react-i18next';

import {
  SearchBarForm,
  SearchInput,
  SearchIconContainer,
  ResetIconContainer,
  ResetIcon,
  SearchIcon,
} from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  const { t } = useTranslation();

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

  const handleSearchButtonClick = () => {
    setSearchTerm(searchTerm);
  };

  const handleResetSearch = () => {
    setSearchTerm('');
    setIsSearchEmpty(true);
    onSubmit('');
    if (currentPage === 'notices') {
      dispatch(search(''));
    }
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
        placeholder={t('Search')}
      />

      {isSearchEmpty ? (
        <SearchIconContainer onClick={handleSearchButtonClick}>
          <SearchIcon />
        </SearchIconContainer>
      ) : (
        <ResetIconContainer onClick={handleResetSearch}>
          <ResetIcon />
        </ResetIconContainer>
      )}
    </SearchBarForm>
  );
};

export default SearchBar;

// ------------------------------------------------
// import React, { useState } from 'react';
// import {
//   SearchBarContainer,
//   SearchInput,
//   SearchIconContainer,
//   ResetIconContainer,
//   ResetIcon,
//   SearchIcon,
// } from './SearchBar.styled';

// const SearchBar = ({ setNews }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleInputChange = event => {
//     setSearchTerm(event.target.value);
//   };

//   const handleResetSearch = () => {
//     setSearchTerm('');
//     setNews('');
//   };

//   const handleSearchButtonClick = () => {
//     setNews(searchTerm);
//   };

//   const handleKeyPress = event => {
//     if (event.key === 'Enter') {
//       handleSearchButtonClick();
//     }
//   };

//   return (
//     <SearchBarContainer>
//       <SearchInput
//         type="text"
//         value={searchTerm}
//         onChange={handleInputChange}
//         onKeyPress={handleKeyPress}
//         placeholder="Search"
//       />

//       <SearchIconContainer onClick={handleSearchButtonClick}>
//         <SearchIcon />
//       </SearchIconContainer>

//       {searchTerm && (
//         <ResetIconContainer onClick={handleResetSearch}>
//           <ResetIcon />
//         </ResetIconContainer>
//       )}
//     </SearchBarContainer>
//   );
// };

// export default SearchBar;
