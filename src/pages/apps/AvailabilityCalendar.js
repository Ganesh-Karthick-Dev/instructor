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
  Badge
} from '@mui/material';


// react icons
import { IoIosWarning } from "react-icons/io";
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

// ==============================|| CALENDAR - MAIN ||============================== //

const AvailabilityCalendar = () => {
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

  const baseUrl = `https://phpstack-977481-4409636.cloudwaysapps.com/api/v1`;


  // availability


  const handleDynamicColor = (data) => {
    switch (data) {
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
        return '#1d4ed8';
    }
  };

  const [availability,setAvailability] = useState([])
  console.log(`availability`,availability)

  useEffect(() => {
    handleGetAvailability();
  }, []);
  
  const handleGetAvailability = async () => {
    try {
      const response = await axios.get(`${baseUrl}/getAvailability/1`);
      const availabilityData = response.data.data.map((event , index) => ({
        ...event,
        color: handleDynamicColor(event.productname),
        id : index + 1
      }));
      setAvailability(availabilityData);
    } catch (error) {
      console.log(error);
    }
  };
  // availability



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
  // event data
  




  const [searchResults, setSearchResults] = useState([]);

  const [submittedData,setSubmittedData] = useState([])

  const [selectedCourse, setSelectedCourse] = useState('Behind the Wheels');

  console.log(`search results`,searchResults);

  const [filteredCourse, setFilteredCourse] = useState([]);


  useEffect(() => {
    setFilteredCourse(_.uniqBy(availability, (e) => e.productname));
  },[availability]);

 
  // custom1

  useEffect(() => {
    const filteredResults = searchResults.filter(val => val.color === '#1d4ed8');
    setSubmittedData(filteredResults);
  }, [searchResults]);


  useEffect(() => {
    // Initialize searchResults with DUI course data when component mounts
    setSearchResults(globalSearch(availability, 'DUI'));
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Function to perform global search
  const globalSearch = (dataArray, pattern) => {
    return _.filter(dataArray, (item) => {
      const values = _.values(item).join('').toLowerCase();
      return values.includes(pattern.toLowerCase());
    });
  };

  const handleEventSelect = (arg, val1, val2) => {
    const event = arg.event;
    const data = event._def;
  
    console.log(`,final event `, event);
    console.log(`,val1 event `, val1);
    console.log(`,val2 event `, val2);
  
    // Assuming moduleid and instructorid are part of the event's extended properties
    const moduleid = event.extendedProps.moduleid;
    const instructorid = event.extendedProps.instructorid;
  
    console.log(`Module ID:`, moduleid);
    console.log(`Instructor ID:`, instructorid);
  
    const publicId = data.publicId;
  
    // Get the original color of the event
    const originalColor = event.backgroundColor || handleDynamicColor(event.extendedProps.productname);
  
    // Initialize or retrieve the stored color for the event
    const storedColor = event.extendedProps.storedColor || originalColor;
  
    // Toggle event color based on selected course
    const updatedRows = searchResults.map((row, index) =>
      row.id === parseInt(publicId)
        ? {
            ...row,
            color: row.color === '#1d4ed8' ? handleDynamicColor(selectedCourse) : '#1d4ed8'
          }
        : row
    );
  
    // If event color is same as the stored color, change it to selected course color
    if (event.backgroundColor === storedColor) {
      event.setProp('backgroundColor', '#1d4ed8');
      event.setExtendedProp('storedColor', originalColor); // Store original color
    } else {
      // Otherwise, change it back to stored color
      event.setProp('backgroundColor', storedColor);
    }
  
    setSearchResults(updatedRows);
  };
  
  
  
  
  

  // Function to handle course selection
  const handleCourseSelect = (event, value) => {
    setSelectedCourse(value.productname);
    setSearchResults(globalSearch(availability, value.productname));
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


  // admin approval
  const [adminApproval,setAdminApproval] = useState(true)

  // admin approval

  if (loading) return <Loader />;

  return (
    <>
      <MainCard>
        <Grid item xs={12} sm={6} md={12}>


        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
 
            <Box sx={{display:'flex',gap:'10px'}}>
            <Button sx={{bgcolor:'primary.custom1'}} variant='contained' disabled={adminApproval === false}>Add</Button>
            <Button sx={{bgcolor:'primary.custom1'}} variant='contained'>View</Button>
            </Box>       

              {
                adminApproval === false &&  <Box sx={{background:'#f59e0b',padding:'20px',borderRadius:'5px',display:'flex',flexDirection:'row',gap:'15px ',alignItems:'center'}}>
                <Box>
                <IoIosWarning size={30} />
                </Box>
                <Typography sx={{width:'300px'}} >
                  <span style={{fontWeight:'bold',display:'block'}}>Under admin approval</span> Please wait for your account approval to feed your flexible availability
                </Typography>
              </Box>
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
              data={availability}
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
                <Box sx={{ borderRadius: '50%', width: '30px', height: '30px', background: '#1d4ed8', display: 'inline-block'}}></Box>
                <Typography sx={{ width: 'fit-content' }}>Selected</Typography>
              </Stack>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack>
              <Stack direction={'row'} alignItems={'center'} gap={2} sx={{ width: 'fit-content' }}>
                <Box
                  sx={{ borderRadius: '50%', width: '30px', height: '30px', background: handleDynamicColor(selectedCourse), display: 'inline-block' }}
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
                    id="basic-autocomplete"
                    options={availability && filteredCourse}
                    getOptionLabel={(option) => option.productname}
                    renderInput={(params) => <TextField {...params} placeholder="DUI,Road Test..." />}
                  />
                </Grid>
              </Grid>
            </Toolbar>

            <FullCalendar
              selectable={true}
              events={searchResults && searchResults[0]?.dates}
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
              eventColor={searchResults.map((val)=>val.color)}
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
