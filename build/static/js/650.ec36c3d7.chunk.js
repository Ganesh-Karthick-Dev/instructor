"use strict";(self.webpackChunkmantis_material_react=self.webpackChunkmantis_material_react||[]).push([[650],{22889:function(e,n,t){var i=t(47313);n.Z=function(){var e=(0,i.useRef)(!0);return(0,i.useEffect)((function(){return function(){e.current=!1}}),[]),e}},98069:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var i=t(2135),r=t(9019),s=t(42832),o=t(61113),l=t(54285),a=t(54796),c=t(74165),d=t(15861),u=t(4942),h=t(1413),x=t(29439),m=t(47313),p=t(58467),g=t(23306),Z=t(49914),f=t(24631),j=t(16529),v=t(51405),b=t(15480),y=t(41806),w=t(62823),P=t(46330),C=t(83213),S=t(51629),z=t(70501),k=t(66835),A=t(23477),q=t(24076),B=t(67478),E=t(57861),I=t(90891),N=t(24193),W=(t(94044),t(51404)),D=(t(22889),t(2419)),_=t(10658),F=t.n(_),M=t(45904),R=t(23208),T=t(43342),L=t(20013),H=t(47397),O=t.n(H),U=t(34486),G=(t(99245),t(56573)),Y=t(37823),V=t(64392),X=t(46417),J=function(){var e="https://phpstack-977481-4409636.cloudwaysapps.com/api/v1",n=(0,m.useState)(F()("2000-08-18")),t=(0,x.Z)(n,2),l=t[0],a=t[1],_=(0,p.s0)(),H=(0,m.useState)(),J=(0,x.Z)(H,2),$=(J[0],J[1]),K=(0,m.useState)(!1),Q=(0,x.Z)(K,2),ee=(Q[0],Q[1],(0,m.useState)({firstname:"",lastname:"",email:"",mobile:"",dob:l,gender:"Male",address:"",city:"",state:"",country:"",zipcode:null,servicelocation:"",zones:[],profileimage:"https://webnox.blr1.digitaloceanspaces.com/driving_school/user.png",courseshandled:[],documents:[{doctypeid:1,doc:"https://webnox.blr1.digitaloceanspaces.com/driving_school/double%20quotes%20to%20single%20quotes.PNG"}],status:"Active",roleid:3,configid:1,authmode:1})),ne=(0,x.Z)(ee,2),te=ne[0],ie=ne[1],re=(0,m.useState)({}),se=(0,x.Z)(re,2),oe=se[0];se[1];console.log("register form values",te);var le=(0,m.useState)([]),ae=(0,x.Z)(le,2),ce=ae[0],de=ae[1];(0,m.useEffect)((function(){ue()}),[]);var ue=function(){try{G.Z.post("".concat(e,"/getAllBranches")).then((function(e){var n;console.log("doc",e);var t=null===(n=e.data.response)||void 0===n?void 0:n.map((function(e){return{id:e.applocationid,label:e.locationname}}));de(t)}))}catch(n){console.log(n)}},he=(0,m.useState)([]),xe=(0,x.Z)(he,2),me=xe[0],pe=xe[1],ge=function(n){try{G.Z.post("".concat(e,"/getzonesbyBranchId"),{branchId:Number(n)}).then((function(e){var n;console.log("doc",e);var t=null===(n=e.data.response)||void 0===n?void 0:n.map((function(e){return{id:e.applocationconfigid,label:e.zonename}}));pe(t)}))}catch(t){console.log(t)}},Ze=(0,m.useState)([]),fe=(0,x.Z)(Ze,2),je=fe[0],ve=fe[1],be=(0,m.useState)([]),ye=(0,x.Z)(be,2),we=ye[0],Pe=ye[1];console.log("formvalues",te),console.log("courses",we),(0,m.useEffect)((function(){Ce()}),[]);var Ce=function(){try{G.Z.post("".concat(e,"/getAllCourse")).then((function(e){var n,t=null===(n=e.data.response)||void 0===n?void 0:n.map((function(e){return{id:e.applocationid,label:e.productname}}));ve(t)}))}catch(n){console.log(n)}},Se=function(e){var n=e.target,t=n.name,i=n.value;ie((0,h.Z)((0,h.Z)({},te),{},(0,u.Z)({},t,i)))},ze=O().object({firstname:O().string().max(255).required().label("First Name"),lastname:O().string().max(255).required().label("Last Name"),email:O().string().email({tlds:{allow:!1}}).max(255).required().label("Email"),mobile:O().number().required().label("Mobile"),dob:O().required().label("Date of Birth"),gender:O().string().required().label("Gender"),address:O().string().required().label("Address"),city:O().string().required().label("City"),state:O().string().required().label("State"),country:O().string().required().label("Country"),zipcode:O().number().required().label("Postal Code"),servicelocation:O().number().required().label("Service Location"),zones:O().array().items(O().number()).required().label("Zones"),courseshandled:O().array().items(O().number()).required().label("Courses"),status:O().string().required().label("Status"),profileimage:O().string().required().label("profileimage"),documents:O().optional(),roleid:O().optional(),configid:O().optional(),authmode:O().optional()}),ke=function(){var n=(0,d.Z)((0,c.Z)().mark((function n(t){var i,r,s;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),i=ze.validate(te,{abortEarly:!0}),!(r=i.error)){n.next=5;break}return console.log(r),n.abrupt("return",L.ZP.error(r.details[0].message));case 5:return n.prev=5,n.next=8,G.Z.post("".concat(e,"/addInstructor"),{firstname:te.firstname,lastname:te.lastname,dob:te.dob,phone:te.mobile,email:te.email,gender:te.gender,address:te.address,country:te.country,state:te.state,city:te.city,zipcode:Number(te.zipcode),servicelocation:Number(te.servicelocation),zones:te.zones,profileimage:"https://www.biowritingservice.com/wp-content/themes/tuborg/images/Executive%20Bio%20Sample%20Photo.png",courseshandled:[1,2],documents:[{doctypeid:1,doc:"https://www.biowritingservice.com/wp-content/themes/tuborg/images/Executive%20Bio%20Sample%20Photo.png"}],status:"Active",roleid:3,configid:1,authmode:1});case 8:if(s=n.sent,console.log("res[onse]",s),!1!==s.data.status){n.next=12;break}return n.abrupt("return",L.ZP.error(s.data.message));case 12:L.ZP.success("Register success"),setTimeout((function(){_("/login")}),2e3),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(5),L.ZP.error(n.t0.message);case 19:case"end":return n.stop()}}),n,null,[[5,16]])})));return function(e){return n.apply(this,arguments)}}();(0,m.useEffect)((function(){!function(e){var n=(0,D.X)(e);$((0,D.V)(n))}("")}),[]);var Ae=(0,m.useState)([]),qe=(0,x.Z)(Ae,2),Be=qe[0],Ee=qe[1];(0,m.useEffect)((function(){Ie()}),[]);var Ie=function(){try{G.Z.post("".concat(e,"/getDocs"),{docfor:2,status:1}).then((function(e){Ee(e.data.data)}))}catch(n){console.log(n)}},Ne=(0,m.useRef)(null),We=function(){L.ZP.current.show({severity:"info",summary:"Success",detail:"File Uploaded"})};return(0,X.jsx)(X.Fragment,{children:(0,X.jsx)("form",{noValidate:!0,onSubmit:ke,children:(0,X.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,X.jsx)(L.x7,{}),(0,X.jsxs)(r.ZP,{item:!0,xs:12,md:6,children:[" ",(0,X.jsxs)(s.Z,{spacing:1,children:[(0,X.jsx)(g.Z,{children:"First Name"}),(0,X.jsx)(Z.Z,{type:"text",value:te.firstname,name:"firstname",onChange:Se,placeholder:"John",fullWidth:!0,error:Boolean(oe.firstname)})]})]}),(0,X.jsxs)(r.ZP,{item:!0,xs:12,md:6,children:[" ",(0,X.jsxs)(s.Z,{spacing:1,children:[(0,X.jsx)(g.Z,{children:"Last Name"}),(0,X.jsx)(Z.Z,{fullWidth:!0,error:Boolean(oe.lastname),type:"text",value:te.lastname,name:"lastname",onChange:Se,placeholder:"Doe"})]})]}),(0,X.jsxs)(r.ZP,{item:!0,xs:12,md:6,children:[" ",(0,X.jsxs)(s.Z,{spacing:1,children:[(0,X.jsx)(g.Z,{htmlFor:"dob-signup",children:"Date of Birth"}),(0,X.jsx)(R._,{dateAdapter:M.y,children:(0,X.jsx)(T.M,{value:l,onChange:function(e){a(e),console.log("Selected Date:",e.format("YYYY-MM-DD"))},renderInput:function(e){return(0,X.jsx)(f.Z,(0,h.Z)({},e))}})})]})]}),(0,X.jsxs)(r.ZP,{item:!0,xs:12,md:6,children:[" ",(0,X.jsxs)(s.Z,{spacing:1,children:[(0,X.jsx)(g.Z,{children:"Gender"}),(0,X.jsxs)(j.Z,{labelId:"demo-simple-select-label",value:te.gender,name:"gender",onChange:function(e){ie((0,h.Z)((0,h.Z)({},te),{},{gender:e.target.value}))},fullWidth:!0,children:[(0,X.jsx)(v.Z,{value:"Male",children:"Male"}),(0,X.jsx)(v.Z,{value:"Female",children:"Female"}),(0,X.jsx)(v.Z,{value:"Trans",children:"Trans"})]})]})]}),(0,X.jsxs)(r.ZP,{item:!0,xs:12,lg:6,children:[" ",(0,X.jsxs)(s.Z,{spacing:1,children:[(0,X.jsx)(g.Z,{children:"Email Address"}),(0,X.jsx)(Z.Z,{fullWidth:!0,error:Boolean(oe.email),type:"email",value:te.email,name:"email",onChange:Se,placeholder:"demo@company.com"}),oe.email&&(0,X.jsx)(b.Z,{error:!0,id:"helper-text-email-signup",children:oe.email})]})]}),(0,X.jsxs)(r.ZP,{item:!0,xs:12,lg:6,sx:{width:"100%"},children:[" ",(0,X.jsxs)(s.Z,{spacing:1,sx:{width:"100%"},children:[(0,X.jsx)(g.Z,{children:"Mobile No"}),(0,X.jsx)(y.Z,{sx:{width:"100%","& .react-international-phone":{width:"100%",height:"50px"},"& .react-international-phone-country-selector & button":{height:"42px"},"& .react-international-phone-input":{width:"100%",height:"50px"}},children:(0,X.jsx)(U.sb,{defaultCountry:"ua",value:te.mobile,onChange:function(e){ie((0,h.Z)((0,h.Z)({},te),{},{mobile:e}))},placeholder:"Mobile Number"})})]})]}),(0,X.jsxs)(r.ZP,{item:!0,xs:12,children:[" ",(0,X.jsxs)(s.Z,{spacing:1,children:[(0,X.jsx)(g.Z,{children:"Address"}),(0,X.jsx)(Z.Z,{fullWidth:!0,multiline:!0,error:Boolean(oe.email),type:"email",value:te.address,name:"address",onChange:Se,placeholder:""}),oe.email&&(0,X.jsx)(b.Z,{error:!0,id:"helper-text-email-signup",children:oe.email})]})]}),(0,X.jsxs)(r.ZP,{item:!0,xs:12,lg:6,children:[" ",(0,X.jsxs)(s.Z,{spacing:1,children:[(0,X.jsx)(g.Z,{children:"city"}),(0,X.jsx)(Z.Z,{fullWidth:!0,error:Boolean(oe.city),type:"email",value:te.city,name:"city",onChange:Se,placeholder:""})]})]}),(0,X.jsxs)(r.ZP,{item:!0,xs:12,lg:6,children:[" ",(0,X.jsxs)(s.Z,{spacing:1,children:[(0,X.jsx)(g.Z,{children:"state"}),(0,X.jsx)(Z.Z,{fullWidth:!0,error:Boolean(oe.state),type:"state",value:te.state,name:"state",onChange:Se,placeholder:""})]})]}),(0,X.jsxs)(r.ZP,{item:!0,xs:12,lg:6,children:[" ",(0,X.jsxs)(s.Z,{spacing:1,children:[(0,X.jsx)(g.Z,{children:"country"}),(0,X.jsx)(Z.Z,{fullWidth:!0,error:Boolean(oe.country),type:"country",value:te.country,name:"country",onChange:Se,placeholder:""})]})]}),(0,X.jsxs)(r.ZP,{item:!0,xs:12,lg:6,children:[" ",(0,X.jsxs)(s.Z,{spacing:1,children:[(0,X.jsx)(g.Z,{children:"zip code"}),(0,X.jsx)(Z.Z,{fullWidth:!0,error:Boolean(oe.zipcode),type:"country",value:te.zipcode,name:"zipcode",onChange:Se,placeholder:""})]})]}),(0,X.jsxs)(r.ZP,{item:!0,xs:12,lg:6,children:[" ",(0,X.jsxs)(s.Z,{spacing:1,children:[(0,X.jsx)(g.Z,{children:"service location"}),(0,X.jsx)(w.Z,{id:"brand",options:ce||[],value:(null===ce||void 0===ce?void 0:ce.find((function(e){return(null===e||void 0===e?void 0:e.id)==(null===te||void 0===te?void 0:te.servicelocation)})))||null,onChange:function(e,n){if(n){console.log("val",n),ge(n.id);var t=(0,h.Z)({},te);t.servicelocation=n.id,ie(t)}},renderInput:function(e){return(0,X.jsx)(f.Z,(0,h.Z)((0,h.Z)({},e),{},{placeholder:"select  service location"}))},autoHighlight:!0})]})]}),(0,X.jsxs)(r.ZP,{item:!0,xs:12,lg:6,children:[" ",(0,X.jsxs)(s.Z,{spacing:1,children:[(0,X.jsx)(g.Z,{children:"zone"}),(0,X.jsx)(w.Z,{color:"primary",multiple:!0,id:"model",options:me||[],value:(null===me||void 0===me?void 0:me.filter((function(e){return null===te||void 0===te?void 0:te.zones.includes(null===e||void 0===e?void 0:e.id)})))||[],onChange:function(e,n){if(n){console.log("zone val",n);var t=(0,h.Z)({},te);t.zones=n.map((function(e){return e.id})),ie(t)}},renderInput:function(e){return(0,X.jsx)(f.Z,(0,h.Z)((0,h.Z)({},e),{},{placeholder:"select zones"}))},autoHighlight:!0})]})]}),(0,X.jsxs)(r.ZP,{item:!0,xs:12,lg:6,children:[" ",(0,X.jsxs)(s.Z,{spacing:1,children:[(0,X.jsx)(g.Z,{children:"courses"}),(0,X.jsx)(w.Z,{multiple:!0,id:"model",options:je||[],value:we,getOptionLabel:function(e){return e.label},onChange:function(e,n){Pe(n),console.log("selected courses final",n);var t=(0,h.Z)((0,h.Z)({},te),{},{courseshandled:n.flatMap((function(e){return e.id}))});ie(t)},renderOption:function(e,n,t){var i=t.selected;return(0,X.jsxs)("li",(0,h.Z)((0,h.Z)({},e),{},{children:[(0,X.jsx)(P.Z,{checked:i,style:{marginRight:8}}),(0,X.jsx)(C.Z,{primary:n.label})]}))},renderInput:function(e){return(0,X.jsx)(f.Z,(0,h.Z)((0,h.Z)({},e),{},{placeholder:"select courses"}))},autoHighlight:!0})]})]}),(0,X.jsxs)(r.ZP,{item:!0,xs:12,lg:6,children:[" ",(0,X.jsxs)(s.Z,{spacing:1,children:[(0,X.jsx)(g.Z,{children:"status"}),(0,X.jsxs)(j.Z,{value:te.status,label:"Age",onChange:function(e){console.log("status value",e),ie((0,h.Z)((0,h.Z)({},te),{},{status:e.target.value}))},children:[(0,X.jsx)(v.Z,{value:"Active",children:"Active"}),(0,X.jsx)(v.Z,{value:"In Active",children:"In Active"})]})]})]}),(0,X.jsxs)(r.ZP,{item:!0,xs:12,lg:6,children:[" ",(0,X.jsxs)(s.Z,{spacing:1,children:[(0,X.jsx)(g.Z,{children:"Profile image"}),(0,X.jsx)(Y.F,{style:{background:"grey"},ref:Ne}),(0,X.jsx)(V.p,{style:{width:"fit-content",background:"#093467",color:"white",padding:"10px",borderRadius:"5px"},mode:"basic",name:"demo[]",url:"/api/upload",accept:"image/*",maxFileSize:1e6,onUpload:We})]})]}),(0,X.jsxs)(S.Z,{sx:{marginTop:"20px",overflowX:"hidden"},component:z.Z,children:[" ",(0,X.jsxs)(k.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,X.jsx)(A.Z,{children:(0,X.jsxs)(q.Z,{children:[(0,X.jsx)(B.Z,{align:"center",children:"SNO"}),(0,X.jsx)(B.Z,{align:"center",children:"DOC ID"}),(0,X.jsx)(B.Z,{align:"center",children:"DOC NAME"}),(0,X.jsx)(B.Z,{align:"left",children:"ACTION"})]})}),(0,X.jsx)(E.Z,{children:null===Be||void 0===Be?void 0:Be.map((function(e,n){return(0,X.jsxs)(q.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,X.jsx)(B.Z,{align:"center",children:"".concat(n+1)}),(0,X.jsx)(B.Z,{align:"center",children:e.apptypeid}),(0,X.jsx)(B.Z,{align:"center",children:e.typename}),(0,X.jsxs)(B.Z,{align:"center",children:[(0,X.jsx)(Y.F,{style:{background:"grey"},ref:Ne}),(0,X.jsx)(V.p,{style:{width:"fit-content",background:"#093467",color:"white",padding:"10px",borderRadius:"5px"},mode:"basic",name:"demo[]",url:"/api/upload",accept:"image/*",maxFileSize:1e6,onUpload:We})]})]},e.index)}))})]})]}),(0,X.jsx)(r.ZP,{item:!0,xs:12,children:(0,X.jsxs)(o.Z,{variant:"body2",children:["By Signing up, you agree to our \xa0",(0,X.jsx)(I.Z,{variant:"subtitle2",component:i.rU,to:"#",children:"Terms of Service"}),"\xa0 and \xa0",(0,X.jsx)(I.Z,{variant:"subtitle2",component:i.rU,to:"#",children:"Privacy Policy"})]})}),(0,X.jsx)(r.ZP,{item:!0,xs:12,children:(0,X.jsx)(W.Z,{children:(0,X.jsx)(N.Z,{disableElevation:!0,sx:{bgcolor:"primary.custom1"},fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Create Account"})})})]})})})},$=function(){var e=(0,l.Z)().isLoggedIn;return(0,X.jsx)(a.Z,{children:(0,X.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,X.jsx)(r.ZP,{item:!0,xs:12,children:(0,X.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[(0,X.jsx)(o.Z,{variant:"h3",children:"Sign up"}),(0,X.jsx)(o.Z,{component:i.rU,to:e?"/auth/login":"/login",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Already have an account?"})]})}),(0,X.jsx)(r.ZP,{item:!0,xs:12,children:(0,X.jsx)(J,{})})]})})}},54796:function(e,n,t){t.d(n,{Z:function(){return y}});var i=t(41806),r=t(9019),s=t(15300),o=t(47825),l=t(42832),a=t(61113),c=t(90891),d=t(46417),u=function(){var e=(0,s.Z)((function(e){return e.breakpoints.down("sm")}));return(0,d.jsx)(o.Z,{maxWidth:"xl",children:(0,d.jsxs)(l.Z,{direction:e?"column":"row",justifyContent:e?"center":"space-between",spacing:2,textAlign:e?"center":"inherit",children:[(0,d.jsxs)(a.Z,{variant:"subtitle2",color:"secondary",component:"span",children:["This site is protected by"," ",(0,d.jsx)(a.Z,{component:c.Z,variant:"subtitle2",href:"#mantis-privacy",target:"_blank",underline:"hover",children:"Privacy Policy"})]}),(0,d.jsxs)(l.Z,{direction:e?"column":"row",spacing:e?1:3,textAlign:e?"center":"inherit",children:[(0,d.jsx)(a.Z,{variant:"subtitle2",color:"secondary",component:c.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"Terms and Conditions"}),(0,d.jsx)(a.Z,{variant:"subtitle2",color:"secondary",component:c.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"Privacy Policy"}),(0,d.jsx)(a.Z,{variant:"subtitle2",color:"secondary",component:c.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"CA Privacy Notice"})]})]})})},h=t(79876),x=t(1413),m=t(45987),p=t(19860),g=t(75729),Z=["children"],f=function(e){var n=e.children,t=(0,m.Z)(e,Z),r=(0,p.Z)();return(0,d.jsx)(g.Z,(0,x.Z)((0,x.Z)({sx:{maxWidth:{xs:400,lg:700},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},t),{},{border:!1,boxShadow:!0,shadow:r.customShadows.z1,children:(0,d.jsx)(i.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:n})}))},j=t(36287),v=t(52651),b=function(){(0,s.Z)("min-width:800px");var e=(0,p.Z)();return(0,d.jsx)(i.Z,{sx:{position:"absolute",filter:"blur(12px)",zIndex:-1,bottom:0,left:27,transform:e.direction===j.xk.RTL?"rotate(180deg)":"inherit"},children:(0,d.jsx)("img",{width:"70%",style:{marginLeft:"-100px"},height:"calc(100vh -175px)",alt:"oneact-logo",src:v})})},y=function(e){var n=e.children;return(0,d.jsxs)(i.Z,{sx:{minHeight:"100vh"},children:[(0,d.jsx)(b,{}),(0,d.jsxs)(r.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,d.jsx)(r.ZP,{item:!0,xs:12,sx:{ml:3,mt:3},children:(0,d.jsx)(h.Z,{})}),(0,d.jsx)(r.ZP,{item:!0,xs:12,children:(0,d.jsx)(r.ZP,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 210px)",sm:"calc(100vh - 134px)",md:"calc(100vh - 112px)"}},children:(0,d.jsx)(r.ZP,{item:!0,children:(0,d.jsx)(f,{children:n})})})}),(0,d.jsx)(r.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,d.jsx)(u,{})})]})]})}},2419:function(e,n,t){t.d(n,{V:function(){return i},X:function(){return r}});var i=function(e){return e<2?{label:"Poor",color:"error.main"}:e<3?{label:"Weak",color:"warning.main"}:e<4?{label:"Normal",color:"warning.dark"}:e<5?{label:"Good",color:"success.main"}:e<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"}},r=function(e){var n=0;return e.length>5&&(n+=1),e.length>7&&(n+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(n+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(n+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(n+=1),n}}}]);