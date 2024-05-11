import { AimOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import {
  Avatar,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
  Typography,
  useMediaQuery
} from '@mui/material';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import MainCard from 'components/MainCard';
import React from 'react';
import { unstable_HistoryRouter, useNavigate } from 'react-router-dom';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import instructorImage from '../../assets/images/users/avatar-9.png';
import instructorCar from '../../assets/images/cars/City-Desktop.png';

const Profile = () => {
  const matchDownMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const navigate = useNavigate();

  const handleBack = () => {
    return navigate(-1);
  };

  return (
    <>
      <Tooltip sx={{marginBottom:'10px'}} title="back">
        <IconButton onClick={handleBack}>
          <IoReturnDownBackOutline size={40} />
        </IconButton>
      </Tooltip>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5} md={4} xl={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MainCard>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Stack direction="row" justifyContent="flex-end">
                      <Chip label="Active" size="medium" color="primary" />
                    </Stack>
                    <Stack spacing={2.5} alignItems="center">
                      <Avatar alt="instructorImage" sx={{ width: 80, height: 80 }} src={instructorImage} />
                      <Stack spacing={0.5} alignItems="center">
                        <Typography variant="h5">Anshan H.</Typography>
                        <Typography color="secondary">Minor</Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-around" alignItems="center">
                      <Stack spacing={0.5} alignItems="center">
                        <Typography variant="h5">20</Typography>
                        <Typography color="secondary">Age</Typography>
                      </Stack>
                      <Divider orientation="vertical" flexItem />
                      <Stack spacing={0.5} alignItems="center">
                        <Typography variant="h5">Male</Typography>
                        <Typography color="secondary">Gender</Typography>
                      </Stack>
                      <Divider orientation="vertical" flexItem />
                      <Stack spacing={0.5} alignItems="center">
                        <Typography variant="h5">
                          <Chip label="Paper Work" size="medium" color="warning" />
                        </Typography>
                        <Typography color="secondary">Contract Status</Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <List component="nav" aria-label="main mailbox folders" sx={{ py: 0, '& .MuiListItem-root': { p: 0, py: 1 } }}>
                      <ListItem>
                        <ListItemIcon>
                          <MailOutlined />
                        </ListItemIcon>
                        <ListItemSecondaryAction>
                          <Typography align="right">anshan.dh81@gmail.com</Typography>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <PhoneOutlined />
                        </ListItemIcon>
                        <ListItemSecondaryAction>
                          <Typography align="right">(+1-876) 8654 239 581</Typography>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <AimOutlined />
                        </ListItemIcon>
                        <ListItemSecondaryAction>
                          <Typography align="right">New York</Typography>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <EnvironmentOutlined />
                        </ListItemIcon>
                        <ListItemSecondaryAction>
                          <Link align="right" href="https://google.com" target="_blank">
                            https://anshan.dh.url
                          </Link>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12}>
              <MainCard title="Courses">
                <Stack gap={2}>
                  <Typography variant="subtitle-1">Drivers Education</Typography>
                  <Typography variant="subtitle-1">BTW (2/4 hrs)</Typography>
                  <Typography variant="subtitle-1">DUI</Typography>
                  <Typography variant="subtitle-1">Road Test</Typography>
                </Stack>
              </MainCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={7} md={8} xl={9}>
          <Grid container spacing={3}>
            {/* <Grid item xs={12}>
              <MainCard title="About me">
                <Typography color="secondary">
                  Hello, I’m Anshan Handgun Creative Graphic Designer & User Experience Designer based in Website, I create digital Products
                  a more Beautiful and usable place. Morbid accusant ipsum. Nam nec tellus at.
                </Typography>
              </MainCard>
            </Grid> */}
            <Grid item xs={12}>
              <MainCard title="Personal Details">
                <List sx={{ py: 0 }}>
                  <ListItem divider={!matchDownMD}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Full Name</Typography>
                          <Typography>Anshan Handgun</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Father Name</Typography>
                          <Typography>Mr. Deepen Handgun</Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem divider={!matchDownMD}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Phone</Typography>
                          <Typography>(+1-876) 8654 239 581</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Country</Typography>
                          <Typography>New York</Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem divider={!matchDownMD}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Email</Typography>
                          <Typography>anshan.dh81@gmail.com</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Zip Code</Typography>
                          <Typography>956 754</Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Stack spacing={0.5}>
                      <Typography color="secondary">Address</Typography>
                      <Typography>Street 110-B Kalians Bag, Dewan, M.P. New York</Typography>
                    </Stack>
                  </ListItem>
                </List>
              </MainCard>
            </Grid>
            {/* <Grid item xs={12}>
              <MainCard title="Education">
                <List sx={{ py: 0 }}>
                  <ListItem divider>
                    <Grid container spacing={matchDownMD ? 0.5 : 3}>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Master Degree (Year)</Typography>
                          <Typography>2014-2017</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Institute</Typography>
                          <Typography>-</Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem divider>
                    <Grid container spacing={matchDownMD ? 0.5 : 3}>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Bachelor (Year)</Typography>
                          <Typography>2011-2013</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Institute</Typography>
                          <Typography>Imperial College London</Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Grid container spacing={matchDownMD ? 0.5 : 3}>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">School (Year)</Typography>
                          <Typography>2009-2011</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Institute</Typography>
                          <Typography>School of London, England</Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItem>
                </List>
              </MainCard>
            </Grid> */}
            <Grid item xs={12}>
              <MainCard title="Vehicle Detials">
                {/* <List sx={{ py: 0 }}>
                  <ListItem divider>
                    <Grid container spacing={matchDownMD ? 0.5 : 3}>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Senior</Typography>
                          <Typography color="secondary">Senior UI/UX designer (Year)</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Job Responsibility</Typography>
                          <Typography>
                            Perform task related to project manager with the 100+ team under my observation. Team management is key role in
                            this company.
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Grid container spacing={matchDownMD ? 0.5 : 3}>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Trainee cum Project Manager (Year)</Typography>
                          <Typography>2017-2019</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Job Responsibility</Typography>
                          <Typography>Team management is key role in this company.</Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItem>
                </List> */}
                <Grid container alignItems={'center'}>
                  <Grid item lg={6}>
                    <img style={{ width: '100%' }} src={instructorCar} alt="instructorCar" />
                  </Grid>
                  <Grid item lg={6}>
                    <MainCard title="Basic info">
                      <TableContainer sx={{ width:'100%' }} component={Paper}>
                        <Table sx={{ width: '100%', position: 'relative' }} aria-label="simple table">
                          <TableBody sx={{ overflowY: 'scroll' }}>
                            <TableRow>
                                <TableCell>
                                        <Typography sx={{fontWeight:'bold'}}>Make</Typography>
                                </TableCell>
                                <TableCell align='right'>
                                        <Typography>Hyndai</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                        <Typography sx={{fontWeight:'bold'}}>Model</Typography>
                                </TableCell>
                                <TableCell align='right'>
                                        <Typography>Base Model</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                        <Typography sx={{fontWeight:'bold'}}>Name</Typography>
                                </TableCell>
                                <TableCell align='right'>
                                        <Typography>Verna EX</Typography>
                                </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </MainCard>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
