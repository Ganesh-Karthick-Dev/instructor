/* eslint-disable no-unused-vars */

import { useEffect, useRef, useState } from 'react';
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
  MenuItem,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Autocomplete,
  Checkbox,
  ListItemText
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
import axios from 'axios';

// react icons
import { MdDeleteForever } from 'react-icons/md';
// raect icons

// prime react
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { FormatOverlineSharp, Margin } from '@mui/icons-material';
// prime react

const AuthRegister = () => {
  const baseUrl = `https://phpstack-977481-4409636.cloudwaysapps.com/api/v1`;

  // for date pickers
  const [selectedDate, setSelectedDate] = useState(dayjs('2000-08-18'));
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    console.log('Selected Date:', newDate.format('YYYY-MM-DD'));
  };
  // for date pickers

  // const { register } = useAuth();
  // const scriptedRef = useScriptRef();
  const navigate = useNavigate();

  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    dob: selectedDate,
    gender: 'Male',
    address: '',
    city: '',
    state: '',
    country: '',
    zipcode: null,
    servicelocation: '',
    zones: [],
    profileimage: 'https://webnox.blr1.digitaloceanspaces.com/driving_school/user.png',
    courseshandled: [],
    documents: [
      {
        doctypeid: 1,
        doc: 'https://webnox.blr1.digitaloceanspaces.com/driving_school/double%20quotes%20to%20single%20quotes.PNG'
      }
    ],
    status: 'Active',
    roleid: 3,
    configid: 1,
    authmode: 1
  });
  const [formErrors, setFormErrors] = useState({});

  // form input handlers
  const handleSelectChange = (event) => {
    setFormValues({ ...formValues, gender: event.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormValues({ ...formValues, mobile: value });
  };

  console.log(`register form values`, formValues);

  // ----------------------- service location-------------------
  const [serviceLocationsApi, setServiceLocationsApi] = useState([]);
  // console.log(`service locations`,serviceLocationsApi);
  useEffect(() => {
    handleServiceLocationsApi();
  }, []);
  const handleServiceLocationsApi = () => {
    try {
      axios.post(`${baseUrl}/getAllBranches`).then((val) => {
        console.log(`doc`, val);
        const data = val.data.response?.map((item) => {
          return {
            id: item.applocationid,
            label: item.locationname
          };
        });
        setServiceLocationsApi(data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleServiceLocations = (value, val) => {
    // console.log(`value`,value);
    handleZoneApi(value.target.value);
    setFormValues({ ...formValues, serviceLocation: value.target.value });
  };
  // ----------------------- service location-------------------


  // ----------------------- zone -------------------
  const [zoneApi, setZoneApi] = useState([]);
  // console.log(`service locations`,serviceLocationsApi);
  const handleZoneApi = (id) => {
    try {
      axios
        .post(`${baseUrl}/getzonesbyBranchId`, {
          branchId: Number(id)
        })
        .then((val) => {
          console.log(`doc`, val);
          const data = val.data.response?.map((item) => {
            return {
              id: item.applocationconfigid,
              label: item.zonename
            };
          });
          setZoneApi(data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  // ----------------------- zone -------------------

  // ----------------------- courses -------------------
  const [coursesApi, setCoursesApi] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  console.log(`formvalues`, formValues);

  console.log('courses', selectedCourses);

  useEffect(() => {
    handleCourseApi();
  }, []);

  const handleCourseApi = () => {
    try {
      axios.post(`${baseUrl}/getAllCourse`).then((val) => {
        const data = val.data.response?.map((item) => {
          return {
            id: item.applocationid,
            label: item.productname
          };
        });
        setCoursesApi(data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  // ----------------------- courses -------------------


  // ----------------------- status -------------------
  const handleStatusChange = (value)=> {
      console.log(`status value`,value);
      setFormValues({
        ...formValues , status : value.target.value
      })
  }

  // ----------------------- status -------------------




  // form input handlers

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
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .max(255)
      .required()
      .label('Email'),
    mobile: Joi.number().required().label('Mobile'),
    dob: Joi.required().label('Date of Birth'),
    gender: Joi.string().required().label('Gender'),
    address: Joi.string().required().label('Address'),
    city: Joi.string().required().label('City'),
    state: Joi.string().required().label('State'),
    country: Joi.string().required().label('Country'),
    zipcode: Joi.number().required().label('Postal Code'),
    servicelocation: Joi.number().required().label('Service Location'),
    zones: Joi.array().items(Joi.number()).required().label('Zones'),
    courseshandled: Joi.array().items(Joi.number()).required().label('Courses'),
    status: Joi.string().required().label('Status'),
    profileimage: Joi.string().required().label('profileimage'),
    documents: Joi.optional(),
    roleid: Joi.optional(),
    configid: Joi.optional(),
    authmode: Joi.optional()
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = schema.validate(formValues, { abortEarly: true });

    if (error) {
      console.log(error);
      return toast.error(error.details[0].message); // Use error.details[0].message to display the validation error message
    }
    try {
      const response = await axios.post(`${baseUrl}/addInstructor`, {
        firstname: formValues.firstname,
        lastname: formValues.lastname,
        dob: formValues.dob,
        phone: formValues.mobile,
        email: formValues.email,
        gender: formValues.gender,
        address: formValues.address,
        country: formValues.country,
        state: formValues.state,
        city: formValues.city,
        zipcode: Number(formValues.zipcode),
        servicelocation: Number(formValues.servicelocation),
        zones: formValues.zones,
        profileimage: 'https://www.biowritingservice.com/wp-content/themes/tuborg/images/Executive%20Bio%20Sample%20Photo.png',
        courseshandled: [1, 2],
        documents: [
          {
            doctypeid: 1,
            doc: 'https://www.biowritingservice.com/wp-content/themes/tuborg/images/Executive%20Bio%20Sample%20Photo.png'
          }
        ],
        status: 'Active',
        roleid: 3,
        configid: 1,
        authmode: 1
      });

      console.log(`res[onse]`,response);

      if (response.data.status === false) {
        return toast.error(response.data.message);
      }

      toast.success('Register success');
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    changePassword('');
  }, []);

  // api for document table
  const [documentStructure, setDocumentStructure] = useState([]);

  useEffect(() => {
    handleDocumentStructure();
  }, []);

  const handleDocumentStructure = () => {
    try {
      axios
        .post(`${baseUrl}/getDocs`, {
          docfor: 2,
          status: 1
        })
        .then((val) => {
          // console.log(`doc`,val.data.data);
          setDocumentStructure(val.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  // api for document table

  // file upload works
  const toastsmg = useRef(null);

  const onUpload = () => {
    toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  };
  // file upload works




  return (
    <>
      <form noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Toaster />
          <Grid item xs={12} md={6}>
            {' '}
            {/*First Name*/}
            <Stack spacing={1}>
              <InputLabel>First Name</InputLabel>
              <OutlinedInput
                type="text"
                value={formValues.firstname}
                name="firstname"
                onChange={handleChange}
                placeholder="John"
                fullWidth
                error={Boolean(formErrors.firstname)}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            {' '}
            {/*Last Name*/}
            <Stack spacing={1}>
              <InputLabel>Last Name</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formErrors.lastname)}
                type="text"
                value={formValues.lastname}
                name="lastname"
                onChange={handleChange}
                placeholder="Doe"
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            {' '}
            {/*Dob*/}
            <Stack spacing={1}>
              <InputLabel htmlFor="dob-signup">Date of Birth</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={selectedDate} onChange={handleDateChange} renderInput={(params) => <TextField {...params} />} />
              </LocalizationProvider>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            {' '}
            {/*Gender*/}
            <Stack spacing={1}>
              <InputLabel>Gender</InputLabel>
              <Select labelId="demo-simple-select-label" value={formValues.gender} name="gender" onChange={handleSelectChange} fullWidth>
                <MenuItem value={'Male'}>Male</MenuItem>
                <MenuItem value={'Female'}>Female</MenuItem>
                <MenuItem value={'Trans'}>Trans</MenuItem>
              </Select>
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>
            {' '}
            {/*email*/}
            <Stack spacing={1}>
              <InputLabel>Email Address</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formErrors.email)}
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

          <Grid item xs={12} lg={6} sx={{ width: '100%' }}>
            {' '}
            {/*mobile*/}
            <Stack spacing={1} sx={{ width: '100%' }}>
              <InputLabel>Mobile No</InputLabel>
              <Box
                sx={{
                  width: '100%',
                  '& .react-international-phone': {
                    width: '100%',
                    height: '50px'
                  },
                  '& .react-international-phone-country-selector & button': {
                    height: '42px'
                  },
                  '& .react-international-phone-input': {
                    width: '100%',
                    height: '50px'
                  }
                }} //react-international-phone-input-container
              >
                <PhoneInput defaultCountry="ua" value={formValues.mobile} onChange={handlePhoneChange} placeholder="Mobile Number" />
              </Box>
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

          <Grid item xs={12}>
            {' '}
            {/*address*/}
            <Stack spacing={1}>
              <InputLabel>Address</InputLabel>
              <OutlinedInput
                fullWidth
                multiline
                error={Boolean(formErrors.email)}
                type="email"
                value={formValues.address}
                name="address"
                onChange={handleChange}
                placeholder=""
              />
              {formErrors.email && (
                <FormHelperText error id="helper-text-email-signup">
                  {formErrors.email}
                </FormHelperText>
              )}
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>
            {' '}
            {/*city*/}
            <Stack spacing={1}>
              <InputLabel>city</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formErrors.city)}
                type="email"
                value={formValues.city}
                name="city"
                onChange={handleChange}
                placeholder=""
              />
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>
            {' '}
            {/*state*/}
            <Stack spacing={1}>
              <InputLabel>state</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formErrors.state)}
                type="state"
                value={formValues.state}
                name="state"
                onChange={handleChange}
                placeholder=""
              />
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>
            {' '}
            {/*country*/}
            <Stack spacing={1}>
              <InputLabel>country</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formErrors.country)}
                type="country"
                value={formValues.country}
                name="country"
                onChange={handleChange}
                placeholder=""
              />
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>
            {' '}
            {/*zip code*/}
            <Stack spacing={1}>
              <InputLabel>zip code</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formErrors.zipcode)}
                type="country"
                                          value={formValues.zipcode}
                name="zipcode"
                onChange={handleChange}
                placeholder=""
              />
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>
            {' '}
            {/*service location*/}
            <Stack spacing={1}>
              <InputLabel>service location</InputLabel>
              {/* <Select
               value={formValues.serviceLocation}
               name="serviceLocation"
               onChange={(val)=>handleServiceLocations(val)}
               fullWidth
               >
                {
                  serviceLocationsApi && serviceLocationsApi.map((val,index)=>{
                    return(
                      <MenuItem key={val.applocationid} value={val.applocationid}>{val?.city}</MenuItem>
                    )
                  })
                }

              </Select> */}

              <Autocomplete
                id="brand"
                options={serviceLocationsApi ? serviceLocationsApi : []}
                value={serviceLocationsApi?.find((option) => option?.id == formValues?.servicelocation) || null}
                // getOptionLabel={(option) => option.brandname}
                onChange={(event, val) => {
                  if (val) {
                    console.log('val', val);
                    handleZoneApi(val.id);
                    const updatedData = { ...formValues };
                    updatedData['servicelocation'] = val.id;
                    // updatedData['brand'] = val.label
                    setFormValues(updatedData);
                  }
                }}
                renderInput={(params) => <TextField {...params} placeholder="select  service location" />}
                autoHighlight={true}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>
            {' '}
            {/*zone*/}
            <Stack spacing={1}>
              <InputLabel>zone</InputLabel>
              <Autocomplete
                  color='primary'
                  multiple
                  id="model"
                  options={zoneApi ? zoneApi : []}
                  value={zoneApi?.filter(option => formValues?.zones.includes(option?.id)) || []}
                  // getOptionLabel={(option) => option.modelname}
                  onChange={(event, val) => {
                      if (val) {
                          console.log('zone val', val);
                          const updatedData = { ...formValues };
                          updatedData['zones'] = val.map(option => option.id); // Store array of IDs
                          setFormValues(updatedData);
                      }
                  }}
                  renderInput={(params) => <TextField {...params} placeholder="select zones" />}
                  autoHighlight={true}
              />

            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>
            {' '}
            {/*course*/}
            <Stack spacing={1}>
              <InputLabel>courses</InputLabel>
              <Autocomplete
                multiple
                id="model"
                options={coursesApi ? coursesApi : []}
                value={selectedCourses}
                getOptionLabel={(option) => option.label}
                onChange={(event, value) => {
                  setSelectedCourses(value);
                  console.log(`selected courses final`,value);
                  const updatedData = { ...formValues, courseshandled: value.flatMap((v) => v.id) };
                  setFormValues(updatedData);
                }}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox checked={selected} style={{ marginRight: 8 }} />
                    <ListItemText primary={option.label} />
                  </li>
                )}
                renderInput={(params) => <TextField {...params} placeholder="select courses" />}
                autoHighlight={true}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>
            {' '}
            {/*status*/}
            <Stack spacing={1}>
              <InputLabel>status</InputLabel>
              <Select
                value={formValues.status}
                label="Age"
                onChange={handleStatusChange}
              >
                <MenuItem value={'Active'}>Active</MenuItem>
                <MenuItem value={'In Active'}>In Active</MenuItem>
                </Select>
            </Stack>
          </Grid>

          <Grid item xs={12} lg={6}>
            {' '}
            {/*profile picture*/}
            <Stack spacing={1}>
              <InputLabel>Profile image</InputLabel>

              <Toast style={{ background: 'grey' }} ref={toastsmg}></Toast>
              <FileUpload
                style={{ width: 'fit-content', background:'#093467',color:'white',padding:'10px',borderRadius:'5px' }}
                mode="basic"
                name="demo[]"
                url="/api/upload"
                accept="image/*"
                maxFileSize={1000000}
                onUpload={onUpload}
              />
            </Stack>
          </Grid>

          <TableContainer sx={{ marginTop: '20px', overflowX: 'hidden' }} component={Paper}>
            {' '}
            {/*Documents upload section*/}
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">SNO</TableCell>
                  <TableCell align="center">DOC ID</TableCell>
                  <TableCell align="center">DOC NAME</TableCell>
                  <TableCell align="center">ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {documentStructure?.map((row, index) => (
                  <TableRow key={row.index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="center">{`${index + 1}`}</TableCell>
                    <TableCell align="center">{row.apptypeid}</TableCell>
                    <TableCell align="center">{row.typename}</TableCell>
                    <TableCell align="center">
                    <Toast style={{ background: 'grey' }} ref={toastsmg}></Toast>
                    <FileUpload
                      style={{ width: 'fit-content', background:'#093467',color:'white',padding:'10px',borderRadius:'5px' }}
                      mode="basic"
                      name="demo[]"
                      url="/api/upload"
                      accept="image/*"
                      maxFileSize={1000000}
                      onUpload={onUpload}
                    />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

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
              <Button
                disableElevation
                sx={{ bgcolor: 'primary.custom1' }}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="primary"
              >
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
