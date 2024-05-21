import PropTypes from 'prop-types';

// material-ui
import { styled } from '@mui/material/styles';
import { Card, CardContent, Grid, Typography } from '@mui/material';



// =============================|| USER NUM CARD ||============================= //

const UserCountCard = ({ primary, secondary, secondary2 , iconPrimary, color , iconColor }) => {


  // styles
const IconWrapper = styled('div')({
  position: 'absolute',
  left: '-17px',
  bottom: '-27px',
  color: iconColor,
  transform: 'rotate(25deg)',
  '& svg': {
    width: '80px',
    height: '80px',
    opacity: '1'
  }
});


  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

  return (
    <Card 
    elevation={0} 
    sx={{ 
      background: color,
      position: 'relative',
      color: '#fff',
      boxShadow:10,
      transition: 'all 0.3s ease',
      '&:hover span, &:hover svg': {
        transform: 'translate(10px, 10px)', // Change the values as needed
      },
      '& span, & svg': {
        transition: 'transform 0.3s ease', // Smooth transition for elements
      }
    }}
    >
      <CardContent>
        <IconWrapper>{primaryIcon}</IconWrapper>
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={1}>
          <Grid item sm={12}>
            <Typography variant="h5" align="center" color="inherit">
              {secondary}
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="h5" align="center" color="inherit">
              {primary}
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography variant="h5" align="center" color="inherit">
              {secondary2}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
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
