(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var u,c,l,s;if(Array.isArray(e)){if((u=e.length)!=o.length)return!1;for(c=u;0!=c--;)if(!a(e[c],o[c]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!o.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!a(c.value[1],o.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((u=e.length)!=o.length)return!1;for(c=u;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((u=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!a(e[l[c]],o[l[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,i=n(7294),a=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function s(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),s()},o.componentDidUpdate=function(){s()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},o.render=function(){return a.createElement(r,this.props)},i}(i.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",u),f}}},8227:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),i=n(5444);function a(e){e.siteTitle;var t=(0,r.useState)(!1),n=t[0],a=t[1];return r.createElement("div",{className:"px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"},r.createElement("div",{className:"relative flex items-center justify-between"},r.createElement("div",{className:"flex items-center"},r.createElement(i.Link,{to:"/","aria-label":"Warewulf",title:"Warewulf",className:"inline-flex items-center mr-8"},r.createElement("img",{className:"w-36",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3MzYuNiAzMjYuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzM2LjYgMzI2LjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMjI5NTI5O30KCS5zdDF7ZmlsbDojRkZDMDAwO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjA4LDg4LjVjLTIuMi0xLjgtMy44LTQuMy01LjktNi4zYy0yLjItMi00LjYtMy44LTYuMy01LjNjLTcuMSw4LjMtMTMuMSwxNi4xLTE5LjksMjMuMgoJCWMtNy4yLDcuNS0xNSwxNC40LTI2LDE2LjJjLTYuNCwxLjEtMTEuNSw0LjYtMTUuOSw5LjljLTkuNiwxMS42LTIxLjQsMjAuNi0zNS40LDI2LjNjLTguMiwzLjQtMTYuOCw2LjEtMjUuNyw5LjMKCQljMTAuNCwxMC4zLDIxLjIsMTkuNCwzNy42LDE4LjFDMTA3LDE4Mi4zLDk5LDE5NCw5MC4yLDIwMS4zYy0zLDIuNS02LjIsNC43LTEwLjEsNy42YzUuNy0wLjQsMTAuMi0wLjcsMTUuNS0xLjEKCQljLTcuNywxNi4zLTQuOSwyNC0yLjQsNDEuMWMwLDAsMTYuOS01NS41LDQwLjItNjEuOGMwLjEsMTAuMiwyLjEsMTkuNiw4LDI3LjljMC4zLTAuMiwwLjYtMC4zLDAuNS0wLjRjMC0yLjQtMC4xLTQuOC0wLjEtNy4yCgkJYzAuOS00My4zLDE4LjgtNzksNDkuMy0xMDljMC43LTAuNywxLjUtMS40LDIuNC0xLjVjMy42LTAuNyw3LjItMS4zLDExLjItMS45YzAuMyw2LjctMywxMi02LjksMTcuMmMwLDAtOS40LDExLTEwLjUsMTQuOAoJCXMtMS43LDE0LDMuNSwxNy44Yy0wLjItMS44LTAuNC0zLjctMC41LTUuNWMtMC4xLTcuMyw3LjItMTguMSw5LjgtMjBjMi4zLTEuNyw0LjctMy4yLDcuMS00LjhDMjE1LjQsMTA4LjgsMjE1LjgsOTQuOCwyMDgsODguNXoKCQkgTTE0My4xLDE0MC40Yy0wLjUtMTIuNSwzLjktMTcuOSwxMy4zLTE0LjRDMTUxLjgsMTMxLDE0Ny40LDEzNS43LDE0My4xLDE0MC40eiIvPgoJPHBhdGggaWQ9IlhNTElEXzAwMDAwMTA4Mjg3MzA2NTE1NTM3NjcyNzMwMDAwMDE1MTM0MzE2Nzc0ODIwMzc5ODE2XyIgY2xhc3M9InN0MCIgZD0iTTIyMi4zLDEzMC4zYy0wLjUtNC4zLTMuOC02LjktNy4zLTYuMQoJCXMtOS40LDguOC03LjMsOC42YzIuNS0wLjIsNy43LDAuNyw3LjcsMC43YzEuOCwyLjgtMC45LDYtMi45LDcuMmMtNC4zLDIuNi03LjcsNi44LTEyLjEsOS4zYy02LjgsMy44LTE0LjEsNi44LTIxLjIsMTAuMwoJCWMtOC40LDQuMS0xMC4zLDE2LjItMy42LDIyLjJjMi40LTcuOCwzLjMtOC45LDcuNC05LjJjLTAuOCwyNi41LDIuMywzOSwxMy4zLDUxLjNjLTAuNC0xLjYtMC45LTMuMy0xLjMtNC45CgkJYy0wLjQtMS44LTAuOS0zLjYtMS4yLTUuNGMtNC4zLTIxLjYtMC45LTQxLjQsMTMuNS01OC43YzMuNS00LjEsNy4yLTguMSwxMS4xLTExLjlDMjIyLjEsMTM5LjksMjIyLjgsMTM1LjIsMjIyLjMsMTMwLjN6Ii8+CjwvZz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTI2OC40LDEyMS42Yy0xMS41LTUwLjctNjItODIuNS0xMTIuNy03MUMxMjQuMSw1Ny43LDk5LjksODAsODguOSwxMDhjLTIuOSw2LTUuMiwxMi40LTYuNywxOQoJYzEtMTguNyw3LjMtMzYuOCwxOC41LTUyLjRjMTUuNS0yMS42LDM4LjUtMzUuOSw2NC43LTQwLjJzNTIuNiwxLjgsNzQuMiwxNy40YzIxLjYsMTUuNSwzNS45LDM4LjUsNDAuMiw2NC43CgljNi44LDQxLjUtMTMuMiw4MS42LTQ3LjcsMTAxLjlDMjYxLjUsMTk2LjksMjc2LjksMTU5LjMsMjY4LjQsMTIxLjZ6Ii8+CjxnPgoJPHBvbHlnb24gcG9pbnRzPSIyMzkuNywyNzIgMjMyLjUsMjQ4LjEgMjE5LjcsMjQ4LjEgMjEyLDI3MS43IDIwNC44LDI0OC4xIDE5MC40LDI0OC4xIDIwMy43LDI4OS42IDIxOC43LDI4OS42IDIyNS43LDI2Ny40IAoJCTIzMi40LDI4OS42IDI0Ny40LDI4OS42IDI2MC42LDI0OC4xIDI0Ny40LDI0OC4xIAkiLz4KCTxwYXRoIGQ9Ik0yODYuNiwyNDguMWwtMTguMSw0MS40aDE0LjJsMi44LTcuMmgxNS44bDIuOCw3LjJoMTQuNGwtMTguMS00MS40SDI4Ni42eiBNMjg5LjMsMjcyLjNsNC0xMC40bDQsMTAuNEgyODkuM3oiLz4KCTxwYXRoIGQ9Ik0zNjkuNSwyNzJjMS41LTIuMywyLjMtNS4xLDIuMy04LjNjMC0zLjItMC44LTYtMi4zLTguM3MtMy43LTQuMi02LjUtNS40Yy0yLjgtMS4zLTYuMi0xLjktMTAtMS45aC0xOS45djQxLjRoMTR2LTEwLjQKCQloMy44bDcsMTAuNGgxNC45bC04LjctMTIuN0MzNjYuMywyNzUuNiwzNjguMSwyNzQsMzY5LjUsMjcyeiBNMzU2LjMsMjYwLjJjMC45LDAuOSwxLjQsMi4xLDEuNCwzLjZzLTAuNSwyLjctMS40LDMuNgoJCXMtMi40LDEuMy00LjMsMS4zaC01LjFWMjU5aDUuMUMzNTMuOSwyNTguOSwzNTUuNCwyNTkuMywzNTYuMywyNjAuMnoiLz4KCTxwb2x5Z29uIHBvaW50cz0iNDAzLDI3My42IDQyMC41LDI3My42IDQyMC41LDI2My41IDQwMywyNjMuNSA0MDMsMjU4LjcgNDIzLDI1OC43IDQyMywyNDguMSAzODkuMywyNDguMSAzODkuMywyODkuNiA0MjMuNywyODkuNiAKCQk0MjMuNywyNzkgNDAzLDI3OSAJIi8+Cgk8cG9seWdvbiBwb2ludHM9IjQ4Ny4zLDI3MiA0ODAuMSwyNDguMSA0NjcuMiwyNDguMSA0NTkuNiwyNzEuNyA0NTIuNCwyNDguMSA0MzgsMjQ4LjEgNDUxLjMsMjg5LjYgNDY2LjIsMjg5LjYgNDczLjMsMjY3LjQgCgkJNDgwLDI4OS42IDQ5NC45LDI4OS42IDUwOC4yLDI0OC4xIDQ5NC45LDI0OC4xIAkiLz4KCTxwYXRoIGQ9Ik01NTAsMjcwLjVjMCwzLjItMC42LDUuNC0xLjcsNi43Yy0xLjEsMS4zLTIuNywyLTQuNiwyYy0xLjksMC0zLjUtMC43LTQuNi0ycy0xLjctMy42LTEuNy02Ljd2LTIyLjRoLTE0djIyLjgKCQljMCw2LjIsMS44LDExLDUuMywxNC40YzMuNiwzLjQsOC41LDUuMSwxNC45LDUuMXMxMS4zLTEuNywxNC45LTUuMWMzLjYtMy40LDUuMy04LjIsNS4zLTE0LjR2LTIyLjhINTUwVjI3MC41eiIvPgoJPHBvbHlnb24gcG9pbnRzPSI1OTYuNiwyNDguMSA1ODIuNiwyNDguMSA1ODIuNiwyODkuNiA2MTUuMywyODkuNiA2MTUuMywyNzguNyA1OTYuNiwyNzguNyAJIi8+Cgk8cG9seWdvbiBwb2ludHM9IjY2NC4yLDI1OC43IDY2NC4yLDI0OC4xIDYzMC41LDI0OC4xIDYzMC41LDI4OS42IDY0NC41LDI4OS42IDY0NC41LDI3Ni4zIDY2MS44LDI3Ni4zIDY2MS44LDI2NS44IDY0NC41LDI2NS44IAoJCTY0NC41LDI1OC43IAkiLz4KPC9nPgo8L3N2Zz4K"})),r.createElement("ul",{className:"flex items-center hidden space-x-8 lg:flex"},r.createElement("li",null,r.createElement(i.Link,{to:"/news","aria-label":"News",title:"News",className:"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-500"},"News")),r.createElement("li",null,r.createElement("a",{href:"https://documentation.warewulf.org/docs/","aria-label":"Documentation",title:"Documentation",className:"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-500"},"Documentation")),r.createElement("li",null,r.createElement(i.Link,{to:"/help","aria-label":"Help",title:"Help",className:"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-500"},"Getting Help")))),r.createElement("ul",{className:"flex items-center hidden space-x-8 lg:flex"},r.createElement("li",null,r.createElement(i.Link,{to:"https://github.com/hpcng/warewulf","aria-label":"GitHub",title:"GitHub",className:"text-gray-700 hover:text-green-500 transition-colors duration-200"},r.createElement("svg",{viewBox:"0 0 24 24",className:"w-6",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},r.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})))),r.createElement("li",null,r.createElement("a",{href:"/getting-started",className:"inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-900 hover:bg-green-800 focus:shadow-outline focus:outline-none","aria-label":"Sign up",title:"Sign up"},"Get Started"))),r.createElement("div",{className:"lg:hidden"},r.createElement("button",{"aria-label":"Open Menu",title:"Open Menu",className:"p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50",onClick:function(){return a(!0)}},r.createElement("svg",{className:"w-5 text-gray-600",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:"M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"}),r.createElement("path",{fill:"currentColor",d:"M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"}),r.createElement("path",{fill:"currentColor",d:"M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"}))),n&&r.createElement("div",{className:"absolute top-0 left-0 w-full"},r.createElement("div",{className:"p-5 bg-white border rounded shadow-sm"},r.createElement("div",{className:"flex items-center justify-between mb-4"},r.createElement("div",null,r.createElement("a",{href:"/","aria-label":"Company",title:"Company",className:"inline-flex items-center"},r.createElement("svg",{className:"w-8 text-green-500",viewBox:"0 0 24 24",strokeLinejoin:"round",strokeWidth:"2",strokeLinecap:"round",strokeMiterlimit:"10",stroke:"currentColor",fill:"none"},r.createElement("rect",{x:"3",y:"1",width:"7",height:"12"}),r.createElement("rect",{x:"3",y:"17",width:"7",height:"6"}),r.createElement("rect",{x:"14",y:"1",width:"7",height:"6"}),r.createElement("rect",{x:"14",y:"11",width:"7",height:"12"})),r.createElement("span",{className:"ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"},"Company"))),r.createElement("div",null,r.createElement("button",{"aria-label":"Close Menu",title:"Close Menu",className:"p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",onClick:function(){return a(!1)}},r.createElement("svg",{className:"w-5 text-gray-600",viewBox:"0 0 24 24"},r.createElement("path",{fill:"currentColor",d:"M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"}))))),r.createElement("nav",null,r.createElement("ul",{className:"space-y-4"},r.createElement("li",null,r.createElement("a",{href:"/","aria-label":"Our product",title:"Our product",className:"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-500"},"Product")),r.createElement("li",null,r.createElement("a",{href:"/","aria-label":"Our product",title:"Our product",className:"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-500"},"Features")),r.createElement("li",null,r.createElement("a",{href:"/","aria-label":"Product pricing",title:"Product pricing",className:"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-500"},"Pricing")),r.createElement("li",null,r.createElement("a",{href:"/","aria-label":"About us",title:"About us",className:"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-500"},"About us")),r.createElement("li",null,r.createElement("a",{href:"/","aria-label":"Sign in",title:"Sign in",className:"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-500"},"Sign in")),r.createElement("li",null,r.createElement("a",{href:"/",className:"inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none","aria-label":"Sign up",title:"Sign up"},"Sign up")))))))))}a.defaultProps={siteTitle:""};var o=a,u=function(){return r.createElement("footer",{className:"bg-white"},r.createElement("div",{className:"max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"},r.createElement("nav",{className:"-mx-5 -my-2 flex flex-wrap justify-center","aria-label":"Footer"},[{name:"Home",href:"/"},{name:"News",href:"/news"},{name:"Getting Help",href:"/help"},{name:"Contact",href:"/contact"}].map((function(e){return r.createElement("div",{key:e.name,className:"px-5 py-2"},r.createElement(i.Link,{to:e.href,className:"text-base font-medium tracking-wide text-gray-700 hover:text-blue-900"},e.name))}))),r.createElement("p",{className:"mt-8 text-center text-base text-gray-500"},"© 2021 HPCng. All rights reserved.")))},c=function(e){var t,n=e.children,a=(0,i.useStaticQuery)("3649515864");return r.createElement(r.Fragment,null,r.createElement(o,{siteTitle:(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement("main",null,n),r.createElement(u,null))}},3751:function(e,t,n){"use strict";n.d(t,{Z:function(){return we}});var r,i,a,o,u=n(7294),c=n(5697),l=n.n(c),s=n(4839),f=n.n(s),y=n(2993),M=n.n(y),L=n(6494),d=n.n(L),m="bodyAttributes",p="htmlAttributes",w="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},j=(Object.keys(g).map((function(e){return g[e]})),"charset"),N="cssText",T="href",h="http-equiv",C="innerHTML",I="itemprop",b="name",E="property",x="rel",S="src",D="target",v={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},O="defaultTitle",A="defer",z="encodeSpecialCharacters",k="onChangeClientState",Y="titleTemplate",P=Object.keys(v).reduce((function(e,t){return e[v[t]]=t,e}),{}),Q=[g.NOSCRIPT,g.SCRIPT,g.STYLE],U="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},R=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=q(e,g.TITLE),n=q(e,Y);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=q(e,O);return t||r||void 0},F=function(e){return q(e,k)||function(){}},_=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return J({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var a=r[i].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),o=0;o<a.length;o++){var u=a[o],c=u.toLowerCase();-1===t.indexOf(c)||n===x&&"canonical"===e[n].toLowerCase()||c===x&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==C&&u!==N&&u!==I||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][l]&&(i[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var u=a[o],c=d()({},r[u],i[u]);r[u]=c}return e}),[]).reverse()},q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,y=e.titleAttributes;ce(g.BODY,r),ce(g.HTML,i),ue(f,y);var M={baseTag:le(g.BASE,n),linkTags:le(g.LINK,a),metaTags:le(g.META,o),noscriptTags:le(g.NOSCRIPT,u),scriptTags:le(g.SCRIPT,l),styleTags:le(g.STYLE,s)},L={},d={};Object.keys(M).forEach((function(e){var t=M[e],n=t.newTags,r=t.oldTags;n.length&&(L[e]=n),r.length&&(d[e]=M[e].oldTags)})),t&&t(),c(e,L,d)},oe=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(g.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(U),i=r?r.split(","):[],a=[].concat(i),o=Object.keys(t),u=0;u<o.length;u++){var c=o[u],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===i.indexOf(c)&&i.push(c);var s=a.indexOf(c);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);i.length===a.length?n.removeAttribute(U):n.getAttribute(U)!==o.join(",")&&n.setAttribute(U,o.join(","))}},le=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===N)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(U,"true"),i.some((function(e,t){return o=t,n.isEqualNode(e)}))?i.splice(o,1):a.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[v[n]||n]=e[n],t}),t)},ye=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[U]=!0,i=fe(n,r),[u.createElement(g.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=se(n),a=oe(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+W(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case m:case p:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[U]=!0,r);return Object.keys(t).forEach((function(e){var n=v[e]||e;if(n===C||n===N){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),u.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===C||e===N)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+i:i}),""),a=r.innerHTML||r.cssText||"",o=-1===Q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},Me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,y=e.titleAttributes;return{base:ye(g.BASE,t,r),bodyAttributes:ye(m,n,r),htmlAttributes:ye(p,i,r),link:ye(g.LINK,a,r),meta:ye(g.META,o,r),noscript:ye(g.NOSCRIPT,u,r),script:ye(g.SCRIPT,c,r),style:ye(g.STYLE,l,r),title:ye(g.TITLE,{title:f,titleAttributes:y},r)}},Le=f()((function(e){return{baseTag:V([T,D],e),bodyAttributes:_(m,e),defer:q(e,A),encode:q(e,z),htmlAttributes:_(p,e),linkTags:X(g.LINK,[x,T],e),metaTags:X(g.META,[b,j,h,E,I],e),noscriptTags:X(g.NOSCRIPT,[C],e),onChangeClientState:F(e),scriptTags:X(g.SCRIPT,[S,C],e),styleTags:X(g.STYLE,[N],e),title:K(e),titleAttributes:_(w,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),Me)((function(){return null})),de=(i=Le,o=a=function(e){function t(){return B(this,t),Z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!M()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return J({},r,((t={})[n.type]=[].concat(r[n.type]||[],[J({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(r.type){case g.TITLE:return J({},i,((t={})[r.type]=o,t.titleAttributes=J({},a),t));case g.BODY:return J({},i,{bodyAttributes:J({},a)});case g.HTML:return J({},i,{htmlAttributes:J({},a)})}return J({},i,((n={})[r.type]=J({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=J({},t);return Object.keys(e).forEach((function(t){var r;n=J({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return u.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)}(G(i,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=G(e,["children"]),r=J({},n);return t&&(r=this.mapChildrenToProps(t,r)),u.createElement(i,r)},R(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(u.Component),a.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=Me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);de.renderStatic=de.rewind;var me=n(5444);function pe(e){var t,n,r=e.description,i=e.lang,a=e.meta,o=e.title,c=(0,me.useStaticQuery)("63159454").site,l=r||c.siteMetadata.description,s=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return u.createElement(de,{htmlAttributes:{lang:i},title:o,titleTemplate:s?"%s | "+s:null,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=c.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(a)})}pe.defaultProps={lang:"en",meta:[],description:""};var we=pe}}]);
//# sourceMappingURL=commons-a0db6a2ed78d513ef28d.js.map