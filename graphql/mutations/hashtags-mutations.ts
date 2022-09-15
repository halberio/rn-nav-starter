import {gql} from '@apollo/client';

// follow hashtag 🌔
export const followHashtagMutationName = 'followHashtag';

export const FOLLOW_HASHTAG = gql`
  mutation followHashtag($hashtag_id: String!) {
    followHashtag(hashtag_id: $hashtag_id) {
      id
      follower_id
      follower_type
      follower {
        id
      }
      followed {
        id
      }
      created_at
      updated_at
    }
  }
`;

// unfollow hashtag 🌔
export const unFollowHashtagMutationName = 'unFollowHashtag';

export const UN_FOLLOW_HASHTAG = gql`
  mutation unFollowHashtag($hashtag_id: String!) {
    unFollowHashtag(hashtag_id: $hashtag_id)
  }
`;
