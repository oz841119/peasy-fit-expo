import { Exercise } from '@/assets/data/exercises';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ExerciseChipProps {
  exercise: Exercise;
  onPress: (exerciseId: string) => void;
}

export const ExerciseChip = ({ exercise, onPress }: ExerciseChipProps) => {
  return (
    <TouchableOpacity 
      style={styles.chip} 
      onPress={() => onPress(exercise.id)}
    >
      <Text style={styles.text}>
        {exercise.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
}); 