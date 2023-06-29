"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[682],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2386:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1,title:"\u2604\ufe0f Code Push Quickstart",description:"Try code push for yourself"},o="Code Push Quickstart",l={unversionedId:"guides/code_push_quickstart",id:"guides/code_push_quickstart",title:"\u2604\ufe0f Code Push Quickstart",description:"Try code push for yourself",source:"@site/docs/guides/code_push_quickstart.md",sourceDirName:"guides",slug:"/guides/code_push_quickstart",permalink:"/guides/code_push_quickstart",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/guides/code_push_quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u2604\ufe0f Code Push Quickstart",description:"Try code push for yourself"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\uddfa\ufe0f Guides",permalink:"/guides"},next:{title:"\ud83d\udea2 Release a Code Push App",permalink:"/guides/code_push_release"}},s={},p=[{value:"Sign up",id:"sign-up",level:2},{value:"Create an account",id:"create-an-account",level:3},{value:"Create the app",id:"create-the-app",level:2},{value:"Initialize Shorebird",id:"initialize-shorebird",level:3},{value:"Run the app with Shorebird",id:"run-the-app-with-shorebird",level:3},{value:"Create a release",id:"create-a-release",level:3},{value:"Create a patch",id:"create-a-patch",level:3},{value:"See the patch in action",id:"see-the-patch-in-action",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"code-push-quickstart"},"Code Push Quickstart"),(0,a.kt)("p",null,"This guide shows you the fastest way to install Shorebird and try code push."),(0,a.kt)("p",null,"This document is a (slightly) condensed version of our ",(0,a.kt)("a",{parentName:"p",href:"../code-push/"},"code push")," docs, all on one page."),(0,a.kt)("h2",{id:"sign-up"},"Sign up"),(0,a.kt)("p",null,"Before you can create a Shorebird app, you will need to sign up for Shorebird."),(0,a.kt)("h3",{id:"create-an-account"},"Create an account"),(0,a.kt)("p",null,"To register as a Shorebird user, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"shorebird account create\n")),(0,a.kt)("p",null,"This will generate a Google sign in link. Follow the link and sign in with your\nGoogle account."),(0,a.kt)("h2",{id:"create-the-app"},"Create the app"),(0,a.kt)("p",null,"Once you have registered and subscribed, you're ready to use Shorebird!"),(0,a.kt)("p",null,"Start by creating a new Flutter app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"flutter create my_shorebird_app\n")),(0,a.kt)("p",null,"As with any Flutter app, you can verify this created the standard Counter app by\nfollowing the instructions printed by ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter create"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd my_shorebird_app\nflutter run\n")),(0,a.kt)("h3",{id:"initialize-shorebird"},"Initialize Shorebird"),(0,a.kt)("p",null,"To make this a Shorebird app, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"shorebird init\n")),(0,a.kt)("p",null,"This will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird.yaml")," file in the root of your project. This file\ncontains your Shorebird ",(0,a.kt)("inlineCode",{parentName:"p"},"app_id"),"."),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird doctor")," to ensure everything is set up correctly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"shorebird doctor\n")),(0,a.kt)("p",null,"You will notice that this prints an error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"[\u2717] android/app/src/main/AndroidManifest.xml is missing the INTERNET permission.\n")),(0,a.kt)("p",null,"This is because Shorebird requires the internet permission to download patches.\nYou can fix this issue by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"shorebird doctor --fix\n")),(0,a.kt)("h3",{id:"run-the-app-with-shorebird"},"Run the app with Shorebird"),(0,a.kt)("p",null,"To run the app with Shorebird (that is, with ",(0,a.kt)("a",{parentName:"p",href:"/faq#how-does-shorebird-relate-to-flutter"},"Shorebird's fork of the Flutter\nengine"),"), run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"shorebird run\n")),(0,a.kt)("p",null,"Now kill the app on your device or emulator."),(0,a.kt)("h3",{id:"create-a-release"},"Create a release"),(0,a.kt)("p",null,"We will create a release using the unmodified Counter app. Run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"shorebird release\n")),(0,a.kt)("p",null,"When prompted, use the suggested version number (",(0,a.kt)("inlineCode",{parentName:"p"},"1.0.0+1"),"), and enter ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," when\nasked if you would like to continue."),(0,a.kt)("h3",{id:"create-a-patch"},"Create a patch"),(0,a.kt)("p",null,"We will now make a small change to the Counter app. In ",(0,a.kt)("inlineCode",{parentName:"p"},"lib/main.dart"),", change\nthe app theme's ",(0,a.kt)("inlineCode",{parentName:"p"},"primarySwatch")," from blue to green:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'class MyApp extends StatelessWidget {\n  const MyApp({super.key});\n\n  // This widget is the root of your application.\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: \'Flutter Demo\',\n      theme: ThemeData(\n        // This is the theme of your application.\n        //\n        // Try running your application with "flutter run". You\'ll see the\n        // application has a blue toolbar. Then, without quitting the app, try\n        // changing the primarySwatch below to Colors.green and then invoke\n        // "hot reload" (press "r" in the console where you ran "flutter run",\n        // or simply save your changes to "hot reload" in a Flutter IDE).\n        // Notice that the counter didn\'t reset back to zero; the application\n        // is not restarted.\n-       primarySwatch: Colors.blue,\n+       primarySwatch: Colors.green,\n      ),\n      home: const MyHomePage(title: \'Flutter Demo Home Page\'),\n    );\n  }\n}\n')),(0,a.kt)("p",null,"After making this change, save the file and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"shorebird patch\n")),(0,a.kt)("p",null,"When prompted, use the suggested release version (",(0,a.kt)("inlineCode",{parentName:"p"},"1.0.0+1"),"), and enter ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," when\nasked if you'd like to continue."),(0,a.kt)("h3",{id:"see-the-patch-in-action"},"See the patch in action"),(0,a.kt)("p",null,"Launch the app from your device or emulator. The app will still have the\noriginal blue theme, but it will be downloading the patch we just created in the\nbackground. Kill and launch the app again, and the app will be green! \ud83c\udf89"))}d.isMDXComponent=!0}}]);