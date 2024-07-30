import React from 'react';
import { Box } from '@mui/material';
import Section1 from '../components/Home/Section1';
import Section2 from '../components/Home/Section2';
import Section3 from '../components/Home/Section3';
import Section4 from '../components/Home/Section4';

const Home = () => {
  return (
    <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        gap: 2,
    }}>
      <Box sx={{ flex: 2, display: 'flex', gap: 6 }}>
        {/* Inner Box with flex 3 */}
        <Box sx={{ flex: 3 }}>
          <Section1 />
        </Box>
        {/* Inner Box with flex 1 */}
        <Box sx={{ flex: 1 }}>
          <Section2 />
        </Box>
      </Box>
      
      <Box sx={{ flex: 1.8, display: 'flex', gap: 6 }}>
        {/* Inner Box with flex 3 */}
        <Box sx={{ flex: 3 }}>
          <Section3 />
        </Box>
        {/* Inner Box with flex 1 */}
        <Box sx={{ flex: 1 }}>
          <Section4 />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
