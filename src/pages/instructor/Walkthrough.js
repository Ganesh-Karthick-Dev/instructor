/* eslint-disable no-unused-vars */

import React, { useEffect, useRef, useState } from 'react';
import {
  Box, Button, Grid, Stack, Step, StepContent, StepLabel, Stepper, TextField, Typography,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import { PDFDownloadLink, PDFViewer, pdf } from '@react-pdf/renderer';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import TaskIcon from '@mui/icons-material/Task';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import GradingIcon from '@mui/icons-material/Grading';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import MainCard from 'components/MainCard';
import { PdfModule } from 'components/Instructor/PdfModule';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import UploadImage from 'components/Instructor/UploadImage';
import axios from 'axios';
import {toast , Toaster} from 'react-hot-toast';



const Walkthrough = () => {


  // ----------- fetching instructor details process -------------

  const [epicUser,setEpicUser] = useState(null)

  const userId = JSON.parse(localStorage.getItem('partnerid'))

  const baseUrl = `https://phpstack-977481-4409636.cloudwaysapps.com/api/v1`;

  useEffect(()=>{
    fetchInstructorDetails()
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


  const navigate = useNavigate();

  const dateOnly = epicUser?.created.split('T')[0];
  const [contractPdf, setContractPdf] = useState();
  const [instructorStatus, setInstructorStatus] = useState({
    status: 2,
    pdfVerified: false
  });
  const [activeStep, setActiveStep] = useState(1);


  useEffect(() => {
    if (epicUser?.contractstatus === '') {
      setActiveStep(0);
    } else if (epicUser?.contractstatus === 'pw_pending') {
      setActiveStep(1);
    } else if (epicUser?.contractstatus === 'pw_review') {
      setActiveStep(2);
    } else {
      setActiveStep(3);
    }
  }, [epicUser?.contractstatus]);

  const handleNext = () => {
    if (instructorStatus.pdfVerified === false && instructorStatus.status === 1) {
      return setActiveStep(1);
    } else if (instructorStatus.pdfVerified === true && instructorStatus.status === 2) {
      return setActiveStep(3);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    navigate('/dashboard');
  };

  const steps = [
    { label: 'Step 1', description: 'Instructor Account Created Successfully' },
    { label: 'Step 2', description: 'Click below button to send signed PDF to admin and wait for admin approval' },
    { label: 'Step 3', description: 'Under Document Verification Process' },
    { label: 'Step 4', description: 'Instructor Account Verified Successfully' },
  ];

  const VerticalStepper = ({ activeStep, handleNext, handleBack, handleReset }) => (
    <MainCard>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step sx={{ fontWeight: 'bolder' }} key={step.label}>
            <StepLabel optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    disabled={(epicUser?.contractstatus === 'pw_review' && activeStep === 2) || (epicUser?.contractstatus === '' && activeStep === 0)}
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1, bgcolor: 'primary.custom1' }}
                    color={index === steps.length - 1 ? 'success' : 'primary'}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={(epicUser?.contractstatus === '' || activeStep === 0) || (epicUser?.contractstatus === 'pw_approved' || activeStep === 3)}
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
  const [sign, setSign] = useState('');
  const handleSign = (event) => {
    setSign(event.target.value);
  };
  const [signView, setSignView] = useState(false);
  useEffect(() => {
    setSignView(false);
  }, []);
  const handleSignView = () => {
    setSignView(true);
  };

  const [pdfData, setPdfData] = useState(null);
  const [blobUrl, setBlobUrl] = useState('');

  useEffect(() => {
    const generatePdf = async () => {
      const doc = <PdfModule data={sign} />;
      const asPdf = pdf([]); 
      asPdf.updateContainer(doc);
      const blob = await asPdf.toBlob();
      blob.name = `contract_${Date.now()}.pdf`; // Add a name to the blob
      blob.type = 'application/pdf'; // Set the correct MIME type
      setPdfData(blob);
      const url = URL.createObjectURL(blob);
      setBlobUrl(url);
    };

    if (sign) {
      generatePdf();
    }
  }, [sign]);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    try {

      // const imageLink = await UploadImage({ srcData: pdfData, fileName: pdfData.name });
      // console.log('Image link:', imageLink);
      axios.post(`${baseUrl}/signcontract`,{
        id : epicUser?.partnerid,
        contract : "https://webnox.blr1.digitaloceanspaces.com/driving_school_api/contract_1.pdf" // URL
      })
      .then((val)=> {
        console.log(`<<<<<<>>>>>>>>`,val);
        toast.success(`contract signed successfully`)
      })
    } catch (error) {
      console.error('Error during image upload:', error);
    }

    setOpen(false);
  };

  return (
    <>
      <Grid gap={2} justifyContent={'center'} container>
        <Grid item md={8} sm={6} xs={12} lg={8}>
          <MainCard>

            <Toaster />

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
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}> Registered on </Typography>
                  <Typography color="text.secondary"> {dateOnly} </Typography>
                </TimelineContent>
              </TimelineItem>

              <Box sx={{ filter: epicUser?.contractstatus === '' && 'blur(3px)', userSelect: epicUser?.contractstatus === '' && 'none' }}>
                <TimelineItem>
                  <TimelineContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}> Contract Process </Typography>
                    <Typography color="text.secondary">Sign the given PDF and upload</Typography>
                  </TimelineContent>
                  <TimelineSeparator>
                    <TimelineDot sx={{ color: 'success.main', bgcolor: 'success.lighter' }}>
                      <HistoryToggleOffIcon style={{ fontSize: '1.6rem' }} />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineOppositeContent sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }} variant="body2" color="text.secondary">
                    <Button sx={{ bgcolor: 'primary.custom1', display: epicUser?.contractstatus === '' && 'none' }} disabled={epicUser?.contractstatus === '' || epicUser?.contractstatus === 'pw_approved' } variant="contained" onClick={handleClickOpen}>
                      Sign Contract PDF
                    </Button>
                  </TimelineOppositeContent>
                </TimelineItem>

                <Box sx={{ filter: epicUser?.contractstatus === 'pw_pending' ? 'blur(3px)' : 'none', userSelect: epicUser?.contractstatus === 'pw_pending' && 'none' }}>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot sx={{ color: 'warning.main', bgcolor: 'warning.lighter' }}>
                        <TaskIcon style={{ fontSize: '1.6rem' }} />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}> Verified </Typography>
                      <Typography color="text.secondary">Account Verified Succesfully</Typography>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineOppositeContent sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }} variant="body2" color="text.secondary">
                      <NavLink style={{ display: (epicUser?.contractstatus === '' || epicUser?.contractstatus === 'pw_pending' || epicUser?.contractstatus === 'pw_review') && 'none' }} to={'/availability'}>
                        <Button variant='contained' disabled={epicUser?.contractstatus === '' || epicUser?.contractstatus === 'pw_pending' || epicUser?.contractstatus === 'pw_review'} sx={{ bgcolor: 'primary.custom1' }}>Choose Availability</Button>
                      </NavLink>
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                      <TimelineDot sx={{ color: 'error.main', bgcolor: 'error.lighter' }}>
                        <FactCheckIcon style={{ fontSize: '1.6rem' }} />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}> Choose Availability </Typography>
                      <Typography color="text.secondary">choose courses to select availability for 3 months</Typography>
                    </TimelineContent>
                  </TimelineItem>

                  <Box sx={{ filter: epicUser?.contractstatus === 'pw_approved' && 'blur(3px)', userSelect: epicUser?.contractstatus === 'pw_approved' && 'none' }}>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot sx={{ color: 'success.main', bgcolor: 'success.lighter' }}>
                          <GradingIcon style={{ fontSize: '1.6rem' }} />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>

                      <TimelineContent>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}> Course Approval </Typography>
                        <Typography color="text.secondary">approved your selected courses</Typography>
                      </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot sx={{ color: 'primary.main', bgcolor: 'primary.lighter' }}>
                          <SentimentVerySatisfiedIcon style={{ fontSize: '1.6rem' }} />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>

                      <TimelineContent>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}> First Class </Typography>
                        <Typography color="text.secondary">first BTW class starting on 25/05/2024</Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Box>
                </Box>
              </Box>
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
        <DialogTitle sx={{ display: 'flex', justifyContent: 'end' }} id="alert-dialog-title">
          <Button color='error' onClick={handleClose}>X</Button>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Stack gap={3} direction={'column'}>

              <PDFViewer style={{ height: '500px', width: '500px' }}>
                <PdfModule data={sign} />
              </PDFViewer>

              <Stack gap={3} justifyContent={'space-evenly'} direction={'row'}>
                <Button variant='contained' sx={{ bgcolor: 'primary.custom1' }} onClick={handleSignView}>
                  add sign
                </Button>
                {
                  signView && <TextField id="outlined-basic" value={sign} onChange={handleSign} placeholder='Enter your name as signature' variant="outlined" />
                }
              </Stack>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ bgcolor: 'primary.custom1' }} variant='contained' onClick={handleClose} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Walkthrough;
