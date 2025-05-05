import { RefObject } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

export type BaseInputRef =  RefObject<TextInput | null>;
interface BaseInputProps extends TextInputProps {
  ref?: BaseInputRef;
  label?: string;
}
export const BaseInput = (props: BaseInputProps) => {
  return (
    <View>
      {props.label && <Text style={styles.label}>{props.label}</Text>}
      <TextInput
        {...props}
        ref={props.ref}
        style={styles.input}
      />
    </View>
  );
}

BaseInput.displayName = "BaseInput";

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  label: {
    marginBottom: 4,
  },
});
