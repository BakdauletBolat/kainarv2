import{_ as c}from"./CodeToggler-a1913054.js";import{au as _,o as s,f as m,b as e,M as o,v as a,y as x,d as t,Q as w,w as r,h as C,t as v,N as L,ar as $,l as V,Y as z,a as b,e as d,V as u}from"./index-5cc15e35.js";import{V as k,a as n}from"./VRow-31de0795.js";import{V as I}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";const B={},S={class:"d-flex align-center flex-wrap gap-4"};function M(i,l){return s(),m("div",S,[e(o,{"model-value":"100",color:"primary"}),e(o,{"model-value":"80",color:"secondary"}),e(o,{"model-value":"60",color:"success"}),e(o,{"model-value":"40",color:"warning"}),e(o,{"model-value":"20",color:"info"}),e(o,{"model-value":"20",color:"error"})])}const R=_(B,[["render",M]]),U={},N={class:"d-flex align-center gap-4 flex-wrap"};function W(i,l){return s(),m("div",N,[e(o,{indeterminate:"",color:"primary"}),e(o,{indeterminate:"",color:"secondary"}),e(o,{indeterminate:"",color:"success"}),e(o,{indeterminate:"",color:"warning"}),e(o,{indeterminate:"",color:"info"}),e(o,{indeterminate:"",color:"error"})])}const j=_(U,[["render",W]]),A={},T={class:"d-flex flex-column gap-4"};function D(i,l){return s(),m("div",T,[e(a,{"model-value":"15",color:"primary"}),e(a,{"model-value":"30","bg-color":"warning",color:"warning"}),e(a,{"model-value":"45","bg-color":"success",color:"error"})])}const E=_(A,[["render",D]]),H={},Q={class:"d-flex flex-column gap-4"};function Y(i,l){return s(),m("div",Q,[e(a,{indeterminate:"",color:"primary"}),e(a,{indeterminate:"",color:"success"}),e(a,{indeterminate:"",color:"warning"})])}const q=_(H,[["render",Y]]),F={},G={class:"d-flex flex-column gap-4"};function J(i,l){return s(),m("div",G,[e(a,{"model-value":"100",color:"primary",rounded:""}),e(a,{"model-value":"100",color:"success",rounded:""}),e(a,{"model-value":"100",color:"warning",rounded:""})])}const K=_(F,[["render",J]]),O={class:"d-flex flex-column gap-4"},X={__name:"ProgressLinearSlot",setup(i){const l=x(20),f=x(33),h=x(78);return(P,p)=>(s(),m("div",O,[e(a,{modelValue:t(h),"onUpdate:modelValue":p[0]||(p[0]=g=>w(h)?h.value=g:null),color:"primary",height:"25"},null,8,["modelValue"]),e(a,{modelValue:t(l),"onUpdate:modelValue":p[1]||(p[1]=g=>w(l)?l.value=g:null),color:"secondary",height:"25"},{default:r(({value:g})=>[C("strong",null,v(Math.ceil(g))+"%",1)]),_:1},8,["modelValue"]),e(a,{modelValue:t(f),"onUpdate:modelValue":p[2]||(p[2]=g=>w(f)?f.value=g:null),height:"25",color:"info"},{default:r(()=>[C("strong",null,v(Math.ceil(t(f)))+"%",1)]),_:1},8,["modelValue"])]))}},Z={},ee={class:"d-flex flex-column gap-4"};function re(i,l){return s(),m("div",ee,[e(a,{"model-value":"10",color:"primary",height:"10",striped:""}),e(a,{"model-value":"20",color:"success",height:"10",striped:""}),e(a,{"model-value":"45",height:"10",striped:"",color:"warning"})])}const le=_(Z,[["render",re]]),oe={class:"d-flex align-center gap-4 flex-wrap"},ae={__name:"ProgressRotate",setup(i){const l=x(0);let f=setInterval(()=>{if(l.value===100)return l.value=0;l.value+=10},1e3);return L(()=>{f=setInterval(()=>{if(l.value===100)return l.value=0;l.value+=10},1e3)}),$(()=>{clearInterval(f)}),(h,P)=>(s(),m("div",oe,[e(o,{rotate:360,size:70,width:7,"model-value":t(l),color:"teal"},{default:r(()=>[V(v(t(l)),1)]),_:1},8,["model-value"]),e(o,{rotate:-90,size:70,width:7,"model-value":t(l),color:"primary"},{default:r(()=>[V(v(t(l)),1)]),_:1},8,["model-value"]),e(o,{rotate:90,size:70,width:7,"model-value":t(l),color:"red"},{default:r(()=>[V(v(t(l)),1)]),_:1},8,["model-value"]),e(o,{rotate:180,size:70,width:7,"model-value":t(l),color:"pink"},{default:r(()=>[V(v(t(l)),1)]),_:1},8,["model-value"])]))}},te={},ne={class:"d-flex align-center flex-wrap gap-4"};function se(i,l){return s(),m("div",ne,[e(o,{size:50,color:"primary",indeterminate:""}),e(o,{width:3,color:"red",indeterminate:""}),e(o,{size:70,width:7,color:"purple",indeterminate:""}),e(o,{width:3,color:"green",indeterminate:""}),e(o,{size:50,color:"amber",indeterminate:""})])}const ie=_(te,[["render",se]]),ce=`<template>
  <div class="d-flex align-center flex-wrap gap-4">
    <VProgressCircular
      model-value="100"
      color="primary"
    />

    <VProgressCircular
      model-value="80"
      color="secondary"
    />

    <VProgressCircular
      model-value="60"
      color="success"
    />

    <VProgressCircular
      model-value="40"
      color="warning"
    />

    <VProgressCircular
      model-value="20"
      color="info"
    />

    <VProgressCircular
      model-value="20"
      color="error"
    />
  </div>
