import{_ as u}from"./CodeToggler-a1913054.js";import{au as b,o as c,f as g,b as e,w as l,ac as o,F as w,y as _,a as p,q as C,d as s,Q as v,a2 as S,l as h,t as y,p as k,dq as x,M as T,Y as R,h as $,e as m,V as f}from"./index-5cc15e35.js";import{a as r,V as n}from"./VRow-31de0795.js";import{V as B}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";const D={};function M(i,a){return c(),g(w,null,[e(n,null,{default:l(()=>[e(r,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(o,{"model-value":"red",label:"red",color:"red",value:"red"}),e(o,{"model-value":"red-darken-3",label:"red-darken-3",color:"red-darken-3",value:"red-darken-3"})]),_:1}),e(r,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(o,{"model-value":"indigo",label:"indigo",color:"indigo",value:"indigo"}),e(o,{"model-value":"indigo-darken-3",label:"indigo-darken-3",color:"indigo-darken-3",value:"indigo-darken-3"})]),_:1}),e(r,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(o,{"model-value":"orange",label:"orange",color:"orange",value:"orange"}),e(o,{"model-value":"orange-darken-3",label:"orange-darken-3",color:"orange-darken-3",value:"orange-darken-3"})]),_:1})]),_:1}),e(n,{class:"mt-6"},{default:l(()=>[e(r,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(o,{"model-value":"primary",label:"primary",color:"primary",value:"primary"}),e(o,{"model-value":"secondary",label:"secondary",color:"secondary",value:"secondary"})]),_:1}),e(r,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(o,{"model-value":"success",label:"success",color:"success",value:"success"}),e(o,{"model-value":"info",label:"info",color:"info",value:"info"})]),_:1}),e(r,{cols:"12",sm:"4",md:"4"},{default:l(()=>[e(o,{"model-value":"warning",label:"warning",color:"warning",value:"warning"}),e(o,{"model-value":"error",label:"error",color:"error",value:"error"})]),_:1})]),_:1})],64)}const I=b(D,[["render",M]]),z={__name:"SwitchCustom",setup(i){const a=_(!1);return(V,t)=>(c(),p(x,{class:k(["custom-label border rounded w-100",s(a)?"text-primary border-primary border-opacity-100":""])},{default:l(()=>[e(C,{icon:s(a)?"mdi-unfold-more-vertical":"mdi-unfold-less-vertical",class:"custom-label-icon"},null,8,["icon"]),e(o,{modelValue:s(a),"onUpdate:modelValue":t[0]||(t[0]=d=>v(a)?a.value=d:null)},null,8,["modelValue"]),e(S,{activator:"parent",location:"top"},{default:l(()=>[h(y(s(a)?"Expand":"Collapse"),1)]),_:1})]),_:1},8,["class"]))}},E={__name:"SwitchInset",setup(i){const a=_(!0);return(V,t)=>(c(),p(o,{modelValue:s(a),"onUpdate:modelValue":t[0]||(t[0]=d=>v(a)?a.value=d:null),inset:"",label:`Switch: ${s(a).toString()}`},null,8,["modelValue","label"]))}},F={__name:"SwitchSlot",setup(i){const a=_(!1);return(V,t)=>(c(),p(o,{modelValue:s(a),"onUpdate:modelValue":t[0]||(t[0]=d=>v(a)?a.value=d:null)},{label:l(()=>[h(" Turn on the progress: "),e(T,{indeterminate:s(a),size:"24",class:"ms-2"},null,8,["indeterminate"])]),_:1},8,["modelValue"]))}},L={};function N(i,a){return c(),g(w,null,[e(n,null,{default:l(()=>[e(r,{cols:"6"},{default:l(()=>[e(o,{color:"primary","model-value":"",label:"on"})]),_:1}),e(r,{cols:"6"},{default:l(()=>[e(o,{color:"primary","model-value":!1,label:"off"})]),_:1})]),_:1}),e(n,null,{default:l(()=>[e(r,{cols:"6"},{default:l(()=>[e(o,{color:"primary","model-value":"onDisabled",disabled:"",label:"on disabled",value:"onDisabled"})]),_:1}),e(r,{cols:"6"},{default:l(()=>[e(o,{color:"primary","model-value":!1,disabled:"",label:"off disabled"})]),_:1})]),_:1}),e(n,null,{default:l(()=>[e(r,{cols:"6"},{default:l(()=>[e(o,{loading:"warning","model-value":"",label:"on loading"})]),_:1}),e(r,{cols:"6"},{default:l(()=>[e(o,{"model-value":!1,loading:"warning",label:"off loading"})]),_:1})]),_:1})],64)}const U=b(L,[["render",N]]),j=`<template>
  <VRow>
    <VCol
      cols="12"
      sm="4"
      md="4"
    >
      <VSwitch
        model-value="red"
        label="red"
        color="red"
        value="red"
      />
      <VSwitch
        model-value="red-darken-3"
        label="red-darken-3"
        color="red-darken-3"
        value="red-darken-3"
      />
    </VCol>
    <VCol
      cols="12"
      sm="4"
      md="4"
    >
      <VSwitch
        model-value="indigo"
        label="indigo"
        color="indigo"
        value="indigo"
      />
      <VSwitch
        model-value="indigo-darken-3"
        label="indigo-darken-3"
        color="indigo-darken-3"
        value="indigo-darken-3"
      />
    </VCol>
    <VCol
      cols="12"
      sm="4"
      md="4"
    >
      <VSwitch
        model-value="orange"
        label="orange"
        color="orange"
        value="orange"
      />
      <VSwitch
        model-value="orange-darken-3"
        label="orange-darken-3"
        color="orange-darken-3"
        value="orange-darken-3"
      />
    </VCol>
  </VRow>

  <VRow class="mt-6">
    <VCol
      cols="12"
      sm="4"
      md="4"
    >
      <VSwitch
        model-value="primary"
        label="primary"
        color="primary"
        value="primary"
      />
      <VSwitch
        model-value="secondary"
        label="secondary"
        color="secondary"
        value="secondary"
      />
    </VCol>
    <VCol
      cols="12"
      sm="4"
      md="4"
    >
      <VSwitch
        model-value="success"
        label="success"
        color="success"
        value="success"
      />
      <VSwitch
        model-value="info"
        label="info"
        color="info"
        value="info"
      />
    </VCol>
    <VCol
      cols="12"
      sm="4"
      md="4"
    >
      <VSwitch
        model-value="warning"
        label="warning"
        color="warning"
        value="warning"
      />
      <VSwitch
        model-value="error"
        label="error"
        color="error"
        value="error"
      />
    </VCol>
  </VRow>
