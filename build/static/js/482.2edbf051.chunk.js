"use strict";(self.webpackChunkmantis_material_react=self.webpackChunkmantis_material_react||[]).push([[482],{22889:function(e,r,n){var s=n(47313);r.Z=function(){var e=(0,s.useRef)(!0);return(0,s.useEffect)((function(){return function(){e.current=!1}}),[]),e}},65482:function(e,r,n){n.r(r),n.d(r,{default:function(){return B}});var s=n(9019),t=n(42832),i=n(61113),o=n(54796),a=n(74165),c=n(15861),l=n(29439),d=n(47313),u=n(58467),h=n(23306),m=n(49914),x=n(41727),f=n(15480),p=n(1550),Z=n(41806),w=n(24193),j=n(21933),v=n(35604),g=n(94044),b=n(51404),P=n(54285),y=n(22889),C=n(24378),k=n(18530),z=n(2419),E=n(31741),S=n(44874),R=n(46417),_=function(){var e=(0,y.Z)(),r=(0,u.s0)(),n=(0,P.Z)().isLoggedIn,o=(0,d.useState)(),_=(0,l.Z)(o,2),B=_[0],L=_[1],q=(0,d.useState)(!1),W=(0,l.Z)(q,2),A=W[0],I=W[1],M=function(){I(!A)},N=function(e){e.preventDefault()},T=function(e){var r=(0,z.X)(e);L((0,z.V)(r))};return(0,d.useEffect)((function(){T("")}),[]),(0,R.jsx)(v.J9,{initialValues:{password:"",confirmPassword:"",submit:null},validationSchema:j.Ry().shape({password:j.Z_().max(255).required("Password is required"),confirmPassword:j.Z_().required("Confirm Password is required").test("confirmPassword","Both Password must be match!",(function(e,r){return r.parent.password===e}))}),onSubmit:function(){var s=(0,c.Z)((0,a.Z)().mark((function s(t,i){var o,c,l;return(0,a.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:o=i.setErrors,c=i.setStatus,l=i.setSubmitting;try{e.current&&(c({success:!0}),l(!1),(0,C.WI)((0,k.ss)({open:!0,message:"Successfuly reset password.",variant:"alert",alert:{color:"success"},close:!1})),setTimeout((function(){r(n?"/auth/login":"/login",{replace:!0})}),1500))}catch(t){console.error(t),e.current&&(c({success:!1}),o({submit:t.message}),l(!1))}case 2:case"end":return s.stop()}}),s)})));return function(e,r){return s.apply(this,arguments)}}(),children:function(e){var r=e.errors,n=e.handleBlur,o=e.handleChange,a=e.handleSubmit,c=e.isSubmitting,l=e.touched,d=e.values;return(0,R.jsx)("form",{noValidate:!0,onSubmit:a,children:(0,R.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,R.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,R.jsxs)(t.Z,{spacing:1,children:[(0,R.jsx)(h.Z,{htmlFor:"password-reset",children:"Password"}),(0,R.jsx)(m.Z,{fullWidth:!0,error:Boolean(l.password&&r.password),id:"password-reset",type:A?"text":"password",value:d.password,name:"password",onBlur:n,onChange:function(e){o(e),T(e.target.value)},endAdornment:(0,R.jsx)(x.Z,{position:"end",children:(0,R.jsx)(g.Z,{"aria-label":"toggle password visibility",onClick:M,onMouseDown:N,edge:"end",color:"secondary",children:A?(0,R.jsx)(E.Z,{}):(0,R.jsx)(S.Z,{})})}),placeholder:"Enter password"}),l.password&&r.password&&(0,R.jsx)(f.Z,{error:!0,id:"helper-text-password-reset",children:r.password})]}),(0,R.jsx)(p.Z,{fullWidth:!0,sx:{mt:2},children:(0,R.jsxs)(s.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,R.jsx)(s.ZP,{item:!0,children:(0,R.jsx)(Z.Z,{sx:{bgcolor:null===B||void 0===B?void 0:B.color,width:85,height:8,borderRadius:"7px"}})}),(0,R.jsx)(s.ZP,{item:!0,children:(0,R.jsx)(i.Z,{variant:"subtitle1",fontSize:"0.75rem",children:null===B||void 0===B?void 0:B.label})})]})})]}),(0,R.jsx)(s.ZP,{item:!0,xs:12,children:(0,R.jsxs)(t.Z,{spacing:1,children:[(0,R.jsx)(h.Z,{htmlFor:"confirm-password-reset",children:"Confirm Password"}),(0,R.jsx)(m.Z,{fullWidth:!0,error:Boolean(l.confirmPassword&&r.confirmPassword),id:"confirm-password-reset",type:"password",value:d.confirmPassword,name:"confirmPassword",onBlur:n,onChange:o,placeholder:"Enter confirm password"}),l.confirmPassword&&r.confirmPassword&&(0,R.jsx)(f.Z,{error:!0,id:"helper-text-confirm-password-reset",children:r.confirmPassword})]})}),r.submit&&(0,R.jsx)(s.ZP,{item:!0,xs:12,children:(0,R.jsx)(f.Z,{error:!0,children:r.submit})}),(0,R.jsx)(s.ZP,{item:!0,xs:12,children:(0,R.jsx)(b.Z,{children:(0,R.jsx)(w.Z,{disableElevation:!0,disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Reset Password"})})})]})})}})},B=function(){return(0,R.jsx)(o.Z,{children:(0,R.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,R.jsx)(s.ZP,{item:!0,xs:12,children:(0,R.jsxs)(t.Z,{sx:{mb:{xs:-.5,sm:.5}},spacing:1,children:[(0,R.jsx)(i.Z,{variant:"h3",children:"Reset Password"}),(0,R.jsx)(i.Z,{color:"secondary",children:"Please choose your new password"})]})}),(0,R.jsx)(s.ZP,{item:!0,xs:12,children:(0,R.jsx)(_,{})})]})})}},54796:function(e,r,n){n.d(r,{Z:function(){return b}});var s=n(41806),t=n(9019),i=n(15300),o=n(47825),a=n(42832),c=n(61113),l=n(90891),d=n(46417),u=function(){var e=(0,i.Z)((function(e){return e.breakpoints.down("sm")}));return(0,d.jsx)(o.Z,{maxWidth:"xl",children:(0,d.jsxs)(a.Z,{direction:e?"column":"row",justifyContent:e?"center":"space-between",spacing:2,textAlign:e?"center":"inherit",children:[(0,d.jsxs)(c.Z,{variant:"subtitle2",color:"secondary",component:"span",children:["This site is protected by"," ",(0,d.jsx)(c.Z,{component:l.Z,variant:"subtitle2",href:"#mantis-privacy",target:"_blank",underline:"hover",children:"Privacy Policy"})]}),(0,d.jsxs)(a.Z,{direction:e?"column":"row",spacing:e?1:3,textAlign:e?"center":"inherit",children:[(0,d.jsx)(c.Z,{variant:"subtitle2",color:"secondary",component:l.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"Terms and Conditions"}),(0,d.jsx)(c.Z,{variant:"subtitle2",color:"secondary",component:l.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"Privacy Policy"}),(0,d.jsx)(c.Z,{variant:"subtitle2",color:"secondary",component:l.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"CA Privacy Notice"})]})]})})},h=n(79876),m=n(1413),x=n(45987),f=n(19860),p=n(41412),Z=["children"],w=function(e){var r=e.children,n=(0,x.Z)(e,Z),t=(0,f.Z)();return(0,d.jsx)(p.Z,(0,m.Z)((0,m.Z)({sx:{maxWidth:{xs:400,lg:700},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{border:!1,boxShadow:!0,shadow:t.customShadows.z1,children:(0,d.jsx)(s.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:r})}))},j=n(36287),v=n(52651),g=function(){(0,i.Z)("min-width:800px");var e=(0,f.Z)();return(0,d.jsx)(s.Z,{sx:{position:"absolute",filter:"blur(9px)",zIndex:-1,bottom:0,left:1e3,transform:e.direction===j.xk.RTL?"rotate(180deg)":"inherit"},children:(0,d.jsx)("img",{width:"100%",style:{marginLeft:"-50px"},height:"calc(100vh - 175px)",alt:"oneact-logo",src:v})})},b=function(e){var r=e.children;return(0,d.jsxs)(s.Z,{sx:{minHeight:"100vh"},children:[(0,d.jsx)(g,{}),(0,d.jsxs)(t.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,d.jsx)(t.ZP,{item:!0,xs:12,sx:{ml:3,mt:3},children:(0,d.jsx)(h.Z,{})}),(0,d.jsx)(t.ZP,{item:!0,xs:12,children:(0,d.jsx)(t.ZP,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 210px)",sm:"calc(100vh - 134px)",md:"calc(100vh - 112px)"}},children:(0,d.jsx)(t.ZP,{item:!0,children:(0,d.jsx)(w,{children:r})})})}),(0,d.jsx)(t.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,d.jsx)(u,{})})]})]})}},2419:function(e,r,n){n.d(r,{V:function(){return s},X:function(){return t}});var s=function(e){return e<2?{label:"Poor",color:"error.main"}:e<3?{label:"Weak",color:"warning.main"}:e<4?{label:"Normal",color:"warning.dark"}:e<5?{label:"Good",color:"success.main"}:e<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"}},t=function(e){var r=0;return e.length>5&&(r+=1),e.length>7&&(r+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(r+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(r+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(r+=1),r}},44874:function(e,r,n){n.d(r,{Z:function(){return c}});var s=n(1413),t=n(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},o=n(20262),a=function(e,r){return t.createElement(o.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:r,icon:i}))};a.displayName="EyeInvisibleOutlined";var c=t.forwardRef(a)},31741:function(e,r,n){n.d(r,{Z:function(){return c}});var s=n(1413),t=n(47313),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},o=n(20262),a=function(e,r){return t.createElement(o.Z,(0,s.Z)((0,s.Z)({},e),{},{ref:r,icon:i}))};a.displayName="EyeOutlined";var c=t.forwardRef(a)}}]);