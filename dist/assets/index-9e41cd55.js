import{_ as s}from"./CodeToggler-a1913054.js";import{au as x,o as c,f as _,b as a,w as e,q as o,av as t,s as r,d as n,T as g,af as p,x as V,l as v,S as w,Y as y,a as b,h,e as m,V as u}from"./index-5cc15e35.js";import{V as z,a as i}from"./VRow-31de0795.js";import{V as A}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";const I={},C={class:"d-flex align-center flex-wrap gap-4"};function $(d,l){return c(),_("div",C,[a(t,{dot:"",color:"primary"},{default:e(()=>[a(o,{size:"24",icon:"mdi-newspaper-variant-outline"})]),_:1}),a(t,{dot:"",color:"secondary"},{default:e(()=>[a(o,{size:"24",icon:"mdi-newspaper-variant-outline"})]),_:1}),a(t,{dot:"",color:"success"},{default:e(()=>[a(o,{size:"24",icon:"mdi-newspaper-variant-outline"})]),_:1}),a(t,{dot:"",color:"warning"},{default:e(()=>[a(o,{size:"24",icon:"mdi-newspaper-variant-outline"})]),_:1}),a(t,{dot:"",color:"info"},{default:e(()=>[a(o,{icon:"mdi-newspaper-variant-outline"})]),_:1}),a(t,{dot:"",color:"error"},{default:e(()=>[a(o,{icon:"mdi-newspaper-variant-outline"})]),_:1})])}const k=x(I,[["render",$]]),N={class:"d-flex flex-wrap gap-4"},S={__name:"BadgeIcon",setup(d){return(l,f)=>(c(),_("div",N,[a(t,{color:"info"},{badge:e(()=>[a(o,{icon:"mdi-information-variant"})]),default:e(()=>[a(r,{image:n(g)},null,8,["image"])]),_:1}),a(t,{color:"success",icon:"mdi-lock-outline"},{default:e(()=>[a(r,{image:n(g)},null,8,["image"])]),_:1})]))}},T={class:"d-flex flex-wrap gap-4"},j={__name:"BadgePosition",setup(d){return(l,f)=>(c(),_("div",T,[a(t,{color:"primary",content:"1",location:"start top"},{default:e(()=>[a(r,{image:n(p)},null,8,["image"])]),_:1}),a(t,{color:"primary",content:"1",location:"bottom end"},{default:e(()=>[a(r,{image:n(p)},null,8,["image"])]),_:1}),a(t,{color:"primary",content:"1",location:"top end"},{default:e(()=>[a(r,{image:n(p)},null,8,["image"])]),_:1}),a(t,{color:"primary",content:"1",location:"bottom start"},{default:e(()=>[a(r,{image:n(p)},null,8,["image"])]),_:1})]))}},P={class:"d-flex flex-wrap gap-4"},q={__name:"BadgeStyle",setup(d){return(l,f)=>(c(),_("div",P,[a(t,{color:"primary",content:"5"},{default:e(()=>[a(V,{color:"primary"},{default:e(()=>[v(" default ")]),_:1})]),_:1}),a(t,{color:"primary",content:"5",bordered:""},{default:e(()=>[a(V,{color:"primary"},{default:e(()=>[v(" Border ")]),_:1})]),_:1}),a(t,{dot:"",color:"primary",location:"top end"},{default:e(()=>[a(r,{size:"42",image:n(w)},null,8,["image"])]),_:1})]))}},E=`<template>
  <div class="d-flex align-center flex-wrap gap-4">
    <VBadge
      dot
      color="primary"
    >
      <VIcon
        size="24"
        icon="mdi-newspaper-variant-outline"
      />
    </VBadge>

    <VBadge
      dot
      color="secondary"
    >
      <VIcon
        size="24"
        icon="mdi-newspaper-variant-outline"
      />
    </VBadge>

    <VBadge
      dot
      color="success"
    >
      <VIcon
        size="24"
        icon="mdi-newspaper-variant-outline"
      />
    </VBadge>

    <VBadge
      dot
      color="warning"
    >
      <VIcon
        size="24"
        icon="mdi-newspaper-variant-outline"
      />
    </VBadge>

    <VBadge
      dot
      color="info"
    >
      <VIcon icon="mdi-newspaper-variant-outline" />
    </VBadge>

    <VBadge
      dot
      color="error"
    >
      <VIcon icon="mdi-newspaper-variant-outline" />
    </VBadge>
  </div>
