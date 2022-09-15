import {gql} from '@apollo/client';

// check if user is logged in or not 🚀
export const meQueryName = 'me';

export const ME = gql`
  query me {
    me {
      id
      phone
      email
      name
      username
      birthdate
      avatar
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
      following_waiting
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
      notification_setting {
        id
        mute_all
        whistleblowing
        alert
        comments
        ups_downs
        supports
        views
        ireveal
      }
    }
  }
`;

// check if the account is present 🌔
export const isAccountPresentQueryName = 'isAccountPresent';

export const IS_ACCOUNT_PRESENT = gql`
  query isAccountPresent($input: CheckAccountInput!) {
    isAccountPresent(input: $input)
  }
`;

// check if a code part is correct while typing 🌔
export const checkVerificationCodeNumberIndexQueryName =
  'checkVerificationCodeNumberIndex';

export const CHECK_VERIFICATION_CODE_NUMBER_INDEX = gql`
  query checkVerificationCodeNumberIndex($number: String!, $index: String!) {
    checkVerificationCodeNumberIndex(number: $number, index: $index)
  }
`;

// Verify code sent by email or sms 🌔
export const verifyCodeQueryName = 'verifyCode';

export const VERIFY_CODE = gql`
  query verifyCode($code: String!) {
    verifyCode(code: $code)
  }
`;

// get my block list 🌔
export const getMyBlocklistQueryName = 'getMyBlocklist';

export const GET_MY_BLOCK_LIST = gql`
  query getMyBlocklist {
    getMyBlocklist {
      paginatorInfo {
        count
        total
        hasMorePages
        currentPage
      }

      data {
        id
        blocked_user {
          id
          name
          username
          avatar
          following_waiting
          location
          followed
          following
          blocked
        }
      }
    }
  }
`;

// get my followers
export const getMyFollowersQueryName = 'getMyFollowers';

export const GET_MY_FOLLOWERS = gql`
  query getMyFollowers($first: Int, $page: Int) {
    getMyFollowers(first: $first, page: $page) {
      paginatorInfo {
        count
        total
        hasMorePages
        currentPage
      }

      data {
        id
        follower {
          id
          name
          username
          following_waiting
          avatar
          location
          followed
          following
        }
      }
    }
  }
`;

// get my following list
export const getMyFollowingQueryName = 'getMyFollowing';

export const GET_MY_FOLLOWING = gql`
  query getMyFollowing($first: Int, $page: Int) {
    getMyFollowing(first: $first, page: $page) {
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
          following_waiting
          avatar
          location
          followed
          following
        }
      }
    }
  }
`;

// get interests list
export const interestsQueryName = 'interests';

export const INTERESTS = gql`
  query interests($first: Int, $page: Int, $q: String) {
    interests(first: $first, page: $page, q: $q) {
      paginatorInfo {
        count
        total
        hasMorePages
        currentPage
      }

      data {
        id
        interest
      }
    }
  }
`;

// get my following list
export const getMyPendingFollowersQueryName = 'getMyPendingFollowers';

export const GET_MY_PENDING_FOLLOWERS = gql`
  query getMyPendingFollowers($first: Int, $page: Int) {
    getMyPendingFollowers(first: $first, page: $page) {
      paginatorInfo {
        count
        total
        hasMorePages
        currentPage
      }

      data {
        id
        created_at
        follower {
          id
          name
          username
          following_waiting
          avatar
          location
          followed
          following
        }
      }
    }
  }
`;

// Verify code sent by email or sms 🌔
export const userHasPasswordQueryName = 'userHasPassword';

export const USER_HAS_PASSWORD = gql`
  query userHasPassword($id: String!) {
    userHasPassword(id: $id)
  }
`;
