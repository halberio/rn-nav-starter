import {gql} from '@apollo/client';

// get posts 🚀
export const postsQueryName = 'posts';

export const POSTS = gql`
  query posts($first: Int, $page: Int) {
    posts(first: $first, page: $page) {
      paginatorInfo {
        count
        total
        hasMorePages
        currentPage
      }

      data {
        id
        hidden
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
          hidden
          comments_count
          location
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
            name
            username
            avatar
            muted
            notified
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
        up_votes_count
        down_votes_count
        supports_count
        user {
          id
          name
          muted
          username
          avatar
          notified
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
  }
`;

// get users posts 🌔
export const postsByUserQueryName = 'postsByUser';

export const POSTS_BY_USER = gql`
  query postsByUser($first: Int, $page: Int, $user_id: String!) {
    postsByUser(first: $first, page: $page, user_id: $user_id) {
      paginatorInfo {
        count
        total
        hasMorePages
        currentPage
      }

      data {
        id
        location
        model
        supported
        mark_as
        hide_interactions
        allow_comments
        hidden
        hashtags {
          id
          hashtag
        }
        as_anonymous
        comments_count
        title
        original {
          id
          model
          hidden
          location
          comments_count
          hashtags {
            id
            hashtag
          }
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
          down_voted
          up_votes_count
          down_votes_count
          supports_count
          user {
            id
            name
            username
            muted
            notified
            avatar
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
        model
        is_support
        content
        viewed
        views_count
        created_at
        updated_at
        up_voted
        down_voted
        up_votes_count
        down_votes_count
        supports_count
        user {
          id
          name
          username
          muted
          following_waiting
          follower_waiting
          avatar
          location
          followed
          following
          setting {
            id
            private_profile
            anonymous_profile
            get_public_content
            dark_mode
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
  }
`;

// get users supported posts 🌔
export const supportedPostsByUserQueryName = 'supportedPostsByUser';

export const SUPPORTED_POSTS_BY_USER = gql`
  query supportedPostsByUser($first: Int, $page: Int, $user_id: String!) {
    supportedPostsByUser(first: $first, page: $page, user_id: $user_id) {
      paginatorInfo {
        count
        total
        hasMorePages
        currentPage
      }

      data {
        id
        mark_as
        location
        hide_interactions
        allow_comments
        as_anonymous
        title
        supported
        original {
          id
          location
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
          down_voted
          up_votes_count
          down_votes_count
          supports_count
          user {
            id
            name
            username
            avatar
            muted
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
        up_votes_count
        down_votes_count
        supports_count
        user {
          id
          name
          username
          muted
          following_waiting
          follower_waiting
          avatar
          location
          followed
          following
          setting {
            id
            private_profile
            anonymous_profile
            get_public_content
            dark_mode
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
  }
`;

// get users supported posts 🌔
export const getPostByIdQueryName = 'getPostById';

export const GET_POST_BY_ID = gql`
  query getPostById($id: String!) {
    getPostById(id: $id) {
      id
      location
      model
      supported
      mark_as
      hide_interactions
      allow_comments
      hashtags {
        id
        hashtag
      }
      as_anonymous
      comments_count
      title
      original {
        id
        model
        location
        comments_count
        hashtags {
          id
          hashtag
        }
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
        down_voted
        up_votes_count
        down_votes_count
        supports_count
        user {
          id
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
      model
      is_support
      content
      viewed
      views_count
      created_at
      updated_at
      up_voted
      down_voted
      up_votes_count
      down_votes_count
      supports_count
      user {
        id
        name
        username
        following_waiting
        muted
        follower_waiting
        avatar
        location
        followed
        following
        setting {
          id
          private_profile
          anonymous_profile
          get_public_content
          dark_mode
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
