import{_ as V}from"./CodeToggler-a1913054.js";import{V as f}from"./VAutocomplete-720e7e0b.js";import{y as p,a3 as G,o as d,a as A,d as i,Q as c,f as C,b as e,F as w,w as a,ab as k,G as x,S as y,z as I,T as S,U as T,ad as M,r as N,l as W,t as F,Y as U,h as B,e as _,V as b}from"./index-5cc15e35.js";import{V as D}from"./VChip-0b64cb0d.js";import{a as H,V as L}from"./VTabs-f93555dc.js";import{V as R,a as v}from"./VRow-31de0795.js";import{V as P}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";import"./VSelect-f3760063.js";import"./VTextField-354b8d27.js";/* empty css                   */import"./VCounter-5de066e9.js";import"./VField-3bcdd552.js";import"./VCheckboxBtn-8be4ef26.js";import"./filter-14cd16c3.js";const $={__name:"AutocompleteAsynchronousItems",setup(g){const t=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],s=p(!1),l=p([]),r=p(void 0),n=p(null);G(r,u=>{u&&u!==n.value&&o(u)});function o(u){s.value=!0,setTimeout(()=>{l.value=t.filter(m=>(m||"").toLowerCase().includes((u||"").toLowerCase())),s.value=!1},500)}return(u,m)=>(d(),A(f,{modelValue:i(n),"onUpdate:modelValue":m[0]||(m[0]=h=>c(n)?n.value=h:null),search:i(r),"onUpdate:search":m[1]||(m[1]=h=>c(r)?r.value=h:null),loading:i(s),items:i(l),"hide-no-data":"",label:"What state are you from?"},null,8,["modelValue","search","loading","items"]))}},J={__name:"AutocompleteChips",setup(g){const t=p();return(s,l)=>(d(),A(f,{modelValue:i(t),"onUpdate:modelValue":l[0]||(l[0]=r=>c(t)?t.value=r:null),chips:"",label:"Autocomplete",items:["California","Colorado","Florida","Georgia","Texas","Wyoming"]},null,8,["modelValue"]))}},O={__name:"AutocompleteMultiple",setup(g){const t=p();return(s,l)=>(d(),C(w,null,[e(f,{modelValue:i(t),"onUpdate:modelValue":l[0]||(l[0]=r=>c(t)?t.value=r:null),multiple:"",label:"Autocomplete",items:["California","Colorado","Florida","Georgia","Texas","Wyoming"],class:"mb-6"},null,8,["modelValue"]),e(f,{modelValue:i(t),"onUpdate:modelValue":l[1]||(l[1]=r=>c(t)?t.value=r:null),multiple:"",clearable:"",label:"Autocomplete",items:["California","Colorado","Florida","Georgia","Texas","Wyoming"]},null,8,["modelValue"])],64))}},z={__name:"AutocompleteSelectFirst",setup(g){const t=[{prependIcon:"mdi-clock-outline",title:"recipe with chicken"},{prependIcon:"mdi-clock-outline",title:"best hiking trails near me"},{prependIcon:"mdi-clock-outline",title:"how to learn a new language"},{prependIcon:"mdi-clock-outline",title:"DIY home organization ideas"},{prependIcon:"mdi-clock-outline",title:"latest fashion trends"}];return(s,l)=>(d(),A(f,{items:t,"auto-select-first":"","item-props":"",placeholder:"Search Google or type a URL"}))}},Y={__name:"AutocompleteSlot",setup(g){const t=[{name:"Sandra Adams",group:"Group 1",avatar:y},{name:"Ali Connors",group:"Group 1",avatar:I},{name:"Trevor Hansen",group:"Group 1",avatar:S},{name:"Tucker Smith",group:"Group 1",avatar:I},{name:"Britta Holt",group:"Group 2",avatar:T},{name:"Jane Smith ",group:"Group 2",avatar:M},{name:"John Smith",group:"Group 2",avatar:y},{name:"Sandra Williams",group:"Group 2",avatar:S}],s=p(["Sandra Adams","Britta Holt"]);return(l,r)=>(d(),A(f,{modelValue:i(s),"onUpdate:modelValue":r[0]||(r[0]=n=>c(s)?s.value=n:null),items:t,chips:"","closable-chips":"","item-title":"name","item-value":"name",label:"Select",multiple:""},{chip:a(({props:n,item:o})=>[e(D,k(n,{"prepend-avatar":o.raw.avatar,text:o.raw.name}),null,16,["prepend-avatar","text"])]),item:a(({props:n,item:o})=>{var u,m,h;return[e(x,k(n,{"prepend-avatar":(u=o==null?void 0:o.raw)==null?void 0:u.avatar,title:(m=o==null?void 0:o.raw)==null?void 0:m.name,subtitle:(h=o==null?void 0:o.raw)==null?void 0:h.group}),null,16,["prepend-avatar","title","subtitle"])]}),_:1},8,["modelValue"]))}},K={__name:"AutocompleteVariant",setup(g){const t=p("outlined"),s=["solo","solo-inverted","outlined","filled","underlined","solo-filled","plain"],l=p();return(r,n)=>(d(),C(w,null,[e(L,{modelValue:i(t),"onUpdate:modelValue":n[0]||(n[0]=o=>c(t)?t.value=o:null),class:"mb-6"},{default:a(()=>[(d(),C(w,null,N(s,o=>e(H,{key:o,value:o},{default:a(()=>[W(F(o),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(f,{modelValue:i(l),"onUpdate:modelValue":n[1]||(n[1]=o=>c(l)?l.value=o:null),label:"Autocomplete",items:["California","Colorado","Florida","Georgia","Texas","Wyoming"],variant:i(t)},null,8,["modelValue","variant"])],64))}},q=`<script setup >
const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const loading = ref(false)
const items = ref<string[]>([])
const search = ref(undefined)
const select = ref(null)

