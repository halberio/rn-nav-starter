import {gql} from '@apollo/client';

// discover query
export const discoverQueryName = 'discover';

export const DISCOVER = gql`
  query discover($q: String) {
    discover(q: $q) {
      postsMayInterestsYou {
        total
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

            user {
              id
              name
              username
              avatar
              location
              followed
              following
              following_waiting
              follower_waiting
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
      topReports {
        total
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

            user {
              id
              name
              username
              avatar
              location
              followed
              following
              following_waiting
              follower_waiting
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
      popularReporters {
        total
        users {
          id
          phone
          email
          name
          username
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
          }
        }
      }
    }
  }
`;

// discover topReports🚀
export const topReportsQueryName = 'topReports';

export const TOP_REPORTS = gql`
  query topReports($page: Int) {
    topReports(page: $page) {
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

          user {
            id
            name
            following_waiting
            follower_waiting
            username
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

// discover topReports🚀
export const postsMayInterestsYouQueryName = 'postsMayInterestsYou';

export const POSTS_MAY_INTERST_YOU = gql`
  query postsMayInterestsYou($page: Int) {
    postsMayInterestsYou(page: $page) {
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

          user {
            id
            name
            username
            avatar
            location
            followed
            following
            following_waiting
            follower_waiting
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

// get discover users
export const DISCOVER_USERS = gql`
  query discoverUsers($q: String, $page: Int) {
    discoverUsers(q: $q, page: $page) {
      paginatorInfo {
        count
        total
        hasMorePages
        currentPage
      }
      data {
        id
        phone
        email
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
        setting {
          id
          private_profile
          anonymous_profile
          get_public_content
          dark_mode
        }
      }
    }
  }
`;

export const POSTS_BY_LOCATIONS = gql`
  query postsByLocations($location: String!) {
    postsByLocations(location: $location) {
      id
      location
      supported
      mark_as
      hide_interactions
      allow_comments
      as_anonymous
      title
      model
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

        user {
          id
          name
          username
          avatar
          location
          followed
          following
          following_waiting
          follower_waiting
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
`;

export const DISCOVER_POSTS = gql`
  query discoverPosts($page: Int, $q: String) {
    discoverPosts(page: $page, q: $q) {
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

          user {
            id
            name
            username
            avatar
            location
            followed
            following
            following_waiting
            follower_waiting
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

// get discover hashtags
export const DISCOVER_HASHTAGS = gql`
  query discoverHashtags($q: String, $page: Int) {
    discoverHashtags(q: $q, page: $page) {
      paginatorInfo {
        count
        total
        hasMorePages
        currentPage
      }
      data {
        id
        hashtag
        posts_count
        comments_count
        followed
        created_at
      }
    }
  }
`;
