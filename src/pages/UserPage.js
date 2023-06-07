import { useState } from 'react';
import {
  Card,
  Container,
  Typography,
  Switch,
} from '@mui/material';

export default function UserPage() {
  const [isDeviceOn, setIsDeviceOn] = useState(true);
  const [lastAbnormalReading, setLastAbnormalReading] = useState('2023-05-31 08:30:00');
  const [uptime, setUptime] = useState('');

  const handleToggleDevice = async (event) => {
    const newStatus = event.target.checked ? 'ON' : 'OFF';

    // Make API request to update device status
    try {
      const response = await fetch('https://hndc78ikjd.execute-api.eu-central-1.amazonaws.com/capstone/controller', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: "newStatus",
          code: 0,
        }),
      });

      if (response.ok) {
        setIsDeviceOn(event.target.checked);
      } else {
        // Handle API error if needed
        console.error('Failed to update device status');
      }
    } catch (error) {
      // Handle network error if needed
      console.error('Network error:', error);
    }
  };

  // Calculate device uptime
  function calculateUptime() {
    // Your uptime calculation logic here
    // ...

    return '10 days 5 hours 30 minutes';
  }

  return (
    <>
      <Container>
        <Typography variant="h4" gutterBottom>
          Device Information
        </Typography>

        <Card>
          <Typography variant="body1" sx={{ my: 2 }}>
            Device Uptime: {uptime}
          </Typography>

          <Typography variant="body1" sx={{ my: 2 }}>
            Last Abnormal Reading: {lastAbnormalReading}
          </Typography>

          <Typography component="div" sx={{ my: 2 }}>
            <Typography component="span">Device Status: </Typography>
            <Switch
              checked={isDeviceOn}
              onChange={handleToggleDevice}
              color="primary"
            />
          </Typography>
        </Card>
      </Container>
    </>
  );
}
