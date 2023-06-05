import { Helmet } from 'react-helmet-async';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// sections
import TemperatureRealTimeGraph from '../sections/@dashboard/app/AppRealTimeTempratureGraph';
import GasRealTimeGraph from '../sections/@dashboard/app/AppRealTimeGasGraph';
import {
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

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
            <AppWidgetSummary title="PV Voltage" total={60} icon={'ant-design:ElectricMeter-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Battery Voltage" total={16} color="info" icon={'ant-design:battery-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Current Temprature" total={23} color="warning" icon={'ant-design:temprature-filled'} />
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


        
        
        </Grid>
      </Container>
    </>
  );
}
