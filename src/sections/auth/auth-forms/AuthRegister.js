/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  Grid,
  Link,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  FormHelperText,
  TextField,
  Select,
  MenuItem
} from '@mui/material';
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';
import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import toast, { Toaster } from 'react-hot-toast';
import Joi from 'joi';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';



const AuthRegister = () => {

  // for date pickers
  const [selectedDate, setSelectedDate] = useState(dayjs('2000-08-18'));
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    console.log('Selected Date:', newDate.format('YYYY-MM-DD'));
  };
  // for date pickers

  const { register } = useAuth();
  const scriptedRef = useScriptRef();
  const navigate = useNavigate();

  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    mobile:'',
    password: '',
    dob: '',
    gender: 'Male',
    address : '',
    city : '',
    state : '',
    country : '',
    zipcode : '',
    serviceLocation : '',
    zone : '',
    courses : '',
    status : '',
    image : 'https://www.biowritingservice.com/wp-content/themes/tuborg/images/Executive%20Bio%20Sample%20Photo.png'
  });
  const [formErrors, setFormErrors] = useState({});

  // const handleClickShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  const handleSelectChange = (event) => {
    setFormValues({ ...formValues, gender: event.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormValues({ ...formValues, mobile: value });
  };
  
  

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const schema = Joi.object({
    firstname: Joi.string().max(255).required().label('First Name'),
    lastname: Joi.string().max(255).required().label('Last Name'),
    email: Joi.string().email({ tlds: { allow: false } }).max(255).required().label('Email'),
    password: Joi.string().max(255).required().label('Password'),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = schema.validate(formValues, { abortEarly: false });

    if (error) {
      const errors = {};
      error.details.forEach((detail) => {
        errors[detail.path[0]] = detail.message;
      });
      setFormErrors(errors);
      toast.error(error);
    } else {
      try {
        await register(formValues.email, formValues.password, formValues.firstname, formValues.lastname,formValues.address,formValues.dob,formValues.company,formValues.city,formValues.country,formValues.courses,formValues.gender,formValues.image,formValues.state,formValues.status,formValues.zipcode,formValues.zone,formValues.serviceLocation,formValues.mobile);
        if (scriptedRef.current) {
          toast.success('Your registration has been successfully completed.');
          setTimeout(() => {
            navigate('/login', { replace: true });
          }, 1500);
        }
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  useEffect(() => {
    changePassword('');
  }, []);

  return (
    <>
      <form noValidate onSubmit={handleSubmit}>
        <Toaster />
        <Grid container spacing={3}>

          <Grid item xs={12} md={6}> {/*First Name*/}
            <Stack spacing={1}>
              <InputLabel htmlFor="firstname-signup">First Name</InputLabel>
              <OutlinedInput
                id="firstname-signup"
                type="text"
                value={formValues.firstname}
                name="firstname"
                onChange={handleChange}
                placeholder="John"
                fullWidth
                error={Boolean(formErrors.firstname)}
              />
              {formErrors.firstname && (
                <FormHelperText error id="helper-text-firstname-signup">
                  {formErrors.firstname}
                </FormHelperText>
              )}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>  {/*Last Name*/}
            <Stack spacing={1}>
              <InputLabel htmlFor="lastname-signup">Last Name</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formErrors.lastname)}
                id="lastname-signup"
                type="text"
                value={formValues.lastname}
                name="lastname"
                onChange={handleChange}
                placeholder="Doe"
              />
              {formErrors.lastname && (
                <FormHelperText error id="helper-text-lastname-signup">
                  {formErrors.lastname}
                </FormHelperText>
              )}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}> {/*Dob*/}
            <Stack spacing={1}>
              <InputLabel htmlFor="dob-signup">Date of Birth</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={selectedDate}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Stack>
          </Grid>
          
          <Grid item xs={12} md={6}> {/*Gender*/}
            <Stack spacing={1}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={formValues.gender}
               name="gender"
               onChange={handleSelectChange}
               fullWidth
               >
                <MenuItem value={'Male'}>Male</MenuItem>
                <MenuItem value={'Female'}>Female</MenuItem>
                <MenuItem value={'Trans'}>Trans</MenuItem>
              </Select>
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>  {/*email*/}
            <Stack spacing={1}> 
              <InputLabel htmlFor="email-signup">Email Address</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formErrors.email)}
                id="email-signup"
                type="email"
                value={formValues.email}
                name="email"
                onChange={handleChange}
                placeholder="demo@company.com"
              />
              {formErrors.email && (
                <FormHelperText error id="helper-text-email-signup">
                  {formErrors.email}
                </FormHelperText>
              )}
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>   {/*mobile*/}
            <Stack spacing={1}>
              <InputLabel htmlFor="company-signup">Mobile No</InputLabel>
              <PhoneInput
                fullWidth
                defaultCountry="ua"
                id="mobile-signup"
                style={{width:'100'}}
                value={formValues.mobile}
                onChange={handlePhoneChange}
                placeholder="Mobile Number"
              />
              {/* <OutlinedInput
                fullWidth
                id="company-signup"
                value={formValues.mobile}
                name="company"
                onChange={handleChange}
                placeholder="Demo Inc."
              /> */}
            </Stack>
          </Grid>

          <Grid item xs={12} >  {/*address*/}
            <Stack spacing={1}> 
              <InputLabel htmlFor="email-signup">Address</InputLabel>
              <OutlinedInput
                fullWidth
                multiline
                error={Boolean(formErrors.email)}
                id="email-signup"
                type="email"
                value={formValues.address}
                name="address"
                onChange={handleChange}
                placeholder="demo@company.com"
              />
              {formErrors.email && (
                <FormHelperText error id="helper-text-email-signup">
                  {formErrors.email}
                </FormHelperText>
              )}
            </Stack>
          </Grid>


          <Grid item xs={12} lg={6}>  {/*city*/}
            <Stack spacing={1}> 
              <InputLabel htmlFor="email-signup">city</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formErrors.city)}
                id="email-signup"
                type="email"
                value={formValues.city}
                name="city"
                onChange={handleChange}
                placeholder="demo@company.com"
              />
              {formErrors.city && (
                <FormHelperText error id="helper-text-email-signup">
                  {formErrors.city}
                </FormHelperText>
              )}
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>  {/*state*/}
            <Stack spacing={1}> 
              <InputLabel htmlFor="email-signup">state</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formErrors.state)}
                id="email-signup"
                type="state"
                value={formValues.state}
                name="city"
                onChange={handleChange}
                placeholder="demo@company.com"
              />
              {formErrors.state && (
                <FormHelperText error id="helper-text-email-signup">
                  {formErrors.state}
                </FormHelperText>
              )}
            </Stack>
          </Grid>


          <Grid item xs={12} lg={6}>  {/*country*/}
            <Stack spacing={1}> 
              <InputLabel htmlFor="email-signup">country</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formErrors.country)}
                id="email-signup"
                type="country"
                value={formValues.country}
                name="country"
                onChange={handleChange}
                placeholder="demo@company.com"
              />
              {formErrors.country && (
                <FormHelperText error id="helper-text-email-signup">
                  {formErrors.country}
                </FormHelperText>
              )}
            </Stack>
          </Grid>


          <Grid item xs={12} lg={6}>  {/*zip code*/}
            <Stack spacing={1}> 
              <InputLabel htmlFor="email-signup">zip code</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formErrors.zipcode)}
                id="email-signup"
                type="country"
                value={formValues.zipcode}
                name="zipcode"
                onChange={handleChange}
                placeholder="demo@company.com"
              />
              {formErrors.zipcode && (
                <FormHelperText error id="helper-text-email-signup">
                  {formErrors.zipcode}
                </FormHelperText>
              )}
            </Stack>
          </Grid>


          <Grid item xs={12} lg={6}>  {/*service location*/}
            <Stack spacing={1}> 
              <InputLabel htmlFor="email-signup">service location</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formErrors.serviceLocation)}
                id="email-signup"
                type="country"
                value={formValues.serviceLocation}
                name="serviceLocation"
                onChange={handleChange}
                placeholder="demo@company.com"
              />
              {formErrors.serviceLocation && (
                <FormHelperText error id="helper-text-email-signup">
                  {formErrors.serviceLocation}
                </FormHelperText>
              )}
            </Stack>
          </Grid>



          <Grid item xs={12} lg={6}>  {/*zone*/}
            <Stack spacing={1}> 
              <InputLabel htmlFor="email-signup">zone</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formErrors.zone)}
                id="email-signup"
                type="country"
                value={formValues.zone}
                name="zone"
                onChange={handleChange}
                placeholder="demo@company.com"
              />
              {formErrors.zone && (
                <FormHelperText error id="helper-text-email-signup">
                  {formErrors.zone}
                </FormHelperText>
              )}
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>  {/*course*/}
            <Stack spacing={1}> 
              <InputLabel htmlFor="email-signup">courses</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formErrors.courses)}
                id="email-signup"
                type="country"
                value={formValues.courses}
                name="courses"
                onChange={handleChange}
                placeholder="demo@company.com"
              />
              {formErrors.courses && (
                <FormHelperText error id="helper-text-email-signup">
                  {formErrors.courses}
                </FormHelperText>
              )}
            </Stack>
          </Grid>


          <Grid item xs={12} lg={6}>  {/*status*/}
            <Stack spacing={1}> 
              <InputLabel htmlFor="email-signup">status</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formErrors.status)}
                id="email-signup"
                type="country"
                value={formValues.status}
                name="status"
                onChange={handleChange}
                placeholder="demo@company.com"
              />
              {formErrors.status && (
                <FormHelperText error id="helper-text-email-signup">
                  {formErrors.status}
                </FormHelperText>
              )}
            </Stack>
          </Grid>

          

          <Grid item xs={12}>
            <Typography variant="body2">
              By Signing up, you agree to our &nbsp;
              <Link variant="subtitle2" component={RouterLink} to="#">
                Terms of Service
              </Link>
              &nbsp; and &nbsp;
              <Link variant="subtitle2" component={RouterLink} to="#">
                Privacy Policy
              </Link>
            </Typography>
          </Grid>



          <Grid item xs={12}>
            <AnimateButton>
              <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary">
                Create Account
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AuthRegister;
