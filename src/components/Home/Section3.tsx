import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GameCard from '../Card/GameCard';
import { actualGames } from '../../utils/data';

const Section3 = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const itemsPerRow = 4;

  const handlePrev = () => {
    setVisibleIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setVisibleIndex((prevIndex) => 
      Math.min(prevIndex + 1, actualGames.length - itemsPerRow)
    );
  };

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
        <Typography variant="h4">Actual Games</Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton 
            onClick={handlePrev}
            disabled={visibleIndex === 0}
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
            <ArrowBackIosNewIcon sx={{ fontSize: '1.5rem' }} />
          </IconButton>
          <IconButton 
            onClick={handleNext}
            disabled={visibleIndex >= actualGames.length - itemsPerRow}
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
            <ArrowForwardIosIcon sx={{ fontSize: '1.5rem' }} />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        justifyContent: 'center',
      }}>
        <Box sx={{
          display: 'flex',
          transition: 'transform 0.3s ease',
          gap: 3
        }}>
          {actualGames.slice(visibleIndex, visibleIndex + itemsPerRow).map((game, index) => (
            <GameCard 
              key={index} 
              title={game.title} 
              image={game.image} 
              price={game.price} 
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Section3;
