import React, { useState } from 'react';
import { Box } from '@mui/material';


import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

function Home()  {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box>
    <HeroBanner />
    <SearchExercises setExercises={setExercises}  setBodyPart={setBodyPart} />
    
  </Box>
  )
}
export default Home