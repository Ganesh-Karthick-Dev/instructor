/* eslint-disable no-unused-vars */


import { useMemo } from 'react';

// material-ui
import { Box, Stack, useMediaQuery } from '@mui/material';

// project import
import Search from './Search';
import Message from './Message';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';
import MegaMenuSection from './MegaMenuSection';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const megaMenu = useMemo(() => <MegaMenuSection />, []);

  return (
    <>
      {/* {!matchesXs && <Search />}
      {!matchesXs && megaMenu}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />} */}

      
      {/* <Message /> */}

      <Box sx={{width:'100%',display:'flex',justifyContent:'end'}}>
      <Notification />
      {!matchesXs && <Profile />}
      </Box>
      
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
