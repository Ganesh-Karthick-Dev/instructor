/* eslint-disable no-unused-vars */

import { Grid } from '@mui/material';
import UserCountCard from 'components/cards/statistics/UserCountCard';
import React from 'react';
import { ContactsOutlined, FileProtectOutlined, PieChartOutlined, FieldTimeOutlined , OrderedListOutlined , HourglassOutlined  , CheckSquareOutlined , ScheduleOutlined , FileExcelOutlined } from '@ant-design/icons';
// import { useTheme } from '@emotion/react';

import { FcBookmark } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { FcDeleteRow } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";

const icons = {
  FcBookmark,
  FcVoicePresentation,
  FcClock,
  FcOk,
  FcDeleteRow,
  FcDocument,
  FcIdea
}



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
            iconPrimary={icons.FcBookmark}
            color={''}
            iconColor={'#f59e0b'}
          />
        </Grid>

        
        <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard primary="Availability" secondary="" secondary2="11/90" iconPrimary={icons.FcVoicePresentation} color={''} iconColor={'#dc2626'} />
        </Grid>
        

        <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard primary="Total Hours Spent" secondary2="90hrs" iconPrimary={icons.FcClock} color={''} iconColor={'#2563eb'} />
        </Grid>

        <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard primary="Qualified Students" secondary="" secondary2="35" iconPrimary={icons.FcOk} color={''} iconColor={'#8b5cf6'} />
        </Grid>


        <Grid item xs={12} lg={4} sm={6}>
          <UserCountCard primary="Total Class Cancellation" secondary="" secondary2="2" iconPrimary={icons.FcDeleteRow} color={''} iconColor={'#06b6d4'} />
        </Grid>

        <Grid item xs={12} alignSelf={'center'} lg={4} sm={6}>
          <UserCountCard
            primary="Total Students"
            // secondary="1K"
            secondary2={`BWT - 10 , DUI - 25`}
            iconPrimary={icons.FcDocument}
            color={''}
            iconColor={'#65a30d'}
          />
        </Grid>

        <Grid item xs={12} alignSelf={'center'} lg={4} sm={6}>
          <UserCountCard primary="Total Schedules" secondary="" secondary2="BWT - 16 , DUI - 23" iconPrimary={icons.FcIdea} color={''} iconColor={'#2dd4bf'} />
        </Grid>

        {/* <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard primary="Total Class Cancellation" secondary="" secondary2="2" iconPrimary={FileExcelOutlined} color={'#020617'} iconColor={'#f8fafc'} />
        </Grid> */}


      </Grid>
    </>
  );
};

export default Statistics;
