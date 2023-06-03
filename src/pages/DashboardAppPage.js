import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// sections
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
            <AppWebsiteVisits
              title="Temprature Levels"
              chartLabels={[
                '7:35',
                '7:36',
                '7:37',
                '7:38',
                '7:39',
                '7:40',
                '7:41',
                '7:42',
                '7:43',
                '7:44',
                '7:45',
              ]}
              chartData={[
     
                {
                  name: 'Temprature Levels',
                  type: 'line',
                  fill: 'solid',
                  data: [25, 25.5, 25.5, 25.7, 26.3, 26.8, 27, 27.1, 27.3, 27.4, 27],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppWebsiteVisits
              title="Smoke Levels"
              chartLabels={[
                '7:35',
                '7:36',
                '7:37',
                '7:38',
                '7:39',
                '7:40',
                '7:41',
                '7:42',
                '7:43',
                '7:44',
                '7:45',
              ]}
              chartData={[
     
                {
                  name: 'Smoke Levels',
                  type: 'line',
                  fill: 'solid',
                  data: [20, 20.2, 20.1, 20.3, 20.4, 20.2, 20.3, 20.4, 20.3, 20.2, 20.1],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppWebsiteVisits
              title="Flame Levels"
              chartLabels={[
                '7:35',
                '7:36',
                '7:37',
                '7:38',
                '7:39',
                '7:40',
                '7:41',
                '7:42',
                '7:43',
                '7:44',
                '7:45',
              ]}
              chartData={[
     
                {
                  name: 'Flame Levels',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

       


          <Grid item xs={12} md={6} lg={6}>
            <AppWebsiteVisits
              title="Battery Voltage"
              chartLabels={[
                '7:35',
                '7:36',
                '7:37',
                '7:38',
                '7:39',
                '7:40',
                '7:41',
                '7:42',
                '7:43',
                '7:44',
                '7:45',
              ]}
              chartData={[
     
                {
                  name: 'Battery Voltage',
                  type: 'line',
                  fill: 'solid',
                  data: [17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 17],
                },
              ]}
            />
          </Grid>
          

        

        

       

       

        
        </Grid>
      </Container>
    </>
  );
}
