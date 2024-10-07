import React, { memo } from 'react';
import { Control, useFormState } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';

interface SubmitProps extends React.ComponentProps<typeof LoadingButton> {
  control: Control<any, any>;
  loading?: boolean;
  children?: React.ReactNode;
}

const SubmitButton = ({
  control,
  loading,
  children,
  ...buttonProps
}: SubmitProps) => {
  const { isLoading, isSubmitting, isValidating } = useFormState({
    control,
  });

  const loadingValue = [loading, isLoading, isSubmitting, isValidating].some(
    Boolean,
  );

  return (
    <LoadingButton
      loading={loadingValue}
      color="primary"
      variant="contained"
      type="submit"
      {...buttonProps}
    >
      {children}
    </LoadingButton>
  );
};

export default memo(SubmitButton);
