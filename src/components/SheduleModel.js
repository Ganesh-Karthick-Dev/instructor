/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import _ from 'lodash';
import { Grid, Stack } from '@mui/material';
import ProfileTab from '../sections/apps/profiles/user/ProfileTabs';
import ColumnHiding from 'pages/tables/react-table/ColumnHiding';
import { RiCloseLargeFill } from "react-icons/ri";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height : '85vh',
  width: '95%',
  bgcolor: 'background.paper',
  boxShadow: 24,

  overflowY: 'scroll',
  border:'none',
  outline:'none'
};

const SheduleModel = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log(data);

  useEffect(() => {
    if (!_.isEmpty(data)) {
      handleOpen();
    }
  }, [data]);


  const instructorData = [
    {
      id : 1,
      courseName : 'Behind the Wheels',
      instructorName : 'Stebin Ben',
      courseImage : '',
      studentDetails : [
        {id : 1,studentName :'student 1',course:'Defensive',status:'Completed'},
        {id : 2,studentName :'student 2',course:'Drivers Education',status:'Ongoing'},
        {id : 3,studentName :'student 3',course:'DUI',status:'Not Yet Started'},
        {id : 4,studentName :'student 4',course:'Road Test',status:'Not Attend'},
        {id : 5,studentName :'student 5',course:'Behind the Wheels',status:'Ongoing'},
      ]
    },
    // {
    //   id : 2,
    //   instructorName : 'Ben Stebin ',
    //   date : '10-05-2024',
    //   time : '01:00pm - 02:30pm',
    //   courseImage : '',
    //   studentDetails : [
    //     {id : 1,studentName :'student 1',course:'Defensive',status:'Completed'},
    //     {id : 2,studentName :'student 2',course:'Drivers Education',status:'Ongoing'},
    //     {id : 3,studentName :'student 3',course:'DUI',status:'Not Yet Started'},
    //     {id : 4,studentName :'student 4',course:'Road Test',status:'Not Attend'},
    //     {id : 5,studentName :'student 5',course:'Behind the Wheels',status:'Ongoing'},
    //   ]
    // },
    // {
    //   id : 4,
    //   instructorName : 'Ben Stebin ',
    //   date : '10-05-2024',
    //   time : '01:00pm - 02:30pm',
    //   courseImage : '',
    //   studentDetails : [
    //     {id : 1,studentName :'student 1',course:'Defensive',status:'Completed'},
    //     {id : 2,studentName :'student 2',course:'Drivers Education',status:'Ongoing'},
    //     {id : 3,studentName :'student 3',course:'DUI',status:'Not Yet Started'},
    //     {id : 4,studentName :'student 4',course:'Road Test',status:'Not Attend'},
    //     {id : 5,studentName :'student 5',course:'Behind the Wheels',status:'Ongoing'},
    //   ]
    // },
  ]

  return (
    <>
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <Stack sx={{position:'relative'}} gap={2}>
              <Grid sx={{position:'sticky',zIndex:'25',top:'0',left:'0',right:'0',background:'white',marginTop:'0',padding:'20px',borderBottom:'1px solid #e5e7eb'}} container>
                <Grid item sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography  id="keep-mounted-modal-title" color={'primary'} variant="h2" component="h2">
                    {data?.title}
                  </Typography>
                  <Button variant="error" sx={{ color: 'crimson' }} onClick={handleClose}>
                    <RiCloseLargeFill size={30} />
                  </Button>
                </Grid>
                
              </Grid>
              <Grid container gap={1} sx={{display:'flex'}}>
                <Grid sx={{marginBottom:'10px'}} item md={12} sm={12} xs={12} lg={3}>
                  <ProfileTab data={instructorData} />
                </Grid>
                <Grid item md={12} sm={12} xs={12} lg={8}>
                  <ColumnHiding />
                </Grid>
                </Grid>
              {/* <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
            </Stack>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default SheduleModel;
