import{j as jsxRuntimeExports}from"./jsx-runtime-vNq4Oc-g.js";import{u as ut}from"./styled-components.browser.esm-sUdGPuZR.js";import"./ThemeContext-LdRP1DHW.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const Text=ut.p`
font-family: ${r=>r.theme.font.primary};
  color: ${props=>eval(`props.theme.color.${props.color||"primary.primary800"}`)};
  font-size: 2rem;
  font-weight: bold;
`,Foo=({color:r})=>jsxRuntimeExports.jsx(Text,{color:r,children:"Celestial"});try{Foo.displayName="Foo",Foo.__docgenInfo={description:"",displayName:"Foo",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary.primary100"'},{value:'"primary.primary200"'},{value:'"primary.primary300"'},{value:'"primary.primary400"'},{value:'"primary.primary500"'},{value:'"primary.primary600"'},{value:'"primary.primary700"'},{value:'"primary.primary800"'},{value:'"primary.primary900"'}]}}}}}catch(r){}const meta={title:"Example/Foo",component:Foo,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Primary={args:{color:"primary.primary100"}},Secondary={args:{color:"primary.primary800"}};var a,o,e;Primary.parameters={...Primary.parameters,docs:{...(a=Primary.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    color: 'primary.primary100'
  }
}`,...(e=(o=Primary.parameters)==null?void 0:o.docs)==null?void 0:e.source}}};var m,p,i;Secondary.parameters={...Secondary.parameters,docs:{...(m=Secondary.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: 'primary.primary800'
  }
}`,...(i=(p=Secondary.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const __namedExportsOrder=["Primary","Secondary"];export{Primary,Secondary,__namedExportsOrder,meta as default};
