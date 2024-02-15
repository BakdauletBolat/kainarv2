import{m as Y,V as G}from"./VField-3bcdd552.js";import{ax as J,bB as X,ds as Z,eb as ee,aA as te,bC as ae,aT as le,aS as ne,bo as oe,c as x,y as f,aB as se,a3 as U,dU as ue,aD as ie,aV as re,b as e,F as P,ab as j,e1 as de,M as ce,ep as E,o as k,f as S,d as c,Q as O,h as I,l as D,t as $,w as i,a as q,r as pe,Y as fe,e as A,V as B}from"./index-5cc15e35.js";import{V as ve}from"./VSnackbar-f5bfb580.js";import{a as me,V as Ve}from"./VTabs-f93555dc.js";import{_ as C}from"./CodeToggler-a1913054.js";import{V as be,a as w}from"./VRow-31de0795.js";import{V as _e}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";const ge=J({autofocus:Boolean,divider:String,focusAll:Boolean,label:{type:String,default:"$vuetify.input.otp"},length:{type:[Number,String],default:6},modelValue:{type:[Number,String],default:void 0},placeholder:String,type:{type:String,default:"text"},...X(),...Z(),...ee(Y({variant:"outlined"}),["baseColor","bgColor","class","color","disabled","error","loading","rounded","style","theme","variant"])},"VOtpInput"),R=te()({name:"VOtpInput",props:ge(),emits:{finish:t=>!0,"update:focused":t=>!0,"update:modelValue":t=>!0},setup(t,l){let{attrs:m,emit:r,slots:n}=l;const{dimensionStyles:V}=ae(t),{isFocused:d,focus:F,blur:g}=le(t),o=ne(t,"modelValue","",a=>String(a).split(""),a=>a.join("")),{t:y}=oe(),L=x(()=>Array(Number(t.length)).fill(0)),v=f(-1),T=f(),_=f([]),N=x(()=>_.value[v.value]);function H(){const a=o.value.slice(),s=N.value.value;a[v.value]=s,o.value=a;let p=null;v.value>o.value.length?p=o.value.length+1:v.value+1!==Number(t.length)?p="next":requestAnimationFrame(()=>{var u;return(u=N.value)==null?void 0:u.blur()}),p&&E(T.value,p)}function K(a){const s=o.value.slice(),p=v.value;let u=null;["ArrowLeft","ArrowRight","Backspace","Delete"].includes(a.key)&&(a.preventDefault(),a.key==="ArrowLeft"?u="prev":a.key==="ArrowRight"?u="next":["Backspace","Delete"].includes(a.key)&&(s[v.value]="",o.value=s,v.value>0&&a.key==="Backspace"?u="prev":requestAnimationFrame(()=>{_.value[p].select()})),requestAnimationFrame(()=>{u!=null&&E(T.value,u)}))}function M(a,s){var p,u;s.preventDefault(),s.stopPropagation(),o.value=(((p=s==null?void 0:s.clipboardData)==null?void 0:p.getData("Text"))??"").split(""),(u=_.value)==null||u[a].blur()}function z(){o.value=[]}function Q(a,s){F(),v.value=s}function W(){g(),v.value=-1}return se({VField:{disabled:x(()=>t.disabled),error:x(()=>t.error),variant:x(()=>t.variant)}},{scoped:!0}),U(o,a=>{a.length===t.length&&r("finish",a.join(""))},{deep:!0}),U(v,a=>{a<0||ue&&window.requestAnimationFrame(()=>{_.value[a].select()})}),ie(()=>{var p;const[a,s]=re(m);return e("div",j({class:["v-otp-input",{"v-otp-input--divided":!!t.divider},t.class],style:[t.style]},a),[e("div",{ref:T,class:"v-otp-input__content",style:[V.value]},[L.value.map((u,b)=>e(P,null,[t.divider&&b!==0&&e("span",{class:"v-otp-input__divider"},[t.divider]),e(G,{focused:d.value&&t.focusAll||v.value===b,key:b},{...n,default:()=>e("input",{ref:h=>_.value[b]=h,"aria-label":y(t.label,b+1),autofocus:b===0&&t.autofocus,autocomplete:"one-time-code",class:["v-otp-input__field"],inputmode:"text",min:t.type==="number"?0:void 0,maxlength:"1",placeholder:t.placeholder,type:t.type,value:o.value[b],onInput:H,onFocus:h=>Q(h,b),onBlur:W,onKeydown:K,onPaste:h=>M(b,h)},null)})])),e("input",j({class:"v-otp-input-input",type:"hidden"},s,{value:o.value.join("")}),null),e(de,{contained:!0,"content-class":"v-otp-input__loader","model-value":!!t.loading,persistent:!0},{default:()=>{var u;return[((u=n.loader)==null?void 0:u.call(n))??e(ce,{color:typeof t.loading=="boolean"?void 0:t.loading,indeterminate:!0,size:"24",width:"2"},null)]}}),(p=n.default)==null?void 0:p.call(n)])])}),{blur:()=>{var a;(a=_.value)==null||a.some(s=>s.blur())},focus:()=>{var a;(a=_.value)==null||a[0].focus()},reset:z,isFocused:d}}}),ye={class:"font-weight-bold"},he=I("div",{class:"text-caption"}," Type or copy/paste. ",-1),xe={__name:"OtpInputFinish",setup(t){const l=f(!1),m=f(!1),r=f("default"),n=f(""),V=f(""),d=f("133707"),F=g=>{l.value=!0,setTimeout(()=>{l.value=!1,r.value=g===d.value?"success":"warning",V.value=`Processed OTP with "${g}" (${r.value})`,m.value=!0},3500)};return(g,o)=>(k(),S("div",null,[e(c(R),{modelValue:c(n),"onUpdate:modelValue":o[0]||(o[0]=y=>O(n)?n.value=y:null),loading:c(l),onFinish:F},null,8,["modelValue","loading"]),I("div",null,[D(" Expected value: "),I("span",ye,$(c(d)),1)]),he,e(ve,{modelValue:c(m),"onUpdate:modelValue":o[1]||(o[1]=y=>O(m)?m.value=y:null),variant:"tonal",color:c(r),timeout:2e3},{default:i(()=>[D($(c(V)),1)]),_:1},8,["modelValue","color"])]))}},ke={__name:"OtpInputHidden",setup(t){const l=f("");return(m,r)=>(k(),q(c(R),{modelValue:c(l),"onUpdate:modelValue":r[0]||(r[0]=n=>O(l)?l.value=n:null),type:"password",length:"5"},null,8,["modelValue"]))}},Oe={__name:"OtpInputVariant",setup(t){const l=f("outlined"),m=["solo","solo-inverted","outlined","filled","underlined","solo-filled","plain"],r=f("");return(n,V)=>(k(),S(P,null,[e(Ve,{modelValue:c(l),"onUpdate:modelValue":V[0]||(V[0]=d=>O(l)?l.value=d:null)},{default:i(()=>[(k(),S(P,null,pe(m,d=>e(me,{key:d,value:d},{default:i(()=>[D($(d),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(c(R),{modelValue:c(r),"onUpdate:modelValue":V[1]||(V[1]=d=>O(r)?r.value=d:null),label:"Text field",variant:c(l)},null,8,["modelValue","variant"])],64))}},we=`<script setup >
import { VOtpInput } from 'vuetify/labs/VOtpInput'

