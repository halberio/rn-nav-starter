import {InMemoryCache} from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        posts: {
          keyArgs: false,
          merge(existing = {}, incoming) {
            if (
              incoming &&
              incoming.paginatorInfo &&
              existing &&
              existing.paginatorInfo &&
              incoming.paginatorInfo.currentPage <=
                existing.paginatorInfo.currentPage
            ) {
              return {
                ...existing,
                data: existing.data,
              };
            } else {
              const existingData =
                existing && existing?.data ? existing.data : [];
              const incomingData =
                incoming && incoming?.data.length > 0 ? incoming.data : [];
              return {
                ...existing,
                data: [...existingData, ...incomingData],
                ...{
                  paginatorInfo: incoming && incoming?.paginatorInfo,
                },
              };
              //done
            }
          },
        },
        postsByUser: {
          keyArgs: (vars, {variables, field}) => {
            return JSON.stringify(variables?.user_id) + JSON.stringify(field);
          },
          merge(existing = {}, incoming) {
            if (
              (existing &&
                existing.paginatorInfo &&
                !existing.paginatorInfo.hasMorePages) ||
              (incoming &&
                incoming.paginatorInfo &&
                existing &&
                existing.paginatorInfo &&
                incoming.paginatorInfo.currentPage <=
                  existing.paginatorInfo.currentPage)
            ) {
              return {
                ...existing,
                data: existing.data,
              };
            } else {
              const existingData =
                existing && existing?.data ? existing.data : [];
              const incomingData =
                incoming && incoming?.data.length > 0 ? incoming.data : [];
              return {
                ...existing,
                data: [...existingData, ...incomingData],
                ...{
                  paginatorInfo: incoming && incoming?.paginatorInfo,
                },
              };
              //done
            }
          },
        },
        supportedPostsByUser: {
          keyArgs: (vars, {variables, field}) => {
            return (
              'supported' +
              JSON.stringify(variables?.user_id) +
              JSON.stringify(field)
            );
          },
          merge(existing = {}, incoming) {
            if (
              (existing &&
                existing.paginatorInfo &&
                !existing.paginatorInfo.hasMorePages) ||
              (incoming &&
                incoming.paginatorInfo &&
                existing &&
                existing.paginatorInfo &&
                incoming.paginatorInfo.currentPage <=
                  existing.paginatorInfo.currentPage)
            ) {
              return {
                ...existing,
                data: existing.data,
              };
            } else {
              const existingData =
                existing && existing?.data ? existing.data : [];
              const incomingData =
                incoming && incoming?.data.length > 0 ? incoming.data : [];
              return {
                ...existing,
                data: [...existingData, ...incomingData],
                ...{
                  paginatorInfo: incoming && incoming?.paginatorInfo,
                },
              };
              //done
            }
          },
        },
        getCommentsByCommentable: {
          keyArgs: ['commentable_id', 'commentable_type'],
          merge(existing = {}, incoming) {
            if (
              (existing &&
                existing.paginatorInfo &&
                !existing.paginatorInfo.hasMorePages) ||
              (incoming &&
                incoming.paginatorInfo &&
                existing &&
                existing.paginatorInfo &&
                incoming.paginatorInfo.currentPage <=
                  existing.paginatorInfo.currentPage)
            ) {
              return {
                ...existing,
                data: existing.data,
              };
            } else {
              const existingData =
                existing && existing?.data ? existing.data : [];
              const incomingData =
                incoming && incoming?.data.length > 0 ? incoming.data : [];
              return {
                ...existing,
                data: [...existingData, ...incomingData],
                ...{
                  paginatorInfo: incoming && incoming?.paginatorInfo,
                },
              };
            }
          },
        },
        getMyNotifications: {
          keyArgs: ['keywords'],
          merge(existing = {}, incoming) {
            if (
              incoming &&
              incoming.paginatorInfo &&
              existing &&
              existing.paginatorInfo &&
              incoming.paginatorInfo.currentPage <=
                existing.paginatorInfo.currentPage
            ) {
              return {
                ...existing,
                __typename: existing.__typename,
                data: existing.data,
                paginatorInfo: existing.paginatorInfo,
              };
            } else {
              const existingData =
                existing && existing?.data ? existing.data : [];
              const incomingData =
                incoming && incoming?.data ? incoming.data : [];
              return {
                ...existing,
                data: [...existingData, ...incomingData],
                paginatorInfo: incoming.paginatorInfo,
              };
              //todo
            }
          },
        },
        postsMayInterestsYou: {
          keyArgs: false,
          merge(existing = {}, incoming) {
            if (
              incoming &&
              incoming.paginatorInfo &&
              existing &&
              existing.paginatorInfo &&
              incoming.paginatorInfo.currentPage <=
                existing.paginatorInfo.currentPage
            ) {
              return {
                ...existing,
                __typename: existing.__typename,
                data: existing.data,
                paginatorInfo: existing.paginatorInfo,
              };
            } else {
              const existingData =
                existing && existing?.data ? existing.data : [];
              const incomingData =
                incoming && incoming?.data ? incoming.data : [];
              return {
                ...existing,
                data: [...existingData, ...incomingData],
                paginatorInfo: incoming.paginatorInfo,
              };
              //todo
            }
          },
        },
        topReports: {
          keyArgs: false,
          merge(existing = {}, incoming) {
            if (
              incoming &&
              incoming.paginatorInfo &&
              existing &&
              existing.paginatorInfo &&
              incoming.paginatorInfo.currentPage <=
                existing.paginatorInfo.currentPage
            ) {
              return {
                ...existing,
                __typename: existing.__typename,
                data: existing.data,
                paginatorInfo: existing.paginatorInfo,
              };
            } else {
              const existingData =
                existing && existing?.data ? existing.data : [];
              const incomingData =
                incoming && incoming?.data ? incoming.data : [];
              return {
                ...existing,
                data: [...existingData, ...incomingData],
                paginatorInfo: incoming.paginatorInfo,
              };
              //todo
            }
          },
        },
      },
    },
  },
});
