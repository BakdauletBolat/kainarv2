import{_ as p}from"./CodeToggler-a1913054.js";import{au as F,o as c,f as k,b as e,F as h,y as x,c as $,a as v,w as l,d as m,Q as g,h as w,l as _,q as L,aG as T,r as M,t as Y,Y as q,e as f,V}from"./index-5cc15e35.js";import{V as a}from"./VTextField-354b8d27.js";import{V as C}from"./VForm-8adbab1a.js";import{a as n,V as b}from"./VRow-31de0795.js";import{a as B,V as E}from"./VTabs-f93555dc.js";import{V as G}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";/* empty css                   */import"./VCounter-5de066e9.js";import"./VField-3bcdd552.js";const z={};function D(u,t){return c(),k(h,null,[e(a,{label:"Default",density:"default",class:"mb-4"}),e(a,{label:"Comfortable",density:"comfortable",class:"mb-4"}),e(a,{label:"Compact",density:"compact"})],64)}const H=F(z,[["render",D]]),U={__name:"TextFieldEvents",setup(u){const t=["mdi-emoticon","mdi-emoticon-cool","mdi-emoticon-dead","mdi-emoticon-excited","mdi-emoticon-happy","mdi-emoticon-neutral","mdi-emoticon-sad","mdi-emoticon-tongue"],d=x("Hey!"),r=x(!0),o=x(0),s=$(()=>t[o.value]);function i(){r.value=!r.value}function P(){S(),y()}function y(){d.value=""}function S(){o.value=0}function I(){o.value===t.length-1?o.value=0:o.value++}return(fe,A)=>(c(),v(C,null,{default:l(()=>[e(a,{modelValue:m(d),"onUpdate:modelValue":A[0]||(A[0]=R=>g(d)?d.value=R:null),"append-icon":m(d)?"mdi-send":"mdi-microphone","append-inner-icon":m(r)?"mdi-map-marker":"mdi-map-marker-off","prepend-icon":m(s),variant:"filled","clear-icon":"mdi-close-circle",clearable:"",label:"Message",type:"text","onClick:appendInner":i,"onClick:append":P,"onClick:prepend":I,"onClick:clear":y},null,8,["modelValue","append-icon","append-inner-icon","prepend-icon"])]),_:1}))}},W={};function Z(u,t){return c(),v(b,null,{default:l(()=>[e(n,{cols:"12",sm:"6"},{default:l(()=>[e(a,{label:"Your product or service","model-value":"Grocery delivery",hint:"For example, flowers or used cars"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(a,{label:"Your landing page",hint:"www.example.com/page","persistent-hint":""})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(a,{label:"Your product or service","model-value":"Grocery delivery",hint:"For example, flowers or used cars",variant:"solo"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(a,{label:"Your landing page",hint:"www.example.com/page","persistent-hint":"",variant:"solo"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(a,{label:"Your product or service","model-value":"Grocery delivery",hint:"For example, flowers or used cars"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(a,{label:"Your landing page",hint:"www.example.com/page","persistent-hint":""})]),_:1})]),_:1})}const N=F(W,[["render",Z]]),j={};function Q(u,t){return c(),v(C,null,{default:l(()=>[e(b,null,{default:l(()=>[e(n,{cols:"12",sm:"6"},{default:l(()=>[e(a,{label:"Prepend","prepend-icon":"mdi-map-marker",class:"mb-4"}),e(a,{label:"Prepend inner","prepend-inner-icon":"mdi-map-marker",class:"mb-4"}),e(a,{label:"Append","append-icon":"mdi-map-marker",class:"mb-4"}),e(a,{label:"Append inner","append-inner-icon":"mdi-map-marker"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(a,{label:"Prepend","prepend-icon":"mdi-map-marker",variant:"solo",class:"mb-4"}),e(a,{label:"Prepend inner","prepend-inner-icon":"mdi-map-marker",variant:"solo",class:"mb-4"}),e(a,{label:"Append","append-icon":"mdi-map-marker",variant:"solo",class:"mb-4"}),e(a,{label:"Append inner","append-inner-icon":"mdi-map-marker",variant:"solo"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(a,{label:"Prepend","prepend-icon":"mdi-map-marker",variant:"filled",class:"mb-4"}),e(a,{label:"Prepend inner","prepend-inner-icon":"mdi-map-marker",variant:"filled",class:"mb-4"}),e(a,{label:"Append","append-icon":"mdi-map-marker",variant:"filled",class:"mb-4"}),e(a,{label:"Append inner","append-inner-icon":"mdi-map-marker",variant:"filled"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(a,{variant:"underlined",label:"Prepend","prepend-icon":"mdi-map-marker",class:"mb-4"}),e(a,{variant:"underlined",label:"Prepend inner","prepend-inner-icon":"mdi-map-marker",class:"mb-4"}),e(a,{variant:"underlined",label:"Append","append-icon":"mdi-map-marker",class:"mb-4"}),e(a,{variant:"underlined",label:"Append inner","append-inner-icon":"mdi-map-marker"})]),_:1})]),_:1})]),_:1})}const J=F(j,[["render",Q]]),K={},O=w("strong",null,"icon",-1);function X(u,t){return c(),v(C,null,{default:l(()=>[e(a,null,{label:l(()=>[w("span",null,[_(" What about an "),O,_(" here? "),e(L,{icon:"mdi-file-find"})])]),_:1})]),_:1})}const ee=F(K,[["render",X]]),le={};function ae(u,t){return c(),k(h,null,[e(b,null,{default:l(()=>[e(n,{cols:"4"},{default:l(()=>[e(T,null,{default:l(()=>[_("Prefix for dollar currency")]),_:1})]),_:1}),e(n,{cols:"8"},{default:l(()=>[e(a,{label:"Amount","model-value":"10.00",prefix:"$"})]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"4"},{default:l(()=>[e(T,null,{default:l(()=>[_("Suffix for weight")]),_:1})]),_:1}),e(n,{cols:"8"},{default:l(()=>[e(a,{label:"Weight","model-value":"28.00",suffix:"lbs"})]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"4"},{default:l(()=>[e(T,null,{default:l(()=>[_("Suffix for email domain")]),_:1})]),_:1}),e(n,{cols:"8"},{default:l(()=>[e(a,{label:"Email address","model-value":"example",suffix:"@gmail.com"})]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"4"},{default:l(()=>[e(T,null,{default:l(()=>[_("Suffix for time zone")]),_:1})]),_:1}),e(n,{cols:"8"},{default:l(()=>[e(a,{label:"Label Text","model-value":"12:30:00",type:"time",suffix:"PST"})]),_:1})]),_:1})],64)}const ne=F(le,[["render",ae]]),te={__name:"TextFieldValidation",setup(u){const t=x("Preliminary report"),d=x(""),r={required:o=>!!o||"Required.",counter:o=>o.length<=20||"Max 20 characters",email:o=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(o)||"Invalid e-mail."};return(o,s)=>(c(),v(C,null,{default:l(()=>[e(b,null,{default:l(()=>[e(n,{cols:"12",sm:"6"},{default:l(()=>[e(a,{modelValue:m(t),"onUpdate:modelValue":s[0]||(s[0]=i=>g(t)?t.value=i:null),rules:[r.required,r.counter],label:"Title",counter:"",maxlength:"20"},null,8,["modelValue","rules"])]),_:1}),e(n,{cols:"12",sm:"6"},{default:l(()=>[e(a,{modelValue:m(d),"onUpdate:modelValue":s[1]||(s[1]=i=>g(d)?d.value=i:null),rules:[r.required,r.email],label:"E-mail"},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1}))}},oe={__name:"TextFieldVariant",setup(u){const t=x("outlined"),d=["solo","solo-inverted","outlined","filled","underlined","solo-filled","plain"],r=x();return(o,s)=>(c(),k(h,null,[e(E,{modelValue:m(t),"onUpdate:modelValue":s[0]||(s[0]=i=>g(t)?t.value=i:null),class:"mb-8"},{default:l(()=>[(c(),k(h,null,M(d,i=>e(B,{key:i,value:i},{default:l(()=>[_(Y(i),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(a,{modelValue:m(r),"onUpdate:modelValue":s[1]||(s[1]=i=>g(r)?r.value=i:null),label:"Text field",variant:m(t)},null,8,["modelValue","variant"])],64))}},re=`<template>
  <VTextField
    label="Default"
    density="default"
    class="mb-4"
  />
  <VTextField
    label="Comfortable"
    density="comfortable"
    class="mb-4"
  />

  <VTextField
    label="Compact"
    density="compact"
  />
