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
  IconButton,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// date pickers
import { DatePicker, LocalizationProvider, MobileDateTimePicker, TimePicker } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// react icons
import { IoIosAddCircle, IoIosWarning } from 'react-icons/io';
import { FaCheckSquare } from 'react-icons/fa';
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
import { IoMdAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import dayjs from 'dayjs';
import AvailabilityValidationDialog from 'components/Instructor/AvailabilityValidationDialog';


// ==============================|| CALENDAR - MAIN ||============================== //

const AvailabilityCalendar = () => {



  // ----------- fetching instructor details process -------------

  const [epicUser,setEpicUser] = useState(null)

  const userId = JSON.parse(localStorage.getItem('partnerid'))

  const baseUrl = `https://phpstack-977481-4409636.cloudwaysapps.com/api/v1`;

  useEffect(()=>{
    fetchInstructorDetails()
    handleAvailabilityPermission();
  },[])

  const fetchInstructorDetails = ()=> {
    try {
      axios.get(`${baseUrl}/getInstructorById/${userId}`)
          .then((data)=>{
            const res = data.data
            if(res.status === false){
              console.log(`/getInstructorById/ - error - API error`,res.message);
            }
            else{
              setEpicUser(res.data[0])
            }
          })
    } catch (error) {
      console.log(`error in getting instructor details using - partner ID - `,error);
    }
  }

  // ----------- fetching instructor details process -------------



  // ------------------------------------------------------------getting availability permission-------------------------------------
  const [availabilityPermission, setAvailabilityPermission] = useState([]);

  // console.log(`availabilityPermission`,availabilityPermission);

  const [availability, setAvailability] = useState([]);

  console.log(`>>>>>>>>>>>>>>`,availabilityPermission);

  // useEffect(() => {
  //   handleAvailabilityPermission();
  // }, []);

  const handleAvailabilityPermission = () => {
    try {
      axios.get(`${baseUrl}/getAvailabilitypermission/${userId}`).then((val) => {
        if (val.data.status === false) {
          throw new Error('error in getting availability from admin - status - false');
        } else {
          setAvailability(val.data.data);
          console.log(`permission >>>`,val.data.data);
          filterAvPending(val.data.data);
        }
      });
    } catch (error) {
      console.log(`error in getting availability from admin`);
    }
  };

  // console.log(`availability`,availability);

  function filterAvPending(data) {
    // console.log(`vsdvolsd`,data);
    const result = data.reduce((acc, item) => {
      if (item.substatus === 'av_pending') {
        acc.push({
          productname: item.productname,
          substatus: item.substatus,
          type: item.type,
          availability: Number(item.availability),
          duration: item.duration,
          courseid: item.productid,
          fromDate : item.fromdate,
          toDate : item.todate
        });
      }
      return acc;
    }, []);

    const allEmpty = data.every((item) => item.substatus === '');

    return allEmpty ? setAvailabilityPermission([]) : setAvailabilityPermission(result);
  }
  // console.log(`avail message`,availabilityPermission);
  // ------------------------------------------------------------getting availability permission--------------------------------------------

  // -----------------------------------------------fetch course dropdown for the particular instructor--------------------------------------------
  // fetch course date to shown that course in calendar
  const [dropDownCourse, setDropDownCourse] = useState([]);

  console.log(`dropdown`,dropDownCourse);

  const handleGetCourseDates = () => {
    setDropDownCourse(availabilityPermission);
    toast.success(`course dates fetched successfully`);
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
  };

  // fetch course date to shown that course in calendar
  // --------------------------------------------fetch course dropdown for the particular instructor--------------------------------------------

  // admin approval
  const [adminApproval, setAdminApproval] = useState(false);
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
    const filteredResults = searchResults.filter((val) => val.color === '#1d4ed8');
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

  const [clickedCourse, setClickedCourse] = useState([]);

  const details = clickedCourse?.map((data) => data.details);

  const flattenedArray = details.flat(1);

  const result = flattenedArray.map((innerArray, index) => {
    const start = innerArray[0]?.date || null; // Get date from the first object
    const end = innerArray[innerArray.length - 1]?.date || null; // Get date from the last object
    const slot = index + 1;

    return { start, slot, end };
  });

  // approach 2

  const extractedData = clickedCourse?.map((item) => ({
    addonid: item.addonid,
    productid: item.productid,
    details: item.details || [] // Ensure details is not null, default to an empty array
  }));

  const flattenedArray2 = extractedData.map((item) => ({
    addonid: item.addonid,
    productid: item.productid,
    details: item.details.map((detailArray) => {
      if (Array.isArray(detailArray) && detailArray.length > 0) {
        const start = detailArray[0]?.date; // Use optional chaining to handle potential null date
        const end = detailArray[detailArray.length - 1]?.date; // Use optional chaining to handle potential null date
        return { start, end };
      } else {
        return { start: null, end: null }; // Return null if details array is empty or not an array
      }
    })
  }));

  const flattenedArray3 = flattenedArray2?.map((item) => ({
    addonid: item.addonid,
    productid: item.productid,
    ...item.details.map((detail) => ({ start: detail.start, end: detail.end }))
  }));

  const flattenedArray4 = flattenedArray3?.map((item, index) => ({
    slot: index + 1,
    addonid: item.addonid,
    productid: item.productid,
    start: item[0].start,
    end: item[0].end
  }));

  let finalResult = flattenedArray4;



  //  ------------------------------------- DUI color changing purpose ---------------------------------------------
  const modifiedData = finalResult.map((item , index) => {
    return { ...item, color: '#1677ff', id : index + 1 };
  });

  console.log(`modifiedData >>>`,modifiedData);

  const [originalData,setOriginalData] = useState(modifiedData)
  //  ------------------------------------- DUI color changing purpose ---------------------------------------------



  // console.log(`flattenedArray4`, flattenedArray4);

  //   let Dates = clickedCourse.map((val)=>{
  //     return val
  //   })
  // console.log("dates000000" , Dates)
  //   const finalDataObject = [];
  //   if(!_.isEmpty(Dates)){

  //     const addOneDay = (dateString) => {
  //       const date = new Date(dateString);
  //       date.setDate(date.getDate() + 1);
  //       const year = date.getUTCFullYear();
  //       const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
  //       const day = String(date.getUTCDate()).padStart(2, '0');
  //       return `${year}-${month}-${day}`;
  //     }

  //     const result = Dates.map((dateData,index) => {
  //         const details = dateData.details
  //          console.log("details" , details.length)
  //         if(details.length === 1){
  //          console.log("detailsssss" , details)
  //           var detailsArray = details[0]
  //           console.log("detailsstt" , details[0])
  //           console.log("details[0]length" , details[0].length)
  //           var enddetails = detailsArray[detailsArray.length-1]
  //           console.log("enddetails" , enddetails)
  //           if(detailsArray !== null){
  //             var startdate = (detailsArray[0].date).split("T")[0];
  //             var endDate = (enddetails.date).split("T")[0];
  //             var endDatePlusOne = addOneDay(endDate);

  //             var newevent = {
  //               addonid: dateData.addonid,
  //               start: startdate,
  //               end: endDatePlusOne,
  //               slots: details,
  //               color : '#1677ff',
  //               id : index + 1
  //             }
  //             console.log("newevent" , newevent)
  //             finalDataObject.push(newevent)
  //           }

  //         }else{
  //           details.map(detail => {
  //             var startdate = (detail[0].date).split("T")[0];
  //             var endDate = (detail[detail.length -1].date).split("T")[0];
  //             var endDatePlusOne = addOneDay(endDate);

  //             var newevent = {
  //               addonid: dateData.addonid,
  //               start: startdate,
  //               end: endDatePlusOne,
  //               slots: details,
  //               color : '#1677ff',
  //               id : index + 1
  //             }
  //             finalDataObject.push(newevent)
  //           })

  //         }
  //       })

  //   }

  //   console.log("finalDataObject7iiii" , finalDataObject)

  //   let finalDates = _.flatMapDeep(Dates)

  // console.log(`final dates>>>>>>>>>`, finalDates);

  const [courseId, setCourseId] = useState(null);
  const [duration, setDuration] = useState(null);
  const [avail, setAvail] = useState(null);
  const [courseOthers,setCourseOthers] = useState('')
  const [fromDate,setFromDate] = useState('')
  const [toDate,setTodate] = useState('')

  const [epicCourseSelection,setEpicCourseSelection] = useState('')

  console.log(`fromDate`,fromDate);

  const handleCourseSelect = (event, value) => {
    // console.log(`event`,event);
    console.log(`value`, value);
    setEpicCourseSelection(value.productname)
    // setSelectedCourse(value.title);
    // setSearchResults(globalSearch(eventData, value.title));

    // setClickedCourse(prevState => ({
    //   ...prevState,
    //   productname: value.productname,
    //   substatus: value.substatus,
    //   type: value.type
    // }));

    const fromDateDataString = value.fromDate
    var fromDateData = fromDateDataString.split('T')[0]
    const toDateDataString = value.toDate
    var toDateData = toDateDataString.split('T')[0]

    setCourseId(value.courseid);
    setDuration(value.duration);
    setAvail(Number(value.availability));
    setCourseOthers(value.productname)
    setFromDate(fromDateData)
    setTodate(toDateData)

    let courseid = value.type;
    axios
      .post(`${baseUrl}/getcoursedatesfilter`, {
        courseid: courseid, // 1.BTW , 2.DUI , 3.Defensive , 4.Drivers educations , 5.Road Test
        type: courseid,
        combo: 2 // 1-yes;2-no
      })
      .then((val) => {
        setClickedCourse(val.data.response[0].dates);
      })
      .catch((error) => {
        console.log(`error in getting course dates`, error);
      });
  };

  const [addAvailability, setAddAvailability] = useState([]);


  console.log(`addAvailability`, addAvailability);


  const handleEventSelect = (arg) => {

    console.log(`skdvbhskdvjsvjsdv`,arg);
    const data = arg.event._def.extendedProps;

    console.log(`clicked data >>>>>`, data);

    //  for DUI color cahnges
    const clickedEvent = arg.event;

    const updatedModifiedData = modifiedData.map(event => {
      if (event.id === arg.event.publicId) {
        // If the event is clicked, toggle its color
        return {
          ...event,
          color: event.color === '#1677ff' ? '#15803d' : '#1677ff' // Toggle between original and green color
        };
      } else {
        return event; // Return the event as is if it's not the clicked event
      }
    });
    
    // Now update the state with the updatedModifiedData
    setOriginalData(updatedModifiedData); // Assuming you have a state variable to store modifiedData
    //  for DUI color cahnges


    try {
      axios
        .post(`${baseUrl}/getaddonschedules`, {
          addonid: data.addonid,
          courseid: data.productid
        })
        .then((val) => {
          console.log(`values>>>>>>>`, val);
          const newAvailability = {
            slot: data.slot,
            dates: val.data.response.map((date) => ({
              date: date.date,
              start_time: date.starttime,
              end_time: date.endtime
            }))
          };

          // Check if the slot already exists in addAvailability
          const index = addAvailability.findIndex((item) => item.slot === data.slot);
          if (index === -1) {
            // If not, add the new availability
            setAddAvailability((prev) => [...prev, newAvailability]);
          } else {
            // If yes, remove the availability from addAvailability
            const updatedAvailability = [...addAvailability];
            updatedAvailability.splice(index, 1);
            setAddAvailability(updatedAvailability);
          }
        })
        .catch((error) => {
          console.log(`Error with getting particular getCourseData - `, error);
        });
    } catch (error) {
      console.log(`error with getting particular getCourseData - `, error);
    }
  };

  // Toggle event color based on selected course

  // setSearchResults(updatedRows);

  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmittedData = () => {
    if(addAvailability.length >= 3){
      axios
        .post(`${baseUrl}/addAvailability`, {
          instructorid: epicUser?.partnerid,
          availability: 3, //  1-monthly , 2-quarterly , 3-half yearly
          duration: duration,
          accessibility: {
            courseid: courseId,
            key: 2, // 1- btw, 2- others
            slotdata: addAvailability
          }
        })
        .then(() => {
          console.log(`data sent to server successfully`);
          toast.success(`submitted Successfully`);
        })
        .catch(() => {
          console.log(`error while send submitted data to server`);
          toast.error(`failed to submit`);
        });
    }
    else{
      setValidationError(true)
    }
  };

  // custom1

  // for BTW date click

  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [data, setData] = useState(false);
  const [dateData, setDateData] = useState({});


  // transform data

  const [transformedData, setTransformedData] = useState([]);

  const [bwtCalendarData,setBwtCalendarData] = useState([])

  console.log(`epic final data`,transformedData);

  useEffect(() => {
    const newData = transformData(dateData);
    const newData2 = transformData2(dateData)
    setTransformedData(newData);
    setBwtCalendarData(newData2)
  }, [dateData]);

  const transformData2 = (originalData) => {
    const transformedData = Object.entries(originalData).map(([date, data]) => {
      return {
        title : 'BWT',
        value : 'BWT',
        start : date,
        color : '#15803d',
        date,
        slots: data?.slots ? data.slots.map(slot => ({
          slot: slot?.slot,
          start_time: slot?.start_time,
          end_time: slot?.end_time
        })) : []
      };
    });
    return transformedData;
  }


  const transformData = (originalData) => {
    const transformedData = Object.entries(originalData).map(([date, data]) => {
      return {
        date,
        slots: data?.slots ? data.slots.map(slot => ({
          slot: slot?.slot,
          start_time: slot?.start_time,
          end_time: slot?.end_time
        })) : []
      };
    });
    return transformedData;
  };
  
  const handleClickOpen = (info) => {
    setSelectedDate(info.dateStr);
    setPopupOpen(true);
  };
  
  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  
  const isDateSelectable = (arg) => {
    // Allow date selection only if data is true
    return data;
  };
  
  const handleAddRow = () => {
    const newRow = { id: Date.now(), startTime: null, endTime: null };
    setDateData(prevData => {
      const updatedRows = prevData[selectedDate] ? [...prevData[selectedDate].rows, newRow] : [newRow];
      return { ...prevData, [selectedDate]: { ...prevData[selectedDate], rows: updatedRows } };
    });
  };
  
  const handleRemoveRow = (id) => {
    setDateData(prevData => {
      const updatedRows = prevData[selectedDate].rows.filter(row => row.id !== id);
      const updatedSlots = prevData[selectedDate].slots.filter(slot => {
        return updatedRows.some(row => row.startTime === slot.start_time && row.endTime === slot.end_time);
      });
  
      // If updatedRows or updatedSlots are empty, remove the date entry entirely
      if (updatedRows.length === 0 && updatedSlots.length === 0) {
        const { [selectedDate]: _, ...rest } = prevData;
        return rest;
      }
  
      return { 
        ...prevData, 
        [selectedDate]: { 
          ...prevData[selectedDate], 
          rows: updatedRows, 
          slots: updatedSlots 
        } 
      };
    });
  };
  
  
  const handleTimeChange = (id, timeType, newValue) => {
    setDateData(prevData => {
      const updatedRows = prevData[selectedDate].rows.map(row => 
        row.id === id ? { ...row, [timeType]: newValue } : row
      );
      return { ...prevData, [selectedDate]: { ...prevData[selectedDate], rows: updatedRows } };
    });
    console.log(`Row with id ${id} updated with ${timeType}: ${newValue}`);
    console.log('Updated rows state:', dateData[selectedDate].rows);
  };
  
  function formatTimeWithAMPM(dateString) {
    const date = new Date(dateString);
    const formattedTime = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    return formattedTime;
  }
  
  const generateSlotsData = () => {

    setPopupOpen(false);

    console.log('Generating slots data with rows:', dateData[selectedDate].rows);


    const newSlots = dateData[selectedDate].rows.map((row, index) => {
      return {
        slot: index + 1,
        start_time: row.startTime ? formatTimeWithAMPM(row.startTime) : null,
        end_time: row.endTime ? formatTimeWithAMPM(row.endTime) : null,
      };
    });
  
    console.log('New slots being added:', newSlots);
  
    setDateData(prevData => {
      const existingSlots = prevData[selectedDate]?.slots || [];
      const uniqueNewSlots = newSlots.filter(newSlot => {
        return !existingSlots.some(existingSlot => existingSlot.slot === newSlot.slot);
      });
      return { 
        ...prevData, 
        [selectedDate]: {
          ...prevData[selectedDate],
          slots: [...existingSlots, ...uniqueNewSlots]
        } 
      };
    });   
  };

  
  useEffect(() => {
    if (dateData[selectedDate]?.slots?.length > 0) {
      console.log('slotsData>>>>>', dateData[selectedDate].slots);
    }
  }, [dateData, selectedDate]);
  
  console.log(`dateData>>>>>`, dateData);



// submit BWT Data


function validateEntries(data) {
  // Define an object to keep track of months
  const months = {};

  // Iterate through each entry
  Object.keys(data).forEach(key => {
      // Extract the month from the key
      const month = key.slice(5, 7); // Extract the characters from index 5 to 6 (exclusive)

      // Add the month to the months object
      months[month] = true;
  });

  // Get the current month
  const currentMonth = new Date().getMonth() + 1;

  // Check if there is at least one entry for each of the next three months
  for (let i = 1; i <= 3; i++) {
      const nextMonth = (currentMonth + i) % 12 || 12;
      if (!months[nextMonth]) {
          console.error("You need at least one entry for each of the next three months.");
          return false;
      }
  }

  // If all validations pass, return true
  return true;
}


  // availability validation error
  const [validationError,setValidationError] = useState(null)
  // availability validation error


  const handleSubmittedBWTData = () => {

    // const isValid = validateEntries(transformedData)

    // console.log(`isValid`,isValid);

    if(transformedData.length >= 3){
      axios
        .post(`${baseUrl}/addAvailability`, {
          instructorid: Number(epicUser?.partnerid),
          availability: 3, //  1-monthly , 2-quarterly , 3-half yearly
          duration: duration,
          accessibility: {
            courseid: courseId,
            key: 1, // 1- btw, 2- others
            slotdata: transformedData
          }
        })
        .then(() => {
          console.log(`data sent to server successfully`);
          toast.success(`submitted Successfully`);
          // setTransformedData(null)
        })
        .catch(() => {
          console.log(`error while send submitted data to server`);
          toast.error(`failed to submit`);
        });
    }
    else {
      setValidationError(true)
    }

  };




  // Define the minimum and maximum times
  const minmumTime = dayjs().set('hour', 7).startOf('hour');
  const maximumTime = dayjs().set('hour', 21).startOf('hour');




  if (loading) return <Loader />;

  return (
    <>
      <MainCard>
        <Grid item xs={12} sm={6} md={12}>

              <Dialog open={popupOpen} onClose={handleClosePopup} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">{selectedDate}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Start Time</TableCell>
                        <TableCell align="center">End Time</TableCell>
                        <TableCell align="center">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dateData[selectedDate]?.rows.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell align="center">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <TimePicker
                                label="Start Time"
                                value={row.startTime}
                                onChange={(newValue) => handleTimeChange(row.id, 'startTime', newValue)}
                                minTime={minmumTime}
                                maxTime={maximumTime}
                              />
                            </LocalizationProvider>
                          </TableCell>
                          <TableCell align="center">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <TimePicker
                                label="End Time"
                                value={row.endTime}
                                onChange={(newValue) => handleTimeChange(row.id, 'endTime', newValue)}
                                minTime={minmumTime}
                                maxTime={maximumTime}
                              />
                            </LocalizationProvider>
                          </TableCell>
                          <TableCell align="center">
                            <Button onClick={() => handleRemoveRow(row.id)}>
                              <IoIosRemoveCircle style={{ color: 'red' }} size={30} />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell colSpan={3} align="center">
                          <Button color='primary' onClick={handleAddRow}>
                            <IoIosAddCircle style={{}} size={30} /> 
                            <Typography sx={{}}> Add new Time Slot </Typography>
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant='contained' color='error' onClick={handleClosePopup}>Close</Button>
              <Button variant='contained' color='success' onClick={generateSlotsData} autoFocus>
                Update
              </Button>
            </DialogActions>
          </Dialog>

          <Stack direction={'row'} justifyContent={'end'} alignItems={'center'}>
            {_.isEmpty(availabilityPermission) ? (
              <Box
                sx={{
                  background: '#ca8a04',
                  color: 'white',
                  padding: '20px',
                  borderRadius: '5px',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '15px ',
                  alignItems: 'start'
                }}
              >
                <Box>
                  <IoIosWarning size={30} />
                </Box>
                <Typography sx={{ width: '300px' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '20px', display: 'block' }}>Under admin approval</span> Please wait for your
                  account approval to feed your flexible availability
                </Typography>
              </Box>
            ) : (
              <Stack direction={'row'} gap={2} alignItems={'center'}>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                  <Button
                    sx={{ bgcolor: 'primary.custom1' }}
                    variant="contained"
                    disabled={availabilityPermission.length === 0}
                    onClick={handleGetCourseDates}
                  >
                    <AnimateButton type="rotate">
                      <IconButton color="" sx={{ color: 'white' }} variant="dashed" shape="rounded">
                        <SettingOutlined />
                      </IconButton>
                    </AnimateButton>
                    Get Course Dates
                  </Button>
                  {/* <Button sx={{bgcolor:'primary.custom1'}} disabled variant='contained'>View</Button> */}
                </Box>
                <Box
                  sx={{
                    background: '#15803d',
                    color: 'white',
                    padding: '20px',
                    borderRadius: '5px',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '15px ',
                    alignItems: 'start'
                  }}
                >
                  <Box>
                    <FaCheckSquare size={30} />
                  </Box>
                  <Typography sx={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '20px', lineHeight: '20px', display: 'block' }}>
                      Admin need approval for below Courses
                    </span>
                    <ul>
                      {availabilityPermission &&
                        availabilityPermission.map((val, index) => {
                          return <li key={index}>{`${val.productname} - ( ${val.duration} month )`}</li>;
                        })}
                    </ul>
                  </Typography>
                </Box>

                <AvailabilityValidationDialog value={validationError} course={epicCourseSelection} duration={duration} from={fromDate} to={toDate} />

              </Stack>
            )}
          </Stack>
        </Grid>
        <Toaster />
        <Box sx={{ position: 'relative', marginTop: '40px' }}>
          {!_.isEmpty(addAvailability) && (
            <Button
              onClick={handleSubmittedData}
              sx={{
                position: 'fixed',
                right: '100px',
                top: '300px',
                color: 'black',
                background: 'gold',
                zIndex: '20',
                fontWeight: 'bolder'
              }}
            >
              Submit - {addAvailability.length} events{' '}
            </Button>
          )}
          {!_.isEmpty(transformedData) && (
            <Button
              onClick={handleSubmittedBWTData}
              sx={{
                position: 'fixed',
                right: '100px',
                top: '300px',
                color: 'black',
                background: 'gold',
                zIndex: '20',
                fontWeight: 'bolder'
              }}
            >
              Submit - {transformedData.length} events{' '}
            </Button>
          )}
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
                        <Box sx={{ borderRadius: '50%', width: '30px', height: '30px', bgcolor: '#15803d', display: 'inline-block' }}></Box>
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
              selectable={data === true}
              events={
                (()=>{
                  switch (epicCourseSelection) {
                    case 'DUI':
                        return modifiedData             // finalResult
                    case 'Behind the Wheels':
                        return bwtCalendarData
                    default: ''
                      break;
                  }
                })()
              } // finalResult , bwtCalendarData
              ref={calendarRef}
              rerenderDelay={10}
              initialDate={date}
              initialView={'dayGridMonth'}
              dayMaxEventRows={3}
              eventDisplay="block"
              headerToolbar={false}
              allDayMaintainDuration
              eventResizableFromStart
              dateClick={ courseOthers === 'Behind the Wheels' && handleClickOpen}
              selectAllow={isDateSelectable}
              select={handleRangeSelect}
              eventDrop={handleEventUpdate}
              eventClick={handleEventSelect}
              eventResize={handleEventUpdate}
              height={matchDownSM ? 'auto' : 720}
              plugins={[dayGridPlugin, interactionPlugin]}
              timeZone="UTC"
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
