import { ComponentProps } from 'react';
import { BaseInput } from "../BaseInput/BaseInput";

export const NumberInput = (props: ComponentProps<typeof BaseInput>) => {
  const handleChangeText = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    props.onChangeText?.(numericValue);
  };
  return (
    <BaseInput
      {...props}
      keyboardType="numeric"
      onChangeText={handleChangeText}
      value={props.value}
    />
  );
};


