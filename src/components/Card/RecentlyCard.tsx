import React from 'react';
import { Box, Typography, LinearProgress, useTheme } from '@mui/material';

interface RecentlyCardProps {
  title: string;
  image: string;
  progress: number;
}

const RecentlyCard: React.FC<RecentlyCardProps> = ({ title, image, progress }) => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';
  const bgColor = isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      p: 1,
      bgcolor: bgColor,
      borderRadius: '16px',
      width: '100%',
      transition: 'transform 0.3s ease-in-out', 
      cursor: 'pointer', 
      '&:hover': {
        transform: 'scale(1.05)' 
      }
    }}>
      <Box sx={{ 
        width: '60px', 
        height: '60px', 
        borderRadius: '8px', 
        overflow: 'hidden', 
        mr: 2,
        flexShrink: 0
      }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', imageRendering: 'auto' }} />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ color: isDarkTheme ? 'white' : 'black' }}>{title}</Typography>
        <LinearProgress variant="determinate" value={progress} sx={{ height: '5px', borderRadius: '5px', mt: 1 }} />
      </Box>
    </Box>
  );
}

export default RecentlyCard;
