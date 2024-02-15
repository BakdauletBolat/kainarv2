import{_ as x}from"./CodeToggler-a1913054.js";import{m as Q,u as q,a as H,V as W,b as Y}from"./VSliderTrack-27d177a2.js";import{ax as G,ds as J,aQ as K,aA as X,y as m,a1 as Z,aS as ee,aT as le,c as te,aD as ae,aW as A,b as e,F as se,dq as oe,ab as ie,o as _,f as z,d as b,Q as f,h as n,a as F,w as i,l as de,t as ne,Y as ue,e as S,V as w}from"./index-5cc15e35.js";import{V as ce,a as V}from"./VRow-31de0795.js";import{V as re}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";const me=G({...J(),...Q(),...K(),modelValue:{type:[Number,String],default:0}},"VSlider"),u=X()({name:"VSlider",props:me(),emits:{"update:focused":t=>!0,"update:modelValue":t=>!0,start:t=>!0,end:t=>!0},setup(t,o){let{slots:l,emit:a}=o;const c=m(),{rtlClasses:r}=Z(),p=q(t),s=ee(t,"modelValue",void 0,v=>p.roundValue(v??p.min.value)),{min:d,max:U,mousePressed:P,roundValue:T,onSliderMousedown:I,onSliderTouchstart:M,trackContainerRef:B,position:L,hasLabels:R,readonly:E}=H({props:t,steps:p,onSliderStart:()=>{a("start",s.value)},onSliderEnd:v=>{let{value:y}=v;const D=T(y);s.value=D,a("end",D)},onSliderMove:v=>{let{value:y}=v;return s.value=T(y)},getActiveThumb:()=>{var v;return(v=c.value)==null?void 0:v.$el}}),{isFocused:C,focus:j,blur:N}=le(t),$=te(()=>L(s.value));return ae(()=>{const[v,y]=A.filterProps(t),D=!!(t.label||l.label||l.prepend);return e(A,ie({class:["v-slider",{"v-slider--has-labels":!!l["tick-label"]||R.value,"v-slider--focused":C.value,"v-slider--pressed":P.value,"v-slider--disabled":t.disabled},r.value,t.class],style:t.style},v,{focused:C.value}),{...l,prepend:D?h=>{var k,g;return e(se,null,[((k=l.label)==null?void 0:k.call(l,h))??t.label?e(oe,{id:h.id.value,class:"v-slider__label",text:t.label},null):void 0,(g=l.prepend)==null?void 0:g.call(l,h)])}:void 0,default:h=>{let{id:k,messagesId:g}=h;return e("div",{class:"v-slider__container",onMousedown:E.value?void 0:I,onTouchstartPassive:E.value?void 0:M},[e("input",{id:k.value,name:t.name||k.value,disabled:!!t.disabled,readonly:!!t.readonly,tabindex:"-1",value:s.value},null),e(W,{ref:B,start:0,stop:$.value},{"tick-label":l["tick-label"]}),e(Y,{ref:c,"aria-describedby":g.value,focused:C.value,min:d.value,max:U.value,modelValue:s.value,"onUpdate:modelValue":O=>s.value=O,position:$.value,elevation:t.elevation,onFocus:j,onBlur:N},{"thumb-label":l["thumb-label"]})])}})}),{}}}),pe={__name:"SlidersColors",setup(t){const o=m(0),l=m(50),a=m(100);return(c,r)=>(_(),z("div",null,[e(u,{modelValue:b(o),"onUpdate:modelValue":r[0]||(r[0]=p=>f(o)?o.value=p:null),color:"secondary",label:"color",class:"mb-6"},null,8,["modelValue"]),e(u,{modelValue:b(l),"onUpdate:modelValue":r[1]||(r[1]=p=>f(l)?l.value=p:null),"track-color":"info",label:"track-color",class:"mb-6"},null,8,["modelValue"]),e(u,{modelValue:b(a),"onUpdate:modelValue":r[2]||(r[2]=p=>f(a)?a.value=p:null),"thumb-color":"warning",label:"thumb-color"},null,8,["modelValue"])]))}},ve=n("div",{class:"text-caption"}," Media volume ",-1),be=n("div",{class:"text-caption"}," Alarm volume ",-1),fe=n("div",{class:"text-caption"}," Icon click callback ",-1),Ve={__name:"SlidersIcon",setup(t){const o=m(0),l=m(0),a=m(0);function c(){a.value=a.value-10||0}function r(){a.value=a.value+10||100}return(p,s)=>(_(),z("div",null,[ve,e(u,{modelValue:b(o),"onUpdate:modelValue":s[0]||(s[0]=d=>f(o)?o.value=d:null),"prepend-icon":"mdi-volume-high"},null,8,["modelValue"]),be,e(u,{modelValue:b(l),"onUpdate:modelValue":s[1]||(s[1]=d=>f(l)?l.value=d:null),"append-icon":"mdi-alarm"},null,8,["modelValue"]),fe,e(u,{modelValue:b(a),"onUpdate:modelValue":s[2]||(s[2]=d=>f(a)?a.value=d:null),"append-icon":"mdi-magnify-plus-outline","prepend-icon":"mdi-magnify-minus-outline","onClick:append":r,"onClick:prepend":c},null,8,["modelValue"])]))}},_e={__name:"SlidersSteps",setup(t){const o=m(0);return(l,a)=>(_(),F(u,{modelValue:b(o),"onUpdate:modelValue":a[0]||(a[0]=c=>f(o)?o.value=c:null),min:0,max:1,step:.2,"thumb-label":""},null,8,["modelValue"]))}},he={class:"d-flex flex-column"},ke=n("div",{class:"text-caption"}," Show thumb when using slider ",-1),xe=n("div",{class:"text-caption"}," Always show thumb label ",-1),Se=n("div",{class:"text-caption"}," Custom thumb size ",-1),we=n("div",{class:"text-caption"}," Custom thumb label ",-1),ye={__name:"SlidersThumb",setup(t){const o=m(50),l=m(50),a=m(50),c=m(50),r=["😭","😢","☹️","🙁","😐","🙂","😊","😁","😄","😍"];return(p,s)=>(_(),z("div",he,[n("div",null,[ke,e(u,{modelValue:b(o),"onUpdate:modelValue":s[0]||(s[0]=d=>f(o)?o.value=d:null),"thumb-label":""},null,8,["modelValue"])]),n("div",null,[xe,e(u,{modelValue:b(l),"onUpdate:modelValue":s[1]||(s[1]=d=>f(l)?l.value=d:null),"thumb-label":"always"},null,8,["modelValue"])]),n("div",null,[Se,e(u,{modelValue:b(a),"onUpdate:modelValue":s[2]||(s[2]=d=>f(a)?a.value=d:null),"thumb-size":36,"thumb-label":"always"},null,8,["modelValue"])]),n("div",null,[we,e(u,{modelValue:b(c),"onUpdate:modelValue":s[3]||(s[3]=d=>f(c)?c.value=d:null),"thumb-label":"always"},{"thumb-label":i(({modelValue:d})=>[de(ne(r[Math.min(Math.floor(d/10),9)]),1)]),_:1},8,["modelValue"])])]))}},De=n("div",{class:"text-caption"}," Show ticks when using slider ",-1),ge=n("div",{class:"text-caption"}," Always show ticks ",-1),ze=n("div",{class:"text-caption"}," Tick size ",-1),Ce=n("div",{class:"text-caption"}," Tick labels ",-1),Te={__name:"SlidersTicks",setup(t){const o={0:"Figs",1:"Lemon",2:"Pear",3:"Apple"};return(l,a)=>(_(),z("div",null,[De,e(u,{step:"10","show-ticks":""}),ge,e(u,{step:"10","show-ticks":"always"}),ze,e(u,{step:"10","show-ticks":"always","tick-size":"4"}),Ce,e(u,{ticks:o,max:3,step:"1","show-ticks":"always","tick-size":"4"})]))}},Ee=`<script setup >
const slider1 = ref(0)
const slider2 = ref(50)
const slider3 = ref(100)
<\/script>

