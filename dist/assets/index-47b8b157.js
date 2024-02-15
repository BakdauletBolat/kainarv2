import{_ as V}from"./CodeToggler-a1913054.js";import{o as s,a as y,E as c,w as e,b as t,aG as b,l as a,f as u,F as d,r as h,G as o,q as I,H as f,t as x,au as J,I as S,A as C,d as D,S as H,x as B,y as U,aH as T,ab as k,Q as O,h as P,z as $,T as E,U as N,ad as F,s as G,Y as M,e as L}from"./index-5cc15e35.js";import{V as w}from"./VListItemAction-55d59084.js";import{V as R}from"./VCheckboxBtn-8be4ef26.js";import{V as W,a as p}from"./VRow-31de0795.js";import{V as q}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";const j={__name:"ListBasic",setup(v){const n=[{type:"subheader",title:"Group #1"},{title:"Item #1",value:1},{title:"Item #2",value:2},{title:"Item #3",value:3},{type:"divider"},{type:"subheader",title:"Group #2"},{title:"Item #4",value:4},{title:"Item #5",value:5},{title:"Item #6",value:6}];return(r,_)=>(s(),y(c,{items:n}))}},z={__name:"ListDensity",setup(v){const n=[{text:"Real-Time",icon:"mdi-clock-outline"},{text:"Audience",icon:"mdi-account-outline"},{text:"Conversions",icon:"mdi-flag-outline"}];return(r,_)=>(s(),y(c,{density:"default"},{default:e(()=>[t(b,null,{default:e(()=>[a("REPORTS")]),_:1}),(s(),u(d,null,h(n,(i,l)=>t(o,{key:l,value:i,color:"primary"},{prepend:e(()=>[t(I,{icon:i.icon},null,8,["icon"])]),default:e(()=>[t(f,null,{default:e(()=>[a(x(i.text),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}))}},Q={__name:"ListDisabled",setup(v){const n=[{text:"Real-Time",icon:"mdi-clock-outline"},{text:"Audience",icon:"mdi-account-outline"},{text:"Conversions",icon:"mdi-flag-outline"}];return(r,_)=>(s(),y(c,{disabled:""},{default:e(()=>[t(b,null,{default:e(()=>[a("REPORTS")]),_:1}),(s(),u(d,null,h(n,(i,l)=>t(o,{key:l},{prepend:e(()=>[t(I,{icon:i.icon},null,8,["icon"])]),default:e(()=>[t(f,null,{default:e(()=>[a(x(i.text),1)]),_:2},1024)]),_:2},1024)),64))]),_:1}))}},K={};function Y(v,n){return s(),u(d,null,[t(c,{lines:"three"},{default:e(()=>[t(b,null,{default:e(()=>[a("User Controls")]),_:1}),t(o,null,{default:e(()=>[t(f,null,{default:e(()=>[a("Content filtering")]),_:1}),t(S,null,{default:e(()=>[a(" Set the content filtering level to restrict appts that can be downloaded ")]),_:1})]),_:1}),t(o,null,{default:e(()=>[t(f,null,{default:e(()=>[a("Password")]),_:1}),t(S,null,{default:e(()=>[a(" Require password for purchase or use password to restrict purchase ")]),_:1})]),_:1})]),_:1}),t(C),t(c,{lines:"three","select-strategy":"classic"},{default:e(()=>[t(b,null,{default:e(()=>[a("General")]),_:1}),t(o,{value:"notifications"},{prepend:e(({isActive:r})=>[t(w,{start:""},{default:e(()=>[t(R,{"model-value":r},null,8,["model-value"])]),_:2},1024)]),default:e(()=>[t(f,null,{default:e(()=>[a("Notifications")]),_:1}),t(S,null,{default:e(()=>[a(" Notify me about updates to apps or games that I downloaded ")]),_:1})]),_:1}),t(o,{value:"sound"},{prepend:e(({isActive:r})=>[t(w,{start:""},{default:e(()=>[t(R,{"model-value":r},null,8,["model-value"])]),_:2},1024)]),default:e(()=>[t(f,null,{default:e(()=>[a("Sound")]),_:1}),t(S,null,{default:e(()=>[a(" Auto-update apps at any time. Data charges may apply ")]),_:1})]),_:1}),t(o,{value:"widgets"},{prepend:e(({isActive:r})=>[t(w,{start:""},{default:e(()=>[t(R,{"model-value":r},null,8,["model-value"])]),_:2},1024)]),default:e(()=>[t(f,null,{default:e(()=>[a("Auto-add widgets")]),_:1}),t(S,null,{default:e(()=>[a(" Automatically add home screen widgets when downloads complete ")]),_:1})]),_:1})]),_:1})],64)}const X=J(K,[["render",Y]]),Z={__name:"ListNav",setup(v){const n=[{text:"My Files",icon:"mdi-folder-outline"},{text:"Shared with me",icon:"mdi-account-multiple-outline"},{text:"Starred",icon:"mdi-star-outline"},{text:"Recent",icon:"mdi-history"},{text:"Offline",icon:"mdi-check-circle-outline"},{text:"Uploads",icon:"mdi-upload-outline"},{text:"Backups",icon:"mdi-cloud-upload-outline"}];return(r,_)=>(s(),u(d,null,[t(c,null,{default:e(()=>[t(o,{"prepend-avatar":D(H),title:"John Leider",subtitle:"john@google.com"},{append:e(()=>[t(B,{size:"small",variant:"text",icon:"mdi-menu-down"})]),_:1},8,["prepend-avatar"])]),_:1}),t(C),t(c,{lines:!1,density:"compact",nav:""},{default:e(()=>[(s(),u(d,null,h(n,(i,l)=>t(o,{key:l,value:i,color:"primary"},{prepend:e(()=>[t(I,{icon:i.icon},null,8,["icon"])]),default:e(()=>[t(f,null,{default:e(()=>[a(x(i.text),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})],64))}},tt={__name:"ListRounded",setup(v){const n=[{text:"Real-Time",icon:"mdi-clock-outline"},{text:"Audience",icon:"mdi-account-outline"},{text:"Conversions",icon:"mdi-flag-outline"}];return(r,_)=>(s(),y(c,null,{default:e(()=>[t(b,null,{default:e(()=>[a("REPORTS")]),_:1}),(s(),u(d,null,h(n,(i,l)=>t(o,{key:l,value:i,color:"primary",rounded:"xl"},{prepend:e(()=>[t(I,{icon:i.icon},null,8,["icon"])]),default:e(()=>[t(f,null,{default:e(()=>[a(x(i.text),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}))}},et={__name:"ListShaped",setup(v){const n=[{text:"Real-Time",icon:"mdi-clock-outline"},{text:"Audience",icon:"mdi-account-outline"},{text:"Conversions",icon:"mdi-flag-outline"}];return(r,_)=>(s(),y(c,null,{default:e(()=>[t(b,null,{default:e(()=>[a("REPORTS")]),_:1}),(s(),u(d,null,h(n,(i,l)=>t(o,{key:l,value:i,color:"primary",rounded:"shaped"},{prepend:e(()=>[t(I,{icon:i.icon},null,8,["icon"])]),default:e(()=>[t(f,null,{default:e(()=>[a(x(i.text),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}))}},it={__name:"ListSubGroup",setup(v){const n=U(["Users","Admin"]),r=[["Management","mdi-account-multiple-outline"],["Settings","mdi-cog-outline"]],_=[["Create","mdi-plus-outline"],["Read","mdi-file-outline"],["Update","mdi-update"],["Delete","mdi-delete-outline"]];return(i,l)=>(s(),y(c,{opened:D(n),"onUpdate:opened":l[0]||(l[0]=m=>O(n)?n.value=m:null)},{default:e(()=>[t(o,{"prepend-icon":"mdi-home",title:"Home"}),t(T,{value:"Users"},{activator:e(({props:m})=>[t(o,k(m,{"prepend-icon":"mdi-account-circle",title:"Users"}),null,16)]),default:e(()=>[t(T,{value:"Admin"},{activator:e(({props:m})=>[t(o,k(m,{title:"Admin"}),null,16)]),default:e(()=>[(s(),u(d,null,h(r,([m,A],g)=>t(o,{key:g,title:m,"prepend-icon":A,value:m},null,8,["title","prepend-icon","value"])),64))]),_:1}),t(T,{value:"Actions"},{activator:e(({props:m})=>[t(o,k(m,{title:"Actions"}),null,16)]),default:e(()=>[(s(),u(d,null,h(_,([m,A],g)=>t(o,{key:g,value:m,title:m,"prepend-icon":A},null,8,["value","title","prepend-icon"])),64))]),_:1})]),_:1})]),_:1},8,["opened"]))}},at=["innerHTML"],lt={__name:"ListThreeLine",setup(v){const n=[{type:"subheader",title:"Today"},{prependAvatar:H,title:"Brunch this weekend?",subtitle:`<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`},{type:"divider",inset:!0},{prependAvatar:$,title:"Summer BBQ",subtitle:`<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`},{type:"divider",inset:!0},{prependAvatar:E,title:"Oui oui",subtitle:'<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'},{type:"divider",inset:!0},{prependAvatar:N,title:"Birthday gift",subtitle:'<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'},{type:"divider",inset:!0},{prependAvatar:F,title:"Recipe to try",subtitle:'<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'}];return(r,_)=>(s(),y(c,{items:n,"item-props":"",lines:"three"},{subtitle:e(({subtitle:i})=>[P("div",{innerHTML:i},null,8,at)]),_:1}))}},nt={__name:"ListTwoLineSubheader",setup(v){const n=[{color:"primary",icon:"mdi-clipboard-text-outline",subtitle:"Jan 20, 2014",title:"Vacation itinerary"},{color:"info",icon:"mdi-gesture-tap-button",subtitle:"Jan 10, 2014",title:"Kitchen remodel"}],r=[{subtitle:"Jan 9, 2014",title:"Photos"},{subtitle:"Jan 17, 2014",title:"Recipes"},{subtitle:"Jan 28, 2014",title:"Work"}];return(_,i)=>(s(),y(c,{lines:"two"},{default:e(()=>[t(b,{inset:""},{default:e(()=>[a(" Folders ")]),_:1}),(s(),u(d,null,h(r,l=>t(o,{key:l.title,title:l.title,subtitle:l.subtitle},{prepend:e(()=>[t(G,{color:"secondary"},{default:e(()=>[t(I,{icon:"mdi-folder-outline",color:"white"})]),_:1})]),append:e(()=>[t(B,{icon:"mdi-information-outline",variant:"text"})]),_:2},1032,["title","subtitle"])),64)),t(C,{inset:""}),t(b,{inset:""},{default:e(()=>[a(" Files ")]),_:1}),(s(),u(d,null,h(n,l=>t(o,{key:l.title,title:l.title,subtitle:l.subtitle},{prepend:e(()=>[t(G,{color:l.color},{default:e(()=>[t(I,{color:"white"},{default:e(()=>[a(x(l.icon),1)]),_:2},1024)]),_:2},1032,["color"])]),append:e(()=>[t(B,{icon:"mdi-information-outline",variant:"text"})]),_:2},1032,["title","subtitle"])),64))]),_:1}))}},st={__name:"ListVariant",setup(v){const n=[{text:"Real-Time",icon:"mdi-clock-outline"},{text:"Audience",icon:"mdi-account-outline"},{text:"Conversions",icon:"mdi-flag-outline"}];return(r,_)=>(s(),u(d,null,[t(c,null,{default:e(()=>[t(b,null,{default:e(()=>[a("Plain Variant")]),_:1}),(s(),u(d,null,h(n,(i,l)=>t(o,{key:l,value:i,color:"primary",variant:"plain"},{prepend:e(()=>[t(I,{icon:i.icon},null,8,["icon"])]),default:e(()=>[t(f,null,{default:e(()=>[a(x(i.text),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}),t(c,null,{default:e(()=>[t(b,null,{default:e(()=>[a("Tonal Variant")]),_:1}),(s(),u(d,null,h(n,(i,l)=>t(o,{key:l,value:i,color:"primary",variant:"tonal"},{prepend:e(()=>[t(I,{icon:i.icon},null,8,["icon"])]),default:e(()=>[t(f,null,{default:e(()=>[a(x(i.text),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})],64))}},ot=`<script setup >
const items = [
  { type: 'subheader', title: 'Group #1' },
  {
    title: 'Item #1',
    value: 1,
  },
  {
    title: 'Item #2',
    value: 2,
  },
  {
    title: 'Item #3',
    value: 3,
  },
  { type: 'divider' },
  { type: 'subheader', title: 'Group #2' },
  {
    title: 'Item #4',
    value: 4,
  },
  {
    title: 'Item #5',
    value: 5,
  },
  {
    title: 'Item #6',
    value: 6,
  },
]
<\/script>

