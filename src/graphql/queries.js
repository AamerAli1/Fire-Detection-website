/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIotDeviceRealtimedb = /* GraphQL */ `
  query GetIotDeviceRealtimedb($id: String!, $timestamp: String!) {
    getIotDeviceRealtimedb(id: $id, timestamp: $timestamp) {
      id
      timestamp
    }
  }
`;
export const listIotDeviceRealtimedbs = /* GraphQL */ `
  query ListIotDeviceRealtimedbs(
    $filter: TableIotDeviceRealtimedbFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIotDeviceRealtimedbs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        timestamp
      }
      nextToken
    }
  }
`;
