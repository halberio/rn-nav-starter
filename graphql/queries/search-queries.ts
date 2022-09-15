import {gql} from '@apollo/client';

// search
export const searchQueryName = 'search';

export const SEARCH = gql`
  query search($q: String) {
    search(q: $q) {
      users {
        id
        avatar
        name
        username
        email
        created_at
        muted
        location
        following_waiting
        follower_waiting
        followed
        following
      }
      posts {
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
            avatar
            muted
            following_waiting
            follower_waiting
            location
            followed
            following
            setting {
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
        up_votes_count
        down_votes_count
        supports_count
        user {
          id
          name
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
      locations {
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
        up_votes_count
        down_votes_count
        supports_count
        user {
          id
          name
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
      hashtags {
        id
        hashtag
        created_at
      }
    }
  }
`;

// search
export const myRecentSearchesQueryName = 'myRecentSearches';

export const MY_RECENT_SEARCHES = gql`
  query myRecentSearches($q: String) {
    myRecentSearches(q: $q) {
      id
      user_id
      query
      user {
        id
        setting {
          id
          private_profile
          anonymous_profile
          get_public_content
          dark_mode
        }
      }
      is_mine
      created_at
    }
  }
`;

// all users search
export const AllRecentSearchesQueryName = 'allRecentSearches';

export const ALL_RECENT_SEARCHES = gql`
  query allRecentSearches($q: String) {
    allRecentSearches(q: $q) {
      id
      user_id
      query
      user {
        id
        followed
        blocked
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
      is_mine
      created_at
    }
  }
`;
