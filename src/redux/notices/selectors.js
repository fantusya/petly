// import { createSelector } from '@reduxjs/toolkit';

export const selectOwnNotices = state => state.notices.ownNotices;

export const selectFavoriteNotices = state => state.notices.favoriteNotices;

export const selectIsLoading = state => state.notices.isLoading;

export const selectError = state => state.notices.error;

// export const selectFilter = state => state.filter;

export const selectQuery = state => state.notices.searchQuery;

// export const selectVisibleContacts = state => {
//   const contacts = selectContacts(state);
//   const filterValue = selectFilter(state);

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filterValue.toLowerCase())
//   );
// };

// M E M O I Z E D
// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filterValue) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filterValue.toLowerCase())
//     );
//   }
// );
