import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Divider, Link , FormLabel, Grid, TextField, Menu, MenuItem, Stack, Typography, IconButton, Avatar } from '@mui/material';

// project import
// import ProfileTab from './ProfileTab';
// import MainCard from 'components/MainCard';
// import IconButton from 'components/@extended/IconButton';
// import Avatar from 'components/@extended/Avatar';

import { facebookColor, linkedInColor, twitterColor, ThemeMode } from 'config';

// assets
import { FacebookFilled, LinkedinFilled, MoreOutlined, TwitterSquareFilled, CameraOutlined } from '@ant-design/icons';
import MainCard from 'components/MainCard';
import instructorImage from '../../../../assets/images/users/avatar-6.png';
import courseImage1 from '../../../../assets/images/temp-images/handsome-man-driving-his-car_1303-23084.avif';

// const avatarImage = require.context('assets/images/users', true);

// ==============================|| USER PROFILE - TAB CONTENT ||============================== //

const ProfileTabs = ({ focusInput, data }) => {
  const theme = useTheme();
  // const [selectedImage, setSelectedImage] = useState(undefined);
  //   const [avatar, setAvatar] = useState(avatarImage(`./default.png`));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event?.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // console.log(data[0]);

  const currentDate = new Date().getDate()
  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()
  const currentTime = new Date().getTime()
  // console.log(currentDate);
  // console.log(currentMonth+1);
  // console.log(currentYear);

  return (
    <MainCard >
      
      <Grid container spacing={6}>
        <Grid item xs={12}>
          {/* <Stack direction="row" justifyContent="flex-end">
            <IconButton
              variant="light"
              color="secondary"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreOutlined />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <MenuItem
                component={Link}
                to="/apps/profiles/user/personal"
                onClick={() => {
                  handleClose();
                  setTimeout(() => {
                    focusInput();
                  });
                }}
              >
                Edit
              </MenuItem>
              <MenuItem onClick={handleClose} disabled>
                Delete
              </MenuItem>
            </Menu>
          </Stack> */}
          <Stack spacing={2.5} alignItems="center">
            {/* <FormLabel
              htmlFor="change-avtar"
              sx={{
                position: 'relative',
                borderRadius: '50%',
                overflow: 'hidden',
                '&:hover .MuiBox-root': { opacity: 1 },
                cursor: 'pointer'
              }}
            >
              <Avatar alt="Avatar 1" src='' sx={{ width: 124, height: 124, border: '1px dashed' }} />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundColor: theme.palette.mode === ThemeMode.DARK ? 'rgba(255, 255, 255, .75)' : 'rgba(0,0,0,.65)',
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Stack spacing={0.5} alignItems="center">
                  <CameraOutlined style={{ color: theme.palette.secondary.lighter, fontSize: '2rem' }} />
                  <Typography sx={{ color: 'secondary.lighter' }}>Upload</Typography>
                </Stack>
              </Box>
            </FormLabel>
            <TextField
              type="file"
              id="change-avtar"
              placeholder="Outlined"
              variant="outlined"
              sx={{ display: 'none' }}
              onChange={(e) => setSelectedImage(e.target.files?.[0])}
            /> */}

            <Avatar alt="Remy Sharp" sx={{ width: 100, height: 100 }} src={instructorImage} />

            <Stack spacing={0.5} alignItems="center">
              <Typography variant="h5">{data[0].instructorName}</Typography>
              <Typography color="secondary">Instructor</Typography>
            </Stack>
            <Stack direction="row" spacing={3} sx={{ '& svg': { fontSize: '1.15rem', cursor: 'pointer' } }}>
              <Typography variant="h5" color={'primary'}>
                {`${currentDate} - ${currentMonth+1} - ${currentYear} ( 1:30pm - 3:30pm )`}
              </Typography>
            </Stack>
            <Divider sx={{width:'100%'}} variant="middle"  />
            <Stack>
              <Box component={'img'} width={300} sx={{ borderRadius: '10%' }} src={courseImage1} />
            </Stack>
            <Divider sx={{width:'100%'}} variant="middle"  />
          </Stack>
        </Grid>
        
        <Grid item sm={3} sx={{ display: { sm: 'block', md: 'none' } }} />
        <Grid item xs={12} sm={6} md={12}>
          <Stack direction="row" justifyContent="space-around" alignItems="center">
            <Stack spacing={0.5} alignItems="center">
              <Typography variant="h6" color="primary">
                {data[0].studentDetails.length}
              </Typography>
              <Typography variant="h5">Students</Typography>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack spacing={0.5} alignItems="center">
              <Typography variant="h6" color="primary">
                {data[0].courseName}
              </Typography>
              <Typography variant="h5">Course</Typography>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack spacing={0.5} alignItems="center">
              <Typography variant="h6" color="primary">
                <Typography sx={{fontWeight:'bolder',display:'inline-block'}}>2</Typography>/5
              </Typography>
              <Typography sx={{ fontWeight: 'bolder' }} variant="h5">
                Class
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Link href='#' sx={{border:`1px solid blue`,padding:'3px',borderRadius:'5px'}} target='blank'>Zoom Class Link</Link>
        </Grid>
      </Grid>
    </MainCard>
  );
};

ProfileTabs.propTypes = {
  data: PropTypes.object,
  focusInput: PropTypes.func
};

export default ProfileTabs;
