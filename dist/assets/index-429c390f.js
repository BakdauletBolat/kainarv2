import{_ as p}from"./CodeToggler-a1913054.js";import{au as V,o as d,a as u,w as e,b as t,l as n,h as i,f as g,F as b,r as T,e as c,j as h,p as C,k as x,V as m,x as I,Y as q}from"./index-5cc15e35.js";import{a as l,V as _}from"./VTimelineItem-aa20ac90.js";import{V as $}from"./VAlert-7002bcd6.js";import{V as L,a as r}from"./VRow-31de0795.js";import{V as w}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";const A={},B=i("div",null,[i("div",{class:"text-h6"}," Content title "),i("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")],-1),D=i("div",null,[i("div",{class:"text-h6"}," Content title "),i("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")],-1),O=i("div",null,[i("div",{class:"text-h6"}," Content title "),i("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")],-1);function k(s,a){return d(),u(_,{align:"start",density:s.$vuetify.display.mdAndDown?"compact":"default"},{default:e(()=>[t(l,{"dot-color":"primary"},{opposite:e(()=>[n(" Opposite content ")]),default:e(()=>[B]),_:1}),t(l,{"dot-color":"warning"},{opposite:e(()=>[n(" Opposite content ")]),default:e(()=>[D]),_:1}),t(l,{"dot-color":"success"},{opposite:e(()=>[n(" Opposite content ")]),default:e(()=>[O]),_:1})]),_:1},8,["density"])}const z=V(A,[["render",k]]),E={},j=i("div",null,[i("div",{class:"text-h6"}," Content title "),i("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")],-1),N=i("div",null,[i("div",{class:"text-h6"}," Content title "),i("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")],-1),F=i("div",null,[i("div",{class:"text-h6"}," Content title "),i("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")],-1);function S(s,a){return d(),u(_,{direction:s.$vuetify.display.mdAndUp?"horizontal":"vertical",density:s.$vuetify.display.mdAndDown?"compact":"comfortable"},{default:e(()=>[t(l,{"dot-color":"primary"},{opposite:e(()=>[n(" Opposite content ")]),default:e(()=>[j]),_:1}),t(l,{"dot-color":"warning"},{opposite:e(()=>[n(" Opposite content ")]),default:e(()=>[N]),_:1}),t(l,{"dot-color":"success"},{opposite:e(()=>[n(" Opposite content ")]),default:e(()=>[F]),_:1})]),_:1},8,["direction","density"])}const U=V(E,[["render",S]]),H=i("p",null,"Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",-1),R={__name:"TimelineDotsIcon",setup(s){const a=[{color:"primary",icon:"mdi-hexagram-outline"},{color:"warning",icon:"mdi-book-open-variant"},{color:"success",icon:"mdi-airballoon-outline"},{color:"info",icon:"mdi-layers-triple-outline"}];return(f,v)=>(d(),u(_,{align:"start",side:f.$vuetify.display.mdAndDown?"end":void 0},{default:e(()=>[(d(),g(b,null,T(a,(o,y)=>t(l,{key:y,"dot-color":o.color,icon:o.icon,"fill-dot":"",size:"x-small"},{default:e(()=>[t(c,null,{default:e(()=>[t(h,{class:C([`bg-${o.color}`])},{default:e(()=>[t(x,null,{default:e(()=>[n(" Lorem Ipsum Dolor ")]),_:1})]),_:2},1032,["class"]),t(m,{class:"pt-5"},{default:e(()=>[H,t(I,{color:o.color,variant:"outlined"},{default:e(()=>[n(" Button ")]),_:2},1032,["color"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["dot-color","icon"])),64))]),_:1},8,["side"]))}},Y={__name:"TimelineSide",setup(s){const a=[{id:1,color:"info",icon:"mdi-information"},{id:2,color:"error",icon:"mdi-alert-circle"}];return(f,v)=>(d(),u(_,{side:"end"},{default:e(()=>[(d(),g(b,null,T(a,o=>t(l,{key:o.id,"dot-color":o.color,size:"small"},{default:e(()=>[t($,{value:"",color:o.color,icon:o.icon},{default:e(()=>[n(" Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. ")]),_:2},1032,["color","icon"])]),_:2},1032,["dot-color"])),64))]),_:1}))}},G=`<template>
  <VTimeline
    align="start"
    :density="$vuetify.display.mdAndDown ? 'compact' : 'default'"
  >
    <VTimelineItem dot-color="primary">
      <template #opposite>
        Opposite content
      </template>
      <div>
        <div class="text-h6">
          Content title
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </VTimelineItem>

    <VTimelineItem dot-color="warning">
      <template #opposite>
        Opposite content
      </template>
      <div>
        <div class="text-h6">
          Content title
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </VTimelineItem>

    <VTimelineItem dot-color="success">
      <template #opposite>
        Opposite content
      </template>
      <div>
        <div class="text-h6">
          Content title
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </VTimelineItem>
  </VTimeline>
