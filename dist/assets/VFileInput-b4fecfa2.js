import{m as H,f as J,V as X}from"./VField-3bcdd552.js";import{ax as Y,aQ as ee,dK as le,aA as te,bo as ae,aS as ne,aT as oe,c as s,ed as $,y as V,a3 as ue,aD as ie,aV as se,aW as x,b as o,ab as C,F as h,aP as re,aZ as ce,a_ as de}from"./index-5cc15e35.js";import{V as fe}from"./VChip-0b64cb0d.js";import{V as ve}from"./VCounter-5de066e9.js";const me=Y({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...ee({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>le(e).every(f=>f!=null&&typeof f=="object")},...H({clearable:!0})},"VFileInput"),ge=te()({name:"VFileInput",inheritAttrs:!1,props:me(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:D,emit:g,slots:a}=f;const{t:k}=ae(),n=ne(e,"modelValue"),{isFocused:v,focus:M,blur:N}=oe(e),I=s(()=>typeof e.showSize!="boolean"?e.showSize:void 0),F=s(()=>(n.value??[]).reduce((l,t)=>{let{size:r=0}=t;return l+r},0)),b=s(()=>$(F.value,I.value)),p=s(()=>(n.value??[]).map(l=>{const{name:t="",size:r=0}=l;return e.showSize?`${t} (${$(r,I.value)})`:t})),j=s(()=>{var t;const l=((t=n.value)==null?void 0:t.length)??0;return e.showSize?k(e.counterSizeString,l,b.value):k(e.counterString,l)}),S=V(),P=V(),i=V(),E=s(()=>v.value||e.active),z=s(()=>["plain","underlined"].includes(e.variant));function y(){var l;i.value!==document.activeElement&&((l=i.value)==null||l.focus()),v.value||M()}function T(l){w(l)}function U(l){g("mousedown:control",l)}function w(l){var t;(t=i.value)==null||t.click(),g("click:control",l)}function _(l){l.stopPropagation(),y(),ce(()=>{n.value=[],de(e["onClick:clear"],l)})}return ue(n,l=>{(!Array.isArray(l)||!l.length)&&i.value&&(i.value.value="")}),ie(()=>{const l=!!(a.counter||e.counter),t=!!(l||a.details),[r,K]=se(D),[{modelValue:pe,...L}]=x.filterProps(e),[O]=J(e);return o(x,C({ref:S,modelValue:n.value,"onUpdate:modelValue":c=>n.value=c,class:["v-file-input",{"v-text-field--plain-underlined":z.value},e.class],style:e.style,"onClick:prepend":T},r,L,{centerAffix:!z.value,focused:v.value}),{...a,default:c=>{let{id:m,isDisabled:d,isDirty:A,isReadonly:R,isValid:Q}=c;return o(X,C({ref:P,"prepend-icon":e.prependIcon,onMousedown:U,onClick:w,"onClick:clear":_,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},O,{id:m.value,active:E.value||A.value,dirty:A.value,disabled:d.value,focused:v.value,error:Q.value===!1}),{...a,default:W=>{var B;let{props:{class:Z,...q}}=W;return o(h,null,[o("input",C({ref:i,type:"file",readonly:R.value,disabled:d.value,multiple:e.multiple,name:e.name,onClick:u=>{u.stopPropagation(),R.value&&u.preventDefault(),y()},onChange:u=>{if(!u.target)return;const G=u.target;n.value=[...G.files??[]]},onFocus:y,onBlur:N},q,K),null),o("div",{class:Z},[!!((B=n.value)!=null&&B.length)&&(a.selection?a.selection({fileNames:p.value,totalBytes:F.value,totalBytesReadable:b.value}):e.chips?p.value.map(u=>o(fe,{key:u,size:"small",color:e.color},{default:()=>[u]})):p.value.join(", "))])])}})},details:t?c=>{var m,d;return o(h,null,[(m=a.details)==null?void 0:m.call(a,c),l&&o(h,null,[o("span",null,null),o(ve,{active:!!((d=n.value)!=null&&d.length),value:j.value},a.counter)])])}:void 0})}),re({},S,P,i)}});export{ge as V};
