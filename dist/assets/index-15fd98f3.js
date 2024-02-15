import{_ as h}from"./CodeToggler-a1913054.js";import{m as le,u as ae,a as te,V as ue,b as L,g as N}from"./VSliderTrack-27d177a2.js";import{ax as se,ds as ne,aQ as de,aA as oe,y as b,a1 as ie,aS as re,aT as me,c as Q,aD as ce,aW as E,b as e,F as ve,dq as pe,ab as fe,o as S,a as x,d as f,Q as P,w as d,q as be,Y as _e,h as Ve,e as $,V as y}from"./index-5cc15e35.js";import{V as H}from"./VTextField-354b8d27.js";import{V as ge,a as g}from"./VRow-31de0795.js";import{V as Se}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";/* empty css                   */import"./VCounter-5de066e9.js";import"./VField-3bcdd552.js";const xe=se({...ne(),...de(),...le(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),R=oe()({name:"VRangeSlider",props:xe(),emits:{"update:focused":l=>!0,"update:modelValue":l=>!0,end:l=>!0,start:l=>!0},setup(l,t){let{slots:n,emit:s}=t;const a=b(),v=b(),U=b(),{rtlClasses:Y}=ie();function G(i){if(!a.value||!v.value)return;const c=N(i,a.value.$el,l.direction),r=N(i,v.value.$el,l.direction),o=Math.abs(c),m=Math.abs(r);return o<m||o===m&&c<0?a.value.$el:v.value.$el}const D=ae(l),u=re(l,"modelValue",void 0,i=>i!=null&&i.length?i.map(c=>D.roundValue(c)):[0,0]),{activeThumbRef:p,hasLabels:J,max:I,min:A,mousePressed:K,onSliderMousedown:X,onSliderTouchstart:Z,position:O,trackContainerRef:ee}=te({props:l,steps:D,onSliderStart:()=>{s("start",u.value)},onSliderEnd:i=>{var o;let{value:c}=i;const r=p.value===((o=a.value)==null?void 0:o.$el)?[c,u.value[1]]:[u.value[0],c];!l.strict&&r[0]<r[1]&&(u.value=r),s("end",u.value)},onSliderMove:i=>{var m,_,w,k;let{value:c}=i;const[r,o]=u.value;!l.strict&&r===o&&r!==A.value&&(p.value=c>r?(m=v.value)==null?void 0:m.$el:(_=a.value)==null?void 0:_.$el,(w=p.value)==null||w.focus()),p.value===((k=a.value)==null?void 0:k.$el)?u.value=[Math.min(c,o),o]:u.value=[r,Math.max(r,c)]},getActiveThumb:G}),{isFocused:B,focus:W,blur:j}=me(l),q=Q(()=>O(u.value[0])),z=Q(()=>O(u.value[1]));return ce(()=>{const[i,c]=E.filterProps(l),r=!!(l.label||n.label||n.prepend);return e(E,fe({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!n["tick-label"]||J.value,"v-slider--focused":B.value,"v-slider--pressed":K.value,"v-slider--disabled":l.disabled},Y.value,l.class],style:l.style,ref:U},i,{focused:B.value}),{...n,prepend:r?o=>{var m,_;return e(ve,null,[((m=n.label)==null?void 0:m.call(n,o))??l.label?e(pe,{class:"v-slider__label",text:l.label},null):void 0,(_=n.prepend)==null?void 0:_.call(n,o)])}:void 0,default:o=>{var w,k;let{id:m,messagesId:_}=o;return e("div",{class:"v-slider__container",onMousedown:X,onTouchstartPassive:Z},[e("input",{id:`${m.value}_start`,name:l.name||m.value,disabled:!!l.disabled,readonly:!!l.readonly,tabindex:"-1",value:u.value[0]},null),e("input",{id:`${m.value}_stop`,name:l.name||m.value,disabled:!!l.disabled,readonly:!!l.readonly,tabindex:"-1",value:u.value[1]},null),e(ue,{ref:ee,start:q.value,stop:z.value},{"tick-label":n["tick-label"]}),e(L,{ref:a,"aria-describedby":_.value,focused:B&&p.value===((w=a.value)==null?void 0:w.$el),modelValue:u.value[0],"onUpdate:modelValue":V=>u.value=[V,u.value[1]],onFocus:V=>{var T,F,M,C;W(),p.value=(T=a.value)==null?void 0:T.$el,u.value[0]===u.value[1]&&u.value[1]===A.value&&V.relatedTarget!==((F=v.value)==null?void 0:F.$el)&&((M=a.value)==null||M.$el.blur(),(C=v.value)==null||C.$el.focus())},onBlur:()=>{j(),p.value=void 0},min:A.value,max:u.value[1],position:q.value},{"thumb-label":n["thumb-label"]}),e(L,{ref:v,"aria-describedby":_.value,focused:B&&p.value===((k=v.value)==null?void 0:k.$el),modelValue:u.value[1],"onUpdate:modelValue":V=>u.value=[u.value[0],V],onFocus:V=>{var T,F,M,C;W(),p.value=(T=v.value)==null?void 0:T.$el,u.value[0]===u.value[1]&&u.value[0]===I.value&&V.relatedTarget!==((F=a.value)==null?void 0:F.$el)&&((M=v.value)==null||M.$el.blur(),(C=a.value)==null||C.$el.focus())},onBlur:()=>{j(),p.value=void 0},min:u.value[0],max:I.value,position:z.value},{"thumb-label":n["thumb-label"]})])}})}),{}}}),he={__name:"RangeSliderDisabled",setup(l){const t=b([30,60]);return(n,s)=>(S(),x(R,{modelValue:f(t),"onUpdate:modelValue":s[0]||(s[0]=a=>P(t)?t.value=a:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}},$e={__name:"RangeSliderMinMax",setup(l){const t=b([-5,5]);return(n,s)=>(S(),x(R,{modelValue:f(t),"onUpdate:modelValue":s[2]||(s[2]=a=>P(t)?t.value=a:null),max:10,min:-10,step:1},{prepend:d(()=>[e(H,{"model-value":f(t)[0],"single-line":"",type:"number",style:{width:"70px"},onChange:s[0]||(s[0]=a=>n.$set(f(t),0,a))},null,8,["model-value"])]),append:d(()=>[e(H,{"model-value":f(t)[1],"single-line":"",type:"number",style:{width:"70px"},onChange:s[1]||(s[1]=a=>n.$set(f(t),1,a))},null,8,["model-value"])]),_:1},8,["modelValue"]))}},ye={__name:"RangeSliderSlot",setup(l){const t=b({0:"Winter",1:"Spring",2:"Summer",3:"Fall"}),n=b(["mdi-snowflake","mdi-leaf","mdi-fire","mdi-water"]);function s(a){return n.value[a]}return(a,v)=>(S(),x(R,{ticks:f(t),"model-value":[0,1],min:"0",step:1,max:"3","show-ticks":"always","thumb-label":"always","tick-size":"4"},{"thumb-label":d(({modelValue:U})=>[e(be,{icon:s(U)},null,8,["icon"])]),_:1},8,["ticks"]))}},Re={__name:"RangeSliderStep",setup(l){const t=b([20,40]);return(n,s)=>(S(),x(R,{modelValue:f(t),"onUpdate:modelValue":s[0]||(s[0]=a=>P(t)?t.value=a:null),step:"10","thumb-label":"always"},null,8,["modelValue"]))}},we={__name:"RangeSliderStrict",setup(l){const t=b([20,40]);return(n,s)=>(S(),x(R,{modelValue:f(t),"onUpdate:modelValue":s[0]||(s[0]=a=>P(t)?t.value=a:null),strict:""},null,8,["modelValue"]))}},ke={__name:"RangeSliderVertical",setup(l){const t=b([20,40]);return(n,s)=>(S(),x(R,{modelValue:f(t),"onUpdate:modelValue":s[0]||(s[0]=a=>P(t)?t.value=a:null),direction:"vertical"},null,8,["modelValue"]))}},Te=`<script setup >
const value = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="value"
    strict
  />
