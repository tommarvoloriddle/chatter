import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', background: 'rgba(25, 39, 52)' }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          color: 'white', // Input text color
          '&::placeholder': {
            color: 'grey', // Placeholder color
            opacity: 1, // Ensures the placeholder color is not faded
          },
        }}
        placeholder="Search Chats"
      />
      <IconButton type="button" sx={{ p: '10px', color: 'grey' }} >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
