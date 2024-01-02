import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const E="modulepreload",p=function(_,i){return new URL(_,i).href},m={},o=function(i,s,l){let e=Promise.resolve();if(s&&s.length>0){const t=document.getElementsByTagName("link");e=Promise.all(s.map(r=>{if(r=p(r,l),r in m)return;m[r]=!0;const c=r.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!l)for(let a=t.length-1;a>=0;a--){const u=t[a];if(u.href===r&&(!c||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${d}`))return;const n=document.createElement("link");if(n.rel=c?"stylesheet":E,c||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),c)return new Promise((a,u)=>{n.addEventListener("load",a),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>i()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:f}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,O=f({page:"preview"});R.setChannel(O);window.__STORYBOOK_ADDONS_CHANNEL__=O;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=O);const w={"./.storybook/pages/configure.mdx":async()=>o(()=>import("./configure--na3o5NW.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url),"./src/components/Foo/index.stories.tsx":async()=>o(()=>import("./index.stories-KCJN_UrH.js"),__vite__mapDeps([10,1,2,3]),import.meta.url)};async function P(_){return w[_]()}const{composeConfigs:T,PreviewWeb:L,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const _=await Promise.all([o(()=>import("./entry-preview-PSo23f1w.js"),__vite__mapDeps([11,2,3,12,5]),import.meta.url),o(()=>import("./entry-preview-docs-JZpfVWBz.js"),__vite__mapDeps([13,7,3,8,2]),import.meta.url),o(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([14,6]),import.meta.url),o(()=>import("./preview-00fEATO_.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-OnO0tzRj.js"),__vite__mapDeps([15,8]),import.meta.url),o(()=>import("./preview-FekBEZxm.js"),__vite__mapDeps([16,8]),import.meta.url),o(()=>import("./preview-TkXSQy1x.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([17,8]),import.meta.url),o(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-37XjEtlT.js"),__vite__mapDeps([18,3]),import.meta.url),o(()=>import("./preview-mEb2NEJf.js"),__vite__mapDeps([]),import.meta.url)]);return T(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new S({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:P,getProjectAnnotations:I});export{o as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./configure--na3o5NW.js","./jsx-runtime-AgcCsxC8.js","./index-XiNr8FW2.js","./_commonjsHelpers-5-cIlDoe.js","./index-i8i5C9v1.js","./index-9vG4XYWr.js","./index-ogXoivrg.js","./index-mLPG47JP.js","./index-PPLHz8o0.js","./index-7MmEg4M7.js","./index.stories-KCJN_UrH.js","./entry-preview-PSo23f1w.js","./react-18-sFOusbzT.js","./entry-preview-docs-JZpfVWBz.js","./preview-VI2eoWmp.js","./preview-OnO0tzRj.js","./preview-FekBEZxm.js","./preview-u8M_OEO2.js","./preview-37XjEtlT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}