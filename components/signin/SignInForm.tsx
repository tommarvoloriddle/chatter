'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { login } from '../../utils/CallApi';
import { useRouter } from 'next/navigation'

function SignInForm() {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clicked, setClicked] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [error, setError] = useState({ email: '', password: '' });
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(false);  

  const validateEmail = (email : string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password : string) => {
    return password.length >= 8;
  };


  const handleClick = () => {
    console.log('Forgot Password Clicked'); 
    setForgotPasswordOpen(true);
    setClicked(true);
  };

  const handleEmail = (e) => {
    let errors = { email: '', password: error.password };
    setError(errors);
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    let errors = { email: error.email, password: '' };
    setError(errors);
    setPassword(e.target.value);
  }

  const handleForgotPasswordClose = () => {
    setForgotPasswordOpen(false);
    setClicked(false);
  };

  const handleSignin = async () => {
    try{
      let valid = true;
      let errors = { email: '', password: '' };

      if (validateEmail(email) === false) {
        errors.email = 'Invalid email address';
        valid = false;
      }

      if (validatePassword(password) === false) {
        errors.password = 'Invalid Password';
        valid = false;
      }

      setError(errors);

      if (valid) {
        setLoading(true);
        let response = await login(email, password, '');
        if (response.status === 200) {
          const data = await response.json();
          const user = data.data;
          console.log(user)
          setFetchError(false);
          setLoading(false);
          router.push(`/${user.user_id._id.$oid}/`);
        } else {
          console.log('Login Failed' , response.status);
          setFetchError(true);
          setLoading(false);
        }
      } 
    }
    catch (error) {
      console.log('Login Failed');
      setFetchError(true);
      setLoading(false);
    }
  }
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
            <Typography align="center" variant="h4" color="white" gutterBottom>
              Sign In
            </Typography>
          </Box>
          <TextField
            placeholder="Email"
            type="email"
            error={!!error.email}
            variant="outlined"
            value={email}
            fullWidth
            margin="normal"
            onChange={handleEmail}
            label={error.email}
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
            margin="normal"
            error={!!error.password}
            value={password}
            onChange={handlePassword}
            label={error.password}
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
          <Typography              
          sx={{
                color: clicked ? '#FF6347' : '#FFD700',
                marginTop: '10px',
                alignSelf: 'flex-start',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                fontWeight: clicked ? 'bold' : 'normal',
            }}> 
            <Link href="/forgotpassword" underline="hover" sx={{ color: '#FFD700' }} >
            Forgot Password?
            </Link>
          </Typography>
          {fetchError &&
            <Typography color="error" sx={{ marginTop: '10px' }}>
              Invalid email or password
            </Typography>
          }
          <Button
            variant="contained"
            color="primary"
            onClick={handleSignin} 
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
            Sign In
          </Button>
        </Box>
  );
}

export default SignInForm;
