import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// sections
import { API } from '@aws-amplify/api';
import config from '../aws-exports';
import { allReading } from '../graphql/queries';
import TemperatureRealTimeGraph from '../sections/@dashboard/app/AppRealTimeTempratureGraph';
import GasRealTimeGraph from '../sections/@dashboard/app/AppRealTimeGasGraph';
import SoundRealTimeGraph from '../sections/@dashboard/app/AppRealTimeSoundGraph';
import BatteryChargeRealTimeGraph from '../sections/@dashboard/app/AppRealTimeBatteryChargeGraph';
import {
  AppWidgetSummary,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

API.configure(config);



export default function DashboardAppPage() {
  const theme = useTheme();
  const [data, setData] = useState({
    currentTemperature: 0,
    batteryVoltage: 0,
    pvVoltage: 0,
  });

  const fetchData = async () => {
    try {
      const response = await API.graphql({
        query: allReading,
        variables: {
          // <your variables, optional>
        },
      });

      const items = response.data.listIotDeviceRealtimedbs.items;

      const currentTemperature = items.length > 0 ? items[0].temperature : 0;
      const batteryVoltage = items.length > 0 ? items[0].batteryVoltage : 0;
      const pvVoltage = items.length > 0 ? items[0].solarPanelVolatge : 0;

      setData({ currentTemperature, batteryVoltage, pvVoltage });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 12000); // Fetch data every 1 minute

    return () => clearInterval(interval);
  }, []);





  return (
    <>
      <Helmet>
        <title> Dashboard</title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="PV Voltage" total={data.pvVoltage} icon={'ant-design:ElectricMeter-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Battery Voltage" total={data.batteryVoltage} color="info" icon={'ant-design:battery-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Current Temprature" total={data.currentTemperature} color="warning" icon={'ant-design:temprature-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Warnings today" total={2} color="error" icon={'ant-design:bug-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
          <TemperatureRealTimeGraph />
          </Grid>

          
          <Grid item xs={12} md={6} lg={6}>
          <GasRealTimeGraph />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
          <SoundRealTimeGraph />
          </Grid>
          
          <Grid item xs={12} md={6} lg={6}>
          <BatteryChargeRealTimeGraph />
          </Grid>


        
        
        </Grid>
      </Container>
    </>
  );
}
