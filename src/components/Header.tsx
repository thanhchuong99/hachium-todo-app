import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1533563906091-fdfdffc3e3c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80)',
        width: '100%',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" color="white">
        Todo App
      </Typography>
    </Box>
  );
};

export default Header;
