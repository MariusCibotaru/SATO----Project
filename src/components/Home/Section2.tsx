import React from 'react';
import { Box, Typography } from '@mui/material';
import FriendCard from '../Card/FriendCard';
import { onlineFriends } from '../../utils/data';

const Section2 = () => {
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
        <Typography variant="h4">Friends online</Typography>
      </Box>

      <Box sx={{ 
        width: '100%', 
        flexGrow: 1,
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        gap: 1,
        height: 0, 
        overflow: 'hidden',
      }}>
        <Box sx={{ 
          width: '100%', 
          flexGrow: 1,
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          gap: 1,
          overflow: 'auto',
          pr: 1,
          '::-webkit-scrollbar': {
            width: '4px',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: '#888', 
            borderRadius: '8px',
          },
          '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555', 
          },
          '::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1',
            borderRadius: '8px',
          },
        }}>
          {onlineFriends.map((friend, index) => (
            <FriendCard 
              key={index} 
              name={friend.name} 
              icon={friend.icon} 
              game={friend.game} 
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Section2;
