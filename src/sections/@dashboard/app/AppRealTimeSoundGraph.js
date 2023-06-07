import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import { Card, CardHeader, Box } from '@mui/material';
import { API } from '@aws-amplify/api';
import config from '../../../aws-exports';
import { soundReading } from '../../../graphql/queries';


API.configure(config);

const SoundRealTimeGraph = () => {
  const [soundData, setSoundData] = useState([]);
  const [timeData, setTimeData] = useState([]);

  useEffect(() => {
    const handleList = async () => {
      try {
        const response = await API.graphql({
          query: soundReading,
          variables: {
            // <your variables, optional>
          },
        });

        const items = response.data.listIotDeviceRealtimedbs.items;
        const newSounds = items.map((item) => item.sound);
        const newTimes = items.map((item) => formatTimestamp(item.timestamp)); // Convert timestamp to readable format

        // Check if new inputs are found
        if (newSounds.length > 0 && newTimes.length > 0) {
          setSoundData((prevData) => [...newSounds.reverse(), ...prevData]);
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
    if (soundData.length > 0 && timeData.length > 0) {
      const options = {
        chart: {
          type: 'line',
        },
        series: [
          {
            name: 'Sound',
            data: soundData.slice(-10),
          },
        ],
        xaxis: {
          categories: timeData.slice(-10),
        },
      };

      const chart = new ApexCharts(document.getElementById('soundChart'), options);
      chart.render();
    }
  }, [soundData, timeData]);

  // Helper function to convert timestamp to readable format
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds
    return date.toLocaleString(); // Adjust the format as needed
  };


  return (
    <Card>
      <CardHeader title= "Sound" />

      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
           <div id="soundChart" />
      </Box>
    </Card>
  );
};

export default SoundRealTimeGraph;
