import{_ as c}from"./CodeToggler-a1913054.js";import{au as f,o as n,f as u,b as e,w as t,l as a,x as o,y as V,a as g,aw as x,d as B,v as y,Y as v,h as w,e as i,V as s}from"./index-5cc15e35.js";import{V as h,a as r}from"./VRow-31de0795.js";import{V as $}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";const C={},R={class:"d-flex flex-wrap gap-4"};function b(d,l){return n(),u("div",R,[e(o,{color:"primary"},{default:t(()=>[a(" Primary ")]),_:1}),e(o,{color:"secondary"},{default:t(()=>[a(" Secondary ")]),_:1}),e(o,{color:"success"},{default:t(()=>[a(" Success ")]),_:1}),e(o,{color:"warning"},{default:t(()=>[a(" Warning ")]),_:1}),e(o,{color:"info"},{default:t(()=>[a(" Info ")]),_:1}),e(o,{color:"error"},{default:t(()=>[a(" Error ")]),_:1})])}const z=f(C,[["render",b]]),T={},k={class:"d-flex flex-wrap align-end gap-4"};function L(d,l){return n(),u("div",k,[e(o,{color:"primary",density:"compact"},{default:t(()=>[a(" Compact ")]),_:1}),e(o,{color:"primary",density:"comfortable"},{default:t(()=>[a(" Comfortable ")]),_:1}),e(o,{color:"primary",density:"default"},{default:t(()=>[a(" Default ")]),_:1})])}const S=f(T,[["render",L]]),E={__name:"ButtonGroup",setup(d){const l=V(null);return(m,_)=>(n(),g(x,{modelValue:l.value,"onUpdate:modelValue":_[0]||(_[0]=p=>l.value=p),color:"primary",variant:"outlined"},{default:t(()=>[e(o,{icon:"mdi-format-align-left"}),e(o,{icon:"mdi-format-align-center"}),e(o,{icon:"mdi-format-align-right"}),e(o,{icon:"mdi-format-align-justify"})]),_:1},8,["modelValue"]))}},D={},P={class:"d-flex flex-wrap gap-4"};function j(d,l){return n(),u("div",P,[e(o,{color:"primary",icon:"mdi-vuetify"}),e(o,{color:"secondary",icon:"mdi-plus"}),e(o,{icon:"mdi-link",color:"success"}),e(o,{color:"warning",icon:"mdi-share"})])}const I=f(D,[["render",j]]),N={class:"d-flex flex-wrap gap-4"},A={__name:"ButtonLoader",setup(d){const l=V(!1),m=()=>{l.value=!0,setTimeout(()=>l.value=!1,3e3)};return(_,p)=>(n(),u("div",N,[e(o,{loading:B(l),variant:"tonal",onClick:m},{default:t(()=>[a(" Default loader ")]),_:1},8,["loading"]),e(o,{loading:B(l),color:"primary",onClick:m},{loader:t(()=>[e(y,{indeterminate:""})]),default:t(()=>[a(" Custom loader ")]),_:1},8,["loading"])]))}},F={},G={class:"d-flex flex-wrap gap-4"};function O(d,l){return n(),u("div",G,[e(o,{color:"primary",rounded:"0"},{default:t(()=>[a(" Rounded 0 ")]),_:1}),e(o,{color:"primary",rounded:"xs"},{default:t(()=>[a(" Rounded xs ")]),_:1}),e(o,{color:"primary",rounded:"sm"},{default:t(()=>[a(" Rounded sm ")]),_:1}),e(o,{color:"primary"},{default:t(()=>[a(" Button ")]),_:1}),e(o,{color:"primary",rounded:"lg"},{default:t(()=>[a(" Rounded lg ")]),_:1}),e(o,{color:"primary",rounded:"xl"},{default:t(()=>[a(" Rounded xl ")]),_:1})])}const W=f(F,[["render",O]]),X={},H={class:"d-flex flex-wrap align-end gap-4"};function U(d,l){return n(),u("div",H,[e(o,{color:"primary",size:"x-small"},{default:t(()=>[a(" Extra small ")]),_:1}),e(o,{color:"primary",size:"small"},{default:t(()=>[a(" Small ")]),_:1}),e(o,{color:"primary"},{default:t(()=>[a(" Regular ")]),_:1}),e(o,{color:"primary",size:"large"},{default:t(()=>[a(" Large ")]),_:1}),e(o,{color:"primary",size:"x-large"},{default:t(()=>[a(" X-Large ")]),_:1})])}const Y=f(X,[["render",U]]),q={},J={class:"d-flex flex-wrap gap-4"};function K(d,l){return n(),u("div",J,[e(o,{color:"primary",variant:"elevated"},{default:t(()=>[a(" Elevated ")]),_:1}),e(o,{color:"secondary",variant:"flat"},{default:t(()=>[a(" Flat ")]),_:1}),e(o,{color:"success",variant:"tonal"},{default:t(()=>[a(" Tonal ")]),_:1}),e(o,{color:"warning",variant:"outlined"},{default:t(()=>[a(" Outlined ")]),_:1}),e(o,{color:"info",variant:"text"},{default:t(()=>[a(" Text ")]),_:1}),e(o,{color:"error",variant:"plain"},{default:t(()=>[a(" Plain ")]),_:1})])}const M=f(q,[["render",K]]),Q=`<template>
  <div class="d-flex flex-wrap gap-4">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`,Z=`<template>
  <div class="d-flex flex-wrap align-end gap-4">
    <VBtn
      color="primary"
      density="compact"
    >
      Compact
    </VBtn>

    <VBtn
      color="primary"
      density="comfortable"
    >
      Comfortable
    </VBtn>

    <VBtn
      color="primary"
      density="default"
    >
      Default
    </VBtn>
  </div>
