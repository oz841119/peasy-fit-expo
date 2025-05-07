import { WorkoutRecordForm } from '@/components/WorkoutRecordForm/WorkoutRecordForm';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function ExerciseDetail() {  
  return (
      <View style={styles.container}>
        <WorkoutRecordForm />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  debugContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 5,
  }
});
