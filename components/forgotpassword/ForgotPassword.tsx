'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clicked, setClicked] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  const handleClick = () => {
    console.log('Forgot Password Clicked'); 
    setForgotPasswordOpen(true);
    setClicked(true);
  };

  const handleForgotPasswordClose = () => {
    setForgotPasswordOpen(false);
    setClicked(false);
  };

  return (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
            width: '400px',
            margin: 'auto'
          }}
        >
          <Box mb={3}>
            <Typography align="center" variant="h5" color="white" gutterBottom>
              Reset your password
            </Typography>
          </Box>
          <TextField
            placeholder="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              input: { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              }
            }}
          />
          <TextField
            placeholder="Enter new password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '4px',
              input: { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              }
            }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              marginTop: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            Reset
          </Button>
        </Box>
  );
}

export default ForgotPassword;
