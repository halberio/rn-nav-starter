import {gql} from '@apollo/client';

// follow user 🌔
export const followMutationName = 'follow';

export const FOLLOW = gql`
  mutation follow($followed_id: String!) {
    follow(followed_id: $followed_id) {
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

// follow user 🌔
export const unFollowMutationName = 'unFollow';

export const UN_FOLLOW = gql`
  mutation unFollow($followed_id: String!) {
    unFollow(followed_id: $followed_id)
  }
`;

// block user 🌔
export const blockMutationName = 'blockUser';

export const BLOCK_USER = gql`
  mutation blockUser($user_id: String!) {
    blockUser(user_id: $user_id) {
      id
      user_id
      blocked_user_id
      user {
        id
      }
      blocked_user {
        id
      }
      created_at
      updated_at
    }
  }
`;

// unblock user 🌔
export const unBlockMutationName = 'unBlockUser';

export const UN_BLOCK_USER = gql`
  mutation unBlockUser($user_id: String!) {
    unBlockUser(user_id: $user_id) {
      id
      user_id
      blocked_user_id
      user {
        id
      }
      blocked_user {
        id
      }
      created_at
      updated_at
    }
  }
`;

// remove follow 🌔
export const removeFollowMutationName = 'removeFollow';

export const REMOVE_FOLLOW = gql`
  mutation removeFollow($id: String!) {
    removeFollow(id: $id)
  }
`;

// accept user 🌔
export const acceptFollowMutationName = 'acceptFollow';

export const ACCEPT_FOLLOW = gql`
  mutation acceptFollow($id: String!) {
    acceptFollow(id: $id) {
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

// accept user 🌔
export const rejectFollowMutationName = 'rejectFollow';

export const REJECT_FOLLOW = gql`
  mutation rejectFollow($id: String!) {
    rejectFollow(id: $id)
  }
`;

// remove follow 🌔
export const cancelFollowMutationName = 'cancelFollow';

export const CANCEL_FOLLOW = gql`
  mutation cancelFollow($user_id: String!) {
    cancelFollow(user_id: $user_id)
  }
`;

// accept user 🌔
export const acceptFollowRequestByUserIdMutationName =
  'acceptFollowRequestByUserId';

export const ACCEPT_FOLLOW_REQUEST_BY_USER_ID = gql`
  mutation acceptFollowRequestByUserId($user_id: String!) {
    acceptFollowRequestByUserId(user_id: $user_id) {
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

// accept user 🌔
export const rejectFollowRequestByUserIdMutationName =
  'rejectFollowRequestByUserId';

export const REJECT_FOLLOW_REQUEST_BY_USER_ID = gql`
  mutation rejectFollowRequestByUserId($user_id: String!) {
    rejectFollowRequestByUserId(user_id: $user_id)
  }
`;

// mute user 🌔
export const muteMutationName = 'mute';

export const MUTE = gql`
  mutation mute($user_id: String!) {
    mute(user_id: $user_id) {
      id
    }
  }
`;

// mute user 🌔
export const unMuteMutationName = 'unmute';

export const UN_MUTE = gql`
  mutation unmute($user_id: String!) {
    unmute(user_id: $user_id)
  }
`;

// notify me 🌔
export const notifyMeMutationName = 'notifyMe';

export const NOTIFY_ME = gql`
  mutation notifyMe($user_id: String!) {
    notifyMe(user_id: $user_id)
  }
`;

// unnotify me 🌔
export const unNotifyMeMutationName = 'unNotifyMe';

export const UN_NOTIFY_ME = gql`
  mutation unNotifyMe($user_id: String!) {
    unNotifyMe(user_id: $user_id)
  }
`;
