import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { recentlyPlayed } from '../../utils/data';
import RecentlyCard from '../Card/RecentlyCard';

const Section4 = () => {
  return (
    <Box sx={{ 
      height: '100%', 
      width: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      borderRadius: '32px',
    }}>
      <Box sx={{ 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 1
      }}>
        <Typography variant="h4">Recently played</Typography>
        <IconButton 
          sx={{
            color: 'white',
            bgcolor: 'rgba(128, 128, 128, 0.5)',
            borderRadius: '50%',
            '&:hover': {
              bgcolor: 'rgba(128, 128, 128, 0.7)',
            },
            width: 48,
            height: 48,
          }}
        >
          <MoreHorizIcon sx={{ fontSize: '1.5rem' }} />
        </IconButton>
      </Box>
      
      <Box sx={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        alignItems: 'stretch',
        gap: 1, 
      }}>
        {recentlyPlayed.slice(0, 4).map((game, index) => (
          <RecentlyCard 
            key={index} 
            title={game.title} 
            image={game.image} 
            progress={game.progress} 
          />
        ))}
        {Array.from({ length: 4 - recentlyPlayed.slice(0, 4).length }).map((_, index) => (
          <Box key={index} sx={{ flexGrow: 1 }} />
        ))}
      </Box>
    </Box>
  );
}

export default Section4;
