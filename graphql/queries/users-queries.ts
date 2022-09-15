import {gql} from '@apollo/client';

//get user by username

export const getUserByUsernameQueryName = 'getUserByUsername';

export const GET_USER_BY_USERNAME = gql`
  query getUserByUsername($username: String!) {
    getUserByUsername(username: $username) {
      id
      phone
      email
      name
      username
      birthdate
      avatar
      muted
      following_waiting
      follower_waiting
      cover
      gender
      location
      biography
      website
      interests {
        id
        interest
      }
      created_at
      updated_at
      views_count
      posts_count
      followed
      following
      followers_count
      following_count
      blocked
      social_links {
        id
        type
        link
      }
      setting {
        id
        private_profile
        anonymous_profile
        get_public_content
        dark_mode
        hide_email
        hide_phone
      }
    }
  }
`;

// get user by id 🚀
export const userByIdQueryName = 'userById';

export const USER_BY_ID = gql`
  query userById($id: ID!) {
    userById(id: $id) {
      id
      phone
      email
      muted
      notified
      name
      username
      birthdate
      avatar
      following_waiting
      follower_waiting
      cover
      gender
      location
      biography
      website
      interests {
        id
        interest
      }
      created_at
      updated_at
      views_count
      posts_count
      followed
      following
      followers_count
      following_count
      blocked
      social_links {
        id
        type
        link
      }
      setting {
        id
        private_profile
        anonymous_profile
        get_public_content
        dark_mode
        hide_email
        hide_phone
      }
      recent_followers {
        id
        follower {
          id
          avatar
          username
          email
          setting {
            id
            private_profile
            anonymous_profile
            get_public_content
            dark_mode
            hide_email
            hide_phone
          }
        }
      }
    }
  }
`;

// get user followers
export const getUserFollowersQueryName = 'getUserFollowers';

export const GET_USER_FOLLOWERS = gql`
  query getUserFollowers($user_id: String!, $first: Int, $page: Int) {
    getUserFollowers(user_id: $user_id, first: $first, page: $page) {
      paginatorInfo {
        count
        total
        hasMorePages
        currentPage
      }

      data {
        follower {
          id
          muted
          name
          username
          avatar
          location
          followed
          following
        }
      }
    }
  }
`;

// get user following list
export const getUserFollowingQueryName = 'getUserFollowing';

export const GET_USER_FOLLOWING = gql`
  query getUserFollowing($user_id: String!, $first: Int, $page: Int) {
    getUserFollowing(user_id: $user_id, first: $first, page: $page) {
      paginatorInfo {
        count
        total
        hasMorePages
        currentPage
      }

      data {
        followed {
          id
          name
          username
          avatar
          location
          muted
          followed
          following
        }
      }
    }
  }
`;
