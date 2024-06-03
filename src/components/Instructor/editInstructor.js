import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Box, DialogActions, InputLabel, TextField, DialogTitle, Dialog } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function SimpleDialog(props) {
  // ----------- fetching instructor details process -------------

  const [epicUser, setEpicUser] = useState(null);

  const userId = JSON.parse(localStorage.getItem('partnerid'));

  const baseUrl = `https://phpstack-977481-4409636.cloudwaysapps.com/api/v1`;

  useEffect(() => {
    fetchInstructorDetails();
  }, []);

  const fetchInstructorDetails = () => {
    try {
      axios.get(`${baseUrl}/getInstructorById/${userId}`).then((data) => {
        const res = data.data;
        if (res.status === false) {
          console.log(`/getInstructorById/ - error - API error`, res.message);
        } else {
          setEpicUser(res.data[0]);
        }
      });
    } catch (error) {
      console.log(`error in getting instructor details using - partner ID - `, error);
    }
  };

  // ----------- fetching instructor details process -------------

  const [instructorData, setInstructorData] = useState({
    partnerid: null,
    userid: null,
    firstname: '',
    lastname: 'J',
    dob: '',
    phone: '',
    email: '',
    gender: '',
    address: '',
    country: '',
    state: '',
    city: '',
    zipcode: null,
    servicelocation: null,
    zones: null,
    profileimage: '',
    courseshandled: null,
    status: ''
  });

  // Function to extract specific property values
  const extractPropertyValues = (array, key) => {
    return _.map(array, key);
  };

  useEffect(() => {
    setInstructorData((prevData) => ({
      ...prevData,
      partnerid: Number(epicUser?.partnerid),
      userid: epicUser?.userid,
      firstname: epicUser?.firstname || '',
      lastname: epicUser?.lastname || '',
      phone: epicUser?.contactno || '',
      address: epicUser?.address || '',
      country: epicUser?.country || '',
      zipcode: Number(epicUser?.postcode) || null,
      dob: epicUser?.dob || '',
      email: epicUser?.primaryemail || '',
      gender: epicUser?.gender || '',
      state: epicUser?.state || '',
      city: epicUser?.city || '',
      servicelocation: Number(epicUser?.applocationid) || null,
      zones: extractPropertyValues(epicUser?.zones, 'applocationconfigid') || [],
      profileimage: epicUser?.partnerimage || '',
      courseshandled: extractPropertyValues(epicUser?.courses, 'productid') || [],
      status: epicUser?.status || ''
    }));
  }, [epicUser]);

  console.log(`instructorData>>>>>>>>`, instructorData);

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setInstructorData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleUpdate = () => {
    const payload = {
      ...instructorData,
      zipcode: Number(instructorData.zipcode)
    };

    const baseUrl = `https://phpstack-977481-4409636.cloudwaysapps.com/api/v1`;
    try {
      axios.post(`${baseUrl}/editInstructor`, payload).then((val) => {
        console.log(`server response`, val);
        onClose(selectedValue);
      });

    } catch (error) {
      console.log(`error in editing instructor`, error);
    }
  };

  console.log(`updatred instructor data`, instructorData);

  return (
    <Dialog sx={{}} onClose={handleClose} open={open}>
      <DialogTitle>Edit Profile</DialogTitle>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '50vh', padding: '20px', gap: '5px' }}>
        <InputLabel>First Name</InputLabel>
        <TextField value={instructorData.firstname} name="firstname" onChange={handleEdit} variant="outlined" />
        <InputLabel>Last Name</InputLabel>
        <TextField value={instructorData.lastname} name="lastname" onChange={handleEdit} variant="outlined" />
        <InputLabel>Phone Number</InputLabel>
        <TextField value={instructorData.phone} name="phone" onChange={handleEdit} variant="outlined" />
        <InputLabel>Country</InputLabel>
        <TextField value={instructorData.country} name="country" onChange={handleEdit} variant="outlined" />
        <InputLabel>Zip Code</InputLabel>
        <TextField type="number" value={instructorData.zipcode} name="zipcode" onChange={handleEdit} variant="outlined" />
        <InputLabel>Address</InputLabel>
        <TextField value={instructorData.address} name="address" onChange={handleEdit} variant="outlined" />
      </Box>
      <DialogActions>
        <Button onClick={handleClose} variant="contained" color="error">
          Close
        </Button>
        <Button variant="contained" onClick={handleUpdate} color="success">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};