import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Box, DialogActions, InputLabel, TextField, DialogTitle, Dialog } from '@mui/material';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function SimpleDialog(props) {
    const instructor = useSelector((state) => state.userSlice);
    const { partnerid , userid } = instructor.instructor;

    const [userDetails, setUserDetails] = useState({});
    console.log(`power user`,userDetails);
    const [instructorData, setInstructorData] = useState({
        partnerid: partnerid,
        userid: userid,
        firstname: '',
        lastname: '',
        dob: '2002-06-02',
        phone: '',
        email: 'dharshini19696@gmail.com',
        gender: 'Female',
        address: '',
        country: '',
        state: 'Georgia',
        city: 'Sandy springs',
        zipcode: '',
        servicelocation: 4,
        zones: [54, 59],
        profileimage: 'https://webnox.blr1.digitaloceanspaces.com/driving_school/user.png',
        courseshandled: [1, 2],
        status: 'Active'
    });

    useEffect(() => {
        const handleUserFetch = async () => {
            try {
                const response = await axios.get(`https://phpstack-977481-4409636.cloudwaysapps.com/api/v1/getInstructorById/${partnerid}`);
                const user = response.data.data[0];
                setUserDetails(user);
            } catch (error) {
                console.log(error);
            }
        };
        handleUserFetch();
    }, [partnerid]);

    
  

    useEffect(() => {
      const zones = userDetails.zones ? userDetails.zones.map(zone => zone.applocationconfigid) : [];
      const courses = userDetails.courses ? userDetails.courses.map(courses => courses.productid) : [];
        setInstructorData((prevData) => ({
            ...prevData,
            firstname: userDetails.firstname || '',
            lastname: userDetails.lastname || '',
            phone: userDetails.contactno || '',
            address: userDetails.address || '',
            country: userDetails.country || '',
            zipcode: Number(userDetails.postcode) || '',
            dob : userDetails.dob || '',
            email: userDetails.primaryemail || '',
            gender:userDetails.gender || '',
            state:userDetails.state || '',
            city:userDetails.city || '',
            servicelocation:Number(userDetails.applocationid) || 0,
            zones : zones || '',
            profileimage:userDetails.partnerimage || '',
            courseshandled : courses || '',
            status: userDetails.status || ''
        }));
    }, [userDetails]);

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

    const handleUpdate = ()=> {
      const baseUrl = `https://phpstack-977481-4409636.cloudwaysapps.com/api/v1`
      try {
        axios.post(`${baseUrl}/editInstructor`,instructorData)
              .then((val)=>{
                console.log(`server response`,val);
              })
      } catch (error) {
        console.log(`error in editing instructor`,error);
      }
    }

    console.log(`updatred instructor data`,instructorData);

    return (
        <Dialog sx={{}} onClose={handleClose} open={open}>
            <DialogTitle>Edit Profile</DialogTitle>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '50vh', padding: '20px', gap: '5px' }}>
                <InputLabel>First Name</InputLabel>
                <TextField value={instructorData.firstname} name='firstname' onChange={handleEdit} variant="outlined" />
                <InputLabel>Last Name</InputLabel>
                <TextField value={instructorData.lastname} name='lastname' onChange={handleEdit} variant="outlined" />
                <InputLabel>Phone Number</InputLabel>
                <TextField value={instructorData.phone} name='phone' onChange={handleEdit} variant="outlined" />
                <InputLabel>Country</InputLabel>
                <TextField value={instructorData.country} name='country' onChange={handleEdit} variant="outlined" />
                <InputLabel>Zip Code</InputLabel>
                <TextField value={instructorData.zipcode} name='zipcode' onChange={handleEdit} variant="outlined" />
                <InputLabel>Address</InputLabel>
                <TextField value={instructorData.address} name='address' onChange={handleEdit} variant="outlined" />
            </Box>
            <DialogActions>
                <Button onClick={handleClose} variant='contained' color='error'>Cancel</Button>
                <Button variant='contained' onClick={handleUpdate} color='success'>Update</Button>
            </DialogActions>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};
