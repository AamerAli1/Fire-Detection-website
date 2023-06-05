/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateIotDeviceRealtimedb = /* GraphQL */ `
  subscription OnCreateIotDeviceRealtimedb(
    $id: String
    $timestamp: String
    $batteryCharge: Float
    $batteryVoltage: Float
    $flame: Float
  ) {
    onCreateIotDeviceRealtimedb(
      id: $id
      timestamp: $timestamp
      batteryCharge: $batteryCharge
      batteryVoltage: $batteryVoltage
      flame: $flame
    ) {
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
export const onUpdateIotDeviceRealtimedb = /* GraphQL */ `
  subscription OnUpdateIotDeviceRealtimedb(
    $id: String
    $timestamp: String
    $batteryCharge: Float
    $batteryVoltage: Float
    $flame: Float
  ) {
    onUpdateIotDeviceRealtimedb(
      id: $id
      timestamp: $timestamp
      batteryCharge: $batteryCharge
      batteryVoltage: $batteryVoltage
      flame: $flame
    ) {
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
export const onDeleteIotDeviceRealtimedb = /* GraphQL */ `
  subscription OnDeleteIotDeviceRealtimedb(
    $id: String
    $timestamp: String
    $batteryCharge: Float
    $batteryVoltage: Float
    $flame: Float
  ) {
    onDeleteIotDeviceRealtimedb(
      id: $id
      timestamp: $timestamp
      batteryCharge: $batteryCharge
      batteryVoltage: $batteryVoltage
      flame: $flame
    ) {
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
