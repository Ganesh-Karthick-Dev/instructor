/* eslint-disable no-unused-vars */


// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';

// project-imports
import { ThemeDirection, ThemeMode } from 'config';
import oneActLogo from '../oneActLogo/1actLogo.png'

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {


  const isLargeDevice = useMediaQuery('min-width:800px')

  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'absolute',
        filter: 'blur(12px)',
        zIndex: -1,
        bottom: 0,
        left : 27,
        transform: theme.direction === ThemeDirection.RTL ? 'rotate(180deg)' : 'inherit'
      }}
    >
     <img width="70%" style={{marginLeft:'-100px'}} height="calc(100vh -175px)" alt='oneact-logo' src={oneActLogo} />
    </Box>
  );
};

export default AuthBackground;
