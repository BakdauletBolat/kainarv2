import{_ as L}from"./CodeToggler-a1913054.js";import{m as Me,u as Be,a as Ee}from"./VSelect-f3760063.js";import{m as ze,V as se}from"./VTextField-354b8d27.js";import{ax as Le,b8 as We,dm as Ne,aA as $e,bo as He,y as h,ap as W,aS as ie,c as D,dS as Ke,dw as Oe,dT as je,em as J,a3 as N,aZ as de,dU as Je,aD as qe,b as l,F as A,R as Qe,ab as B,E as Ye,G as ee,q as me,bz as Ze,l as pe,ea as Xe,aP as ea,dK as aa,o as P,a as q,d as y,Q as k,w as d,f as ae,S as ce,z as ve,T as fe,U as la,ad as ta,r as oa,t as na,Y as ua,h as ra,e as $,V as H}from"./index-5cc15e35.js";import{m as sa,u as ia}from"./filter-14cd16c3.js";import{V as da}from"./VCheckboxBtn-8be4ef26.js";import{V as be}from"./VChip-0b64cb0d.js";import{a as S,V as Ve}from"./VRow-31de0795.js";import{a as ma,V as ca}from"./VTabs-f93555dc.js";import{V as va}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";/* empty css                   */import"./VCounter-5de066e9.js";import"./VField-3bcdd552.js";function fa(e,o,m){if(o==null)return e;if(Array.isArray(o))throw new Error("Multiple matches is not implemented");return typeof o=="number"&&~o?l(A,null,[l("span",{class:"v-combobox__unmask"},[e.substr(0,o)]),l("span",{class:"v-combobox__mask"},[e.substr(o,m)]),l("span",{class:"v-combobox__unmask"},[e.substr(o+m)])]):e}const pa=Le({autoSelectFirst:{type:[Boolean,String]},delimiters:Array,...sa({filterKeys:["title"]}),...Me({hideNoData:!0,returnObject:!0}),...We(ze({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Ne({transition:!1})},"VCombobox"),G=$e()({name:"VCombobox",props:pa(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,o){var ne;let{emit:m,slots:t}=o;const{t:c}=He(),s=h(),r=W(!1),g=W(!0),I=W(!1),E=h(),le=h(),Q=ie(e,"menu"),p=D({get:()=>Q.value,set:a=>{var n;Q.value&&!a&&((n=E.value)!=null&&n.ΨopenChildren)||(Q.value=a)}}),v=W(-1);let Y=!1;const xe=D(()=>{var a;return(a=s.value)==null?void 0:a.color}),te=D(()=>p.value?e.closeText:e.openText),{items:oe,transformIn:Ce,transformOut:ge}=Ke(e),{textColorClasses:_e,textColorStyles:he}=Oe(xe),i=ie(e,"modelValue",[],a=>Ce(aa(a)),a=>{const n=ge(a);return e.multiple?n:n[0]??null}),U=je(),M=W(e.multiple?"":((ne=i.value[0])==null?void 0:ne.title)??""),b=D({get:()=>M.value,set:a=>{var n;if(M.value=a,e.multiple||(i.value=[J(e,a)]),a&&e.multiple&&((n=e.delimiters)!=null&&n.length)){const f=a.split(new RegExp(`(?:${e.delimiters.join("|")})+`));f.length>1&&(f.forEach(_=>{_=_.trim(),_&&F(J(e,_))}),M.value="")}a||(v.value=-1),g.value=!a}});N(M,a=>{Y?de(()=>Y=!1):r.value&&!p.value&&(p.value=!0),m("update:search",a)}),N(i,a=>{var n;e.multiple||(M.value=((n=a[0])==null?void 0:n.title)??"")});const{filteredItems:z,getMatches:ye}=ia(e,oe,()=>g.value?"":b.value),T=D(()=>e.hideSelected?z.value.filter(a=>!i.value.some(n=>n.value===a.value)):z.value),we=D(()=>i.value.map(a=>a.value)),K=D(()=>{var n;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&b.value===((n=T.value[0])==null?void 0:n.title))&&T.value.length>0&&!g.value&&!I.value}),Z=D(()=>e.hideNoData&&!oe.value.length||e.readonly||(U==null?void 0:U.isReadonly.value)),X=h(),{onListScroll:Se,onListKeydown:ke}=Be(X,s);function Te(a){Y=!0,e.openOnClear&&(p.value=!0)}function Fe(){Z.value||(p.value=!0)}function De(a){Z.value||(r.value&&(a.preventDefault(),a.stopPropagation()),p.value=!p.value)}function Ge(a){var _;if(e.readonly||U!=null&&U.isReadonly.value)return;const n=s.value.selectionStart,f=i.value.length;if((v.value>-1||["Enter","ArrowDown","ArrowUp"].includes(a.key))&&a.preventDefault(),["Enter","ArrowDown"].includes(a.key)&&(p.value=!0),["Escape"].includes(a.key)&&(p.value=!1),["Enter","Escape","Tab"].includes(a.key)&&(K.value&&["Enter","Tab"].includes(a.key)&&F(z.value[0]),g.value=!0),a.key==="ArrowDown"&&K.value&&((_=X.value)==null||_.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(a.key)){if(v.value<0){a.key==="Backspace"&&!b.value&&(v.value=f-1);return}const u=v.value,V=i.value[v.value];V&&F(V),v.value=u>=f-1?f-2:u}if(a.key==="ArrowLeft"){if(v.value<0&&n>0)return;const u=v.value>-1?v.value-1:f-1;i.value[u]?v.value=u:(v.value=-1,s.value.setSelectionRange(b.value.length,b.value.length))}if(a.key==="ArrowRight"){if(v.value<0)return;const u=v.value+1;i.value[u]?v.value=u:(v.value=-1,s.value.setSelectionRange(0,0))}a.key==="Enter"&&b.value&&(F(J(e,b.value)),b.value="")}}function Ie(){var a;r.value&&(g.value=!0,(a=s.value)==null||a.focus())}function F(a){if(e.multiple){const n=i.value.findIndex(f=>e.valueComparator(f.value,a.value));if(n===-1)i.value=[...i.value,a];else{const f=[...i.value];f.splice(n,1),i.value=f}b.value=""}else i.value=[a],M.value=a.title,de(()=>{p.value=!1,g.value=!0})}function Re(a){r.value=!0,setTimeout(()=>{I.value=!0})}function Ae(a){I.value=!1}function Pe(a){(a==null||a===""&&!e.multiple)&&(i.value=[])}return N(z,a=>{!a.length&&e.hideNoData&&(p.value=!1)}),N(r,(a,n)=>{a||a===n||(v.value=-1,p.value=!1,K.value&&!I.value&&!i.value.some(f=>{let{value:_}=f;return _===T.value[0].value})?F(T.value[0]):e.multiple&&b.value&&(i.value=[...i.value,J(e,b.value)],b.value=""))}),N(p,()=>{if(!e.hideSelected&&p.value&&i.value.length){const a=T.value.findIndex(n=>i.value.some(f=>e.valueComparator(f.value,n.value)));Je&&window.requestAnimationFrame(()=>{var n;a>=0&&((n=le.value)==null||n.scrollToIndex(a))})}}),qe(()=>{const a=!!(e.chips||t.chip),n=!!(!e.hideNoData||T.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),f=i.value.length>0,[_]=se.filterProps(e);return l(se,B({ref:s},_,{modelValue:b.value,"onUpdate:modelValue":[u=>b.value=u,Pe],focused:r.value,"onUpdate:focused":u=>r.value=u,validationValue:i.externalValue,dirty:f,class:["v-combobox",{"v-combobox--active-menu":p.value,"v-combobox--chips":!!e.chips,"v-combobox--selection-slot":!!t.selection,"v-combobox--selecting-index":v.value>-1,[`v-combobox--${e.multiple?"multiple":"single"}`]:!0},e.class],style:e.style,readonly:e.readonly,placeholder:f?void 0:e.placeholder,"onClick:clear":Te,"onMousedown:control":Fe,onKeydown:Ge}),{...t,default:()=>l(A,null,[l(Qe,B({ref:E,modelValue:p.value,"onUpdate:modelValue":u=>p.value=u,activator:"parent",contentClass:"v-combobox__content",disabled:Z.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Ie},e.menuProps),{default:()=>[n&&l(Ye,{ref:X,selected:we.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:u=>u.preventDefault(),onKeydown:ke,onFocusin:Re,onFocusout:Ae,onScrollPassive:Se,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var u,V,w;return[(u=t["prepend-item"])==null?void 0:u.call(t),!T.value.length&&!e.hideNoData&&(((V=t["no-data"])==null?void 0:V.call(t))??l(ee,{title:c(e.noDataText)},null)),l(Ee,{ref:le,renderless:!0,items:T.value},{default:R=>{var re;let{item:x,index:C,itemRef:Ue}=R;const ue=B(x.props,{ref:Ue,key:C,active:K.value&&C===0?!0:void 0,onClick:()=>F(x)});return((re=t.item)==null?void 0:re.call(t,{item:x,index:C,props:ue}))??l(ee,ue,{prepend:O=>{let{isSelected:j}=O;return l(A,null,[e.multiple&&!e.hideSelected?l(da,{key:x.value,modelValue:j,ripple:!1,tabindex:"-1"},null):void 0,x.props.prependIcon&&l(me,{icon:x.props.prependIcon},null)])},title:()=>{var O,j;return g.value?x.title:fa(x.title,(O=ye(x))==null?void 0:O.title,((j=b.value)==null?void 0:j.length)??0)}})}}),(w=t["append-item"])==null?void 0:w.call(t)]}})]}),i.value.map((u,V)=>{var x;function w(C){C.stopPropagation(),C.preventDefault(),F(u)}const R={"onClick:close":w,onMousedown(C){C.preventDefault(),C.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return l("div",{key:u.value,class:["v-combobox__selection",V===v.value&&["v-combobox__selection--selected",_e.value]],style:V===v.value?he.value:{}},[a?t.chip?l(Ze,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:u.title}}},{default:()=>{var C;return[(C=t.chip)==null?void 0:C.call(t,{item:u,index:V,props:R})]}}):l(be,B({key:"chip",closable:e.closableChips,size:"small",text:u.title},R),null):((x=t.selection)==null?void 0:x.call(t,{item:u,index:V}))??l("span",{class:"v-combobox__selection-text"},[u.title,e.multiple&&V<i.value.length-1&&l("span",{class:"v-combobox__selection-comma"},[pe(",")])])])})]),"append-inner":function(){var R;for(var u=arguments.length,V=new Array(u),w=0;w<u;w++)V[w]=arguments[w];return l(A,null,[(R=t["append-inner"])==null?void 0:R.call(t,...V),(!e.hideNoData||e.items.length)&&e.menuIcon?l(me,{class:"v-combobox__menu-icon",icon:e.menuIcon,onMousedown:De,onClick:Xe,"aria-label":c(te.value),title:c(te.value)},null):void 0])}})}),ea({isFocused:r,isPristine:g,menu:p,search:b,selectionIndex:v,filteredItems:z,select:F},s)}}),ba={__name:"ComboboxChips",setup(e){const o=h();return(m,t)=>(P(),q(G,{modelValue:y(o),"onUpdate:modelValue":t[0]||(t[0]=c=>k(o)?o.value=c:null),chips:"",label:"Combobox",items:["California","Colorado","Florida","Georgia","Texas","Wyoming"]},null,8,["modelValue"]))}},Va={__name:"ComboboxDensity",setup(e){const o=["foo","bar","fizz","buzz"],m=h("foo");return(t,c)=>(P(),q(Ve,null,{default:d(()=>[l(S,{cols:"12"},{default:d(()=>[l(G,{modelValue:y(m),"onUpdate:modelValue":c[0]||(c[0]=s=>k(m)?m.value=s:null),items:o,density:"default",label:"Default"},null,8,["modelValue"])]),_:1}),l(S,{cols:"12"},{default:d(()=>[l(G,{modelValue:y(m),"onUpdate:modelValue":c[1]||(c[1]=s=>k(m)?m.value=s:null),items:o,density:"comfortable",label:"Comfortable"},null,8,["modelValue"])]),_:1}),l(S,{cols:"12"},{default:d(()=>[l(G,{modelValue:y(m),"onUpdate:modelValue":c[2]||(c[2]=s=>k(m)?m.value=s:null),items:o,density:"compact",label:"Compact"},null,8,["modelValue"])]),_:1})]),_:1}))}},xa={__name:"ComboboxMultiple",setup(e){const o=h();return(m,t)=>(P(),ae(A,null,[l(G,{modelValue:y(o),"onUpdate:modelValue":t[0]||(t[0]=c=>k(o)?o.value=c:null),multiple:"",label:"Combobox",items:["California","Colorado","Florida","Georgia","Texas","Wyoming"],class:"mb-6"},null,8,["modelValue"]),l(G,{modelValue:y(o),"onUpdate:modelValue":t[1]||(t[1]=c=>k(o)?o.value=c:null),multiple:"",clearable:"",label:"Combobox",items:["California","Colorado","Florida","Georgia","Texas","Wyoming"]},null,8,["modelValue"])],64))}},Ca={__name:"ComboboxSlot",setup(e){const o=[{name:"Sandra Adams",group:"Group 1",avatar:ce},{name:"Ali Connors",group:"Group 1",avatar:ve},{name:"Trevor Hansen",group:"Group 1",avatar:fe},{name:"Tucker Smith",group:"Group 1",avatar:ve},{name:"Britta Holt",group:"Group 2",avatar:la},{name:"Jane Smith ",group:"Group 2",avatar:ta},{name:"John Smith",group:"Group 2",avatar:ce},{name:"Sandra Williams",group:"Group 2",avatar:fe}],m=h([]);return(t,c)=>(P(),q(G,{modelValue:y(m),"onUpdate:modelValue":c[0]||(c[0]=s=>k(m)?m.value=s:null),items:o,chips:"","closable-chips":"","item-title":"name","item-value":"name",label:"Select",multiple:""},{chip:d(({props:s,item:r})=>[l(be,B(s,{"prepend-avatar":r.raw.avatar,text:r.raw.name}),null,16,["prepend-avatar","text"])]),item:d(({props:s,item:r})=>{var g,I,E;return[l(ee,B(s,{"prepend-avatar":(g=r==null?void 0:r.raw)==null?void 0:g.avatar,title:(I=r==null?void 0:r.raw)==null?void 0:I.name,subtitle:(E=r==null?void 0:r.raw)==null?void 0:E.group}),null,16,["prepend-avatar","title","subtitle"])]}),_:1},8,["modelValue"]))}},ga={__name:"ComboboxVariant",setup(e){const o=h("outlined"),m=["solo","solo-inverted","outlined","filled","underlined","solo-filled","plain"],t=h();return(c,s)=>(P(),ae(A,null,[l(ca,{modelValue:y(o),"onUpdate:modelValue":s[0]||(s[0]=r=>k(o)?o.value=r:null),class:"mb-6"},{default:d(()=>[(P(),ae(A,null,oa(m,r=>l(ma,{key:r,value:r},{default:d(()=>[pe(na(r),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),l(G,{modelValue:y(t),"onUpdate:modelValue":s[1]||(s[1]=r=>k(t)?t.value=r:null),label:"Combobox",items:["California","Colorado","Florida","Georgia","Texas","Wyoming"],variant:y(o)},null,8,["modelValue","variant"])],64))}},_a=`<script setup >
const selected = ref()
<\/script>

