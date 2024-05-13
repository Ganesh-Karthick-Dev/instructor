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
import React, { useEffect, useState } from 'react';
import { unstable_HistoryRouter, useNavigate } from 'react-router-dom';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import instructorImage from '../../assets/images/users/avatar-9.png';
import instructorCar from '../../assets/images/cars/City-Desktop.png';
import axios from 'axios';

const Profile = () => {
  const matchDownMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const navigate = useNavigate();

  const handleBack = () => {
    return navigate(-1);
  };

  // user details

  const [userDetails, setUserDetails] = useState([]);

  const [branches, setBranches] = useState([]);

  const [zones, setZones] = useState([]);

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    handleUserFetch();
    // setBranches(userDetails.branch)
  }, []);

  const handleUserFetch = async () => {
    try {
      let id = 1;
      const response = await axios.get(`https://phpstack-977481-4409636.cloudwaysapps.com/api/v1/getInstructorById/${id}`);
      let user = response.data;
      setUserDetails(user.data[0]);
      setBranches(user.data[0].branch);
      setZones(user.data[0].zones);
      setCourses(user.data[0].courses);
    } catch (error) {
      console.log(error);
    }
  };

  // calculate age of user
  var dob = userDetails.dob; // 2033-03-03
  var arrayDob = dob?.split('-'); // ['2033','03','03']
  var userAge;
  if (arrayDob) {
    var [userYear] = arrayDob;
    userAge = userYear; // Assuming userAge is the year part of the date of birth
  } else {
    // Handle the case where dob is not set or doesn't have the expected format
  }
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  console.log(courses);

  // user details

  return (
    <>
      <Tooltip sx={{ marginBottom: '10px' }} title="back">
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
                      <Chip label={userDetails.status} size="medium" color={userDetails.status === 'Active' ? 'success' : 'error'} />
                    </Stack>
                    <Stack spacing={2.5} alignItems="center">
                      <Avatar alt="instructorImage" sx={{ width: 80, height: 80 }} src={userDetails.partnerimage} />
                      <Stack spacing={0.5} alignItems="center">
                        <Typography variant="h5">{userDetails.firstname + ' ' + userDetails.lastname}</Typography>
                        <Typography color="secondary">{userDetails.rolename}</Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-around" alignItems="center">
                      <Stack spacing={0.5} alignItems="center">
                        <Typography variant="h5">{currentYear - userAge}</Typography>
                        <Typography color="secondary">Age</Typography>
                      </Stack>
                      <Divider orientation="vertical" flexItem />
                      <Stack spacing={0.5} alignItems="center">
                        <Typography variant="h5">{userDetails.gender}</Typography>
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
                          <Typography align="right">{userDetails.primaryemail}</Typography>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <PhoneOutlined />
                        </ListItemIcon>
                        <ListItemSecondaryAction>
                          <Typography align="right">{userDetails.primarycontact}</Typography>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <AimOutlined />
                        </ListItemIcon>
                        <ListItemSecondaryAction>
                          <Typography align="right">
                            {!_.isEmpty(branches) &&
                              branches.map((val) => {
                                return val.locationname;
                              })}
                          </Typography>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12}>
              <MainCard title="Zones">
              <Grid container  gap={2}>
                  {!_.isEmpty(zones) &&
                    zones.map((val) => {
                      return <Chip label={val.zonename} sx={{width:'fit-content'}} />
                    })}
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12}>
              <MainCard title="Courses">
                <Grid container  gap={2}>
                  {!_.isEmpty(courses) &&
                    courses.map((val) => {
                      return <Chip label={val.productname} sx={{width:'fit-content'}} />
                    })}
                </Grid>
              </MainCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={7} md={8} xl={9}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MainCard title="Personal Details">
                <List sx={{ py: 0 }}>
                  <ListItem divider={!matchDownMD}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">First Name</Typography>
                          <Typography>{userDetails.firstname}</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Last Name</Typography>
                          <Typography>{userDetails.lastname}</Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem divider={!matchDownMD}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Phone</Typography>
                          <Typography>{userDetails.primarycontact}</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Country</Typography>
                          <Typography>{userDetails.country}</Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem divider={!matchDownMD}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Email</Typography>
                          <Typography>{userDetails.primaryemail}</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Zip Code</Typography>
                          <Typography>{userDetails.postcode}</Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Stack spacing={0.5}>
                      <Typography color="secondary">Address</Typography>
                      <Typography>
                        {userDetails.address + ' , ' + userDetails.city + ' , ' + userDetails.state + ' , ' + userDetails.country}
                      </Typography>
                    </Stack>
                  </ListItem>
                </List>
              </MainCard>
            </Grid>
            <Grid item xs={12}>
              <MainCard title="Vehicle Detials">
                <Grid container alignItems={'center'}>
                  <Grid item lg={6}>
                    <img style={{ width: '100%' }} src={instructorCar} alt="instructorCar" />
                  </Grid>
                  <Grid item lg={6}>
                    <MainCard title="Basic info">
                      <TableContainer sx={{ width: '100%' }} component={Paper}>
                        <Table sx={{ width: '100%', position: 'relative' }} aria-label="simple table">
                          <TableBody sx={{ overflowY: 'scroll' }}>
                            <TableRow>
                              <TableCell>
                                <Typography sx={{ fontWeight: 'bold' }}>Make</Typography>
                              </TableCell>
                              <TableCell align="right">
                                <Typography>Hyndai</Typography>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <Typography sx={{ fontWeight: 'bold' }}>Model</Typography>
                              </TableCell>
                              <TableCell align="right">
                                <Typography>Base Model</Typography>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <Typography sx={{ fontWeight: 'bold' }}>Name</Typography>
                              </TableCell>
                              <TableCell align="right">
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