</template>
`,ee=`<script setup >
import { ref } from 'vue'

const toggle = ref(null)
<\/script>

<template>
  <VBtnToggle
    v-model="toggle"
    color="primary"
    variant="outlined"
  >
    <VBtn icon="mdi-format-align-left" />
    <VBtn icon="mdi-format-align-center" />
    <VBtn icon="mdi-format-align-right" />
    <VBtn icon="mdi-format-align-justify" />
  </VBtnToggle>
</template>
`,te=`<template>
  <div class="d-flex flex-wrap gap-4">
    <VBtn
      color="primary"
      icon="mdi-vuetify"
    />
    <VBtn
      color="secondary"
      icon="mdi-plus"
    />
    <VBtn
      icon="mdi-link"
      color="success"
    />
    <VBtn
      color="warning"
      icon="mdi-share"
    />
  </div>
</template>
`,oe=`<script setup >
const loading = ref(false)

const load = () => {
  loading.value = true
  setTimeout(() => (loading.value = false), 3000)
}
<\/script>

<template>
  <div class="d-flex flex-wrap gap-4">
    <VBtn
      :loading="loading"
      variant="tonal"
      @click="load"
    >
      Default loader
    </VBtn>

    <VBtn
      :loading="loading"
      color="primary"
      @click="load"
    >
      Custom loader

      <template #loader>
        <VProgressLinear indeterminate />
      </template>
    </VBtn>
  </div>
</template>
`,ae=`<template>
  <div class="d-flex flex-wrap gap-4">
    <VBtn
      color="primary"
      rounded="0"
    >
      Rounded 0
    </VBtn>

    <VBtn
      color="primary"
      rounded="xs"
    >
      Rounded xs
    </VBtn>

    <VBtn
      color="primary"
      rounded="sm"
    >
      Rounded sm
    </VBtn>

    <VBtn color="primary">
      Button
    </VBtn>

    <VBtn
      color="primary"
      rounded="lg"
    >
      Rounded lg
    </VBtn>

    <VBtn
      color="primary"
      rounded="xl"
    >
      Rounded xl
    </VBtn>
  </div>
</template>
`,le=`<template>
  <div class="d-flex flex-wrap align-end gap-4">
    <VBtn
      color="primary"
      size="x-small"
    >
      Extra small
    </VBtn>
    <VBtn
      color="primary"
      size="small"
    >
      Small
    </VBtn>
    <VBtn color="primary">
      Regular
    </VBtn>
    <VBtn
      color="primary"
      size="large"
    >
      Large
    </VBtn>
    <VBtn
      color="primary"
      size="x-large"
    >
      X-Large
    </VBtn>
  </div>
</template>
`,re=`<template>
  <div class="d-flex flex-wrap gap-4">
    <VBtn
      color="primary"
      variant="elevated"
    >
      Elevated
    </VBtn>
    <VBtn
      color="secondary"
      variant="flat"
    >
      Flat
    </VBtn>
    <VBtn
      color="success"
      variant="tonal"
    >
      Tonal
    </VBtn>
    <VBtn
      color="warning"
      variant="outlined"
    >
      Outlined
    </VBtn>
    <VBtn
      color="info"
      variant="text"
    >
      Text
    </VBtn>
    <VBtn
      color="error"
      variant="plain"
    >
      Plain
    </VBtn>
  </div>
</template>
`,ue={__name:"index",setup(d){const l=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Components",disabled:!0},{title:"Button",disabled:!0}];return(m,_)=>{const p=v("ApiBtn");return n(),g(h,null,{default:t(()=>[e(r,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:t(()=>[e($,{divider:"-",items:l,class:"pa-0"}),w("div",null,[e(p,{href:"https://vuetifyjs.com/en/api/v-btn/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Colors"},{default:t(()=>[e(s,null,{default:t(()=>[e(z)]),_:1}),e(c,{code:Q},null,8,["code"])]),_:1})]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Variant"},{default:t(()=>[e(s,null,{default:t(()=>[e(M)]),_:1}),e(c,{code:re},null,8,["code"])]),_:1})]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Density"},{default:t(()=>[e(s,null,{default:t(()=>[e(S)]),_:1}),e(c,{code:Z},null,8,["code"])]),_:1})]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Icon"},{default:t(()=>[e(s,null,{default:t(()=>[e(I)]),_:1}),e(c,{code:te},null,8,["code"])]),_:1})]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Size"},{default:t(()=>[e(s,null,{default:t(()=>[e(Y)]),_:1}),e(c,{code:le},null,8,["code"])]),_:1})]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Rounded"},{default:t(()=>[e(s,null,{default:t(()=>[e(W)]),_:1}),e(c,{code:ae},null,8,["code"])]),_:1})]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Loader"},{default:t(()=>[e(s,null,{default:t(()=>[e(A)]),_:1}),e(c,{code:oe},null,8,["code"])]),_:1})]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Group"},{default:t(()=>[e(s,null,{default:t(()=>[e(E)]),_:1}),e(c,{code:ee},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{ue as default};
