import { Box, Container } from '@mui/material';
import { FC, memo, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = memo(({ children }) => {
  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          bgcolor: 'grey.100',
          height: '100vh',
        }}
      >
        {children}
      </Box>
    </Container>
  );
});

export default Layout;
