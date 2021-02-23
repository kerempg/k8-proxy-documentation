(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,u=d["".concat(l,".").concat(h)]||d[h]||b[h]||r;return n?i.a.createElement(u,o(o({ref:t},c),{},{components:n})):i.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(115)),l={title:"Sharepoint Cloud File Handler - .NET 5",sidebar_label:"File Handler .NET 5"},o={unversionedId:"websites/sharepoint/cloud/file-handler-net5-install",id:"websites/sharepoint/cloud/file-handler-net5-install",isDocsHomePage:!1,title:"Sharepoint Cloud File Handler - .NET 5",description:"Glasswall File Handler for Download in Office 365",source:"@site/docs/websites/sharepoint/cloud/file-handler-net5-install.md",slug:"/websites/sharepoint/cloud/file-handler-net5-install",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/cloud/file-handler-net5-install",version:"current",sidebar_label:"File Handler .NET 5",sidebar:"docs",previous:{title:"Sharepoint Cloud File Handler - .NET Framework",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/cloud/file-handler-dotnetfx-install"},next:{title:"Export OVA from AWS",permalink:"/k8-proxy-documentation/docs/websites/sharepoint/self-hosted/export-ova-aws"}},s=[{value:"Getting Started",id:"getting-started",children:[{value:"Register a new application",id:"register-a-new-application",children:[]},{value:"Register the file handler manifest",id:"register-the-file-handler-manifest",children:[]},{value:"Update appsettings of FileHandler",id:"update-appsettings-of-filehandler",children:[]},{value:"Run the project and sign-in",id:"run-the-project-and-sign-in",children:[]},{value:"Navigate to OneDrive and use the Markdown file handler",id:"navigate-to-onedrive-and-use-the-markdown-file-handler",children:[]}]},{value:"Next Steps",id:"next-steps",children:[{value:"Download (Glasswall)",id:"download-glasswall",children:[]}]},{value:"Related references",id:"related-references",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"glasswall-file-handler-for-download-in-office-365"},"Glasswall File Handler for Download in Office 365"),Object(r.b)("p",null,"This project provides the implementation of a file handler 2.0 for Microsoft Office 365.\nThis file handler exposes a custom action, with the ",Object(r.b)("strong",{parentName:"p"},"Download (Glasswall)")," action added to all files. The action when invoked will read the file content from O365, perform file rebuild using Glasswall rebuild API and then download the file."),Object(r.b)("p",null,"[Repository]"," (",Object(r.b)("a",{parentName:"p",href:"https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/Online/glasswall.o365.filehandler/Net5"},"https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/Online/glasswall.o365.filehandler/Net5"),")"),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("p",null,"To get started, you need to complete the following actions:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Register a new application with Azure Active Directory, generate an app password, and provide a redirect URI for the application."),Object(r.b)("li",{parentName:"ol"},"Register the file handler extensions as an add-in for your application in Azure Active Directory."),Object(r.b)("li",{parentName:"ol"},"Navigate to OneDrive for Business or a SharePoint document library and allow file handlers to load."),Object(r.b)("li",{parentName:"ol"},"Select any file, Click ",Object(r.b)("strong",{parentName:"li"},"Download (Glasswall)")," action button.")),Object(r.b)("h3",{id:"register-a-new-application"},"Register a new application"),Object(r.b)("p",null,"To register a new application with Azure Active Directory, log into the ",Object(r.b)("a",{parentName:"p",href:"https://portal.azure.com"},"Azure Portal"),"."),Object(r.b)("p",null,"After logging into the Azure Portal, the following steps will allow you to register your file handler application:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Navigate to the ",Object(r.b)("strong",{parentName:"li"},"Azure Active Directory")," module."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"App registrations")," and click ",Object(r.b)("strong",{parentName:"li"},"New application registration"),".",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Type the name of your file handler application."),Object(r.b)("li",{parentName:"ol"},"Ensure ",Object(r.b)("strong",{parentName:"li"},"Application Type")," is set to ",Object(r.b)("strong",{parentName:"li"},"Web app / API")),Object(r.b)("li",{parentName:"ol"},"Enter a sign-on URL for your application, for this sample use ",Object(r.b)("inlineCode",{parentName:"li"},"https://localhost:44382"),"."),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Create")," to create the app."))),Object(r.b)("li",{parentName:"ol"},"After the app has been created successfully, select the app from the list of applications. It should be at the bottom of the list."),Object(r.b)("li",{parentName:"ol"},"Copy the ",Object(r.b)("strong",{parentName:"li"},"Application ID")," for the app you registered and paste it into appsettings.json file under AzureAd:ClientId setting."),Object(r.b)("li",{parentName:"ol"},"Make a note of the ",Object(r.b)("strong",{parentName:"li"},"Object ID")," for this application, since you will need this later to register the file handler manifest."),Object(r.b)("li",{parentName:"ol"},"Configure the application settings for this sample:",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"Reply URLs")," and ensure that ",Object(r.b)("inlineCode",{parentName:"li"},"https://localhost:44382/signin-oidc")," is listed."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"Required Permissions")," and then ",Object(r.b)("strong",{parentName:"li"},"Add"),"."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"Select an API")," and then choose ",Object(r.b)("strong",{parentName:"li"},"Microsoft Graph")," and click ",Object(r.b)("strong",{parentName:"li"},"Select"),"."),Object(r.b)("li",{parentName:"ol"},"Find the permission ",Object(r.b)("strong",{parentName:"li"},"Have full access to all files user can access")," and check the box next to it, then click ",Object(r.b)("strong",{parentName:"li"},"Select"),", and then ",Object(r.b)("strong",{parentName:"li"},"Done"),"."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"Keys")," and generate a new application key by entering a description for the key, selecting a duration, and then click ",Object(r.b)("strong",{parentName:"li"},"Save"),". Copy the value of the displayed key since it will only be displayed once.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Paste the value of the key you generated into the appsettings.json file in this project, under AzureAd:ClientSecret setting.")))))),Object(r.b)("h3",{id:"register-the-file-handler-manifest"},"Register the file handler manifest"),Object(r.b)("p",null,"After registering your app with Azure Active Directory, you can upload the file handler manifest information into the application."),Object(r.b)("p",null,"For detailed instructions on how to upload the file handler manifest, see ",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/onedrive/developer/file-handlers/register-manually"},"Registering file handlers"),"."),Object(r.b)("p",null,"The file handler manifest  is available in the ",Object(r.b)("inlineCode",{parentName:"p"},"addin-schema.json")," file in this project."),Object(r.b)("h3",{id:"update-appsettings-of-filehandler"},"Update appsettings of FileHandler"),Object(r.b)("p",null,"Following appsettings values needs to be provided before you can use the file handler:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"AzureAd:Domain - Domain of your O365 subscription. For e.g. xamariners.com."),Object(r.b)("li",{parentName:"ol"},"AzureAd:TenantId - Tenant id of your Azure Active Directory tenant.  "),Object(r.b)("li",{parentName:"ol"},"Glasswall:BaseUrl - Base url of your Glasswall rebuild api endpoint."),Object(r.b)("li",{parentName:"ol"},"Glasswall:ApiKey - Api Key to access the Glasswall rebuild api.")),Object(r.b)("h3",{id:"run-the-project-and-sign-in"},"Run the project and sign-in"),Object(r.b)("p",null,"Once your project is registered and configured, you're ready to run it. Press F5 to launch the project in the debugger.\nThe file handler project will load in your default browser and be ready for you to sign in."),Object(r.b)("h3",{id:"navigate-to-onedrive-and-use-the-markdown-file-handler"},"Navigate to OneDrive and use the Markdown file handler"),Object(r.b)("p",null,'Once you have authorized the file handler to have access, the file handler will be available in OneDrive and SharePoint.\nAfter signing in to the app, click the "Try it in OneDrive" button to launch your OneDrive.\nDue to service caches, it may take a few minutes before your file handler shows up in OneDrive.\nYou may need to close your browser and open it again before the file handler will be activated.'),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("p",null,"Now that the file handler is wired up, try downloading a file from SharePoint/OneDrive."),Object(r.b)("h3",{id:"download-glasswall"},"Download (Glasswall)"),Object(r.b)("p",null,"The last part of this sample is to use the custom action provided by the file handler. Switch back to OneDrive.\nSelect a file (click the check) and then in the toolbar, click ",Object(r.b)("inlineCode",{parentName:"p"},"Download (Glasswall)"),".\nThis will launch the file handler's custom action handler and download the file.\nThe file handler code will download the file, rebuild it using Glasswall rebuild api, and download the file to your browser."),Object(r.b)("h2",{id:"related-references"},"Related references"),Object(r.b)("p",null,"For more information about file handlers, check out the ",Object(r.b)("a",{parentName:"p",href:"https://dev.onedrive.com"},"OneDrive developer portal"),"."),Object(r.b)("p",null,"For more information about Microsoft Graph API, see ",Object(r.b)("a",{parentName:"p",href:"https://graph.microsoft.com"},"Microsoft Graph"),"."))}p.isMDXComponent=!0}}]);