(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(39)},34:function(e,t,n){},36:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a,r,o,c=n(0),l=n.n(c),i=n(17),s=n.n(i),u=n(11),m=n(5),p=n(21),d=n(22),h=n(23),f=(n(25),n(6)),g=function(e){return Object.assign(function(t){return{type:e,payload:t}},{type:e})},b=n(7),E=function(e,t){var n=t.payload,a=n.userInfo,r=n.isLoading;return Object(b.a)({},e,{user:a,loading:r})},O=g("USER:LOADING"),j=g("LOADED"),y=(r={loading:!1,user:{}},a={},Object(f.a)(a,O.type,E),Object(f.a)(a,j.type,E),o=a,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;return function(e,t,n){return"function"===typeof e?e(t,n):t}(o[t.type],e,t)}),v=Object(m.combineReducers)({user:y}),w=Object(h.createLogger)(),k=Object(m.createStore)(v,Object(p.composeWithDevTools)(Object(m.applyMiddleware)(d.a,w))),N=(n(34),n(8)),L=n(9),D=n(12),A=n(10),F=n(13),I=n(41),S=n(42),x=(n(36),function(e){function t(){return Object(N.a)(this,t),Object(D.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.loading,a=e.match;return n?"...Loading":t.message?l.a.createElement("h1",null,"Sorry, the user ",l.a.createElement("span",{style:{color:"red"}},a.params.login)," ",t.message):l.a.createElement("div",{className:"card",style:{width:"18rem",textAlign:"left"}},l.a.createElement("img",{className:"card-img-top",src:t.avatar_url,alt:"Card cap"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,t.login),l.a.createElement("h6",null,t.name),l.a.createElement("p",null,t.company),l.a.createElement("p",null,t.location),l.a.createElement("h6",null,"Statistics:"),l.a.createElement("p",null,"Repositories: ",t.public_repos),l.a.createElement("p",null,"Following: ",t.following),l.a.createElement("p",null,"Followers: ",t.followers)))}},{key:"componentDidMount",value:function(){this.props.thuckFetch("https://api.github.com/users/".concat(this.props.match.params.login))}}]),t}(c.Component)),C=Object(u.b)(function(e){return Object(b.a)({},e.user)},{thuckFetch:function(e){return function(t){t(O({isLoading:!0})),fetch(e).then(function(e){return e.json()}).then(function(e){return t(j({userInfo:e,isLoading:!1}))})}}})(x),R=function(e){function t(){return Object(N.a)(this,t),Object(D.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){return l.a.createElement(I.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement(S.a,{exact:!0,path:"/",render:function(){return l.a.createElement("h1",null,"Please, enter login you would like to find into the search line")}}),l.a.createElement(S.a,{path:"/:login",render:function(e){return l.a.createElement(C,e)}}))))))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(u.a,{store:k},l.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.cd000fa9.chunk.js.map