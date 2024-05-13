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

  eventData.forEach((event) => {
    event.color = handleDynamicColor(event.title);
  });

  const [searchResults, setSearchResults] = useState([]);

  const [submittedData,setSubmittedData] = useState([])

  const [selectedCourse, setSelectedCourse] = useState('DUI');

  const [filteredCourse, setFilteredCourse] = useState([]);


  useEffect(() => {
    setFilteredCourse(_.uniqBy(eventData, (e) => e.value));
  }, []);

 
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
  const handleEventSelect = (arg) => {
    const data = arg.event._def;
    const publicId = data.publicId;

    // Toggle event color based on selected course
    const updatedRows = searchResults.map((row) =>
      row.id === parseInt(publicId)
        ? {
            ...row,
            color: row.color === '#1d4ed8' ? handleDynamicColor(selectedCourse) : '#1d4ed8'
          }
        : row
    );

    setSearchResults(updatedRows);
  };

  // Function to handle course selection
  const handleCourseSelect = (event, value) => {
    setSelectedCourse(value.title);
    setSearchResults(globalSearch(eventData, value.title));
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
          <Stack direction="row" gap={3} justifyContent={'start'} alignItems="center">
            <Stack>
              <Stack direction={'row'} alignItems={'center'} gap={2} sx={{ width: 'fit-content' }}>
                <Box sx={{ borderRadius: '10px', width: '30px', height: '30px', background: '#1d4ed8', display: 'inline-block' }}></Box>
                <Typography sx={{ width: 'fit-content' }}>Selected</Typography>
              </Stack>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack>
              <Stack direction={'row'} alignItems={'center'} gap={2} sx={{ width: 'fit-content' }}>
                <Box
                  sx={{ borderRadius: '10px', width: '30px', height: '30px', background: handleDynamicColor(), display: 'inline-block' }}
                ></Box>
                <Typography sx={{ width: 'fit-content' }}>{selectedCourse}</Typography>
              </Stack>
            </Stack>
            {/* <Stack spacing={0.5} alignItems="center">
              <Typography variant="h6" color="primary">
                <Typography sx={{ fontWeight: 'bolder', display: 'inline-block' }}>2</Typography>/5
              </Typography>
              <Typography sx={{ fontWeight: 'bolder' }} variant="h5">
                Class
              </Typography>
            </Stack> */}
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
                  <Autocomplete
                    sx={{ width: '250px' }}
                    fullWidth
                    disablePortal
                    onChange={handleCourseSelect}
                    id="basic-autocomplete"
                    options={filteredCourse}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => <TextField {...params} placeholder="DUI,Road Test..." />}
                  />
                </Grid>
              </Grid>
            </Toolbar>

            <FullCalendar
              selectable
              events={searchResults}
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
