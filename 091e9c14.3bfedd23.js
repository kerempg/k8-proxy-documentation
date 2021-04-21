(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{55:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),i=(n(0),n(91)),o={title:"Sharepoint Online Overview",sidebar_label:"Overview"},c={unversionedId:"products/sharepoint plugin/web/overview",id:"products/sharepoint plugin/web/overview",isDocsHomePage:!1,title:"Sharepoint Online Overview",description:"see Development Websites Dashboard for details",source:"@site/docs/products/sharepoint plugin/web/overview.md",slug:"/products/sharepoint plugin/web/overview",permalink:"/k8-proxy-documentation/docs/products/sharepoint plugin/web/overview",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Sharepoint Online File Handler App Uninstall",permalink:"/k8-proxy-documentation/docs/products/sharepoint plugin/server/sharepoint-server-solution-uninstall"}},s=[{value:"Requirements",id:"requirements",children:[]},{value:"Preparation",id:"preparation",children:[{value:"Finding domains of interest",id:"finding-domains-of-interest",children:[]},{value:"Configuration",id:"configuration",children:[]}]},{value:"Installation",id:"installation",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"see ",Object(i.b)("a",{parentName:"p",href:"../../../dashboards/websites/development.md"},"Development Websites Dashboard for details")),Object(i.b)("h1",{id:"reverse-proxy-configuration-for-saaspoc1sharepointcom"},"Reverse proxy configuration for saaspoc1.sharepoint.com"),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Ubuntu LTS")," (Tested on Ubuntu 18.04 LTS)*")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Docker"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Docker compose"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Git")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"*WSL (Windows Subsystem Linux) is not supported")),Object(i.b)("h2",{id:"preparation"},"Preparation"),Object(i.b)("p",null,"This project doesn't apply URL rewriting\nWe needed to check the website requests to check domains of interest, (domains that should be proxied), which typically are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Website main domain and www subdomain (if applicable)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Domains used in redirects between website pages (example: authentication redirections)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Domains that hosts files that should be rebuilt against Glasswall rebuild engine"))),Object(i.b)("h3",{id:"finding-domains-of-interest"},"Finding domains of interest"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open a browser that included dev tools (i.e : ",Object(i.b)("strong",{parentName:"p"},"Mozilla Firefox"),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open dev tools and switch to ",Object(i.b)("strong",{parentName:"p"},"Network")," tab (CTRL+SHIFT+E in ",Object(i.b)("strong",{parentName:"p"},"Firefox"),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Visit target website main page, surf the website and try to download files while watching requested domains ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Save domains in question to be used in configuration"))),Object(i.b)("h3",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Tweak ",Object(i.b)("strong",{parentName:"p"},"gwproxy.env")," according to our configuration (a pre-configured file already included in the repository), This is a variables definition example: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ROOT_DOMAIN"),": the domain appended to the original website domain, typically: glasswall-icap.com"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ALLOWED_DOMAINS")," : Comma separated domains accepted by the proxy, typically this should be domains of interest (figured out in the previous step) with the ",Object(i.b)("inlineCode",{parentName:"li"},"ROOT_DOMAIN")," value appended"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ICAP_URL")," : the URL of the ICAP server either running on a docker on the same machine or through a load-balancer server."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SQUID_IP")," IP address of squid proxy, used by nginx, should be only changed on advanced usage of the docker image (example: Kubernetes)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SUBFILTER_ENV"),": Space separated text substitution rules in response body, formatted as ",Object(i.b)("strong",{parentName:"li"},"match,replace")," , used for URL rewriting as in ",Object(i.b)("strong",{parentName:"li"},".gov.uk,.gov.uk.glasswall-icap.com")," , but since this project doesn't apply URL rewriting it will be an empty string. ")),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Execute the following to install the dependencies mentioned above"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},'  sudo apt install -y curl git\n  curl https://get.docker.com | bash -\n  sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n  sudo chmod +x /usr/local/bin/docker-compose\n  sudo usermod -aG docker $(whoami)\n')),Object(i.b)("p",{parentName:"li"},"You need to logout and re-login after this step")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Prepare the repositories"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  git clone --recursive https://github.com/k8-proxy/k8-reverse-proxy\n  git clone https://github.com/k8-proxy/gp-sharepoint\n  wget https://github.com/filetrust/sdk-rebuild-eval/raw/master/libs/rebuild/linux/libglasswall.classic.so -O k8-reverse-proxy/stable-src/c-icap/Glasswall-Rebuild-SDK-Evaluation/Linux/Library/libglasswall.classic.so\n  cp -rf gp-sharepoint/* k8-reverse-proxy/stable-src/\n  cd k8-reverse-proxy/stable-src/\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Tweak ",Object(i.b)("inlineCode",{parentName:"p"},"openssl.cnf")," to include domains of interest in ",Object(i.b)("strong",{parentName:"p"},"alt_names")," section (by default, this file is pre-configured in the repository).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Generate new SSL credentials"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  ./gencert.sh\n  mv full.pem nginx/\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Start the deployment    "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  docker-compose up -d --build\n")),Object(i.b)("p",{parentName:"li"},"From now on, you will need to use this command after every change to any of the configuration files ",Object(i.b)("strong",{parentName:"p"},"gwproxy.env"),", ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"subfilter.sh")),", ",Object(i.b)("strong",{parentName:"p"},"docker-compose.yaml"),", if any."),Object(i.b)("h2",{parentName:"li",id:"troubleshooting"},"Troubleshooting"),Object(i.b)("p",{parentName:"li"},"Check if docker service is active   "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  systemctl status docker\n")),Object(i.b)("p",{parentName:"li"},"Check if containers are up and running (not Restarting...)"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"docker-compose ps\n")),Object(i.b)("p",{parentName:"li"},"If squid or nginx is not started correctly, then configuration parameters in ",Object(i.b)("inlineCode",{parentName:"p"},"gwproxy.env")," has been modified, execute:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d --force-recreate\n")),Object(i.b)("h2",{parentName:"li",id:"client-configuration"},"Client configuration")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add hosts records to your client system hosts file ( i.e ",Object(i.b)("strong",{parentName:"p"},"Windows"),": C:\\Windows\\System32\\drivers\\etc\\hosts , ",Object(i.b)("strong",{parentName:"p"},"Linux, macOS and  Unix-like:")," /etc/hosts ) as follows"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"127.0.0.1 saaspoc1.sharepoint.com saaspoc1-my.sharepoint.com ukc-word-edit.officeapps.live.com ukc-excel.officeapps.live.com  ukc-powerpoint.officeapps.live.com \n")),Object(i.b)("p",{parentName:"li"},"In case you are using a client other than machine running the project , replace ",Object(i.b)("strong",{parentName:"p"},"127.0.0.1")," with the project host machine IP,"),Object(i.b)("p",{parentName:"li"},"make sure that tcp ports ",Object(i.b)("strong",{parentName:"p"},"80")," and ",Object(i.b)("strong",{parentName:"p"},"443")," are reachable and not blocked by firewall."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Move ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"k8-reverse-proxy/stable-src/ca.pem"))," to your client machine and add it to your browser/system ssl trust store.")),Object(i.b)("h2",{parentName:"li",id:"access-the-proxied-site"},"Access the proxied site"),Object(i.b)("p",{parentName:"li"},"You can access the proxied site by browsing ",Object(i.b)("a",{parentName:"p",href:"https://saaspoc1.sharepoint.com"},"saaspoc1.sharepoint.com")," ."))),Object(i.b)("p",null,"..."))}l.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);