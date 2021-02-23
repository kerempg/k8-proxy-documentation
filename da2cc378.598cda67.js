(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),l=(n(0),n(115)),o={title:"Sharepoint Self-Hosted Plugin Uninstall",sidebar_label:"Plugin Uninstall"},a={unversionedId:"websites/sharepoint/self-hosted/sp-plugin-uninstall",id:"websites/sharepoint/self-hosted/sp-plugin-uninstall",isDocsHomePage:!1,title:"Sharepoint Self-Hosted Plugin Uninstall",description:"Overview",source:"@site/docs/websites/sharepoint/self-hosted/sp-plugin-uninstall.md",slug:"/websites/sharepoint/self-hosted/sp-plugin-uninstall",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/self-hosted/sp-plugin-uninstall",version:"current",sidebar_label:"Plugin Uninstall",sidebar:"docs",previous:{title:"Sharepoint Self-Hosted Plugin",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/self-hosted/sp-plugin-install"},next:{title:"Sharepoint Self-Hosted OVA",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/self-hosted/sp-vhd-to-ova"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Removing File Handler V1 Plugin",id:"removing-file-handler-v1-plugin",children:[]}],c={rightToc:s};function u(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"overview"},"Overview"),Object(l.b)("p",null,"The Sharepoint Self-Hosted plugin allows to delegate all download and uploads activities in the SharePoint User Interface to the GlassWall Rebuild engine. This keeps the all sharepoint documents safe."),Object(l.b)("h2",{id:"removing-file-handler-v1-plugin"},"Removing File Handler V1 Plugin"),Object(l.b)("p",null,"To remove the File Handler, firstly we need to identify whether the application plugin has been installed on the machine or not. To identify the installation status, Open SharePoint 2019 Management Shell and run below cmdlet."),Object(l.b)("p",null,Object(l.b)("img",{src:n(298).default})),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"}," ",Object(l.b)("strong",{parentName:"em"},"Get-SPSolution")," ")),Object(l.b)("p",null,Object(l.b)("img",{src:n(299).default})),Object(l.b)("p",null,"If the output prompt for the FilehandlerV1.wsp, it has been installed. Else we don't have any FIlehandlerV1.wsp has not been installed."),Object(l.b)("p",null,"For the removal of this plugin, download 'RemoveFileHandler.PS1' from the below git location."),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/SelfHosted/installer"},"https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/SelfHosted/installer")),Object(l.b)("p",null,"Once this has been downloaded in the SharePoint machine, Open SharePoint 2019 Management Shell"),Object(l.b)("p",null,Object(l.b)("img",{src:n(300).default})),Object(l.b)("p",null,"Locate the downloaded file through SharePoint 2019 Management Shell and run below cmdlet"),Object(l.b)("p",null,"'_ **.\\RemoveFileHandler.PS1'"),Object(l.b)("p",null,Object(l.b)("img",{src:n(301).default})),Object(l.b)("p",null,"If the error 'PSSECURITYEXCEPTION' occurs, then do as below:\nWith PowerShell, you must ensure Get-ExecutionPolicy is not Restricted. We suggest using Bypass to bypass the policy to get things installed or AllSigned for quite a bit more security.\nRun Get-ExecutionPolicy. If it returns Restricted, then run Set-ExecutionPolicy AllSigned or Set-ExecutionPolicy Bypass -Scope Process.\nsee ",Object(l.b)("a",{parentName:"p",href:"https://go.microsoft.com/fwlink/?LinkID=135170"},"https://go.microsoft.com/fwlink/?LinkID=135170")),Object(l.b)("p",null,"Once, the cmdlet ran successfully. Validate the SharePoint Plugin running below cmdlet."),Object(l.b)("p",null,"'",Object(l.b)("em",{parentName:"p"}," ",Object(l.b)("strong",{parentName:"em"},"Get-SPSolution")," "),"'"),Object(l.b)("p",null,"This time it should not prompt for the FileHandlerV1.wsp"),Object(l.b)("p",null,Object(l.b)("img",{src:n(302).default})))}u.isMDXComponent=!0},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||l;return n?i.a.createElement(f,a(a({ref:t},c),{},{components:n})):i.a.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var c=2;c<l;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},298:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image029-dca10b6f402b759f23f77ec427b4711f.png"},299:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image030-4c421a1133721eaa7ade83f0d7ec64c5.png"},300:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image031-e571752be8c71825524f8bc0f683c6ca.png"},301:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image032-6b2b0f20e2a8df48529c60d5c70e766a.png"},302:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image033-1113ec4c79c662d50211aa5178d20e6f.png"}}]);