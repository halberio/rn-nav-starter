import {gql} from '@apollo/client';

// get my notifications🚀
export const getMyNotificationsQueryName = 'getMyNotifications';

export const GET_MY_NOTIFICATIONS = gql`
  query getMyNotifications($page: Int, $keywords: [String]) {
    getMyNotifications(page: $page, keywords: $keywords) {
      paginatorInfo {
        count
        total
        hasMorePages
        currentPage
      }
      data {
        id
        type
        notifiable_type
        notifiable_id
        data
        read_at
        created_at
        updated_at
      }
    }
  }
`;

// get my notifications🚀
export const getMyUnReadNotificationsCountQueryName =
  'getMyUnReadNotificationsCount';

export const GET_MY_UN_READ_NOTIFICATIONS_COUNT = gql`
  query getMyUnReadNotificationsCount {
    getMyUnReadNotificationsCount
  }
`;
