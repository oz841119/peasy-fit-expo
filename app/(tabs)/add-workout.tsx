import { WorkoutRecordForm } from '@/components/WorkoutRecordForm/WorkoutRecordForm';
import { StyleSheet, Text, View } from 'react-native';

export default function AddWorkout() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ADD-WORKOUT</Text>
      <WorkoutRecordForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