</template>
`,y=`<template>
  <div class="d-flex align-center gap-4 flex-wrap">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`,de=`<template>
  <div class="d-flex flex-column gap-4">
    <VProgressLinear
      model-value="15"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="warning"
      color="warning"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="error"
    />
  </div>
</template>
`,ue=`<template>
  <div class="d-flex flex-column gap-4">
    <VProgressLinear
      model-value="100"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="100"
      color="success"
      rounded
    />

    <VProgressLinear
      model-value="100"
      color="warning"
      rounded
    />
  </div>
</template>
`,me=`<script setup >
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="d-flex flex-column gap-4">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="25"
    />

    <VProgressLinear
      v-model="skill"
      color="secondary"
      height="25"
    >
      <template #default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="25"
      color="info"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </VProgressLinear>
  </div>
</template>
`,fe=`<template>
  <div class="d-flex flex-column gap-4">
    <VProgressLinear
      model-value="10"
      color="primary"
      height="10"
      striped
    />

    <VProgressLinear
      model-value="20"
      color="success"
      height="10"
      striped
    />

    <VProgressLinear
      model-value="45"
      height="10"
      striped
      color="warning"
    />
  </div>
</template>
`,ge=`<script setup >
const value = ref(0)

let interval = setInterval(() => {
  if (value.value === 100)
    return (value.value = 0)

  value.value += 10
}, 1000)

onMounted(() => {
  interval = setInterval(() => {
    if (value.value === 100)
      return (value.value = 0)

    value.value += 10
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
<\/script>

<template>
  <div class="d-flex align-center gap-4 flex-wrap">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="7"
      :model-value="value"
      color="teal"
    >
      {{ value }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="7"
      :model-value="value"
      color="primary"
    >
      {{ value }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="7"
      :model-value="value"
      color="red"
    >
      {{ value }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="180"
      :size="70"
      :width="7"
      :model-value="value"
      color="pink"
    >
      {{ value }}
    </VProgressCircular>
  </div>
</template>
`,_e=`<template>
  <div class="d-flex align-center flex-wrap gap-4">
    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :width="3"
      color="red"
      indeterminate
    />

    <VProgressCircular
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    />

    <VProgressCircular
      :width="3"
      color="green"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="amber"
      indeterminate
    />
  </div>
</template>
`,Pe={__name:"index",setup(i){const l=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Components",disabled:!0},{title:"Progress",disabled:!0}];return(f,h)=>{const P=z("ApiBtn");return s(),b(k,null,{default:r(()=>[e(n,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:r(()=>[e(I,{divider:"-",items:l,class:"pa-0"}),C("div",null,[e(P,{href:"https://vuetifyjs.com/en/components/progress-circular/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(n,{cols:"12",md:"6"},{default:r(()=>[e(d,{title:"Color"},{default:r(()=>[e(u,null,{default:r(()=>[e(R)]),_:1}),e(c,{code:ce},null,8,["code"])]),_:1})]),_:1}),e(n,{cols:"12",md:"6"},{default:r(()=>[e(d,{title:"Indeterminate"},{default:r(()=>[e(u,null,{default:r(()=>[e(j)]),_:1}),e(c,{code:y},null,8,["code"])]),_:1})]),_:1}),e(n,{cols:"12",md:"6"},{default:r(()=>[e(d,{title:"Rotate"},{default:r(()=>[e(u,null,{default:r(()=>[e(ae)]),_:1}),e(c,{code:ge},null,8,["code"])]),_:1})]),_:1}),e(n,{cols:"12",md:"6"},{default:r(()=>[e(d,{title:"Size and Width"},{default:r(()=>[e(u,null,{default:r(()=>[e(ie)]),_:1}),e(c,{code:_e},null,8,["code"])]),_:1})]),_:1}),e(n,{cols:"12",md:"6"},{default:r(()=>[e(d,{title:"Linear Color"},{default:r(()=>[e(u,null,{default:r(()=>[e(E)]),_:1}),e(c,{code:de},null,8,["code"])]),_:1})]),_:1}),e(n,{cols:"12",md:"6"},{default:r(()=>[e(d,{title:"Linear Indeterminate "},{default:r(()=>[e(u,null,{default:r(()=>[e(q)]),_:1}),e(c,{code:y},null,8,["code"])]),_:1})]),_:1}),e(n,{cols:"12",md:"6"},{default:r(()=>[e(d,{title:"Linear Rounded "},{default:r(()=>[e(u,null,{default:r(()=>[e(K)]),_:1}),e(c,{code:ue},null,8,["code"])]),_:1})]),_:1}),e(n,{cols:"12",md:"6"},{default:r(()=>[e(d,{title:"Linear Striped"},{default:r(()=>[e(u,null,{default:r(()=>[e(le)]),_:1}),e(c,{code:fe},null,8,["code"])]),_:1})]),_:1}),e(n,{cols:"12",md:"6"},{default:r(()=>[e(d,{title:"Linear Slot"},{default:r(()=>[e(u,null,{default:r(()=>[e(X)]),_:1}),e(c,{code:me},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{Pe as default};
