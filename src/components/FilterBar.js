import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTasks } from '../context/TaskContext';

const filters = ['All', 'Active', 'Completed'];

export default function FilterBar() {
  const { filter, setFilter } = useTasks();

  return (
    <View style={styles.container}>
      {filters.map((f) => (
        <TouchableOpacity
          key={f}
          style={[styles.btn, filter === f && styles.active]}
          onPress={() => setFilter(f)}>
          <Text style={[styles.text, filter === f && styles.activeText]}>{f}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', gap: 8, marginBottom: 16 },
  btn: {
    paddingHorizontal: 16, paddingVertical: 8,
    borderRadius: 20, borderWidth: 0.5, borderColor: '#444',
  },
  active: { backgroundColor: '#6c63ff', borderColor: '#6c63ff' },
  text: { color: '#888', fontSize: 13 },
  activeText: { color: '#fff' },
});