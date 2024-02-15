import{_ as b}from"./CodeToggler-a1913054.js";import{V as p}from"./VSelect-f3760063.js";import{y as d,o as u,a as v,d as r,Q as m,f as z,b as e,F as C,w as l,h as x,t as g,a6 as S,r as h,l as y,Y as F,e as V,V as _}from"./index-5cc15e35.js";import{V as T}from"./VChip-0b64cb0d.js";import{a as k,V as N}from"./VTabs-f93555dc.js";import{V as G,a as c}from"./VRow-31de0795.js";import{V as $}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";import"./VTextField-354b8d27.js";/* empty css                   */import"./VCounter-5de066e9.js";import"./VField-3bcdd552.js";import"./VCheckboxBtn-8be4ef26.js";const w={__name:"SelectChips",setup(f){const t=d(["foo","bar","fizz","buzz"]),o=d(["foo","bar","fizz","buzz"]);return(s,a)=>(u(),v(p,{modelValue:r(o),"onUpdate:modelValue":a[0]||(a[0]=i=>m(o)?o.value=i:null),items:r(t),chips:"",label:"Chips",multiple:""},null,8,["modelValue","items"]))}},A={__name:"SelectMultiple",setup(f){const t=d();return(o,s)=>(u(),z(C,null,[e(p,{modelValue:r(t),"onUpdate:modelValue":s[0]||(s[0]=a=>m(t)?t.value=a:null),multiple:"",label:"Select",items:["California","Colorado","Florida","Georgia","Texas","Wyoming"],class:"mb-6"},null,8,["modelValue"]),e(p,{modelValue:r(t),"onUpdate:modelValue":s[1]||(s[1]=a=>m(t)?t.value=a:null),multiple:"",clearable:"",label:"Select",items:["California","Colorado","Florida","Georgia","Texas","Wyoming"]},null,8,["modelValue"])],64))}},B={key:1,class:"text-grey text-caption align-self-center"},U={__name:"SelectSelection",setup(f){const t=["foo","bar","fizz","buzz","fizzbuzz","foobar"],o=d(["foo","bar","fizz"]);return(s,a)=>(u(),v(p,{modelValue:r(o),"onUpdate:modelValue":a[0]||(a[0]=i=>m(o)?o.value=i:null),items:t,label:"Select Item",multiple:""},{selection:l(({item:i,index:n})=>[n<2?(u(),v(T,{key:0},{default:l(()=>[x("span",null,g(i.title),1)]),_:2},1024)):S("",!0),n===2?(u(),z("span",B," (+"+g(r(o).length-2)+" others) ",1)):S("",!0)]),_:1},8,["modelValue"]))}},W={__name:"SelectTitleValue",setup(f){const t=d({state:"Florida",abbr:"FL"}),o=[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}];return(s,a)=>(u(),v(p,{modelValue:r(t),"onUpdate:modelValue":a[0]||(a[0]=i=>m(t)?t.value=i:null),hint:`${r(t).state}, ${r(t).abbr}`,items:o,"item-title":"state","item-value":"abbr",label:"Select","persistent-hint":"","return-object":"","single-line":""},null,8,["modelValue","hint"]))}},L={__name:"SelectVariant",setup(f){const t=d("outlined"),o=["solo","solo-inverted","outlined","filled","underlined","solo-filled","plain"],s=d();return(a,i)=>(u(),z(C,null,[e(N,{modelValue:r(t),"onUpdate:modelValue":i[0]||(i[0]=n=>m(t)?t.value=n:null),class:"mb-6"},{default:l(()=>[(u(),z(C,null,h(o,n=>e(k,{key:n,value:n},{default:l(()=>[y(g(n),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(p,{modelValue:r(s),"onUpdate:modelValue":i[1]||(i[1]=n=>m(s)?s.value=n:null),label:"Select",items:["California","Colorado","Florida","Georgia","Texas","Wyoming"],variant:r(t)},null,8,["modelValue","variant"])],64))}},Y=`<script setup >
const items = ref(['foo', 'bar', 'fizz', 'buzz'])
const value = ref(['foo', 'bar', 'fizz', 'buzz'])
<\/script>

