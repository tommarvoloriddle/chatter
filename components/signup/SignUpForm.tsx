'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { register } from '../../utils/CallApi';
import { useRouter } from 'next/navigation'

function SignUpForm() {

  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [error, setError] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);  
  const [aldreadyExists, setAlreadyExists] = useState(false);

  const validateEmail = (email : string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password : string) => {
    return password.length >= 8;
  };

  const handleUserName = (e) => {
    let errors = { username: '', password: error.password };
    setError(errors);
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    let errors = { username: error.username, password: '' };
    setError(errors);
    setPassword(e.target.value);
  };


  const handleSignUp = async () => {
    let valid = true;
    let errors = { username: '', password: '' };

    if (!validateEmail(username)) {
      errors.username = 'Invalid email address';
      valid = false;
    }

    if (!validatePassword(password)) {
      errors.password = 'Password must be at least 8 characters';
      valid = false;
    }

    setError(errors);

    if (valid) {
      try {
        const response = await register(username, password, 'token');
        if (response.status === 201) {
          console.log(response.json());
          router.push('/chatroom');
        } else if(response.status === 210) {
          let errors = { username: '', password: error.password };
          errors.username = 'Username already exists';
          setError(errors);
          setAlreadyExists(true);
        }
        else {
          setFetchError(true);
        }
      } catch (error) {
        setFetchError(true);
      }
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      sx={{
        padding: '20px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        width: '400px',
        margin: 'auto'
      }}
    >
      <Box flexDirection={"column"} display={"flex"} alignItems={'flex-start'} justifyContent={'flex-start'} sx={{ mb: '30px' }}>
        <Typography align="center" variant="h4" color="white" gutterBottom>
          Sign Up
        </Typography>
        <Typography align="center" variant="body2" gutterBottom>
          Welcome to Chatter
        </Typography>
        <Typography align="center" variant="caption" gutterBottom>
          Create an account with us to start your experience
        </Typography>
      </Box>
      <TextField
        placeholder="First Name"
        variant="outlined"
        fullWidth
        onChange={(e) => setFirstname(e.target.value)}
        value={firstname}
        margin="normal"
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
        placeholder="Last Name"
        variant="outlined"
        fullWidth
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        margin="normal"
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
        placeholder="Email"
        type="email"
        variant="outlined"
        fullWidth
        value={username}
        onChange={handleUserName}
        error={!!error.username}
        label={error.username}
        margin="normal"
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
        placeholder="Password"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={handlePassword}
        error={!!error.password}
        label={error.password}
        margin="normal"
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
        onClick={handleSignUp}
        sx={{
          marginTop: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          },
        }}
      >
        Sign up
      </Button>
      {fetchError && 
      <Typography variant="body2" color="red" sx={{ marginTop: '20px' }}>
        Failed to Sign Up
      </Typography>
      }
      {aldreadyExists && 
      <Typography variant="body2" color="white" sx={{ marginTop: '20px' }}>
        Already have an account?{' '}
        <Link href="/signin" underline="hover" sx={{ color: '#FFD700' }} >
          Sign In
        </Link>
      </Typography>
      }
      <Typography variant="body2" color="white" sx={{ marginTop: '20px' }}>
        By signing up, you agree to our{' '}
        <Link href="#" underline="hover" sx={{ color: '#FFD700' }}>
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="#" underline="hover" sx={{ color: '#FFD700' }}>
          Privacy Policy
        </Link>
      </Typography>
    </Box>
  );
}

export default SignUpForm;
