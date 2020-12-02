(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),i=r(6),a=(r(0),r(121)),o={title:"fortinet Overview",sidebar_label:"Overview"},c={unversionedId:"websites/fortinet/overview",id:"websites/fortinet/overview",isDocsHomePage:!1,title:"fortinet Overview",description:"see Development Websites Dashboard for details",source:"@site/docs/websites/fortinet/overview.md",slug:"/websites/fortinet/overview",permalink:"/k8-proxy-documentation/docs/websites/fortinet/overview",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"emma-dataport Overview",permalink:"/k8-proxy-documentation/docs/websites/emma-dataport/overview"},next:{title:"gov.uk Overview",permalink:"/k8-proxy-documentation/docs/websites/gov.uk/overview"}},p=[{value:"Reverse proxy for gp-fortinet-website",id:"reverse-proxy-for-gp-fortinet-website",children:[{value:"Demo video",id:"demo-video",children:[]}]},{value:"Requirements",id:"requirements",children:[]},{value:"Installation with deployed icap server",id:"installation-with-deployed-icap-server",children:[]},{value:"Verify the installation",id:"verify-the-installation",children:[]}],l={rightToc:p};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"see ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/k8-proxy-documentation/docs/dashboards/websites/development"}),"Development Websites Dashboard for details")),Object(a.b)("h2",{id:"reverse-proxy-for-gp-fortinet-website"},"Reverse proxy for gp-fortinet-website"),Object(a.b)("h3",{id:"demo-video"},"Demo video"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.youtube.com/watch?v=21xG3H56kSA",title:"Fortinet demo"}),Object(a.b)("img",Object(n.a)({parentName:"a"},{src:"http://img.youtube.com/vi/21xG3H56kSA/0.jpg",alt:null})))),Object(a.b)("h2",{id:"requirements"},"Requirements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Docker"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Kubernetes"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Helm 3")))),Object(a.b)("h2",{id:"installation-with-deployed-icap-server"},"Installation with deployed icap server"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"kubectl create namespace icap-adaptation")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"git clone ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/k8-proxy/gp-fortinet-website.git"}),"https://github.com/k8-proxy/gp-fortinet-website.git"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"git clone ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/k8-proxy/k8-reverse-proxy.git"}),"https://github.com/k8-proxy/k8-reverse-proxy.git")," --recursive && cd k8-reverse-proxy/stable-src/")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Update gwproxy.env with website details i.e ALLOWED_DOMAINS, SUBFILTER_ENV")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Replcae nginx/full.pem ../../gp-fortinet-website/full.pem (gp-fortinet-website is cloned in step 2)")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Build images for squid and nginx. Optionally Images can be pushed to docker repository as well."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"docker build nginx -t <docker registry>/reverse-proxy-nginx:0.0.1\ndocker build squid -t <docker registry>/reverse-proxy-squid:0.0.1\n\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"git clone ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/k8-proxy/s-k8-proxy-rebuild.git"}),"https://github.com/k8-proxy/s-k8-proxy-rebuild.git")," && cd s-k8-proxy-rebuild/stable-src/  ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Update chart/values.yaml"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"set service.icap.enabled=false\nset service.nginx.additionalHosts \n    - www.fortinet.com.glasswall-icap.com\nset service.nginx.url=fortinet.com.glasswall-icap.com\n\n"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Deploy the helm chart"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"helm --namespace icap-adaptation upgrade --install \\\n   --set image.nginx.repository=glasswallsolutions/reverse-proxy-nginx \\\n   --set image.nginx.tag=0.0.1 \\\n   --set image.squid.repository=glasswallsolutions/reverse-proxy-squid \\\n   --set image.squid.tag=0.0.1 \\\n   --set application.nginx.env.ICAP_URL=icap://54.77.168.168:1344/gw_rebuild \\\n   --set application.squid.env.ICAP_URL=icap://54.77.168.168:1344/gw_rebuild \\\n   --set application.nginx.env.ALLOWED_DOMAINS='fortinet.com.glasswall-icap.com\\,www.fortinet.com.glasswall-icap.com' \\\n   --set application.nginx.env.ROOT_DOMAIN='glasswall-icap.com' \\\n   --set application.nginx.env.SUBFILTER_ENV='fortinet.com\\,fortinet.com.glasswall-icap.com' \\\n   --set application.squid.env.ALLOWED_DOMAINS='fortinet.com.glasswall-icap.com\\,www.fortinet.com.glasswall-icap.com' \\\n   --set application.squid.env.ROOT_DOMAIN='glasswall-icap.com' \\\n   reverse-proxy chart/\n  \n")))),Object(a.b)("h2",{id:"verify-the-installation"},"Verify the installation"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"kubectl get ing -n icap-adaptation (copy the name of ingress name)"),Object(a.b)("li",{parentName:"ol"},"kubectl -n icap-adaptation edit ing <ingress_name_from_step1>"),Object(a.b)("li",{parentName:"ol"},"check spec->rules->host  and spec->tls->hosts check the entries here"),Object(a.b)("li",{parentName:"ol"},"kubectl get deployments -n icap-adaptation"),Object(a.b)("li",{parentName:"ol"},"verify nginx/squid deployment configuration i.e spec->containers->env . properties to check ICAP_URL, ALLOWED_DOMAINS, and SUBFILTER_ENV")),Object(a.b)("p",null,"..."))}s.isMDXComponent=!0},121:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(r),u=n,d=b["".concat(o,".").concat(u)]||b[u]||m[u]||a;return r?i.a.createElement(d,c(c({ref:t},l),{},{components:r})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);