import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTasks } from '../context/TaskContext';

export default function TaskItem({ task }) {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleTask(task.id)} style={styles.check}>
        <Text style={styles.checkIcon}>{task.completed ? '✓' : '○'}</Text>
      </TouchableOpacity>
      <Text style={[styles.text, task.completed && styles.done]}>{task.text}</Text>
      <TouchableOpacity onPress={() => deleteTask(task.id)}>
        <Text style={styles.delete}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    backgroundColor: '#1e1e2e', borderRadius: 12,
    padding: 14, marginBottom: 10, borderWidth: 0.5, borderColor: '#2a2a3e',
  },
  check: { width: 24 },
  checkIcon: { color: '#6c63ff', fontSize: 16 },
  text: { flex: 1, color: '#e0e0ff', fontSize: 15 },
  done: { textDecorationLine: 'line-through', color: '#555' },
  delete: { color: '#555', fontSize: 16 },
});