(this.webpackJsonptriumf=this.webpackJsonptriumf||[]).push([[0],[,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),l=a(4),o=a.n(l),r=(a(10),a(11),[{id:"1",name:"name1",type:"type1",color:"#0000ff"},{id:"2",name:"name2",type:"type2",color:"#cd7f32"},{id:"3",name:"name3",type:"type3",color:"#c18f8f"},{id:"4",name:"name4",type:"type4",color:"rgb(255, 0, 255)"},{id:"5",name:"name5",type:"type5",color:"#a5a5a5"}]),s=a(5),i=a(2),u=(a(12),a(13),a(0));var j=function(e){var t,a=e.id,n=e.name,l=e.type;t=e.color;var o=Object(c.useState)(n),r=Object(i.a)(o,2),s=r[0],j=r[1],d=Object(c.useState)(l),b=Object(i.a)(d,2),O=b[0],m=b[1],p=Object(c.useState)(t),h=Object(i.a)(p,2),f=h[0],g=h[1];return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("input",{className:"cell",type:"text",onChange:function(e){j(e.target.value);var t=localStorage.getItem(a);if(null!=t){var c=JSON.parse(t);c.name=e.target.value,window.localStorage.setItem(a,JSON.stringify(c))}},value:s})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{className:"cell",type:"text",onChange:function(e){m(e.target.value);var t=localStorage.getItem(a);if(null!=t){var c=JSON.parse(t);c.type=e.target.value,window.localStorage.setItem(a,JSON.stringify(c))}},value:O})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{className:"cell",type:"color",onChange:function(e){g(e.target.value);var t=localStorage.getItem(a);if(null!=t){var c=JSON.parse(t);c.color=e.target.value,window.localStorage.setItem(a,JSON.stringify(c))}},value:f})}),Object(u.jsx)("td",{className:"cell",children:Object(u.jsx)("button",{className:"cell__button",onClick:function(){window.localStorage.removeItem(a),window.location.reload()},children:"Delete"})})]})};var d=function(){for(var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(!0),o=Object(i.a)(l,2),r=o[0],d=o[1],b=[],O=0;O<localStorage.length;O++){var m=localStorage.key(O);b.push(JSON.parse(localStorage.getItem(m)))}b.sort(function(e){return r?function(t,a){return t[e]>a[e]?1:-1}:function(t,a){return t[e]>a[e]?-1:1}}(a));var p=b.reverse();return Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsxs)("th",{children:["Name",Object(u.jsx)("button",{className:"table__sort-button",onClick:function(){n("name"),d(!r)},children:"sort"})]}),Object(u.jsxs)("th",{children:["Type",Object(u.jsx)("button",{className:"table__sort-button",onClick:function(){n("type"),d(!r)},children:"sort"})]}),Object(u.jsxs)("th",{children:["Color",Object(u.jsx)("button",{className:"table__sort-button",onClick:function(){n("color"),d(!r)},children:"sort"})]}),Object(u.jsx)("th",{children:"Delete Button"})]})}),Object(u.jsx)("tbody",{children:p.map((function(e){return Object(u.jsx)(j,Object(s.a)({},e),"".concat(e.id))}))})]})};a(15);var b=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(""),o=Object(i.a)(l,2),r=o[0],s=o[1],j=Object(c.useState)(""),d=Object(i.a)(j,2),b=d[0],O=d[1],m=Object(c.useState)(""),p=Object(i.a)(m,2),h=p[0],f=p[1];function g(){if(n(!a),a){var e=function(e){var t;do{t=Math.floor(1e3*Math.random())}while(e.includes(t.toString()));return t}(Object.keys(localStorage)),t={};t.id=e,t.name=r,t.type=b,t.color=h,window.localStorage.setItem(e,JSON.stringify(t)),window.location.reload()}s(""),O(""),f("#a3e6db")}return a?Object(u.jsxs)("form",{className:"add-row",onSubmit:g,children:[Object(u.jsxs)("div",{className:"add-row__title",children:[Object(u.jsx)("p",{className:"add-row__cell",children:"Input Name"}),Object(u.jsx)("p",{className:"add-row__cell",children:"Input Type"}),Object(u.jsx)("p",{className:"add-row__cell",children:"Input Color"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{className:"add-row__cell",type:"text",onChange:function(e){s(e.target.value)},value:r,placeholder:"input name"}),Object(u.jsx)("input",{className:"add-row__cell",type:"text",onChange:function(e){O(e.target.value)},value:b,placeholder:"input type"}),Object(u.jsx)("input",{className:"add-row__cell",type:"color",onChange:function(e){f(e.target.value)},value:h,placeholder:"input color"})]}),Object(u.jsx)("button",{className:"add-row__button",onClick:g,children:"Add"})]}):Object(u.jsx)("div",{className:"add-row",children:Object(u.jsx)("button",{className:"add-row__button",onClick:g,children:"Add Row"})})};var O=function(){return null===localStorage.getItem(r[0].id)&&r.forEach((function(e){return localStorage.setItem(e.id,JSON.stringify(e))})),Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{}),Object(u.jsx)(d,{})]})};o.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.2cd28149.chunk.js.map