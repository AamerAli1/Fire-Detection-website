import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import { Card, CardHeader, Box } from '@mui/material';
import { API } from '@aws-amplify/api';
import config from '../../../aws-exports';
import { tempratureReading } from '../../../graphql/queries';


API.configure(config);

const TemperatureRealTimeGraph = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [timeData, setTimeData] = useState([]);

  useEffect(() => {
    const handleList = async () => {
      try {
        const response = await API.graphql({
          query: tempratureReading,
          variables: {
            // <your variables, optional>
          },
        });

        const items = response.data.listIotDeviceRealtimedbs.items;
        const newTemperatures = items.map((item) => item.temperature);
        const newTimes = items.map((item) => formatTimestamp(item.timestamp)); // Convert timestamp to readable format

        // Check if new inputs are found
        if (newTemperatures.length > 0 && newTimes.length > 0) {
          setTemperatureData((prevData) => [...prevData, ...newTemperatures]);
          setTimeData((prevData) => [...prevData, ...newTimes]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const interval = setInterval(handleList, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (temperatureData.length > 0 && timeData.length > 0) {
      const options = {
        chart: {
          type: 'line',
        },
        series: [
          {
            name: 'Temperature',
            data: temperatureData.slice(-10),
          },
        ],
        xaxis: {
          categories: timeData.slice(-10),
        },
      };

      const chart = new ApexCharts(document.getElementById('temperatureChart'), options);
      chart.render();
    }
  }, [temperatureData, timeData]);

  // Helper function to convert timestamp to readable format
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds
    return date.toLocaleString(); // Adjust the format as needed
  };

  // return <div id="temperatureChart" />;

  return (
    <Card>
      <CardHeader title= "Temprature" />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
           <div id="temperatureChart" />
      </Box>
    </Card>
  );
};

export default TemperatureRealTimeGraph;
