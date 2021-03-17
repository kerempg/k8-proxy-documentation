(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{115:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=b(r),m=n,d=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return r?a.a.createElement(d,l(l({ref:t},p),{},{components:r})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),o=(r(0),r(115)),i={title:"Sharepoint Server VM Setup Overview",sidebar_label:"VM Setup Overview"},l={unversionedId:"websites/sharepoint/server/server-setup/1. overview",id:"websites/sharepoint/server/server-setup/1. overview",isDocsHomePage:!1,title:"Sharepoint Server VM Setup Overview",description:"Installation Guide",source:"@site/docs/websites/sharepoint/server/server-setup/1. overview.md",slug:"/websites/sharepoint/server/server-setup/1. overview",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/server/server-setup/1. overview",version:"current",sidebar_label:"VM Setup Overview",sidebar:"docs",previous:{title:"Sharepoint Online Solution Deployment",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/online/sharepoint-online-solution-deployment"},next:{title:"Sharepoint Server Manual Install",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/server/server-setup/2. sp-vm-manual-install"}},s=[{value:"Installation Guide",id:"installation-guide",children:[{value:"VM Resources",id:"vm-resources",children:[]}]}],p={rightToc:s};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"installation-guide"},"Installation Guide"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://github.com/k8-proxy/k8-proxy-documentation/blob/master/docs/websites/sharepoint/server/server-setup/2.%20sp-vm-manual-install.md"},"Install Sharepoint 2019 in VM")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://github.com/k8-proxy/k8-proxy-documentation/blob/master/docs/websites/sharepoint/server/server-setup/3.%20sp-vhd-to-ova.md"},"Sharepoint 2019 VHD to OVA")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://github.com/k8-proxy/k8-proxy-documentation/blob/master/docs/websites/sharepoint/server/server-setup/4.%20sp-ova-aws.md"},"Install Sharepoint 2019 OVA in AWS")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://github.com/k8-proxy/k8-proxy-documentation/blob/master/docs/websites/sharepoint/server/server-setup/5.%20export-ova-aws.md"},"Export OVA from AWS"))),Object(o.b)("h3",{id:"vm-resources"},"VM Resources"),Object(o.b)("h4",{id:"downloads"},"Downloads:"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://glasswall-sow-ova.s3-eu-west-1.amazonaws.com/vms/sharepoint/sp-svr-plugin-vm.ova"},"OVA - Sharepoint 2019 + GW Plugin")),Object(o.b)("h4",{id:"credentials"},"Credentials:"),Object(o.b)("p",null,"VM Name: vm-sp2019"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"What"),Object(o.b)("th",{parentName:"tr",align:null},"Username"),Object(o.b)("th",{parentName:"tr",align:null},"Password"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"VM Login credentials"),Object(o.b)("td",{parentName:"tr",align:null},"xamadmin"),Object(o.b)("td",{parentName:"tr",align:null},"dSYY7ILC0mNh")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"MS SQL credentials"),Object(o.b)("td",{parentName:"tr",align:null},"sqladmin"),Object(o.b)("td",{parentName:"tr",align:null},"Password@123")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Sharepoint Access :38821"),Object(o.b)("td",{parentName:"tr",align:null},"XAMTESTADDS\\sqladmin"),Object(o.b)("td",{parentName:"tr",align:null},"Password@123")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Local User"),Object(o.b)("td",{parentName:"tr",align:null},"Member1"),Object(o.b)("td",{parentName:"tr",align:null},"B7REPvf22NelTBuXjD55")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Local User"),Object(o.b)("td",{parentName:"tr",align:null},"Visitor1"),Object(o.b)("td",{parentName:"tr",align:null},"B7REPvf22NelTBuXjD55")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Local User"),Object(o.b)("td",{parentName:"tr",align:null},"Owner1"),Object(o.b)("td",{parentName:"tr",align:null},"B7REPvf22NelTBuXjD55")))))}b.isMDXComponent=!0}}]);