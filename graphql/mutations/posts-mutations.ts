import {gql} from '@apollo/client';

// add post mutation 🌔
export const createPostMutationName = 'createPost';
export const CREATE_POST = gql`
  mutation createPost(
    $video_url: String!
    $thumbnail_url: String!
    $content: String
    $title: String
    $location: String
    $privacy: String
    $hide_interactions: Boolean
    $allow_comments: Boolean
    $as_anonymous: Boolean
    $share_on_facebook: Boolean
    $share_on_twitter: Boolean
    $mark_as: String
    $hashtags: [String!]
    $tags: [String!]
  ) {
    createPost(
      video_url: $video_url
      thumbnail_url: $thumbnail_url
      hashtags: $hashtags
      tags: $tags
      content: $content
      title: $title
      location: $location
      privacy: $privacy
      hide_interactions: $hide_interactions
      allow_comments: $allow_comments
      as_anonymous: $as_anonymous
      share_on_facebook: $share_on_facebook
      share_on_twitter: $share_on_twitter
      mark_as: $mark_as
    ) {
      id
      location
      supported
      mark_as
      hide_interactions
      allow_comments
      as_anonymous
      title
      model
      hashtags {
        id
        hashtag
      }
      comments_count
      original {
        id
        model
        comments_count
        location
        hidden
        mark_as
        hide_interactions
        allow_comments
        as_anonymous
        title
        is_support
        content
        viewed
        views_count
        created_at
        updated_at
        up_voted
        supported
        down_voted
        up_votes_count
        down_votes_count
        supports_count
        hashtags {
          id
          hashtag
        }
        user {
          id
          notified
          name
          username
          avatar
          muted
          following_waiting
          follower_waiting
          location
          followed
          following
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
        medias {
          type
          mediable {
            ... on Video {
              id
              url
              thumbnail_url
              sensitive
            }

            ... on Image {
              id
              url
              thumbnail
              sensitive
            }
          }
        }
      }

      is_support
      content
      viewed
      views_count
      created_at
      updated_at
      up_voted
      down_voted
      hidden
      up_votes_count
      down_votes_count
      supports_count
      user {
        id
        name
        notified
        muted
        username
        avatar
        location
        following_waiting
        follower_waiting
        followed
        following
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
      medias {
        type
        mediable {
          ... on Video {
            id
            url
            thumbnail_url
            sensitive
          }

          ... on Image {
            id
            url
            thumbnail
            sensitive
          }
        }
      }
    }
  }
`;

// up vote 🌔
export const syncUpVotePostMutationName = 'syncUpVotePost';

export const SYNC_UP_VOTE_POST = gql`
  mutation syncUpVotePost($id: String!) {
    syncUpVotePost(id: $id) {
      id
      original {
        id
        views_count
        up_voted
        down_voted
        up_votes_count
        down_votes_count
        supports_count
      }
      views_count
      up_voted
      down_voted
      up_votes_count
      down_votes_count
      supports_count
    }
  }
`;

// down vote 🌔
export const syncDownVotePostMutationName = 'syncDownVotePost';

export const SYNC_DOWN_VOTE_POST = gql`
  mutation syncDownVotePost($id: String!) {
    syncDownVotePost(id: $id) {
      id
      original {
        id
        views_count
        up_voted
        down_voted
        up_votes_count
        down_votes_count
        supports_count
      }
      views_count
      up_voted
      down_voted
      up_votes_count
      down_votes_count
      supports_count
    }
  }
`;

// down vote 🌔
export const viewPostMutationName = 'viewPost';

export const VIEW_POST = gql`
  mutation viewPost($post_id: String!) {
    viewPost(post_id: $post_id) {
      id
    }
  }
`;

// support post 🌔
export const supportPostMutationName = 'supportPost';

export const SUPPORT_POST = gql`
  mutation supportPost(
    $post_id: String!
    $content: String
    $hashtags: [String!]
  ) {
    supportPost(post_id: $post_id, content: $content, hashtags: $hashtags) {
      id
    }
  }
`;

// unsupport post 🌔
export const unSupportPostMutationName = 'unSupportPost';

export const UN_SUPPORT_POST = gql`
  mutation unSupportPost($id: String!) {
    unSupportPost(id: $id)
  }
`;

// update post mutation 🌔
export const updatePostMutationName = 'updatePost';
export const UPDATE_POST = gql`
  mutation updatePost($id: String!, $input: PostInput!) {
    updatePost(id: $id, input: $input) {
      id
    }
  }
`;

// remove Post 🌔
export const removePostMutationName = 'removePost';

export const REMOVE_POST = gql`
  mutation removePost($id: String!) {
    removePost(id: $id)
  }
`;

// hide post 🌔
export const hidePostMutationName = 'hidePost';

export const HIDE_POST = gql`
  mutation hidePost($id: String!) {
    hidePost(id: $id) {
      id
    }
  }
`;

// unhide post 🌔
export const unHidePostMutationName = 'hidePost';

export const UN_HIDE_POST = gql`
  mutation unHidePost($id: String!) {
    unHidePost(id: $id)
  }
`;
