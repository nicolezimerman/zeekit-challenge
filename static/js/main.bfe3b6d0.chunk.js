(this["webpackJsonpzeekit-challenge"]=this["webpackJsonpzeekit-challenge"]||[]).push([[0],{106:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(10),i=n.n(a),s=(n(76),n(34)),o=n(12),u=(n(77),n(142)),l=n.p+"static/media/tv.572d23a2.png",d=n(145),j=n(152),b=n(4),f=Object(u.a)({root:{backgroundColor:"#ffffff",minHeight:"100vh",maxHeight:"100vh"},container:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},title:{textAlign:"center",color:"#2196f3"},icon:{width:"250px"}}),h=function(){var e=f(),t=e.container,n=e.root,r=e.title,c=e.icon,a=Object(o.f)();return Object(b.jsx)("div",{className:n,children:Object(b.jsxs)(d.a,{className:t,maxWidth:"sm",children:[Object(b.jsx)("h1",{className:r,children:"Guess the TV show name!"}),Object(b.jsx)("img",{className:c,src:l,alt:"Game"}),Object(b.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){return a.push("/game")},children:"Start"})]})})},g=n(11),m=n(33),x=n.n(m),O=n(17),p=n(42),v=n(43),w=n.n(v);var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Object(r.useState)(e),n=Object(g.a)(t,2),c=n[0],a=n[1],i=function(){return a((function(){return c+1}))},s=function(){return a(c-1)},o=function(){return a(e)};return{counter:c,increase:i,decrease:s,reset:o}};n(106);var y=function(){return Object(b.jsx)("div",{className:"lds-dual-ring"})},N=n(151),C=n(147),k=n(154),E=n(148),T=n(109),A=n(149),I=n(150),F=function(e){var t=e.open,n=e.onClose,r=e.hintsUsed,c=e.wrongAnswers,a=e.correctAnswers,i=function(){n()};return Object(b.jsxs)(k.a,{onClose:i,"aria-labelledby":"simple-dialog-title",open:t,maxWidth:"sm",fullWidth:!0,children:[Object(b.jsx)(E.a,{id:"simple-dialog-title",children:"Statistics"}),Object(b.jsxs)(A.a,{dividers:!0,children:[Object(b.jsxs)(T.a,{children:["Correct guesses: ",a]}),Object(b.jsxs)(T.a,{children:["Wrong guesses: ",c]}),Object(b.jsxs)(T.a,{children:["Hints used: ",r]})]}),Object(b.jsx)(I.a,{children:Object(b.jsx)(j.a,{autoFocus:!0,onClick:i,color:"primary",children:"Close"})})]})},V=function(e){var t=e.keyName,n=e.defaultValue,r=sessionStorage.getItem(t);r&&(n=Number.parseInt(JSON.parse(r)));return{getter:n,setter:function(e){try{sessionStorage.setItem(t,JSON.stringify(e))}catch(r){console.log(r)}n=Number.parseInt(e)},cleaner:function(){sessionStorage.removeItem(t)}}},_=Object(u.a)({root:{backgroundColor:"#ffffff",minHeight:"100vh",maxHeight:"100vh",marginTop:"0px"},container:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"},title:{textAlign:"center",backgroundColor:"#2196f3",color:"#ffffff",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",width:"100%",padding:"25px",marginTop:"0px",boxSizing:"border-box"},buttons:{margin:"5px"},paper:{margin:"5px",padding:"10px",width:"50%",boxSizing:"border-box",letterSpacing:"3px"},textfield:{width:"50%"},image:{width:"200px"},info:{width:"80%",display:"flex",flexDirection:"row",justifyContent:"space-around"},buttonsContainer:{margin:"25px"}}),G=function(){var e=Object(o.f)(),t=_(),n=t.container,c=t.root,a=t.title,i=t.buttons,s=t.paper,u=t.textfield,l=t.image,f=t.info,h=t.buttonsContainer,m=function(){var e=Object(r.useState)(!0),t=Object(g.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),i=Object(g.a)(a,2),s=i[0],o=i[1],u=Object(r.useState)([]),l=Object(g.a)(u,2),d=l[0],j=l[1];return Object(r.useEffect)((function(){!function(){var e=Object(p.a)(x.a.mark((function e(){var t,n,r,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(20*Math.random())+1,n="https://api.themoviedb.org/3/tv/top_rated?api_key=".concat("00a30530017b0c3895f5e958b09a117d","&language=en-US&page=").concat(t),c(!0),o(!1),e.prev=4,e.next=7,w()({url:n,method:"GET"});case 7:r=e.sent,a=r.data,j((function(e){return[].concat(Object(O.a)(e),Object(O.a)(a.results))})),c(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(4),c(!1),o(!0);case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(){return e.apply(this,arguments)}}()()}),[]),{isLoading:n,isError:s,shows:d}}(),v=m.isLoading,k=m.isError,E=m.shows,T=function(){var e=Object(r.useState)([]),t=Object(g.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),i=Object(g.a)(a,2),s=i[0],o=i[1];return Object(r.useEffect)((function(){!function(){var e=Object(p.a)(x.a.mark((function e(){var t,n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/genre/tv/list?api_key=".concat("00a30530017b0c3895f5e958b09a117d","&language=en-US"),e.prev=1,e.next=4,w()({url:t,method:"GET"});case 4:n=e.sent,r=n.data,c((function(e){return[].concat(Object(O.a)(e),Object(O.a)(r.genres))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),o(!0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]),{isError:s,genres:n,getGenresFromTV:function(e){return n.filter((function(t){return e.find((function(e){return e===t.id}))})).map((function(e){return e.name})).join(", ")}}}().getGenresFromTV,A=Object(r.useState)(1),I=Object(g.a)(A,2),G=I[0],H=I[1],D=Object(r.useState)(""),L=Object(g.a)(D,2),W=L[0],U=L[1],z=Object(r.useState)(Object(b.jsx)("div",{})),J=Object(g.a)(z,2),M=J[0],P=J[1],B=Object(r.useState)([]),K=Object(g.a)(B,2),Y=K[0],q=K[1],Q=Object(r.useState)(!1),R=Object(g.a)(Q,2),X=R[0],Z=R[1],$=V({keyName:"correctAnswers",defaultValue:0}),ee=V({keyName:"wrongAnswers",defaultValue:0}),te=V({keyName:"hintsUsed",defaultValue:0}),ne=S(0),re=S(3),ce=S(1),ae=S($.getter),ie=S(ee.getter),se=S(te.getter);Object(r.useEffect)((function(){E.length>0&&q(oe(E[G].name))}),[E]),Object(r.useEffect)((function(){$.setter(ae.counter.toString()),ee.setter(ie.counter.toString()),te.setter(se.counter.toString())}),[ce.counter,ae.counter,ie.counter]);var oe=function(e){return e.split("").map((function(e){return" "===e?" ":Math.random()<.5===!0?e:"_"}))},ue=function(){if(""!==W){var t=E[G].name;W.toLowerCase()===t.toLowerCase()?(H((function(e){return e+1})),U(""),ne.increase(),ae.increase(),ce.reset(),q(oe(E[G+1].name)),P(Object(b.jsx)("div",{}))):(re.decrease(),ie.increase(),U(""),1===re.counter&&e.push("/end"))}},le=function(){switch(ce.counter){case 1:return Object(b.jsxs)("div",{children:["First air date: ",E[G].first_air_date]});case 2:return Object(b.jsxs)("div",{children:["Original language: ",E[G].original_language]});case 3:return Object(b.jsxs)("div",{children:["Genres: ",T(E[G].genre_ids)]});case 4:return Object(b.jsxs)("div",{children:["Overview: ",E[G].overview]});case 5:return Object(b.jsx)("img",{className:l,src:"".concat("https://image.tmdb.org/t/p/original").concat(E[G].backdrop_path),alt:"TV show"});default:return Object(b.jsx)("div",{children:"No more hints"})}};return Object(b.jsxs)("div",{className:c,children:[Object(b.jsx)("h1",{className:a,children:"\xa1Guess the TV show name!"}),Object(b.jsxs)(d.a,{className:n,maxWidth:"sm",children:[v&&Object(b.jsx)(y,{}),k&&Object(b.jsx)("div",{children:"Error"}),!v&&E.length>0&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:f,children:[Object(b.jsxs)("h4",{children:["Points: ",ne.counter]}),Object(b.jsxs)("h4",{children:["Lifes: ",re.counter]})]}),Object(b.jsx)(C.a,{className:s,variant:"outlined",children:Object(b.jsx)("h2",{children:Y})}),Object(b.jsx)(N.a,{className:u,id:"outlined-basic",label:"Answer",onChange:function(e){U(e.target.value)},value:W,onKeyDown:function(e){"Enter"===e.key&&ue()}}),Object(b.jsxs)("div",{className:h,children:[Object(b.jsx)(j.a,{className:i,variant:"contained",color:"primary",onClick:ue,disabled:0===W.length,children:"Check the guess"}),Object(b.jsx)(j.a,{className:i,variant:"contained",color:"primary",onClick:function(){P(le()),ce.increase(),se.increase()},disabled:ce.counter>5,children:"Hint"})]}),Object(b.jsx)(j.a,{className:i,variant:"contained",color:"primary",onClick:function(){Z(!0)},children:"Statistics"}),Object(b.jsx)("div",{className:"hint",children:M}),Object(b.jsx)(F,{open:X,onClose:function(){Z(!1)},correctAnswers:$.getter,wrongAnswers:ee.getter,hintsUsed:te.getter})]})]})]})},H=Object(u.a)({root:{backgroundColor:"#ffffff",minHeight:"100vh",maxHeight:"100vh"},container:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},title:{textAlign:"center",color:"#2196f3"}}),D=function(){var e=H(),t=e.container,n=e.root,r=e.title,c=Object(o.f)();return Object(b.jsx)("div",{className:n,children:Object(b.jsxs)(d.a,{className:t,maxWidth:"sm",children:[Object(b.jsx)("h1",{className:r,children:"You lost, \xbfDo you want to start again?"}),Object(b.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){return c.push("/game")},children:"Start"})]})})},L=function(){return Object(b.jsxs)(s.a,{children:[Object(b.jsx)(o.b,{path:"/",exact:!0,component:h}),Object(b.jsx)(o.b,{path:"/game",exact:!0,component:G}),Object(b.jsx)(o.b,{path:"/end",exact:!0,component:D}),Object(b.jsx)(o.a,{to:"/"})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,156)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),W()},76:function(e,t,n){},77:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.bfe3b6d0.chunk.js.map