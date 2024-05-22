import { AimOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Avatar, Box, Chip, Divider, Grid, IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, Stack, Tab, Tooltip, Typography, useMediaQuery } from '@mui/material'
import MainCard from 'components/MainCard'
import React from 'react'
import { IoReturnDownBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router'


// react icons
import { IoPersonSharp } from "react-icons/io5";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import Calendar from 'pages/apps/calendar'
// react icons



const StudentAction = () => {


    const matchDownMD = useMediaQuery((theme) => theme.breakpoints.down('md'));


    // back button
    const navigate = useNavigate()
    const handleBack = ()=> {
        navigate( -1 )
    }
    // back button

    // tab works
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  // tab works

  return (
    <>
    <Tooltip sx={{ marginBottom: '10px' }} title="back">
        <IconButton onClick={handleBack}>
          <IoReturnDownBackOutline size={40} />
        </IconButton>
      </Tooltip>
    <MainCard>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab 
            label={
                <Box sx={{display:'flex',flexDirection:'row',gap:"10px",alignItems:'center'}}>
                <IoPersonSharp />
                <Typography>Profile</Typography>
                </Box>
            } 
            value="1" />
            <Tab 
            label={
                <Box sx={{display:'flex',flexDirection:'row',gap:"10px",alignItems:'center'}}>
                <AiOutlineSchedule />
                <Typography>Schedules</Typography>
                </Box>
            } 
            value="2" 
            />
            <Tab 
            label={
                <Box sx={{display:'flex',flexDirection:'row',gap:"10px",alignItems:'center'}}>
                <FaClipboardList />
                <Typography>Courses</Typography>
                </Box>
            } 
            value="3" 
            />
             <Tab 
            label={
                <Box sx={{display:'flex',flexDirection:'row',gap:"10px",alignItems:'center'}}>
                <FaListCheck />
                <Typography>Attendance</Typography>
                </Box>
            } 
            value="4" 
            />
             <Tab 
            label={
                <Box sx={{display:'flex',flexDirection:'row',gap:"10px",alignItems:'center'}}>
                <FaClipboardCheck />
                <Typography>Assessment</Typography>
                </Box>
            } 
            value="5" 
            />

          </TabList>
        </Box>

        <TabPanel value="1">                   {/* profile */}

            <Grid gap={3} container>

                <Grid item lg={3}>

                <MainCard>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Stack direction="row" justifyContent="flex-end">
                    <Chip label="Pro" size="small" color="primary" />
                  </Stack>
                  <Stack spacing={2.5} alignItems="center">
                    <Avatar alt="Avatar 1" size="xl" src={''} />
                    <Stack spacing={0.5} alignItems="center">
                      <Typography variant="h5">Anshan H.</Typography>
                      <Typography color="secondary">Project Manager</Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" justifyContent="space-around" alignItems="center">
                    <Stack spacing={0.5} alignItems="center">
                      <Typography variant="h5">86</Typography>
                      <Typography color="secondary">Post</Typography>
                    </Stack>
                    <Divider orientation="vertical" flexItem />
                    <Stack spacing={0.5} alignItems="center">
                      <Typography variant="h5">40</Typography>
                      <Typography color="secondary">Project</Typography>
                    </Stack>
                    <Divider orientation="vertical" flexItem />
                    <Stack spacing={0.5} alignItems="center">
                      <Typography variant="h5">4.5K</Typography>
                      <Typography color="secondary">Members</Typography>
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
                        <Typography>www.google.com</Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </MainCard>

                </Grid>

                <Grid item lg={8}>
                    
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
                        <Typography>
                          (+1-876) 8654239581
                        </Typography>
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
                
            </Grid>

        </TabPanel>

        <TabPanel value="2">

            <Calendar />

        </TabPanel>
        
        <TabPanel value="3">Courses</TabPanel>
        <TabPanel value="4">Attendance</TabPanel>
        <TabPanel value="5">Assessment</TabPanel>
      </TabContext>
    </Box>
    </MainCard>
    </>
  )
}

export default StudentAction