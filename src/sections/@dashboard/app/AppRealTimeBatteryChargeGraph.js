import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import { Card, CardHeader, Box } from '@mui/material';
import { API } from '@aws-amplify/api';
import config from '../../../aws-exports';
import { batteryChargeReading } from '../../../graphql/queries';


API.configure(config);

const BatteryChargeRealTimeGraph = () => {
  const [batteryChargeData, setBatteryChargeData] = useState([]);
  const [timeData, setTimeData] = useState([]);

  useEffect(() => {
    const handleList = async () => {
      try {
        const response = await API.graphql({
          query: batteryChargeReading,
          variables: {
            // <your variables, optional>
          },
        });

        const items = response.data.listIotDeviceRealtimedbs.items;
        const newBatteryCharges = items.map((item) => item.batteryCharge);
        const newBatteryCharge = items.map((item) => formatTimestamp(item.timestamp)); // Convert timestamp to readable format

        // Check if new inputs are found
        if (newBatteryCharges.length > 0 && newBatteryCharge.length > 0) {
          setBatteryChargeData((prevData) => [...prevData, ...newBatteryCharges]);
          setTimeData((prevData) => [...prevData, ...newBatteryCharge]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const interval = setInterval(handleList, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (batteryChargeData.length > 0 && timeData.length > 0) {
      const options = {
        chart: {
          type: 'line',
        },
        series: [
          {
            name: 'Battery Charge',
            data: batteryChargeData.slice(-10),
          },
        ],
        xaxis: {
          categories: timeData.slice(-10),
        },
      };

      const chart = new ApexCharts(document.getElementById('batteryChargeChart'), options);
      chart.render();
    }
  }, [batteryChargeData, timeData]);

  // Helper function to convert timestamp to readable format
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds
    return date.toLocaleString(); // Adjust the format as needed
  };


  return (
    <Card>
      <CardHeader title= "Battery Charge" />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
           <div id="batteryChargeChart" />
      </Box>
    </Card>
  );
};

export default BatteryChargeRealTimeGraph;
