(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),i=(a(9),a(3)),o=(a(10),a(0)),d="b073d84a2ec2e05edbf1c9e80ec04a77",p="https://api.openweathermap.org/data/2.5/";var u=function(){var e=Object(c.useState)(" "),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)({}),s=Object(i.a)(r,2),u=s[0],h=s[1];return Object(o.jsx)("div",{className:"undefined"!==typeof u.main?"mist"===u.weather[0].description?"app mist":"haze"===u.weather[0].description?"app haze":"scattered clouds"===u.weather[0].description?"app scatteredclouds":"broken clouds"===u.weather[0].description?"app brokenclouds":"few clouds"===u.weather[0].description?"app fewclouds":"thunderstorm"===u.weather[0].description?"app thunderstrom":"light rain"===u.weather[0].description?"app lightrain":"overcast clouds"===u.weather[0].description?"app overcastclouds":"app warm":"app cold",children:Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{className:"search-box",children:Object(o.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return n(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(p,"weather?q=").concat(a,"&units=metric&APPID=").concat(d)).then((function(e){return e.json()})).then((function(e){h(e),n(""),console.log(e)}))}})}),"undefined"!=typeof u.main?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"location-box",children:[Object(o.jsxs)("div",{className:"location",children:[u.name,",",u.sys.country]}),Object(o.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),c=["Janurary","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear();return"".concat(t," ").concat(a," ").concat(c," ").concat(n)}(new Date)})]}),Object(o.jsxs)("div",{className:"weather-box",children:[Object(o.jsxs)("div",{className:"temp",children:[Math.round(u.main.temp),"\xb0C"]}),Object(o.jsx)("div",{className:"weather",children:u.weather[0].description})]})]}):" "]})})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),h()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.65b63e62.chunk.js.map