<template>
  <div>
    <VSlider
      v-model="slider1"
      color="secondary"
      label="color"
      class="mb-6"
    />

    <VSlider
      v-model="slider2"
      track-color="info"
      label="track-color"
      class="mb-6"
    />

    <VSlider
      v-model="slider3"
      thumb-color="warning"
      label="thumb-color"
    />
  </div>
</template>
`,$e=`<script setup >
const media = ref(0)
const alarm = ref(0)
const zoom = ref(0)

function zoomOut() {
  zoom.value = (zoom.value - 10) || 0
}
function zoomIn() {
  zoom.value = (zoom.value + 10) || 100
}
<\/script>

<template>
  <div>
    <div class="text-caption">
      Media volume
    </div>

    <VSlider
      v-model="media"
      prepend-icon="mdi-volume-high"
    />

    <div class="text-caption">
      Alarm volume
    </div>

    <VSlider
      v-model="alarm"
      append-icon="mdi-alarm"
    />

    <div class="text-caption">
      Icon click callback
    </div>

    <VSlider
      v-model="zoom"
      append-icon="mdi-magnify-plus-outline"
      prepend-icon="mdi-magnify-minus-outline"
      @click:append="zoomIn"
      @click:prepend="zoomOut"
    />
  </div>
</template>
`,Ae=`<script setup >
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`,Fe=`<script setup >
const slider1 = ref(50)
const slider2 = ref(50)
const slider3 = ref(50)
const slider4 = ref(50)

