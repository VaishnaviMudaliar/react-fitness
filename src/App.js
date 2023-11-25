import { readFileSync } from 'fs';
import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail.js';
import Home from './pages/Home.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Box>
  );
};

export default App;
