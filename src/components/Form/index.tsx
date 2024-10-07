import React from 'react';
import SubmitButton from './SubmitButton';
import TextField from './TextField';
import { withProperties } from '../../utils';

interface AppFormProps extends React.HTMLProps<HTMLFormElement> {
  children: React.ReactNode;
}

const AppForm: React.FC<AppFormProps> = React.memo(props => {
  const { children, ...formProps } = props;

  return (
    <form noValidate {...formProps}>
      {children}
    </form>
  );
});

export default withProperties(AppForm, {
  TextField,
  SubmitButton,
});
