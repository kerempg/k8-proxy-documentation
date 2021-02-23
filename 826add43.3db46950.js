(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{115:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,u=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return a?n.a.createElement(u,l(l({ref:t},b),{},{components:a})):n.a.createElement(u,l({ref:t},b))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=a[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(6),i=(a(0),a(115)),o={title:"Flavor OVA Testing",sidebar_label:"Testing"},l={unversionedId:"flavors/flavor-ova/testing",id:"flavors/flavor-ova/testing",isDocsHomePage:!1,title:"Flavor OVA Testing",description:"Testing Production websites",source:"@site/docs/flavors/flavor-ova/testing.md",slug:"/flavors/flavor-ova/testing",permalink:"/k8-proxy-documentation/docs/flavors/flavor-ova/testing",version:"current",sidebar_label:"Testing",sidebar:"docs",previous:{title:"Flavor OVA Overview",permalink:"/k8-proxy-documentation/docs/flavors/flavor-ova/overview"},next:{title:"OVAs documentation",permalink:"/k8-proxy-documentation/docs/esxi/OVAs/overview"}},s=[{value:"ICAP server OVA",id:"icap-server-ova",children:[]},{value:"Glasswall Engineering OVA",id:"glasswall-engineering-ova",children:[{value:"Make sure that ICAP Server OVA is imported into VM and is started. Glasswall Enfineering OVA is dependent on previous one.",id:"make-sure-that-icap-server-ova-is-imported-into-vm-and-is-started-glasswall-enfineering-ova-is-dependent-on-previous-one",children:[]}]},{value:"Minio Server OVA",id:"minio-server-ova",children:[]},{value:"Minio Proxy OVA",id:"minio-proxy-ova",children:[{value:"You setup ICAP Server and Minio Server as per steps above and they are up and running",id:"you-setup-icap-server-and-minio-server-as-per-steps-above-and-they-are-up-and-running",children:[]}]},{value:"Possible issues and how to fix them",id:"possible-issues-and-how-to-fix-them",children:[]}],b={rightToc:s};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"testing-production-websites"},"Testing Production websites"),Object(i.b)("p",null,"Please refer to wiki for the latest information: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/k8-proxy/GW-proxy/wiki/Production-websites"},"https://github.com/k8-proxy/GW-proxy/wiki/Production-websites")),Object(i.b)("h1",{id:"ovas"},"OVAs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ICAP Server"),Object(i.b)("li",{parentName:"ul"},"Glasswall Engineering Website Proxy"),Object(i.b)("li",{parentName:"ul"},"Minio Server "),Object(i.b)("li",{parentName:"ul"},"Minio Proxy ")),Object(i.b)("h2",{id:"icap-server-ova"},"ICAP server OVA"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Download OVA file from ",Object(i.b)("a",{parentName:"p",href:"https://glasswall-sow-ova.s3.eu-west-1.amazonaws.com/vms/ICAP-Server/ICAP-Rancher.ova?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3NUU5XSYVTP3BV6R%2F20201123%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20201123T102934Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=cb80de0b9739a122ac0f270fdbed6b1ffdc81dd6e538a4cbc97780b127949cde"},"here"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open VirtualBox and import downloaded OVA file: icap-Rancher.ova")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Once OVA is imported, go to Settings>Network>Adapter 2 "),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Name: VirtualBox Host-Only Ethernet Adapter")),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Attached to: Host-Only Adapter"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Start ICAP Server VM")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Login (username: ",Object(i.b)("strong",{parentName:"p"},"user"),", password: ",Object(i.b)("strong",{parentName:"p"},"secret"),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In command line shell, type:"),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("inlineCode",{parentName:"p"},"ip a show eth1"),"\n\u200b")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Check the ip address for eth1 (this address to be used in the following step)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Give 5-10min for ICAP Server to completely start")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"On your localhost machine (make sure you have c-icap-client installed) run below command to test the connectivity to ICAP server:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"c-icap-client -i 192.168.56.97"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Expected results: The command should respond with 200 OK.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can also verify that server is working correctly by rebuilding a file:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"c-icap-client -f ./test.pdf -i 192.168.56.97  -p 1344 -s gw_rebuild -o rebuilt.pdf -v")))),Object(i.b)("h4",{id:"here-is-the-video-with-above-instructions-icap-server-and-glasswall-engineering-website-ovas"},"Here is the video with above instructions: ",Object(i.b)("a",{parentName:"h4",href:"https://www.loom.com/share/08068432eebd48cba0e7ffe4480bfb4f"},"ICAP Server and Glasswall Engineering Website OVAs")),Object(i.b)("h2",{id:"glasswall-engineering-ova"},"Glasswall Engineering OVA"),Object(i.b)("p",null,"\u200b\nGlasswall Engineering OVA for demoing Glasswall Rebuild engine proxy for ",Object(i.b)("strong",{parentName:"p"},"engineering.glasswallsolutions.com")," website"),Object(i.b)("h3",{id:"make-sure-that-icap-server-ova-is-imported-into-vm-and-is-started-glasswall-enfineering-ova-is-dependent-on-previous-one"},"Make sure that ICAP Server OVA is imported into VM and is started. Glasswall Enfineering OVA is dependent on previous one."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Download OVA file from ",Object(i.b)("a",{parentName:"p",href:"https://glasswall-sow-ova.s3.eu-west-1.amazonaws.com/vms/Engineering-website/glasswall-engineering.ova?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3NUU5XSYVTP3BV6R/20201123/eu-west-1/s3/aws4_request&X-Amz-Date=20201123T103128Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=81014796a8554b5847e4d844530e578b4782ea7f10859113c5b1bd03d984322e"},"here"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open VirtualBox and import downloaded OVA file: glasswall-engineering.ova")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Once OVA is imported, go to Settings>Network>Adapter 2 "),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Name: VirtualBox Host-Only Ethernet Adapter")),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Attached to: Host-Only Adapter"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Start Glasswall Engineering VM\n\u200b")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Login (username: ",Object(i.b)("strong",{parentName:"p"},"user"),", password: ",Object(i.b)("strong",{parentName:"p"},"secret"),")\n\u200b\u200b\u200b")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open any browser (preferably Firefox) and try to access: ",Object(i.b)("a",{parentName:"p",href:"https://engineering.glasswallsolutions.com.local.glasswall-icap.com"},"engineering.glasswallsolutions.com.local.glasswall-icap.com"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To avoid SSL Certificate warning on your host machine run:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"scp user@192.168.56.96:/home/user/ca.pem ca.pem")),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Import ca.pem certificate in Firefox under Options > View Certificates > Authorithies tab")),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"For Chrome this will not work since cert needs to be added on the system"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'Navigate to Documentation tab > Sample Files and try to download pdf file and verify that file has "Glasswall Approved" watermark'))),Object(i.b)("h4",{id:"here-is-the-video-with-above-instructions-glasswall-engineering-website-ova"},"Here is the video with above instructions: ",Object(i.b)("a",{parentName:"h4",href:"https://youtu.be/vXrL_LYcamo"},"Glasswall Engineering Website OVA")),Object(i.b)("h4",{id:"here-is-the-video-with-above-instructions-icap-server-and-glasswall-engineering-website-ovas-1"},"Here is the video with above instructions: ",Object(i.b)("a",{parentName:"h4",href:"https://www.loom.com/share/08068432eebd48cba0e7ffe4480bfb4f"},"ICAP Server and Glasswall Engineering Website OVAs")),Object(i.b)("h2",{id:"minio-server-ova"},"Minio Server OVA"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Download the OVA from ",Object(i.b)("a",{parentName:"p",href:"https://glasswall-sow-ova.s3.eu-west-1.amazonaws.com/vms/Minio-Server/minio_server.ova?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3NUU5XSYVTP3BV6R/20201123/eu-west-1/s3/aws4_request&X-Amz-Date=20201123T103211Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fedd4e3498ba4c993064666debca7ccdedfc5860b8031298c8aa93076d08a2b1"},"here"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open VirtualBox and import downloaded OVA file: minio-server.ova")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Once OVA is imported, go to Settings>Network>Adapter 2"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Name: VirtualBox Host-Only Ethernet Adapter")),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Attached to: Host-Only Adapter"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Start Minio Server VM")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Login (username: ",Object(i.b)("strong",{parentName:"p"},"user"),", password: ",Object(i.b)("strong",{parentName:"p"},"secret"),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In command line, type:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"ip a show eth1"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Check the ip address for eth1 (this address to be used in the following step)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In your local hosts file (on win: C:\\Windows\\System32\\drivers\\etc, on MAC/Linux: /etc/hosts) add following lines"),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("inlineCode",{parentName:"p"},"<VM IPADDRESS> minio.server"),"\nExample:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"192.168.56.90 minio.server\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open any browser and try to access: ",Object(i.b)("a",{parentName:"p",href:"http://minio.server"},"http://minio.server"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Login to Minio Server (username: ",Object(i.b)("strong",{parentName:"p"},"user"),", password: ",Object(i.b)("strong",{parentName:"p"},"secret_password"),")"))),Object(i.b)("h4",{id:"here-is-the-video-with-above-instructions"},"Here is the video with above instructions:"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=itMyB8-HTMk"},Object(i.b)("img",{parentName:"a",src:"https://img.youtube.com/vi/itMyB8-HTMk/0.jpg",alt:"Minio server OVA"}))),Object(i.b)("h2",{id:"minio-proxy-ova"},"Minio Proxy OVA"),Object(i.b)("h3",{id:"you-setup-icap-server-and-minio-server-as-per-steps-above-and-they-are-up-and-running"},"You setup ICAP Server and Minio Server as per steps above and they are up and running"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Download the Minio Proxy OVA from ",Object(i.b)("a",{parentName:"p",href:"https://glasswall-sow-ova.s3.eu-west-1.amazonaws.com/vms/Minio-Server/minio_proxy.ova?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3NUU5XSYVTP3BV6R%2F20201124%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20201124T130247Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2a2befdb7020452c030f7f29650f1dc65f66b5ab510129222244cfa9e4d06d94"},"here"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open VirtualBox and import downloaded OVA file: minio-proxy.ova")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Once OVA is imported, go to Settings>Network>Adapter 2"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Name: VirtualBox Host-Only Ethernet Adapter")),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Attached to: Host-Only Adapter"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Start Minio Proxy VM")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Login (username: ",Object(i.b)("strong",{parentName:"p"},"user"),", password: ",Object(i.b)("strong",{parentName:"p"},"secret"),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Access Proxied Minio Server at: ",Object(i.b)("a",{parentName:"p",href:"http://minio.server.local.glasswall-icap.com/"},"http://minio.server.local.glasswall-icap.com/"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Note: It takes some time for page to load")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Login to Minio Proxied Server (username: ",Object(i.b)("strong",{parentName:"p"},"user"),", password: ",Object(i.b)("strong",{parentName:"p"},"secret_password"),")"))),Object(i.b)("h2",{id:"possible-issues-and-how-to-fix-them"},"Possible issues and how to fix them"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If you are not able to rebuild file using ICAP-Server VM:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Windows/WSL2 are not legit way to test that (can be added as exception) ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If same issue is present on Linux: shut down virtual box, run in linux local host ",Object(i.b)("inlineCode",{parentName:"p"},"sudo apt install build-essential dkms virtualbox-ext-pack"),", in virtualbox: file> host network manager > make sure that the adapter created is enabled, then make sure that when the vm is shut down, in the vm's settings you can see the adapter that was created earlier in adapter 2")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'If you get NGINX error "Faithfully yours" in VM run:'),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("inlineCode",{parentName:"p"},"sudo docker-compose down")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("inlineCode",{parentName:"p"},"sudo docker-compose up -d"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If you get error for invalid URL containing additional ",Object(i.b)("inlineCode",{parentName:"p"},".local")," you probably started GW ENG VM or Minio Proxy VM before starteing ICAP Server OVA. Make sure that ICAP Server OVA is always started first. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Do not change any local host network or firewall configuration during or after starting the VMs it can compromise the adapters. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In case you get error code 9 in your browser, it is due to ICAP TimeBomb for License files. Give it some time, it will disappears."))))}p.isMDXComponent=!0}}]);