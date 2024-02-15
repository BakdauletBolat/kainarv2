import{_ as f}from"./CodeToggler-a1913054.js";import{y as p,o as u,a as R,w as l,b as e,a9 as t,d,Q as m,a8 as v,h as s,f as y,F as x,r as w,dq as k,p as O,q as G,a2 as D,l as g,t as C,A as h,Y as B,e as b,V}from"./index-5cc15e35.js";import{V as L,a as c}from"./VRow-31de0795.js";import{V as $}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";const T={__name:"RadioColor",setup(_){const o=p("primary");return(r,n)=>(u(),R(v,{modelValue:d(o),"onUpdate:modelValue":n[0]||(n[0]=a=>m(o)?o.value=a:null),inline:""},{default:l(()=>[e(t,{label:"primary",color:"primary",value:"primary"}),e(t,{label:"secondary",color:"secondary",value:"secondary"}),e(t,{label:"success",color:"success",value:"success"}),e(t,{label:"info",color:"info",value:"info"}),e(t,{label:"warning",color:"warning",value:"warning"}),e(t,{label:"error",color:"error",value:"error"})]),_:1},8,["modelValue"]))}},U={class:"d-flex justify-space-between gap-4 w-100"},j={__name:"RadioCustom",setup(_){const o=p("radio-1"),r=[{label:"Option 1",value:"radio-1",icon:"mdi-view-compact-outline"},{label:"Option 2",value:"radio-2",icon:"mdi-view-dashboard-outline"},{label:"Option 3",value:"radio-3",icon:"mdi-view-sequential-outline"}];return(n,a)=>(u(),R(v,{modelValue:d(o),"onUpdate:modelValue":a[0]||(a[0]=i=>m(o)?o.value=i:null),inline:""},{default:l(()=>[s("div",U,[(u(),y(x,null,w(r,i=>e(k,{key:i.value,class:O(["custom-label border rounded",d(o)===i.value?"text-primary border-primary border-opacity-100":""])},{default:l(()=>[e(G,{icon:i.icon,class:"custom-label-icon"},null,8,["icon"]),e(t,{value:i.value},null,8,["value"]),e(D,{activator:"parent",location:"top"},{default:l(()=>[g(C(i.label),1)]),_:2},1024)]),_:2},1032,["class"])),64))])]),_:1},8,["modelValue"]))}},q={__name:"RadioDirection",setup(_){const o=p(null),r=p(null);return(n,a)=>(u(),y(x,null,[e(v,{modelValue:d(o),"onUpdate:modelValue":a[0]||(a[0]=i=>m(o)?o.value=i:null),column:""},{default:l(()=>[e(t,{label:"Option 1",value:"radio-1"}),e(t,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"]),e(h),e(v,{modelValue:d(r),"onUpdate:modelValue":a[1]||(a[1]=i=>m(r)?r.value=i:null),inline:""},{default:l(()=>[e(t,{label:"Option 1",value:"radio-1"}),e(t,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"])],64))}},A=s("div",null,[g("Your favorite "),s("strong",null,"search engine")],-1),F=s("div",null,[g("Of course it's "),s("strong",{class:"text-success"},"Google")],-1),N=s("div",null,[g("Definitely "),s("strong",{class:"text-primary"},"Duckduckgo")],-1),Y={__name:"RadioLabel",setup(_){const o=p("Duckduckgo");return(r,n)=>(u(),R(v,{modelValue:d(o),"onUpdate:modelValue":n[0]||(n[0]=a=>m(o)?o.value=a:null)},{label:l(()=>[A]),default:l(()=>[e(t,{value:"Google"},{label:l(()=>[F]),_:1}),e(t,{value:"Duckduckgo"},{label:l(()=>[N]),_:1})]),_:1},8,["modelValue"]))}},I=`<script setup >
const ex8 = ref('primary')
<\/script>

<template>
  <VRadioGroup
    v-model="ex8"
    inline
  >
    <VRadio
      label="primary"
      color="primary"
      value="primary"
    />
    <VRadio
      label="secondary"
      color="secondary"
      value="secondary"
    />
    <VRadio
      label="success"
      color="success"
      value="success"
    />
    <VRadio
      label="info"
      color="info"
      value="info"
    />
    <VRadio
      label="warning"
      color="warning"
      value="warning"
    />
    <VRadio
      label="error"
      color="error"
      value="error"
    />
  </VRadioGroup>
</template>
`,z=`<script setup >
const customRadio = ref('radio-1')

const radios = [
  {
    label: 'Option 1',
    value: 'radio-1',
    icon: 'mdi-view-compact-outline',
  },
  {
    label: 'Option 2',
    value: 'radio-2',
    icon: 'mdi-view-dashboard-outline',
  },
  {
    label: 'Option 3',
    value: 'radio-3',
    icon: 'mdi-view-sequential-outline',
  },
]
<\/script>

<template>
  <VRadioGroup
    v-model="customRadio"
    inline
  >
    <div class="d-flex justify-space-between gap-4 w-100">
      <VLabel
        v-for="item in radios"
        :key="item.value"
        class="custom-label border rounded"
        :class="customRadio === item.value ? 'text-primary border-primary border-opacity-100' : ''"
      >
        <VIcon
          :icon="item.icon"
          class="custom-label-icon"
        />
        <VRadio :value="item.value" />
        <VTooltip
          activator="parent"
          location="top"
        >
          {{ item.label }}
        </VTooltip>
      </VLabel>
    </div>
  </VRadioGroup>
</template>
`,E=`<script setup >
const column = ref(null)
const inline = ref(null)
<\/script>

<template>
  <VRadioGroup
    v-model="column"
    column
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider />

  <VRadioGroup
    v-model="inline"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`,H=`<script setup >
const radios = ref('Duckduckgo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>
    <VRadio value="Google">
      <template #label>
        <div>Of course it's <strong class="text-success">Google</strong></div>
      </template>
    </VRadio>
    <VRadio value="Duckduckgo">
      <template #label>
        <div>Definitely <strong class="text-primary">Duckduckgo</strong></div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`,P={__name:"index",setup(_){const o=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Forms",disabled:!0},{title:"Radio",disabled:!0}];return(r,n)=>{const a=B("ApiBtn");return u(),R(L,null,{default:l(()=>[e(c,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:l(()=>[e($,{divider:"-",items:o,class:"pa-0"}),s("div",null,[e(a,{href:"https://vuetifyjs.com/en/components/radio-buttons/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(c,{cols:"12"},{default:l(()=>[e(b,{title:"Color"},{default:l(()=>[e(V,null,{default:l(()=>[e(T)]),_:1}),e(f,{code:I},null,8,["code"])]),_:1})]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(b,{title:"Direction"},{default:l(()=>[e(V,null,{default:l(()=>[e(q)]),_:1}),e(f,{code:E},null,8,["code"])]),_:1})]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(b,{title:"Label"},{default:l(()=>[e(V,null,{default:l(()=>[e(Y)]),_:1}),e(f,{code:H},null,8,["code"])]),_:1})]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(b,{title:"Custom"},{default:l(()=>[e(V,null,{default:l(()=>[e(j)]),_:1}),e(f,{code:z},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{P as default};
