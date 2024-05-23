/* eslint-disable no-unused-vars */

import React from 'react'
import Skeleton from '@mui/material/Skeleton';
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
import MainCard from 'components/MainCard';

const ProfileSkeleton = () => {
  return (
    <>
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>

    <Grid container spacing={3}>
        <Grid item xs={12} sm={5} md={4} xl={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MainCard>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Stack direction="row" justifyContent="flex-end">
                    <Skeleton variant="rounded" width={40} height={40} />
                    </Stack>
                    <Stack spacing={2.5} alignItems="center">
                    <Skeleton variant="circular" width={40} height={40} />
                      <Stack spacing={0.5} alignItems="center">
                        {/* <Typography variant="h5">{userDetails.firstname + ' ' + userDetails.lastname}</Typography>
                        <Typography color="secondary">{userDetails.rolename}</Typography> */}
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-around" alignItems="center">
                      <Stack spacing={0.5} alignItems="center">
                        {/* <Typography variant="h5">{currentYear - userAge}</Typography>
                        <Typography color="secondary">Age</Typography> */}
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                      </Stack>
                      <Divider orientation="vertical" flexItem />
                      <Stack spacing={0.5} alignItems="center">
                        {/* <Typography variant="h5">{userDetails.gender}</Typography>
                        <Typography color="secondary">Gender</Typography> */}
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />                        
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                      </Stack>
                      <Divider orientation="vertical" flexItem />
                      <Stack spacing={0.5} alignItems="center">
                        {/* <Typography variant="h5">
                          <Chip label="Paper Work" size="medium" color="warning" />
                        </Typography>
                        <Typography color="secondary">Contract Status</Typography> */}
                         <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                         <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
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
                          {/* <MailOutlined /> */}
                        </ListItemIcon>
                        <ListItemSecondaryAction>
                          {/* <Typography align="right">{userDetails.primaryemail}</Typography> */}
                          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          {/* <PhoneOutlined /> */}
                        </ListItemIcon>
                        <ListItemSecondaryAction>
                          {/* <Typography align="right">{userDetails.primarycontact}</Typography> */}
                          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                        </ListItemSecondaryAction>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          {/* <AimOutlined /> */}
                        </ListItemIcon>
                        <ListItemSecondaryAction>
                          {/* <Typography align="right">
                            {!_.isEmpty(branches) &&
                              branches.map((val) => {
                                return val.locationname;
                              })}
                          </Typography> */}
                           <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                        </ListItemSecondaryAction>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12}>
              <MainCard title="Zones">
                <Grid container gap={2}>
                  {/* {!_.isEmpty(zones) &&
                    zones.map((val,index) => {
                      return <Chip key={index} label={val.zonename} sx={{ width: 'fit-content' }} />;
                    })} */}
                     <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12}>
              <MainCard title="Courses">
                <Grid container gap={2}>
                  {/* {!_.isEmpty(courses) &&
                    courses.map((val,index) => {
                      return <Chip key={index} label={val.productname} sx={{ width: 'fit-content' }} />;
                    })} */}
                     <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
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
                  <ListItem >
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          {/* <Typography color="secondary">First Name</Typography>
                          <Typography>{userDetails.firstname}</Typography> */}
                           <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                           <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          {/* <Typography color="secondary">Last Name</Typography>
                          <Typography>{userDetails.lastname}</Typography> */}
                           <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem >
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          {/* <Typography color="secondary">Phone</Typography>
                          <Typography>{userDetails.primarycontact}</Typography> */}
                           <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                           <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          {/* <Typography color="secondary">Country</Typography>
                          <Typography>{userDetails.country}</Typography> */}
                           <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                           <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          {/* <Typography color="secondary">Email</Typography>
                          <Typography>{userDetails.primaryemail}</Typography> */}
                           <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                           <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          {/* <Typography color="secondary">Zip Code</Typography>
                          <Typography>{userDetails.postcode}</Typography> */}
                           <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                           <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Stack spacing={0.5}>
                      {/* <Typography color="secondary">Address</Typography>
                      <Typography>
                        {userDetails.address + ' , ' + userDetails.city + ' , ' + userDetails.state + ' , ' + userDetails.country}
                      </Typography> */}
                       <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                       <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    </Stack>
                  </ListItem>
                </List>
              </MainCard>
            </Grid>
            <Grid item xs={12}>
              
                <MainCard title="Vehicle Detials">
                  <Grid container alignItems={'center'}>
                    <Grid item lg={6}>
                      {/* {_.isEmpty(vehicleDetails) ? (
                        <img style={{ width: '100%' }} src={dummycar} alt="instructorCar" />
                      ) : (
                        <img style={{ width: '100%' }} src={instructorCar} alt="instructorCar" />
                      )} */}
                    </Grid>
                    <Grid item lg={6}>
                      <MainCard title="Basic info">
                        <TableContainer sx={{ width: '100%' }} component={Paper}>
                          <Table sx={{ width: '100%', position: 'relative' }} aria-label="simple table">
                            <TableBody sx={{ overflowY: 'scroll' }}>
                              <TableRow>
                                <TableCell>
                                  {/* <Typography sx={{ fontWeight: 'bold' }}>Make</Typography> */}
                                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                </TableCell>
                                <TableCell align="right">
                                  {/* <Typography>{_.isEmpty(vehicleDetails) ? '' : ''}</Typography> */}
                                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>
                                  {/* <Typography sx={{ fontWeight: 'bold' }}>Model</Typography> */}
                                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                </TableCell>
                                <TableCell align="right">
                                  {/* <Typography>{_.isEmpty(vehicleDetails) ? '' : ''}</Typography> */}
                                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>
                                  {/* <Typography sx={{ fontWeight: 'bold' }}>Name</Typography> */}
                                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                </TableCell>
                                <TableCell align="right">
                                  {/* <Typography>{_.isEmpty(vehicleDetails) ? '' : ''}</Typography> */}
                                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
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
  )
}

export default ProfileSkeleton