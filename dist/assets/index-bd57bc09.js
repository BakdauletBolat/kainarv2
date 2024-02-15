import{_ as T}from"./CodeToggler-a1913054.js";import{o as s,f as r,b as t,w as e,x as u,ab as v,l as n,E as p,F as _,r as L,G as d,H as k,t as M,R as f,y as B,d as C,Q as h,e as y,S,p as $,A,ac as w,B as P,n as D,a2 as E,h as g,Y as F,a as H,V as b}from"./index-5cc15e35.js";import{V as U}from"./VSelect-f3760063.js";import{V as N,a as x}from"./VRow-31de0795.js";import{V as R}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";import"./VTextField-354b8d27.js";/* empty css                   */import"./VCounter-5de066e9.js";import"./VField-3bcdd552.js";import"./VCheckboxBtn-8be4ef26.js";import"./VChip-0b64cb0d.js";const Y={class:"d-flex flex-wrap gap-6"},j={__name:"MenuActivator",setup(I){const a=[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}];return(c,V)=>(s(),r("div",Y,[t(f,null,{activator:e(({props:l})=>[t(u,v({color:"primary"},l),{default:e(()=>[n(" Activator slot ")]),_:2},1040)]),default:e(()=>[t(p,null,{default:e(()=>[(s(),r(_,null,L(a,(l,i)=>t(d,{key:i,value:i},{default:e(()=>[t(k,null,{default:e(()=>[n(M(l.title),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1}),t(u,{color:"primary"},{default:e(()=>[n(" Parent activator "),t(f,{activator:"parent"},{default:e(()=>[t(p,null,{default:e(()=>[(s(),r(_,null,L(a,(l,i)=>t(d,{key:i,value:i},{default:e(()=>[t(k,null,{default:e(()=>[n(M(l.title),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1}),t(u,{id:"menu-activator",color:"primary"},{default:e(()=>[n(" Sibling activator ")]),_:1}),t(f,{activator:"#menu-activator"},{default:e(()=>[t(p,null,{default:e(()=>[(s(),r(_,null,L(a,(l,i)=>t(d,{key:i,value:i},{default:e(()=>[t(k,null,{default:e(()=>[n(M(l.title),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]))}},J={class:"d-flex flex-wrap gap-6"},O={__name:"MenuCustomTransition",setup(I){const a=[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}];return(c,V)=>(s(),r("div",J,[t(f,{transition:"scale-transition"},{activator:e(({props:l})=>[t(u,v({color:"primary"},l),{default:e(()=>[n(" Scale Transition ")]),_:2},1040)]),default:e(()=>[t(p,null,{default:e(()=>[(s(),r(_,null,L(a,(l,i)=>t(d,{key:i},{default:e(()=>[t(k,null,{default:e(()=>[n(M(l.title),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}),t(f,{transition:"slide-x-transition"},{activator:e(({props:l})=>[t(u,v({color:"primary"},l),{default:e(()=>[n(" Slide X Transition ")]),_:2},1040)]),default:e(()=>[t(p,null,{default:e(()=>[(s(),r(_,null,L(a,(l,i)=>t(d,{key:i},{default:e(()=>[t(k,null,{default:e(()=>[n(M(l.title),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}),t(f,{transition:"slide-y-transition"},{activator:e(({props:l})=>[t(u,v({color:"primary"},l),{default:e(()=>[n(" Slide Y Transition ")]),_:2},1040)]),default:e(()=>[t(p,null,{default:e(()=>[(s(),r(_,null,L(a,(l,i)=>t(d,{key:i},{default:e(()=>[t(k,null,{default:e(()=>[n(M(l.title),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]))}},X={__name:"MenuHover",setup(I){const a=[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}];return(c,V)=>(s(),r("div",null,[t(f,{"open-on-hover":""},{activator:e(({props:l})=>[t(u,v({color:"primary"},l),{default:e(()=>[n(" Open on hover ")]),_:2},1040)]),default:e(()=>[t(p,null,{default:e(()=>[(s(),r(_,null,L(a,(l,i)=>t(d,{key:i},{default:e(()=>[t(k,null,{default:e(()=>[n(M(l.title),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]))}},z={class:"d-flex flex-wrap gap-4"},G={__name:"MenuLocation",setup(I){const a=B("end"),c=[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}],V=["top","bottom","start","end","center"];return(l,i)=>(s(),r("div",z,[t(U,{modelValue:C(a),"onUpdate:modelValue":i[0]||(i[0]=o=>h(a)?a.value=o:null),items:V,label:"Location",style:{"max-width":"8rem"}},null,8,["modelValue"]),t(f,{location:C(a)},{activator:e(({props:o})=>[t(u,v({color:"primary",dark:""},o),{default:e(()=>[n(" Dropdown ")]),_:2},1040)]),default:e(()=>[t(p,null,{default:e(()=>[(s(),r(_,null,L(c,(o,m)=>t(d,{key:m},{default:e(()=>[t(k,null,{default:e(()=>[n(M(o.title),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1},8,["location"])]))}},Q={__name:"MenuPopover",setup(I){const a=B(!0),c=B(!1),V=B(!1),l=B(!0);return(i,o)=>(s(),r("div",null,[t(f,{modelValue:C(c),"onUpdate:modelValue":o[5]||(o[5]=m=>h(c)?c.value=m:null),"close-on-content-click":!1,location:"end"},{activator:e(({props:m})=>[t(u,v({color:"primary"},m),{default:e(()=>[n(" Menu as Popover ")]),_:2},1040)]),default:e(()=>[t(y,{"min-width":"300"},{default:e(()=>[t(p,null,{default:e(()=>[t(d,{"prepend-avatar":C(S),title:"John Leider",subtitle:"Founder of Vuetify"},{append:e(()=>[t(u,{variant:"text",class:$(C(a)?"text-red":""),icon:"mdi-heart-outline",onClick:o[0]||(o[0]=m=>a.value=!C(a))},null,8,["class"])]),_:1},8,["prepend-avatar"])]),_:1}),t(A),t(p,null,{default:e(()=>[t(d,null,{default:e(()=>[t(w,{modelValue:C(V),"onUpdate:modelValue":o[1]||(o[1]=m=>h(V)?V.value=m:null),color:"purple",label:"Enable messages","hide-details":""},null,8,["modelValue"])]),_:1}),t(d,null,{default:e(()=>[t(w,{modelValue:C(l),"onUpdate:modelValue":o[2]||(o[2]=m=>h(l)?l.value=m:null),color:"purple",label:"Enable hints","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),t(P,null,{default:e(()=>[t(D),t(u,{variant:"text",onClick:o[3]||(o[3]=m=>c.value=!1)},{default:e(()=>[n(" Cancel ")]),_:1}),t(u,{color:"primary",variant:"text",onClick:o[4]||(o[4]=m=>c.value=!1)},{default:e(()=>[n(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}},q=g("span",null,"I'm A Tooltip",-1),K={__name:"MenuSlot",setup(I){const a=[{title:"Click Me 1"},{title:"Click Me 2"},{title:"Click Me 3"},{title:"Click Me 4"}];return(c,V)=>(s(),r("div",null,[t(f,null,{activator:e(({props:l})=>[t(E,{location:"top"},{activator:e(({props:i})=>[t(u,v({color:"primary"},v(l,i)),{default:e(()=>[n(" Dropdown w/ Tooltip ")]),_:2},1040)]),default:e(()=>[q]),_:2},1024)]),default:e(()=>[t(p,null,{default:e(()=>[(s(),r(_,null,L(a,(l,i)=>t(d,{key:i},{default:e(()=>[t(k,null,{default:e(()=>[n(M(l.title),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]))}},W=`<script setup >
const items = [
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' },
]
<\/script>