</template>
`,J=`<template>
  <VTimeline
    :direction="$vuetify.display.mdAndUp ? 'horizontal' : 'vertical'"
    :density="$vuetify.display.mdAndDown ? 'compact' : 'comfortable'"
  >
    <VTimelineItem dot-color="primary">
      <template #opposite>
        Opposite content
      </template>
      <div>
        <div class="text-h6">
          Content title
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </VTimelineItem>

    <VTimelineItem dot-color="warning">
      <template #opposite>
        Opposite content
      </template>
      <div>
        <div class="text-h6">
          Content title
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </VTimelineItem>

    <VTimelineItem dot-color="success">
      <template #opposite>
        Opposite content
      </template>
      <div>
        <div class="text-h6">
          Content title
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </VTimelineItem>
  </VTimeline>
</template>
`,K=`<script setup >
const items = [
  {
    color: 'primary',
    icon: 'mdi-hexagram-outline',
  },
  {
    color: 'warning',
    icon: 'mdi-book-open-variant',
  },
  {
    color: 'success',
    icon: 'mdi-airballoon-outline',
  },
  {
    color: 'info',
    icon: 'mdi-layers-triple-outline',
  },
]
<\/script>

<template>
  <VTimeline
    align="start"
    :side="$vuetify.display.mdAndDown ? 'end' : undefined"
  >
    <VTimelineItem
      v-for="(item, i) in items"
      :key="i"
      :dot-color="item.color"
      :icon="item.icon"
      fill-dot
      size="x-small"
    >
      <VCard>
        <VCardItem :class="[\`bg-\${item.color}\`]">
          <VCardTitle>
            Lorem Ipsum Dolor
          </VCardTitle>
        </VCardItem>
        <VCardText class="pt-5">
          <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
          <VBtn
            :color="item.color"
            variant="outlined"
          >
            Button
          </VBtn>
        </VCardText>
      </VCard>
    </VTimelineItem>
  </VTimeline>
</template>
`,M=`<script setup >
const items = [
  {
    id: 1,
    color: 'info',
    icon: 'mdi-information',
  },
  {
    id: 2,
    color: 'error',
    icon: 'mdi-alert-circle',
  },
]
<\/script>

<template>
  <VTimeline side="end">
    <VTimelineItem
      v-for="item in items"
      :key="item.id"
      :dot-color="item.color"
      size="small"
    >
      <VAlert
        value
        :color="item.color"
        :icon="item.icon"
      >
        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
      </VAlert>
    </VTimelineItem>
  </VTimeline>
</template>
`,ie={__name:"index",setup(s){const a=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Components",disabled:!0},{title:"Timeline",disabled:!0}];return(f,v)=>{const o=q("ApiBtn");return d(),u(L,null,{default:e(()=>[t(r,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:e(()=>[t(w,{divider:"-",items:a,class:"pa-0"}),i("div",null,[t(o,{href:"https://vuetifyjs.com/en/components/timelines/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),t(r,{cols:"12"},{default:e(()=>[t(c,{title:"Direction"},{default:e(()=>[t(m,null,{default:e(()=>[t(U)]),_:1}),t(p,{code:J},null,8,["code"])]),_:1})]),_:1}),t(r,{cols:"12"},{default:e(()=>[t(c,{title:"Side"},{default:e(()=>[t(m,null,{default:e(()=>[t(Y)]),_:1}),t(p,{code:M},null,8,["code"])]),_:1})]),_:1}),t(r,{cols:"12"},{default:e(()=>[t(c,{title:"Alignment"},{default:e(()=>[t(m,null,{default:e(()=>[t(z)]),_:1}),t(p,{code:G},null,8,["code"])]),_:1})]),_:1}),t(r,{cols:"12"},{default:e(()=>[t(c,{title:"Dots Icon"},{default:e(()=>[t(m,null,{default:e(()=>[t(R)]),_:1}),t(p,{code:K},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{ie as default};