const satisfactionEmojis = ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']
<\/script>

<template>
  <div class="d-flex flex-column">
    <div>
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider1"
        thumb-label
      />
    </div>

    <div>
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider2"
        thumb-label="always"
      />
    </div>

    <div>
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider3"
        :thumb-size="36"
        thumb-label="always"
      />
    </div>

    <div>
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider4"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </div>
  </div>
</template>
`,Ue=`<script setup >
const tickLabels = {
  0: 'Figs',
  1: 'Lemon',
  2: 'Pear',
  3: 'Apple',
}
<\/script>

<template>
  <div>
    <div class="text-caption">
      Show ticks when using slider
    </div>

    <VSlider
      step="10"
      show-ticks
    />

    <div class="text-caption">
      Always show ticks
    </div>

    <VSlider
      step="10"
      show-ticks="always"
    />

    <div class="text-caption">
      Tick size
    </div>

    <VSlider
      step="10"
      show-ticks="always"
      tick-size="4"
    />

    <div class="text-caption">
      Tick labels
    </div>

    <VSlider
      :ticks="tickLabels"
      :max="3"
      step="1"
      show-ticks="always"
      tick-size="4"
    />
  </div>
</template>
`,je={__name:"index",setup(t){const o=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Forms",disabled:!0},{title:"Sliders",disabled:!0}];return(l,a)=>{const c=ue("ApiBtn");return _(),F(ce,null,{default:i(()=>[e(V,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:i(()=>[e(re,{divider:"-",items:o,class:"pa-0"}),n("div",null,[e(c,{href:"https://vuetifyjs.com/en/components/sliders/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(V,{cols:"12",md:"6"},{default:i(()=>[e(S,{title:"Colors"},{default:i(()=>[e(w,null,{default:i(()=>[e(pe)]),_:1}),e(x,{code:Ee},null,8,["code"])]),_:1})]),_:1}),e(V,{cols:"12",md:"6"},{default:i(()=>[e(S,{title:"Icon"},{default:i(()=>[e(w,null,{default:i(()=>[e(Ve)]),_:1}),e(x,{code:$e},null,8,["code"])]),_:1})]),_:1}),e(V,{cols:"12",md:"6"},{default:i(()=>[e(S,{title:"Thumb"},{default:i(()=>[e(w,null,{default:i(()=>[e(ye)]),_:1}),e(x,{code:Fe},null,8,["code"])]),_:1})]),_:1}),e(V,{cols:"12",md:"6"},{default:i(()=>[e(S,{title:"Ticks"},{default:i(()=>[e(w,null,{default:i(()=>[e(Te)]),_:1}),e(x,{code:Ue},null,8,["code"])]),_:1})]),_:1}),e(V,{cols:"12",md:"6"},{default:i(()=>[e(S,{title:"Steps"},{default:i(()=>[e(w,null,{default:i(()=>[e(_e)]),_:1}),e(x,{code:Ae},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{je as default};
