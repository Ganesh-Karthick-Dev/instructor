import { Grid } from '@mui/material';
import UserCountCard from 'components/cards/statistics/UserCountCard';
import React from 'react';
import { ContactsOutlined, FileProtectOutlined, PieChartOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { useTheme } from '@emotion/react';

const Statistics = () => {
  const theme = useTheme();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard
            primary="Total class schedule"
            secondary="1,658"
            secondary2="37%"
            iconPrimary={ContactsOutlined}
            color={'#16a34a'}
          />
        </Grid>

        <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard
            primary="Availability ending Date"
            secondary="1K"
            secondary2="98%"
            iconPrimary={FileProtectOutlined}
            color={theme.palette.primary.main}
          />
        </Grid>

        <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard primary="Total course Taken" secondary="5,678" secondary2="43%" iconPrimary={PieChartOutlined} color={'#f59e0b'} />
        </Grid>

        <Grid item xs={12} lg={3} sm={6}>
          <UserCountCard primary="Total Hours Spent" secondary="5,678" secondary2="20%" iconPrimary={FieldTimeOutlined} color={'#9333ea'} />
        </Grid>
      </Grid>
    </>
  );
};

export default Statistics;
