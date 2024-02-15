import{_ as b}from"./CodeToggler-a1913054.js";import{au as B,o,a as T,w as t,b as e,y as g,f as d,h as s,d as p,Q as k,l,x as y,t as U,F as _,r as v,Y as h,e as f,V}from"./index-5cc15e35.js";import{V as n,c as m,a as P,b as E}from"./VExpansionPanel-2c93a23d.js";import{V as C}from"./VCheckbox-bee0cd1c.js";import{V as I,a as c}from"./VRow-31de0795.js";import{V as $}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";import"./VCheckboxBtn-8be4ef26.js";const D={};function S(x,a){return o(),T(m,null,{default:t(()=>[e(n,{title:"Title",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"})]),_:1})}const z=B(D,[["render",S]]),A={class:"d-flex"},w={__name:"ExpansionPanelDisabled",setup(x){const a=g([0,1]),i=g(!1);return(q,u)=>(o(),d("div",null,[s("div",A,[e(C,{modelValue:p(i),"onUpdate:modelValue":u[0]||(u[0]=r=>k(i)?i.value=r:null),label:"Disabled"},null,8,["modelValue"])]),e(m,{modelValue:p(a),"onUpdate:modelValue":u[1]||(u[1]=r=>k(a)?a.value=r:null),disabled:p(i),multiple:""},{default:t(()=>[e(n,null,{default:t(()=>[e(P,null,{default:t(()=>[l("Panel 1")]),_:1}),e(E,null,{default:t(()=>[l(" Some content ")]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(P,null,{default:t(()=>[l("Panel 2")]),_:1}),e(E,null,{default:t(()=>[l(" Some content ")]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(P,null,{default:t(()=>[l("Panel 3")]),_:1}),e(E,null,{default:t(()=>[l(" Some content ")]),_:1})]),_:1})]),_:1},8,["modelValue","disabled"])]))}},N={class:"d-flex gap-4 pb-4"},F={class:"pb-4"},j={__name:"ExpansionPanelVModel",setup(x){const a=g([]),i=()=>{a.value=["foo","bar","baz"]},q=()=>{a.value=[]};return(u,r)=>(o(),d("div",null,[s("div",N,[e(y,{color:"primary",onClick:i},{default:t(()=>[l(" All ")]),_:1}),e(y,{color:"error",onClick:q},{default:t(()=>[l(" None ")]),_:1})]),s("div",F," v-model "+U(p(a)),1),e(m,{modelValue:p(a),"onUpdate:modelValue":r[0]||(r[0]=L=>k(a)?a.value=L:null),multiple:""},{default:t(()=>[e(n,{title:"Foo",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",value:"foo"}),e(n,{title:"Bar",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",value:"bar"}),e(n,{title:"Baz",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",value:"baz"})]),_:1},8,["modelValue"])]))}},R={},H=s("div",{class:"text-subtitle-2 mb-2"}," Default ",-1),M=s("div",{class:"text-subtitle-2 mt-4 mb-2"}," Accordion ",-1),Q=s("div",{class:"text-subtitle-2 mt-4 mb-2"}," Inset ",-1),Y=s("div",{class:"text-subtitle-2 mt-4 mb-2"}," Popout ",-1);function G(x,a){return o(),d("div",null,[H,e(m,null,{default:t(()=>[(o(),d(_,null,v(3,i=>e(n,{key:i,title:"Item",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})),64))]),_:1}),M,e(m,{variant:"accordion"},{default:t(()=>[(o(),d(_,null,v(3,i=>e(n,{key:i,title:"Item",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})),64))]),_:1}),Q,e(m,{variant:"inset",class:"my-4"},{default:t(()=>[(o(),d(_,null,v(3,i=>e(n,{key:i,title:"Item",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})),64))]),_:1}),Y,e(m,{variant:"popout",class:"my-4"},{default:t(()=>[(o(),d(_,null,v(3,i=>e(n,{key:i,title:"Item",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})),64))]),_:1})])}const J=B(R,[["render",G]]),K=`<template>
  <VExpansionPanels>
    <VExpansionPanel
      title="Title"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
    />
  </VExpansionPanels>
</template>
`,O=`<script setup >
const panel = ref([0, 1])
const disabled = ref(false)
<\/script>

<template>
  <div>
    <div class="d-flex">
      <VCheckbox
        v-model="disabled"
        label="Disabled"
      />
    </div>

    <VExpansionPanels
      v-model="panel"
      :disabled="disabled"
      multiple
    >
      <VExpansionPanel>
        <VExpansionPanelTitle>Panel 1</VExpansionPanelTitle>
        <VExpansionPanelText>
          Some content
        </VExpansionPanelText>
      </VExpansionPanel>

      <VExpansionPanel>
        <VExpansionPanelTitle>Panel 2</VExpansionPanelTitle>
        <VExpansionPanelText>
          Some content
        </VExpansionPanelText>
      </VExpansionPanel>

      <VExpansionPanel>
        <VExpansionPanelTitle>Panel 3</VExpansionPanelTitle>
        <VExpansionPanelText>
          Some content
        </VExpansionPanelText>
      </VExpansionPanel>
    </VExpansionPanels>
  </div>
</template>
`,W=`<template>
  <div>
    <div class="text-subtitle-2 mb-2">
      Default
    </div>

    <VExpansionPanels>
      <VExpansionPanel
        v-for="i in 3"
        :key="i"
        title="Item"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </VExpansionPanels>

    <div class="text-subtitle-2 mt-4 mb-2">
      Accordion
    </div>

    <VExpansionPanels variant="accordion">
      <VExpansionPanel
        v-for="i in 3"
        :key="i"
        title="Item"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </VExpansionPanels>

    <div class="text-subtitle-2 mt-4 mb-2">
      Inset
    </div>

    <VExpansionPanels
      variant="inset"
      class="my-4"
    >
      <VExpansionPanel
        v-for="i in 3"
        :key="i"
        title="Item"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </VExpansionPanels>

    <div class="text-subtitle-2 mt-4 mb-2">
      Popout
    </div>

    <VExpansionPanels
      variant="popout"
      class="my-4"
    >
      <VExpansionPanel
        v-for="i in 3"
        :key="i"
        title="Item"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </VExpansionPanels>
  </div>
</template>
`,X=`<script setup >
const panel = ref<string[]>([])

const all = () => {
  panel.value = ['foo', 'bar', 'baz']
}

const none = () => {
  panel.value = []
}
<\/script>

<template>
  <div>
    <div class="d-flex gap-4 pb-4">
      <VBtn
        color="primary"
        @click="all"
      >
        All
      </VBtn>
      <VBtn
        color="error"
        @click="none"
      >
        None
      </VBtn>
    </div>

    <div class="pb-4">
      v-model {{ panel }}
    </div>

    <VExpansionPanels
      v-model="panel"
      multiple
    >
      <VExpansionPanel
        title="Foo"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        value="foo"
      />

      <VExpansionPanel
        title="Bar"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        value="bar"
      />

      <VExpansionPanel
        title="Baz"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        value="baz"
      />
    </VExpansionPanels>
  </div>
</template>
`,se={__name:"index",setup(x){const a=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Components",disabled:!0},{title:"Expansion Panels",disabled:!0}];return(i,q)=>{const u=h("ApiBtn");return o(),T(I,null,{default:t(()=>[e(c,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:t(()=>[e($,{divider:"-",items:a,class:"pa-0 text-truncate"}),s("div",null,[e(u,{href:"https://vuetifyjs.com/en/components/expansion-panels/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(f,{title:"Basic"},{default:t(()=>[e(V,null,{default:t(()=>[e(z)]),_:1}),e(b,{code:K},null,8,["code"])]),_:1})]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(f,{title:"Variant"},{default:t(()=>[e(V,null,{default:t(()=>[e(J)]),_:1}),e(b,{code:W},null,8,["code"])]),_:1})]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(f,{title:"Disabled"},{default:t(()=>[e(V,null,{default:t(()=>[e(w)]),_:1}),e(b,{code:O},null,8,["code"])]),_:1})]),_:1}),e(c,{cols:"12"},{default:t(()=>[e(f,{title:"v-model"},{default:t(()=>[e(V,null,{default:t(()=>[e(j)]),_:1}),e(b,{code:X},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{se as default};
