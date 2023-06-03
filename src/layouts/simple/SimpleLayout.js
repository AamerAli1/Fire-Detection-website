import React from 'react';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundImage: `url('/assets/images/background/bg03.jpg')`,
  backgroundSize: 'cover',
});

const Title = styled(Typography)({
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#FFF', // Set the font color to white
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add a subtle text shadow
});

const LoginButton = styled(Button)({
  marginBottom: '40px',
  backgroundColor: '#006400', // Set the button background color to dark green
  color: '#FFF', // Set the button text color to white
});

const FeaturesContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '40px',
  color: '#FFF', // Set the font color of the Features text to white
});

const FeatureItem = styled('div')({
  margin: '0 20px',
  color: '#FFF', // Set the font color to white
});

const FeatureTitle = styled('h3')({
  fontWeight: 'bold',
});

const FeatureDescription = styled('p')({
  opacity: 0.8,
});

const Footer = styled('footer')({
  textAlign: 'center',
  marginTop: '40px',
});

const Line = styled('hr')({
  width: '80%',
  height: '1px',
  margin: '20px 0',
  background: 'linear-gradient(to right, transparent, #000, transparent)',
  border: 'none',
});

const FadedText = styled('span')({
  opacity: 0.5,
});

function LandingPage() {
  return (
    <Container>
      <Title variant="h1">Solar Powered Fire detection system</Title>

      <LoginButton component={Link} to="/login" variant="contained" color="primary">
        Login to dashboard
      </LoginButton>

      <div>
        <h2>
          <FeaturesContainer>Features</FeaturesContainer>
        </h2>
        <FeaturesContainer>
          <FeatureItem>
            <FeatureTitle>Real-time monitoring</FeatureTitle>
            <FeatureDescription>Get instant alerts and notifications.</FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>Advanced analytics</FeatureTitle>
            <FeatureDescription>Analyze data and generate insights.</FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureTitle>Easy integration</FeatureTitle>
            <FeatureDescription>Seamlessly connect with existing systems.</FeatureDescription>
          </FeatureItem>
        </FeaturesContainer>
      </div>

      <Line />

      <Footer>
        <p>
          All rights reserved &copy; 2023 <FadedText>Fire detection system</FadedText>
        </p>
      </Footer>
    </Container>
  );
}

export default LandingPage;
