/* eslint-disable no-unused-vars */

import { Grid } from '@mui/material';
import UserCountCard from 'components/cards/statistics/UserCountCard';
import React from 'react';
import { ContactsOutlined, FileProtectOutlined, PieChartOutlined, FieldTimeOutlined , OrderedListOutlined , HourglassOutlined  , CheckSquareOutlined , ScheduleOutlined , FileExcelOutlined } from '@ant-design/icons';
// import { useTheme } from '@emotion/react';

const Statistics = () => {
  // const theme = useTheme();

  return (
    <>
      <Grid container sx={{marginBottom:'20px'}} spacing={3}>
        <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard
            primary="Courses"
            secondary=""
            secondary2="BTW , DUI"
            iconPrimary={OrderedListOutlined}
            color={'#020617'}
            iconColor={'#f59e0b'}
          />
        </Grid>

        
        <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard primary="Availability" secondary="" secondary2="11/90" iconPrimary={ScheduleOutlined} color={'#020617'} iconColor={'#dc2626'} />
        </Grid>
        

        <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard primary="Total Hours Spent" secondary2="90hrs" iconPrimary={HourglassOutlined} color={'#020617'} iconColor={'#2563eb'} />
        </Grid>

        <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard primary="Qualified Students" secondary="" secondary2="35" iconPrimary={CheckSquareOutlined} color={'#020617'} iconColor={'#8b5cf6'} />
        </Grid>


        <Grid item xs={12} lg={4} sm={6}>
          <UserCountCard primary="Total Class Cancellation" secondary="" secondary2="2" iconPrimary={FileExcelOutlined} color={'#020617'} iconColor={'#06b6d4'} />
        </Grid>

        <Grid item xs={12} alignSelf={'center'} lg={4} sm={6}>
          <UserCountCard
            primary="Total Students"
            // secondary="1K"
            secondary2={`BWT - 10 , DUI - 25`}
            iconPrimary={FileProtectOutlined}
            color={'#020617'}
            iconColor={'#65a30d'}
          />
        </Grid>

        <Grid item xs={12} alignSelf={'center'} lg={4} sm={6}>
          <UserCountCard primary="Total Schedules" secondary="" secondary2="BWT - 16 , DUI - 23" iconPrimary={PieChartOutlined} color={'#020617'} iconColor={'#2dd4bf'} />
        </Grid>

        {/* <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard primary="Total Class Cancellation" secondary="" secondary2="2" iconPrimary={FileExcelOutlined} color={'#020617'} iconColor={'#f8fafc'} />
        </Grid> */}


      </Grid>
    </>
  );
};

export default Statistics;
