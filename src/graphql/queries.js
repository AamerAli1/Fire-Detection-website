/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIotDeviceRealtimedb = /* GraphQL */ `
  query GetIotDeviceRealtimedb($id: String!, $timestamp: String!) {
    getIotDeviceRealtimedb(id: $id, timestamp: $timestamp) {
      id
      timestamp
      batteryCharge
      batteryVoltage
      flame
      gas
      solarPanelVolatge
      sound
      temperature
    }
  }
`;
export const tempratureReading = /* GraphQL */ `
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
        batteryCharge
        batteryVoltage
        flame
        gas
        solarPanelVolatge
        sound
        temperature
      }
      nextToken
    }
  }
`;

export const gasReading = /* GraphQL */ `
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
        batteryCharge
        batteryVoltage
        flame
        gas
        solarPanelVolatge
        sound
        temperature
      }
      nextToken
    }
  }
`;
