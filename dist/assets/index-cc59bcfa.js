import{_ as v}from"./CodeToggler-a1913054.js";import{au as z,o as l,f as p,b as a,w as r,l as s,s as t,d as e,S as u,z as d,T as f,U as _,ad as V,aa as A,ae as x,Y as w,a as C,h as y,e as m,V as c}from"./index-5cc15e35.js";import{V as b,a as o}from"./VRow-31de0795.js";import{V as B}from"./VBreadcrumbs-bfc418b8.js";import{V as $}from"./VChip-0b64cb0d.js";import"./vue.runtime.esm-bundler-47f2d23b.js";const k={},I={class:"d-flex flex-wrap gap-4"};function E(n,i){return l(),p("div",I,[a(t,{color:"primary"},{default:r(()=>[s(" AA ")]),_:1}),a(t,{color:"secondary"},{default:r(()=>[s(" BB ")]),_:1}),a(t,{color:"success"},{default:r(()=>[s(" CC ")]),_:1}),a(t,{color:"warning"},{default:r(()=>[s(" DD ")]),_:1}),a(t,{color:"info"},{default:r(()=>[s(" EE ")]),_:1}),a(t,{color:"error"},{default:r(()=>[s(" FF ")]),_:1}),a(t,{color:"pink-lighten-3"},{default:r(()=>[s(" PI ")]),_:1})])}const D=z(k,[["render",E]]),F={class:"v-avatar-group"},N={__name:"AvatarGroup",setup(n){return(i,g)=>(l(),p("div",F,[a(t,{size:"52",image:e(u)},null,8,["image"]),a(t,{size:"52",image:e(d)},null,8,["image"]),a(t,{size:"52",image:e(f)},null,8,["image"]),a(t,{size:"52",image:e(_)},null,8,["image"]),a(t,{size:"52",image:e(V)},null,8,["image"]),a(t,{size:"52",image:e(A)},null,8,["image"]),a(t,{size:"52",image:e(x)},null,8,["image"])]))}},S={},T={class:"d-flex flex-wrap gap-4"};function j(n,i){return l(),p("div",T,[a(t,{color:"primary",variant:"tonal",icon:"mdi-account-outline"}),a(t,{color:"secondary",variant:"tonal",icon:"mdi-alert-outline"}),a(t,{color:"success",variant:"tonal",icon:"mdi-cube-outline"}),a(t,{color:"warning",variant:"tonal",icon:"mdi-weather-sunny"}),a(t,{color:"info",variant:"tonal",icon:"mdi-cart-outline"}),a(t,{color:"error",variant:"tonal",icon:"mdi-close-octagon-outline"}),a(t,{color:"pink-lighten-3",variant:"tonal",icon:"mdi-shape-outline"})])}const G=z(S,[["render",j]]),P={class:"d-flex flex-wrap gap-4"},H={__name:"AvatarImage",setup(n){return(i,g)=>(l(),p("div",P,[a(t,{image:e(u)},null,8,["image"]),a(t,{image:e(d)},null,8,["image"]),a(t,{image:e(f)},null,8,["image"]),a(t,{image:e(_)},null,8,["image"]),a(t,{image:e(V)},null,8,["image"]),a(t,{image:e(A)},null,8,["image"]),a(t,{image:e(x)},null,8,["image"])]))}},R={class:"d-flex align-center flex-wrap gap-4"},U={__name:"AvatarSize",setup(n){return(i,g)=>(l(),p("div",R,[a(t,{size:"x-small",image:e(u)},null,8,["image"]),a(t,{size:"small",image:e(d)},null,8,["image"]),a(t,{image:e(f)},null,8,["image"]),a(t,{size:"large",image:e(_)},null,8,["image"]),a(t,{size:"x-large",image:e(V)},null,8,["image"]),a(t,{size:"65",image:e(A)},null,8,["image"]),a(t,{size:"75",image:e(x)},null,8,["image"])]))}},Y=`<template>
  <div class="d-flex flex-wrap gap-4">
    <VAvatar color="primary">
      AA
    </VAvatar>
    <VAvatar color="secondary">
      BB
    </VAvatar>

    <VAvatar color="success">
      CC
    </VAvatar>

    <VAvatar color="warning">
      DD
    </VAvatar>

    <VAvatar color="info">
      EE
    </VAvatar>

    <VAvatar color="error">
      FF
    </VAvatar>

    <VAvatar color="pink-lighten-3">
      PI
    </VAvatar>
  </div>
</template>
`,q=`<script setup>
import avatar1 from '@/assets/avatars/avatar-1.png'
import avatar2 from '@/assets/avatars/avatar-2.png'
import avatar3 from '@/assets/avatars/avatar-3.png'
import avatar4 from '@/assets/avatars/avatar-4.png'
import avatar5 from '@/assets/avatars/avatar-5.png'
import avatar6 from '@/assets/avatars/avatar-6.png'
import avatar7 from '@/assets/avatars/avatar-7.png'
<\/script>

<template>
  <div class="v-avatar-group">
    <VAvatar
      size="52"
      :image="avatar1"
    />
    <VAvatar
      size="52"
      :image="avatar2"
    />
    <VAvatar
      size="52"
      :image="avatar3"
    />
    <VAvatar
      size="52"
      :image="avatar4"
    />
    <VAvatar
      size="52"
      :image="avatar5"
    />
    <VAvatar
      size="52"
      :image="avatar6"
    />
    <VAvatar
      size="52"
      :image="avatar7"
    />
  </div>
</template>
`,J=`<template>
  <div class="d-flex flex-wrap gap-4">
    <VAvatar
      color="primary"
      variant="tonal"
      icon="mdi-account-outline"
    />
    <VAvatar
      color="secondary"
      variant="tonal"
      icon="mdi-alert-outline"
    />

    <VAvatar
      color="success"
      variant="tonal"
      icon="mdi-cube-outline"
    />

    <VAvatar
      color="warning"
      variant="tonal"
      icon="mdi-weather-sunny"
    />

    <VAvatar
      color="info"
      variant="tonal"
      icon="mdi-cart-outline"
    />

    <VAvatar
      color="error"
      variant="tonal"
      icon="mdi-close-octagon-outline"
    />

    <VAvatar
      color="pink-lighten-3"
      variant="tonal"
      icon="mdi-shape-outline"
    />
  </div>
</template>
`,K=`<script setup>
import avatar1 from '@/assets/avatars/avatar-1.png'
import avatar2 from '@/assets/avatars/avatar-2.png'
import avatar3 from '@/assets/avatars/avatar-3.png'
import avatar4 from '@/assets/avatars/avatar-4.png'
import avatar5 from '@/assets/avatars/avatar-5.png'
import avatar6 from '@/assets/avatars/avatar-6.png'
import avatar7 from '@/assets/avatars/avatar-7.png'
<\/script>

<template>
  <div class="d-flex flex-wrap gap-4">
    <VAvatar :image="avatar1" />
    <VAvatar :image="avatar2" />
    <VAvatar :image="avatar3" />
    <VAvatar :image="avatar4" />
    <VAvatar :image="avatar5" />
    <VAvatar :image="avatar6" />
    <VAvatar :image="avatar7" />
  </div>
</template>
`,L=`<script setup>
import avatar1 from '@/assets/avatars/avatar-1.png'
import avatar2 from '@/assets/avatars/avatar-2.png'
import avatar3 from '@/assets/avatars/avatar-3.png'
import avatar4 from '@/assets/avatars/avatar-4.png'
import avatar5 from '@/assets/avatars/avatar-5.png'
import avatar6 from '@/assets/avatars/avatar-6.png'
import avatar7 from '@/assets/avatars/avatar-7.png'
<\/script>

<template>
  <div class="d-flex align-center flex-wrap gap-4">
    <VAvatar
      size="x-small"
      :image="avatar1"
    />
    <VAvatar
      size="small"
      :image="avatar2"
    />
    <VAvatar :image="avatar3" />
    <VAvatar
      size="large"
      :image="avatar4"
    />
    <VAvatar
      size="x-large"
      :image="avatar5"
    />
    <VAvatar
      size="65"
      :image="avatar6"
    />
    <VAvatar
      size="75"
      :image="avatar7"
    />
  </div>
</template>
`,ta={__name:"index",setup(n){const i=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Components",disabled:!0},{title:"Avatar",disabled:!0}];return(g,M)=>{const h=w("ApiBtn");return l(),C(b,null,{default:r(()=>[a(o,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:r(()=>[a(B,{divider:"-",items:i,class:"pa-0"}),y("div",null,[a(h,{href:"https://vuetifyjs.com/en/api/v-avatar/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),a(o,{cols:"12"},{default:r(()=>[a(m,{title:"Colors"},{default:r(()=>[a(c,null,{default:r(()=>[a(D)]),_:1}),a(v,{code:Y},null,8,["code"])]),_:1})]),_:1}),a(o,{cols:"12"},{default:r(()=>[a(m,{title:"Images"},{default:r(()=>[a(c,null,{default:r(()=>[a(H)]),_:1}),a(v,{code:K},null,8,["code"])]),_:1})]),_:1}),a(o,{cols:"12"},{default:r(()=>[a(m,{title:"Size"},{default:r(()=>[a(c,null,{default:r(()=>[a(U)]),_:1}),a(v,{code:L},null,8,["code"])]),_:1})]),_:1}),a(o,{cols:"12"},{default:r(()=>[a(m,{title:"Icon"},{default:r(()=>[a(c,null,{default:r(()=>[a(G)]),_:1}),a(v,{code:J},null,8,["code"])]),_:1})]),_:1}),a(o,{cols:"12"},{default:r(()=>[a(m,{title:"Group"},{append:r(()=>[a($,{label:"",size:"small",color:"primary"},{default:r(()=>[s(" Custom ")]),_:1})]),default:r(()=>[a(c,null,{default:r(()=>[a(N)]),_:1}),a(v,{code:q},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{ta as default};