</template>
`,ie=`<script setup >
const icons = [
  'mdi-emoticon',
  'mdi-emoticon-cool',
  'mdi-emoticon-dead',
  'mdi-emoticon-excited',
  'mdi-emoticon-happy',
  'mdi-emoticon-neutral',
  'mdi-emoticon-sad',
  'mdi-emoticon-tongue',
]

const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const icon = computed(() => {
  return icons[iconIndex.value]
})

function toggleMarker() {
  marker.value = !marker.value
}

function sendMessage() {
  resetIcon()
  clearMessage()
}
function clearMessage() {
  message.value = ''
}
function resetIcon() {
  iconIndex.value = 0
}
function changeIcon() {
  iconIndex.value === icons.length - 1
    ? iconIndex.value = 0
    : iconIndex.value++
}
<\/script>

<template>
  <VForm>
    <VTextField
      v-model="message"
      :append-icon="message ? 'mdi-send' : 'mdi-microphone'"
      :append-inner-icon="marker ? 'mdi-map-marker' : 'mdi-map-marker-off'"
      :prepend-icon="icon"
      variant="filled"
      clear-icon="mdi-close-circle"
      clearable
      label="Message"
      type="text"
      @click:append-inner="toggleMarker"
      @click:append="sendMessage"
      @click:prepend="changeIcon"
      @click:clear="clearMessage"
    />
  </VForm>
