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
import { Avatar, Grid, Stack, TableHead, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { FaRegCircleUser } from "react-icons/fa6";



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

const rows = [
  {
    id: 10,
    image: '',
    name: 'ganesh',
    email: 'ganesh@gmail.com',
    course: 'DUI',
    marks: 100
  },
  {
    id: 20,
    image: '',
    name: 'karthick',
    email: 'karthick@gmail.com',
    course: 'Behind the Wheels',
    marks: 85
  },
  {
    id: 30,
    image: '',
    name: 'ramesh',
    email: 'ramesh@gmail.com',
    course: 'Road test',
    marks: 70
  },
  {
    id: 40,
    image: '',
    name: 'suresh',
    email: 'suresh@gmail.com',
    course: 'Defensive',
    marks: 40
  },
  {
    id: 50,
    image: '',
    name: 'sakthiVel',
    email: 'sakthiVel@gmail.com',
    course: 'Driver Educations',
    marks: 60
  },
  {
    id: 60,
    image: '',
    name: 'guna',
    email: 'guna@gmail.com',
    course: 'Driver Educations',
    marks: 90
  }
];





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
 const [selectedColorValue, setSelectedColorValue] = React.useState('');

 const handleColorChange = (event) => {
   setSelectedColorValue(event.target.value);
 };
 // options

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>S.no</TableCell>
            <TableCell>Student Id</TableCell>
            <TableCell>Student</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Marks</TableCell>
            <TableCell align='center'>Attendance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                {
                  <Stack direction={'row'} gap={2} alignItems={'center'}>
                    <Avatar src="" />
                    <Grid container direction={'column'}>
                      <Grid item>
                        <Typography>{row.name}</Typography>
                      </Grid>
                      <Grid item>
                        <Typography>{row.email}</Typography>
                      </Grid>
                    </Grid>
                  </Stack>
                }
              </TableCell>
              <TableCell>{row.course}</TableCell>
              <TableCell>{row.marks}</TableCell>
              <TableCell>
                <FormControl>
                  <RadioGroup aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                    <FormControlLabel value="completed" control={<Radio />} label=
                    {
                      <>
                      <Stack direction={'row'} alignItems={'center'} gap={1}>
                      <FaRegCircleUser color={selectedColorValue === 'completed' ? 'green' : 'black'} size={26} />
                      <Typography>completed</Typography>
                      </Stack>
                      </>
                    } 
                    // onChange={handleColorChange}
                    // checked={selectedColorValue === 'completed'}
                    />
                    <FormControlLabel value="not attend" control={<Radio />} label="not attend" />
                    <FormControlLabel value="not completed" control={<Radio />} label="not completede" />
                  </RadioGroup>
                </FormControl>
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
  );
}
