'use client';
import * as React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';

export default function ChatPreviewCard() {
  const [clicked, setClicked] = React.useState(false);

  return (
    <ButtonBase
      onClick={() => setClicked(!clicked)}
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 1,
        border: '1px solid rgba(255, 255, 255, 0.12)', // Thin border
        borderRadius: 1,
        width: '100%',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
        '&:active': {
          transform: 'scale(0.98)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)', // Highlight when clicked
        },
        transition: 'transform 0.2s, background-color 0.2s',
        backgroundColor: clicked ? 'rgba(255, 255, 255, 0.2)' : 'rgba(25, 39, 52)',
      }}
    >
      <Avatar
        alt="User"
        src="https://e1.pngegg.com/pngimages/8/546/png-clipart-pikachu-render-pokemon-pikachu-thumbnail.png" // Replace with actual image URL
        sx={{ width: 40, height: 40, mr: 2 }}
      />
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle1" sx={{ color: 'white' }}>
          Siqi Chen
        </Typography>
        <Typography variant="body2" sx={{ color: '#B0B3B8' }}>
          I just shared a link about this conversation
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ color: '#B0B3B8', ml: 2 }}>
        3h
      </Typography>
    </ButtonBase>
  );
}
