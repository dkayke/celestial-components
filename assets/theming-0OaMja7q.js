import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{M as c}from"./index-bJLEBUDN.js";import{c as s}from"./ThemeContext-LdRP1DHW.js";import"./ThemeProvider-5yBBGuHH.js";import{useMDXComponents as l}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-0XbgbElf.js";import"../sb-preview/runtime.js";import"./index-20c9DOhP.js";import"./mapValues-FAdTpsSt.js";import"./index-jmm5gWkb.js";import"./index-ywJlRP1w.js";import"./pickBy-F9_CiH9h.js";import"./index-xck8ovCi.js";import"./index-yhEdhi8S.js";import"./styled-components.browser.esm-sUdGPuZR.js";function o(i){const r=Object.assign({h1:"h1",h2:"h2",code:"code",pre:"pre",p:"p",br:"br"},l(),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Theming"}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsxs("div",{children:[e.jsx(r.h1,{id:"theming",children:"Theming"}),e.jsx("p",{children:"Customize Celestial Components with your theme."})]}),e.jsx("div",{className:"sb-separator"}),e.jsx(r.h2,{id:"theme-provider",children:"Theme Provider"}),e.jsx("p",{children:"The Celestial Components library provides pre-defined tokens that are used in conjunction with the CelestialProvider."}),e.jsxs("p",{children:["To customize the default theme of the library, you should use the theme provider through the ",e.jsx(r.code,{children:"CelestialProvider"})," component. For some components, it will be optional."]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`  // app.tsx
  import { CelestialProvider, Foo } from 'celestial-components'

  function App() {
    return (
      <CelestialProvider>
        <Foo />
      </CelestialProvider>
    )
  }
`})}),e.jsx("p",{children:"Create a custom theme based on the theme typing."}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`  // theme.ts
  export const customTheme = {
    font: {
      primary: 'string',
      secondary: 'string',
      tertiary: 'string'
    }
    color: {
      primary: {
        primary100: 'string',
        primary200: 'string',
        primary300: 'string',
        primary400: 'string',
        primary500: 'string',
        primary600: 'string',
        primary700: 'string',
        primary800: 'string',
        primary900: 'string'
      },
      red: {
        red100: 'string',
        red200: 'string',
        red300: 'string',
        red400: 'string',
        red500: 'string',
        red600: 'string',
        red700: 'string',
        red800: 'string',
        red900: 'string'
      },
      yellow: {
        yellow100: 'string',
        yellow200: 'string',
        yellow300: 'string',
        yellow400: 'string',
        yellow500: 'string',
        yellow600: 'string',
        yellow700: 'string',
        yellow800: 'string',
        yellow900: 'string'
      },
      green: {
        green100: 'string',
        green200: 'string',
        green300: 'string',
        green400: 'string',
        green500: 'string',
        green600: 'string',
        green700: 'string',
        green800: 'string',
        green900: 'string'
      },
      blue: {
        blue100: 'string',
        blue200: 'string',
        blue300: 'string',
        blue400: 'string',
        blue500: 'string',
        blue600: 'string',
        blue700: 'string',
        blue800: 'string',
        blue900: 'string'
      }
    }
  }
`})}),e.jsx("p",{children:"Use your theme in the CelestialProvider."}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`  // app.tsx
  import { CelestialProvider, Foo } from 'celestial-components'
  import { customTheme } from './theme'

  function App() {
    return (
      <CelestialProvider theme={customTheme}>
        <Foo />
      </CelestialProvider>
    )
  }
`})}),e.jsx(r.h2,{id:"provider-error",children:"Provider Error"}),e.jsxs("p",{children:["If you attempt to use a component that requires the mandatory use of the ",e.jsx(r.code,{children:"CelestialProvider"})," outside the provider's scope, you will encounter the error ",e.jsx(r.code,{children:"Component must be used inside CelestialProvider"}),". To resolve it, simply wrap the relevant component in the ",e.jsx(r.code,{children:"CelestialProvider"}),"."]}),e.jsx(r.h2,{id:"colors-tokens",children:"Colors tokens"}),e.jsx("p",{children:"The Celestial Components library provides pre-defined tokens that are used in conjunction with the CelestialProvider."}),e.jsxs("div",{className:"sb-color-container",children:[e.jsx("div",{children:Object.entries(s.color.primary).map(([t,n])=>e.jsxs(r.p,{className:"sb-color-p",style:{background:n},children:[t," ",e.jsx(r.br,{})," ",n]}))}),e.jsx("div",{children:Object.entries(s.color.red).map(([t,n])=>e.jsxs(r.p,{className:"sb-color-p",style:{background:n},children:[t," ",e.jsx(r.br,{})," ",n]}))}),e.jsx("div",{children:Object.entries(s.color.yellow).map(([t,n])=>e.jsxs(r.p,{className:"sb-color-p",style:{background:n},children:[t," ",e.jsx(r.br,{})," ",n]}))}),e.jsx("div",{children:Object.entries(s.color.green).map(([t,n])=>e.jsxs(r.p,{className:"sb-color-p",style:{background:n},children:[t," ",e.jsx(r.br,{})," ",n]}))}),e.jsx("div",{children:Object.entries(s.color.blue).map(([t,n])=>e.jsxs(r.p,{className:"sb-color-p",style:{background:n},children:[t," ",e.jsx(r.br,{})," ",n]}))})]}),e.jsx(r.h2,{id:"usage",children:"Usage"}),e.jsx("p",{children:"Import the token you need in your React application:"}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import { Tokens } from 'celestial-components';
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
  `})]})}function T(i={}){const{wrapper:r}=Object.assign({},l(),i.components);return r?e.jsx(r,Object.assign({},i,{children:e.jsx(o,i)})):o(i)}export{T as default};