</template>
`,H=`<script setup >
import avatar1 from '@/assets/avatars/avatar-3.png'
<\/script>

<template>
  <div class="d-flex flex-wrap gap-4">
    <VBadge color="info">
      <template #badge>
        <VIcon icon="mdi-information-variant" />
      </template>

      <VAvatar :image="avatar1" />
    </VBadge>

    <VBadge
      color="success"
      icon="mdi-lock-outline"
    >
      <VAvatar :image="avatar1" />
    </VBadge>
  </div>
</template>
`,R=`<script setup >
import avatar1 from '@/assets/avatars/avatar-8.png'
<\/script>

<template>
  <div class="d-flex flex-wrap gap-4">
    <VBadge
      color="primary"
      content="1"
      location="start top"
    >
      <VAvatar :image="avatar1" />
    </VBadge>

    <VBadge
      color="primary"
      content="1"
      location="bottom end"
    >
      <VAvatar :image="avatar1" />
    </VBadge>

    <VBadge
      color="primary"
      content="1"
      location="top end"
    >
      <VAvatar :image="avatar1" />
    </VBadge>

    <VBadge
      color="primary"
      content="1"
      location="bottom start"
    >
      <VAvatar :image="avatar1" />
    </VBadge>
  </div>
</template>
`,Y=`<script setup >
import avatar1 from '@/assets/avatars/avatar-1.png'
<\/script>

<template>
  <div class="d-flex flex-wrap gap-4">
    <VBadge
      color="primary"
      content="5"
    >
      <VBtn color="primary">
        default
      </VBtn>
    </VBadge>

    <VBadge
      color="primary"
      content="5"
      bordered
    >
      <VBtn color="primary">
        Border
      </VBtn>
    </VBadge>

    <VBadge
      dot
      color="primary"
      location="top end"
    >
      <VAvatar
        size="42"
        :image="avatar1"
      />
    </VBadge>
  </div>
</template>
`,M={__name:"index",setup(d){const l=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Components",disabled:!0},{title:"Badge",disabled:!0}];return(f,D)=>{const B=y("ApiBtn");return c(),b(z,null,{default:e(()=>[a(i,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:e(()=>[a(A,{divider:"-",items:l,class:"pa-0"}),h("div",null,[a(B,{href:"https://vuetifyjs.com/en/api/v-badge/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),a(i,{cols:"12",md:"6"},{default:e(()=>[a(m,{title:"Colors"},{default:e(()=>[a(u,null,{default:e(()=>[a(k)]),_:1}),a(s,{code:E},null,8,["code"])]),_:1})]),_:1}),a(i,{cols:"12",md:"6"},{default:e(()=>[a(m,{title:"Style"},{default:e(()=>[a(u,null,{default:e(()=>[a(q)]),_:1}),a(s,{code:Y},null,8,["code"])]),_:1})]),_:1}),a(i,{cols:"12",md:"6"},{default:e(()=>[a(m,{title:"Position"},{default:e(()=>[a(u,null,{default:e(()=>[a(j)]),_:1}),a(s,{code:R},null,8,["code"])]),_:1})]),_:1}),a(i,{cols:"12",md:"6"},{default:e(()=>[a(m,{title:"Icon"},{default:e(()=>[a(u,null,{default:e(()=>[a(S)]),_:1}),a(s,{code:H},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{M as default};