</template>
`,de=`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        label="Your product or service"
        model-value="Grocery delivery"
        hint="For example, flowers or used cars"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        label="Your landing page"
        hint="www.example.com/page"
        persistent-hint
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        label="Your product or service"
        model-value="Grocery delivery"
        hint="For example, flowers or used cars"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        label="Your landing page"
        hint="www.example.com/page"
        persistent-hint
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        label="Your product or service"
        model-value="Grocery delivery"
        hint="For example, flowers or used cars"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        label="Your landing page"
        hint="www.example.com/page"
        persistent-hint
      />
    </VCol>
  </VRow>
</template>
`,se=`<template>
  <VForm>
    <VRow>
      <VCol
        cols="12"
        sm="6"
      >
        <VTextField
          label="Prepend"
          prepend-icon="mdi-map-marker"
          class="mb-4"
        />

        <VTextField
          label="Prepend inner"
          prepend-inner-icon="mdi-map-marker"
          class="mb-4"
        />

        <VTextField
          label="Append"
          append-icon="mdi-map-marker"
          class="mb-4"
        />

        <VTextField
          label="Append inner"
          append-inner-icon="mdi-map-marker"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <VTextField
          label="Prepend"
          prepend-icon="mdi-map-marker"
          variant="solo"
          class="mb-4"
        />

        <VTextField
          label="Prepend inner"
          prepend-inner-icon="mdi-map-marker"
          variant="solo"
          class="mb-4"
        />

        <VTextField
          label="Append"
          append-icon="mdi-map-marker"
          variant="solo"
          class="mb-4"
        />

        <VTextField
          label="Append inner"
          append-inner-icon="mdi-map-marker"
          variant="solo"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <VTextField
          label="Prepend"
          prepend-icon="mdi-map-marker"
          variant="filled"
          class="mb-4"
        />

        <VTextField
          label="Prepend inner"
          prepend-inner-icon="mdi-map-marker"
          variant="filled"
          class="mb-4"
        />

        <VTextField
          label="Append"
          append-icon="mdi-map-marker"
          variant="filled"
          class="mb-4"
        />

        <VTextField
          label="Append inner"
          append-inner-icon="mdi-map-marker"
          variant="filled"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <VTextField
          variant="underlined"
          label="Prepend"
          prepend-icon="mdi-map-marker"
          class="mb-4"
        />

        <VTextField
          variant="underlined"
          label="Prepend inner"
          prepend-inner-icon="mdi-map-marker"
          class="mb-4"
        />

        <VTextField
          variant="underlined"
          label="Append"
          append-icon="mdi-map-marker"
          class="mb-4"
        />

        <VTextField
          variant="underlined"
          label="Append inner"
          append-inner-icon="mdi-map-marker"
        />
      </VCol>
    </VRow>
  </VForm>
</template>
`,ce=`<template>
  <VForm>
    <VTextField>
      <template #label>
        <span>
          What about an <strong>icon</strong> here? <VIcon icon="mdi-file-find" />
        </span>
      </template>
    </VTextField>
  </VForm>
