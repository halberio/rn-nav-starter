import {gql} from '@apollo/client';

// read notification 🌔
export const readNotificationMutationName = 'readNotification';

export const READ_NOTIFICATION = gql`
  mutation readNotification($id: String!) {
    readNotification(id: $id) {
      id
    }
  }
`;

// read all notification 🌔
export const readAllNotificationMutationName = 'readAllNotifications';

export const READ_ALL_NOTIFICATION = gql`
  mutation readAllNotifications {
    readAllNotifications
  }
`;

// read all notification 🌔
export const removeNotificationMutationName = 'removeNotification';

export const REMOVE_NOTIFICATION = gql`
  mutation removeNotification($id: String!) {
    removeNotification(id: $id)
  }
`;

// read all notification 🌔
export const removeNotificationsMutationName = 'removeNotifications';

export const REMOVE_NOTIFICATIONS = gql`
  mutation removeNotifications {
    removeNotifications
  }
`;
