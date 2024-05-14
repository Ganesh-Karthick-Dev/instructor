"use strict";(self.webpackChunkmantis_material_react=self.webpackChunkmantis_material_react||[]).push([[801],{2889:function(e,n,r){var t=r(7313);n.Z=function(){var e=(0,t.useRef)(!0);return(0,t.useEffect)((function(){return function(){e.current=!1}}),[]),e}},6801:function(e,n,r){r.r(n),r.d(n,{default:function(){return W}});var t=r(2135),i=r(9019),s=r(2832),c=r(1113),o=r(4285),a=r(4796),l=r(1413),d=r(4165),x=r(5861),h=r(9439),m=r(7313),u=r(3306),Z=r(9914),p=r(5480),j=r(1727),f=r(3929),g=r(4758),v=r(891),b=r(4193),w=r(7397),y=r(5627),P=r(13),k=r(2889),C=r(4044),A=r(1404),S=r(1741),_=r(4874),I=r(6417),L=w.object({email:w.string().email({tlds:{allow:!1}}).max(255).required(),password:w.string().max(255).required()}),E=function(){var e=(0,m.useState)(!1),n=(0,h.Z)(e,2),r=n[0],a=n[1],w=(0,m.useState)(!1),E=(0,h.Z)(w,2),W=E[0],z=E[1],D=(0,o.Z)().login,q=(0,k.Z)(),B=(0,y.cI)({defaultValues:{email:"sakthiveltofficial@gmail.com",password:"7yj4pyayq2"}}),F=B.register,H=B.handleSubmit,T=B.formState,R=T.errors,U=T.isSubmitting,G=function(){var e=(0,x.Z)((0,d.Z)().mark((function e(n){return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.validateAsync(n);case 3:return e.next=5,D(n.email,n.password);case 5:q.current&&P.Am.success("Login successful"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),q.current&&P.Am.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();return(0,I.jsx)("form",{onSubmit:H(G),children:(0,I.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,I.jsx)(P.x7,{}),(0,I.jsx)(i.ZP,{item:!0,xs:12,children:(0,I.jsxs)(s.Z,{spacing:1,children:[(0,I.jsx)(u.Z,{htmlFor:"email-login",children:"Email Address"}),(0,I.jsx)(Z.Z,(0,l.Z)((0,l.Z)({id:"email-login",type:"email"},F("email")),{},{placeholder:"Enter email address",fullWidth:!0,error:Boolean(R.email)})),R.email&&(0,I.jsx)(p.Z,{error:!0,children:R.email.message})]})}),(0,I.jsx)(i.ZP,{item:!0,xs:12,children:(0,I.jsxs)(s.Z,{spacing:1,children:[(0,I.jsx)(u.Z,{htmlFor:"password-login",children:"Password"}),(0,I.jsx)(Z.Z,(0,l.Z)((0,l.Z)({fullWidth:!0,error:Boolean(R.password),id:"password-login",type:W?"text":"password"},F("password")),{},{endAdornment:(0,I.jsx)(j.Z,{position:"end",children:(0,I.jsx)(C.Z,{"aria-label":"toggle password visibility",onClick:function(){z(!W)},onMouseDown:function(e){e.preventDefault()},edge:"end",color:"secondary",children:W?(0,I.jsx)(S.Z,{}):(0,I.jsx)(_.Z,{})})}),placeholder:"Enter password"})),R.password&&(0,I.jsx)(p.Z,{error:!0,children:R.password.message})]})}),(0,I.jsx)(i.ZP,{item:!0,xs:12,sx:{mt:-1},children:(0,I.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,I.jsx)(f.Z,{control:(0,I.jsx)(g.Z,{checked:r,onChange:function(e){return a(e.target.checked)},name:"checked",color:"primary",size:"small"}),label:(0,I.jsx)(c.Z,{variant:"h6",children:"Keep me sign in"})}),(0,I.jsx)(v.Z,{variant:"h6",component:t.rU,to:"/forgot-password",color:"text.primary",children:"Forgot Password?"})]})}),(0,I.jsx)(i.ZP,{item:!0,xs:12,children:(0,I.jsx)(A.Z,{children:(0,I.jsx)(b.Z,{disableElevation:!0,disabled:U,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Login"})})})]})})},W=function(){var e=(0,o.Z)().isLoggedIn;return(0,I.jsx)(a.Z,{children:(0,I.jsxs)(i.ZP,{container:!0,spacing:3,children:[(0,I.jsx)(i.ZP,{item:!0,xs:12,children:(0,I.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[(0,I.jsx)(c.Z,{variant:"h3",children:"Login"}),(0,I.jsx)(c.Z,{component:t.rU,to:e?"/auth/register":"/register",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Don't have an account?"})]})}),(0,I.jsx)(i.ZP,{item:!0,xs:12,children:(0,I.jsx)(E,{})})]})})}},4796:function(e,n,r){r.d(n,{Z:function(){return w}});var t=r(1806),i=r(9019),s=r(5300),c=r(7825),o=r(2832),a=r(1113),l=r(891),d=r(6417),x=function(){var e=(0,s.Z)((function(e){return e.breakpoints.down("sm")}));return(0,d.jsx)(c.Z,{maxWidth:"xl",children:(0,d.jsxs)(o.Z,{direction:e?"column":"row",justifyContent:e?"center":"space-between",spacing:2,textAlign:e?"center":"inherit",children:[(0,d.jsxs)(a.Z,{variant:"subtitle2",color:"secondary",component:"span",children:["This site is protected by"," ",(0,d.jsx)(a.Z,{component:l.Z,variant:"subtitle2",href:"#mantis-privacy",target:"_blank",underline:"hover",children:"Privacy Policy"})]}),(0,d.jsxs)(o.Z,{direction:e?"column":"row",spacing:e?1:3,textAlign:e?"center":"inherit",children:[(0,d.jsx)(a.Z,{variant:"subtitle2",color:"secondary",component:l.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"Terms and Conditions"}),(0,d.jsx)(a.Z,{variant:"subtitle2",color:"secondary",component:l.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"Privacy Policy"}),(0,d.jsx)(a.Z,{variant:"subtitle2",color:"secondary",component:l.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"CA Privacy Notice"})]})]})})},h=r(9876),m=r(1413),u=r(5987),Z=r(9860),p=r(1412),j=["children"],f=function(e){var n=e.children,r=(0,u.Z)(e,j),i=(0,Z.Z)();return(0,d.jsx)(p.Z,(0,m.Z)((0,m.Z)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},r),{},{border:!1,boxShadow:!0,shadow:i.customShadows.z1,children:(0,d.jsx)(t.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:n})}))},g=r(6287),v=r(2651),b=function(){var e=(0,Z.Z)();return(0,d.jsx)(t.Z,{sx:{position:"absolute",filter:"blur(9px)",zIndex:-1,bottom:0,left:0,transform:e.direction===g.xk.RTL?"rotate(180deg)":"inherit"},children:(0,d.jsx)("img",{width:"55%",style:{marginLeft:"-50px"},height:"calc(100vh - 175px)",src:v})})},w=function(e){var n=e.children;return(0,d.jsxs)(t.Z,{sx:{minHeight:"100vh"},children:[(0,d.jsx)(b,{}),(0,d.jsxs)(i.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,d.jsx)(i.ZP,{item:!0,xs:12,sx:{ml:3,mt:3},children:(0,d.jsx)(h.Z,{})}),(0,d.jsx)(i.ZP,{item:!0,xs:12,children:(0,d.jsx)(i.ZP,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 210px)",sm:"calc(100vh - 134px)",md:"calc(100vh - 112px)"}},children:(0,d.jsx)(i.ZP,{item:!0,children:(0,d.jsx)(f,{children:n})})})}),(0,d.jsx)(i.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,d.jsx)(x,{})})]})]})}}}]);