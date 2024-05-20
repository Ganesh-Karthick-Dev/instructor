/* eslint-disable no-unused-vars */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Autocomplete, Avatar, Button, ButtonGroup, Chip, Grid, OutlinedInput, Stack, TableHead, TextField, Typography } from '@mui/material';
import { FaRegCircleUser } from 'react-icons/fa6';
import tempImg from '../../../assets/images/users/avatar-8.png';

// for pop over
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
// for pop over

// tooltip
import Tooltip from '@mui/material/Tooltip';
import MainCard from 'components/MainCard';
import { PiStudentFill } from 'react-icons/pi';
// tooltip

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="next page">
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton onClick={handleLastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="last page">
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  // options
  const [selectedColorValue, setSelectedColorValue] = React.useState('completed');

  const handleColorChange = (event) => {
    setSelectedColorValue(event.target.value);
  };
  // options

  // pop-over
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [selectedStudent, setSelectedStudent] = React.useState();

  // console.log(`select student`, selectedStudent);

  const handleClickOpen = (row) => {
    setOpen(true);
    setSelectedStudent(row);
    console.log(row);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // pop-over


    // data
    const [rows , setRows ] = React.useState(
      [
        {
          id: 10,
          image: '',
          name: 'ganesh',
          email: 'ganesh@gmail.com',
          course: 'DUI',
          marks: 100,
          attendance: [
            { date: '17-05-2024', status: 'Completed' },
            { date: '18-05-2024', status: 'Completed' },
            { date: '19-05-2024', status: 'Completed' }
          ]
        },
        {
          id: 20,
          image: '',
          name: 'karthick',
          email: 'karthick@gmail.com',
          course: 'Behind the Wheels',
          marks: 85,
          attendance: [
            { date: '17-05-2024', status: 'Completed' },
            { date: '18-05-2024', status: 'Not Attend' },
            { date: '19-05-2024', status: 'Completed' }
          ]
        },
        {
          id: 30,
          image: '',
          name: 'ramesh',
          email: 'ramesh@gmail.com',
          course: 'Road test',
          marks: 70,
          attendance: [
            { date: '17-05-2024', status: 'Action not Taken Yet' },
            { date: '18-05-2024', status: 'Not Attend' },
            { date: '19-05-2024', status: 'Completed' }
          ]
        },
        {
          id: 40,
          image: '',
          name: 'suresh',
          email: 'suresh@gmail.com',
          course: 'Defensive',
          marks: 40,
          attendance: [
            { date: '17-05-2024', status: 'Action not Taken Yet' },
            { date: '18-05-2024', status: 'Not Attend' },
            { date: '19-05-2024', status: 'Completed' }
          ]
        },
        {
          id: 50,
          image: '',
          name: 'sakthiVel',
          email: 'sakthiVel@gmail.com',
          course: 'Driver Educations',
          marks: 60,
          attendance: [
            { date: '17-05-2024', status: 'Action not Taken Yet' },
            { date: '18-05-2024', status: 'Not Attend' },
            { date: '19-05-2024', status: 'Completed' }
          ]
        },
        {
          id: 60,
          image: '',
          name: 'guna',
          email: 'guna@gmail.com',
          course: 'Driver Educations',
          marks: 90,
          attendance: [
            { date: '17-05-2024', status: 'Action not Taken Yet' },
            { date: '18-05-2024', status: 'Not Attend' },
            { date: '19-05-2024', status: 'Completed' }
          ]
        }
      ]
    )
    // data

  
  // global search

  const globalSearch = (dataArray, pattern) => {
    // Use lodash filter to search for objects matching the pattern
    return _.filter(dataArray, (item) => {
      // Convert each object's values to a string and perform case-insensitive search
      const values = _.values(item).join('').toLowerCase();
      return values.includes(pattern.toLowerCase());
    });
  };

  
  // ================== pipe - 1 ==========================
  const [searchValue, setSearchvalue] = React.useState('');
  const searchResults = globalSearch(rows, searchValue);
  console.log(`searchResults`,searchResults);
  // ================== pipe - 1 ==========================

  
  // ================== pipe - 2 ==========================
  const [filteredData,setfilteredData] = React.useState(searchResults) 
  React.useEffect(() => {
    setfilteredData(_.isEmpty(searchResults) ? rows : searchResults);
    setSelectedCourse(filteredData)
  }, [searchValue]);
  console.log(`filteredData`,filteredData);
  // ================== pipe - 2 ==========================

  
  // ================== pipe - 3 ==========================
  const [selectedCourse, setSelectedCourse] = React.useState(filteredData);
  const [filteredCourse,setFilteredCourse] = React.useState(filteredData)
  console.log(`selectedCourse`,selectedCourse);
  console.log(`filteredCourse`,filteredCourse);
  console.log(`-------------------------------------------`);
  // ================== pipe - 3 ==========================


 // =================== pipe - 4 ===========================
  // const [finalData,setFinalData] = React.useState(selectedCourse)
  // ================== pipe - 4 ==========================





  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setSearchvalue(e.target.value);
  };

  React.useEffect(()=>{
    setFilteredCourse(_.uniqBy(rows,(e)=> e.course))
  },[])

  const handleCourseSelect = (event, value) => {

    console.log(`course selection`,value);

    console.log(`course selection event`,event);
    

    setSelectedCourse(_.isEmpty(value) ? filteredData : value)

  };

  // global search


  // status search

  const [activeButton, setActiveButton] = React.useState('All');

  const handleButtonClick = (buttonKey) => {
    setActiveButton(buttonKey);
    
    if(_.isEmpty(searchResults)){
      setfilteredData(rows)
    }
    if (buttonKey === 'ReadyToTakeTest') {
      const data = searchResults.filter(val => 
        val.attendance.some(val2 => val2.status === 'Completed')
      );
      setfilteredData(data);
    } else if (buttonKey === 'Incomplete') {
      const data = searchResults.filter(val => 
        val.attendance.some(val2 => val2.status !== 'Completed')
      );
      setfilteredData(data);
    } else if (buttonKey === 'All') {
      setfilteredData(searchResults);
    }
    else {
      setfilteredData(searchResults);
    }
  };

    // status search


  return (
    <>
    <MainCard>

    <Typography>Student List</Typography>

      <Stack sx={{my:2}} direction={'row'} alignItems={'center'} justifyContent={'space-evenly'}>
      
      <OutlinedInput
            sx={{ width: '200px', outline: '2px solid black' }}
            id="start-adornment-email"
            placeholder="name / course / id / status"
            onChange={handleSearch}
            startAdornment={<PiStudentFill size={40} />}
          />
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
                  key="Incomplete"
                  variant={activeButton === 'Incomplete' ? 'contained' : 'outlined'}
                  onClick={() => handleButtonClick('Incomplete')}
                >
                  Incomplete
                </Button>
                <Button
                  sx={{ height: 'fit-content' }}
                  key="ReadyToTakeTest"
                  variant={activeButton === 'ReadyToTakeTest' ? 'contained' : 'outlined'}
                  onClick={() => handleButtonClick('ReadyToTakeTest')}
                >
                  Ready to take Test
                </Button>
              </ButtonGroup>

              <Autocomplete
                multiple
                id="tags-outlined"
                options={filteredCourse}
                getOptionLabel={(option) => option.course }
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
                  width: '200px'
                }}
              />

      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell align="center">S.no</TableCell>
              <TableCell align="center">Student Id</TableCell>
              <TableCell align="center">Student</TableCell>
              <TableCell align="center">Course</TableCell>
              <TableCell align="center">Marks</TableCell>
              <TableCell align="center">Attendance</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0 ? selectedCourse.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : selectedCourse).map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center" component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell>
                  <Stack direction={'row'} gap={2} justifyContent={'center'} alignItems={'center'}>
                    <Avatar src={tempImg} alt="user-image" />
                    <Grid container direction={'column'}>
                      <Grid item>
                        <Typography>{row.name}</Typography>
                      </Grid>
                      <Grid item>
                        <Typography>{row.email}</Typography>
                      </Grid>
                    </Grid>
                  </Stack>
                </TableCell>
                <TableCell align="center">
                  <Chip label={row.course} />
                </TableCell>
                <TableCell align="center">{row.marks}</TableCell>
                <TableCell align="center">
                  <ButtonGroup orientation="vertical" sx={{ display: 'flex', gap: '10px' }} aria-label="Vertical button group">
                    {row.attendance.map((val, i) => (
                      <Tooltip key={i} placement="left" title={val.status}>
                        <Stack direction={'row'} alignItems={'center'} gap={1}>
                          <FaRegCircleUser
                            color={(() => {
                              switch (val.status) {
                                case 'Completed':
                                  return '#16a34a';
                                case 'Not Attend':
                                  return '#dc2626';
                                case 'Action not Taken Yet':
                                  return 'primary';
                                default:
                                  '#fffff';
                                  break;
                              }
                            })()}
                            size={26}
                          />
                          <Typography variant="caption">{val.date}</Typography>
                        </Stack>
                      </Tooltip>
                    ))}
                  </ButtonGroup>
                </TableCell>
                <TableCell align="center">
                  <Button variant="outlined" onClick={() => handleClickOpen(row)}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

    </MainCard>

      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{selectedStudent?.name}</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Attendance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedStudent &&
                  selectedStudent.attendance.map((val, index) => {
                    return (
                      <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align="center">{val.date}</TableCell>
                        <TableCell align="center">{val.status}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="outlined" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="success" onClick={handleClose} autoFocus>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}