</template>
`,Fe=`<script setup >
const value = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="value"
    disabled
    label="Disabled"
  />
</template>
`,Me=`<script setup >
const range = ref([-5, 5])
<\/script>

<template>
  <VRangeSlider
    v-model="range"
    :max="10"
    :min="-10"
    :step="1"
  >
    <template #prepend>
      <VTextField
        :model-value="range[0]"
        single-line
        type="number"
        style="width: 70px;"
        @change="$set(range, 0, $event)"
      />
    </template>
    <template #append>
      <VTextField
        :model-value="range[1]"
        single-line
        type="number"
        style="width: 70px;"
        @change="$set(range, 1, $event)"
      />
    </template>
  </VRangeSlider>
</template>
`,Ce=`<script setup >
const seasons = ref({
  0: 'Winter',
  1: 'Spring',
  2: 'Summer',
  3: 'Fall',
})

const icons = ref([
  'mdi-snowflake',
  'mdi-leaf',
  'mdi-fire',
  'mdi-water',
])

function season(val: string) {
  return icons.value[val]
}
<\/script>

<template>
  <VRangeSlider
    :ticks="seasons"
    :model-value="[0, 1]"
    min="0"
    :step="1"
    max="3"
    show-ticks="always"
    thumb-label="always"
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="season(modelValue)" />
    </template>
  </VRangeSlider>
