/* eslint-disable no-unused-vars */

import { AimOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Avatar, Box, CardContent, CardMedia, Chip, Divider, Grid, IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, Paper, Stack, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography, useMediaQuery } from '@mui/material'
import MainCard from 'components/MainCard'
import React from 'react'
import { IoReturnDownBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router'
import PropTypes from 'prop-types';


// react icons
import { IoPersonSharp } from "react-icons/io5";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import Calendar from 'pages/apps/calendar'
// import { GiDuration } from "react-icons/gi";
// react icons

// colapse imports
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// colapse imports

//images imports
import courseImage from '../../assets/images/temp-images/handsome-man-driving-his-car_1303-23084.avif'
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel'




//collapse data

const rows = [
  {
    name : 'DUI',
    attendance : [
      { date : '01-05-2024', status : 'Completed' },
      { date : '02-05-2024', status : 'Not Attend' },
      { date : '03-05-2024', status : 'Action not Taken' }
    ]
  },
  {
    name : 'Behind the Wheel',
    attendance : [
      { date : '04-05-2024', status : 'Completed' },
      { date : '05-05-2024', status : 'Not Attend' },
      { date : '06-05-2024', status : 'Action not Taken' }
    ]
  },
  {
    name : 'Road Test',
    attendance : [
      { date : '07-05-2024', status : 'Completed' },
      { date : '08-05-2024', status : 'Not Attend' },
      { date : '09-05-2024', status : 'Action not Taken' }
    ]
  },
  {
    name : 'Drivers Education',
    attendance : [
      { date : '10-05-2024', status : 'Completed' },
      { date : '11-05-2024', status : 'Not Attend' },
      { date : '12-05-2024', status : 'Action not Taken' }
    ]
  },
  {
    name : 'Defensive',
    attendance : [
      { date : '13-05-2024', status : 'Completed' },
      { date : '14-05-2024', status : 'Not Attend' },
      { date : '15-05-2024', status : 'Action not Taken' }
    ]
  }
];


 function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{width:''}}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" align='' scope="row">
          {row.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>Date</TableCell>
                    <TableCell align='center'>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.attendance.map((historyRow,index) => (
                    <TableRow key={index}>
                      <TableCell align='center' component="th" scope="row">
                        <Chip label={historyRow.date} />
                      </TableCell>
                      <TableCell align='center'>
                        <Chip
                        color={
                          (()=>{
                            switch (historyRow.status) {
                              case 'Completed':
                                return 'success'
                              case 'Not Attend':
                                return 'error'
                              case 'Action not Taken':
                                return 'primary'
                              default:
                                break;
                            }
                          })()
                        } 
                        label={historyRow.status} 
                        />
                        </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



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
                    <Chip label="Active" size="small" color="success" />
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

        <TabPanel value="2">                   {/* schedules */}
            <Calendar />                       
        </TabPanel>
        
        <TabPanel value="3">                   {/* Courses */}
          <Grid container spacing={2} >

            <Grid item lg={3}>
            <MainCard
          title="DUI"
          content={false}
        >
          <CardMedia component="img" image={courseImage} alt="green iguana" />
        <CardContent sx={{gap:'10px',display:'flex',flexDirection:'column'}}>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Progress ( 1/ 4 )
          </Typography>
          <LinearWithLabel value={25} color="warning" sx={{ height: 10 }} />

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>Duration</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}>
            {/* <GiDuration size={25} /> */}
            <Chip color={'warning'} label={'4 hours'} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>Payment Status</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip  label={'$ 35 Paid'} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>PaperWork Status</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip color={'success'} label={'Completed'} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>Test Taken</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip color={'error'} label={'Not Taken'} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>Attempts Taken</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip  label={' 2 '} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography> Status</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip color={'error'} label={'Not Qualified Yet'} />
            </Box>
          </Stack>

        </CardContent>
            </MainCard>
            </Grid>

            <Grid item lg={3}>
            <MainCard
          title="Behind the Wheels"
          content={false}
        >
          <CardMedia component="img" image={courseImage} alt="green iguana" />
        <CardContent sx={{gap:'10px',display:'flex',flexDirection:'column'}}>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Progress ( 2 / 4 )
          </Typography>
          <LinearWithLabel value={50} color="warning" sx={{ height: 10 }} />

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>Duration</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}>
            {/* <GiDuration size={25} /> */}
            <Chip color={'warning'} label={'4 hours'} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>Payment Status</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip  label={'$ 35 Paid'} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>PaperWork Status</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip color={'success'} label={'Completed'} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>Test Taken</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip color={'error'} label={'Not Taken'} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>Attempts Taken</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip  label={' 2 '} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography> Status</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip color={'error'} label={'Not Qualified Yet'} />
            </Box>
          </Stack>

        </CardContent>
            </MainCard>
            </Grid>

            <Grid item lg={3}>
            <MainCard
          title="Road Test"
          content={false}
        >
          <CardMedia component="img" image={courseImage} alt="green iguana" />
        <CardContent sx={{gap:'10px',display:'flex',flexDirection:'column'}}>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Progress ( 3 / 4 )
          </Typography>
          <LinearWithLabel value={75} color="warning" sx={{ height: 10 }} />

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>Duration</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}>
            {/* <GiDuration size={25} /> */}
            <Chip color={'warning'} label={'4 hours'} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>Payment Status</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip  label={'$ 35 Paid'} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>PaperWork Status</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip color={'success'} label={'Completed'} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>Test Taken</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip color={'error'} label={'Not Taken'} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>Attempts Taken</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip  label={' 2 '} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography> Status</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip color={'error'} label={'Not Qualified Yet'} />
            </Box>
          </Stack>

        </CardContent>
            </MainCard>
            </Grid>

            <Grid item lg={3}>
            <MainCard
          title="Defensive"
          content={false}
        >
          <CardMedia component="img" image={courseImage} alt="green iguana" />
        <CardContent sx={{gap:'10px',display:'flex',flexDirection:'column'}}>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Progress ( 4 / 4 )
          </Typography>
          <LinearWithLabel value={100} color="warning" sx={{ height: 10 }} />

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>Duration</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}>
            {/* <GiDuration size={25} /> */}
            <Chip color={'warning'} label={'4 hours'} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>Payment Status</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip  label={'$ 35 Paid'} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>PaperWork Status</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip color={'success'} label={'Completed'} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>Test Taken</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip color={'error'} label={'Not Taken'} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography>Attempts Taken</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip  label={' 2 '} />
            </Box>
          </Stack>

          <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography> Status</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'7px'}}> 
            <Chip color={'error'} label={'Not Qualified Yet'} />
            </Box>
          </Stack>

        </CardContent>
            </MainCard>
            </Grid>

          </Grid>
        </TabPanel>


        <TabPanel value="4">                   {/* attendance */}

        {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Attendance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow
                // key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">20-05-2024</TableCell>
                <TableCell align="center">
                  <Chip color='error' label={'Not Attend'} />
                </TableCell>
                
              </TableRow>
              <TableRow
                // key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">21-05-2024</TableCell>
                <TableCell align="center">
                  <Chip label={'Action Not Taken'} />
                </TableCell>
                
              </TableRow>
              <TableRow
                // key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">22-05-2024</TableCell>
                <TableCell align="center">
                  <Chip color='error' label={'Not Attend'} />
                </TableCell>
                
              </TableRow>
              <TableRow
                // key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">22-05-2024</TableCell>
                <TableCell align="center">
                  <Chip color='success' label={'Completed'} />
                </TableCell>
                
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer> */}


      <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <Row key={row?.name} row={row} />
          ))}
        </TableBody>
      </Table>
     </TableContainer>

        </TabPanel>


        <TabPanel value="5">

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>S.no</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Attempts</TableCell>
            <TableCell align="center">Score</TableCell>
            <TableCell align="center">Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
              // key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="center">10-05-2024</TableCell>
              <TableCell align="center">Attempt 1</TableCell>
              <TableCell align="center">10</TableCell>
              <TableCell align="center">
                <Chip color='error' label={'Fail'} />
              </TableCell>
            </TableRow>

            <TableRow
              // key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                2
              </TableCell>
              <TableCell align="center">11-05-2024</TableCell>
              <TableCell align="center">Attempt 2</TableCell>
              <TableCell align="center">13</TableCell>
              <TableCell align="center">
                <Chip color='error' label={'Fail'} />
              </TableCell>
            </TableRow>

            <TableRow
              // key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                3
              </TableCell>
              <TableCell align="center">12-05-2024</TableCell>
              <TableCell align="center">Attempt 3</TableCell>
              <TableCell align="center">7</TableCell>
              <TableCell align="center">
                <Chip color='error' label={'Fail'} />
              </TableCell>
            </TableRow>

        </TableBody>
      </Table>
    </TableContainer>

        </TabPanel>


      </TabContext>
    </Box>
    </MainCard>
    </>
  )
}

export default StudentAction