import { Grid } from '@mui/material';
import UserCountCard from 'components/cards/statistics/UserCountCard';
import React from 'react';
import { ContactsOutlined, FileProtectOutlined, PieChartOutlined, FieldTimeOutlined } from '@ant-design/icons';
// import { useTheme } from '@emotion/react';

const Statistics = () => {
  // const theme = useTheme();

  return (
    <>
      <Grid container sx={{marginBottom:'20px'}} spacing={3}>
        <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard
            primary="Total class schedule"
            secondary="1,658"
            secondary2="37%"
            iconPrimary={ContactsOutlined}
            color={'#6b7280'}
            iconColor={'#f59e0b'}
          />
        </Grid>

        <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard
            primary="Availability ending Date"
            // secondary="1K"
            secondary2="98%"
            iconPrimary={FileProtectOutlined}
            color={'#6b7280'}
            iconColor={'#65a30d'}
          />
        </Grid>

        <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard primary="Total course Taken" secondary="" secondary2="100%" iconPrimary={PieChartOutlined} color={'#6b7280'} iconColor={'#2dd4bf'} />
        </Grid>

        <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard primary="Total Hours Spent" secondary="5,678" secondary2="20%" iconPrimary={FieldTimeOutlined} color={'#6b7280'} iconColor={'#06b6d4'} />
        </Grid>

        <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard primary="Courses" secondary2="BTW,DUI" iconPrimary={FieldTimeOutlined} color={'#6b7280'} iconColor={'#2563eb'} />
        </Grid>

        <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard primary="Qualified Students" secondary="" secondary2="20%" iconPrimary={FieldTimeOutlined} color={'#6b7280'} iconColor={'#8b5cf6'} />
        </Grid>

        <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard primary="Availability" secondary="" secondary2="6/90" iconPrimary={FieldTimeOutlined} color={'#6b7280'} iconColor={'#dc2626'} />
        </Grid>

        <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard primary="Total Class Cancellation" secondary="" secondary2="2" iconPrimary={FieldTimeOutlined} color={'#6b7280'} iconColor={'#f8fafc'} />
        </Grid>


      </Grid>
    </>
  );
};

export default Statistics;
