import{_ as b}from"./CodeToggler-a1913054.js";import{y as u,o as f,f as V,b as t,w as a,l,x as s,t as g,d as p,Q as B,au as y,an as C,ao as h,ab as S,h as m,Y as $,a as w,e as k,V as _}from"./index-5cc15e35.js";import{V as c}from"./VSnackbar-f5bfb580.js";import{V as T,a as d}from"./VRow-31de0795.js";import{V as z}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";const O={__name:"SnackbarsBasic",setup(v){const e=u(!1),o=u("Hello, I'm a snackbar");return(n,r)=>(f(),V("div",null,[t(s,{color:"primary",onClick:r[0]||(r[0]=i=>e.value=!0)},{default:a(()=>[l(" Open Snackbar ")]),_:1}),t(c,{modelValue:p(e),"onUpdate:modelValue":r[2]||(r[2]=i=>B(e)?e.value=i:null)},{actions:a(()=>[t(s,{color:"error",variant:"tonal",size:"small",onClick:r[1]||(r[1]=i=>e.value=!1)},{default:a(()=>[l(" Close ")]),_:1})]),default:a(()=>[l(g(p(o))+" ",1)]),_:1},8,["modelValue"])]))}},I=`I am a multi-line snackbar.
I can have more than one line. This is another line that is quite long.`,L={__name:"SnackbarsMultiLine",setup(v){const e=u(!1);return(o,n)=>(f(),V("div",null,[t(s,{color:"primary",onClick:n[0]||(n[0]=r=>e.value=!0)},{default:a(()=>[l(" Open Snackbar ")]),_:1}),t(c,{modelValue:p(e),"onUpdate:modelValue":n[2]||(n[2]=r=>B(e)?e.value=r:null),"multi-line":""},{actions:a(()=>[t(s,{color:"error",variant:"tonal",size:"small",onClick:n[1]||(n[1]=r=>e.value=!1)},{default:a(()=>[l(" Close ")]),_:1})]),default:a(()=>[l(g(I)+" ")]),_:1},8,["modelValue"])]))}},M={__name:"SnackbarsTimeout",setup(v){const e=u(!1),o=u("My timeout is set to 2000."),n=u(2e3);return(r,i)=>(f(),V("div",null,[t(s,{color:"primary",onClick:i[0]||(i[0]=x=>e.value=!0)},{default:a(()=>[l(" Open Snackbar ")]),_:1}),t(c,{modelValue:p(e),"onUpdate:modelValue":i[2]||(i[2]=x=>B(e)?e.value=x:null),timeout:p(n)},{actions:a(()=>[t(s,{color:"error",variant:"tonal",size:"small",onClick:i[1]||(i[1]=x=>e.value=!1)},{default:a(()=>[l(" Close ")]),_:1})]),default:a(()=>[l(g(p(o))+" ",1)]),_:1},8,["modelValue","timeout"])]))}},U={},H={class:"d-flex flex-wrap gap-4"},N=m("strong",null,'rounded="pill"',-1),P=m("strong",null,'elevation="24"',-1),R=m("strong",null,"tonal",-1),j=m("strong",null,"outlined",-1);function q(v,e){return f(),V("div",H,[t(c,{timeout:2e3},{activator:a(({props:o})=>[t(s,C(h(o)),{default:a(()=>[l(" open ")]),_:2},1040)]),default:a(()=>[l(" Lorem ipsum dolor sit amet consectetur. ")]),_:1}),t(c,{timeout:2e3,color:"primary",rounded:"pill"},{activator:a(({props:o})=>[t(s,S({rounded:"pill",color:"primary"},o),{default:a(()=>[l(" open ")]),_:2},1040)]),default:a(()=>[l(" Snackbar with "),N,l(". ")]),_:1}),t(c,{timeout:2e3,color:"primary",elevation:"24"},{activator:a(({props:o})=>[t(s,S({color:"primary"},o),{default:a(()=>[l(" open ")]),_:2},1040)]),default:a(()=>[l(" Snackbar with "),P,l(". ")]),_:1}),t(c,{timeout:2e3,color:"primary",variant:"tonal"},{activator:a(({props:o})=>[t(s,S({color:"primary",variant:"tonal"},o),{default:a(()=>[l(" open ")]),_:2},1040)]),default:a(()=>[l(" Snackbar with "),R,l(" variant. ")]),_:1}),t(c,{timeout:2e3,color:"primary",variant:"outlined"},{activator:a(({props:o})=>[t(s,S({color:"primary",variant:"outlined"},o),{default:a(()=>[l(" open ")]),_:2},1040)]),default:a(()=>[l(" Snackbar with "),j,l(" variant. ")]),_:1})])}const A=y(U,[["render",q]]),D=m("div",{class:"text-subtitle-1 pb-2"}," This is a snackbar message ",-1),E=m("p",null,"This is a longer paragraph explaining something",-1),Q={__name:"SnackbarsVertical",setup(v){const e=u(!1);return(o,n)=>(f(),V("div",null,[t(s,{color:"primary",onClick:n[0]||(n[0]=r=>e.value=!0)},{default:a(()=>[l(" Open Snackbar ")]),_:1}),t(c,{modelValue:p(e),"onUpdate:modelValue":n[2]||(n[2]=r=>B(e)?e.value=r:null),vertical:""},{actions:a(()=>[t(s,{color:"error",variant:"tonal",size:"small",onClick:n[1]||(n[1]=r=>e.value=!1)},{default:a(()=>[l(" Close ")]),_:1})]),default:a(()=>[D,E]),_:1},8,["modelValue"])]))}},Y=`<script setup >
const snackbar = ref(false)
const text = ref('Hello, I'm a snackbar')
<\/script>

<template>
  <div>
    <VBtn
      color="primary"
      @click="snackbar = true"
    >
      Open Snackbar
    </VBtn>

    <VSnackbar v-model="snackbar">
      {{ text }}

      <template #actions>
        <VBtn
          color="error"
          variant="tonal"
          size="small"
          @click="snackbar = false"
        >
          Close
        </VBtn>
      </template>
    </VSnackbar>
  </div>
</template>
`,F=`<script setup >
const snackbar = ref(false)

const text = 'I am a multi-line snackbar.
I can have more than one line. This is another line that is quite long.'
<\/script>

<template>
  <div>
    <VBtn
      color="primary"
      @click="snackbar = true"
    >
      Open Snackbar
    </VBtn>

    <VSnackbar
      v-model="snackbar"
      multi-line
    >
      {{ text }}

      <template #actions>
        <VBtn
          color="error"
          variant="tonal"
          size="small"
          @click="snackbar = false"
        >
          Close
        </VBtn>
      </template>
    </VSnackbar>
  </div>
</template>
`,G=`<script setup >
const snackbar = ref(false)
const text = ref('My timeout is set to 2000.')
const timeout = ref(2000)
<\/script>

<template>
  <div>
    <VBtn
      color="primary"
      @click="snackbar = true"
    >
      Open Snackbar
    </VBtn>

    <VSnackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template #actions>
        <VBtn
          color="error"
          variant="tonal"
          size="small"
          @click="snackbar = false"
        >
          Close
        </VBtn>
      </template>
    </VSnackbar>
  </div>
</template>
`,J=`<template>
  <div class="d-flex flex-wrap gap-4">
    <VSnackbar :timeout="2000">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          open
        </VBtn>
      </template>

      Lorem ipsum dolor sit amet consectetur.
    </VSnackbar>

    <VSnackbar
      :timeout="2000"
      color="primary"
      rounded="pill"
    >
      <template #activator="{ props }">
        <VBtn
          rounded="pill"
          color="primary"
          v-bind="props"
        >
          open
        </VBtn>
      </template>

      Snackbar with <strong>rounded="pill"</strong>.
    </VSnackbar>

    <VSnackbar
      :timeout="2000"
      color="primary"
      elevation="24"
    >
      <template #activator="{ props }">
        <VBtn
          color="primary"
          v-bind="props"
        >
          open
        </VBtn>
      </template>

      Snackbar with <strong>elevation="24"</strong>.
    </VSnackbar>

    <VSnackbar
      :timeout="2000"
      color="primary"
      variant="tonal"
    >
      <template #activator="{ props }">
        <VBtn
          color="primary"
          variant="tonal"

          v-bind="props"
        >
          open
        </VBtn>
      </template>

      Snackbar with <strong>tonal</strong> variant.
    </VSnackbar>

    <VSnackbar
      :timeout="2000"
      color="primary"
      variant="outlined"
    >
      <template #activator="{ props }">
        <VBtn
          color="primary"
          variant="outlined"

          v-bind="props"
        >
          open
        </VBtn>
      </template>

      Snackbar with <strong>outlined</strong> variant.
    </VSnackbar>
  </div>
</template>
`,K=`<script setup >
const snackbar = ref(false)
<\/script>

<template>
  <div>
    <VBtn
      color="primary"
      @click="snackbar = true"
    >
      Open Snackbar
    </VBtn>

    <VSnackbar
      v-model="snackbar"
      vertical
    >
      <div class="text-subtitle-1 pb-2">
        This is a snackbar message
      </div>

      <p>This is a longer paragraph explaining something</p>

      <template #actions>
        <VBtn
          color="error"
          variant="tonal"
          size="small"
          @click="snackbar = false"
        >
          Close
        </VBtn>
      </template>
    </VSnackbar>
  </div>
</template>
`,lt={__name:"index",setup(v){const e=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Components",disabled:!0},{title:"Snackbars",disabled:!0}];return(o,n)=>{const r=$("ApiBtn");return f(),w(T,null,{default:a(()=>[t(d,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:a(()=>[t(z,{divider:"-",items:e,class:"pa-0"}),m("div",null,[t(r,{href:"https://vuetifyjs.com/en/components/snackbars/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),t(d,{cols:"12",md:"6"},{default:a(()=>[t(k,{title:"Basic"},{default:a(()=>[t(_,null,{default:a(()=>[t(O)]),_:1}),t(b,{code:Y},null,8,["code"])]),_:1})]),_:1}),t(d,{cols:"12",md:"6"},{default:a(()=>[t(k,{title:"Multi line"},{default:a(()=>[t(_,null,{default:a(()=>[t(L)]),_:1}),t(b,{code:F},null,8,["code"])]),_:1})]),_:1}),t(d,{cols:"12",md:"6"},{default:a(()=>[t(k,{title:"Timeout"},{default:a(()=>[t(_,null,{default:a(()=>[t(M)]),_:1}),t(b,{code:G},null,8,["code"])]),_:1})]),_:1}),t(d,{cols:"12",md:"6"},{default:a(()=>[t(k,{title:"Variant"},{default:a(()=>[t(_,null,{default:a(()=>[t(A)]),_:1}),t(b,{code:J},null,8,["code"])]),_:1})]),_:1}),t(d,{cols:"12",md:"6"},{default:a(()=>[t(k,{title:"Vertical"},{default:a(()=>[t(_,null,{default:a(()=>[t(Q)]),_:1}),t(b,{code:K},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{lt as default};
