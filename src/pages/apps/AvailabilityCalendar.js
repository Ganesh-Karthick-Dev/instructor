/* eslint-disable no-unused-vars */

import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';

// Material-UI components
import {
  useMediaQuery,
  Box,
  Dialog,
  Grid,
  ButtonGroup,
  Button,
  Autocomplete,
  TextField,
  Stack,
  Typography,
  Divider,
  Badge,
  IconButton
} from '@mui/material';

// react icons
import { IoIosWarning } from "react-icons/io";
import { FaCheckSquare } from "react-icons/fa";
// react icons

// Third-party
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

// Project imports
import Loader from 'components/Loader';
import { PopupTransition } from 'components/@extended/Transitions';
import CalendarStyled from 'sections/apps/calendar/CalendarStyled';
import Toolbar from 'sections/apps/calendar/Toolbar';
import AddEventForm from 'sections/apps/calendar/AddEventForm';
import MainCard from 'components/MainCard';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import AnimateButton from 'components/@extended/AnimateButton';
import { SettingOutlined } from '@ant-design/icons';

// ==============================|| CALENDAR - MAIN ||============================== //

const AvailabilityCalendar = () => {

const instructor = useSelector((state)=>state.userSlice)
const {partnerid} = instructor.instructor
const baseUrl = `https://phpstack-977481-4409636.cloudwaysapps.com/api/v1`;


// ------------------------------------------------------------getting availability permission-------------------------------------
const [availabilityPermission,setAvailabilityPermission] = useState([])

const [availability,setAvailability] = useState([])

// console.log(`>>>>>>>>>>>>>>`,availabilityPermission);

useEffect(()=>{
  handleAvailabilityPermission()
},[])

const handleAvailabilityPermission = ()=> {
  try {
    axios.get(`${baseUrl}/getAvailabilitypermission/${partnerid}`)
    .then((val)=>{
      if(val.data.status === false){
         throw new Error('error in getting availability from admin - status - false')
      }
      else {
        setAvailability(val.data.data)
        filterAvPending(val.data.data)
      }
    })
  } catch (error) {
    console.log(`error in getting availability from admin`);
  }
}

// console.log(`availability`,availability);

function filterAvPending(data) {
  console.log(`vsdvolsd`,data);
  const result = data.reduce((acc, item) => {
      if (item.substatus === "av_pending") {
          acc.push({ productname: item.productname, substatus: item.substatus, type : item.type });
      }
      return acc;
  }, []);

  const allEmpty = data.every(item => item.substatus === "");
  
  return allEmpty ? setAvailabilityPermission([]) : setAvailabilityPermission(result);
}
// console.log(`avail message`,availabilityPermission);
// ------------------------------------------------------------getting availability permission--------------------------------------------



// -----------------------------------------------fetch course dropdown for the particular instructor--------------------------------------------
// fetch course date to shown that course in calendar
const [dropDownCourse,setDropDownCourse] = useState([])

const handleGetCourseDates = ()=> {
  setDropDownCourse(availabilityPermission)
  toast.success(`course dates fetched successfully`)
  // try {

  //   // toast.promise(
  //   //   axios.get(`${baseUrl}/getInstructorById/${partnerid}`)
  //   //   .then((response) => {
  //   //     if (response.data.status === false) {
  //   //       throw new Error("Failed to get course dates");
  //   //     } else {
  //   //       // console.log(`courses - `,response.data.data[0].courses);
  //   //       let instructorCourses = response.data.data[0].courses
  //   //       setDropDownCourse(instructorCourses)
  //   //       return "Course dates retrieved successfully";
  //   //     }
  //   //   }).catch((error) => {
  //   //     console.error("Error fetching course dates:", error);
  //   //     throw new Error("Failed to fetch course dates");
  //   //   }),
  //   //   {
  //   //     loading: 'Fetching course dates...',
  //   //     success: (response) => <b>{response}</b>, // Use response message here
  //   //     error: (error) => <b>{error.message}</b>, // Use error message here
  //   //   }
  //   // );    
  // } catch (error) {
  //   console.log(error);
  // }
}

  // fetch course date to shown that course in calendar
// --------------------------------------------fetch course dropdown for the particular instructor--------------------------------------------





  
  // admin approval
  const [adminApproval,setAdminApproval] = useState(false)
  // admin approval


//   // fetch course date to shown that course in calendar
// const [coursesState,setCoursesState] = useState(false)

// useEffect(()=>{
//   setCoursesState(false)
// },[])
// const handleGetCourseDates = ()=> {
//   try {
//     const baseUrl = `https://phpstack-977481-4409636.cloudwaysapps.com/api/v1`;

//     toast.promise(
//       axios.post(`${baseUrl}/getInstructorById/14`, {
//         courseid: 3,
//         type: 3,
//         combo: 2, // 1-yes;2-no
//       }).then((response) => {
//         if (!response.status) {
//           throw new Error("Failed to get course dates");
//         } else {
//           // Handle successful response
//           setCoursesState(true)
//           return "Course dates retrieved successfully";
//         }
//       }).catch((error) => {
//         console.error("Error fetching course dates:", error);
//         throw new Error("Failed to fetch course dates");
//       }),
//       {
//         loading: 'Fetching course dates...',
//         success: (response) => <b>{response}</b>, // Use response message here
//         error: (error) => <b>{error.message}</b>, // Use error message here
//       }
//     );    
//   } catch (error) {
//     console.log(error);
//   }
// }
//   // fetch course date to shown that course in calendar
  





  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setLoading(false); // Simulate loading
  }, []);

  const calendarRef = useRef(null);

  const handleDateToday = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.today();
    setDate(calendarApi.getDate());
  };

  const handleViewChange = (newView) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(newView);
  };

  const handleDatePrev = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
    setDate(calendarApi.getDate());
  };

  const handleDateNext = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
    setDate(calendarApi.getDate());
  };

  const handleRangeSelect = (arg) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.unselect();
    setSelectedRange({ start: arg.start, end: arg.end });
  };

  const [modelData, setModelData] = useState();

  const handleEventUpdate = () => {
    // Handle event update logic here
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };



  // event data

  let [eventData, setEventData] = useState([
    {
      id: 1,
      title: 'DUI',
      value: 'DUI',
      start: '2024-05-07',
      end: '2024-05-10',
      status: 'NotYetStarted'
    },
    {
      id: 2,
      title: 'DUI',
      value: 'DUI',
      start: '2024-05-10',
      end: '2024-05-13',
      status: 'NotYetStarted'
    },
    {
      id: 3,
      title: 'DUI',
      value: 'DUI',
      start: '2024-05-21',
      end: '2024-05-24',
      status: 'NotYetStarted'
    },
    {
      id: 4,
      title: 'DUI',
      value: 'DUI',
      start: '2024-05-24',
      end: '2024-05-27',
      status: 'NotYetStarted'
    },
    {
      id: 5,
      title: 'Behind the Wheels',
      value: 'Behind the Wheels',
      start: '2024-05-17',
      end: '2024-05-18',
      status: 'NotYetStarted'
    },
    {
      id: 6,
      title: 'Road Test',
      value: 'Road Test',
      start: '2024-05-08',
      end: '2024-05-09',
      status: 'OnGoing'
    },
    {
      id: 7,
      title: 'Defensive',
      value: 'Defensive',
      start: '2024-05-07',
      end: '2024-05-08',
      status: 'OnGoing'
    },
    {
      id: 8,
      title: 'Defensive',
      value: 'Defensive',
      start: '2024-05-08',
      end: '2024-05-09',
      status: 'OnGoing'
    },
    {
      id: 9,
      title: 'Defensive',
      value: 'Defensive',
      start: '2024-05-09',
      end: '2024-05-10',
      status: 'OnGoing'
    },
    {
      id: 10,
      title: 'Defensive',
      value: 'Defensive',
      start: '2024-05-10',
      end: '2024-05-11',
      status: 'OnGoing'
    },
    {
      id: 11,
      title: 'Defensive',
      value: 'Defensive',
      start: '2024-05-11',
      end: '2024-05-12',
      status: 'OnGoing'
    },
    {
      id: 12,
      title: 'Defensive',
      value: 'Defensive',
      start: '2024-05-12',
      end: '2024-05-13',
      status: 'OnGoing'
    },
    {
      id: 13,
      title: 'Defensive',
      value: 'Defensive',
      start: '2024-05-08',
      end: '2024-05-10',
      status: 'OnGoing'
    },
    {
      id: 14,
      title: 'Defensive',
      value: 'Defensive',
      start: '2024-05-15',
      end: '2024-05-17',
      status: 'OnGoing'
    },
    {
      id: 15,
      title: 'Defensive',
      value: 'Defensive',
      start: '2024-05-22',
      end: '2024-05-24',
      status: 'OnGoing'
    },
    {
      id: 16,
      title: 'Defensive',
      value: 'Defensive',
      start: '2024-05-22',
      end: '2024-05-24',
      status: 'OnGoing'
    },
    {
      id: 17,
      title: 'Drivers Education',
      value: 'Drivers Education',
      start: '2024-05-04',
      end: '2024-05-06',
      status: 'NotYetStarted'
    },
    {
      id: 18,
      title: 'Drivers Education',
      value: 'Drivers Education',
      start: '2024-05-11',
      end: '2024-05-13',
      status: 'NotYetStarted'
    },
    {
      id: 19,
      title: 'Drivers Education',
      value: 'Drivers Education',
      start: '2024-05-18',
      end: '2024-05-20',
      status: 'NotYetStarted'
    },
    {
      id: 20,
      title: 'Drivers Education',
      value: 'Drivers Education',
      start: '2024-05-25',
      end: '2024-05-27',
      status: 'NotYetStarted'
    },
    {
      id: 21,
      title: 'Drivers Education',
      value: 'Drivers Education',
      start: '2024-05-10',
      end: '2024-05-14',
      status: 'NotYetStarted'
    },
    {
      id: 22,
      title: 'Drivers Education',
      value: 'Drivers Education',
      start: '2024-05-08',
      end: '2024-05-12',
      status: 'NotYetStarted'
    }
  ]);

  // eventData.forEach((event) => {
  //   event.color = handleDynamicColor(event.title);
  // });

  const [searchResults, setSearchResults] = useState([]);

  const [submittedData,setSubmittedData] = useState([])

  const [selectedCourse, setSelectedCourse] = useState('DUI');

  const [filteredCourse, setFilteredCourse] = useState([]);


  // useEffect(() => {
  //   if(coursesState && adminApproval === true){
  //     setFilteredCourse(_.uniqBy(eventData, (e) => e.value));
  //   }
  //   else{
  //     setFilteredCourse([])
  //   }
  // }, [coursesState,adminApproval]);

 
  // custom1

  useEffect(() => {
    const filteredResults = searchResults.filter(val => val.color === '#1d4ed8');
    setSubmittedData(filteredResults);
  }, [searchResults]);


  useEffect(() => {
    // Initialize searchResults with DUI course data when component mounts
    setSearchResults(globalSearch(eventData, 'DUI'));
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Function to perform global search
  const globalSearch = (dataArray, pattern) => {
    return _.filter(dataArray, (item) => {
      const values = _.values(item).join('').toLowerCase();
      return values.includes(pattern.toLowerCase());
    });
  };

  // Function to handle event selection

  const handleDynamicColor = (data) => {
    switch (data ? data : selectedCourse) {
      case 'DUI':
        return '#dc2626';
      case 'Road Test':
        return '#22c55e';
      case 'Defensive':
        return '#0f172a';
      case 'Behind the Wheels':
        return '#d97706';
      case 'Drivers Education':
        return '#c026d3';
      default:
        '#7e22ce';
    }
  };

  // Function to handle course selection

  const [clickedCourse,setClickedCourse] = useState([])

  let Dates = clickedCourse.map((val)=>{
    return val
  })
console.log("dates000000" , Dates)
  const finalDataObject = [];
  if(!_.isEmpty(Dates)){

    const addOneDay = (dateString) => {
      const date = new Date(dateString);
      date.setDate(date.getDate() + 1);
      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
      const day = String(date.getUTCDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    const result = Dates.map((dateData,index) => {
        const details = dateData.details
         console.log("details" , details.length)
        if(details.length === 1){
         console.log("detailsssss" , details)
          var detailsArray = details[0]
          console.log("detailsstt" , details[0])
          console.log("details[0]length" , details[0].length)
          var enddetails = detailsArray[detailsArray.length-1]
          console.log("enddetails" , enddetails)
          if(detailsArray !== null){
            var startdate = (detailsArray[0].date).split("T")[0];
            var endDate = (enddetails.date).split("T")[0];   
            var endDatePlusOne = addOneDay(endDate); 
          
            var newevent = {
              addonid: dateData.addonid,
              start: startdate,
              end: endDatePlusOne,
              slots: details,
              color : '#1677ff',
              id : index + 1
            }
            console.log("newevent" , newevent)
            finalDataObject.push(newevent)
          }
          
        }else{
          details.map(detail => {
            var startdate = (detail[0].date).split("T")[0];
            var endDate = (detail[detail.length -1].date).split("T")[0];   
            var endDatePlusOne = addOneDay(endDate); 
          
            var newevent = {
              addonid: dateData.addonid,
              start: startdate,
              end: endDatePlusOne,
              slots: details,
              color : '#1677ff',
              id : index + 1
            }
            finalDataObject.push(newevent)
          })
          
        }
      })    
 
  }

  console.log("finalDataObject7iiii" , finalDataObject)

  let finalDates = _.flatMapDeep(Dates)

  // console.log(`final dates>>>>>>>>>`, finalDates);




  const handleCourseSelect = (event, value) => {
    // console.log(`event`,event);
    console.log(`value`,value);
    // setSelectedCourse(value.title);
    // setSearchResults(globalSearch(eventData, value.title));


      // setClickedCourse(prevState => ({
      //   ...prevState,
      //   productname: value.productname,
      //   substatus: value.substatus,
      //   type: value.type
      // }));

      let courseid = value.type
      axios.post(`${baseUrl}/getcoursedatesfilter`,{
        courseid : courseid,      // 1.BTW , 2.DUI , 3.Defensive , 4.Drivers educations , 5.Road Test
        type : courseid,
        combo : 2 // 1-yes;2-no
      })
      .then((val)=>{
        setClickedCourse(val.data.response[0].dates)
      })
      .catch((error)=>{
        console.log(`error in getting course dates`,error);
      })

  };



  const handleEventSelect = (arg) => {
    console.log(`clicked event arg`,arg);
    const data = arg.event._def;
    const publicId = data.publicId;

    // Toggle event color based on selected course
    finalDataObject.forEach((row) =>
      row.id === parseInt(publicId)
        ? {
            ...row,
            color: row.color === '#1677ff' ? '#1677ff'  : '#0c0a09'
          }
        : row
    );

    // setSearchResults(updatedRows);
  };



  const handleSubmittedData = ()=>{
    axios.post(`http://localhost:8000/availability`,submittedData)
      .then(()=>{
        console.log(`data sent to server successfully`);
        toast.success(`submitted Successfully`)
      })
      .catch(()=>{
        console.log(`error while send submitted data to server`);
        toast.error(`failed to submit`)
      })
  }

  // custom1




  if (loading) return <Loader />;

  return (
    <>
      <MainCard>
        <Grid item xs={12} sm={6} md={12}>


        <Stack direction={'row'} justifyContent={'end'} alignItems={'center'}>
 
                   

              {
                _.isEmpty(availabilityPermission) ? <Box sx={{background:'#ca8a04', color : 'white',padding:'20px',borderRadius:'5px',display:'flex',flexDirection:'row',gap:'15px ',alignItems:'start'}}>
                <Box>
                <IoIosWarning size={30} />
                </Box>
                <Typography sx={{width:'300px'}} >
                  <span style={{fontWeight:'bold',fontSize:"20px",display:'block'}}>Under admin approval</span> Please wait for your account approval to feed your flexible availability
                </Typography>
              </Box>  :  
              <Stack direction={'row'} gap={2} alignItems={'center'}>
              <Box sx={{display:'flex',gap:'10px'}}>
            <Button
               sx={{bgcolor:'primary.custom1'}}
              variant='contained'
              disabled={availabilityPermission.length === 0}
              onClick={handleGetCourseDates}
              >
                <AnimateButton type="rotate">
                  <IconButton color="" sx={{color:'white'}} variant="dashed" shape="rounded">
                    <SettingOutlined />
                  </IconButton>
              </AnimateButton>
              Get Course Dates
              </Button>
            {/* <Button sx={{bgcolor:'primary.custom1'}} disabled variant='contained'>View</Button> */}
            </Box>
            <Box sx={{background:'#15803d', color : 'white',padding:'20px',borderRadius:'5px',display:'flex',flexDirection:'row',gap:'15px ',alignItems:'start'}}>
                <Box>
                <FaCheckSquare size={30} />
                </Box>
                <Typography sx={{width:'300px',display:'flex',flexDirection:'column',gap:'10px'}} >
                  <span style={{fontWeight:'bold',fontSize:'20px',lineHeight:'20px',display:'block'}}>Admin need approval for below Courses</span> 
                  <ul>
                    {
                      availabilityPermission && availabilityPermission.map((val,index)=>{
                        return <li key={index}>{val.productname}</li>
                      })
                    }
                  </ul>
                </Typography>
              </Box>
              </Stack>
              
              }
           

        </Stack>
          

        </Grid>
        <Toaster />
        <Box sx={{ position: 'relative', marginTop: '40px' }}>
          {
            !_.isEmpty(submittedData) && <Button onClick={handleSubmittedData} sx={{position:'fixed',right:'100px',top:'300px',color:'black',background:'gold',zIndex:"20",fontWeight:'bolder'}}>Submit - {submittedData.length} events </Button>
        
          }
          <CalendarStyled>
            <Toolbar
              data={eventData}
              date={date}
              onClickNext={handleDateNext}
              onClickPrev={handleDatePrev}
              onClickToday={handleDateToday}
              onChangeView={handleViewChange}
            >
              <Grid container gap={3} justifyContent={'center'} alignItems={'center'}>
                <Grid item>

                <Stack direction="row" gap={3} justifyContent={'start'} alignItems="center">
            <Stack>
              <Stack direction={'row'} alignItems={'center'} gap={2} sx={{ width: 'fit-content' }}>
                <Box sx={{ borderRadius: '50%', width: '30px', height: '30px', bgcolor: '#15803d', display: 'inline-block'}}></Box>
                <Typography sx={{ width: 'fit-content' }}>Selected</Typography>
              </Stack>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack>
              <Stack direction={'row'} alignItems={'center'} gap={2} sx={{ width: 'fit-content' }}>
                <Box
                  sx={{ borderRadius: '50%', width: '30px', height: '30px', background: '#1677ff', display: 'inline-block' }}
                ></Box>
                <Typography sx={{ width: 'fit-content' }}>{selectedCourse}</Typography>
              </Stack>
            </Stack>
          </Stack>

                </Grid>
                <Grid item>
                  <Autocomplete
                    sx={{ width: '250px' }}
                    fullWidth
                    disablePortal
                    onChange={handleCourseSelect}
                    // value={clickedCourse.productname}
                    id="basic-autocomplete"
                    options={dropDownCourse}
                    getOptionLabel={(option) => option.productname}
                    renderInput={(params) => <TextField {...params} placeholder="DUI,Road Test..." />}
                  />
                </Grid>
              </Grid>
            </Toolbar>

            <FullCalendar
              selectable
              events={finalDataObject}       // ( coursesState && adminApproval ) && searchResults
              ref={calendarRef}
              rerenderDelay={10}
              initialDate={date}
              initialView={'dayGridMonth'}
              dayMaxEventRows={3}
              eventDisplay="block"
              headerToolbar={false}
              allDayMaintainDuration
              eventResizableFromStart
              select={handleRangeSelect}
              eventDrop={handleEventUpdate}
              eventClick={handleEventSelect}
              eventResize={handleEventUpdate}
              height={matchDownSM ? 'auto' : 720}
              plugins={[dayGridPlugin, interactionPlugin]}
            />
          </CalendarStyled>

          <Dialog
            maxWidth="sm"
            TransitionComponent={PopupTransition}
            fullWidth
            onClose={handleModalClose}
            open={isModalOpen}
            sx={{ '& .MuiDialog-paper': { p: 0 } }}
          >
            <AddEventForm event={selectedEvent} range={selectedRange} onCancel={handleModalClose} />
          </Dialog>

          {/* <Tooltip title="Add New Event">
        <SpeedDial
          ariaLabel="add-event-fab"
          sx={{ display: 'inline-flex', position: 'sticky', bottom: 24, left: '100%', transform: 'translate(-50%, -50% )' }}
          icon={<PlusOutlined style={{ fontSize: '1.5rem' }} />}
          onClick={() => setIsModalOpen(true)}
        />
      </Tooltip> */}
        </Box>
      </MainCard>
    </>
  );
};

export default AvailabilityCalendar;
