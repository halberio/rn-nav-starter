import {gql} from '@apollo/client';

// create issue ⚠️
export const createIssueMutationName = 'createIssue';

export const CREATE_ISSUE = gql`
  mutation createIssue(
    $name: String!
    $subject: String!
    $description: String!
  ) {
    createIssue(name: $name, subject: $subject, description: $description) {
      id
    }
  }
`;
