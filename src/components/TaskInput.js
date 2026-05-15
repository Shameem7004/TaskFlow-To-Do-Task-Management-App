import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTasks } from '../context/TaskContext';

export default function TaskInput() {
  const [text, setText] = useState('');
  const { addTask } = useTasks();

  const handleAdd = () => {
    if (text.trim() === '') return;
    addTask(text.trim());
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        placeholderTextColor="#999"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  input: {
    flex: 1, backgroundColor: '#1e1e2e', color: '#fff',
    borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12,
    fontSize: 15, borderWidth: 0.5, borderColor: '#333',
  },
  button: {
    backgroundColor: '#6c63ff', borderRadius: 10,
    width: 48, alignItems: 'center', justifyContent: 'center',
  },
  buttonText: { color: '#fff', fontSize: 26, lineHeight: 30 },
});