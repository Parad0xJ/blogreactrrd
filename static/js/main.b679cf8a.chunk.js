(this.webpackJsonpblogreactrrd=this.webpackJsonpblogreactrrd||[]).push([[0],{30:function(e,t,a){e.exports=a(60)},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(24),c=a.n(l),o=a(11),s=a.n(o),i=a(25),m=a(29),d=a(26),u=a.n(d),E=(a(53),a(8)),f=a(6),p=function(e){return n.a.createElement("div",{className:"card border-primary my-4 d-flex ",style:{maxWidth:"20rem"}},n.a.createElement("div",{className:"card-header bg-transparent border-primary"},e.head),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},e.title),n.a.createElement("p",{className:"card-text"},e.body)),n.a.createElement("div",{className:"card-footer bg-transparent border-primary"},e.footer))},v=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"alert alert-success mt-4 h4",role:"alert"},"All Posts By User One"),n.a.createElement("div",{className:"d-flex flex-wrap justify-content-around "},e.data.map((function(e){return n.a.createElement(p,{key:e.id,head:" USER - ".concat(e.userId),title:e.title,body:e.body,footer:" ID Post - ".concat(e.id)})}))))},h=function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"alert alert-warning mt-4 h4",role:"alert"},"All Posts By User Two"),n.a.createElement("div",{className:"d-flex flex-wrap justify-content-around "},e.data.map((function(e){return n.a.createElement(p,{key:e.id,head:" USER - ".concat(e.userId),title:e.title,body:e.body,footer:" ID Post - ".concat(e.id)})})))))},y=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"alert alert-danger mt-4 h4",role:"alert"},"All Posts By User Three"),n.a.createElement("div",{className:"d-flex flex-wrap justify-content-around"},e.data.map((function(e){return n.a.createElement(p,{key:e.id,head:" USER - ".concat(e.userId),title:e.title,body:e.body,footer:" ID Post - ".concat(e.id)})}))))},N=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"alert alert-info mt-4 h4",role:"alert"},"All Posts By User Four"),n.a.createElement("div",{className:"d-flex flex-wrap justify-content-around "},e.data.map((function(e){return n.a.createElement(p,{key:e.id,head:" USER - ".concat(e.userId),title:e.title,body:e.body,footer:" ID Post - ".concat(e.id)})}))))},b=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"alert alert-primary mt-4 h4",role:"alert"},"All Posts By User Five"),n.a.createElement("div",{className:"d-flex flex-wrap justify-content-around"},e.data.map((function(e){return n.a.createElement(p,{key:e.id,head:" USER - ".concat(e.userId),title:e.title,body:e.body,footer:" ID Post - ".concat(e.id)})}))))},g=function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1];Object(r.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()("https://jsonplaceholder.typicode.com/posts");case 2:t=e.sent,l(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var c=a.filter((function(e){return 1===e.userId})),o=a.filter((function(e){return 2===e.userId})),d=a.filter((function(e){return 3===e.userId})),p=a.filter((function(e){return 4===e.userId})),g=a.filter((function(e){return 5===e.userId}));return n.a.createElement("div",null,n.a.createElement(E.a,null,n.a.createElement("nav",{id:"navbar",className:"navbar navbar-light"},n.a.createElement("p",null,n.a.createElement("span",{className:"h4"},"My Blog")," ",n.a.createElement("small",null,"Version 2020 - I tried to use react-router dom")),n.a.createElement("ul",null,n.a.createElement("div",null,n.a.createElement("ul",{className:"list-group list-group-horizontal ",role:"tablist"},n.a.createElement("li",{className:"list-group-item "},n.a.createElement(E.b,{exact:!0,activeClassName:"current",to:"/"},"User 1")),n.a.createElement("li",{className:"list-group-item nav-item "},n.a.createElement(E.b,{exact:!0,activeClassName:"current",to:"/two"}," User-2")),n.a.createElement("li",{className:"list-group-item nav-item "},n.a.createElement(E.b,{exact:!0,activeClassName:"current",to:"/three"},"User-3")),n.a.createElement("li",{className:"list-group-item nav-item "},n.a.createElement(E.b,{exact:!0,activeClassName:"current",to:"/four"},"User-4")),n.a.createElement("li",{className:"list-group-item nav-item "},n.a.createElement(E.b,{exact:!0,activeClassName:"current",to:"/five"},"User-5")))))),n.a.createElement(f.c,null,n.a.createElement(f.a,{exact:!0,path:"/"}," ",n.a.createElement(v,{data:c})," "),n.a.createElement(f.a,{path:"/two"}," ",n.a.createElement(h,{data:o})," "),n.a.createElement(f.a,{path:"/three"}," ",n.a.createElement(y,{data:d})),n.a.createElement(f.a,{path:"/four"}," ",n.a.createElement(N,{data:p})),n.a.createElement(f.a,{path:"/five"},n.a.createElement(b,{data:g})," "))))},x=function(){return n.a.createElement("div",{className:"jumbotron bgFooter py-2"},n.a.createElement("h4",null,"Blog version 2020"),n.a.createElement("p",{className:"lead"},"I\u2019ve been learning React for a few months and I\u2019m doing a few little apps like this to practice React."),n.a.createElement("p",null,"I used : Create-React-App - Bootstrap IV - Axios - ",n.a.createElement("a",{href:"https://jsonplaceholder.typicode.com/"},"Json placeHolder API")),n.a.createElement("p",null,"\xa9 Fevrier 2020 Laurent CAMINADE"))};a(59);var I=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g,null),n.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.b679cf8a.chunk.js.map