<template>
  <VSelect
    v-model="value"
    :items="items"
    chips
    label="Chips"
    multiple
  />
</template>
`,j=`<script setup >
const selected = ref()
<\/script>

<template>
  <VSelect
    v-model="selected"
    multiple
    label="Select"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    class="mb-6"
  />
  <VSelect
    v-model="selected"
    multiple
    clearable
    label="Select"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  />
</template>
`,E=`<script setup >
const items = ['foo', 'bar', 'fizz', 'buzz', 'fizzbuzz', 'foobar']

const value = ref(['foo', 'bar', 'fizz'])
<\/script>

<template>
  <VSelect
    v-model="value"
    :items="items"
    label="Select Item"
    multiple
  >
    <template #selection="{ item, index }">
      <VChip v-if="index < 2">
        <span>{{ item.title }}</span>
      </VChip>
      <span
        v-if="index === 2"
        class="text-grey text-caption align-self-center"
      >
        (+{{ value.length - 2 }} others)
      </span>
    </template>
  </VSelect>
</template>
`,I=`<script setup >
const select = ref({ state: 'Florida', abbr: 'FL' })

const items = [
  { state: 'Florida', abbr: 'FL' },
  { state: 'Georgia', abbr: 'GA' },
  { state: 'Nebraska', abbr: 'NE' },
  { state: 'California', abbr: 'CA' },
  { state: 'New York', abbr: 'NY' },
]
<\/script>

<template>
  <VSelect
    v-model="select"
    :hint="\`\${select.state}, \${select.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
  />
</template>
`,M=`<script setup >
type Variant = 'solo' | 'solo-inverted' | 'outlined' | 'solo-filled' | 'underlined' | 'filled' | 'plain' | undefined

const selectedVariant = ref<Variant>('outlined')
const variant = ['solo', 'solo-inverted', 'outlined', 'filled', 'underlined', 'solo-filled', 'plain']
const selected = ref()
<\/script>

<template>
  <VTabs
    v-model="selectedVariant"
    class="mb-6"
  >
    <VTab
      v-for="i in variant"
      :key="i"
      :value="i"
    >
      {{ i }}
    </VTab>
  </VTabs>

  <VSelect
    v-model="selected"
    label="Select"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    :variant="selectedVariant"
  />
</template>
`,le={__name:"index",setup(f){const t=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Forms",disabled:!0},{title:"Autocompletes",disabled:!0}];return(o,s)=>{const a=F("ApiBtn");return u(),v(G,null,{default:l(()=>[e(c,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:l(()=>[e($,{divider:"-",items:t,class:"pa-0"}),x("div",null,[e(a,{href:"https://vuetifyjs.com/en/components/selects/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(V,{title:"Variant"},{default:l(()=>[e(_,null,{default:l(()=>[e(L)]),_:1}),e(b,{code:M},null,8,["code"])]),_:1})]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(V,{title:"Multiple"},{default:l(()=>[e(_,null,{default:l(()=>[e(A)]),_:1}),e(b,{code:j},null,8,["code"])]),_:1})]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(V,{title:"Chips"},{default:l(()=>[e(_,null,{default:l(()=>[e(w)]),_:1}),e(b,{code:Y},null,8,["code"])]),_:1})]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(V,{title:"Custom Title and Value"},{default:l(()=>[e(_,null,{default:l(()=>[e(W)]),_:1}),e(b,{code:I},null,8,["code"])]),_:1})]),_:1}),e(c,{cols:"12",md:"6"},{default:l(()=>[e(V,{title:"Selection"},{default:l(()=>[e(_,null,{default:l(()=>[e(U)]),_:1}),e(b,{code:E},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{le as default};
