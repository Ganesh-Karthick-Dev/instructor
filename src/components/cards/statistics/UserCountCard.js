/* eslint-disable no-unused-vars */


import PropTypes from 'prop-types';

// material-ui
import { styled } from '@mui/material/styles';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import MainCard from 'components/MainCard';



// =============================|| USER NUM CARD ||============================= //

const UserCountCard = ({ primary, secondary, secondary2 , iconPrimary, color , iconColor }) => {


  // styles
const IconWrapper = styled('div')({
  position: 'absolute',
  left: '25px',
  bottom: '20px',
  color: iconColor,
  // transform: 'rotate(25deg)',
  '& svg': {
    width: '50px',
    height: '50px',
    opacity: '1'
  }
});


  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

  return (
    <MainCard
    sx={{ 
      background: color,
      position: 'relative',
      color: 'black',
      boxShadow : 1,
      transition: 'all 0.3s ease',
      '&:hover span, &:hover svg': {
        transform: 'scale(1.2,1.2)', // Change the values as needed
      },
      '& span, & svg': {
        transition: 'transform 0.3s ease', // Smooth transition for elements
      }
    }}
     >


        <IconWrapper>{primaryIcon}</IconWrapper>
        <Grid container direction="column" justifyContent="center" alignItems="end" spacing={1}>
          <Grid item sm={12}>
            <Typography variant="h5" align="center" color="inherit">
              {secondary}
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="h5" sx={{fontWeight:'bolder'}} align="center" color="inherit">
              {primary}
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="body1" align="center" color="inherit">
              {secondary2}
            </Typography>
          </Grid>
        </Grid>


    </MainCard>
  );
};

UserCountCard.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  secondary2: PropTypes.string,
  iconPrimary: PropTypes.object,
  color: PropTypes.string,
  iconColor : PropTypes.string
};

export default UserCountCard;