<template>
  <div class="d-flex flex-wrap gap-6">
    <VMenu>
      <template #activator="{ props }">
        <VBtn
          color="primary"
          v-bind="props"
        >
          Activator slot
        </VBtn>
      </template>
      <VList>
        <VListItem
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <VListItemTitle>{{ item.title }}</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>

    <VBtn color="primary">
      Parent activator

      <VMenu activator="parent">
        <VList>
          <VListItem
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <VListItemTitle>{{ item.title }}</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
    </VBtn>

    <VBtn
      id="menu-activator"
      color="primary"
    >
      Sibling activator
    </VBtn>

    <VMenu activator="#menu-activator">
      <VList>
        <VListItem
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <VListItemTitle>{{ item.title }}</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
  </div>
</template>
`,Z=`<script setup >
const items = [
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' },
]
<\/script>

<template>
  <div class="d-flex flex-wrap gap-6">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn
          color="primary"
          v-bind="props"
        >
          Scale Transition
        </VBtn>
      </template>

      <VList>
        <VListItem
          v-for="(item, i) in items"
          :key="i"
        >
          <VListItemTitle>{{ item.title }}</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn
          color="primary"
          v-bind="props"
        >
          Slide X Transition
        </VBtn>
      </template>

      <VList>
        <VListItem
          v-for="(item, i) in items"
          :key="i"
        >
          <VListItemTitle>{{ item.title }}</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn
          color="primary"
          v-bind="props"
        >
          Slide Y Transition
        </VBtn>
      </template>
      <VList>
        <VListItem
          v-for="(item, i) in items"
          :key="i"
        >
          <VListItemTitle>{{ item.title }}</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
  </div>
</template>
`,tt=`<script setup >
const items = [
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' },
]
<\/script>

<template>
  <div>
    <VMenu open-on-hover>
      <template #activator="{ props }">
        <VBtn
          color="primary"
          v-bind="props"
        >
          Open on hover
        </VBtn>
      </template>

      <VList>
        <VListItem
          v-for="(item, index) in items"
          :key="index"
        >
          <VListItemTitle>{{ item.title }}</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
  </div>
</template>
`,et=`<script setup >
const location = ref('end')

const items = [
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' },
]