</template>
`,q=`<script setup >
const switchToggle = ref(false)
<\/script>

<template>
  <VLabel
    class="custom-label border rounded w-100"
    :class="switchToggle ? 'text-primary border-primary border-opacity-100' : ''"
  >
    <VIcon
      :icon="switchToggle ? 'mdi-unfold-more-vertical' : 'mdi-unfold-less-vertical'"
      class="custom-label-icon"
    />
    <VSwitch v-model="switchToggle" />

    <VTooltip
      activator="parent"
      location="top"
    >
      {{ switchToggle ? 'Expand' : 'Collapse' }}
    </VTooltip>
  </VLabel>
</template>
`,A=`<script setup >
const model = ref(true)
<\/script>

<template>
  <VSwitch
    v-model="model"
    inset
    :label="\`Switch: \${model.toString()}\`"
  />
</template>
`,P=`<script setup >
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress:
      <VProgressCircular
        :indeterminate="switchMe"
        size="24"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`,H=`<template>
  <VRow>
    <VCol cols="6">
      <VSwitch
        color="primary"
        model-value
        label="on"
      />
    </VCol>
    <VCol cols="6">
      <VSwitch
        color="primary"
        :model-value="false"
        label="off"
      />
    </VCol>
  </VRow>

  <VRow>
    <VCol cols="6">
      <VSwitch
        color="primary"
        model-value="onDisabled"
        disabled
        label="on disabled"
        value="onDisabled"
      />
    </VCol>
    <VCol cols="6">
      <VSwitch
        color="primary"
        :model-value="false"
        disabled
        label="off disabled"
      />
    </VCol>
  </VRow>

  <VRow>
    <VCol cols="6">
      <VSwitch
        loading="warning"
        model-value
        label="on loading"
      />
    </VCol>
    <VCol cols="6">
      <VSwitch
        :model-value="false"
        loading="warning"
        label="off loading"
      />
    </VCol>
  </VRow>
</template>
`,O={__name:"index",setup(i){const a=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Forms",disabled:!0},{title:"Sliders",disabled:!0}];return(V,t)=>{const d=R("ApiBtn");return c(),p(n,null,{default:l(()=>[e(r,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:l(()=>[e(B,{divider:"-",items:a,class:"pa-0"}),$("div",null,[e(d,{href:"https://vuetifyjs.com/en/components/switches/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(m,{title:"Color"},{default:l(()=>[e(f,null,{default:l(()=>[e(I)]),_:1}),e(u,{code:j},null,8,["code"])]),_:1})]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(m,{title:"Inset"},{default:l(()=>[e(f,null,{default:l(()=>[e(E)]),_:1}),e(u,{code:A},null,8,["code"])]),_:1})]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(m,{title:"Slot"},{default:l(()=>[e(f,null,{default:l(()=>[e(F)]),_:1}),e(u,{code:P},null,8,["code"])]),_:1})]),_:1}),e(r,{cols:"12"},{default:l(()=>[e(m,{title:"States"},{default:l(()=>[e(f,null,{default:l(()=>[e(U)]),_:1}),e(u,{code:H},null,8,["code"])]),_:1})]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(m,{title:"Custom"},{default:l(()=>[e(f,null,{default:l(()=>[e(z)]),_:1}),e(u,{code:q},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{O as default};
