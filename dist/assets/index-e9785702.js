import{_ as c}from"./CodeToggler-a1913054.js";import{au as h,o as a,f as V,b as e,F,a as m,y as v,w as l,r as x,l as w,t as I,d as b,a6 as y,Q as g,Y as z,h as C,e as p,V as d}from"./index-5cc15e35.js";import{V as s}from"./VFileInput-b4fecfa2.js";import{V as $}from"./VChip-0b64cb0d.js";import{a as k,V as S}from"./VTabs-f93555dc.js";import{V as B,a as i}from"./VRow-31de0795.js";import{V as A}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";import"./VField-3bcdd552.js";import"./VCounter-5de066e9.js";const N={};function T(o,t){return a(),V(F,null,[e(s,{accept:"image/*",label:"File input",class:"mb-8"}),e(s,{accept:"image/*",label:"File input"})],64)}const j=h(N,[["render",T]]),M={};function U(o,t){return a(),m(s,{chips:"",multiple:"",label:"File input w/ chips"})}const P=h(M,[["render",U]]),R={};function D(o,t){return a(),m(s,{"show-size":"",counter:"",multiple:"",label:"File input"})}const E=h(R,[["render",D]]),H={};function L(o,t){return a(),m(s,{multiple:"",label:"File input"})}const Q=h(H,[["render",L]]),Y={};function q(o,t){return a(),m(s,{"show-size":"",label:"File input"})}const G=h(Y,[["render",q]]),J={key:1,class:"text-overline mx-2"},K={__name:"FileInputSlot",setup(o){const t=v([]);return(r,u)=>(a(),m(s,{modelValue:b(t),"onUpdate:modelValue":u[0]||(u[0]=_=>g(t)?t.value=_:null),counter:"",multiple:"",label:"File input",placeholder:"Select your files","prepend-icon":"mdi-paperclip","show-size":1e3},{selection:l(({fileNames:_})=>[(a(!0),V(F,null,x(_,(f,n)=>(a(),V(F,{key:f},[n<2?(a(),m($,{key:0,color:"primary",label:"",size:"small",class:"me-2"},{default:l(()=>[w(I(f),1)]),_:2},1024)):n===2?(a(),V("span",J," +"+I(b(t).length-2)+" File(s) ",1)):y("",!0)],64))),128))]),_:1},8,["modelValue"]))}},O={__name:"FileInputValidation",setup(o){const t=[r=>!r||!r.length||r[0].size<2e6||"Avatar size should be less than 2 MB!"];return(r,u)=>(a(),m(b(s),{rules:t,accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera",label:"Avatar"}))}},W={__name:"FileInputVariant",setup(o){const t=v("outlined"),r=["solo","solo-inverted","outlined","filled","underlined","solo-filled","plain"],u=v();return(_,f)=>(a(),V(F,null,[e(S,{modelValue:b(t),"onUpdate:modelValue":f[0]||(f[0]=n=>g(t)?t.value=n:null),class:"mb-6"},{default:l(()=>[(a(),V(F,null,x(r,n=>e(k,{key:n,value:n},{default:l(()=>[w(I(n),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(s,{modelValue:b(u),"onUpdate:modelValue":f[1]||(f[1]=n=>g(u)?u.value=n:null),label:"File Input",variant:b(t)},null,8,["modelValue","variant"])],64))}},X=`<template>
  <VFileInput
    accept="image/*"
    label="File input"
    class="mb-8"
  />

  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`,Z=`<template>
  <VFileInput
    chips
    multiple
    label="File input w/ chips"
  />
</template>
`,ee=`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`,le=`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`,te=`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`,ae=`<script setup >
const files = ref([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    counter
    multiple
    label="File input"
    placeholder="Select your files"
    prepend-icon="mdi-paperclip"
    :show-size="1000"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="(fileName, index) in fileNames"
        :key="fileName"
      >
        <VChip
          v-if="index < 2"
          color="primary"
          label
          size="small"
          class="me-2"
        >
          {{ fileName }}
        </VChip>

        <span
          v-else-if="index === 2"
          class="text-overline mx-2"
        >
          +{{ files.length - 2 }} File(s)
        </span>
      </template>
    </template>
  </VFileInput>
</template>
`,ne=`<script setup >
import { VFileInput } from 'vuetify/components/VFileInput'

const rules = [
  (value: [{ length: number; size: number }]) => {
    return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
  },
]
<\/script>

<template>
  <VFileInput
    :rules="rules"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="mdi-camera"
    label="Avatar"
  />
</template>
`,ie=`<script setup >
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

  <VFileInput
    v-model="selected"
    label="File Input"
    :variant="selectedVariant"
  />
</template>
`,Ve={__name:"index",setup(o){const t=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Forms",disabled:!0},{title:"File Input",disabled:!0}];return(r,u)=>{const _=z("ApiBtn");return a(),m(B,null,{default:l(()=>[e(i,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:l(()=>[e(A,{divider:"-",items:t,class:"pa-0"}),C("div",null,[e(_,{href:"https://vuetifyjs.com/en/components/file-inputs/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(p,{title:"Variant"},{default:l(()=>[e(d,null,{default:l(()=>[e(W)]),_:1}),e(c,{code:ie},null,8,["code"])]),_:1})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(p,{title:"Accept"},{default:l(()=>[e(d,null,{default:l(()=>[e(j)]),_:1}),e(c,{code:X},null,8,["code"])]),_:1})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(p,{title:"Chips"},{default:l(()=>[e(d,null,{default:l(()=>[e(P)]),_:1}),e(c,{code:Z},null,8,["code"])]),_:1})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(p,{title:"Counter"},{default:l(()=>[e(d,null,{default:l(()=>[e(E)]),_:1}),e(c,{code:ee},null,8,["code"])]),_:1})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(p,{title:"Multiple"},{default:l(()=>[e(d,null,{default:l(()=>[e(Q)]),_:1}),e(c,{code:le},null,8,["code"])]),_:1})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(p,{title:"Show Size"},{default:l(()=>[e(d,null,{default:l(()=>[e(G)]),_:1}),e(c,{code:te},null,8,["code"])]),_:1})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(p,{title:"Validation"},{default:l(()=>[e(d,null,{default:l(()=>[e(O)]),_:1}),e(c,{code:ne},null,8,["code"])]),_:1})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(p,{title:"Slot"},{default:l(()=>[e(d,null,{default:l(()=>[e(K)]),_:1}),e(c,{code:ae},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{Ve as default};
