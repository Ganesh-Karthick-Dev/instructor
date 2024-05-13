// material-ui
import { useTheme } from '@mui/material/styles';
import oneActLogo from '../../assets/images/oneActLogo/1actLogo.png'

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoIconDark from 'assets/images/logo-icon-dark.svg';
 * import logoIcon from 'assets/images/logo-icon.svg';
 * import { ThemeMode } from 'config';
 *
 */

// ==============================|| LOGO ICON SVG ||============================== //

const LogoIcon = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === ThemeMode.DARK? logoIconDark : logoIcon} alt="Mantis" width="100" />
     *
     */
    <img style={{width:'50px'}} src={oneActLogo} />
  );
};

export default LogoIcon;
