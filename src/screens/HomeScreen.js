import React from 'react';
import { View, FlatList, Text, StyleSheet, SafeAreaView } from 'react-native';
import TaskInput from '../components/TaskInput';
import FilterBar from '../components/FilterBar';
import TaskItem from '../components/TaskItem';
import { useTasks } from '../context/TaskContext';

export default function HomeScreen() {
  const { tasks } = useTasks();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.heading}>TaskFlow</Text>
        <Text style={styles.sub}>{tasks.length} tasks</Text>
        <TaskInput />
        <FilterBar />
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TaskItem task={item} />}
          ListEmptyComponent={
            <Text style={styles.empty}>No tasks here. Add one above!</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#12121f' },
  container: { flex: 1, padding: 20, paddingTop: 40 },
  heading: { color: '#e0e0ff', fontSize: 28, fontWeight: '600', marginBottom: 4 },
  sub: { color: '#555', fontSize: 13, marginBottom: 20 },
  empty: { color: '#444', textAlign: 'center', marginTop: 40, fontSize: 14 },
});