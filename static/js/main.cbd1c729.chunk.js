(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{19:function(e,t,a){e.exports=a(33)},30:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),l=a.n(r),o=a(7),s=a(1),u=function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"border-bottom d-flex justify-content-around align-items-center py-2 h2"},c.a.createElement(o.b,{className:"text-decoration-none",to:"/"},"Home"),c.a.createElement(o.b,{className:"text-decoration-none",to:"/people"},"People")))},m=function(){return c.a.createElement("h1",null,"Home Page")},p=a(8),i=a.n(p),E=a(10),f=a(18),d=function(){var e=Object(E.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-academy.github.io").concat(t));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("".concat(a.status," - ").concat(a.statusText));case 5:return e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=(a(30),function(){var e=Object(n.useState)(null),t=Object(f.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){Object(E.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/react_people-table/api/people.json");case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),c.a.createElement("div",null,c.a.createElement("h1",{className:"text-center py-2"}," People Page "),c.a.createElement("ul",{className:"peopleList"},null===a||void 0===a?void 0:a.map((function(e){return c.a.createElement("li",{key:e.slug,className:"peopleList__item"},c.a.createElement("p",null,c.a.createElement("span",{className:"text-muted"},"Name: "),e.name),c.a.createElement("p",null,c.a.createElement("span",{className:"text-muted"},"Sex: "),e.sex),c.a.createElement("p",null,c.a.createElement("span",{className:"text-muted"},"Year of birth: "),e.born),c.a.createElement("p",null,c.a.createElement("span",{className:"text-muted"},"Year of death: "),e.died))}))))}),h=function(){return c.a.createElement("h1",null," Page not found")},x=(a(31),a(32),function(){return c.a.createElement("div",{className:"App"},c.a.createElement(u,null),c.a.createElement("div",{className:"container"},c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/",exact:!0,component:m}),c.a.createElement(s.b,{path:"/people",component:b}),c.a.createElement(s.a,{path:"/home",to:"/"}),c.a.createElement(h,null))))});l.a.render(c.a.createElement(o.a,null,c.a.createElement(x,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.cbd1c729.chunk.js.map