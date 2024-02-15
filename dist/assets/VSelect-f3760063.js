import{m as he,V as ee}from"./VTextField-354b8d27.js";import{ax as H,ay as ie,aA as Y,dI as ce,a3 as G,aD as J,b as s,F as O,ab as E,ap as j,c as I,y as M,aU as pe,dH as ge,dE as ye,b0 as le,bB as Ve,dN as Se,bC as be,aC as we,dO as ke,a$ as W,N as xe,dP as Pe,cB as Ce,b6 as Ie,dQ as Te,b8 as Re,dm as De,dR as Be,bo as Ae,aS as te,dS as _e,dT as Le,dU as Fe,R as Ee,E as Me,G as ne,q as ae,bz as Oe,l as He,aP as Ue,dV as oe,dK as Ke}from"./index-5cc15e35.js";import{V as Ne}from"./VCheckboxBtn-8be4ef26.js";import{V as ze}from"./VChip-0b64cb0d.js";const $e=H({renderless:Boolean,...ie()},"VVirtualScrollItem"),qe=Y()({name:"VVirtualScrollItem",inheritAttrs:!1,props:$e(),emits:{"update:height":e=>!0},setup(e,f){let{attrs:l,emit:m,slots:c}=f;const{resizeRef:r,contentRect:p}=ce(void 0,"border");G(()=>{var a;return(a=p.value)==null?void 0:a.height},a=>{a!=null&&m("update:height",a)}),J(()=>{var a,o;return e.renderless?s(O,null,[(a=c.default)==null?void 0:a.call(c,{itemRef:r})]):s("div",E({ref:r,class:["v-virtual-scroll__item",e.class],style:e.style},l),[(o=c.default)==null?void 0:o.call(c)])})}}),ue=-1,se=1,We=H({itemHeight:{type:[Number,String],default:48}},"virtual");function je(e,f,l){const m=j(0),c=j(e.itemHeight),r=I({get:()=>parseInt(c.value??0,10),set(d){c.value=d}}),p=M(),{resizeRef:a,contentRect:o}=ce();pe(()=>{a.value=p.value});const y=ge(),k=new Map;let b=Array.from({length:f.value.length});const n=I(()=>{const d=(!o.value||p.value===document.documentElement?y.height.value:o.value.height)-((l==null?void 0:l.value)??0);return Math.ceil(d/r.value*1.7+1)});function h(d,v){r.value=Math.max(r.value,v),b[d]=v,k.set(f.value[d],v)}function T(d){return b.slice(0,d).reduce((v,V)=>v+(V||r.value),0)}function x(d){const v=f.value.length;let V=0,D=0;for(;D<d&&V<v;)D+=b[V++]||r.value;return V-1}let L=0;function F(){if(!p.value||!o.value)return;const d=o.value.height-56,v=p.value.scrollTop,V=v<L?ue:se,D=x(v+d/2),_=Math.round(n.value/3),N=D-_,z=m.value+_*2-1;V===ue&&D<=z?m.value=le(N,0,f.value.length):V===se&&D>=z&&(m.value=le(N,0,f.value.length-n.value)),L=v}function U(d){if(!p.value)return;const v=T(d);p.value.scrollTop=v}const B=I(()=>Math.min(f.value.length,m.value+n.value)),K=I(()=>f.value.slice(m.value,B.value).map((d,v)=>({raw:d,index:v+m.value}))),A=I(()=>T(m.value)),Q=I(()=>T(f.value.length)-T(B.value));return G(()=>f.value.length,()=>{b=ye(f.value.length).map(()=>r.value),k.forEach((d,v)=>{const V=f.value.indexOf(v);V===-1?k.delete(v):b[V]=d})}),{containerRef:p,computedItems:K,itemHeight:r,paddingTop:A,paddingBottom:Q,scrollToIndex:U,handleScroll:F,handleItemResize:h}}const Ge=H({items:{type:Array,default:()=>[]},renderless:Boolean,...We(),...ie(),...Ve()},"VVirtualScroll"),Qe=Y()({name:"VVirtualScroll",props:Ge(),setup(e,f){let{slots:l}=f;const m=Se("VVirtualScroll"),{dimensionStyles:c}=be(e),{containerRef:r,handleScroll:p,handleItemResize:a,scrollToIndex:o,paddingTop:y,paddingBottom:k,computedItems:b}=je(e,we(e,"items"));return ke(()=>e.renderless,()=>{xe(()=>{var n;r.value=Pe(m.vnode.el,!0),(n=r.value)==null||n.addEventListener("scroll",p)}),Ce(()=>{var n;(n=r.value)==null||n.removeEventListener("scroll",p)})}),J(()=>{const n=b.value.map(h=>s(qe,{key:h.index,renderless:e.renderless,"onUpdate:height":T=>a(h.index,T)},{default:T=>{var x;return(x=l.default)==null?void 0:x.call(l,{item:h.raw,index:h.index,...T})}}));return e.renderless?s(O,null,[s("div",{class:"v-virtual-scroll__spacer",style:{paddingTop:W(y.value)}},null),n,s("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:W(k.value)}},null)]):s("div",{ref:r,class:["v-virtual-scroll",e.class],onScroll:p,style:[c.value,e.style]},[s("div",{class:"v-virtual-scroll__container",style:{paddingTop:W(y.value),paddingBottom:W(k.value)}},[n])])}),{scrollToIndex:o}}});function Ye(e,f){const l=j(!1);let m;function c(a){cancelAnimationFrame(m),l.value=!0,m=requestAnimationFrame(()=>{m=requestAnimationFrame(()=>{l.value=!1})})}async function r(){await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>{if(l.value){const o=G(l,()=>{o(),a()})}else a()})}async function p(a){var k,b;if(a.key==="Tab"&&((k=f.value)==null||k.focus()),!["PageDown","PageUp","Home","End"].includes(a.key))return;const o=(b=e.value)==null?void 0:b.$el;if(!o)return;(a.key==="Home"||a.key==="End")&&o.scrollTo({top:a.key==="Home"?0:o.scrollHeight,behavior:"smooth"}),await r();const y=o.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(a.key==="PageDown"||a.key==="Home"){const n=o.getBoundingClientRect().top;for(const h of y)if(h.getBoundingClientRect().top>=n){h.focus();break}}else{const n=o.getBoundingClientRect().bottom;for(const h of[...y].reverse())if(h.getBoundingClientRect().bottom<=n){h.focus();break}}}return{onListScroll:c,onListKeydown:p}}const Je=H({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:Ie,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Te({itemChildren:!1})},"Select"),Xe=H({...Je(),...Re(he({modelValue:null,role:"button"}),["validationValue","dirty","appendInnerIcon"]),...De({transition:{component:Be}})},"VSelect"),nl=Y()({name:"VSelect",props:Xe(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,f){let{slots:l}=f;const{t:m}=Ae(),c=M(),r=M(),p=M(),a=te(e,"menu"),o=I({get:()=>a.value,set:t=>{var u;a.value&&!t&&((u=r.value)!=null&&u.ΨopenChildren)||(a.value=t)}}),{items:y,transformIn:k,transformOut:b}=_e(e),n=te(e,"modelValue",[],t=>k(t===null?[null]:Ke(t)),t=>{const u=b(t);return e.multiple?u:u[0]??null}),h=Le(),T=I(()=>n.value.map(t=>t.value)),x=j(!1),L=I(()=>o.value?e.closeText:e.openText);let F="",U;const B=I(()=>e.hideSelected?y.value.filter(t=>!n.value.some(u=>u===t)):y.value),K=I(()=>e.hideNoData&&!y.value.length||e.readonly||(h==null?void 0:h.isReadonly.value)),A=M(),{onListScroll:Q,onListKeydown:d}=Ye(A,c);function v(t){e.openOnClear&&(o.value=!0)}function V(){K.value||(o.value=!o.value)}function D(t){var i,w;if(!t.key||e.readonly||h!=null&&h.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(t.key)&&t.preventDefault(),["Enter","ArrowDown"," "].includes(t.key)&&(o.value=!0),["Escape","Tab"].includes(t.key)&&(o.value=!1),t.key==="Home"?(i=A.value)==null||i.focus("first"):t.key==="End"&&((w=A.value)==null||w.focus("last"));const u=1e3;function S(g){const R=g.key.length===1,P=!g.ctrlKey&&!g.metaKey&&!g.altKey;return R&&P}if(e.multiple||!S(t))return;const $=performance.now();$-U>u&&(F=""),F+=t.key.toLowerCase(),U=$;const q=y.value.find(g=>g.title.toLowerCase().startsWith(F));q!==void 0&&(n.value=[q])}function _(t){if(e.multiple){const u=n.value.findIndex(S=>e.valueComparator(S.value,t.value));if(u===-1)n.value=[...n.value,t];else{const S=[...n.value];S.splice(u,1),n.value=S}}else n.value=[t],o.value=!1}function N(t){var u;(u=A.value)!=null&&u.$el.contains(t.relatedTarget)||(o.value=!1)}function z(){var t;x.value&&((t=c.value)==null||t.focus())}function re(t){x.value=!0}function de(t){if(t==null)n.value=[];else if(oe(c.value,":autofill")||oe(c.value,":-webkit-autofill")){const u=y.value.find(S=>S.title===t);u&&_(u)}else c.value&&(c.value.value="")}return G(o,()=>{if(!e.hideSelected&&o.value&&n.value.length){const t=B.value.findIndex(u=>n.value.some(S=>e.valueComparator(S.value,u.value)));Fe&&window.requestAnimationFrame(()=>{var u;t>=0&&((u=p.value)==null||u.scrollToIndex(t))})}}),J(()=>{const t=!!(e.chips||l.chip),u=!!(!e.hideNoData||B.value.length||l["prepend-item"]||l["append-item"]||l["no-data"]),S=n.value.length>0,[$]=ee.filterProps(e),q=S||!x.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return s(ee,E({ref:c},$,{modelValue:n.value.map(i=>i.props.value).join(", "),"onUpdate:modelValue":de,focused:x.value,"onUpdate:focused":i=>x.value=i,validationValue:n.externalValue,dirty:S,class:["v-select",{"v-select--active-menu":o.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":n.value.length,"v-select--selection-slot":!!l.selection},e.class],style:e.style,inputmode:"none",placeholder:q,"onClick:clear":v,"onMousedown:control":V,onBlur:N,onKeydown:D,"aria-label":m(L.value),title:m(L.value)}),{...l,default:()=>s(O,null,[s(Ee,E({ref:r,modelValue:o.value,"onUpdate:modelValue":i=>o.value=i,activator:"parent",contentClass:"v-select__content",disabled:K.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:z},e.menuProps),{default:()=>[u&&s(Me,{ref:A,selected:T.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:i=>i.preventDefault(),onKeydown:d,onFocusin:re,onScrollPassive:Q,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var i,w,g;return[(i=l["prepend-item"])==null?void 0:i.call(l),!B.value.length&&!e.hideNoData&&(((w=l["no-data"])==null?void 0:w.call(l))??s(ne,{title:m(e.noDataText)},null)),s(Qe,{ref:p,renderless:!0,items:B.value},{default:R=>{var Z;let{item:P,index:C,itemRef:ve}=R;const X=E(P.props,{ref:ve,key:C,onClick:()=>_(P)});return((Z=l.item)==null?void 0:Z.call(l,{item:P,index:C,props:X}))??s(ne,X,{prepend:fe=>{let{isSelected:me}=fe;return s(O,null,[e.multiple&&!e.hideSelected?s(Ne,{key:P.value,modelValue:me,ripple:!1,tabindex:"-1"},null):void 0,P.props.prependIcon&&s(ae,{icon:P.props.prependIcon},null)])}})}}),(g=l["append-item"])==null?void 0:g.call(l)]}})]}),n.value.map((i,w)=>{var P;function g(C){C.stopPropagation(),C.preventDefault(),_(i)}const R={"onClick:close":g,onMousedown(C){C.preventDefault(),C.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return s("div",{key:i.value,class:"v-select__selection"},[t?l.chip?s(Oe,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:i.title}}},{default:()=>{var C;return[(C=l.chip)==null?void 0:C.call(l,{item:i,index:w,props:R})]}}):s(ze,E({key:"chip",closable:e.closableChips,size:"small",text:i.title},R),null):((P=l.selection)==null?void 0:P.call(l,{item:i,index:w}))??s("span",{class:"v-select__selection-text"},[i.title,e.multiple&&w<n.value.length-1&&s("span",{class:"v-select__selection-comma"},[He(",")])])])})]),"append-inner":function(){var R;for(var i=arguments.length,w=new Array(i),g=0;g<i;g++)w[g]=arguments[g];return s(O,null,[(R=l["append-inner"])==null?void 0:R.call(l,...w),e.menuIcon?s(ae,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Ue({isFocused:x,menu:o,select:_},c)}});export{nl as V,Qe as a,We as b,je as c,qe as d,Je as m,Ye as u};