const locations = [
  'top',
  'bottom',
  'start',
  'end',
  'center',
]
<\/script>

<template>
  <div class="d-flex flex-wrap gap-4">
    <VSelect
      v-model="location"
      :items="locations"
      label="Location"
      style="max-width: 8rem;"
    />

    <VMenu :location="location">
      <template #activator="{ props }">
        <VBtn
          color="primary"
          dark
          v-bind="props"
        >
          Dropdown
        </VBtn>
      </template>

      <VList>
        <VListItem
          v-for="(item, index) in items"
          :key="index"
        >
          <VListItemTitle>{{ item.title }}</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
  </div>
</template>
`,lt=`<script setup >
import avatar1 from '@/assets/avatars/avatar-1.png'

const fav = ref(true)
const menu = ref(false)
const message = ref(false)
const hints = ref(true)
<\/script>

<template>
  <div>
    <VMenu
      v-model="menu"
      :close-on-content-click="false"
      location="end"
    >
      <template #activator="{ props }">
        <VBtn
          color="primary"
          v-bind="props"
        >
          Menu as Popover
        </VBtn>
      </template>

      <VCard min-width="300">
        <VList>
          <VListItem
            :prepend-avatar="avatar1"
            title="John Leider"
            subtitle="Founder of Vuetify"
          >
            <template #append>
              <VBtn
                variant="text"
                :class="fav ? 'text-red' : ''"
                icon="mdi-heart-outline"
                @click="fav = !fav"
              />
            </template>
          </VListItem>
        </VList>

        <VDivider />

        <VList>
          <VListItem>
            <VSwitch
              v-model="message"
              color="purple"
              label="Enable messages"
              hide-details
            />
          </VListItem>

          <VListItem>
            <VSwitch
              v-model="hints"
              color="purple"
              label="Enable hints"
              hide-details
            />
          </VListItem>
        </VList>

        <VCardActions>
          <VSpacer />

          <VBtn
            variant="text"
            @click="menu = false"
          >
            Cancel
          </VBtn>
          <VBtn
            color="primary"
            variant="text"
            @click="menu = false"
          >
            Save
          </VBtn>
        </VCardActions>
      </VCard>
    </VMenu>
  </div>
</template>
`,it=`<script setup >
import { mergeProps } from 'vue'

const items = [
  { title: 'Click Me 1' },
  { title: 'Click Me 2' },
  { title: 'Click Me 3' },
  { title: 'Click Me 4' },
]
<\/script>

<template>
  <div>
    <VMenu>
      <template #activator="{ props: menu }">
        <VTooltip location="top">
          <template #activator="{ props: tooltip }">
            <VBtn
              color="primary"
              v-bind="mergeProps(menu, tooltip)"
            >
              Dropdown w/ Tooltip
            </VBtn>
          </template>
          <span>I'm A Tooltip</span>
        </VTooltip>
      </template>
      <VList>
        <VListItem
          v-for="(item, index) in items"
          :key="index"
        >
          <VListItemTitle>{{ item.title }}</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
  </div>
</template>
`,vt={__name:"index",setup(I){const a=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Components",disabled:!0},{title:"Menu",disabled:!0}];return(c,V)=>{const l=F("ApiBtn");return s(),H(N,null,{default:e(()=>[t(x,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:e(()=>[t(R,{divider:"-",items:a,class:"pa-0"}),g("div",null,[t(l,{href:"https://vuetifyjs.com/en/components/menus",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),t(x,{cols:"12",md:"6"},{default:e(()=>[t(y,{title:"Activator"},{default:e(()=>[t(b,null,{default:e(()=>[t(j)]),_:1}),t(T,{code:W},null,8,["code"])]),_:1})]),_:1}),t(x,{cols:"12",md:"6"},{default:e(()=>[t(y,{title:"Location"},{default:e(()=>[t(b,null,{default:e(()=>[t(G)]),_:1}),t(T,{code:et},null,8,["code"])]),_:1})]),_:1}),t(x,{cols:"12",md:"6"},{default:e(()=>[t(y,{title:"Hover"},{default:e(()=>[t(b,null,{default:e(()=>[t(X)]),_:1}),t(T,{code:tt},null,8,["code"])]),_:1})]),_:1}),t(x,{cols:"12",md:"6"},{default:e(()=>[t(y,{title:"Slot"},{default:e(()=>[t(b,null,{default:e(()=>[t(K)]),_:1}),t(T,{code:it},null,8,["code"])]),_:1})]),_:1}),t(x,{cols:"12",md:"6"},{default:e(()=>[t(y,{title:"Custom transitions"},{default:e(()=>[t(b,null,{default:e(()=>[t(O)]),_:1}),t(T,{code:Z},null,8,["code"])]),_:1})]),_:1}),t(x,{cols:"12",md:"6"},{default:e(()=>[t(y,{title:"Popover"},{default:e(()=>[t(b,null,{default:e(()=>[t(Q)]),_:1}),t(T,{code:lt},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{vt as default};
