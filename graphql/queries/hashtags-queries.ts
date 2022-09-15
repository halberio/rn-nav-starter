import {gql} from '@apollo/client';

// get hashtags with q string
export const hashtagsQueryName = 'hashtags';

export const HASHTAGS = gql`
  query hashtags($q: String) {
    hashtags(q: $q) {
      id
      hashtag
      posts_count
      comments_count
      created_at
      updated_at
    }
  }
`;

// get hashtags with q string
export const hashtagQueryName = 'hashtag';

export const HASHTAG = gql`
  query hashtag($id: String!) {
    hashtag(id: $id) {
      id
      hashtag
      posts_count
      comments_count
      created_at
      updated_at
    }
  }
`;

// get hashtags with q string
export const getPostsByHashtagNameQueryName = 'getPostsByHashtagName';

export const GET_POSTS_BY_HASHTAG_NAME = gql`
  query getPostsByHashtagName($hashtag: String!, $first: Int, $page: Int) {
    getPostsByHashtagName(hashtag: $hashtag, first: $first, page: $page) {
      paginatorInfo {
        count
        total
        hasMorePages
        currentPage
      }

      data {
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
    }
  }
`;

// get hashtags with q string
export const getHashtagByNameQueryName = 'getHashtagByName';

export const GET_HASHTAG_BY_NAME = gql`
  query getHashtagByName($hashtag: String!) {
    getHashtagByName(hashtag: $hashtag) {
      hashtag {
        id
        hashtag
        posts_count
        comments_count
        followed
        created_at
      }
      post {
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
          location
          followed
          following_waiting
          follower_waiting
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
