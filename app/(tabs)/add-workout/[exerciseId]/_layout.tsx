import { Stack, useLocalSearchParams } from "expo-router";

export default function ExerciseDetailLayout() {
  const { exerciseName } = useLocalSearchParams<{ 
    exerciseId: string;
    exerciseName: string;
  }>();
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen 
        name="index" 
        options={{
          headerTitle: exerciseName,
          headerBackTitle: '返回',
        }}
      />
    </Stack>
  );
}