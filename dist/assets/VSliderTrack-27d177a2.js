import{ax as Y,bk as fe,bi as he,c as a,en as H,a1 as le,aC as S,ap as Q,y as Z,dE as ke,cG as ye,b0 as ae,ay as re,aA as se,bn as pe,ck as ne,dw as Se,aD as oe,a$ as E,bs as ge,b as d,D as ee,aX as we,eo as Ce,K as Ve,dJ as _e,bt as Te,bA as te}from"./index-5cc15e35.js";const G=Symbol.for("vuetify:v-slider");function xe(e,t,n){const i=n==="vertical",u=t.getBoundingClientRect(),f="touches"in e?e.touches[0]:e;return i?f.clientY-(u.top+u.height/2):f.clientX-(u.left+u.width/2)}function ze(e,t){return"touches"in e&&e.touches.length?e.touches[0][t]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][t]:e[t]}const Re=Y({disabled:{type:Boolean,default:null},error:Boolean,readonly:{type:Boolean,default:null},max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...fe(),...he({elevation:2})},"Slider"),Ee=e=>{const t=a(()=>parseFloat(e.min)),n=a(()=>parseFloat(e.max)),i=a(()=>+e.step>0?parseFloat(e.step):0),u=a(()=>Math.max(H(i.value),H(t.value)));function f(v){if(v=parseFloat(v),i.value<=0)return v;const g=ae(v,t.value,n.value),h=t.value%i.value,w=Math.round((g-h)/i.value)*i.value+h;return parseFloat(Math.min(w,n.value).toFixed(u.value))}return{min:t,max:n,step:i,decimals:u,roundValue:f}},Me=e=>{let{props:t,steps:n,onSliderStart:i,onSliderMove:u,onSliderEnd:f,getActiveThumb:v}=e;const{isRtl:g}=le(),h=S(t,"reverse"),w=a(()=>{let l=g.value?"rtl":"ltr";return t.reverse&&(l=l==="rtl"?"ltr":"rtl"),l}),{min:m,max:k,step:z,decimals:y,roundValue:F}=n,M=a(()=>parseInt(t.thumbSize,10)),A=a(()=>parseInt(t.tickSize,10)),$=a(()=>parseInt(t.trackSize,10)),L=a(()=>(k.value-m.value)/z.value),D=S(t,"disabled"),P=a(()=>t.direction==="vertical"),B=a(()=>t.error||t.disabled?void 0:t.thumbColor??t.color),N=a(()=>t.error||t.disabled?void 0:t.trackColor??t.color),K=a(()=>t.error||t.disabled?void 0:t.trackFillColor??t.color),V=Q(!1),b=Q(0),_=Z(),p=Z();function r(l){var W;const s=t.direction==="vertical",ue=s?"top":"left",ce=s?"height":"width",de=s?"clientY":"clientX",{[ue]:ve,[ce]:me}=(W=_.value)==null?void 0:W.$el.getBoundingClientRect(),be=ze(l,de);let U=Math.min(Math.max((be-ve-b.value)/me,0),1)||0;return(s||w.value==="rtl")&&(U=1-U),F(m.value+U*(k.value-m.value))}const O=l=>{f({value:r(l)}),V.value=!1,b.value=0},q=l=>{p.value=v(l),p.value&&(p.value.focus(),V.value=!0,p.value.contains(l.target)?b.value=xe(l,p.value,t.direction):(b.value=0,u({value:r(l)})),i({value:r(l)}))},T={passive:!0,capture:!0};function C(l){u({value:r(l)})}function o(l){l.stopPropagation(),l.preventDefault(),O(l),window.removeEventListener("mousemove",C,T),window.removeEventListener("mouseup",o)}function c(l){var s;O(l),window.removeEventListener("touchmove",C,T),(s=l.target)==null||s.removeEventListener("touchend",c)}function x(l){var s;q(l),window.addEventListener("touchmove",C,T),(s=l.target)==null||s.addEventListener("touchend",c,{passive:!1})}function j(l){l.preventDefault(),q(l),window.addEventListener("mousemove",C,T),window.addEventListener("mouseup",o,{passive:!1})}const R=l=>{const s=(l-m.value)/(k.value-m.value)*100;return ae(isNaN(s)?0:s,0,100)},I=S(t,"showTicks"),X=a(()=>I.value?t.ticks?Array.isArray(t.ticks)?t.ticks.map(l=>({value:l,position:R(l),label:l.toString()})):Object.keys(t.ticks).map(l=>({value:parseFloat(l),position:R(parseFloat(l)),label:t.ticks[l]})):L.value!==1/0?ke(L.value+1).map(l=>{const s=m.value+l*z.value;return{value:s,position:R(s)}}):[]:[]),ie=a(()=>X.value.some(l=>{let{label:s}=l;return!!s})),J={activeThumbRef:p,color:S(t,"color"),decimals:y,disabled:D,direction:S(t,"direction"),elevation:S(t,"elevation"),hasLabels:ie,horizontalDirection:w,isReversed:h,min:m,max:k,mousePressed:V,numTicks:L,onSliderMousedown:j,onSliderTouchstart:x,parsedTicks:X,parseMouseMove:r,position:R,readonly:S(t,"readonly"),rounded:S(t,"rounded"),roundValue:F,showTicks:I,startOffset:b,step:z,thumbSize:M,thumbColor:B,thumbLabel:S(t,"thumbLabel"),ticks:S(t,"ticks"),tickSize:A,trackColor:N,trackContainerRef:_,trackFillColor:K,trackSize:$,vertical:P};return ye(G,J),J};const Fe=Y({focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:[Boolean,Object],default:!0},...re()},"VSliderThumb"),De=se()({name:"VSliderThumb",directives:{Ripple:pe},props:Fe(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n,emit:i}=t;const u=ne(G),{rtlClasses:f}=le();if(!u)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:v,step:g,vertical:h,disabled:w,thumbSize:m,thumbLabel:k,direction:z,readonly:y,elevation:F,isReversed:M,horizontalDirection:A,mousePressed:$,decimals:L}=u,{textColorClasses:D,textColorStyles:P}=Se(v),{pageup:B,pagedown:N,end:K,home:V,left:b,right:_,down:p,up:r}=_e,O=[B,N,K,V,b,_,p,r],q=a(()=>g.value?[1,2,3]:[1,5,10]);function T(o,c){if(!O.includes(o.key))return;o.preventDefault();const x=g.value||.1,j=(e.max-e.min)/x;if([b,_,p,r].includes(o.key)){const I=(A.value==="rtl"?[b,r]:[_,r]).includes(o.key)?1:-1,X=o.shiftKey?2:o.ctrlKey?1:0;c=c+I*x*q.value[X]}else if(o.key===V)c=e.min;else if(o.key===K)c=e.max;else{const R=o.key===N?1:-1;c=c-R*x*(j>100?j/10:10)}return Math.max(e.min,Math.min(e.max,c))}function C(o){const c=T(o,e.modelValue);c!=null&&i("update:modelValue",c)}return oe(()=>{const o=E(h.value||M.value?100-e.position:e.position,"%"),{elevationClasses:c}=ge(a(()=>w.value?void 0:F.value));return d("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&$.value},e.class,f.value],style:[{"--v-slider-thumb-position":o,"--v-slider-thumb-size":E(m.value)},e.style],role:"slider",tabindex:w.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":!!y.value,"aria-orientation":z.value,onKeydown:y.value?void 0:C},[d("div",{class:["v-slider-thumb__surface",D.value,c.value],style:{...P.value}},null),ee(d("div",{class:["v-slider-thumb__ripple",D.value],style:P.value},null),[[we("ripple"),e.ripple,null,{circle:!0,center:!0}]]),d(Ce,{origin:"bottom center"},{default:()=>{var x;return[ee(d("div",{class:"v-slider-thumb__label-container"},[d("div",{class:["v-slider-thumb__label"]},[d("div",null,[((x=n["thumb-label"])==null?void 0:x.call(n,{modelValue:e.modelValue}))??e.modelValue.toFixed(g.value?L.value:1)])])]),[[Ve,k.value&&e.focused||k.value==="always"]])]}})])}),{}}});const Le=Y({start:{type:Number,required:!0},stop:{type:Number,required:!0},...re()},"VSliderTrack"),Pe=se()({name:"VSliderTrack",props:Le(),emits:{},setup(e,t){let{slots:n}=t;const i=ne(G);if(!i)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:u,horizontalDirection:f,parsedTicks:v,rounded:g,showTicks:h,tickSize:w,trackColor:m,trackFillColor:k,trackSize:z,vertical:y,min:F,max:M}=i,{roundedClasses:A}=Te(g),{backgroundColorClasses:$,backgroundColorStyles:L}=te(k),{backgroundColorClasses:D,backgroundColorStyles:P}=te(m),B=a(()=>`inset-${y.value?"block-end":"inline-start"}`),N=a(()=>y.value?"height":"width"),K=a(()=>({[B.value]:"0%",[N.value]:"100%"})),V=a(()=>e.stop-e.start),b=a(()=>({[B.value]:E(e.start,"%"),[N.value]:E(V.value,"%")})),_=a(()=>h.value?(y.value?v.value.slice().reverse():v.value).map((r,O)=>{var C;const q=y.value?"bottom":"margin-inline-start",T=r.value!==F.value&&r.value!==M.value?E(r.position,"%"):void 0;return d("div",{key:r.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":r.position>=e.start&&r.position<=e.stop,"v-slider-track__tick--first":r.value===F.value,"v-slider-track__tick--last":r.value===M.value}],style:{[q]:T}},[(r.label||n["tick-label"])&&d("div",{class:"v-slider-track__tick-label"},[((C=n["tick-label"])==null?void 0:C.call(n,{tick:r,index:O}))??r.label])])}):[]);return oe(()=>d("div",{class:["v-slider-track",A.value,e.class],style:[{"--v-slider-track-size":E(z.value),"--v-slider-tick-size":E(w.value),direction:y.value?void 0:f.value},e.style]},[d("div",{class:["v-slider-track__background",D.value,{"v-slider-track__background--opacity":!!u.value||!k.value}],style:{...K.value,...P.value}},null),d("div",{class:["v-slider-track__fill",$.value],style:{...b.value,...L.value}},null),h.value&&d("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":h.value==="always"}]},[_.value])])),{}}});export{Pe as V,Me as a,De as b,xe as g,Re as m,Ee as u};