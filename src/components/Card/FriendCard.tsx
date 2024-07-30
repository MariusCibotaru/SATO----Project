import React from 'react';
import { Box, Typography, Avatar, useTheme } from '@mui/material';

interface FriendCardProps {
  name: string;
  icon: string;
  game: string;
}

const FriendCard: React.FC<FriendCardProps> = ({ name, icon, game }) => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';
  const bgColor = isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const textColor = isDarkTheme ? 'white' : 'black';
  const subTextColor = isDarkTheme ? 'gray' : 'dark';

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      p: 1,
      bgcolor: bgColor,
      borderRadius: '16px',
      width: '100%',
    }}>
      <Avatar src={icon} alt={name} sx={{ width: 40, height: 40, mr: 2 }} />
      <Box>
        <Typography variant="h6" sx={{ color: textColor }}>{name}</Typography>
        <Typography variant="body2" sx={{ color: subTextColor }}>Playing {game}</Typography>
      </Box>
    </Box>
  );
}

export default FriendCard;
