(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{117:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var i=r(0),n=r.n(i);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),d=i,u=b["".concat(o,".").concat(d)]||b[d]||m[d]||a;return r?n.a.createElement(u,c(c({ref:t},l),{},{components:r})):n.a.createElement(u,c({ref:t},l))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var i=r(2),n=r(6),a=(r(0),r(117)),o={title:"microsoft Overview",sidebar_label:"Overview"},c={unversionedId:"websites/microsoft/overview",id:"websites/microsoft/overview",isDocsHomePage:!1,title:"microsoft Overview",description:"see Development Websites Dashboard for details",source:"@site/docs/websites/microsoft/overview.md",slug:"/websites/microsoft/overview",permalink:"/k8-proxy-documentation/docs/websites/microsoft/overview",version:"current",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"gwwebsite Overview",permalink:"/k8-proxy-documentation/docs/websites/gwwebsite/overview"},next:{title:"miniio Overview",permalink:"/k8-proxy-documentation/docs/websites/miniio/overview"}},s=[{value:"Reverse proxy for microsoft website",id:"reverse-proxy-for-microsoft-website",children:[{value:"Demo video",id:"demo-video",children:[]}]},{value:"Requirements",id:"requirements",children:[]},{value:"Installation with deployed icap server",id:"installation-with-deployed-icap-server",children:[]},{value:"Verify the installation",id:"verify-the-installation",children:[]},{value:"Microsoft Slow browsing problem",id:"microsoft-slow-browsing-problem",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"see ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/k8-proxy-documentation/docs/dashboards/websites/development"}),"Development Websites Dashboard for details")),Object(a.b)("h2",{id:"reverse-proxy-for-microsoft-website"},"Reverse proxy for microsoft website"),Object(a.b)("h3",{id:"demo-video"},"Demo video"),Object(a.b)("p",null,Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"http://www.youtube.com/watch?v=d51iV5cEqs8",title:"Microsoft demo"}),Object(a.b)("img",Object(i.a)({parentName:"a"},{src:"http://img.youtube.com/vi/d51iV5cEqs8/0.jpg",alt:null})))),Object(a.b)("h2",{id:"requirements"},"Requirements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Docker"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Kubernetes"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Helm 3")))),Object(a.b)("h2",{id:"installation-with-deployed-icap-server"},"Installation with deployed icap server"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"kubectl create namespace icap-adaptation")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"git clone ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/k8-proxy/gp-microsoft-website.git"}),"https://github.com/k8-proxy/gp-microsoft-website.git"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"git clone ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/k8-proxy/k8-reverse-proxy.git"}),"https://github.com/k8-proxy/k8-reverse-proxy.git")," --recursive && cd k8-reverse-proxy/stable-src/")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Update gwproxy.env with website details i.e ALLOWED_DOMAINS, SUBFILTER_ENV")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Replcae nginx/full.pem ../../gp-microsoft-website/full.pem (gp-microsoft-website is cloned in step 2)")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Build images for squid and nginx. Optionally Images can be pushed to docker repository as well."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"docker build nginx -t <docker registry>/reverse-proxy-nginx:0.0.1\ndocker build squid -t <docker registry>/reverse-proxy-squid:0.0.1\n\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"git clone ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/k8-proxy/s-k8-proxy-rebuild.git"}),"https://github.com/k8-proxy/s-k8-proxy-rebuild.git")," && cd s-k8-proxy-rebuild/stable-src/  ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Update chart/values.yaml"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"set service.icap.enabled=false\nset service.nginx.additionalHosts \n    - www.microsoft.com.glasswall-icap.com\nset service.nginx.url='*.microsoft.com.glasswall-icap.com'\n\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Deploy the helm chart"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"helm --namespace icap-adaptation upgrade --install \\\n   --set image.nginx.repository=glasswallsolutions/reverse-proxy-nginx \\\n   --set image.nginx.tag=0.0.1 \\\n   --set image.squid.repository=glasswallsolutions/reverse-proxy-squid \\\n   --set image.squid.tag=0.0.1 \\\n   --set application.nginx.env.ICAP_URL=icap://54.77.168.168:1344/gw_rebuild \\\n   --set application.squid.env.ICAP_URL=icap://54.77.168.168:1344/gw_rebuild  \\\n   --set application.nginx.env.ALLOWED_DOMAINS='.microsoft.com.glasswall-icap.com\\,www.microsoft.com.glasswall-icap.com' \\\n   --set application.nginx.env.ROOT_DOMAIN='glasswall-icap.com' \\\n   --set application.nginx.env.SUBFILTER_ENV='microsoft.com\\,microsoft.com.glasswall-icap.com' \\\n   --set application.squid.env.ALLOWED_DOMAINS='.microsoft.com.glasswall-icap.com\\,www.microsoft.com.glasswall-icap.com' \n   --set application.squid.env.ROOT_DOMAIN='glasswall-icap.com' \\ \n   --set application.squid.env.ICAP_EXCLUDE_MIME_TYPE='text/html,application/javascript' \\\n   reverse-proxy chart/\n  \n")))),Object(a.b)("h2",{id:"verify-the-installation"},"Verify the installation"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"kubectl get ing -n icap-adaptation (copy the name of ingress name)"),Object(a.b)("li",{parentName:"ol"},"kubectl -n icap-adaptation edit ing <ingress_name_from_step1>"),Object(a.b)("li",{parentName:"ol"},"check spec->rules->host  and spec->tls->hosts check the entries here"),Object(a.b)("li",{parentName:"ol"},"kubectl get deployments -n icap-adaptation"),Object(a.b)("li",{parentName:"ol"},"verify nginx/squid deployment configuration i.e spec->containers->env . properties to check ICAP_URL, ALLOWED_DOMAINS, and SUBFILTER_ENV")),Object(a.b)("h2",{id:"microsoft-slow-browsing-problem"},"Microsoft Slow browsing problem"),Object(a.b)("h1",{id:"changes-in-running-reverse-proxy"},"Changes in running reverse proxy"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"```\n1. kubectl edit deployment reverse-proxy-squid -n icap-adaptation ## You might have different namespace\n2. Add these environment variable under spec-> template -> spec -> containers ->env\n    - name: ICAP_EXCLUDE_MIME_TYPE\n      value: text/html,application/javascript\n    \n")),Object(a.b)("h1",{id:"for-new-proxy"},"For New Proxy"),Object(a.b)("p",null,"Add below line while deploying helm chart"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"--set application.squid.env.ICAP_EXCLUDE_MIME_TYPE='text/html,application/javascript' \\\n\n\n")))}p.isMDXComponent=!0}}]);