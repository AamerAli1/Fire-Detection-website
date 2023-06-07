import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import { Card, CardHeader, Box } from '@mui/material';
import { API } from '@aws-amplify/api';
import config from '../../../aws-exports';
import { gasReading } from '../../../graphql/queries';


API.configure(config);

const GasRealTimeGraph = () => {
  const [gasData, setGasData] = useState([]);
  const [timeData, setTimeData] = useState([]);

  useEffect(() => {
    const handleList = async () => {
      try {
        const response = await API.graphql({
          query: gasReading,
          variables: {
            // <your variables, optional>
          },
        });

        const items = response.data.listIotDeviceRealtimedbs.items;
        const newGases = items.map((item) => item.gas);
        const newTimes = items.map((item) => formatTimestamp(item.timestamp)); // Convert timestamp to readable format

        // Check if new inputs are found
        if (newGases.length > 0 && newTimes.length > 0) {
          setGasData((prevData) => [...newGases.reverse(), ...prevData]);
          setTimeData((prevData) => [...newTimes.reverse(), ...prevData]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const interval = setInterval(handleList, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (gasData.length > 0 && timeData.length > 0) {
      const options = {
        chart: {
          type: 'line',
        },
        series: [
          {
            name: 'Gas',
            data: gasData.slice(-10),
          },
        ],
        xaxis: {
          categories: timeData.slice(-10),
        },
      };

      const chart = new ApexCharts(document.getElementById('gasChart'), options);
      chart.render();
    }
  }, [gasData, timeData]);

  // Helper function to convert timestamp to readable format
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds
    return date.toLocaleString(); // Adjust the format as needed
  };


  return (
    <Card>
      <CardHeader title= "Gas" />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
           <div id="gasChart" />
      </Box>
    </Card>
  );
};

export default GasRealTimeGraph;
