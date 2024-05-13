import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Checkbox, FormControlLabel, FormHelperText, Grid, Link, InputAdornment, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';
import * as Joi from 'joi';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';
import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import axios from 'axios';

// Validation schema using Joi
const schema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).max(255).required(),
  password: Joi.string().max(255).required()
});

const AuthLogin = () => {
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // const toast = usetoast();
  const { login } = useAuth();
  const scriptedRef = useScriptRef();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      email: 'sakthiveltofficial@gmail.com',  // Set the default value here
      password : 'b72uvl6k7m' 
    }
  });

  const onSubmit = async (data) => {
    try {
      await schema.validateAsync(data);
      await login(data.email, data.password);
      if (scriptedRef.current) {
        toast.success('Login successful');
      }
    } catch (err) { 
      if (scriptedRef.current) {
        toast.error(err.message);
      }
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Toaster />
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="email-login">Email Address</InputLabel>
            <OutlinedInput
              id="email-login"
              type="email"
              {...register('email')}
              placeholder="Enter email address"
              fullWidth
              error={Boolean(errors.email)}
            />
            {errors.email && (
              <FormHelperText error>{errors.email.message}</FormHelperText>
            )}
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="password-login">Password</InputLabel>
            <OutlinedInput
              fullWidth
              error={Boolean(errors.password)}
              id="password-login"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    color="secondary"
                  >
                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Enter password"
            />
            {errors.password && (
              <FormHelperText error>{errors.password.message}</FormHelperText>
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} sx={{ mt: -1 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(event) => setChecked(event.target.checked)}
                  name="checked"
                  color="primary"
                  size="small"
                />
              }
              label={<Typography variant="h6">Keep me sign in</Typography>}
            />
            <Link variant="h6" component={RouterLink} to="/forgot-password" color="text.primary">
              Forgot Password?
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AnimateButton>
            <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
              Login
            </Button>
          </AnimateButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default AuthLogin;






// import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';

// // material-ui
// import {
//   Button,
//   Checkbox,
//   FormControlLabel,
//   FormHelperText,
//   Grid,
//   Link,
//   InputAdornment,
//   InputLabel,
//   OutlinedInput,
//   Stack,
//   Typography
// } from '@mui/material';

// // third party
// import * as Yup from 'yup';
// import { Formik } from 'formik';

// // project import
// import useAuth from 'hooks/useAuth';
// import useScriptRef from 'hooks/useScriptRef';
// import IconButton from 'components/@extended/IconButton';
// import AnimateButton from 'components/@extended/AnimateButton';

// // assets
// import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// // ============================|| JWT - LOGIN ||============================ //

// const AuthLogin = () => {
//   const [checked, setChecked] = React.useState(false);

//   const { login } = useAuth();
//   const scriptedRef = useScriptRef();

//   const [showPassword, setShowPassword] = React.useState(false);
//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <>
//       <Formik
//         initialValues={{
//           email: '', // info@codedthemes.com
//           password: '', // 123456
//           submit: null // null
//         }}
//         validationSchema={Yup.object().shape({
//           email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
//           password: Yup.string().max(255).required('Password is required')
//         })}
//         onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
//           try {
//             await login(values.email, values.password);
//             if (scriptedRef.current) {
//               setStatus({ success: true });
//               setSubmitting(false);
//             }
//           } catch (err) {
//             console.error(err);
//             if (scriptedRef.current) {
//               setStatus({ success: false });
//               setErrors({ submit: err.message });
//               setSubmitting(false);
//             }
//           }
//         }}
//       >
//         {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
//           <form noValidate onSubmit={handleSubmit}>
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <Stack spacing={1}>
//                   <InputLabel htmlFor="email-login">Email Address</InputLabel>
//                   <OutlinedInput
//                     id="email-login"
//                     type="email"
//                     value={values.email}
//                     name="email"
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     placeholder="Enter email address"
//                     fullWidth
//                     error={Boolean(touched.email && errors.email)}
//                   />
//                   {touched.email && errors.email && (
//                     <FormHelperText error id="standard-weight-helper-text-email-login">
//                       {errors.email}
//                     </FormHelperText>
//                   )}
//                 </Stack>
//               </Grid>
//               <Grid item xs={12}>
//                 <Stack spacing={1}>
//                   <InputLabel htmlFor="password-login">Password</InputLabel>
//                   <OutlinedInput
//                     fullWidth
//                     error={Boolean(touched.password && errors.password)}
//                     id="-password-login"
//                     type={showPassword ? 'text' : 'password'}
//                     value={values.password}
//                     name="password"
//                     onBlur={handleBlur}
//                     onChange={handleChange}
//                     endAdornment={
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle password visibility"
//                           onClick={handleClickShowPassword}
//                           onMouseDown={handleMouseDownPassword}
//                           edge="end"
//                           color="secondary"
//                         >
//                           {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
//                         </IconButton>
//                       </InputAdornment>
//                     }
//                     placeholder="Enter password"
//                   />
//                   {touched.password && errors.password && (
//                     <FormHelperText error id="standard-weight-helper-text-password-login">
//                       {errors.password}
//                     </FormHelperText>
//                   )}
//                 </Stack>
//               </Grid>

//               <Grid item xs={12} sx={{ mt: -1 }}>
//                 <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         checked={checked}
//                         onChange={(event) => setChecked(event.target.checked)}
//                         name="checked"
//                         color="primary"
//                         size="small"
//                       />
//                     }
//                     label={<Typography variant="h6">Keep me sign in</Typography>}
//                   />
//                   <Link variant="h6" component={RouterLink} to="/forgot-password" color="text.primary">
//                     Forgot Password?
//                   </Link>
//                 </Stack>
//               </Grid>
//               {errors.submit && (
//                 <Grid item xs={12}>
//                   <FormHelperText error>{errors.submit}</FormHelperText>
//                 </Grid>
//               )}
//               <Grid item xs={12}>
//                 <AnimateButton>
//                   <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
//                     Login
//                   </Button>
//                 </AnimateButton>
//               </Grid>
//             </Grid>
//           </form>
//         )}
//       </Formik>
//     </>
//   );
// };

// export default AuthLogin;