</template>
`,Pe=`<script setup >
const value = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="value"
    step="10"
    thumb-label="always"
  />
</template>
`,Be=`<script setup >
const value = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="value"
    direction="vertical"
  />
</template>
`,Ne={__name:"index",setup(l){const t=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Forms",disabled:!0},{title:"Radio",disabled:!0}];return(n,s)=>{const a=_e("ApiBtn");return S(),x(ge,null,{default:d(()=>[e(g,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:d(()=>[e(Se,{divider:"-",items:t,class:"pa-0"}),Ve("div",null,[e(a,{href:"https://vuetifyjs.com/en/components/range-sliders/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(g,{cols:"12",md:"6"},{default:d(()=>[e($,{title:"Strict"},{default:d(()=>[e(y,null,{default:d(()=>[e(we)]),_:1}),e(h,{code:Te},null,8,["code"])]),_:1})]),_:1}),e(g,{cols:"12",md:"6"},{default:d(()=>[e($,{title:"Disabled"},{default:d(()=>[e(y,null,{default:d(()=>[e(he)]),_:1}),e(h,{code:Fe},null,8,["code"])]),_:1})]),_:1}),e(g,{cols:"12",md:"6"},{default:d(()=>[e($,{title:"Min Max"},{default:d(()=>[e(y,null,{default:d(()=>[e($e)]),_:1}),e(h,{code:Me},null,8,["code"])]),_:1})]),_:1}),e(g,{cols:"12",md:"6"},{default:d(()=>[e($,{title:"Step"},{default:d(()=>[e(y,null,{default:d(()=>[e(Re)]),_:1}),e(h,{code:Pe},null,8,["code"])]),_:1})]),_:1}),e(g,{cols:"12",md:"6"},{default:d(()=>[e($,{title:"Slot"},{default:d(()=>[e(y,null,{default:d(()=>[e(ye)]),_:1}),e(h,{code:Ce},null,8,["code"])]),_:1})]),_:1}),e(g,{cols:"12",md:"6"},{default:d(()=>[e($,{title:"Vertical"},{default:d(()=>[e(y,null,{default:d(()=>[e(ke)]),_:1}),e(h,{code:Be},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{Ne as default};
