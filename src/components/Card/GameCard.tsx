import React from 'react';
import { Box, Typography } from '@mui/material';

interface GameCardProps {
  title: string;
  image: string;
  price: number;
}

const GameCard: React.FC<GameCardProps> = ({ title, image, price }) => {
  return (
    <Box sx={{ 
      width: '250px', 
      p: 2, 
      borderRadius: '16px', 
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: 3,
      textAlign: 'center',
      flex: '0 0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      transition: 'transform 0.3s ease-in-out', 
      cursor: 'pointer', 
      '&:hover': {
        transform: 'scale(1.05)' 
      }
    }}>
      <Box sx={{
        bgcolor: 'rgba(0, 0, 0, 0.5)', 
        p: 1,
        borderRadius: '16px',
      }}>
        <Typography variant="h6" sx={{ color: 'white', mr: 1 }}>${price.toFixed(2)}</Typography>
      </Box>
    </Box>
  );
}

export default GameCard;
