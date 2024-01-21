import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{M as a}from"./index-EkxykZHH.js";import{c as t}from"./ThemeContext-LdRP1DHW.js";import"./ThemeProvider-5yBBGuHH.js";import{useMDXComponents as c}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-36e7a20W.js";import"../sb-preview/runtime.js";import"./index-0wFIAhjy.js";import"./mapValues-G4xJQuL7.js";import"./index-jmm5gWkb.js";import"./index-ywJlRP1w.js";import"./pickBy-bRBpmdwD.js";import"./index-tSvtOwe8.js";import"./index-xck8ovCi.js";import"./styled-components.browser.esm-sUdGPuZR.js";function i(n){const r=Object.assign({h1:"h1",h2:"h2",p:"p",br:"br",pre:"pre",code:"code"},c(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Theming"}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsxs("div",{children:[e.jsx(r.h1,{id:"theming",children:"Theming"}),e.jsx("p",{children:"Customize Celestial Components with your theme."})]}),e.jsx("div",{className:"sb-separator"}),e.jsx(r.h2,{id:"colors-tokens",children:"Colors tokens"}),e.jsx("p",{children:"The Celestial Components library provides pre-defined tokens that are used in conjunction with the CelestialProvider."}),e.jsxs("div",{className:"sb-color-container",children:[e.jsx("div",{children:Object.entries(t.color.primary).map(([s,o])=>e.jsxs(r.p,{className:"sb-color-p",style:{background:o},children:[s," ",e.jsx(r.br,{})," ",o]}))}),e.jsx("div",{children:Object.entries(t.color.red).map(([s,o])=>e.jsxs(r.p,{className:"sb-color-p",style:{background:o},children:[s," ",e.jsx(r.br,{})," ",o]}))}),e.jsx("div",{children:Object.entries(t.color.yellow).map(([s,o])=>e.jsxs(r.p,{className:"sb-color-p",style:{background:o},children:[s," ",e.jsx(r.br,{})," ",o]}))}),e.jsx("div",{children:Object.entries(t.color.green).map(([s,o])=>e.jsxs(r.p,{className:"sb-color-p",style:{background:o},children:[s," ",e.jsx(r.br,{})," ",o]}))}),e.jsx("div",{children:Object.entries(t.color.blue).map(([s,o])=>e.jsxs(r.p,{className:"sb-color-p",style:{background:o},children:[s," ",e.jsx(r.br,{})," ",o]}))})]}),e.jsx(r.h2,{id:"usage",children:"Usage"}),e.jsx("p",{children:"Import the token you need in your React application:"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import { Tokens } from 'celestial-components';
const { colors } = Tokens

function App() {
  return (
    <p style={{ color: color.primary.primary100 }}>
      Celestial
    </p>
  )
}
`})})]}),`
`,e.jsx("style",{children:`
  .sb-container {
    margin-bottom: 3rem;
  }

  img {
    object-fit: cover;
    height: 6rem;
  }

  .sb-section-logo {
    display: flex;
    justify-content: center;
  }

  .sb-color-container {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .sb-color-container div {
    flex-shrink: 1;
    flex: 1;
  }

  .sb-color-p {
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0.5rem 1rem;
    color: #ffffff;
    box-shadow: 1px 1px 1px #ccc;
  }

  .sb-separator {
   width: 100%;
    height:0.3rem;
    border-radius: 100%;
    margin: 2rem auto;
    background: rgb(107,0,249);
    background: -moz-linear-gradient(90deg, rgba(107,0,249,1) 0%, rgba(1,99,255,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(107,0,249,1) 0%, rgba(1,99,255,1) 100%);
    background: linear-gradient(90deg, rgba(107,0,249,1) 0%, rgba(1,99,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#6b00f9",endColorstr="#0163ff",GradientType=1);
  }
  `})]})}function O(n={}){const{wrapper:r}=Object.assign({},c(),n.components);return r?e.jsx(r,Object.assign({},n,{children:e.jsx(i,n)})):i(n)}export{O as default};
