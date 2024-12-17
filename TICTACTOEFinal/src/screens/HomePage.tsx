import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomePage = ({ navigation }: any) => {
  const handlePlayWithFriend = () => {
    navigation.navigate('Login', { mode: 'friend' });
  };

  const handlePlayWithComputer = () => {
    navigation.navigate('Login', { mode: 'computer' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Tic Tac Toe</Text>
      <Button title="Play Against Friend" onPress={handlePlayWithFriend} />
      <Button title="Play Against Computer" onPress={handlePlayWithComputer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default HomePage;
