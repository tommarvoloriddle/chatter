'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SignInForm from '../../components/signin/SignInForm';
import HeroSection from '../../components/hero/HeroSection';

function App() {
  return (
    <Box width="100%" height="100vh" display="flex" flexDirection="row">
      <SignInForm  />
      <HeroSection />
    </Box>
  );
}

export default App;
