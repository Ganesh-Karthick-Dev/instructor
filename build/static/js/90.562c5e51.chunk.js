(self.webpackChunkmantis_material_react=self.webpackChunkmantis_material_react||[]).push([[90],{2260:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(9860),i=r(5300),o=r(2832),a=r(1806),u=r(1113),s=r(9019),c=r(7076),l=r(4193),f=r(8368),d=r.p+"static/media/coming-soon.69b99428ab9e22eca0ba.png",m=r(1412),v=r(6417),p=function(e){var t=e.count,r=e.label,s=(0,n.Z)(),c=(0,i.Z)(s.breakpoints.down("sm"));return(0,v.jsx)(m.Z,{content:!1,sx:{width:{xs:60,sm:80}},children:(0,v.jsxs)(o.Z,{justifyContent:"center",alignItems:"center",children:[(0,v.jsx)(a.Z,{sx:{py:1.75},children:(0,v.jsx)(u.Z,{variant:c?"h4":"h2",children:t})}),(0,v.jsx)(a.Z,{sx:{p:.5,bgcolor:"secondary.lighter",width:"100%"},children:(0,v.jsx)(u.Z,{align:"center",variant:"subtitle2",children:r})})]})})};var h=function(){var e=new Date;e.setSeconds(e.getSeconds()+172800-55800);var t=(0,f.useTimer)({expiryTimestamp:e}),r=t.seconds,n=t.minutes,i=t.hours,m=t.days;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(s.ZP,{container:!0,spacing:4,direction:"column",alignItems:"center",justifyContent:"center",sx:{minHeight:"100vh",py:2},children:[(0,v.jsx)(s.ZP,{item:!0,xs:12,children:(0,v.jsx)(a.Z,{sx:{height:{xs:310,sm:420},width:{xs:360,sm:"auto"}},children:(0,v.jsx)("img",{src:d,alt:"mantis",style:{height:"100%",width:"100%"}})})}),(0,v.jsx)(s.ZP,{item:!0,xs:12,children:(0,v.jsxs)(o.Z,{spacing:1,justifyContent:"center",alignItems:"center",sx:{mt:-2},children:[(0,v.jsx)(u.Z,{align:"center",variant:"h1",children:"Coming Soon"}),(0,v.jsx)(u.Z,{align:"center",color:"textSecondary",children:"Something new is on its way"})]})}),(0,v.jsx)(s.ZP,{item:!0,xs:12,sx:{width:{xs:"95%",md:"40%"}},children:(0,v.jsxs)(o.Z,{direction:"row",alignItems:"center",justifyContent:"center",spacing:{xs:1,sm:2},children:[(0,v.jsx)(p,{count:m,label:"day"}),(0,v.jsx)(u.Z,{variant:"h1",children:" : "}),(0,v.jsx)(p,{count:i,label:"hour"}),(0,v.jsx)(u.Z,{variant:"h1",children:" : "}),(0,v.jsx)(p,{count:n,label:"min"}),(0,v.jsx)(u.Z,{variant:"h1",children:" : "}),(0,v.jsx)(p,{count:r,label:"sec"})]})}),(0,v.jsx)(s.ZP,{item:!0,xs:12,sx:{width:{xs:380,md:"40%",lg:"30%"}},children:(0,v.jsxs)(o.Z,{spacing:2,sx:{mt:2},children:[(0,v.jsx)(u.Z,{align:"center",color:"textSecondary",children:"Be the first to be notified when Mantis launches."}),(0,v.jsxs)(o.Z,{direction:"row",spacing:1,children:[(0,v.jsx)(c.Z,{fullWidth:!0,placeholder:"Email Address"}),(0,v.jsx)(l.Z,{variant:"contained",sx:{width:"50%"},children:"Notify Me"})]})]})})]})})}},8368:function(e,t,r){var n;"undefined"!=typeof self&&self,e.exports=(n=r(7313),function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Validate=t.Time=void 0;var n=o(r(5)),i=o(r(6));function o(e){return e&&e.__esModule?e:{default:e}}t.Time=n.default,t.Validate=i.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useInterval=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(r(7));t.useInterval=n.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useTime=t.useStopwatch=t.useTimer=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=function(e){if((0,i.useEffect)((function(){console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead")}),[]),e.expiryTimestamp){var t=(0,o.default)(e);return n({},t,{startTimer:t.start,stopTimer:t.pause,resetTimer:function(){}})}var r=(0,a.default)(e);return n({},r,{startTimer:r.start,stopTimer:r.pause,resetTimer:r.reset})};var i=r(0),o=s(r(4)),a=s(r(8)),u=s(r(9));function s(e){return e&&e.__esModule?e:{default:e}}t.useTimer=o.default,t.useStopwatch=a.default,t.useTime=u.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=e.expiryTimestamp,r=e.onExpire,l=e.autoStart,f=void 0===l||l,d=(0,o.useState)(t),m=i(d,2),v=m[0],p=m[1],h=(0,o.useState)(a.Time.getSecondsFromExpiry(v)),y=i(h,2),g=y[0],x=y[1],T=(0,o.useState)(f),b=i(T,2),j=b[0],S=b[1],w=(0,o.useState)(f),O=i(w,2),_=O[0],P=O[1],M=(0,o.useState)(c(v)),Z=i(M,2),F=Z[0],E=Z[1];function k(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];E(c(e)),P(t),S(t),p(e),x(a.Time.getSecondsFromExpiry(e))}function I(){var e=new Date;e.setMilliseconds(e.getMilliseconds()+1e3*g),k(e)}return(0,u.useInterval)((function(){F!==s&&E(s);var e=a.Time.getSecondsFromExpiry(v);x(e),e<=0&&(a.Validate.onExpire(r)&&r(),S(!1),E(null))}),j?F:null),n({},a.Time.getTimeFromSeconds(g),{start:function(){_?(x(a.Time.getSecondsFromExpiry(v)),S(!0)):I()},pause:function(){S(!1)},resume:I,restart:k,isRunning:j})};var o=r(0),a=r(1),u=r(2),s=1e3;function c(e){if(!a.Validate.expiryTimestamp(e))return null;var t=a.Time.getSecondsFromExpiry(e),r=Math.floor(1e3*(t-Math.floor(t)));return r>0?r:s}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,null,[{key:"getTimeFromSeconds",value:function(e){var t=Math.ceil(e),r=Math.floor(t/86400),n=Math.floor(t%86400/3600),i=Math.floor(t%3600/60);return{seconds:Math.floor(t%60),minutes:i,hours:n,days:r}}},{key:"getSecondsFromExpiry",value:function(e,t){var r=e-(new Date).getTime();if(r>0){var n=r/1e3;return t?Math.round(n):n}return 0}},{key:"getSecondsFromPrevTime",value:function(e,t){var r=(new Date).getTime()-e;if(r>0){var n=r/1e3;return t?Math.round(n):n}return 0}},{key:"getSecondsFromTimeNow",value:function(){var e=new Date;return e.getTime()/1e3-60*e.getTimezoneOffset()}},{key:"getFormattedTimeFromSeconds",value:function(t,r){var n=e.getTimeFromSeconds(t),i=n.seconds,o=n.minutes,a=n.hours,u="",s=a;return"12-hour"===r&&(u=a>=12?"pm":"am",s=a%12),{seconds:i,minutes:o,hours:s,ampm:u}}}]),e}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,null,[{key:"expiryTimestamp",value:function(e){var t=new Date(e).getTime()>0;return t||console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings",e),t}},{key:"onExpire",value:function(e){var t=e&&"function"==typeof e;return e&&!t&&console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function",e),t}}]),e}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=(0,n.useRef)();(0,n.useEffect)((function(){r.current=e})),(0,n.useEffect)((function(){if(!t)return function(){};var e=setInterval((function(){r.current&&r.current()}),t);return function(){return clearInterval(e)}}),[t])};var n=r(0)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=e.autoStart,r=e.offsetTimestamp,s=(0,o.useState)(a.Time.getSecondsFromExpiry(r,!0)||0),c=i(s,2),l=c[0],f=c[1],d=(0,o.useState)(new Date),m=i(d,2),v=m[0],p=m[1],h=(0,o.useState)(l+a.Time.getSecondsFromPrevTime(v||0,!0)),y=i(h,2),g=y[0],x=y[1],T=(0,o.useState)(t),b=i(T,2),j=b[0],S=b[1];return(0,u.useInterval)((function(){x(l+a.Time.getSecondsFromPrevTime(v,!0))}),j?1e3:null),n({},a.Time.getTimeFromSeconds(g),{start:function(){var e=new Date;p(e),S(!0),x(l+a.Time.getSecondsFromPrevTime(e,!0))},pause:function(){f(g),S(!1)},reset:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=a.Time.getSecondsFromExpiry(e,!0)||0,n=new Date;p(n),f(r),S(t),x(r+a.Time.getSecondsFromPrevTime(n,!0))},isRunning:j})};var o=r(0),a=r(1),u=r(2)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=e.format,r=(0,o.useState)(a.Time.getSecondsFromTimeNow()),s=i(r,2),c=s[0],l=s[1];return(0,u.useInterval)((function(){l(a.Time.getSecondsFromTimeNow())}),1e3),n({},a.Time.getFormattedTimeFromSeconds(c,t))};var o=r(0),a=r(1),u=r(2)}]))}}]);