(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[820,191],{5191:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=n(2619).Z,a=l(n(7378)),o=l(n(4369));let d={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function i({res:e,err:t}){let n=e&&e.statusCode?e.statusCode:t?t.statusCode:404;return{statusCode:n}}let u={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top",lineHeight:"49px"},h2:{fontSize:14,fontWeight:400,lineHeight:"49px",margin:0}};class s extends(r=a.default.Component){render(){let{statusCode:e,withDarkMode:t=!0}=this.props,n=this.props.title||d[e]||"An unexpected error has occurred";return a.default.createElement("div",{style:u.error},a.default.createElement(o.default,null,a.default.createElement("title",null,e?`${e}: ${n}`:"Application error: a client-side exception has occurred")),a.default.createElement("div",null,a.default.createElement("style",{dangerouslySetInnerHTML:{__html:`body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}${t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":""}`}}),e?a.default.createElement("h1",{className:"next-error-h1",style:u.h1},e):null,a.default.createElement("div",{style:u.desc},a.default.createElement("h2",{style:u.h2},this.props.title||e?n:a.default.createElement(a.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}s.displayName="ErrorPage",s.getInitialProps=i,s.origGetInitialProps=i,t.default=s,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2924:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=(0,n(2619).Z)(n(7378));let l=r.default.createContext({});t.AmpStateContext=l},6139:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function({ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}={}){return e||t&&n}},4369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=s,t.default=void 0;var r=n(6516).Z,l=n(2619).Z,a=(0,n(6808).Z)(n(7378)),o=l(n(7809)),d=n(2924),i=n(2392),u=n(6139);function s(e=!1){let t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(8567);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(c,[]).reverse().concat(s(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return l=>{let a=!0,o=!1;if(l.key&&"number"!=typeof l.key&&l.key.indexOf("$")>0){o=!0;let t=l.key.slice(l.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(l.type){case"title":case"base":t.has(l.type)?a=!1:t.add(l.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(l.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?a=!1:n.add(t);else{let e=l.props[t],n=r[t]||new Set;("name"!==t||!o)&&n.has(e)?a=!1:(n.add(e),r[t]=n)}}}}return a}}()).reverse().map((e,t)=>{let l=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t=r({},e.props||{});return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:l})})}t.default=function({children:e}){let t=a.useContext(d.AmpStateContext),n=a.useContext(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:n,inAmpMode:u.isInAmpMode(t)},e)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7809:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{headManager:t,reduceComponentsToState:n}=e;function d(){if(t&&t.mountedInstances){let l=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(l,e))}}if(l){var i;null==t||null==(i=t.mountedInstances)||i.add(e.children),d()}return a(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),a(()=>(t&&(t._pendingUpdate=d),()=>{t&&(t._pendingUpdate=d)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null};var r=(0,n(6808).Z)(n(7378));let l=!1,a=l?()=>{}:r.useLayoutEffect,o=l?()=>{}:r.useEffect},8567:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0;let n=e=>{};t.warnOnce=n},9514:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n(5191)}])}},function(e){e.O(0,[888,774,179],function(){return e(e.s=9514)}),_N_E=e.O()}]);