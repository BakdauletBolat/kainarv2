import{_ as d}from"./CodeToggler-a1913054.js";import{au as T,o as p,f as _,b as t,w as o,l as a,a2 as n,x as r,y as B,d as m,ab as x,q as b,Q as y,h as V,Y as g,a as w,e as f,V as u}from"./index-5cc15e35.js";import{V as h,a as s}from"./VRow-31de0795.js";import{V as C}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";const k={},$={class:"d-flex flex-wrap gap-6"};function E(c,e){return p(),_("div",$,[t(r,{color:"primary"},{default:o(()=>[a(" Start "),t(n,{activator:"parent",location:"start"},{default:o(()=>[a(" Tooltip ")]),_:1})]),_:1}),t(r,{color:"primary"},{default:o(()=>[a(" End "),t(n,{activator:"parent",location:"end"},{default:o(()=>[a(" Tooltip ")]),_:1})]),_:1}),t(r,{color:"primary"},{default:o(()=>[a(" Top "),t(n,{activator:"parent",location:"top"},{default:o(()=>[a(" Tooltip ")]),_:1})]),_:1}),t(r,{color:"primary"},{default:o(()=>[a(" Bottom "),t(n,{activator:"parent",location:"bottom"},{default:o(()=>[a(" Tooltip ")]),_:1})]),_:1})])}const I=T(k,[["render",E]]),N={class:"d-flex align-center flex-wrap gap-6"},P=V("span",null,"Programmatic tooltip",-1),j={__name:"TooltipVisibility",setup(c){const e=B(!1);return(v,i)=>(p(),_("div",N,[t(r,{color:"primary",onClick:i[0]||(i[0]=l=>e.value=!m(e))},{default:o(()=>[a(" toggle ")]),_:1}),t(n,{modelValue:m(e),"onUpdate:modelValue":i[1]||(i[1]=l=>y(e)?e.value=l:null),location:"top"},{activator:o(({props:l})=>[t(r,x({icon:"",variant:"tonal",color:"error"},l),{default:o(()=>[t(b,null,{default:o(()=>[a(" mdi-cart ")]),_:1})]),_:2},1040)]),default:o(()=>[P]),_:1},8,["modelValue"])]))}},A=`<template>
  <div class="d-flex flex-wrap gap-6">
    <VBtn color="primary">
      Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VBtn color="primary">
      End
      <VTooltip
        activator="parent"
        location="end"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VBtn color="primary">
      Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VBtn color="primary">
      Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`,L=`<script setup >
const show = ref(false)
<\/script>

<template>
  <div class="d-flex align-center flex-wrap gap-6">
    <VBtn
      color="primary"
      @click="show = !show"
    >
      toggle
    </VBtn>

    <VTooltip
      v-model="show"
      location="top"
    >
      <template #activator="{ props }">
        <VBtn
          icon
          variant="tonal"
          color="error"
          v-bind="props"
        >
          <VIcon>
            mdi-cart
          </VIcon>
        </VBtn>
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`,U={__name:"index",setup(c){const e=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Components",disabled:!0},{title:"Tooltip",disabled:!0}];return(v,i)=>{const l=g("ApiBtn");return p(),w(h,null,{default:o(()=>[t(s,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:o(()=>[t(C,{divider:"-",items:e,class:"pa-0"}),V("div",null,[t(l,{href:"https://vuetifyjs.com/en/components/tooltips/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(f,{title:"Location"},{default:o(()=>[t(u,null,{default:o(()=>[t(I)]),_:1}),t(d,{code:A},null,8,["code"])]),_:1})]),_:1}),t(s,{cols:"12"},{default:o(()=>[t(f,{title:"Visibility"},{default:o(()=>[t(u,null,{default:o(()=>[t(j)]),_:1}),t(d,{code:L},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{U as default};
