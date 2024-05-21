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

// pdf 
import { PDFDownloadLink } from '@react-pdf/renderer';
// pdf

import { LoadingButton, Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Box, Button, Grid, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import React, { useEffect, useState } from 'react';
import { PdfModule } from 'components/Instructor/PdfModule';

const Walkthrough = () => {

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
    if(instructorStatus.status === 1){
      setActiveStep(1)
    }
  },[instructorStatus])

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
    setActiveStep(0);
  };



  const steps = [
    { label: 'Step 1', description: 'Instructor Account Created Succesfully' },
    { label: 'Step 2', description: 'Click below button to send signed pdf' },
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
                    disabled={ instructorStatus.status === 1 && instructorStatus.pdfVerified === false}
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    color={index === steps.length - 1 ? 'success' : 'primary'}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button 
                  disabled={ instructorStatus.status === 1 && instructorStatus.pdfVerified === false || activeStep === 0}
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
                  <Typography color="text.secondary"> 21/05/2024 </Typography>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent sx={{display:'flex',alignItems:'flex-start',gap:'10px'}} variant="body2" color="text.secondary">

                <PDFDownloadLink
                 document={<PdfModule data={'sample'} />} 
                 fileName='Contract.pdf'
                >
                <Button variant="contained" startIcon={<PaperClipOutlined />}>
                  Download PDF
                  </Button>
                </PDFDownloadLink>

                

                
                <LoadingButton /*loading*/ variant="contained" loadingPosition="start" startIcon={<CloudUploadOutlined />}>
                Upload PDF
                </LoadingButton>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot sx={{ color: 'success.main', bgcolor: 'success.lighter' }}>
                    <HistoryToggleOffIcon style={{ fontSize: '1.6rem' }} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" sx={{fontWeight:'bold'}}> Contract Process </Typography>
                  <Typography color="text.secondary">Sign the given PDF and upload</Typography>
                </TimelineContent>
              </TimelineItem>


              {/* level - 1 */}

              <Box sx={{filter : instructorStatus.status === 1 && 'blur(3px)',userSelect:instructorStatus.status === 1 && 'none'}}>
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

              {/* level - 2 */}
              <Box sx={{filter:instructorStatus.status === 2 && 'blur(3px)',userSelect:instructorStatus.status === 2 && 'none'}}>

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
              {/* level - 2 */}
              </Box>


              {/* level - 2 */}


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
    </>
  );
};

export default Walkthrough;
