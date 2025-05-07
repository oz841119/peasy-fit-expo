import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button, StyleSheet, View } from "react-native";
import { z } from "zod";
import { BaseInput } from "../widgets/inputs/BaseInput/BaseInput";
import { DatePickerInput } from "../widgets/inputs/DatePickerInput/DatePickerInput";
import { NumberInput } from "../widgets/inputs/NumberInput/NumberInput";
const workoutRecordFormSchema = z.object({
  date: z.date(),
  weight: z.number().min(0).max(999),
  reps: z.number().min(1).max(99),
  sets: z.number().min(1).max(99),
  comment: z.string().optional(),
  exerciseId: z.string(),
  trainingSessionId: z.string(),
});
export const WorkoutRecordForm = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      date: new Date(),
      weight: 0,
      reps: 0,
      sets: 1,
      comment: '',
      exerciseId: '',
      trainingSessionId: '',
    },
    resolver: zodResolver(workoutRecordFormSchema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
  }
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="date"
        render={({ field }) => (
        <DatePickerInput
          label="Date"
          date={field.value}
          onDateChange={(date) => {
            field.onChange(date)
          }}
        />
      )}
    />
    <Controller
      control={control}
      name="weight"
      render={({ field }) => (
        <NumberInput
          label="Weight"
          value={field.value.toString()}
          onChangeText={(text) => field.onChange(Number(text))}
        />
      )}
    />
    <Controller
      control={control}
      name="reps"
      render={({ field }) => (
        <NumberInput
          label="Reps"  
          value={field.value.toString()}
          onChangeText={(text) => field.onChange(Number(text))}
        />
      )}
    />  
    <Controller
      control={control}
      name="sets"
      render={({ field }) => (
        <NumberInput
          label="Sets"  
          value={field.value.toString()}
          onChangeText={(text) => field.onChange(Number(text))}
        />
      )}
    />
    <Controller
      control={control}
      name="comment"
      render={({ field }) => (
        <BaseInput
          label="Comment"
          value={field.value}
          onChangeText={(text) => field.onChange(text)}
        />
      )}
    />
    <View style={styles.buttonContainer}>
      <Button title="SEND" onPress={handleSubmit(onSubmit, (errors) => {
        console.log(errors);
      })} />
      <Button title="RESET" color="#737373" onPress={() => reset()} />
    </View>
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
    width: '100%'
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'column',
    gap: 10,
  },
});

