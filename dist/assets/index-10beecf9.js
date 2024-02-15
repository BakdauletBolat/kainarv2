import{_ as m}from"./CodeToggler-a1913054.js";import{V as r}from"./VRating-817a93b9.js";import{y as _,o as d,f as g,b as e,d as a,Q as s,h as v,t as x,F as y,a as V,Y as R,w as o,e as p,V as f}from"./index-5cc15e35.js";import{V as h,a as i}from"./VRow-31de0795.js";import{V as b}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";const w={class:"d-flex flex-column"},U={__name:"RatingsColor",setup(c){const l=_(3);return(u,t)=>(d(),g("div",w,[e(r,{modelValue:a(l),"onUpdate:modelValue":t[0]||(t[0]=n=>s(l)?l.value=n:null),color:"secondary","active-color":"primary"},null,8,["modelValue"]),e(r,{modelValue:a(l),"onUpdate:modelValue":t[1]||(t[1]=n=>s(l)?l.value=n:null),color:"error","active-color":"warning"},null,8,["modelValue"]),e(r,{modelValue:a(l),"onUpdate:modelValue":t[2]||(t[2]=n=>s(l)?l.value=n:null),color:"warning","active-color":"info"},null,8,["modelValue"])]))}},C={class:"d-flex flex-column gap-4"},$={__name:"RatingsDensity",setup(c){const l=_(3);return(u,t)=>(d(),g("div",C,[e(r,{modelValue:a(l),"onUpdate:modelValue":t[0]||(t[0]=n=>s(l)?l.value=n:null),density:"default"},null,8,["modelValue"]),e(r,{modelValue:a(l),"onUpdate:modelValue":t[1]||(t[1]=n=>s(l)?l.value=n:null),density:"comfortable"},null,8,["modelValue"]),e(r,{modelValue:a(l),"onUpdate:modelValue":t[2]||(t[2]=n=>s(l)?l.value=n:null),density:"compact"},null,8,["modelValue"])]))}},B={class:"font-weight-bold ps-4"},H={__name:"RatingsHalfIncrements",setup(c){const l=_(3.5);return(u,t)=>(d(),g(y,null,[e(r,{modelValue:a(l),"onUpdate:modelValue":t[0]||(t[0]=n=>s(l)?l.value=n:null),hover:"","half-increments":""},null,8,["modelValue"]),v("div",B,x(a(l)),1)],64))}},I={__name:"RatingsHoverEffect",setup(c){const l=_(3);return(u,t)=>(d(),V(r,{modelValue:a(l),"onUpdate:modelValue":t[0]||(t[0]=n=>s(l)?l.value=n:null),hover:""},null,8,["modelValue"]))}},k={__name:"RatingsIcons",setup(c){const l=_(3.5);return(u,t)=>(d(),V(r,{modelValue:a(l),"onUpdate:modelValue":t[0]||(t[0]=n=>s(l)?l.value=n:null),"empty-icon":"mdi-circle-outline","full-icon":"mdi-circle","half-icon":"mdi-circle-half","half-increments":"",hover:""},null,8,["modelValue"]))}},E=`<script setup >
const rating = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      color="secondary"
      active-color="primary"
    />

    <VRating
      v-model="rating"
      color="error"
      active-color="warning"
    />

    <VRating
      v-model="rating"
      color="warning"
      active-color="info"
    />
  </div>
</template>
`,D=`<script setup >
const rating = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-4">
    <VRating
      v-model="rating"
      density="default"
    />

    <VRating
      v-model="rating"
      density="comfortable"
    />

    <VRating
      v-model="rating"
      density="compact"
    />
  </div>
</template>
`,j=`<script setup >
const rating = ref(3.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    hover
    half-increments
  />
  <div class="font-weight-bold ps-4">
    {{ rating }}
  </div>
</template>
`,A=`<script setup >
const rating = ref(3)
<\/script>

<template>
  <VRating
    v-model="rating"
    hover
  />
</template>
 `,F=`<script setup >
const rating = ref(3.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    empty-icon="mdi-circle-outline"
    full-icon="mdi-circle"
    half-icon="mdi-circle-half"
    half-increments
    hover
  />
</template>
`,z={__name:"index",setup(c){const l=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Components",disabled:!0},{title:"Ratings",disabled:!0}];return(u,t)=>{const n=R("ApiBtn");return d(),V(h,null,{default:o(()=>[e(i,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:o(()=>[e(b,{divider:"-",items:l,class:"pa-0"}),v("div",null,[e(n,{href:"https://vuetifyjs.com/en/components/ratings/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Color"},{default:o(()=>[e(f,null,{default:o(()=>[e(U)]),_:1}),e(m,{code:E},null,8,["code"])]),_:1})]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Density"},{default:o(()=>[e(f,null,{default:o(()=>[e($)]),_:1}),e(m,{code:D},null,8,["code"])]),_:1})]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Hover Effect"},{default:o(()=>[e(f,null,{default:o(()=>[e(I)]),_:1}),e(m,{code:A},null,8,["code"])]),_:1})]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Icons"},{default:o(()=>[e(f,null,{default:o(()=>[e(k)]),_:1}),e(m,{code:F},null,8,["code"])]),_:1})]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Half Increments"},{default:o(()=>[e(f,null,{default:o(()=>[e(H)]),_:1}),e(m,{code:j},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{z as default};
