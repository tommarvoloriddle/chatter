import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function HeroSection() {
  const imageUrl1 = '/homepage1.png'; // Replace with actual path or URL
  const imageUrl2 = '/homepage2.png'; // Replace with actual path or URL

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      width="70%"
      height="100%"
      padding="20px"
      sx={{ background: 'rgba(255, 255, 255, 0.1)' }}
    >
      <Box width="30%" height="100%" alignItems="flex-start" justifyContent="center" flexDirection="column" display="flex">
        <Typography variant="h2">
          Join the Chat Room Community
        </Typography>
        <Typography variant="caption">
          Connect with friends and make new ones
        </Typography>
      </Box>
      <Box width="70%" height="100%" justifyContent="center" alignItems="center" flexDirection="column" display="flex">
        <Box width="70%" flexDirection="row" display="flex" position="relative" justifyContent="center" alignItems="center">
          <Box
            component={'img'}
            src={imageUrl1}
            alt="Image 1"
            width="370px"
            height="600px"
            sx={{
              position: 'absolute',
              left: 0,
              zIndex: 3,
              borderRadius: '15px', // Add rounded corners
              objectFit: 'cover' // Ensure image is zoomed in/out to fit
            }}
          />
          <Box
            component={'img'}
            src={imageUrl2}
            alt="Image 2"
            width="370px"
            height="600px"
            sx={{
              position: 'absolute',
              right: 0,
              bottom: -250,
              zIndex: 2,
              borderRadius: '15px', // Add rounded corners
              objectFit: 'cover' // Ensure image is zoomed in/out to fit
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
