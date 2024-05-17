/* eslint-disable no-unused-vars */

import { useEffect, useRef, useState } from 'react';
import _ from 'lodash'

// Material-UI components
import { useMediaQuery, Box, Dialog, Grid, ButtonGroup, Button, Autocomplete, TextField } from '@mui/material';

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
import SheduleModel from 'components/SheduleModel';
import MainCard from 'components/MainCard';

// Assets
// import { PlusOutlined } from '@ant-design/icons';

// const eventData = [
//   {
//     id : 1,
//     title : 'DUI',
//     StartDate : ''
//   }
// ]

// Dummy data for events


// ==============================|| CALENDAR - MAIN ||============================== //

const Calendar = () => {
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


  const [modelData,setModelData] = useState()

  const handleEventSelect = (arg) => {
    const data = arg.event._def
    setModelData(data)
  };

  const handleEventUpdate = () => {
    // Handle event update logic here
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };



// event data


const eventData = [
  {
    id: 1,
    title: 'DUI',
    value: 'DUI',
    color : '#dc2626',
    start: '2024-05-07',
    end: '2024-05-08',
    status : 'Completed',
    studentDetails : [
      {id1:10,id2:20,id3:30,id4:40}
    ]
  },
  {
    id: 2,
    title: 'DUI',
    value: 'DUI',
    color : '#dc2626',
    start: '2024-05-08',
    end: '2024-05-09',
    status : 'OnGoing',
    studentDetails : [
      {id1:10,id2:20,id3:30,id4:40}
    ]
  },
  {
    id: 3,
    title: 'DUI',
    value: 'DUI',
    color : '#dc2626',
    start: '2024-05-09',
    end: '2024-05-10',
    status : 'NotYetStarted',
    studentDetails : [
      {id1 : 10,id2:20,id3:30,id4:40}
    ]
  },
  {
    id: 4,
    title: 'Behind the Wheels',
    value: 'Behind the Wheels',
    color : '#d97706',
    start: '2024-05-07',
    end: '2024-05-08',
    status : 'Completed',
    studentDetails : [
      {id1 : 10,id2:20,id3:30,id4:40}
    ]
  },
  {
    id: 5,
    title: 'Behind the Wheels',
    value: 'Behind the Wheels',
    color : '#d97706',
    start: '2024-05-08',
    end: '2024-05-09',
    status : 'OnGoing',
    studentDetails : [
      {id1 : 10,id2:20,id3:30,id4:40}
    ]
  },
  {
    id: 6,
    title: 'Behind the Wheels',
    value: 'Behind the Wheels',
    color : '#d97706',
    start: '2024-05-09',
    end: '2024-05-10',
    status : 'NotYetStarted',
    studentDetails : [
      {id1 : 10,id2:20,id3:30,id4:40}
    ]
  },
  {
    id: 7,
    title: 'Road Test',
    value: 'Road Test',
    color : '#22c55e',
    start: '2024-05-07',
    end: '2024-05-08',
    status : 'Completed',
    studentDetails : [
      {id1 : 10,id2:20,id3:30,id4:40}
    ]
  },
  {
    id: 8,
    title: 'Road Test',
    value: 'Road Test',
    color : '#22c55e',
    start: '2024-05-08',
    end: '2024-05-09',
    status : 'OnGoing',
    studentDetails : [
      {id1 : 10,id2:20,id3:30,id4:40}
    ]
  },
  {
    id: 9,
    title: 'Road Test',
    value: 'Road Test',
    color : '#22c55e',
    start: '2024-05-09',
    end: '2024-05-10',
    status : 'NotYetStarted',
    studentDetails : [
      {id1 : 10,id2:20,id3:30,id4:40}
    ]
  },
  {
    id: 10,
    title: 'Defensive',
    value: 'Defensive',
    color : '#0f172a',
    start: '2024-05-10',
    end: '2024-05-11',
    status : 'Completed',
    studentDetails : [
      {id1 : 10,id2:20,id3:30,id4:40}
    ]
  },
  {
    id: 11,
    title: 'Defensive',
    value: 'Defensive',
    color : '#0f172a',
    start: '2024-05-11',
    end: '2024-05-12',
    status : 'OnGoing',
    studentDetails : [
      {id1 : 10,id2:20,id3:30,id4:40}
    ]
  },
  {
    id: 12,
    title: 'Defensive',
    value: 'Defensive',
    color : '#0f172a',
    start: '2024-05-12',
    end: '2024-05-13',
    status : 'NotYetStarted',
    studentDetails : [
      {id1 : 10,id2:20,id3:30,id4:40}
    ]
  },
  {
    id: 13,
    title: 'Drivers Education',
    value: 'Drivers Education',
    color : '#c026d3',
    start: '2024-05-13',
    end: '2024-05-14',
    status : 'Completed',
    studentDetails : [
      {id1 : 10,id2:20,id3:30,id4:40}
    ]
  },
  {
    id: 14,
    title: 'Drivers Education',
    value: 'Drivers Education',
    color : '#c026d3',
    start: '2024-05-14',
    end: '2024-05-15',
    status : 'OnGoing',
    studentDetails : [
      {id1 : 10,id2:20,id3:30,id4:40}
    ]
  },
  {
    id: 15,
    title: 'Drivers Education',
    value: 'Drivers Education',
    color : '#c026d3',
    start: '2024-05-15',
    end: '2024-05-16',
    status : 'NotYetStarted',
    studentDetails : [
      {id1: 10,id2:20,id3:30,id4:40}
    ]
  }
  
];



  const [filteredEventData,setfilteredEventData] = useState(eventData) 

  const [finalEventData,setFinalEventData] = useState(eventData)

  useEffect(()=>{
    setFilteredCourse(_.uniqBy(eventData,(e)=> e.title))
  },[])

  const [selectedCourse, setSelectedCourse] = useState([]);

  const [filteredCourse,setFilteredCourse] = useState()


  const handleCourseSelect = (event, value) => {
    // setSelectedCourse(prev => [...prev, event.target.innerHTML]);

    console.log(value);

    setSelectedCourse(value.map((val)=>{
      return val.title
    }))

    if(_.isEmpty(selectedCourse)){
      return setFinalEventData(filteredEventData)
    }
  };

  // console.log(filteredEventData);

  useEffect(() => {
    if(_.isEmpty(selectedCourse)){
       setFinalEventData(filteredEventData)
      //  console.log(filteredEventData);
    }
    else{
      // Update finalEventData whenever filteredEventData or selectedCourse changes
      setFinalEventData(filteredEventData.filter((event) =>
        selectedCourse.includes(event.title)
      ));
    }

  }, [filteredEventData, selectedCourse]);


    // button group

    const [activeButton, setActiveButton] = useState('All');

    const handleButtonClick = (buttonKey) => {
      setActiveButton(buttonKey);
      if(buttonKey === 'Completed'){
        const data = eventData.filter((val)=>{
          return val.status === 'Completed'
        })
        setfilteredEventData(data)
      }
      if(buttonKey === 'OnGoing'){
        const data = eventData.filter((val)=>{
          return val.status === 'OnGoing'
        })
        setfilteredEventData(data)
      }
      if(buttonKey === 'NotYetStarted'){
        const data = eventData.filter((val)=>{
          return val.status === 'NotYetStarted'
        })
        setfilteredEventData(data)
      }
      if(buttonKey === 'All') {
        setfilteredEventData(eventData)
      }
    };
  

  if (loading) return <Loader />;

  return (

    <>
    <MainCard>
    <Box sx={{ position: 'relative',marginTop:'40px' }}>
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
              <ButtonGroup color="secondary" aria-label="medium secondary button group">
                <Button
                  sx={{ height: 'fit-content' }}
                  key="All"
                  variant={activeButton === 'All' ? 'contained' : 'outlined'}
                  onClick={() => handleButtonClick('All')}
                >
                  All
                </Button>
                <Button
                  sx={{ height: 'fit-content' }}
                  key="Completed"
                  variant={activeButton === 'Completed' ? 'contained' : 'outlined'}
                  onClick={() => handleButtonClick('Completed')}
                >
                  Completed
                </Button>
                <Button
                  sx={{ height: 'fit-content' }}
                  key="OnGoing"
                  variant={activeButton === 'OnGoing' ? 'contained' : 'outlined'}
                  onClick={() => handleButtonClick('OnGoing')}
                >
                  OnGoing
                </Button>
                <Button
                  sx={{ height: 'fit-content' }}
                  key="NotYetStarted"
                  variant={activeButton === 'NotYetStarted' ? 'contained' : 'outlined'}
                  onClick={() => handleButtonClick('NotYetStarted')}
                >
                  NotYetStarted
                </Button>
              </ButtonGroup>
            </Grid>

            <Grid item>
            
              <Autocomplete
                multiple
                id="tags-outlined"
                options={filteredCourse}
                getOptionLabel={(option) => option.title }
                onChange={handleCourseSelect}
                filterSelectedOptions
                renderInput={(params) => <TextField {...params} placeholder="Courses" />}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    p: 1
                  },
                  '& .MuiAutocomplete-tag': {
                    bgcolor: 'primary.lighter',
                    border: '1px solid',
                    borderColor: 'primary.light',
                    '& .MuiSvgIcon-root': {
                      color: 'primary.main',
                      '&:hover': {
                        color: 'primary.dark'
                      }
                    }
                  },
                  width: '300px'
                }}
              />
            </Grid>
          </Grid>
        </Toolbar>

        <FullCalendar
          selectable
          events={_.isEmpty(finalEventData) ? eventData : finalEventData}
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
    <SheduleModel data={modelData} />
    </MainCard>
    </>


  );
};

export default Calendar;
