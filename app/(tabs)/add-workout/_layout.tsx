import { Stack } from "expo-router";

export default function AddWorkoutLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{
          title: "選擇運動",
        }}
      />
      <Stack.Screen 
        name="[exerciseId]" 
        options={{
          headerShown: false,
          headerBackTitle: "返回",
        }}
      />
    </Stack>
  );
}