<template>
  <VCombobox
    v-model="selected"
    chips
    label="Combobox"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  />
</template>
`,ha=`<script setup >
const items = ['foo', 'bar', 'fizz', 'buzz']

const value = ref('foo')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="value"
        :items="items"
        density="default"
        label="Default"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="value"
        :items="items"
        density="comfortable"
        label="Comfortable"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="value"
        :items="items"
        density="compact"
        label="Compact"
      />
    </VCol>
  </VRow>
</template>
`,ya=`<script setup >
const selected = ref()
<\/script>

<template>
  <VCombobox
    v-model="selected"
    multiple
    label="Combobox"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    class="mb-6"
  />
  <VCombobox
    v-model="selected"
    multiple
    clearable
    label="Combobox"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  />
</template>
`,wa=`<script setup >
import avatar1 from '@/assets/avatars/avatar-1.png'
import avatar2 from '@/assets/avatars/avatar-2.png'
import avatar3 from '@/assets/avatars/avatar-3.png'
import avatar4 from '@/assets/avatars/avatar-4.png'
import avatar5 from '@/assets/avatars/avatar-5.png'

const people = [
  { name: 'Sandra Adams', group: 'Group 1', avatar: avatar1 },
  { name: 'Ali Connors', group: 'Group 1', avatar: avatar2 },
  { name: 'Trevor Hansen', group: 'Group 1', avatar: avatar3 },
  { name: 'Tucker Smith', group: 'Group 1', avatar: avatar2 },
  { name: 'Britta Holt', group: 'Group 2', avatar: avatar4 },
  { name: 'Jane Smith ', group: 'Group 2', avatar: avatar5 },
  { name: 'John Smith', group: 'Group 2', avatar: avatar1 },
  { name: 'Sandra Williams', group: 'Group 2', avatar: avatar3 },
]