</template>
`,me=`<template>
  <VRow>
    <VCol cols="4">
      <VListSubheader>Prefix for dollar currency</VListSubheader>
    </VCol>

    <VCol cols="8">
      <VTextField
        label="Amount"
        model-value="10.00"
        prefix="$"
      />
    </VCol>
  </VRow>

  <VRow>
    <VCol cols="4">
      <VListSubheader>Suffix for weight</VListSubheader>
    </VCol>

    <VCol cols="8">
      <VTextField
        label="Weight"
        model-value="28.00"
        suffix="lbs"
      />
    </VCol>
  </VRow>

  <VRow>
    <VCol cols="4">
      <VListSubheader>Suffix for email domain</VListSubheader>
    </VCol>

    <VCol cols="8">
      <VTextField
        label="Email address"
        model-value="example"
        suffix="@gmail.com"
      />
    </VCol>
  </VRow>

  <VRow>
    <VCol cols="4">
      <VListSubheader>Suffix for time zone</VListSubheader>
    </VCol>

    <VCol cols="8">
      <VTextField
        label="Label Text"
        model-value="12:30:00"
        type="time"
        suffix="PST"
      />
    </VCol>
  </VRow>
</template>
`,ue=`<script setup >
const title = ref('Preliminary report')
const email = ref('')

const rules = {
  required: (value: any) => !!value || 'Required.',
  counter: (value: string | any[]) => value.length <= 20 || 'Max 20 characters',
  email: (value: string) => {
    const pattern = /^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/

    return pattern.test(value) || 'Invalid e-mail.'
  },
}
<\/script>

<template>
  <VForm>
    <VRow>
      <VCol
        cols="12"
        sm="6"
      >
        <VTextField
          v-model="title"
          :rules="[rules.required, rules.counter]"
          label="Title"
          counter
          maxlength="20"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <VTextField
          v-model="email"
          :rules="[rules.required, rules.email]"
          label="E-mail"
        />
      </VCol>
    </VRow>
  </VForm>
</template>
`,pe=`<script setup >
type Variant = 'solo' | 'solo-inverted' | 'outlined' | 'solo-filled' | 'underlined' | 'filled' | 'plain' | undefined

const selectedVariant = ref<Variant>('outlined')
const variant = ['solo', 'solo-inverted', 'outlined', 'filled', 'underlined', 'solo-filled', 'plain']
const selected = ref()
<\/script>

<template>
  <VTabs
    v-model="selectedVariant"
    class="mb-8"
  >
    <VTab
      v-for="i in variant"
      :key="i"
      :value="i"
    >
      {{ i }}
    </VTab>
  </VTabs>

  <VTextField
    v-model="selected"
    label="Text field"
    :variant="selectedVariant"
  />
</template>
`,we={__name:"index",setup(u){const t=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Forms",disabled:!0},{title:"Text Field",disabled:!0}];return(d,r)=>{const o=q("ApiBtn");return c(),v(b,null,{default:l(()=>[e(n,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:l(()=>[e(G,{divider:"-",items:t,class:"pa-0"}),w("div",null,[e(o,{href:"https://vuetifyjs.com/en/components/text-fields/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(f,{title:"Variant"},{default:l(()=>[e(V,null,{default:l(()=>[e(oe)]),_:1}),e(p,{code:pe},null,8,["code"])]),_:1})]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(f,{title:"Density"},{default:l(()=>[e(V,null,{default:l(()=>[e(H)]),_:1}),e(p,{code:re},null,8,["code"])]),_:1})]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(f,{title:"Hint"},{default:l(()=>[e(V,null,{default:l(()=>[e(N)]),_:1}),e(p,{code:de},null,8,["code"])]),_:1})]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(f,{title:"Icons"},{default:l(()=>[e(V,null,{default:l(()=>[e(J)]),_:1}),e(p,{code:se},null,8,["code"])]),_:1})]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(f,{title:"Prefixes and Suffixes"},{default:l(()=>[e(V,null,{default:l(()=>[e(ne)]),_:1}),e(p,{code:me},null,8,["code"])]),_:1})]),_:1}),e(n,{cols:"12"},{default:l(()=>[e(f,{title:"Validation"},{default:l(()=>[e(V,null,{default:l(()=>[e(te)]),_:1}),e(p,{code:ue},null,8,["code"])]),_:1})]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(f,{title:"Events"},{default:l(()=>[e(V,null,{default:l(()=>[e(U)]),_:1}),e(p,{code:ie},null,8,["code"])]),_:1})]),_:1}),e(n,{cols:"12",md:"6"},{default:l(()=>[e(f,{title:"Label Slot"},{default:l(()=>[e(V,null,{default:l(()=>[e(ee)]),_:1}),e(p,{code:ce},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{we as default};
