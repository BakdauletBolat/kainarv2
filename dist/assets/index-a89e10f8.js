import{_ as u}from"./CodeToggler-a1913054.js";import{au as x,o as r,a as m,y as w,d as _,w as t,b as e,f as h,F as b,r as g,l as C,t as $,Q as v,Y as y,h as R,e as c,V as d}from"./index-5cc15e35.js";import{V as o}from"./VTextarea-43e68b5a.js";import{a as l,V as T}from"./VRow-31de0795.js";import{a as k,V as q}from"./VTabs-f93555dc.js";import{V as B}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";/* empty css                   */import"./VCounter-5de066e9.js";import"./VField-3bcdd552.js";const A={};function z(s,a){return r(),m(o,{name:"input-7-1",label:"Label","auto-grow":"","model-value":"The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."})}const F=x(A,[["render",z]]),L={};function N(s,a){return r(),m(o,{clearable:"","clear-icon":"mdi-close-circle-outline",label:"Text","model-value":"This is clearable text."})}const U=x(L,[["render",N]]),G={__name:"TextareaCounter",setup(s){const a=[n=>n.length<=25||"Max 25 characters"],p=w("Hello!");return(n,V)=>(r(),m(o,{counter:"",label:"Text",rules:a,"model-value":_(p)},null,8,["model-value"]))}},H={};function j(s,a){return r(),m(o,{class:"mx-2",label:"prepend-icon",rows:"1","prepend-icon":"mdi-comment-outline","append-inner-icon":"mdi-bell-outline"})}const I=x(H,[["render",j]]),M={__name:"TextareaNoResize",setup(s){const a=w("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");return(p,n)=>(r(),m(o,{label:"Text","no-resize":"",rows:"1","model-value":_(a)},null,8,["model-value"]))}},O={};function W(s,a){return r(),m(T,null,{default:t(()=>[e(l,{cols:"12",sm:"6"},{default:t(()=>[e(o,{label:"One row","auto-grow":"",variant:"outlined",rows:"1","row-height":"15"})]),_:1}),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(o,{variant:"filled","auto-grow":"",label:"Two rows",rows:"2","row-height":"20"})]),_:1}),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(o,{label:"Three rows","auto-grow":"",variant:"outlined",rows:"3","row-height":"25",shaped:""})]),_:1}),e(l,{cols:"12",sm:"6"},{default:t(()=>[e(o,{variant:"filled","auto-grow":"",label:"Four rows",rows:"4","row-height":"30",shaped:""})]),_:1})]),_:1})}const D=x(O,[["render",W]]),E={__name:"TextareaVariant",setup(s){const a=w("outlined"),p=["solo","solo-inverted","outlined","filled","underlined","solo-filled","plain"],n=w();return(V,f)=>(r(),h(b,null,[e(q,{modelValue:_(a),"onUpdate:modelValue":f[0]||(f[0]=i=>v(a)?a.value=i:null),class:"mb-6"},{default:t(()=>[(r(),h(b,null,g(p,i=>e(k,{key:i,value:i},{default:t(()=>[C($(i),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(o,{modelValue:_(n),"onUpdate:modelValue":f[1]||(f[1]=i=>v(n)?n.value=i:null),label:"Autocomplete",variant:_(a)},null,8,["modelValue","variant"])],64))}},Q=`<template>
  <VTextarea
    name="input-7-1"
    label="Label"
    auto-grow
    model-value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
  />
</template>
`,S=`<template>
  <VTextarea
    clearable
    clear-icon="mdi-close-circle-outline"
    label="Text"
    model-value="This is clearable text."
  />
</template>
`,Y=`<script setup >
const rules = [(v: string | any[]) => v.length <= 25 || 'Max 25 characters']

const value = ref('Hello!')
<\/script>

<template>
  <VTextarea
    counter
    label="Text"
    :rules="rules"
    :model-value="value"
  />
</template>
`,J=`<template>
  <VTextarea
    class="mx-2"
    label="prepend-icon"
    rows="1"
    prepend-icon="mdi-comment-outline"
    append-inner-icon="mdi-bell-outline"
  />
</template>
`,K=`<script setup >
const value = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
<\/script>

<template>
  <VTextarea
    label="Text"
    no-resize
    rows="1"
    :model-value="value"
  />
</template>
`,P=`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="One row"
        auto-grow
        variant="outlined"
        rows="1"
        row-height="15"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        variant="filled"
        auto-grow
        label="Two rows"
        rows="2"
        row-height="20"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Three rows"
        auto-grow
        variant="outlined"
        rows="3"
        row-height="25"
        shaped
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        variant="filled"
        auto-grow
        label="Four rows"
        rows="4"
        row-height="30"
        shaped
      />
    </VCol>
  </VRow>
</template>
`,X=`<script setup >
type Variant = 'solo' | 'solo-inverted' | 'outlined' | 'solo-filled' | 'underlined' | 'filled' | 'plain' | undefined

const selectedVariant = ref<Variant>('outlined')
const variant = ['solo', 'solo-inverted', 'outlined', 'filled', 'underlined', 'solo-filled', 'plain']
const selected = ref()
<\/script>

<template>
  <VTabs
    v-model="selectedVariant"
    class="mb-6"
  >
    <VTab
      v-for="i in variant"
      :key="i"
      :value="i"
    >
      {{ i }}
    </VTab>
  </VTabs>

  <VTextarea
    v-model="selected"
    label="Autocomplete"
    :variant="selectedVariant"
  />
</template>
`,ue={__name:"index",setup(s){const a=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Forms",disabled:!0},{title:"Textarea",disabled:!0}];return(p,n)=>{const V=y("ApiBtn");return r(),m(T,null,{default:t(()=>[e(l,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:t(()=>[e(B,{divider:"-",items:a,class:"pa-0"}),R("div",null,[e(V,{href:"https://vuetifyjs.com/en/components/textareas/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(c,{title:"Variant"},{default:t(()=>[e(d,null,{default:t(()=>[e(E)]),_:1}),e(u,{code:X},null,8,["code"])]),_:1})]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(c,{title:"Auto Grow"},{default:t(()=>[e(d,null,{default:t(()=>[e(F)]),_:1}),e(u,{code:Q},null,8,["code"])]),_:1})]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(c,{title:"Clearable"},{default:t(()=>[e(d,null,{default:t(()=>[e(U)]),_:1}),e(u,{code:S},null,8,["code"])]),_:1})]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(c,{title:"Counter"},{default:t(()=>[e(d,null,{default:t(()=>[e(G)]),_:1}),e(u,{code:Y},null,8,["code"])]),_:1})]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(c,{title:"No Resize"},{default:t(()=>[e(d,null,{default:t(()=>[e(M)]),_:1}),e(u,{code:K},null,8,["code"])]),_:1})]),_:1}),e(l,{cols:"12",md:"6"},{default:t(()=>[e(c,{title:"Icons"},{default:t(()=>[e(d,null,{default:t(()=>[e(I)]),_:1}),e(u,{code:J},null,8,["code"])]),_:1})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(c,{title:"Rows"},{default:t(()=>[e(d,null,{default:t(()=>[e(D)]),_:1}),e(u,{code:P},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{ue as default};
