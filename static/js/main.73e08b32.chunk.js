(this.webpackJsonptriumf=this.webpackJsonptriumf||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},244:function(e,t,a){},246:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),l=a(5),o=a.n(l),r=(a(107),a(108),[{id:"1",name:"name1",type:"type1",color:"#0000ff"},{id:"2",name:"name2",type:"type2",color:"#cd7f32"},{id:"3",name:"name3",type:"type3",color:"#c18f8f"},{id:"4",name:"name4",type:"type4",color:"#c18f8f"},{id:"5",name:"name5",type:"type5",color:"#a5a5a5"}]),s=a(7),i=(a(109),a(4)),d=(a(110),a(245),a(2));var j=function(e){var t=e.id,a=e.name,n=e.type,l=e.color,o=Object(c.useState)(a),r=Object(i.a)(o,2),s=r[0],j=r[1],u=Object(c.useState)(n),b=Object(i.a)(u,2),O=b[0],m=b[1],p=Object(c.useState)([l]),h=Object(i.a)(p,2),f=h[0],g=h[1],x=Object(c.useState)(["#bf4040","#ab3f3f","#9f3737","#8d3434","#812929"]),v=Object(i.a)(x,2);return v[0],v[1],Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("input",{className:"cell",type:"text",onChange:function(e){j(e.target.value);var a=localStorage.getItem(t);if(null!=a){var c=JSON.parse(a);c.name=e.target.value,window.localStorage.setItem(t,JSON.stringify(c))}},value:s})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{className:"cell",type:"text",onChange:function(e){m(e.target.value);var a=localStorage.getItem(t);if(null!=a){var c=JSON.parse(a);c.type=e.target.value,window.localStorage.setItem(t,JSON.stringify(c))}},value:O})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{className:"cell",type:"color",onChange:function(e){g(e.target.value);var a=localStorage.getItem(t);if(null!=a){var c=JSON.parse(a);c.color=e.target.value,window.localStorage.setItem(t,JSON.stringify(c))}},value:f})}),Object(d.jsx)("td",{className:"cell",children:Object(d.jsx)("button",{className:"cell__button",onClick:function(){window.localStorage.removeItem(t),window.location.reload()},children:"Delete"})})]})};var u=function(e){e.active,e.currentPage,e.openRow;for(var t=[],a=0;a<localStorage.length;a++){var c=localStorage.key(a);t.push(JSON.parse(localStorage.getItem(c)))}return Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Type"}),Object(d.jsx)("th",{children:"Color"}),Object(d.jsx)("th",{children:"Delete Button"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsx)(j,Object(s.a)({},e),"".concat(e.id))}))})]})};a(244);var b=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(""),o=Object(i.a)(l,2),r=o[0],s=o[1],j=Object(c.useState)(""),u=Object(i.a)(j,2),b=u[0],O=u[1],m=Object(c.useState)(""),p=Object(i.a)(m,2),h=p[0],f=p[1];function g(){if(n(!a),a){var e=function(e){var t;do{t=Math.floor(1e3*Math.random()),console.log(e.includes(t))}while(e.includes(t.toString()));return t}(Object.keys(localStorage)),t={};t.id=e,t.name=r,t.type=b,t.color=h,window.localStorage.setItem(e,JSON.stringify(t)),window.location.reload()}s(""),O(""),f("#a3e6db")}return a?Object(d.jsxs)("form",{className:"add-row",onSubmit:g,children:[Object(d.jsxs)("div",{className:"add-row__title",children:[Object(d.jsx)("p",{className:"add-row__cell",children:"Input Name"}),Object(d.jsx)("p",{className:"add-row__cell",children:"Input Type"}),Object(d.jsx)("p",{className:"add-row__cell",children:"Input Color"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{className:"add-row__cell",type:"text",onChange:function(e){s(e.target.value)},value:r,placeholder:"input name"}),Object(d.jsx)("input",{className:"add-row__cell",type:"text",onChange:function(e){O(e.target.value)},value:b,placeholder:"input type"}),Object(d.jsx)("input",{className:"add-row__cell",type:"color",onChange:function(e){f(e.target.value)},value:h,placeholder:"input color"})]}),Object(d.jsx)("button",{className:"add-row__button",onClick:g,children:"Add"})]}):Object(d.jsx)("div",{className:"add-row",children:Object(d.jsx)("button",{className:"add-row__button",onClick:g,children:"Add Row"})})};var O=function(){return null===localStorage.getItem(r[0].id)&&r.forEach((function(e){return localStorage.setItem(e.id,JSON.stringify(e))})),Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{}),Object(d.jsx)(u,{})]})};o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[246,1,2]]]);
//# sourceMappingURL=main.73e08b32.chunk.js.map