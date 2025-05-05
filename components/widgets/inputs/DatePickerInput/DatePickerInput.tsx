import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from "date-fns";
import React, { ComponentProps, Fragment, useState } from "react";
import { TouchableOpacity } from "react-native";
import { BaseInput } from "../BaseInput/BaseInput";
interface DatePickerInputProps extends ComponentProps<typeof BaseInput> {
  date: Date;
  onDateChange: (date: Date) => void;
}
export const DatePickerInput = (props: DatePickerInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <TouchableOpacity onPress={() => setIsOpen(true)}>
        <BaseInput
          {...props}
          editable={false}
          value={format(props.date, 'yyyy/MM/dd HH:mm:ss')}
        />
      </TouchableOpacity>
      {isOpen && <DateTimePicker
        value={props.date}
        mode="datetime"
        display="default"
        onChange={(event, date) => {  
          if (date) {
            props.onDateChange(date)
            setIsOpen(false)
          }
        }}
      />}
    </Fragment>
  )
}