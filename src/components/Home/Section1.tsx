import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { bestNewReleases } from '../../utils/data';

const Section1 = () => {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handlePrevClick = () => {
    setCurrentGameIndex((prevIndex) => (prevIndex === 0 ? bestNewReleases.length - 1 : prevIndex - 1));
    setLiked(false); 
  };

  const handleNextClick = () => {
    setCurrentGameIndex((prevIndex) => (prevIndex === bestNewReleases.length - 1 ? 0 : prevIndex + 1));
    setLiked(false); 
  };

  const game = bestNewReleases[currentGameIndex];

  return (
    <Box sx={{ 
      height: '100%', 
      width: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      borderRadius: '32px',
      p: 4,
      backgroundImage: `url(${game.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
    }}>
      <IconButton 
        onClick={handlePrevClick} 
        sx={{ 
          position: 'absolute', 
          left: 16, 
          top: '50%', 
          transform: 'translateY(-50%)', 
          color: 'white',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.7)',
          }
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton 
        onClick={handleNextClick} 
        sx={{ 
          position: 'absolute', 
          right: 16, 
          top: '50%', 
          transform: 'translateY(-50%)', 
          color: 'white',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.7)',
          }
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 2
      }}>
        {game.genres?.map((genre, index) => (
          <Box key={index} sx={{ 
            bgcolor: 'rgba(255, 255, 255, 0.2)', 
            borderRadius: '32px', 
            px: 2, 
            py: 0.5,
            color: 'white',
          }}>
            {genre}
          </Box>
        ))}
      </Box>

      <Box sx={{
        display: 'flex',
        flexGrow: 1,
        width: '100%',
      }}/>

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'space-between',
        flex: '0 0 auto'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          height: '100%',
          flex: 1,
          width: '100%',
          maxWidth: '300px',
        }}>
          <Typography variant="h4" sx={{ mb: 1, color: 'white' }}>{game.title}</Typography>
          <Typography variant="h6" sx={{ color: 'white' }}>{game.description}</Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: '100%',
          gap: 2,
          flex: 1
        }}>
          <Box sx={{
            background: 'linear-gradient(to left, #ff6a00, #ee0979)',
            borderRadius: '16px',
            color: 'white',
            textAlign: 'center',
            px: 2,
            py: 1,
            height: '100%',
            width: '100%',
            maxWidth: '250px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}>
            <Typography variant="h6">Buy Now</Typography>
            <Typography variant="body1">${game.price.toFixed(2)}</Typography>
          </Box>

          <Box 
            onClick={handleLikeClick}
            sx={{ 
              bgcolor: liked ? 'rgba(255, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)', 
              borderRadius: '16px', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '100%',
              p: 2,
              cursor: 'pointer',
              transition: 'transform 0.2s, background-color 0.2s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            {liked ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon sx={{ color: 'white' }} />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Section1;
