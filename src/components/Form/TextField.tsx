import React, { memo } from 'react';
import MuiTextField from '@mui/material/TextField';
import { Control, useController } from 'react-hook-form';
import { Box } from '@mui/material';

interface TextFieldProps extends React.ComponentProps<typeof MuiTextField> {
  name: string;
  control: Control<any, any>;
}

const TextField = <T extends TextFieldProps>(props: T) => {
  const { control, name } = props;

  const {
    field: { ref, value, ...restField },
    fieldState: { error },
  } = useController({
    control,
    name,
  });

  return (
    <MuiTextField
      inputRef={ref} // send input ref, so we can focus on input when error appear
      value={value}
      {...restField}
      {...props}
      error={!!error}
      helperText={
        <Box
          component="span"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <span>{error?.message}</span>
        </Box>
      }
    />
  );
};

export default memo(TextField);
