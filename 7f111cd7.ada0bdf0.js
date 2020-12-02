(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{121:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return a?r.a.createElement(d,o(o({ref:t},l),{},{components:a})):r.a.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),i=(a(0),a(121)),s={title:"atlassian Overview",sidebar_label:"Overview"},o={unversionedId:"websites/atlassian/overview",id:"websites/atlassian/overview",isDocsHomePage:!1,title:"atlassian Overview",description:"see Development Websites Dashboard for details",source:"@site/docs/websites/atlassian/overview.md",slug:"/websites/atlassian/overview",permalink:"/k8-proxy-documentation/docs/websites/atlassian/overview",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"gwengineering Overview",permalink:"/k8-proxy-documentation/docs/websites/gwengineering/overview"},next:{title:"gwwebsite Overview",permalink:"/k8-proxy-documentation/docs/websites/gwwebsite/overview"}},c=[{value:"Requirements",id:"requirements",children:[]},{value:"Preparation",id:"preparation",children:[{value:"Configuration",id:"configuration",children:[]}]},{value:"Installation",id:"installation",children:[]},{value:"Access the proxied site",id:"access-the-proxied-site",children:[]}],l={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/k8-proxy-documentation/docs/dashboards/websites/development"}),"Development Websites Dashboard for details")),Object(i.b)("h1",{id:"reverse-proxy-configuration-jira-websites"},"Reverse proxy configuration JIRA websites"),Object(i.b)("p",null,"Websites: mariusztst.atlassian.net, os-summit.atlassian.net, glasswall.atlassian.net - "),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Ubuntu LTS")," (Tested on Ubuntu 18.04 LTS)*")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Git"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"local-dns-changes is mandatory - this solution uses the same source and destination domain")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"*WSL (Windows Subsystem Linux) is not supported")),Object(i.b)("h2",{id:"preparation"},"Preparation"),Object(i.b)("p",null,"We needed to check the website requests to check domains of interest, (domains that should be proxied), which typically are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Website main domain and www subdomain (if applicable)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Domains used in redirects between website pages (example: authentication redirections)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Domains that hosts files that should be rebuilt against Glasswall rebuild engine"),Object(i.b)("h3",Object(n.a)({parentName:"li"},{id:"finding-domains-of-interest"}),"Finding domains of interest")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open a browser that included dev tools (i.e : ",Object(i.b)("strong",{parentName:"p"},"Mozilla Firefox"),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open dev tools and switch to ",Object(i.b)("strong",{parentName:"p"},"Network")," tab (CTRL+SHIFT+E in ",Object(i.b)("strong",{parentName:"p"},"Firefox"),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Visit target website main page, surf the website and try to download files while watching requested domains ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Save domains in question to be used in configuration"))),Object(i.b)("h3",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Tweak ",Object(i.b)("strong",{parentName:"p"},"gwproxy.env")," according to our configuration (a pre-configured file already included in the repository), This is a variables definition example: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ROOT_DOMAIN"),": the domain appended to the original website domain, typically: glasswall-icap.com"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ALLOWED_DOMAINS")," : Comma separated domains accepted by the proxy, typically this should be domains of interest (figured out in the previous step) with the ",Object(i.b)("inlineCode",{parentName:"li"},"ROOT_DOMAIN")," value appended"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ICAP_URL")," : the URL of the ICAP server either running on a docker on the same machine or through a load-balancer server."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SQUID_IP")," IP address of squid proxy, used by nginx, should be only changed on advanced usage of the docker image (example: Kubernetes)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SUBFILTER_ENV"),": Space separated text substitution rules in response body, formatted as ",Object(i.b)("strong",{parentName:"li"},"match,replace")," , used for URL rewriting as in ",Object(i.b)("strong",{parentName:"li"},".gov.uk,.gov.uk.glasswall-icap.com"))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Execute the following to install the dependencies mentioned above"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'  sudo apt install -y curl git\n  curl https://get.docker.com | bash -\n  sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n  sudo chmod +x /usr/local/bin/docker-compose\n  sudo usermod -aG docker $(whoami)\n')),Object(i.b)("p",{parentName:"li"},"You need to logout and re-login after this step")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Prepare the repositories"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"  git clone --recursive https://github.com/k8-proxy/k8-reverse-proxy.git\n  git clone https://github.com/k8-proxy/gp-jira-website\n  wget https://github.com/filetrust/Glasswall-Rebuild-SDK-Evaluation/releases/download/1.117/libglasswall.classic.so -O k8-reverse-proxy/stable-src/c-icap/Glasswall-Rebuild-SDK-Evaluation/Linux/Library/libglasswall.classic.so\n  cp -rf gp-jira-website/atlassian.net/local-dns-changes/* k8-reverse-proxy/stable-src/\n  cd k8-reverse-proxy/stable-src/\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"copy SSL credentials"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"  cp -f full.pem nginx/\ncp -f squid.pem squid/\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Start the deployment "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"  docker-compose up -d --force-recreate --build\n")),Object(i.b)("p",{parentName:"li"},"From now on, you will need to use this command after every change to any of the configuration files ",Object(i.b)("strong",{parentName:"p"},"gwproxy.env"),", ",Object(i.b)("strong",{parentName:"p"},"subfilter.sh"),", ",Object(i.b)("strong",{parentName:"p"},"docker-compose.yaml"),", if any."),Object(i.b)("h2",Object(n.a)({parentName:"li"},{id:"troubleshooting"}),"Troubleshooting"),Object(i.b)("p",{parentName:"li"},"Check if docker service is active   "),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"  systemctl status docker\n")),Object(i.b)("p",{parentName:"li"},"Check if containers are up and running (not Restarting...)"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose ps\n")),Object(i.b)("p",{parentName:"li"},"If squid or nginx is not started correctly, then configuration parameters in ",Object(i.b)("inlineCode",{parentName:"p"},"gwproxy.env")," has been modified, execute:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose up -d --force-recreate\n")),Object(i.b)("h2",Object(n.a)({parentName:"li"},{id:"client-configuration"}),"Client configuration")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add hosts records to your client system hosts file ( i.e ",Object(i.b)("strong",{parentName:"p"},"Windows"),": C:\\Windows\\System32\\drivers\\etc\\hosts , ",Object(i.b)("strong",{parentName:"p"},"Linux, macOS and  Unix-like:")," /etc/hosts ) as follows"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"127.0.0.1 mariusztst.atlassian.net os-summit.atlassian.net glasswall.atlassian.net api.media.atlassian.com\n")),Object(i.b)("p",{parentName:"li"},"In case you are using a client other than machine running the project , replace ",Object(i.b)("strong",{parentName:"p"},"127.0.0.1")," with the project host machine IP,"),Object(i.b)("p",{parentName:"li"},"make sure that tcp ports ",Object(i.b)("strong",{parentName:"p"},"80")," and ",Object(i.b)("strong",{parentName:"p"},"443")," are reachable and not blocked by firewall."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Move ",Object(i.b)("strong",{parentName:"li"},"*k8-reverse-proxy/stable-src/CA.cer")," to your client machine and add it to your browser/system ssl trust store.")),Object(i.b)("h2",{id:"access-the-proxied-site"},"Access the proxied site"),Object(i.b)("p",null,"You can access the proxied site by browsing:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://mariusztst.atlassian.net/"}),"https://mariusztst.atlassian.net/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://os-summit.atlassian.net/"}),"https://os-summit.atlassian.net/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://glasswall.atlassian.net/"}),"https://glasswall.atlassian.net/"))))}b.isMDXComponent=!0}}]);