(this["webpackJsonpissue-status"]=this["webpackJsonpissue-status"]||[]).push([[0],{31:function(t,e,n){},32:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var o,a,r,c,s,i,u,l,d,b,p,j,g,m,x,O,f,h,v,w,S,k,C,E,_=n(1),T=n.n(_),I=n(18),y=n.n(I),A=(n(31),n(5)),P=n(3),N=(n(32),n(4)),D={message:"All Systems Operational",backgroundColour:"#3da751"},R={message:"Some systems are experiencing issues",backgroundColour:"#4990e2"},F={message:"Some systems are experiencing a major outage",backgroundColour:"#d94430"},L=function(t,e){return 100*t.filter((function(t){return t.labels.find((function(t){return t.name===e}))})).length/t.length},G=n(7),M=n.n(G),z=n(0),J=N.a.div(o||(o=Object(P.a)(["\n  background-color: ",";\n  color: white;\n  padding: 16px;\n  border-radius: 3px;\n  margin-bottom: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  transition: 0.3s;\n"])),(function(t){return t.backgroundColour?t.backgroundColour:"#b1b1b1"})),Y=N.a.h2(a||(a=Object(P.a)(["\n  font-size: 20px;\n  margin: 0;\n  font-weight: normal;\n"]))),W=N.a.button(r||(r=Object(P.a)(["\n  background-color: transparent;\n  color: white;\n  text-decoration: underline;\n  border: none;\n  cursor: pointer;\n  text-align: right;\n  padding: 0;\n"]))),B=N.a.code(c||(c=Object(P.a)(["\n  white-space: pre-wrap;\n  display: block;\n"]))),U=function(t){var e=t.loading,n=t.error,o=t.components,a=t.refetch,r=function(t){var e=Object(_.useState)(),n=Object(A.a)(e,2),o=n[0],a=n[1];return Object(_.useEffect)((function(){var e=!1;L(t,"operational")<70&&(a(R),e=!0),L(t,"major outage")>0&&(a(F),e=!0),e||a(D)}),[t]),[o]}(o),c=Object(A.a)(r,1)[0],s=function(t,e){var n=Object(_.useState)(M()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow()),o=Object(A.a)(n,2),a=o[0],r=o[1];return Object(_.useEffect)((function(){var e=setInterval((function(){new Date(localStorage.getItem("issueStatusLastFetchcomponent"))<new Date-24e4?t((function(){r(M()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())})):r(M()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),1e3);return function(){clearInterval(e)}}),[t]),Object(_.useEffect)((function(){r(M()(new Date(localStorage.getItem("issueStatusLastFetchcomponent"))).fromNow())}),[e]),[a]}(a,e),i=Object(A.a)(s,1)[0];return Object(z.jsxs)(z.Fragment,{children:[n.hasError&&Object(z.jsxs)(B,{children:[Object(z.jsx)("div",{children:"An error occured"}),Object(z.jsx)("div",{children:"You may have exceeded the rate limit. Try again in 1 hour to fetch the latest data."}),JSON.stringify(n.errors,null,3)]}),Object(z.jsxs)(J,{backgroundColour:null===c||void 0===c?void 0:c.backgroundColour,children:[Object(z.jsx)(Y,{children:null===c||void 0===c?void 0:c.message}),Object(z.jsx)(W,{onClick:a,children:e?"reloading":i})]})]})},H=function(t){var e=Object(_.useState)([]),n=Object(A.a)(e,2),o=n[0],a=n[1],r=Object(_.useState)(),c=Object(A.a)(r,2),s=c[0],i=c[1],u=Object(_.useState)(!0),l=Object(A.a)(u,2),d=l[0],b=l[1];return Object(_.useEffect)((function(){new Date(localStorage.getItem("issueStatusLastFetch".concat(t)))<new Date-24e4?K(b,i,a,t):(a(JSON.parse(localStorage.getItem("issueStatus".concat(t)))),b(!1),i())}),[t]),[d,s,o||[],function(){return K(b,i,a,t)}]},K=function(t,e,n,o){t(!0),fetch("https://api.github.com/repos/".concat("temporal-games/temporal-status-test","/issues?state=all&labels=issue status,").concat(o)).then((function(t){return t.json()})).then((function(a){e(),localStorage.setItem("issueStatusLastFetch".concat(o),new Date),localStorage.setItem("issueStatus".concat(o),JSON.stringify(a)),n(a),t(!1)})).catch((function(a){e(a.toString()),localStorage.setItem("issueStatusLastFetch".concat(o),new Date),n(JSON.parse(localStorage.getItem("issueStatus".concat(o)))),t(!1)}))},V=(N.a.h1(s||(s=Object(P.a)(["\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),N.a.img(i||(i=Object(P.a)([""])))),$=N.a.div(u||(u=Object(P.a)(["\n  text-align: center;\n  margin-bottom: 16px;\n"]))),q=function(){return Object(z.jsx)($,{children:Object(z.jsx)(V,{src:"https://raw.githubusercontent.com/Temporal-Games/temporal-status-test/temporal/.issuestatus/logo.png",alt:"Temporal Games systems status"})})},Q=N.a.div(l||(l=Object(P.a)(["\n  width: 100%;\n  height: 44px;\n  border-radius: 3px;\n  background-color: #f7f8f9;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),X={operational:{name:"Operational",colour:"#247234",backgroundColour:"rgba(61, 167, 81, 0.1)"},performanceIssues:{name:"Performance Issues",colour:"#2f5888",backgroundColour:"rgba(73, 144, 226, 0.1)"},partialOutage:{name:"Partial Outage",colour:"#74582a",backgroundColour:"rgba(255, 198, 103, 0.1)"},majorOutage:{name:"Major Outage",colour:"#8e3b31",backgroundColour:"rgba(217, 68, 48, 0.1)"},unknown:{name:"Unknown",colour:"#6e6b6b",backgroundColour:"rgba(177, 177, 177, 0.1)"}},Z=N.a.div(d||(d=Object(P.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"])),(function(t){return t.colour}),(function(t){return t.backgroundColour})),tt=function(t){var e=function(t){var e=Object(_.useState)(),n=Object(A.a)(e,2),o=n[0],a=n[1];return Object(_.useEffect)((function(){a(Object.values(X).find((function(e){return t.find((function(t){return t.name===e.name.toLowerCase()}))})))}),[t]),o||a(X.unknown),[o]}(t.labels),n=Object(A.a)(e,1)[0];return Object(z.jsx)(Z,{colour:null===n||void 0===n?void 0:n.colour,backgroundColour:null===n||void 0===n?void 0:n.backgroundColour,children:null===n||void 0===n?void 0:n.name})},et=N.a.div(b||(b=Object(P.a)(["\n  background-color: #f7f8f9;\n  padding: 8px 16px;\n  border-radius: 3px;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),nt=function(t){var e=t.component;return Object(z.jsxs)(et,{children:[e.title," ",Object(z.jsx)(tt,{labels:e.labels})]})},ot=function(){var t=Object(_.useState)(),e=Object(A.a)(t,2),n=e[0],o=e[1];return Object(_.useEffect)((function(){o(!0)}),[]),[n]},at=function(t){var e=t.loading,n=t.components,o=ot(),a=Object(A.a)(o,1)[0];return!e||a?(null===n||void 0===n?void 0:n.length)>0?null===n||void 0===n?void 0:n.map((function(t){return Object(z.jsx)(nt,{component:t},t.id)})):Object(z.jsx)("p",{children:"No Components found."}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(Q,{}),Object(z.jsx)(Q,{}),Object(z.jsx)(Q,{})]})},rt=n(24),ct=N.a.div(p||(p=Object(P.a)(["\n  transition: 0.3s;\n  border-left: 16px solid\n    ",";\n  background-color: white;\n  border-radius: 3px;\n  padding: 16px;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  margin-top: 8px;\n\n  :not(:last-child) {\n    margin-bottom: 16px;\n  }\n"])),(function(t){return t.active?"rgba(177, 177, 177,0.2)":"rgba(73, 144, 226, 0.2)"})),st=N.a.div(j||(j=Object(P.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 3px;\n"]))),it=N.a.div(g||(g=Object(P.a)(["\n  margin-right: 16px;\n  font-weight: bold;\n  margin-bottom: 8px;\n  color: #1e1e1e;\n"]))),ut=N.a.div(m||(m=Object(P.a)(["\n  white-space: break-spaces;\n  color: #1e1e1e;\n"]))),lt=N.a.div(x||(x=Object(P.a)(["\n  color: ",";\n  background-color: ",";\n  padding: 5px 12px;\n  border-radius: 16px;\n  font-size: 13px;\n  transition: 0.3s;\n"])),(function(t){return t.active?"#6e6b6b":"#2f5888"}),(function(t){return t.active?"rgba(177, 177, 177, 0.1)":"rgba(73, 144, 226, 0.1)"})),dt=N.a.div(O||(O=Object(P.a)(["\n  font-size: 13px;\n  color: #6e6b6b;\n  font-weight: bold;\n"]))),bt=function(t){var e=t.incident;return Object(z.jsxs)(ct,{active:e.closed_at,children:[Object(z.jsxs)(st,{children:[Object(z.jsx)(dt,{children:M()(e.created_at).format("MMMM Do YYYY, h:mm a").toUpperCase()}),Object(z.jsx)(lt,{active:e.closed_at,children:e.closed_at?"Closed":"Active"})]}),Object(z.jsx)(it,{children:e.title}),Object(z.jsx)(ut,{children:Object(z.jsx)(rt.a,{children:e.body})})]})},pt=N.a.div(f||(f=Object(P.a)(["\n  width: 100%;\n  height: 84px;\n  border-radius: 3px;\n  background-color: white;\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n\n  :not(:last-child) {\n    margin-bottom: 8px;\n  }\n"]))),jt=N.a.div(h||(h=Object(P.a)(["\n  margin: 32px auto 0 auto;\n  max-width: 1040px;\n"]))),gt=N.a.div(v||(v=Object(P.a)(["\n  padding: 0 16px;\n  font-size: 20px;\n  margin-bottom: 16px;\n"]))),mt=N.a.div(w||(w=Object(P.a)(["\n  margin: 0 8px;\n"]))),xt=function(t){var e=t.loading,n=t.incidents,o=ot(),a=Object(A.a)(o,1)[0];return Object(z.jsxs)(jt,{children:[Object(z.jsx)(gt,{children:"Incidents"}),!e||a?(null===n||void 0===n?void 0:n.length)>0?null===n||void 0===n?void 0:n.map((function(t){return Object(z.jsx)(bt,{incident:t},t.id)})):Object(z.jsx)(mt,{children:"No Incidents found."}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(pt,{}),Object(z.jsx)(pt,{}),Object(z.jsx)(pt,{})]})]})},Ot=N.a.div(S||(S=Object(P.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n"]))),ft=N.a.a(k||(k=Object(P.a)(["\n  color: #6e6b6b;\n  font-size: 13px;\n  text-decoration: none;\n  transition: 0.3s;\n  display: ",";\n\n  :hover {\n    opacity: 0.9;\n  }\n"])),(function(t){return t.visible?"block":"none"})),ht=function(){return Object(z.jsxs)(Ot,{children:[Object(z.jsx)("div",{}),Object(z.jsx)(ft,{visible:"false"!==Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MANIFEST:"https://raw.githubusercontent.com/Temporal-Games/temporal-status-test/temporal/.issuestatus/manifest.json",REACT_APP_FAVICON:"https://raw.githubusercontent.com/Temporal-Games/temporal-status-test/temporal/.issuestatus/favicon.ico",REACT_APP_TITLE:"Temporal Games systems status",REACT_APP_DESCRIPTION:"Temporal Games systems status",REACT_APP_LOGO:"https://raw.githubusercontent.com/Temporal-Games/temporal-status-test/temporal/.issuestatus/logo.png",REACT_APP_NAME:"Temporal Games systems status",REACT_APP_REPOSITORY:"temporal-games/temporal-status-test"}).REACT_APP_BRANDING,href:"https://github.com/tadhglewis/issue-status",rel:"noopener",target:"_blank",children:"Powered by Issue Status"})]})},vt=N.a.div(C||(C=Object(P.a)(["\n  max-width: 1008px;\n  padding: 16px;\n  margin: 16px auto;\n"]))),wt=N.a.div(E||(E=Object(P.a)(["\n  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);\n  border-radius: 3px;\n  background-color: white;\n  padding: 16px;\n"]))),St=function(){var t=H("component"),e=Object(A.a)(t,4),n=e[0],o=e[1],a=e[2],r=e[3],c=H("incident"),s=Object(A.a)(c,4),i=s[0],u=s[1],l=s[2],d=s[3];return Object(z.jsxs)(vt,{children:[Object(z.jsx)(q,{}),Object(z.jsxs)(wt,{children:[Object(z.jsx)(U,{loading:n||i,error:{hasError:o||u,errors:{componentsError:o,incidentsError:u}},components:a,refetch:function(){r(),d()}}),Object(z.jsx)(at,{loading:n,components:a})]}),Object(z.jsx)(xt,{loading:i,incidents:l}),Object(z.jsx)(ht,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));y.a.render(Object(z.jsx)(T.a.StrictMode,{children:Object(z.jsx)(St,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.eacd1995.chunk.js.map