watch(search, val => {
  val && val !== select.value && querySelections(val)
})

function querySelections(v: string | undefined) {
  loading.value = true
  setTimeout(() => {
    items.value = states.filter(e => {
      return (e || '').toLowerCase().includes((v || '').toLowerCase())
    })
    loading.value = false
  }, 500)
}
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    hide-no-data
    label="What state are you from?"
  />
</template>
`,j=`<script setup >
const selected = ref()
<\/script>

<template>
  <VAutocomplete
    v-model="selected"
    chips
    label="Autocomplete"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  />
</template>
`,E=`<script setup >
const selected = ref()
<\/script>

<template>
  <VAutocomplete
    v-model="selected"
    multiple
    label="Autocomplete"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    class="mb-6"
  />
  <VAutocomplete
    v-model="selected"
    multiple
    clearable
    label="Autocomplete"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  />
</template>
`,Q=`<script setup >
const items = [
  {
    prependIcon: 'mdi-clock-outline',
    title: 'recipe with chicken',
  },
  {
    prependIcon: 'mdi-clock-outline',
    title: 'best hiking trails near me',
  },
  {
    prependIcon: 'mdi-clock-outline',
    title: 'how to learn a new language',
  },
  {
    prependIcon: 'mdi-clock-outline',
    title: 'DIY home organization ideas',
  },
  {
    prependIcon: 'mdi-clock-outline',
    title: 'latest fashion trends',
  },
]
<\/script>

<template>
  <VAutocomplete
    :items="items"
    auto-select-first
    item-props
    placeholder="Search Google or type a URL"
  />
</template>
`,X=`<script setup >
import avatar1 from '@/assets/avatars/avatar-1.png'
import avatar2 from '@/assets/avatars/avatar-2.png'
import avatar3 from '@/assets/avatars/avatar-3.png'
import avatar4 from '@/assets/avatars/avatar-4.png'
import avatar5 from '@/assets/avatars/avatar-5.png'

const people = [
  { name: 'Sandra Adams', group: 'Group 1', avatar: avatar1 },
  { name: 'Ali Connors', group: 'Group 1', avatar: avatar2 },
  { name: 'Trevor Hansen', group: 'Group 1', avatar: avatar3 },
  { name: 'Tucker Smith', group: 'Group 1', avatar: avatar2 },
  { name: 'Britta Holt', group: 'Group 2', avatar: avatar4 },
  { name: 'Jane Smith ', group: 'Group 2', avatar: avatar5 },
  { name: 'John Smith', group: 'Group 2', avatar: avatar1 },
  { name: 'Sandra Williams', group: 'Group 2', avatar: avatar3 },
]

const friends = ref(['Sandra Adams', 'Britta Holt'])
<\/script>

<template>
  <VAutocomplete
    v-model="friends"
    :items="people"
    chips
    closable-chips
    item-title="name"
    item-value="name"
    label="Select"
    multiple
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </VAutocomplete>
</template>
`,Z=`<script setup >
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

  <VAutocomplete
    v-model="selected"
    label="Autocomplete"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    :variant="selectedVariant"
  />
</template>
`,fe={__name:"index",setup(g){const t=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Forms",disabled:!0},{title:"Autocompletes",disabled:!0}];return(s,l)=>{const r=U("ApiBtn");return d(),A(R,null,{default:a(()=>[e(v,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:a(()=>[e(P,{divider:"-",items:t,class:"pa-0"}),B("div",null,[e(r,{href:"https://vuetifyjs.com/en/components/autocompletes/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(v,{cols:"12",md:"6"},{default:a(()=>[e(_,{title:"Variant"},{default:a(()=>[e(b,null,{default:a(()=>[e(K)]),_:1}),e(V,{code:Z},null,8,["code"])]),_:1})]),_:1}),e(v,{cols:"12",md:"6"},{default:a(()=>[e(_,{title:"Multiple"},{default:a(()=>[e(b,null,{default:a(()=>[e(O)]),_:1}),e(V,{code:E},null,8,["code"])]),_:1})]),_:1}),e(v,{cols:"12",md:"6"},{default:a(()=>[e(_,{title:"Chips"},{default:a(()=>[e(b,null,{default:a(()=>[e(J)]),_:1}),e(V,{code:j},null,8,["code"])]),_:1})]),_:1}),e(v,{cols:"12",md:"6"},{default:a(()=>[e(_,{title:"Slot"},{default:a(()=>[e(b,null,{default:a(()=>[e(Y)]),_:1}),e(V,{code:X},null,8,["code"])]),_:1})]),_:1}),e(v,{cols:"12",md:"6"},{default:a(()=>[e(_,{title:"Asynchronous Item"},{default:a(()=>[e(b,null,{default:a(()=>[e($)]),_:1}),e(V,{code:q},null,8,["code"])]),_:1})]),_:1}),e(v,{cols:"12",md:"6"},{default:a(()=>[e(_,{title:"Select First"},{default:a(()=>[e(b,null,{default:a(()=>[e(z)]),_:1}),e(V,{code:Q},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{fe as default};
