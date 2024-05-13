// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// project-imports
import { ThemeDirection, ThemeMode } from 'config';
import oneActLogo from '../oneActLogo/1actLogo.png'

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'absolute',
        filter: 'blur(9px)',
        zIndex: -1,
        bottom: 0,
        left : 0,
        transform: theme.direction === ThemeDirection.RTL ? 'rotate(180deg)' : 'inherit'
      }}
    >
     <img width="55%" style={{marginLeft:'-50px'}} height="calc(100vh - 175px)" src={oneActLogo} />
    </Box>
  );
};

export default AuthBackground;
