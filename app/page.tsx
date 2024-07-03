'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SignUpForm from '../components/signup/SignUpForm';
import HeroSection from '../components/hero/HeroSection';

function App() {

  return (
    <Box width="100%" height="100vh" display="flex" flexDirection="row" sx ={{ background:"rgba(25, 39, 52)"}}>
      <SignUpForm />
      <HeroSection />
    </Box>
  );
}

export default App;