const loading = ref(false)
const snackbar = ref(false)
const snackbarColor = ref('default')
const otp = ref('')
const text = ref('')
const expectedOtp = ref('133707')

const onFinish = (rsp: any) => {
  loading.value = true

  setTimeout(() => {
    loading.value = false
    snackbarColor.value = (rsp === expectedOtp.value) ? 'success' : 'warning'
    text.value = \`Processed OTP with "\${rsp}" (\${snackbarColor.value})\`
    snackbar.value = true
  }, 3500)
}
<\/script>

<template>
  <div>
    <VOtpInput
      v-model="otp"
      :loading="loading"
      @finish="onFinish"
    />

    <div>
      Expected value: <span class="font-weight-bold">{{ expectedOtp }}</span>
    </div>

    <div class="text-caption">
      Type or copy/paste.
    </div>

    <VSnackbar
      v-model="snackbar"
      variant="tonal"
      :color="snackbarColor"
      :timeout="2000"
    >
      {{ text }}
    </VSnackbar>
  </div>
</template>
`,Ie=`<script setup >
import { VOtpInput } from 'vuetify/labs/VOtpInput'

const otp = ref('')
<\/script>

<template>
  <VOtpInput
    v-model="otp"
    type="password"
    length="5"
  />
</template>
`,Fe=`<script setup >
import { VOtpInput } from 'vuetify/labs/VOtpInput'

type Variant = 'solo' | 'solo-inverted' | 'outlined' | 'solo-filled' | 'underlined' | 'filled' | 'plain' | undefined

const selectedVariant = ref<Variant>('outlined')
const variant = ['solo', 'solo-inverted', 'outlined', 'filled', 'underlined', 'solo-filled', 'plain']
const selected = ref()
<\/script>

<template>
  <VTabs v-model="selectedVariant">
    <VTab
      v-for="i in variant"
      :key="i"
      :value="i"
    >
      {{ i }}
    </VTab>
  </VTabs>

  <VOtpInput
    v-model="selected"
    label="Text field"
    :variant="selectedVariant"
  />
</template>
`,Re={__name:"index",setup(t){const l=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Forms",disabled:!0},{title:"Otp Input",disabled:!0}];return(m,r)=>{const n=fe("ApiBtn");return k(),q(be,null,{default:i(()=>[e(w,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:i(()=>[e(_e,{divider:"-",items:l,class:"pa-0"}),I("div",null,[e(n,{href:"https://vuetifyjs.com/en/components/otp-input/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(w,{cols:"12",md:"6"},{default:i(()=>[e(A,{title:"Variant"},{default:i(()=>[e(B,null,{default:i(()=>[e(Oe)]),_:1}),e(C,{code:Fe},null,8,["code"])]),_:1})]),_:1}),e(w,{cols:"12",md:"6"},{default:i(()=>[e(A,{title:"Finish Event"},{default:i(()=>[e(B,null,{default:i(()=>[e(xe)]),_:1}),e(C,{code:we},null,8,["code"])]),_:1})]),_:1}),e(w,{cols:"12",md:"6"},{default:i(()=>[e(A,{title:"Hidden"},{default:i(()=>[e(B,null,{default:i(()=>[e(ke)]),_:1}),e(C,{code:Ie},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{Re as default};