<template>
  <VList :items="items" />
</template>
`,rt=`<script setup >
const items = [
  { text: 'Real-Time', icon: 'mdi-clock-outline' },
  { text: 'Audience', icon: 'mdi-account-outline' },
  { text: 'Conversions', icon: 'mdi-flag-outline' },
]
<\/script>

<template>
  <VList density="default">
    <VListSubheader>REPORTS</VListSubheader>

    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item"
      color="primary"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>

      <VListItemTitle>
        {{ item.text }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`,ut=`<template>
  <VList lines="three">
    <VListSubheader>User Controls</VListSubheader>

    <VListItem>
      <VListItemTitle>Content filtering</VListItemTitle>

      <VListItemSubtitle>
        Set the content filtering level to restrict appts that can be downloaded
      </VListItemSubtitle>
    </VListItem>

    <VListItem>
      <VListItemTitle>Password</VListItemTitle>

      <VListItemSubtitle>
        Require password for purchase or use password to restrict purchase
      </VListItemSubtitle>
    </VListItem>
  </VList>

  <VDivider />

  <VList
    lines="three"
    select-strategy="classic"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckboxBtn :model-value="isActive" />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>

      <VListItemSubtitle>
        Notify me about updates to apps or games that I downloaded
      </VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckboxBtn :model-value="isActive" />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>

      <VListItemSubtitle>
        Auto-update apps at any time. Data charges may apply
      </VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckboxBtn :model-value="isActive" />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>

      <VListItemSubtitle>
        Automatically add home screen widgets when downloads complete
      </VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`,dt=`<script setup >
const items = [
  { text: 'Real-Time', icon: 'mdi-clock-outline' },
  { text: 'Audience', icon: 'mdi-account-outline' },
  { text: 'Conversions', icon: 'mdi-flag-outline' },
]
<\/script>

<template>
  <VList disabled>
    <VListSubheader>REPORTS</VListSubheader>

    <VListItem
      v-for="(item, i) in items"
      :key="i"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>

      <VListItemTitle>
        {{ item.text }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`,ct=`<script setup >
import avatar1 from '@/assets/avatars/avatar-1.png'

const items = [
  { text: 'My Files', icon: 'mdi-folder-outline' },
  { text: 'Shared with me', icon: 'mdi-account-multiple-outline' },
  { text: 'Starred', icon: 'mdi-star-outline' },
  { text: 'Recent', icon: 'mdi-history' },
  { text: 'Offline', icon: 'mdi-check-circle-outline' },
  { text: 'Uploads', icon: 'mdi-upload-outline' },
  { text: 'Backups', icon: 'mdi-cloud-upload-outline' },
]
<\/script>

<template>
  <VList>
    <VListItem
      :prepend-avatar="avatar1"
      title="John Leider"
      subtitle="john@google.com"
    >
      <template #append>
        <VBtn
          size="small"
          variant="text"
          icon="mdi-menu-down"
        />
      </template>
    </VListItem>
  </VList>

  <VDivider />

  <VList
    :lines="false"
    density="compact"
    nav
  >
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item"
      color="primary"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>

      <VListItemTitle>
        {{ item.text }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`,mt=`<script setup >
const items = [
  { text: 'Real-Time', icon: 'mdi-clock-outline' },
  { text: 'Audience', icon: 'mdi-account-outline' },
  { text: 'Conversions', icon: 'mdi-flag-outline' },
]
<\/script>

<template>
  <VList>
    <VListSubheader>REPORTS</VListSubheader>

    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item"
      color="primary"
      rounded="xl"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>

      <VListItemTitle>
        {{ item.text }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`,pt=`<script setup >
const items = [
  { text: 'Real-Time', icon: 'mdi-clock-outline' },
  { text: 'Audience', icon: 'mdi-account-outline' },
  { text: 'Conversions', icon: 'mdi-flag-outline' },
]
<\/script>

<template>
  <VList>
    <VListSubheader>REPORTS</VListSubheader>

    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item"
      color="primary"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>

      <VListItemTitle>
        {{ item.text }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`,ft=`<script setup >
const open = ref(['Users', 'Admin'])

const admins = [
  ['Management', 'mdi-account-multiple-outline'],
  ['Settings', 'mdi-cog-outline'],
]

const cruds = [
  ['Create', 'mdi-plus-outline'],
  ['Read', 'mdi-file-outline'],
  ['Update', 'mdi-update'],
  ['Delete', 'mdi-delete-outline'],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      prepend-icon="mdi-home"
      title="Home"
    />

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          prepend-icon="mdi-account-circle"
          title="Users"
        />
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :title="title"
          :prepend-icon="icon"
          :value="title"
        />
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
          :prepend-icon="icon"
        />
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`,vt=`<script setup >
import avatar1 from '@/assets/avatars/avatar-1.png'
import avatar2 from '@/assets/avatars/avatar-2.png'
import avatar3 from '@/assets/avatars/avatar-3.png'
import avatar4 from '@/assets/avatars/avatar-4.png'
import avatar5 from '@/assets/avatars/avatar-5.png'

const items = [
  { type: 'subheader', title: 'Today' },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar5,
    title: 'Recipe to try',
    subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
]
<\/script>

<template>
  <VList
    :items="items"
    item-props
    lines="three"
  >
    <template #subtitle="{ subtitle }">
      <!--  eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>
`,_t=`<script setup >
const files = [
  {
    color: 'primary',
    icon: 'mdi-clipboard-text-outline',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'info',
    icon: 'mdi-gesture-tap-button',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar color="secondary">
          <VIcon
            icon="mdi-folder-outline"
            color="white"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          icon="mdi-information-outline"
          variant="text"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar :color="file.color">
          <VIcon color="white">
            {{ file.icon }}
          </VIcon>
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          icon="mdi-information-outline"
          variant="text"
        />
      </template>
    </VListItem>
  </VList>
</template>
`,Vt=`<script setup >
const items = [
  { text: 'Real-Time', icon: 'mdi-clock-outline' },
  { text: 'Audience', icon: 'mdi-account-outline' },
  { text: 'Conversions', icon: 'mdi-flag-outline' },
]
<\/script>

<template>
  <VList>
    <VListSubheader>Plain Variant</VListSubheader>

    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item"
      color="primary"
      variant="plain"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>

      <VListItemTitle>
        {{ item.text }}
      </VListItemTitle>
    </VListItem>
  </VList>

  <VList>
    <VListSubheader>Tonal Variant</VListSubheader>

    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item"
      color="primary"
      variant="tonal"
    >
      <template #prepend>
        <VIcon :icon="item.icon" />
      </template>

      <VListItemTitle>
        {{ item.text }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`,At={__name:"index",setup(v){const n=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Components",disabled:!0},{title:"List",disabled:!0}];return(r,_)=>{const i=M("ApiBtn");return s(),y(W,null,{default:e(()=>[t(p,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:e(()=>[t(q,{divider:"-",items:n,class:"pa-0"}),P("div",null,[t(i,{href:"https://vuetifyjs.com/en/components/lists",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),t(p,{cols:"12",md:"6"},{default:e(()=>[t(L,{title:"Basic"},{default:e(()=>[t(j),t(V,{code:ot},null,8,["code"])]),_:1})]),_:1}),t(p,{cols:"12",md:"6"},{default:e(()=>[t(L,{title:"Variant"},{default:e(()=>[t(st),t(V,{code:Vt},null,8,["code"])]),_:1})]),_:1}),t(p,{cols:"12",md:"6"},{default:e(()=>[t(L,{title:"Density"},{default:e(()=>[t(z),t(V,{code:rt},null,8,["code"])]),_:1})]),_:1}),t(p,{cols:"12",md:"6"},{default:e(()=>[t(L,{title:"Disabled"},{default:e(()=>[t(Q),t(V,{code:dt},null,8,["code"])]),_:1})]),_:1}),t(p,{cols:"12",md:"6"},{default:e(()=>[t(L,{title:"Rounded"},{default:e(()=>[t(tt),t(V,{code:mt},null,8,["code"])]),_:1})]),_:1}),t(p,{cols:"12",md:"6"},{default:e(()=>[t(L,{title:"Shaped"},{default:e(()=>[t(et),t(V,{code:pt},null,8,["code"])]),_:1})]),_:1}),t(p,{cols:"12",md:"6"},{default:e(()=>[t(L,{title:"Nav"},{default:e(()=>[t(Z),t(V,{code:ct},null,8,["code"])]),_:1})]),_:1}),t(p,{cols:"12",md:"6"},{default:e(()=>[t(L,{title:"Sub group"},{default:e(()=>[t(it),t(V,{code:ft},null,8,["code"])]),_:1})]),_:1}),t(p,{cols:"12",md:"6"},{default:e(()=>[t(L,{title:"Three Line"},{default:e(()=>[t(lt),t(V,{code:vt},null,8,["code"])]),_:1})]),_:1}),t(p,{cols:"12",md:"6"},{default:e(()=>[t(L,{title:"Two lines and Subheader"},{default:e(()=>[t(nt),t(V,{code:_t},null,8,["code"])]),_:1})]),_:1}),t(p,{cols:"12",md:"6"},{default:e(()=>[t(L,{title:"Misc"},{default:e(()=>[t(X),t(V,{code:ut},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{At as default};
