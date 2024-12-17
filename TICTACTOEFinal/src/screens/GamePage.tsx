import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const GamePage = ({ navigation, stats, setStats, players, gameMode }: any) => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameOver, setIsGameOver] = useState(false);

  const handlePress = (index: number) => {
    if (board[index] === '' && !isGameOver) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      const winner = checkWinner(newBoard);
      if (winner) {
        alert(`${winner} wins!`);
        updateStats(winner);
        setIsGameOver(true);
      } else if (newBoard.every((cell) => cell !== '')) {
        alert('It\'s a draw!');
        updateStats('draw');
        setIsGameOver(true);
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    }
  };

  const updateStats = (result: string) => {
    setStats((prevStats: any) => ({
      gamesPlayed: prevStats.gamesPlayed + 1,
      xWins: result === 'X' ? prevStats.xWins + 1 : prevStats.xWins,
      oWins: result === 'O' ? prevStats.oWins + 1 : prevStats.oWins,
      draws: result === 'draw' ? prevStats.draws + 1 : prevStats.draws,
    }));
  };

  const checkWinner = (board: string[]) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer('X');
    setIsGameOver(false);
  };

  const aiMove = () => {
    const availableMoves = board.map((value, index) => (value === '' ? index : null)).filter((value) => value !== null);
    const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    handlePress(randomMove);
  };

  useEffect(() => {
    if (gameMode === 'computer' && currentPlayer === 'O' && !isGameOver) {
      aiMove();
    }
  }, [currentPlayer, isGameOver]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {players.user1} (X) vs {players.user2} (O)
      </Text>
      <View style={styles.board}>
        {board.map((cell, index) => (
          <TouchableOpacity key={index} style={styles.cell} onPress={() => handlePress(index)}>
            <Text style={styles.cellText}>{cell}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button title="Go to Stats" onPress={() => navigation.navigate('Stats')} />
      <Button title="Reset Game" onPress={resetBoard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  board: { flexDirection: 'row', flexWrap: 'wrap', width: 300, height: 300, marginBottom: 20 },
  cell: { width: 100, height: 100, justifyContent: 'center', alignItems: 'center', borderWidth: 1 },
  cellText: { fontSize: 40, fontWeight: 'bold' },
});

export default GamePage;
