import { exercises } from '@/assets/data/exercises';
import { StyleSheet, View } from 'react-native';
import { ExerciseChip } from '../widgets/ExerciseChip/ExerciseChip';

interface ExerciseChipsListProps {
  onSelectExercise: (exerciseId: string) => void;
}

export const ExerciseChipsList = ({ 
  onSelectExercise, 
}: ExerciseChipsListProps) => {
  return (
    <View style={styles.container}>
      {exercises.map((exercise) => (
        <ExerciseChip 
          key={exercise.id}
          exercise={exercise}
          onPress={onSelectExercise}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
}); 