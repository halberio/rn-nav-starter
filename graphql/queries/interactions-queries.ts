import {gql} from '@apollo/client';

// get getUpVotesByPost
export const getUpVotesByPostQueryName = 'getUpVotesByPost';

export const GET_UP_VOTES_BY_POST = gql`
  query getUpVotesByPost($post_id: String!, $first: Int, $page: Int) {
    getUpVotesByPost(post_id: $post_id, first: $first, page: $page) {
      paginatorInfo {
        count
        total
        hasMorePages
        currentPage
      }
      data {
        id
        up_voter_id
        up_voter_type
        voter {
          ... on User {
            name
            username
            avatar
            following_waiting
            follower_waiting
            location
            blocked
            followed
            following
            setting {
              private_profile
              anonymous_profile
            }
          }

          ... on Visitor {
            id
            user_agent
          }
        }
      }
    }
  }
`;

// get getDownVotesByPost
export const getDownVotesByPostQueryName = 'getDownVotesByPost';

export const GET_DOWN_VOTES_BY_POST = gql`
  query getDownVotesByPost($post_id: String!, $first: Int, $page: Int) {
    getDownVotesByPost(post_id: $post_id, first: $first, page: $page) {
      paginatorInfo {
        count
        total
        hasMorePages
        currentPage
      }

      data {
        id
        voter {
          ... on User {
            name
            username
            avatar
            following_waiting
            follower_waiting
            location
            blocked
            followed
            following
            setting {
              private_profile
              anonymous_profile
            }
          }

          ... on Visitor {
            id
            user_agent
          }
        }
      }
    }
  }
`;

// get supports
export const getSupportsByPostQueryName = 'getSupportsByPost';

export const GET_SUPPORTS_BY_POST = gql`
  query getSupportsByPost($post_id: String!, $first: Int, $page: Int) {
    getSupportsByPost(post_id: $post_id, first: $first, page: $page) {
      paginatorInfo {
        count
        total
        hasMorePages
        currentPage
      }

      data {
        id
        name
        username
        avatar
        location
        following_waiting
        follower_waiting
        blocked
        followed
        following
        setting {
          private_profile
          anonymous_profile
        }
      }
    }
  }
`;
