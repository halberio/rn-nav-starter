import {gql} from '@apollo/client';

// get comment by post id🚀
export const getCommentsByCommentableQueryName = 'getCommentsByCommentable';

export const GET_COMMENTS_BY_COMMENTABLE = gql`
  query getCommentsByCommentable(
    $commentable_type: String!
    $commentable_id: String!
    $page: Int
  ) {
    getCommentsByCommentable(
      commentable_type: $commentable_type
      commentable_id: $commentable_id
      page: $page
    ) {
      paginatorInfo {
        count
        total
        hasMorePages
        currentPage
      }
      data {
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
  }
`;
