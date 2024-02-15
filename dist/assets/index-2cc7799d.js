import{_ as n}from"./CodeToggler-a1913054.js";import{V as r}from"./VBreadcrumbs-bfc418b8.js";import{V}from"./VSelect-f3760063.js";import{y as B,o as d,f as _,b as e,d as f,h as b,Q as v,w as t,q as h,a as u,l as g,t as k,Y as x,e as m,V as p}from"./index-5cc15e35.js";import{V as w,a}from"./VRow-31de0795.js";import"./vue.runtime.esm-bundler-47f2d23b.js";import"./VTextField-354b8d27.js";/* empty css                   */import"./VCounter-5de066e9.js";import"./VField-3bcdd552.js";import"./VCheckboxBtn-8be4ef26.js";import"./VChip-0b64cb0d.js";const y={class:"d-flex gap-4 align-center flex-wrap"},L={style:{width:"8rem"}},C={__name:"BreadcrumbsColor",setup(o){const s=B(void 0);return(c,l)=>(d(),_("div",y,[e(r,{"bg-color":f(s),items:["Foo","Bar","Fizz"],class:"flex-grow-1"},null,8,["bg-color"]),b("div",L,[e(V,{modelValue:f(s),"onUpdate:modelValue":l[0]||(l[0]=i=>v(s)?s.value=i:null),label:"Select bg",items:["primary","secondary","success","warning","info","error"]},null,8,["modelValue"])])]))}},D={__name:"BreadcrumbsDivider",setup(o){const s=[{title:"Dashboard",disabled:!1,href:"#"},{title:"Link 1",disabled:!1,href:"#"},{title:"Link 2",disabled:!0,href:"#"}];return(c,l)=>(d(),_("div",null,[e(r,{items:s,divider:"-"}),e(r,{items:s},{divider:t(()=>[e(h,{icon:"mdi-chevron-right"})]),_:1})]))}},S={__name:"BreadcrumbsPrepend",setup(o){const s=[{title:"Dashboard",disabled:!1,href:"#"},{title:"Link 1",disabled:!1,href:"#"},{title:"Link 2",disabled:!0,href:"breadcrumbs_link_2"}];return(c,l)=>(d(),u(r,{items:s},{prepend:t(()=>[e(h,{size:"small",icon:"$vuetify"})]),_:1}))}},$={__name:"BreadcrumbsTitle",setup(o){const s=[{title:"Dashboard",disabled:!1,href:"#"},{title:"Link 1",disabled:!1,href:"#"},{title:"Link 2",disabled:!0,href:"#"}];return(c,l)=>(d(),u(r,{items:s},{title:t(({item:i})=>[g(k(i.title.toUpperCase()),1)]),_:1}))}},z=`<script setup >
const selectedBg = ref(undefined)
<\/script>

<template>
  <div class="d-flex gap-4 align-center flex-wrap">
    <VBreadcrumbs
      :bg-color="selectedBg"
      :items="['Foo', 'Bar', 'Fizz']"
      class="flex-grow-1"
    />

    <div style="width: 8rem;">
      <VSelect
        v-model="selectedBg"
        label="Select bg"
        :items="['primary', 'secondary', 'success', 'warning', 'info', 'error']"
      />
    </div>
  </div>
</template>
`,F=`<script setup >
const items = [
  {
    title: 'Dashboard',
    disabled: false,
    href: '#',
  },
  {
    title: 'Link 1',
    disabled: false,
    href: '#',
  },
  {
    title: 'Link 2',
    disabled: true,
    href: 'breadcrumbs_link_2',
  },
]
<\/script>

<template>
  <VBreadcrumbs :items="items">
    <template #prepend>
      <VIcon
        size="small"
        icon="$vuetify"
      />
    </template>
  </VBreadcrumbs>
</template>
`,T=`<script setup >
const items = [
  {
    title: 'Dashboard',
    disabled: false,
    href: '#',
  },
  {
    title: 'Link 1',
    disabled: false,
    href: '#',
  },
  {
    title: 'Link 2',
    disabled: true,
    href: '#',
  },
]
<\/script>

<template>
  <div>
    <VBreadcrumbs
      :items="items"
      divider="-"
    />

    <VBreadcrumbs :items="items">
      <template #divider>
        <VIcon icon="mdi-chevron-right" />
      </template>
    </VBreadcrumbs>
  </div>
</template>
`,I=`<script setup >
const items = [
  {
    title: 'Dashboard',
    disabled: false,
    href: '#',
  },
  {
    title: 'Link 1',
    disabled: false,
    href: '#',
  },
  {
    title: 'Link 2',
    disabled: true,
    href: '#',
  },
]
<\/script>

<template>
  <VBreadcrumbs :items="items">
    <template #title="{ item }">
      {{ item.title.toUpperCase() }}
    </template>
  </VBreadcrumbs>
</template>
`,J={__name:"index",setup(o){const s=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Components",disabled:!0},{title:"Breadcrumbs",disabled:!0}];return(c,l)=>{const i=x("ApiBtn");return d(),u(w,null,{default:t(()=>[e(a,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:t(()=>[e(r,{divider:"-",items:s,class:"pa-0"}),b("div",null,[e(i,{href:"https://vuetifyjs.com/en/components/breadcrumbs/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(m,{title:"Bg Color"},{default:t(()=>[e(p,null,{default:t(()=>[e(C)]),_:1}),e(n,{code:z},null,8,["code"])]),_:1})]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(m,{title:"Prepend"},{default:t(()=>[e(p,null,{default:t(()=>[e(S)]),_:1}),e(n,{code:F},null,8,["code"])]),_:1})]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(m,{title:"Divider"},{default:t(()=>[e(p,null,{default:t(()=>[e(D)]),_:1}),e(n,{code:T},null,8,["code"])]),_:1})]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(m,{title:"Title Slot"},{default:t(()=>[e(p,null,{default:t(()=>[e($)]),_:1}),e(n,{code:I},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{J as default};
