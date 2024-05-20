/* eslint-disable no-unused-vars */

import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
const _ = require('lodash');

// material-ui
import {
  Box,
  Button,
  Select,
  Chip,
  FormControl,
  MenuItem,
  OutlinedInput,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TableFooter
} from '@mui/material';
import Paper from '@mui/material/Paper';

// third-party
import { useTable } from 'react-table';
import { PiStudentFill } from 'react-icons/pi';
import { FaSearch } from 'react-icons/fa';

// temp image for student from assests
import avatar1 from '../../../assets/images/users/avatar-1.png';
import avatar2 from '../../../assets/images/users/avatar-2.png';
import avatar3 from '../../../assets/images/users/avatar-3.png';
import avatar4 from '../../../assets/images/users/avatar-4.png';
import avatar5 from '../../../assets/images/users/avatar-5.png';

// project import
// import makeData from 'data/react-table';
import MainCard from 'components/MainCard';

import Avatar from 'components/@extended/Avatar';
import ScrollX from 'components/ScrollX';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import { CSVExport, HidingSelect } from 'components/third-party/ReactTable';
import { MailOutlined } from '@ant-design/icons';

const avatarImage = require.context('assets/images/users', true);

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data }) {
  const [searchValue, setSearchvalue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setSearchvalue(e.target.value);
  };

  const globalSearch = (dataArray, pattern) => {
    // Use lodash filter to search for objects matching the pattern
    return _.filter(dataArray, (item) => {
      // Convert each object's values to a string and perform case-insensitive search
      const values = _.values(item).join('').toLowerCase();
      return values.includes(pattern.toLowerCase());
    });
  };


  const [status, setStatus] = useState('Action not Taken');

  useEffect(() => {
    setStatus('Action not Taken');
  }, []);

  const handleAction = (row, e) => {
    setStatus(e.target.value);
    // console.log(row);
    console.log(`Status updated to:`, e.target.value);
    data.map((val)=>{
      return val.id === row.id ? val.status = e.target.value : val.status
    })
  };

  console.log(`status value:`, status);


  // Example usage
  const searchResults = globalSearch(data, searchValue);

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Stack direction="row" alignItems={'center'} justifyContent={'space-between'} sx={{ p: 2, pb: 0 }}>
        {/* <HidingSelect hiddenColumns={hiddenColumns} setHiddenColumns={setHiddenColumns} allColumns={allColumns} />
        <CSVExport data={data} filename={'hiding-column-table.csv'} headers={headers} /> */}

        <Typography color={'primary'} variant="h4">
          Student List
        </Typography>

        <Button sx={{px:'5px',background:'gold',color:'black',fontWeight:'bold'}}>Submit</Button>

        <form style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <OutlinedInput
            sx={{ width: '200px', outline: '2px solid black' }}
            id="start-adornment-email"
            placeholder="name / course / id / status"
            onChange={handleSearch}
            startAdornment={<PiStudentFill size={40} />}
          />
        </form>
      </Stack>

      <TableContainer sx={{ height: '350px',overflowX:'hidden' }} component={Paper}>
        <Table sx={{ width: '100%', position: 'relative' }} aria-label="simple table">
          <TableHead sx={{ position: 'sticky', zIndex: '20', left: '0', top: '0' }}>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell align="center">Student ID</TableCell>
              <TableCell align="center">Student details</TableCell>
              <TableCell align="center">Course</TableCell>
              <TableCell align="center" sx={{width:'200px'}}>Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ overflowY: 'scroll' }}>
            {searchResults.map((row, index) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">
                  <Stack alignItems={'center'} gap={2} direction={'row'}>
                    <Avatar alt="Remy Sharp" src={row.avatar} sx={{ width: 40, height: 40 }} />
                    <Stack alignItems={'start'}>
                      <Typography>{row.name}</Typography>
                      <Typography>{row.email}</Typography>
                    </Stack>
                  </Stack>
                </TableCell>
                <TableCell align="center">
                  <Chip label={row.course} />
                </TableCell>
                <TableCell align="center" sx={{width:"200px"}}>
                  {(() => {
                    switch (row.status) {
                      case 'Completed':
                        return <Box sx={{ background: '#16a34a', color: 'white', padding: '5px', borderRadius: '5px' }}>{row.status}</Box>;
                      case 'OnGoing':
                        return <Box sx={{ background: '#e11d48', color: 'white', padding: '3px', borderRadius: '5px' }}>
                          <Typography variant='h6'>{row.status}</Typography>
                        </Box>;
                      case 'Not Attend':
                        return <Box sx={{ background: '#dc2626', color: 'white', padding: '5px', borderRadius: '5px'}}>
                          {row.status}
                        </Box>;
                      case 'Not Yet Started':
                        return <Box sx={{ background: '#0891b2', color: 'white', padding: '5px', borderRadius: '5px' }}>
                          <span style={{ whiteSpace: 'nowrap' }}>{row.status}</span>
                          
                          </Box>;
                      default:
                        return <Box sx={{ background: '#a8a29e', color: 'white', padding: '5px', borderRadius: '5px' }}>{row.status}</Box>;
                    }
                  })()}
                </TableCell>
                <TableCell>
                  <FormControl  sx={{ m: 1, minWidth: 120 }}>
                    <Select value={status} onChange={(e)=>handleAction(row,e)} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                      <MenuItem value="Action not Taken">
                        <em>Action not Taken</em>
                      </MenuItem>
                      <MenuItem value={'Completed'}>Completed</MenuItem>
                      <MenuItem value={'Not Attend'}>Not Attend</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

ReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array
};

// ==============================|| REACT TABLE - COLUMN HIDING ||============================== //

const AvatarCell = ({ value }) => <Avatar alt="Avatar 1" size="sm" src={avatarImage(`./avatar-${value}.png`)} />;

AvatarCell.propTypes = {
  value: PropTypes.number
};

const StatusCell = ({ value }) => {
  switch (value) {
    case 'Complicated':
      return <Chip color="error" label="Complicated" size="small" variant="light" />;
    case 'Relationship':
      return <Chip color="success" label="Relationship" size="small" variant="light" />;
    case 'Single':
    default:
      return <Chip color="info" label="Single" size="small" variant="light" />;
  }
};

StatusCell.propTypes = {
  value: PropTypes.string
};

const ColumnHiding = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'S.No',
        accessor: 'avatar',
        className: 'cell-center'
      },
      {
        Header: 'id',
        accessor: 'firstName',
        className: 'cell-center'
      },
      {
        Header: 'Student',
        accessor: 'lastName'
      },
      {
        Header: 'Course',
        accessor: 'email'
      },
      {
        Header: 'Status',
        accessor: 'age',
        className: 'cell-right'
      },
      {
        Header: 'Action',
        accessor: 'action',
        className: 'cell-right'
      }
    ],
    []
  );

  const data = [
    {
      avatar: avatar1,
      id: 1,
      name: 'sakthi vel',
      email: 'abc123@gmail.com',
      course: 'DUI',
      status: 'Not Yet Started',
      date : 30
    },
    {
      id: 2,
      avatar: avatar2,
      name: 'suresh',
      email: 'ganesh123@gmail.com',
      course: 'Defensive',
      status: 'Not Yet Started',
      date : 28
    },
    {
      id: 3,
      avatar: avatar3,
      name: 'prabhu',
      email: 'karthick123@gmail.com',
      course: 'Road Test',
      status: 'Not Yet Started',
      date : 15
    },
    {
      id: 4,
      avatar: avatar4,
      name: 'vimal',
      email: 'suresh123@gmail.com',
      course: 'Behind the Wheels',
      status: 'Not Yet Started',
      date : 16
    },
    {
      id: 5,
      avatar: avatar5,
      name: 'ramesh',
      email: 'sakthi123@gmail.com',
      course: 'Drivers Education',
      status: 'Not Yet Started',
      date : 15
    },
    {
      id: 6,
      avatar: avatar1,
      name: 'raja',
      email: 'vel123@gmail.com',
      course: 'DUI',
      status: 'Not Yet Started',
      date : 15
    },
    {
      id: 7,
      avatar: avatar2,
      name: 'vishnu',
      email: 'sakthivel123@gmail.com',
      course: 'Defensive',
      status: 'Not Yet Started',
      date : 16
    },
    {
      id: 8,
      avatar: avatar3,
      name: 'goutham',
      email: 'bharathi123@gmail.com',
      course: 'Drivers Education',
      status: 'Not Yet Started',
      date : 17
    },
    {
      id: 9,
      avatar: avatar4,
      name: 'nirmal',
      email: 'ramesh123@gmail.com',
      course: 'Drivers Education',
      status: 'Not Yet Started',
      date : 16
    },
    {
      id: 10,
      avatar: avatar5,
      name: 'sanjai',
      email: 'dinesh123@gmail.com',
      course: 'Road Test',
      status: 'Not Yet Started',
      date : 17
    }
  ];

  const currentDate = new Date().getDate()

  return (
    <Box sx={{ width: '100%', border: '1px solid #e5e7eb' }}>
      <ReactTable columns={columns} data={data} />
    </Box>
  );
};

export default ColumnHiding;
