import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginPage = ({ navigation, setPlayers, setGameMode, route }: any) => {
  const [user1, setUser1] = useState('');
  const [user2, setUser2] = useState('');

  const handleLogin = () => {
    setPlayers({ user1, user2: route.params.mode === 'friend' ? user2 : 'Computer' });
    setGameMode(route.params.mode);
    navigation.navigate('Game');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Player 1 Name"
        value={user1}
        onChangeText={setUser1}
      />
      {route.params.mode === 'friend' && (
        <TextInput
          style={styles.input}
          placeholder="Enter Player 2 Name"
          value={user2}
          onChangeText={setUser2}
        />
      )}
      <Button title="Start Game" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '80%', padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 15 },
});

export default LoginPage;
