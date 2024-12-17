import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/HomePage';
import LoginPage from '../screens/LoginPage';
import GamePage from '../screens/GamePage';
import StatsPage from '../screens/StatsPage';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const [stats, setStats] = useState({
    gamesPlayed: 0,
    xWins: 0,
    oWins: 0,
    draws: 0,
  });

  const [players, setPlayers] = useState({ user1: '', user2: '' });
  const [gameMode, setGameMode] = useState('friend'); // "friend" or "computer"

  const resetStats = () => {
    setStats({
      gamesPlayed: 0,
      xWins: 0,
      oWins: 0,
      draws: 0,
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <HomePage {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Login">
          {(props) => <LoginPage {...props} setPlayers={setPlayers} setGameMode={setGameMode} />}
        </Stack.Screen>
        <Stack.Screen name="Game">
          {(props) => <GamePage {...props} stats={stats} setStats={setStats} players={players} gameMode={gameMode} />}
        </Stack.Screen>
        <Stack.Screen name="Stats">
          {(props) => <StatsPage {...props} stats={stats} resetStats={resetStats} players={players} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
