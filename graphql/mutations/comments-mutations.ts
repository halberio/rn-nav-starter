import {gql} from '@apollo/client';

// add comment 🌔
export const createCommentMutationName = 'createComment';

export const CREATE_COMMENT = gql`
  mutation createComment(
    $comment: String!
    $commentable_type: String!
    $commentable_id: String!
    $hashtags: [String!]
    $tags: [String!]
  ) {
    createComment(
      comment: $comment
      commentable_type: $commentable_type
      commentable_id: $commentable_id
      hashtags: $hashtags
      tags: $tags
    ) {
      id
      comment
      model
      commenter_id
      commenter_type
      commentable_id
      commentable_type
      comments_count
      created_at
      commenter {
        ... on User {
          id
          avatar
          username
          name
          setting {
            id
            private_profile
            anonymous_profile
            get_public_content
            dark_mode
          }
        }
      }
      user_commenter {
        avatar
        username
        name
      }
    }
  }
`;

// delete comment 🌔
export const deleteCommentMutationName = 'deleteComment';

export const DELETE_COMMENT = gql`
  mutation deleteComment($id: ID!) {
    deleteComment(id: $id)
  }
`;

// update comment 🌔
export const updateCommentMutationName = 'updateComment';

export const UPDATE_COMMENT = gql`
  mutation updateComment(
    $comment: String
    $id: ID!
    $hashtags: [String!]
    $tags: [String!]
  ) {
    updateComment(
      comment: $comment
      id: $id
      hashtags: $hashtags
      tags: $tags
    ) {
      id
      comment
      commenter_id
      commenter_type
      commentable_id
      commentable_type
      comments_count
      model
      created_at
      updated_at
    }
  }
`;