const friends = ref([])
<\/script>

<template>
  <VCombobox
    v-model="friends"
    :items="people"
    chips
    closable-chips
    item-title="name"
    item-value="name"
    label="Select"
    multiple
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </VCombobox>
</template>
`,Sa=`<script setup >
type Variant = 'solo' | 'solo-inverted' | 'outlined' | 'solo-filled' | 'underlined' | 'filled' | 'plain' | undefined

const selectedVariant = ref<Variant>('outlined')
const variant = ['solo', 'solo-inverted', 'outlined', 'filled', 'underlined', 'solo-filled', 'plain']
const selected = ref()
<\/script>

<template>
  <VTabs
    v-model="selectedVariant"
    class="mb-6"
  >
    <VTab
      v-for="i in variant"
      :key="i"
      :value="i"
    >
      {{ i }}
    </VTab>
  </VTabs>

  <VCombobox
    v-model="selected"
    label="Combobox"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    :variant="selectedVariant"
  />
</template>
`,La={__name:"index",setup(e){const o=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Forms",disabled:!0},{title:"Combobox",disabled:!0}];return(m,t)=>{const c=ua("ApiBtn");return P(),q(Ve,null,{default:d(()=>[l(S,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:d(()=>[l(va,{divider:"-",items:o,class:"pa-0"}),ra("div",null,[l(c,{href:"https://vuetifyjs.com/en/components/combobox/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),l(S,{cols:"12",md:"6"},{default:d(()=>[l($,{title:"Variant"},{default:d(()=>[l(H,null,{default:d(()=>[l(ga)]),_:1}),l(L,{code:Sa},null,8,["code"])]),_:1})]),_:1}),l(S,{cols:"12",md:"6"},{default:d(()=>[l($,{title:"Multiple"},{default:d(()=>[l(H,null,{default:d(()=>[l(xa)]),_:1}),l(L,{code:ya},null,8,["code"])]),_:1})]),_:1}),l(S,{cols:"12",md:"6"},{default:d(()=>[l($,{title:"Chips"},{default:d(()=>[l(H,null,{default:d(()=>[l(ba)]),_:1}),l(L,{code:_a},null,8,["code"])]),_:1})]),_:1}),l(S,{cols:"12",md:"6"},{default:d(()=>[l($,{title:"Slot"},{default:d(()=>[l(H,null,{default:d(()=>[l(Ca)]),_:1}),l(L,{code:wa},null,8,["code"])]),_:1})]),_:1}),l(S,{cols:"12",md:"6"},{default:d(()=>[l($,{title:"Density"},{default:d(()=>[l(H,null,{default:d(()=>[l(Va)]),_:1}),l(L,{code:ha},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{La as default};
