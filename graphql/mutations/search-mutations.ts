import {gql} from '@apollo/client';

// delete recent search item 🌔
export const deleteRecentSearchMutationName = 'deleteRecentSearch';

export const DELETE_RECENT_SEARCH = gql`
  mutation deleteRecentSearch($id: ID!) {
    deleteRecentSearch(id: $id)
  }
`;

// ClearAll 🌔
export const clearMyRecentSearchesMutationName = 'clearMyRecentSearches';

export const CLEAR_MY_RECENT_SEARCH = gql`
  mutation clearMyRecentSearches {
    clearMyRecentSearches
  }
`;
