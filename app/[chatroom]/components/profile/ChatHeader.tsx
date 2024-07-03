import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Call } from '@mui/icons-material';
import { VideoCall } from '@mui/icons-material';
export default function CustomizedInputBase() {
  return (
    <Box
      component="h5"
      sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', 
        background:  'rgba(21, 32, 43)', borderRadius: 1, ml:5, mt:3, mb:2}}
    >
    <Box display={"flex"} flexDirection={"row"} alignItems={"center"} width={"100%"}>
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"} width={"90%"}>
        <Avatar
            alt="User"
            src="https://e1.pngegg.com/pngimages/8/546/png-clipart-pikachu-render-pokemon-pikachu-thumbnail.png" // Replace with actual image URL
            sx={{ width: 45, height: 45, mr: 3}}
        />
        <Typography variant="h5" sx={{ color: 'white' }}>
            Siqi Chen
        </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"row"} alignItems={"flex-end"} width={"10%"} justifyContent={'flex-end'} sx={{px:2}}>
        <IconButton color="primary" >
            <VideoCall />
        </IconButton>
        <IconButton color="primary" >
            <Call />
        </IconButton>
        </Box>
    </Box>

    </Box>
    
  );
}
