import {gql} from '@apollo/client';

// report user 🌔
export const reportUserMutationName = 'reportUser';

export const REPORT_USER = gql`
  mutation reportUser(
    $user_id: String!
    $description: String
    $category: String!
  ) {
    reportUser(
      user_id: $user_id
      description: $description
      category: $category
    ) {
      id
    }
  }
`;
