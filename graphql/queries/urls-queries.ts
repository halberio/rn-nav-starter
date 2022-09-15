import {gql} from '@apollo/client';

// get comment by post id🚀
export const getPostsVideosUrlsQueryName = 'getPostsVideosUrls';

export const GET_POSTS_VIDEOS_URLS = gql`
  query getPostsVideosUrls($take: String, $skip: String) {
    getPostsVideosUrls(take: $take, skip: $skip)
  }
`;
