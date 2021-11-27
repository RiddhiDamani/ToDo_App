(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),c=a(22),n=a.n(c),o=a(6),i=(a(77),a(13)),d=a(1);function j(){return Object(d.jsx)("div",{children:Object(d.jsx)(i.a,{href:"/",style:{textDecoration:"none"},children:Object(d.jsx)("h1",{style:{color:"#090560"},children:"ToDo App"})})})}var l=a(9),u=a(12),b=a(110),O=a(105);function h(){var e=Object(r.useContext)(l.a).dispatch,t=Object(r.useState)(""),a=Object(o.a)(t,2),s=a[0],c=a[1],n=Object(r.useState)(""),i=Object(o.a)(n,2),j=i[0],h=i[1],x=Object(r.useState)(!1),p=Object(o.a)(x,2),m=p[0],f=p[1],g=Object(u.b)((function(e,t){return{url:"auth/login",method:"post",data:{username:e,password:t}}})),v=Object(o.a)(g,2),C=v[0],_=v[1];return Object(r.useEffect)((function(){C&&!1===C.isLoading&&(C.data||C.error)&&(C.error?(f(!0),alert("failed")):(f(!1),e({type:"LOGIN",username:s,access_token:C.data.access_token,_id:C.data._id})))}),[C]),Object(d.jsxs)("div",{children:[Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)(b.a,{style:{width:"50%",marginLeft:"32%",marginTop:"10%"},onSubmit:function(e){e.preventDefault(),_(s,j)},children:[Object(d.jsxs)(b.a.Group,{children:[Object(d.jsx)(b.a.Label,{htmlFor:"login-username",children:"Enter Username:"}),Object(d.jsx)(b.a.Control,{placeholder:"Enter Username",type:"text",value:s,onChange:function(e){c(e.target.value)},name:"login-username",id:"login-username"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(b.a.Group,{children:[Object(d.jsx)(b.a.Label,{htmlFor:"login-password",children:"Enter Password:"}),Object(d.jsx)(b.a.Control,{placeholder:"Enter Password",type:"password",value:j,onChange:function(e){h(e.target.value)},name:"login-password",id:"login-password"}),m&&Object(d.jsx)(b.a.Text,{style:{color:"red"},children:"Invalid username or password"})]}),Object(d.jsx)("br",{}),Object(d.jsx)(O.a,{variant:"primary",disabled:0===s.length||0===j.length,type:"submit",children:"Login"})]})]})}var x=a(70),p=a(108),m=a(106),f=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(m.a,{src:"./img/bg.jpg",thumbnail:!0,style:{width:"80%",height:"80%",border:"none"}})})},g=a(2),v=a(112);function C(e){var t=e.show,a=e.handleClose,s=Object(r.useState)({username:"",password:"",passwordRepeat:""}),c=Object(o.a)(s,2),n=c[0],i=c[1],j=Object(r.useState)(""),h=Object(o.a)(j,2),x=(h[0],h[1]),p=Object(u.b)((function(e,t){return{url:"/auth/register",method:"post",data:{username:e,password:t,passwordConfirmation:t}}})),m=Object(o.a)(p,2),f=m[0],C=m[1],_=Object(r.useContext)(l.a).dispatch;return Object(r.useEffect)((function(){f&&f.data&&_({type:"REGISTER",username:f.data.username,access_token:f.data.access_token,_id:f.data._id})}),[f]),Object(r.useEffect)((function(){f&&!1===f.isLoading&&(f.data||f.error)&&(f.error?(console.log(f),x("Registration failed, please try again later."),alert("fail")):(console.log(f),x("Registration successful. You may now login."),alert("success")))}),[f]),Object(d.jsx)(v.a,{show:t,onHide:a,children:Object(d.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),C(n.username,n.password),a()},children:[Object(d.jsx)(v.a.Header,{closeButton:!0,children:Object(d.jsx)(v.a.Title,{children:"Register"})}),Object(d.jsxs)(v.a.Body,{children:[Object(d.jsx)(b.a.Label,{htmlFor:"register-username",children:"Username:"}),Object(d.jsx)(b.a.Control,{type:"text",value:n.username,onChange:function(e){return i(Object(g.a)(Object(g.a)({},n),{},{username:e.target.value}))},name:"register-username",id:"register-username"}),Object(d.jsx)(b.a.Label,{htmlFor:"register-password",children:"Password:"}),Object(d.jsx)(b.a.Control,{type:"password",name:"register-password",id:"register-password",value:n.password,onChange:function(e){return i(Object(g.a)(Object(g.a)({},n),{},{password:e.target.value}))}}),Object(d.jsx)(b.a.Label,{htmlFor:"register-password-repeat",children:"Repeat password:"}),Object(d.jsx)(b.a.Control,{type:"password",name:"register-password-confirm",id:"register-password-confirm",value:n.passwordRepeat,onChange:function(e){return i(Object(g.a)(Object(g.a)({},n),{},{passwordRepeat:e.target.value}))}})]}),Object(d.jsxs)(v.a.Footer,{children:[Object(d.jsx)(O.a,{variant:"secondary",onClick:a,children:"Cancel"}),Object(d.jsx)(O.a,{variant:"primary",type:"submit",disabled:0===n.username.length||0===n.password.length||n.password!==n.passwordRepeat,children:"Register"})]})]})})}var _=a(113);function w(e){var t=e._id,a=e.title,s=e.description,c=e.dateCreated,n=e.complete,i=e.dateCompleted,j=Object(r.useContext)(l.a),b=j.state,h=j.dispatch,x=b.user,p=Object(u.b)((function(e){return{url:"/todo/".concat(e),method:"delete",headers:{Authorization:"".concat(x.access_token)},data:{username:x.username}}})),m=Object(o.a)(p,2),f=m[0],g=m[1],v=Object(u.b)((function(e){var t=e._id,a=e.dateCompleted;return{url:"/todo/".concat(t),method:"patch",headers:{Authorization:"".concat(x.access_token)},data:{dateCompleted:a,username:x.username}}})),C=Object(o.a)(v,2),w=C[0],y=C[1];Object(r.useEffect)((function(){if(f&&f.data&&!1===f.isLoading){var e=f.data._id;h({type:"DELETE_TODO",id:e})}}),[f]),Object(r.useEffect)((function(){w&&w.data&&!1===w.isLoading&&h({type:"TOGGLE_TODO",dateCompleted:w.data.dateCompleted,id:w.data._id})}),[w]);return Object(d.jsx)(_.a,{children:Object(d.jsxs)(_.a.Body,{children:[Object(d.jsx)(_.a.Title,{children:a}),Object(d.jsxs)(_.a.Text,{children:[Object(d.jsx)("span",{children:s}),Object(d.jsx)("br",{}),Object(d.jsxs)("span",{children:["ToDo ID: ",t]}),Object(d.jsx)("br",{}),Object(d.jsxs)("span",{children:["Date Created: ",c]}),Object(d.jsx)("br",{}),Object(d.jsxs)("span",{children:[" ",b.user.access_token&&Object(d.jsx)("input",{type:"checkbox",name:"checkbox",onClick:function(e){n=!!e.target.checked,i=!0===n?Date(Date.now()).toString().slice(0,25):null,y({_id:t,dateCompleted:i})},checked:!!i}),Object(d.jsx)("strong",{children:" Date Completed:"}),i&&Object(d.jsxs)(d.Fragment,{children:[" ",i," "]})]}),Object(d.jsx)("br",{})]}),b.user.access_token&&Object(d.jsx)(O.a,{variant:"primary",onClick:function(){g(t)},children:"DELETE"})]})})}var y=s.a.memo(w);function D(){var e=Object(r.useContext)(l.a).state.todos;return Object(d.jsxs)("div",{children:[0===e.length&&Object(d.jsx)("h6",{children:"No todo's found for current user."}),e.length>0&&e.map((function(e,t){return Object(r.createElement)(y,Object(g.a)(Object(g.a)({},e),{},{title:e.title,description:e.description,dateCreated:e.dateCreated,complete:e.complete,dateCompleted:e.dateCompleted,userID:e.userID,key:"todo-"+t,_id:e._id}))}))]})}var E=a(107);function T(){var e=Object(r.useContext)(l.a),t=e.state,a=e.dispatch,s=t.user,c=Object(u.b)((function(){return{url:"/todo",method:"get",headers:{Authorization:"".concat(s.access_token)}}})),n=Object(o.a)(c,2),j=n[0],b=n[1];Object(r.useEffect)((function(){b()}),[s.access_token]),Object(r.useEffect)((function(){j&&!1===j.isLoading&&j.data&&a({type:"FETCH_TODOS",todos:j.data.todos})}),[j]);j.data;var O=j.isLoading;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(E.a,{children:[Object(d.jsx)("br",{}),s.username&&Object(d.jsx)(i.a,{href:"/todo/create",style:{marginLeft:"1%"},children:"Create New ToDo Item"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),s.username&&Object(d.jsx)("h3",{style:{marginLeft:"1%"},children:"ToDo Lists"}),s.username&&O&&"ToDos loading..."," ",Object(d.jsx)("div",{style:{marginLeft:"1%"},children:Object(d.jsx)(D,{})})]})})}function L(){var e=s.a.lazy((function(){return a.e(3).then(a.bind(null,114))})),t=Object(r.useContext)(l.a).state.user,c=Object(r.useState)(!1),n=Object(o.a)(c,2),j=n[0],u=n[1];return t.username?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(e,{}),Object(d.jsx)(T,{})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(x.a,{children:[Object(d.jsx)(p.a,{children:Object(d.jsx)(h,{})}),Object(d.jsxs)(p.a,{children:[Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"mb-2",style:{marginLeft:"31%"},children:[Object(d.jsx)("label",{style:{color:"#090560"},children:"Not a user?"}),Object(d.jsx)(O.a,{size:"md",variant:"link",onClick:function(e){return u(!0)},children:"Register"}),Object(d.jsx)(C,{show:j,handleClose:function(){return u(!1)}})]})]}),Object(d.jsx)(p.a,{children:Object(d.jsx)("div",{className:"mb-2",style:{marginLeft:"31%"},children:Object(d.jsx)(i.a,{href:"/user",children:"Access Registered Users Page"})})})]}),Object(d.jsx)(x.a,{children:Object(d.jsx)(f,{})})]})}var k=a(111),S=a(109);function R(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(k.a,{collapseOnSelect:!0,expand:"lg",bg:"white",children:Object(d.jsxs)(E.a,{children:[Object(d.jsx)(k.a.Brand,{to:"#home",children:Object(d.jsx)(j,{})}),Object(d.jsx)(k.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsxs)(k.a.Collapse,{id:"responsive-navbar-nav",children:[Object(d.jsx)(S.a,{className:"me-auto"}),Object(d.jsx)(S.a,{}),Object(d.jsx)("br",{})]})]})}),Object(d.jsxs)(p.a,{className:"landing",children:[Object(d.jsx)(s.a.Suspense,{fallback:"Loading...",children:Object(d.jsx)(L,{})})," "]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("br",{}),Object(d.jsx)("div",{style:{color:"#050680",display:"flex",justifyContent:"center"},children:"\xa9 Developed with \u2665 by: Riddhi Damani"})]})]})}var I=a(55);function F(e,t){switch(t.type){case"LOGIN":case"REGISTER":return{username:t.username,access_token:t.access_token,_id:t._id};case"LOGOUT":return{username:void 0,access_token:void 0,_id:void 0};default:return e}}function G(e,t){return"FETCH_USERS"===t.type?t.users:e}function N(e,t){switch(t.type){case"CREATE_TODO":return[{_id:t._id,title:t.title,description:t.description,dateCreated:t.dateCreated,complete:!1,dateCompleted:null,userID:t.userID}].concat(Object(I.a)(e));case"TOGGLE_TODO":return e.map((function(e){var a=e;return e._id===t.id&&(a.dateCompleted=t.dateCompleted),a}));case"DELETE_TODO":return e.filter((function(e){return e._id!==t.id}));case"FETCH_TODOS":return t.todos;case"CLEAR_TODOLIST":return[];default:return e}}function U(e,t){return{user:F(e.user,t),users:G(e.users,t),todos:N(e.todos,t)}}var A=a(11);function H(){var e=Object(r.useContext)(l.a),t=e.state,a=e.dispatch,s=t.user,c=Object(r.useState)(""),n=Object(o.a)(c,2),h=n[0],x=n[1],p=Object(r.useState)(""),m=Object(o.a)(p,2),f=m[0],g=m[1],v=Object(r.useState)(""),C=Object(o.a)(v,2),_=C[0],w=C[1],y=Object(i.d)(),D=Object(u.b)((function(e){var t=e.title,a=e.description,r=e.dateCreated,c=e.complete,n=e.dateCompleted,o=e.userID;return{url:"/todo",method:"post",headers:{Authorization:"".concat(s.access_token)},data:{title:t,description:a,dateCreated:r,complete:c,dateCompleted:n,userID:o}}})),E=Object(o.a)(D,2),T=E[0],L=E[1];return Object(r.useEffect)((function(){T&&T.data&&(a({type:"CREATE_TODO",title:T.data.title,description:T.data.description,dateCreated:T.data.dateCreated,complete:T.data.complete,dateCompleted:T.data.dateCompleted,_id:T.data._id,userID:T.data.userID}),y.navigate("/"))}),[T]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),L({title:h,description:f,dateCreated:_,userID:s.username})},children:[Object(d.jsxs)(b.a.Group,{className:"mb-3",children:[Object(d.jsx)(b.a.Label,{htmlFor:"create-todo-title",children:"ToDo Title:"}),Object(d.jsx)(b.a.Control,{type:"text",placeholder:"",value:h,onChange:function(e){x(e.target.value),w(Date(Date.now()).toString().slice(0,25))},name:"create-todo-title",id:"create-todo-title",required:!0})]}),Object(d.jsxs)(b.a.Group,{className:"mb-3",children:[Object(d.jsx)(b.a.Label,{htmlFor:"create-todo-description ",children:"ToDo Description:"}),Object(d.jsx)(b.a.Control,{value:f,onChange:function(e){g(e.target.value)},as:"textarea",rows:5})]}),Object(d.jsx)(O.a,{variant:"primary",type:"submit",disabled:0===h.length||0===f.length,children:"Add"})]})]})}function B(e){var t=e.userID,a=e.username;return Object(d.jsxs)("div",{children:[Object(d.jsxs)(i.a,{href:"".concat(t),children:[" ",a," "]}),Object(d.jsx)("br",{})]})}function P(){var e=Object(r.useContext)(l.a).state.users;return Object(d.jsx)("div",{children:Object(d.jsxs)(_.a,{children:[Object(d.jsx)(_.a.Header,{as:"h5",children:"Registered Users List "}),Object(d.jsx)(_.a.Body,{children:e.map((function(e,t){return Object(d.jsx)(_.a.Text,{children:Object(r.createElement)(B,Object(g.a)(Object(g.a)({},e),{},{userID:e._id,username:e.username,key:e._id}))})}))})]})})}function z(){var e=Object(r.useContext)(l.a).dispatch,t=Object(u.b)((function(){return{url:"/user",method:"get"}})),a=Object(o.a)(t,2),s=a[0],c=a[1];Object(r.useEffect)(c,[]),Object(r.useEffect)((function(){s&&s.data&&!1===s.isLoading&&e({type:"FETCH_USERS",users:s.data})}),[s]);var n=s.isLoading;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),n&&"Users loading...",Object(d.jsx)(P,{})," ",Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:Object(d.jsx)(i.a,{href:"/",children:"Go Back to Homepage"})})]})}function J(e){var t=e.userID,a=Object(r.useContext)(l.a).dispatch,s=Object(u.b)((function(){return{url:"/user/".concat(t),method:"get"}})),c=Object(o.a)(s,2),n=c[0],b=c[1];Object(r.useEffect)(b,[t]),Object(r.useEffect)((function(){n&&n.data&&a({type:"FETCH_TODOS",todos:n.data})}),[n]);var O=n.isLoading;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)("h5",{children:" User-Specific Profile Page "}),O&&"Todos loading..."," ",Object(d.jsx)(D,{}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:Object(d.jsx)(i.a,{href:"/",children:"Go Back to Homepage"})})]})}var q=function(){var e=Object(r.useReducer)(U,{user:{},users:[],todos:[]}),t=Object(o.a)(e,2),a=t[0],s=t[1],c=a.user,n=Object(A.f)({"/":Object(A.g)({view:Object(d.jsx)(R,{})}),"/todo/create":Object(A.g)({view:Object(d.jsx)(H,{})}),"/user":Object(A.g)({view:Object(d.jsx)(z,{})}),"/user/:_id":Object(A.g)((function(e){return{view:Object(d.jsx)(J,{userID:e.params._id})}}))});return Object(r.useEffect)((function(){c.username?document.title="".concat(c.username,"'s To-Dos'"):document.title="To-Dos"}),[c]),Object(d.jsx)("div",{children:Object(d.jsx)(l.a.Provider,{value:{state:a,dispatch:s},children:Object(d.jsx)(i.b,{routes:n,children:Object(d.jsx)(E.a,{children:Object(d.jsx)(i.c,{})})})})})},M=a(37),Y=a.n(M).a.create({baseURL:"/"});n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(u.a,{value:Y,children:Object(d.jsx)(q,{})})}),document.getElementById("root"))},77:function(e,t,a){},9:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(0),s=a.n(r).a.createContext({state:{},dispatch:function(){}})}},[[102,1,2]]]);
//# sourceMappingURL=main.9804c4ac.chunk.js.map