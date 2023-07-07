"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),c=n(7392),u=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:n,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var f=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==l&&(d(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return a.createElement(v,(0,r.Z)({key:String(t)},e))}},8567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={sidebar_position:2,title:"\u2728 Codemagic",description:"Integrate Shorebird into your Codemagic workflow"},s="Codemagic Workflow Integration",c={unversionedId:"ci/codemagic",id:"ci/codemagic",title:"\u2728 Codemagic",description:"Integrate Shorebird into your Codemagic workflow",source:"@site/docs/ci/codemagic.mdx",sourceDirName:"ci",slug:"/ci/codemagic",permalink:"/ci/codemagic",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/ci/codemagic.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u2728 Codemagic",description:"Integrate Shorebird into your Codemagic workflow"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc19 GitHub",permalink:"/ci/github"},next:{title:"\ud83c\udf93 Concepts",permalink:"/concepts"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Codemagic Workflow Editor",id:"codemagic-workflow-editor",level:2},{value:"Codemagic YAML",id:"codemagic-yaml",level:2},{value:"Full Example",id:"full-example",level:3},{value:"Advanced Example",id:"advanced-example",level:3}],p={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"codemagic-workflow-integration"},"Codemagic Workflow Integration"),(0,a.kt)("p",null,"This guide will help you integrate Shorebird into your Codemagic Workflow using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.codemagic.io/yaml-basic-configuration/yaml-getting-started/"},"Codemagic YAML"),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"\u2705 Shorebird CLI is installed on your machine"),(0,a.kt)("p",null,"\u2705 You are logged into a Shorebird account."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/"},"getting started")," instructions for more information.")),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"Most Shorebird functionality, like creating releases and patches, requires being authenticated. In order to authenticate with Shorebird in CI, you will need to generate a CI token."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"shorebird login:ci\n")),(0,a.kt)("p",null,"You will be prompted to go through a similar OAuth Flow as when using ",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird login"),", however, ",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird login:ci")," will not store any credentials on your device. Instead, a Shorebird token will be generated for you to use in CI."),(0,a.kt)("p",null,"The output should look something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'$ shorebird login:ci\nThe Shorebird CLI needs your authorization to manage apps, releases, and patches on your behalf.\n\nIn a browser, visit this URL to log in:\n\nhttps://accounts.google.com/o/oauth2/v2/auth...\n\nWaiting for your authorization...\n\n\ud83c\udf89 Success! Use the following token to login on a CI server:\n\n<SHOREBIRD_TOKEN>\n\nExample:\n\nexport SHOREBIRD_TOKEN="$SHOREBIRD_TOKEN" && shorebird patch android\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOREBIRD_TOKEN")," is a secret and should not be committed directly in your source code or shared publicly.")),(0,a.kt)("p",null,"Next, copy the generated ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOREBIRD_TOKEN")," and navigate to your Codemagic\nsecrets via:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Go to "Environment Variables"'),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("inlineCode",{parentName:"li"},"SHOREBIRD_TOKEN")," as variable name"),(0,a.kt)("li",{parentName:"ol"},"Paste the token into the variable value field"),(0,a.kt)("li",{parentName:"ol"},'Select or create new group, such as "shorebird"'),(0,a.kt)("li",{parentName:"ol"},'Ensure "Secure" is checked')),(0,a.kt)("p",null,"We recommend using the variable name ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOREBIRD_TOKEN")," as it's the default name\nused by the Shorebird CLI. If you choose a different name, you'll need to set\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOREBIRD_TOKEN")," environment variable in your Codemagic workflow manually."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/shorebirdtech/docs/assets/24459435/a2f1ee39-686b-4473-8f3e-d720e835824f",alt:'Screenshot of the "Environment Variables" tab in\nCodemagic'})),(0,a.kt)("h2",{id:"codemagic-workflow-editor"},"Codemagic Workflow Editor"),(0,a.kt)("p",null,"Unfortunately, the Codemagic Workflow Editor doesn't support changing the build\ncommand. As a result, you will need to use the ",(0,a.kt)("a",{parentName:"p",href:"#codemagic-yaml"},"Codemagic YAML"),"\nfile to integrate Shorebird into your workflow."),(0,a.kt)("h2",{id:"codemagic-yaml"},"Codemagic YAML"),(0,a.kt)("p",null,"If you don't know how to use the Codemagic YAML, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.codemagic.io/yaml-basic-configuration/yaml-getting-started/"},"Codemagic\nYAML documentation"),"."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"codemagic.yaml")," file, specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOREBIRD_TOKEN")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"environment"),"."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"maclinux",label:"Mac/Linux",default:!0,mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Add the group "shorebird" to your environment groups. If you\'re using a\ndifferent group name, use that instead.')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"workflows:\n  example:\n    name: Example\n    environment:\n      groups:\n        # Exports the SHOREBIRD_TOKEN environment variable\n        - shorebird\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Add a script to your workflow to set up Shorebird. This script will install\nShorebird and add it to your PATH.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"scripts:\n  - name: \ud83d\udc26 Setup Shorebird\n    script: |\n      # Install Shorebird\n      curl --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/shorebirdtech/install/main/install.sh -sSf | bash\n\n      # Add Shorebird to PATH\n      echo PATH=\"/Users/builder/.shorebird/bin:$PATH\" >> $CM_ENV\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Execute Shorebird commands in your workflow.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"scripts:\n  - name: \ud83d\ude80 Shorebird Patch\n    script: shorebird patch android --force\n")),(0,a.kt)("h3",{id:"full-example"},"Full Example"),(0,a.kt)("p",null,"Here's an example of a complete ",(0,a.kt)("inlineCode",{parentName:"p"},"codemagic.yaml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"workflows:\n  example:\n    name: Example\n    environment:\n      groups:\n        - shorebird\n      flutter: stable\n    scripts:\n      - name: \ud83d\udc26 Setup Shorebird\n        script: |\n          # Install Shorebird\n          curl --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/shorebirdtech/install/main/install.sh -sSf | bash\n\n          # Add Shorebird to PATH\n          echo PATH=\"/Users/builder/.shorebird/bin:$PATH\" >> $CM_ENV\n      - name: \ud83d\ude80 Shorebird Patch\n        script: shorebird patch android --force\n")),(0,a.kt)("p",null,"You can find a working example in this repository:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nilsreichardt/codemagic-shorebird-demo"},"codemagic-shorebird-demo"))),(0,a.kt)(i.Z,{value:"windows",label:"Windows",default:!0,mdxType:"TabItem"},"The documentation for Windows is under development and will be available soon.")),(0,a.kt)("h3",{id:"advanced-example"},"Advanced Example"),(0,a.kt)("p",null,"If you want to specify the operation type (patch or release) externally, you can\nuse environment variables in your workflow."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'workflows:\n  advanced-example:\n    name: Advanced Example\n    environment:\n      vars:\n        TYPE: \'patch\' # Can be \'patch\' or \'release\'\n      groups:\n        # Exports the SHOREBIRD_TOKEN environment variable\n        - shorebird\n      flutter: stable\n    scripts:\n      - name: \ud83d\udc26 Setup Shorebird\n        script: |\n          # Install Shorebird\n          curl --proto \'=https\' --tlsv1.2 https://raw.githubusercontent.com/shorebirdtech/install/main/install.sh -sSf | bash\n\n          # Add Shorebird to PATH\n          echo PATH="/Users/builder/.shorebird/bin:$PATH" >> $CM_ENV\n      - name: \ud83d\ude4c Shorebird Build\n        script: |\n          echo "\u27a1\ufe0f Using type: $TYPE"\n\n          # If type is neither "patch" nor "release", exit with error\n          if [ "$TYPE" != "patch" ] && [ "$TYPE" != "release" ]; then\n            echo "TYPE must be either \'patch\' or \'release\'"\n            exit 1\n          fi\n\n          # Check type and run corresponding command\n          if [ "$TYPE" == "patch" ]; then\n            echo "\ud83e\ude79 Running patch command"\n            shorebird patch android --force\n          elif [ "$TYPE" == "release" ]; then\n            echo "\ud83d\ude80 Running release command"\n            shorebird release android --force\n          fi\n')),(0,a.kt)("p",null,"Now, you can execute the workflow, as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'curl --location \'https://api.codemagic.io/builds\' \\\n--header \'x-auth-token: YOUR-AUTH-TOKEN\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "appId": "YOUR-APP-ID",\n    "workflowId": "advanced-example",\n    "branch": "main",\n    "environment": {\n        "variables": {\n            "TYPE": "release"\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"This command will run the release command. If you want to run the patch command,\nchange the ",(0,a.kt)("inlineCode",{parentName:"p"},"TYPE")," variable to ",(0,a.kt)("inlineCode",{parentName:"p"},"patch"),"."),(0,a.kt)("p",null,"To obtain your ",(0,a.kt)("inlineCode",{parentName:"p"},"x-auth-token"),", please follow the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.codemagic.io/rest-api/codemagic-rest-api/#authentication"},"Codemagic API authentication\ndocs"),"."))}h.isMDXComponent=!0}}]);