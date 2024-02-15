import{_ as c}from"./CodeToggler-a1913054.js";import{V as g}from"./VPagination-f00edc22.js";import{y as s,o as m,a as V,d as i,Q as r,f as v,b as e,F as x,Y as h,w as l,h as y,e as _,V as f}from"./index-5cc15e35.js";import{V as b}from"./VSelect-f3760063.js";import{V as P,a as d}from"./VRow-31de0795.js";import{V as z}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";import"./VTextField-354b8d27.js";/* empty css                   */import"./VCounter-5de066e9.js";import"./VField-3bcdd552.js";import"./VCheckboxBtn-8be4ef26.js";import"./VChip-0b64cb0d.js";const w={__name:"PaginationIcon",setup(p){const t=s(1);return(n,o)=>(m(),V(g,{modelValue:i(t),"onUpdate:modelValue":o[0]||(o[0]=a=>r(t)?t.value=a:null),length:4,"prev-icon":"mdi-menu-left","next-icon":"mdi-menu-right"},null,8,["modelValue"]))}},U={__name:"PaginationLength",setup(p){const t=s(1);return(n,o)=>(m(),V(g,{modelValue:i(t),"onUpdate:modelValue":o[0]||(o[0]=a=>r(t)?t.value=a:null),length:15},null,8,["modelValue"]))}},B={__name:"PaginationRounded",setup(p){const t=s(1);return(n,o)=>(m(),V(g,{modelValue:i(t),"onUpdate:modelValue":o[0]||(o[0]=a=>r(t)?t.value=a:null),length:4,rounded:"circle"},null,8,["modelValue"]))}},S={__name:"PaginationSize",setup(p){const t=s(1),n=s("default");return(o,a)=>(m(),v(x,null,[e(b,{modelValue:i(n),"onUpdate:modelValue":a[0]||(a[0]=u=>r(n)?n.value=u:null),label:"Size",items:["large","default","small","x-small"],class:"mb-6",style:{"max-width":"10rem"}},null,8,["modelValue"]),e(g,{modelValue:i(t),"onUpdate:modelValue":a[1]||(a[1]=u=>r(t)?t.value=u:null),length:"4",size:i(n),color:"secondary","active-color":"primary"},null,8,["modelValue","size"])],64))}},$={__name:"PaginationTotalVisible",setup(p){const t=s(1);return(n,o)=>(m(),V(g,{modelValue:i(t),"onUpdate:modelValue":o[0]||(o[0]=a=>r(t)?t.value=a:null),length:15,"total-visible":7},null,8,["modelValue"]))}},C={__name:"PaginationVariant",setup(p){const t=s(1),n=s("elevated");return(o,a)=>(m(),v(x,null,[e(b,{modelValue:i(n),"onUpdate:modelValue":a[0]||(a[0]=u=>r(n)?n.value=u:null),label:"Variant",items:["elevated","outlined","flat","tonal","plain","text"],class:"mb-6",style:{"max-width":"10rem"}},null,8,["modelValue"]),e(g,{modelValue:i(t),"onUpdate:modelValue":a[1]||(a[1]=u=>r(t)?t.value=u:null),length:"4",variant:i(n),color:"secondary","active-color":"primary"},null,8,["modelValue","variant"])],64))}},k=`<script setup >
const page = ref(1)
<\/script>

<template>
  <VPagination
    v-model="page"
    :length="4"
    prev-icon="mdi-menu-left"
    next-icon="mdi-menu-right"
  />
</template>
`,R=`<script setup >
const page = ref(1)
<\/script>

<template>
  <VPagination
    v-model="page"
    :length="15"
  />
</template>
`,T=`<script setup >
const page = ref(1)
<\/script>

<template>
  <VPagination
    v-model="page"
    :length="4"
    rounded="circle"
  />
</template>
`,j=`<script setup >
const page = ref(1)
const size = ref('default')
<\/script>

<template>
  <VSelect
    v-model="size"
    label="Size"
    :items="['large', 'default', 'small', 'x-small']"
    class="mb-6"
    style="max-width: 10rem;"
  />

  <VPagination
    v-model="page"
    length="4"
    :size="size"
    color="secondary"
    active-color="primary"
  />
</template>
`,A=`<script setup >
const page = ref(1)
<\/script>

<template>
  <VPagination
    v-model="page"
    :length="15"
    :total-visible="7"
  />
</template>
`,F=`<script setup >
type Variant = 'elevated' | 'outlined' | 'flat' | 'tonal' | 'plain' | 'text'
const page = ref(1)
const variant = ref<Variant>('elevated')
<\/script>

<template>
  <VSelect
    v-model="variant"
    label="Variant"
    :items="['elevated', 'outlined', 'flat', 'tonal', 'plain', 'text']"
    class="mb-6"
    style="max-width: 10rem;"
  />

  <VPagination
    v-model="page"
    length="4"
    :variant="variant"
    color="secondary"
    active-color="primary"
  />
</template>
`,O={__name:"index",setup(p){const t=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Components",disabled:!0},{title:"Pagination",disabled:!0}];return(n,o)=>{const a=h("ApiBtn");return m(),V(P,null,{default:l(()=>[e(d,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:l(()=>[e(z,{divider:"-",items:t,class:"pa-0"}),y("div",null,[e(a,{href:"https://vuetifyjs.com/en/components/paginations",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(_,{title:"Rounded"},{default:l(()=>[e(f,null,{default:l(()=>[e(B)]),_:1}),e(c,{code:T},null,8,["code"])]),_:1})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(_,{title:"Icons"},{default:l(()=>[e(f,null,{default:l(()=>[e(w)]),_:1}),e(c,{code:k},null,8,["code"])]),_:1})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(_,{title:"Length"},{default:l(()=>[e(f,null,{default:l(()=>[e(U)]),_:1}),e(c,{code:R},null,8,["code"])]),_:1})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(_,{title:"Total Visible"},{default:l(()=>[e(f,null,{default:l(()=>[e($)]),_:1}),e(c,{code:A},null,8,["code"])]),_:1})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(_,{title:"Variant"},{default:l(()=>[e(f,null,{default:l(()=>[e(C)]),_:1}),e(c,{code:F},null,8,["code"])]),_:1})]),_:1}),e(d,{cols:"12",md:"6"},{default:l(()=>[e(_,{title:"Size"},{default:l(()=>[e(f,null,{default:l(()=>[e(S)]),_:1}),e(c,{code:j},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{O as default};
