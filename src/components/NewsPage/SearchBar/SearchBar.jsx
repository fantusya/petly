import React, { useState } from 'react';
// import { useFetchingData } from 'hooks/useFetchingData';
import {
  SearchBarContainer,
  SearchInput,
  SearchIconContainer,
  ResetIconContainer,
  ResetIcon,
  SearchIcon,
} from './SearchBar.styled';

const SearchBar = ({ setNews }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);

  const handleSearch = event => {
    event.preventDefault();

    if (searchTerm.trim() === '') {
      console.log('введіть пошуковий запит');
      setNews(searchTerm);
      return;
    }
    setNews(searchTerm);
    setSearchTerm(searchTerm);
  };

  const handleSearchButtonClick = () => {
    setNews(searchTerm);
  };

  const handleResetSearch = () => {
    setSearchTerm('');
    setIsSearchEmpty(true);
    setNews('');
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
        placeholder="Search"
      />

      <SearchIconContainer onClick={handleSearchButtonClick}>
        <SearchIcon />
      </SearchIconContainer>

      {!isSearchEmpty && (
        <ResetIconContainer onClick={handleResetSearch}>
          <ResetIcon />
        </ResetIconContainer>
      )}
    </SearchBarContainer>
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
