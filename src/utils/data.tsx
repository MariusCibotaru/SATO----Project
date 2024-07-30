import React from 'react';
import Fortnite from '../images/Games/Fortnite.jpg';
import GTAV from '../images/Games/GTAV.webp';
import Hogwarts from '../images/Games/Hogwarts.avif';
import Mortal from '../images/Games/MortalCombat.avif';
import SpiderMan from '../images/Games/SpiderMan.avif';

import TheWitcher from '../images/RecentlyGames/TheWitcher3.jpg';
import ForzaHorizon5 from '../images/RecentlyGames/ForzaHorizon5.jpg';
import NBA2K24 from '../images/RecentlyGames/NBA2K24.jpg';
import Hitman3 from '../images/RecentlyGames/Hitman3.avif';

import SpiderManGame from '../images/Games/SpiderManGame.jpg';
import HogwartsGame from '../images/Games/HogwartsGame.avif';

import Avatar1 from '../images/Avatar/Avatar1.jpeg'
import Avatar2 from '../images/Avatar/Avatar2.jpg'
import Avatar3 from '../images/Avatar/Avatar3.png'
import Avatar4 from '../images/Avatar/Avatar4.jpg'
import Avatar5 from '../images/Avatar/Avatar5.jpg'
import Avatar6 from '../images/Avatar/Avatar6.jpg'


interface Game {
  title: string;
  image: string;
  price: number;
  description?: string;
  genres?: string[];
}


interface RecentlyPlayedGame {
  title: string;
  image: string;
  progress: number;
}

interface OnlineFriend {
  name: string;
  icon: string;
  game: string;
}

export const actualGames: Game[] = [
  {
    title: 'Fortnite',
    image: Fortnite,
    price: 59.99,
  },
  {
    title: 'Grand Theft Auto V',
    image: GTAV,
    price: 49.99,
  },
  {
    title: 'Hogwarts Legacy',
    image: Hogwarts,
    price: 39.99,
  },
  {
    title: 'Mortal Kombat',
    image: Mortal,
    price: 29.99,
  },
  {
    title: 'Spider-Man',
    image: SpiderMan,
    price: 19.99,
  },
  {
    title: 'The Witcher 3',
    image: TheWitcher,
    price: 34.99,
  },
  {
    title: 'Forza Horizon 5',
    image: ForzaHorizon5,
    price: 44.99,
  },
  {
    title: 'NBA 2K24',
    image: NBA2K24,
    price: 39.99,
  },
  {
    title: 'Hitman 3',
    image: Hitman3,
    price: 59.99,
  }
];

export const recentlyPlayed: RecentlyPlayedGame[] = [
  {
    title: 'The Witcher 3',
    image: TheWitcher,
    progress: 75,
  },
  {
    title: 'Forza Horizon 5',
    image: ForzaHorizon5,
    progress: 60,
  },
  {
    title: 'NBA 2K24',
    image: NBA2K24,
    progress: 40,
  },
  {
    title: 'Hitman 3',
    image: Hitman3,
    progress: 80,
  }
];

export const onlineFriends: OnlineFriend[] = [
  {
    name: 'John Doe',
    icon: Avatar1, 
    game: 'Fortnite'
  },
  {
    name: 'Jane Smith',
    icon: Avatar2, 
    game: 'Grand Theft Auto V'
  },
  {
    name: 'Alex Johnson',
    icon: Avatar3, 
    game: 'Hogwarts Legacy'
  },
  {
    name: 'Chris Lee',
    icon: Avatar4, 
    game: 'Mortal Kombat'
  },
  {
    name: 'Alex Johnson',
    icon: Avatar5, 
    game: 'Hogwarts Legacy'
  },
  {
    name: 'Alex Johnson',
    icon: Avatar6, 
    game: 'Hogwarts Legacy'
  },
  {
    name: 'Chris Lee',
    icon: Avatar4, 
    game: 'Mortal Kombat'
  },
  {
    name: 'Alex Johnson',
    icon: Avatar6, 
    game: 'Hogwarts Legacy'
  },
];

export const bestNewReleases: Game[] = [
  {
    title: 'Hogwarts Legacy',
    image: HogwartsGame,
    price: 39.99,
    description: 'Experience the magic of Hogwarts in this open-world adventure.',
    genres: ['Action', 'RPG', 'Adventure'],
  },
  {
    title: 'Spider-Man',
    image: SpiderManGame,
    price: 19.99,
    description: 'Swing through the streets of New York as your favorite superhero.',
    genres: ['Action', 'Adventure'],
  }
];