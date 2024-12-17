import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StatsPage = ({ navigation, stats, resetStats, players }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Stats</Text>
      <Text style={styles.stat}>Total Games Played: {stats.gamesPlayed}</Text>
      <Text style={styles.stat}>
        {players.user1} (X) Wins: {stats.xWins}
      </Text>
      <Text style={styles.stat}>
        {players.user2 === 'Bot' ? 'Bot' : players.user2} (O) Wins: {stats.oWins}
      </Text>
      <Text style={styles.stat}>Draws: {stats.draws}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Play Again"
          onPress={() => navigation.navigate('Game')}
        />
        <Button
          title="Reset Stats"
          onPress={() => {
            resetStats();
            alert('Stats have been reset!');
          }}
        />
        <Button
          title="Back to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  stat: { fontSize: 18, marginVertical: 5 },
  buttonContainer: { marginTop: 20, width: '80%', justifyContent: 'space-between', height: 120 },
});

export default StatsPage;
