import{_ as p}from"./CodeToggler-a1913054.js";import{au as w,o as u,f as V,b as e,w as l,y as m,F as _,r as O,q as $,d as s,Q as i,a2 as B,l as h,t as C,p as J,dq as S,a as x,h as g,Y as A,e as f,V as v}from"./index-5cc15e35.js";import{a as c,V as k}from"./VRow-31de0795.js";import{V as a}from"./VCheckbox-bee0cd1c.js";import{V as I}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";import"./VCheckboxBtn-8be4ef26.js";const R={};function U(b,o){return u(),V("div",null,[e(k,null,{default:l(()=>[e(c,{cols:"12",sm:"4"},{default:l(()=>[e(a,{"model-value":"red",label:"red",color:"red",value:"red"}),e(a,{"model-value":"red-darken-3",label:"red-darken-3",color:"red-darken-3",value:"red-darken-3"})]),_:1}),e(c,{cols:"12",sm:"4"},{default:l(()=>[e(a,{"model-value":"indigo",label:"indigo",color:"indigo",value:"indigo"}),e(a,{"model-value":"indigo-darken-3",label:"indigo-darken-3",color:"indigo-darken-3",value:"indigo-darken-3"})]),_:1}),e(c,{cols:"12",sm:"4"},{default:l(()=>[e(a,{"model-value":"orange",label:"orange",color:"orange",value:"orange"}),e(a,{"model-value":"orange-darken-3",label:"orange-darken-3",color:"orange-darken-3",value:"orange-darken-3"})]),_:1})]),_:1}),e(k,{class:"mt-6"},{default:l(()=>[e(c,{cols:"12",sm:"4"},{default:l(()=>[e(a,{"model-value":"primary",label:"primary",color:"primary",value:"primary"}),e(a,{"model-value":"secondary",label:"secondary",color:"secondary",value:"secondary"})]),_:1}),e(c,{cols:"12",sm:"4"},{default:l(()=>[e(a,{"model-value":"success",label:"success",color:"success",value:"success"}),e(a,{"model-value":"info",label:"info",color:"info",value:"info"})]),_:1}),e(c,{cols:"12",sm:"4"},{default:l(()=>[e(a,{"model-value":"warning",label:"warning",color:"warning",value:"warning"}),e(a,{"model-value":"error",label:"error",color:"error",value:"error"})]),_:1})]),_:1})])}const D=w(R,[["render",U]]),L={class:"d-flex justify-space-between gap-4 w-100"},T={__name:"CheckboxCustom",setup(b){const o=m(["checkbox-1"]),n=[{label:"Option 1",value:"checkbox-1",icon:"mdi-view-compact-outline"},{label:"Option 2",value:"checkbox-2",icon:"mdi-view-dashboard-outline"},{label:"Option 3",value:"checkbox-3",icon:"mdi-view-sequential-outline"}];return(r,t)=>(u(),V("div",L,[(u(),V(_,null,O(n,d=>e(S,{key:d.value,class:J(["custom-label border rounded",s(o).includes(d.value)?"text-primary border-primary border-opacity-100":""])},{default:l(()=>[e($,{icon:d.icon,class:"custom-label-icon"},null,8,["icon"]),e(a,{modelValue:s(o),"onUpdate:modelValue":t[0]||(t[0]=y=>i(o)?o.value=y:null),value:d.value},null,8,["modelValue","value"]),e(B,{activator:"parent",location:"top"},{default:l(()=>[h(C(d.label),1)]),_:2},1024)]),_:2},1032,["class"])),64))]))}},j={__name:"CheckboxLabelSlot",setup(b){const o=m(!1);return(n,r)=>(u(),x(a,{modelValue:s(o),"onUpdate:modelValue":r[0]||(r[0]=t=>i(o)?o.value=t:null)},{label:l(()=>[h(" I agree that Vuetify is awesome ")]),_:1},8,["modelValue"]))}},q={__name:"CheckboxModelAsArray",setup(b){const o=m(["John"]);return(n,r)=>(u(),V(_,null,[g("p",null,C(s(o)),1),e(a,{modelValue:s(o),"onUpdate:modelValue":r[0]||(r[0]=t=>i(o)?o.value=t:null),label:"John",value:"John"},null,8,["modelValue"]),e(a,{modelValue:s(o),"onUpdate:modelValue":r[1]||(r[1]=t=>i(o)?o.value=t:null),label:"Jacob",value:"Jacob"},null,8,["modelValue"])],64))}},M={__name:"CheckboxModelAsBoolean",setup(b){const o=m(!0),n=m(!1);return(r,t)=>(u(),V(_,null,[e(a,{modelValue:s(o),"onUpdate:modelValue":t[0]||(t[0]=d=>i(o)?o.value=d:null),label:`Checkbox 1: ${s(o).toString()}`},null,8,["modelValue","label"]),e(a,{modelValue:s(n),"onUpdate:modelValue":t[1]||(t[1]=d=>i(n)?n.value=d:null),label:`Checkbox 2: ${s(n).toString()}`},null,8,["modelValue","label"])],64))}},F={__name:"CheckboxStates",setup(b){const o=m(!0),n=m(!1);return(r,t)=>(u(),x(k,null,{default:l(()=>[e(c,{cols:"12",md:"4",sm:"6"},{default:l(()=>[e(a,{modelValue:s(o),"onUpdate:modelValue":t[0]||(t[0]=d=>i(o)?o.value=d:null),label:"On"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12",md:"4",sm:"6"},{default:l(()=>[e(a,{modelValue:s(n),"onUpdate:modelValue":t[1]||(t[1]=d=>i(n)?n.value=d:null),label:"Off"},null,8,["modelValue"])]),_:1}),e(c,{cols:"12",md:"4",sm:"6"},{default:l(()=>[e(a,{indeterminate:"",label:"Indeterminate"})]),_:1}),e(c,{cols:"12",md:"4",sm:"6"},{default:l(()=>[e(a,{"model-value":"disabledOn",disabled:"",label:"Disabled On",value:"disabledOn"})]),_:1}),e(c,{cols:"12",md:"4",sm:"6"},{default:l(()=>[e(a,{"model-value":!1,disabled:"",label:"Disabled Off"})]),_:1}),e(c,{cols:"12",md:"4",sm:"6"},{default:l(()=>[e(a,{disabled:"",indeterminate:"",label:"Disabled Indeterminate"})]),_:1})]),_:1}))}},N=`<template>
  <div>
    <VRow>
      <VCol
        cols="12"
        sm="4"
      >
        <VCheckbox
          model-value="red"
          label="red"
          color="red"
          value="red"
        />
        <VCheckbox
          model-value="red-darken-3"
          label="red-darken-3"
          color="red-darken-3"
          value="red-darken-3"
        />
      </VCol>
      <VCol
        cols="12"
        sm="4"
      >
        <VCheckbox
          model-value="indigo"
          label="indigo"
          color="indigo"
          value="indigo"
        />
        <VCheckbox
          model-value="indigo-darken-3"
          label="indigo-darken-3"
          color="indigo-darken-3"
          value="indigo-darken-3"
        />
      </VCol>
      <VCol
        cols="12"
        sm="4"
      >
        <VCheckbox
          model-value="orange"
          label="orange"
          color="orange"
          value="orange"
        />
        <VCheckbox
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
      >
        <VCheckbox
          model-value="primary"
          label="primary"
          color="primary"
          value="primary"
        />
        <VCheckbox
          model-value="secondary"
          label="secondary"
          color="secondary"
          value="secondary"
        />
      </VCol>
      <VCol
        cols="12"
        sm="4"
      >
        <VCheckbox
          model-value="success"
          label="success"
          color="success"
          value="success"
        />
        <VCheckbox
          model-value="info"
          label="info"
          color="info"
          value="info"
        />
      </VCol>
      <VCol
        cols="12"
        sm="4"
      >
        <VCheckbox
          model-value="warning"
          label="warning"
          color="warning"
          value="warning"
        />
        <VCheckbox
          model-value="error"
          label="error"
          color="error"
          value="error"
        />
      </VCol>
    </VRow>
  </div>
</template>
`,z=`<script setup >
const selectedCheckbox = ref<string[]>(['checkbox-1'])

const checkboxes = [
  {
    label: 'Option 1',
    value: 'checkbox-1',
    icon: 'mdi-view-compact-outline',
  },
  {
    label: 'Option 2',
    value: 'checkbox-2',
    icon: 'mdi-view-dashboard-outline',
  },
  {
    label: 'Option 3',
    value: 'checkbox-3',
    icon: 'mdi-view-sequential-outline',
  },
]
<\/script>

<template>
  <div class="d-flex justify-space-between gap-4 w-100">
    <VLabel
      v-for="item in checkboxes"
      :key="item.value"
      class="custom-label border rounded"
      :class="selectedCheckbox.includes(item.value) ? 'text-primary border-primary border-opacity-100' : ''"
    >
      <VIcon
        :icon="item.icon"
        class="custom-label-icon"
      />
      <VCheckbox
        v-model="selectedCheckbox"
        :value="item.value"
      />
      <VTooltip
        activator="parent"
        location="top"
      >
        {{ item.label }}
      </VTooltip>
    </VLabel>
  </div>
</template>
`,E=`<script setup >
const checkbox = ref(false)
<\/script>

<template>
  <VCheckbox v-model="checkbox">
    <template #label>
      I agree that Vuetify is awesome
    </template>
  </VCheckbox>
</template>
`,H=`<script setup >
const selected = ref(['John'])
<\/script>

<template>
  <p>{{ selected }}</p>
  <VCheckbox
    v-model="selected"
    label="John"
    value="John"
  />
  <VCheckbox
    v-model="selected"
    label="Jacob"
    value="Jacob"
  />
</template>
`,Q=`<script setup >
const checkbox1 = ref(true)
const checkbox2 = ref(false)
<\/script>

<template>
  <VCheckbox
    v-model="checkbox1"
    :label="\`Checkbox 1: \${checkbox1.toString()}\`"
  />
  <VCheckbox
    v-model="checkbox2"
    :label="\`Checkbox 2: \${checkbox2.toString()}\`"
  />
</template>
`,Y=`<script setup >
const checkOn = ref(true)
const checkOff = ref(false)
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="4"
      sm="6"
    >
      <VCheckbox
        v-model="checkOn"
        label="On"
      />
    </VCol>
    <VCol
      cols="12"
      md="4"
      sm="6"
    >
      <VCheckbox
        v-model="checkOff"
        label="Off"
      />
    </VCol>
    <VCol
      cols="12"
      md="4"
      sm="6"
    >
      <VCheckbox
        indeterminate
        label="Indeterminate"
      />
    </VCol>

    <VCol
      cols="12"
      md="4"
      sm="6"
    >
      <VCheckbox
        model-value="disabledOn"
        disabled
        label="Disabled On"
        value="disabledOn"
      />
    </VCol>
    <VCol
      cols="12"
      md="4"
      sm="6"
    >
      <VCheckbox
        :model-value="false"
        disabled
        label="Disabled Off"
      />
    </VCol>
    <VCol
      cols="12"
      md="4"
      sm="6"
    >
      <VCheckbox
        disabled
        indeterminate
        label="Disabled Indeterminate"
      />
    </VCol>
  </VRow>
</template>
`,le={__name:"index",setup(b){const o=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Forms",disabled:!0},{title:"Checkbox",disabled:!0}];return(n,r)=>{const t=A("ApiBtn");return u(),x(k,null,{default:l(()=>[e(c,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:l(()=>[e(I,{divider:"-",items:o,class:"pa-0"}),g("div",null,[e(t,{href:"https://vuetifyjs.com/en/components/checkboxes/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(c,{cols:"12"},{default:l(()=>[e(f,{title:"Colors"},{default:l(()=>[e(v,null,{default:l(()=>[e(D)]),_:1}),e(p,{code:N},null,8,["code"])]),_:1})]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(f,{title:"Model as Array"},{default:l(()=>[e(v,null,{default:l(()=>[e(q)]),_:1}),e(p,{code:H},null,8,["code"])]),_:1})]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(f,{title:"Model as Boolean"},{default:l(()=>[e(v,null,{default:l(()=>[e(M)]),_:1}),e(p,{code:Q},null,8,["code"])]),_:1})]),_:1}),e(c,{cols:"12"},{default:l(()=>[e(f,{title:"States"},{default:l(()=>[e(v,null,{default:l(()=>[e(F)]),_:1}),e(p,{code:Y},null,8,["code"])]),_:1})]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(f,{title:"Label Slot"},{default:l(()=>[e(v,null,{default:l(()=>[e(j)]),_:1}),e(p,{code:E},null,8,["code"])]),_:1})]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(f,{title:"Custom"},{default:l(()=>[e(v,null,{default:l(()=>[e(T)]),_:1}),e(p,{code:z},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{le as default};
