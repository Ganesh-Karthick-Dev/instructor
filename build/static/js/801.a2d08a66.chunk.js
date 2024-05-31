"use strict";(self.webpackChunkmantis_material_react=self.webpackChunkmantis_material_react||[]).push([[801],{22889:function(e,n,r){var t=r(47313);n.Z=function(){var e=(0,t.useRef)(!0);return(0,t.useEffect)((function(){return function(){e.current=!1}}),[]),e}},96801:function(e,n,r){r.r(n),r.d(n,{default:function(){return W}});var t=r(2135),i=r(9019),s=r(42832),o=r(61113),c=r(54285),a=r(54796),l=r(1413),d=r(74165),x=r(15861),h=r(29439),m=r(47313),u=r(23306),Z=r(49914),p=r(15480),j=r(41727),g=r(83929),f=r(46330),v=r(90891),b=r(24193),w=r(47397),y=r(75627),P=r(20013),k=r(22889),C=r(94044),A=r(51404),S=r(31741),_=r(44874),z=r(58467),I=r(46417),L=w.object({email:w.string().email({tlds:{allow:!1}}).max(255).required(),password:w.string().max(255).required()}),E=function(){var e=(0,z.s0)(),n=(0,m.useState)(!1),r=(0,h.Z)(n,2),a=r[0],w=r[1],E=(0,m.useState)(!1),W=(0,h.Z)(E,2),D=W[0],q=W[1],B=(0,c.Z)().login,F=(0,k.Z)(),H=(0,y.cI)({defaultValues:{email:"5t6kyezfa6@tidissajiiu.com",password:"3zranksotq"}}),T=H.register,R=H.handleSubmit,U=H.formState,G=U.errors,K=U.isSubmitting,M=function(){var n=(0,x.Z)((0,d.Z)().mark((function n(r){return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,L.validateAsync(r);case 3:return n.next=5,B(r.email,r.password);case 5:F.current&&P.Am.success("Login successful"),e("/walkthrough"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),F.current&&P.Am.error(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();return(0,I.jsx)("form",{onSubmit:R(M),children:(0,I.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,I.jsx)(P.x7,{}),(0,I.jsx)(i.ZP,{item:!0,xs:12,children:(0,I.jsxs)(s.Z,{spacing:1,children:[(0,I.jsx)(u.Z,{htmlFor:"email-login",children:"Email Address"}),(0,I.jsx)(Z.Z,(0,l.Z)((0,l.Z)({id:"email-login",type:"email"},T("email")),{},{placeholder:"Enter email address",fullWidth:!0,error:Boolean(G.email)})),G.email&&(0,I.jsx)(p.Z,{error:!0,children:G.email.message})]})}),(0,I.jsx)(i.ZP,{item:!0,xs:12,children:(0,I.jsxs)(s.Z,{spacing:1,children:[(0,I.jsx)(u.Z,{htmlFor:"password-login",children:"Password"}),(0,I.jsx)(Z.Z,(0,l.Z)((0,l.Z)({fullWidth:!0,error:Boolean(G.password),id:"password-login",type:D?"text":"password"},T("password")),{},{endAdornment:(0,I.jsx)(j.Z,{position:"end",children:(0,I.jsx)(C.Z,{"aria-label":"toggle password visibility",onClick:function(){q(!D)},onMouseDown:function(e){e.preventDefault()},edge:"end",color:"secondary",children:D?(0,I.jsx)(S.Z,{}):(0,I.jsx)(_.Z,{})})}),placeholder:"Enter password"})),G.password&&(0,I.jsx)(p.Z,{error:!0,children:G.password.message})]})}),(0,I.jsx)(i.ZP,{item:!0,xs:12,sx:{mt:-1},children:(0,I.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,I.jsx)(g.Z,{control:(0,I.jsx)(f.Z,{checked:a,onChange:function(e){return w(e.target.checked)},name:"checked",color:"primary",size:"small"}),label:(0,I.jsx)(o.Z,{variant:"h6",children:"Keep me sign in"})}),(0,I.jsx)(v.Z,{variant:"h6",component:t.rU,to:"/forgot-password",color:"text.primary",children:"Forgot Password?"})]})}),(0,I.jsx)(i.ZP,{item:!0,xs:12,children:(0,I.jsx)(A.Z,{children:(0,I.jsx)(b.Z,{disableElevation:!0,sx:{bgcolor:"primary.custom1"},disabled:K,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Login"})})})]})})},W=function(){var e=(0,c.Z)().isLoggedIn;return(0,I.jsx)(a.Z,{children:(0,I.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,I.jsx)(i.ZP,{item:!0,xs:12,children:(0,I.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[(0,I.jsx)(o.Z,{variant:"h3",children:"Login"}),(0,I.jsx)(o.Z,{component:t.rU,to:e?"/auth/register":"/register",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Don't have an account?"})]})}),(0,I.jsx)(i.ZP,{item:!0,xs:12,children:(0,I.jsx)(E,{})})]})})}},54796:function(e,n,r){r.d(n,{Z:function(){return w}});var t=r(41806),i=r(9019),s=r(15300),o=r(47825),c=r(42832),a=r(61113),l=r(90891),d=r(46417),x=function(){var e=(0,s.Z)((function(e){return e.breakpoints.down("sm")}));return(0,d.jsx)(o.Z,{maxWidth:"xl",children:(0,d.jsxs)(c.Z,{direction:e?"column":"row",justifyContent:e?"center":"space-between",spacing:2,textAlign:e?"center":"inherit",children:[(0,d.jsxs)(a.Z,{variant:"subtitle2",color:"secondary",component:"span",children:["This site is protected by"," ",(0,d.jsx)(a.Z,{component:l.Z,variant:"subtitle2",href:"#mantis-privacy",target:"_blank",underline:"hover",children:"Privacy Policy"})]}),(0,d.jsxs)(c.Z,{direction:e?"column":"row",spacing:e?1:3,textAlign:e?"center":"inherit",children:[(0,d.jsx)(a.Z,{variant:"subtitle2",color:"secondary",component:l.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"Terms and Conditions"}),(0,d.jsx)(a.Z,{variant:"subtitle2",color:"secondary",component:l.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"Privacy Policy"}),(0,d.jsx)(a.Z,{variant:"subtitle2",color:"secondary",component:l.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"CA Privacy Notice"})]})]})})},h=r(79876),m=r(1413),u=r(45987),Z=r(19860),p=r(75729),j=["children"],g=function(e){var n=e.children,r=(0,u.Z)(e,j),i=(0,Z.Z)();return(0,d.jsx)(p.Z,(0,m.Z)((0,m.Z)({sx:{maxWidth:{xs:400,lg:700},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},r),{},{border:!1,boxShadow:!0,shadow:i.customShadows.z1,children:(0,d.jsx)(t.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:n})}))},f=r(36287),v=r(52651),b=function(){(0,s.Z)("min-width:800px");var e=(0,Z.Z)();return(0,d.jsx)(t.Z,{sx:{position:"absolute",filter:"blur(12px)",zIndex:-1,bottom:0,left:27,transform:e.direction===f.xk.RTL?"rotate(180deg)":"inherit"},children:(0,d.jsx)("img",{width:"70%",style:{marginLeft:"-100px"},height:"calc(100vh -175px)",alt:"oneact-logo",src:v})})},w=function(e){var n=e.children;return(0,d.jsxs)(t.Z,{sx:{minHeight:"100vh"},children:[(0,d.jsx)(b,{}),(0,d.jsxs)(i.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,d.jsx)(i.ZP,{item:!0,xs:12,sx:{ml:3,mt:3},children:(0,d.jsx)(h.Z,{})}),(0,d.jsx)(i.ZP,{item:!0,xs:12,children:(0,d.jsx)(i.ZP,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 210px)",sm:"calc(100vh - 134px)",md:"calc(100vh - 112px)"}},children:(0,d.jsx)(i.ZP,{item:!0,children:(0,d.jsx)(g,{children:n})})})}),(0,d.jsx)(i.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,d.jsx)(x,{})})]})]})}}}]);