/* eslint-disable no-unused-vars */

import { CloudUploadOutlined, GiftOutlined, PaperClipOutlined, RetweetOutlined } from '@ant-design/icons';
import { DesktopMacOutlined } from '@mui/icons-material';

// mui material icons
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import TaskIcon from '@mui/icons-material/Task';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import GradingIcon from '@mui/icons-material/Grading';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
// mui material icons


// pop-up-dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// pop-up-dialog



// pdf 
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
// pdf


// upload module
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
// upload module


import { LoadingButton, Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Box, Button, Grid, Stack, Step, StepContent, StepLabel, Stepper, TextField, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import React, { useEffect, useRef, useState } from 'react';
import { PdfModule } from 'components/Instructor/PdfModule';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Walkthrough = () => {


  const navigate = useNavigate()


    // getting instructor details from redux store

    const instructor = useSelector((state)=> state.userSlice)
    const {created , contractstatus } = instructor.instructor
    // var contractstatus = 'pw-approved'
    const dateOnly = created.split('T')[0];                    // instructor registered date
 
    // -------------------contractstatus-------------------
    const handleBlur = ()=> {                               // instructor contract status - 1. '' , 2. pw-pending , 3. pw-review , 4.pw-approved
      // if(contractstatus === ''){
      //   return 'blur(3px)'
      // }
      // else if(contractstatus === 'pw-pending'){
      //   return
      // }
    }
    // -------------------contractstatus-------------------

    // getting instructor details from redux store





  // instructor status
  const [contractPdf,setContractPdf] = useState()
  const [instructorStatus,setInstructorStatus] = useState({
    status : 2,
    pdfVerified : false
  })
  // const instructorStat = ()=>{
  //   if(instructorStatus === 1){

  //   }
  // }
  // instructor status


  const [activeStep, setActiveStep] = useState(1);

  useEffect(()=>{
    if(contractstatus === ''){
      setActiveStep(0)
    }
    else if(contractstatus === 'pw-pending'){
      setActiveStep(1)
    }
    else if(contractstatus === 'pw-review'){
      setActiveStep(2)
    }
    else {
      setActiveStep(3)
    }
  },[contractstatus])

  const handleNext = () => {
    if(instructorStatus.pdfVerified === false && instructorStatus.status === 1){
     return setActiveStep(1)
    }
    else if(instructorStatus.pdfVerified === true && instructorStatus.status === 2){
      return setActiveStep(3)
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0)
    navigate('/dashboard')
  };



  const steps = [
    { label: 'Step 1', description: 'Instructor Account Created Succesfully' },
    { label: 'Step 2', description: 'Click below button to send signed pdf to admin and wait for admin approval' },
    { label: 'Step 3', description: 'Under Document Verification Process' },
    { label: 'Step 4', description: 'Instructoir Account Verified Succesfully' },
  ];

  const VerticalStepper = ({ activeStep, handleNext, handleBack, handleReset }) => (
    <MainCard>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step sx={{fontWeight:'bolder'}} key={step.label}>
            <StepLabel  optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    disabled={ (contractstatus === 'pw-review' && activeStep === 2) || (contractstatus === '' && activeStep === 0) }
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 , bgcolor:'primary.custom1'}}
                    color={index === steps.length - 1 ? 'success' : 'primary'}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button 
                  disabled={ contractstatus === '' || activeStep === 0}
                  onClick={handleBack} sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Box sx={{ pt: 2 }}>
          <Typography sx={{ color: 'success.main' }}>All steps completed - you&apos;re finished</Typography>
          <Button size="small" variant="contained" color="success" onClick={handleReset} sx={{ mt: 2, mr: 1 }}>
            Dashboard 
          </Button>
        </Box>
      )}
    </MainCard>
  );

  const toastsmg = useRef(null);


   //  sign handle 
  // const handlePdfUpload = (e) => {
  //   const file = e.files[0]; // Get the uploaded file
  //   console.log('uploaded pdf', file);
  //   setInstructorStatus({...instructorStatus,pdfVerified : file}); // Store the file in state
  // };

  const [sign,setSign] = useState('')

  const handleSign = (event) => {
    setSign(event.target.value);
  };
  //  sign handle 



  // display isgn option
  const [signView,setSignView] = useState(false)

  useEffect(()=> {
    setSignView(false)
  },[])

  const handleSignView = ()=> {
    setSignView(true)
  }



  // popup -dialog
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // popup -dialog



  // navigate to availability

  // const navigate = useNavigate()

  // const handleNavigateAvailability = ()=> {
  //   navigate('/availability')
  // }



  return (
    <>
      <Grid gap={2} justifyContent={'center'} container>
        <Grid item md={8} sm={6} xs={12} lg={8}>
          <MainCard>
            <Timeline
              position="alternate"
              sx={{
                '& .MuiTimelineItem-root': { minHeight: 90 },
                '& .MuiTimelineOppositeContent-root': { mt: 0.5 },
                '& .MuiTimelineDot-root': {
                  borderRadius: 1.25,
                  boxShadow: 'none',
                  margin: 0,
                  ml: 1.25,
                  mr: 1.25,
                  p: 1,
                  '& .MuiSvgIcon-root': { fontSize: '1.2rem' }
                },
                '& .MuiTimelineContent-root': { borderRadius: 1, bgcolor: 'secondary.lighter', height: '100%' },
                '& .MuiTimelineConnector-root': { border: '1px dashed', borderColor: 'secondary.light', bgcolor: 'transparent' }
              }}
            >

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ color: 'primary.main', bgcolor: 'primary.lighter' }}>
                    <HowToRegIcon style={{ fontSize: '1.6rem' }} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" sx={{fontWeight:'bold'}}> Registered on </Typography>
                  <Typography color="text.secondary"> {dateOnly} </Typography>
                </TimelineContent>
              </TimelineItem>

              

                {/* level - 1 */}
              <Box sx={{filter:contractstatus === '' && 'blur(3px)',userSelect:contractstatus === '' && 'none'}}>
              <TimelineItem>
                <TimelineContent>
                  <Typography variant="h6" sx={{fontWeight:'bold'}}> Contract Process </Typography>
                  <Typography color="text.secondary">Sign the given PDF and upload</Typography>
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot sx={{ color: 'success.main', bgcolor: 'success.lighter' }}>
                    <HistoryToggleOffIcon style={{ fontSize: '1.6rem' }} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineOppositeContent sx={{display:'flex',alignItems:'flex-start',gap:'10px'}} variant="body2" color="text.secondary">

                <Button sx={{bgcolor:'primary.custom1',display:contractstatus === '' && 'none'}} disabled={contractstatus === ''} variant="contained" onClick={handleClickOpen}>
                Sign Contract PDF
                </Button>

                </TimelineOppositeContent>
              </TimelineItem>
              {/* level - 2 */}
              <Box sx={{filter : (contractstatus === 'pw-pending' || contractstatus === 'pw-review') ? 'blur(3px)' : 'none',userSelect:(contractstatus === 'pw-pending' || contractstatus === 'pw-review') ? 'blur(3px)' : 'none'}}>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ color: 'warning.main', bgcolor: 'warning.lighter' }}>
                    <TaskIcon style={{ fontSize: '1.6rem' }} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                  <Typography variant="h6" sx={{fontWeight:'bold'}}> Verified </Typography>
                  <Typography color="text.secondary">Account Verified Succesfully</Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>

                <TimelineOppositeContent sx={{display:'flex',alignItems:'flex-start',gap:'10px'}} variant="body2" color="text.secondary">
                  <NavLink style={{display : (contractstatus === '' || contractstatus === 'pw-pending' || contractstatus === 'pw-review') && 'none' }} to={'/availability'}>
                <Button variant='contained' disabled={contractstatus === '' || contractstatus === 'pw-pending' || contractstatus === 'pw-review'} sx={{bgcolor:'primary.custom1'}}>Choose Availability</Button>
                  </NavLink>
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot sx={{ color: 'error.main', bgcolor: 'error.lighter' }}>
                    <FactCheckIcon style={{ fontSize: '1.6rem' }} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                  <Typography variant="h6" sx={{fontWeight:'bold'}}> Choose Availability </Typography>
                  <Typography color="text.secondary">choose courses to select availability for 3 months</Typography>
                </TimelineContent>
              </TimelineItem>

              {/* level - 3 */}
              <Box sx={{filter:contractstatus === 'pw-approved' && 'blur(3px)',userSelect:contractstatus === 'pw-approved' && 'none'}}>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ color: 'success.main', bgcolor: 'success.lighter' }}>
                    <GradingIcon style={{ fontSize: '1.6rem' }} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                  <Typography variant="h6" sx={{fontWeight:'bold'}}> Course Approval </Typography>
                  <Typography color="text.secondary">approved your selected courses</Typography>
                </TimelineContent>
              </TimelineItem>


              <TimelineItem >  
                <TimelineSeparator>
                  <TimelineDot sx={{ color: 'primary.main', bgcolor: 'primary.lighter' }}>
                    <SentimentVerySatisfiedIcon style={{ fontSize: '1.6rem' }} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                  <Typography variant="h6" sx={{fontWeight:'bold'}}> First Class </Typography>
                  <Typography color="text.secondary">first BTW class starting on 25/05/2024</Typography>
                </TimelineContent>
              </TimelineItem>
              </Box>
              {/* level - 3 */}
              </Box>
              {/* level - 2 */}
              </Box>
              {/* level - 1 */}



              
            </Timeline>





          </MainCard>
        </Grid>

        <Grid item md={3} sm={5} xs={12} lg={3}>
          <VerticalStepper
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
          />
        </Grid>
      </Grid>


      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{display:'flex',justifyContent:'end'}} id="alert-dialog-title">
          <Button color='error' onClick={handleClose}>X</Button>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Stack gap={3} direction={'column'}>
          <PDFViewer style={{ height: '500px', width: '500px' }}>
            <PdfModule data={sign} />
          </PDFViewer>
          <Stack gap={3} justifyContent={'space-evenly'} direction={'row'}>
          <Button variant='contained' sx={{bgcolor:'primary.custom1'}} onClick={handleSignView}>
            add sign
          </Button>
          {
            signView && <TextField id="outlined-basic" value={sign} onChange={handleSign} placeholder='Enter your name as signature'  variant="outlined" />
          }
          </Stack>
          </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button sx={{bgcolor:'primary.custom1'}} variant='contained' onClick={handleClose} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>


    </>
  );
};

export default Walkthrough;






// const AlertDialog = ()=> {
  

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open alert dialog
//       </Button>
      
//     </React.Fragment>
//   );
// }





