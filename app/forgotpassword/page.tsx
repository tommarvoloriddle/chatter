'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ForgotPassword from '../../components/forgotpassword/ForgotPassword';
import HeroSection from '../../components/hero/HeroSection';

function App() {
  return (
    <Box width="100%" height="100vh" display="flex" flexDirection="row">
      <ForgotPassword  />
      <HeroSection />
    </Box>
  );
}

export default App;
