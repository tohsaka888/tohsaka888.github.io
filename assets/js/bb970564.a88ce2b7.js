(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(114)),o={sidebar_position:1},p={unversionedId:"TypeScript/TypeScript",id:"TypeScript/TypeScript",isDocsHomePage:!1,title:"TypeScript",description:"\u57fa\u7840\u7c7b\u578b",source:"@site/docs/TypeScript/TypeScript.md",sourceDirName:"TypeScript",slug:"/TypeScript/TypeScript",permalink:"/docs/TypeScript/TypeScript",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/TypeScript/TypeScript.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"JavaScriptSidebar",previous:{title:"\u8bb0\u5f55\u4e00\u4e9b\u81ea\u5df1\u4f7f\u7528\u7684\u52a8\u753b\u6548\u679c",permalink:"/docs/React Spring/react-spring-demo"},next:{title:"express",permalink:"/docs/express/express"}},l=[{value:"\u57fa\u7840\u7c7b\u578b",id:"\u57fa\u7840\u7c7b\u578b",children:[]}],i={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u57fa\u7840\u7c7b\u578b"},"\u57fa\u7840\u7c7b\u578b"),Object(c.b)("p",null,"\u4e3a\u4e86\u8ba9\u7a0b\u5e8f\u6709\u4ef7\u503c\uff0c\u6211\u4eec\u9700\u8981\u80fd\u591f\u5904\u7406\u6700\u7b80\u5355\u7684\u6570\u636e\u5355\u5143\uff1a\u6570\u5b57\uff0c\u5b57\u7b26\u4e32\uff0c\u7ed3\u6784\u4f53\uff0c\u5e03\u5c14\u503c\u7b49\u3002 TypeScript\u652f\u6301\u4e0eJavaScript\u51e0\u4e4e\u76f8\u540c\u7684\u6570\u636e\u7c7b\u578b\uff0c\u6b64\u5916\u8fd8\u63d0\u4f9b\u4e86\u5b9e\u7528\u7684\u679a\u4e3e\u7c7b\u578b\u65b9\u4fbf\u6211\u4eec\u4f7f\u7528\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u4f7f\u7528\u65b9\u6cd5\uff1a")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},'let isDone: boolean = false;\nlet num: number = 0;\nlet name: string = "bob";\n//\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u6a21\u7248\u5b57\u7b26\u4e32\uff0c\u5b83\u53ef\u4ee5\u5b9a\u4e49\u591a\u884c\u6587\u672c\u548c\u5185\u5d4c\u8868\u8fbe\u5f0f\u3002 \u8fd9\u79cd\u5b57\u7b26\u4e32\u662f\u88ab\u53cd\u5f15\u53f7\u5305\u56f4\uff08`\uff09\uff0c\u5e76\u4e14\u4ee5${ expr }\u8fd9\u79cd\u5f62\u5f0f\u5d4c\u5165\u8868\u8fbe\u5f0f\nlet sentence: string = `Hello,my name is ${name}`;\nlet list: number[] = [1, 2, 3];\nlet list: Array<number> = [1, 2, 3];    //\u4f7f\u7528\u6570\u7ec4\u6cdb\u578b\uff0cArray<\u5143\u7d20\u7c7b\u578b>\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u4e00\u4e9b\u7279\u522b\u7684\u7c7b\u578b")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u5143\u7ec4")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"//\u5143\u7ec4\n//\u5143\u7ec4\u7c7b\u578b\u5141\u8bb8\u8868\u793a\u4e00\u4e2a\u5df2\u77e5\u5143\u7d20\u6570\u91cf\u548c\u7c7b\u578b\u7684\u6570\u7ec4\uff0c\u5404\u5143\u7d20\u7684\u7c7b\u578b\u4e0d\u5fc5\u76f8\u540c\u3002 \u6bd4\u5982\uff0c\u4f60\u53ef\u4ee5\u5b9a\u4e49\u4e00\u5bf9\u503c\u5206\u522b\u4e3astring\u548cnumber\u7c7b\u578b\u7684\u5143\u7ec4\u3002\n\n// Declare a tuple type\nlet x: [string, number];\n// Initialize it\nx = ['hello', 10]; // OK\n// Initialize it incorrectly\nx = [10, 'hello']; // Error\n\n//\u5f53\u8bbf\u95ee\u4e00\u4e2a\u8d8a\u754c\u7684\u5143\u7d20\uff0c\u4f1a\u4f7f\u7528\u8054\u5408\u7c7b\u578b\u66ff\u4ee3\uff1a\nx[3] = 'world'; // OK, \u5b57\u7b26\u4e32\u53ef\u4ee5\u8d4b\u503c\u7ed9(string | number)\u7c7b\u578b\nconsole.log(x[5].toString()); // OK, 'string' \u548c 'number' \u90fd\u6709 toString\nx[6] = true; // Error, \u5e03\u5c14\u4e0d\u662f(string | number)\u7c7b\u578b\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u679a\u4e3e")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"enum"),"\u7c7b\u578b\u662f\u5bf9JavaScript\u6807\u51c6\u6570\u636e\u7c7b\u578b\u7684\u4e00\u4e2a\u8865\u5145\u3002 \u50cfC#\u7b49\u5176\u5b83\u8bed\u8a00\u4e00\u6837\uff0c\u4f7f\u7528\u679a\u4e3e\u7c7b\u578b\u53ef\u4ee5\u4e3a\u4e00\u7ec4\u6570\u503c\u8d4b\u4e88\u53cb\u597d\u7684\u540d\u5b57\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"enum Color {Red, Green, Blue}\nlet c: Color = Color.Green;\n")),Object(c.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4ece",Object(c.b)("inlineCode",{parentName:"p"},"0"),"\u5f00\u59cb\u4e3a\u5143\u7d20\u7f16\u53f7\u3002 \u4f60\u4e5f\u53ef\u4ee5\u624b\u52a8\u7684\u6307\u5b9a\u6210\u5458\u7684\u6570\u503c\u3002 \u4f8b\u5982\uff0c\u6211\u4eec\u5c06\u4e0a\u9762\u7684\u4f8b\u5b50\u6539\u6210\u4ece",Object(c.b)("inlineCode",{parentName:"p"},"1"),"\u5f00\u59cb\u7f16\u53f7\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"enum Color {Red = 1, Green, Blue}\nlet c: Color = Color.Green;\n")),Object(c.b)("p",null,"\u679a\u4e3e\u7c7b\u578b\u63d0\u4f9b\u7684\u4e00\u4e2a\u4fbf\u5229\u662f\u4f60\u53ef\u4ee5\u7531\u679a\u4e3e\u7684\u503c\u5f97\u5230\u5b83\u7684\u540d\u5b57\u3002 \u4f8b\u5982\uff0c\u6211\u4eec\u77e5\u9053\u6570\u503c\u4e3a2\uff0c\u4f46\u662f\u4e0d\u786e\u5b9a\u5b83\u6620\u5c04\u5230Color\u91cc\u7684\u54ea\u4e2a\u540d\u5b57\uff0c\u6211\u4eec\u53ef\u4ee5\u67e5\u627e\u76f8\u5e94\u7684\u540d\u5b57\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"enum Color {Red = 1, Green, Blue}\nlet colorName: string = Color[2];\n\nalert(colorName);  // \u663e\u793a'Green'\u56e0\u4e3a\u4e0a\u9762\u4ee3\u7801\u91cc\u5b83\u7684\u503c\u662f2\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u4efb\u610f\u503c")),Object(c.b)("p",null,"\u6709\u65f6\u5019\uff0c\u6211\u4eec\u4f1a\u60f3\u8981\u4e3a\u90a3\u4e9b\u5728\u7f16\u7a0b\u9636\u6bb5\u8fd8\u4e0d\u6e05\u695a\u7c7b\u578b\u7684\u53d8\u91cf\u6307\u5b9a\u4e00\u4e2a\u7c7b\u578b\u3002 \u8fd9\u4e9b\u503c\u53ef\u80fd\u6765\u81ea\u4e8e\u52a8\u6001\u7684\u5185\u5bb9\uff0c\u6bd4\u5982\u6765\u81ea\u7528\u6237\u8f93\u5165\u6216\u7b2c\u4e09\u65b9\u4ee3\u7801\u5e93\u3002 \u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4e0d\u5e0c\u671b\u7c7b\u578b\u68c0\u67e5\u5668\u5bf9\u8fd9\u4e9b\u503c\u8fdb\u884c\u68c0\u67e5\u800c\u662f\u76f4\u63a5\u8ba9\u5b83\u4eec\u901a\u8fc7\u7f16\u8bd1\u9636\u6bb5\u7684\u68c0\u67e5\u3002 \u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",Object(c.b)("inlineCode",{parentName:"p"},"any"),"\u7c7b\u578b\u6765\u6807\u8bb0\u8fd9\u4e9b\u53d8\u91cf\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},'let notSure: any = 4;\nnotSure = "maybe a string instead";\nnotSure = false; // okay, definitely a boolean\n')),Object(c.b)("p",null,"\u5f53\u4f60\u53ea\u77e5\u9053\u4e00\u90e8\u5206\u6570\u636e\u7684\u7c7b\u578b\u65f6\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"any"),"\u7c7b\u578b\u4e5f\u662f\u6709\u7528\u7684\u3002 \u6bd4\u5982\uff0c\u4f60\u6709\u4e00\u4e2a\u6570\u7ec4\uff0c\u5b83\u5305\u542b\u4e86\u4e0d\u540c\u7684\u7c7b\u578b\u7684\u6570\u636e\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},'let list: any[] = [1, true, "free"];\n\nlist[1] = 100;\n')))}b.isMDXComponent=!0},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,y=u["".concat(o,".").concat(m)]||u[m]||s[m]||c;return n?a.a.createElement(y,p(p({ref:t},i),{},{components:n})):a.a.createElement(y,p({ref:t},i))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var i=2;i<c;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);