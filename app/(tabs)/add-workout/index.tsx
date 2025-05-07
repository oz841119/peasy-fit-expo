import { exercises } from '@/assets/data/exercises';
import { ExerciseChipsList } from '@/components/ExerciseChipsList/ExerciseChipsList';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from "react-native";

export default function AddWorkout() {
  const router = useRouter();

  const handleSelectExercise = (exerciseId: string) => {
    const exercise = exercises.find(e => e.id === exerciseId);
    if (exercise) {
      router.push({
        pathname: "/add-workout/[exerciseId]",
        params: { 
          exerciseId: exercise.id,
          exerciseName: exercise.name 
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <ExerciseChipsList 
        onSelectExercise={handleSelectExercise}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
