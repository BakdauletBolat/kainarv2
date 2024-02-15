import{y as p,N as j,O as F,c as M,o as n,a as _,w as t,b as e,e as z,i as P,d as l,V as r,h as o,Q as V,x as f,f as w,r as b,F as y,l as v,R as L,E as U,A as q,a6 as A,t as c,D as E,ab as H,K,q as I,n as O}from"./index-5cc15e35.js";import{c as $}from"./cover-3fe63d2a.js";import{V as T,a as k}from"./VRow-31de0795.js";import{V as J}from"./VBreadcrumbs-bfc418b8.js";import{V as Q}from"./VTextField-354b8d27.js";import{V as W,a as G}from"./VTabs-f93555dc.js";import{V as X}from"./VDataIterator-ab9ac9b0.js";import{V as Y}from"./VPagination-f00edc22.js";import{V as B}from"./VChip-0b64cb0d.js";/* empty css                   */import"./VCounter-5de066e9.js";import"./VField-3bcdd552.js";import"./filter-14cd16c3.js";import"./options-2c517f2f.js";const Z=o("h4",{class:"text-h4 text-white mb-6",style:{"z-index":"2"}}," Search Products ",-1),ee={class:"w-100"},te={class:"d-flex justify-space-between gap-4 mt-10"},ae={class:"d-flex align-center justify-space-between mb-4"},le={class:"text-h6"},se={class:"text-medium-emphasis text-truncate"},oe={class:"d-flex justify-space-between"},re={class:"d-flex align-center gap-2"},ie={class:"text-base font-weight-semibold"},ye={__name:"index",setup(ne){const d=p(["low-to-high-price","high-to-low-price","categories","colors","sizes"]),x=p([{text:"Low to high price",value:"low-to-high-price",prependIcon:"mdi-trending-up"},{text:"High to low price",value:"high-to-low-price",prependIcon:"mdi-trending-down"},{text:"Categories",value:"categories",prependIcon:"mdi-shape-outline"},{text:"Colors",value:"colors",prependIcon:"mdi-palette-outline"},{text:"Sizes",value:"sizes",prependIcon:"mdi-arrow-expand"}]),u=p([]),m=p(""),g=p(1),C=p(6);j(()=>{F.get("/products",{params:{q:m.value}}).then(h=>{u.value=h.data.products})});const S=h=>{const i=d.value.findIndex(a=>a===h);d.value.splice(i,1)},D=M(()=>{if(u.value)return Math.ceil(u.value.length/C.value)}),N=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Pages",disabled:!0},{title:"Search",disabled:!0}];return(h,i)=>(n(),_(T,null,{default:t(()=>[e(k,{cols:"12"},{default:t(()=>[e(J,{items:N,divider:"-",class:"px-0"})]),_:1}),e(k,{cols:"12"},{default:t(()=>[e(z,null,{default:t(()=>[e(P,{src:l($),height:"160",cover:"",gradient:"to bottom, rgba(0,0,0,.6), rgba(0,0,0,.5)"},null,8,["src"]),e(r,{class:"d-flex flex-column align-center",style:{"margin-top":"-7rem"}},{default:t(()=>[Z,o("div",ee,[e(Q,{modelValue:l(m),"onUpdate:modelValue":i[0]||(i[0]=a=>V(m)?m.value=a:null),variant:"solo",density:"default","prepend-inner-icon":"mdi-magnify",placeholder:"Type your keywords","bg-color":"surface",style:{"max-width":"40rem"},class:"mx-auto"},{"append-inner":t(()=>[e(f,{color:"info",size:"small",elevation:"0",icon:"mdi-arrow-right"})]),_:1},8,["modelValue"])])]),_:1}),e(r,null,{default:t(()=>[o("div",te,[e(W,null,{default:t(()=>[(n(),w(y,null,b(["All Items","Women","Man","Jewels","Kids"],a=>e(G,{key:a},{default:t(()=>[v(c(a),1)]),_:2},1024)),64))]),_:1}),o("div",null,[e(f,{color:"info","prepend-icon":"mdi-filter-outline"},{default:t(()=>[v(" Filters "),e(L,{activator:"parent"},{default:t(()=>[e(U,{selected:l(d),"onUpdate:selected":i[1]||(i[1]=a=>V(d)?d.value=a:null),"select-strategy":"classic",items:l(x),"item-title":"text"},null,8,["selected","items"])]),_:1})]),_:1})])]),e(q)]),_:1}),e(r,{class:"d-flex flex-wrap gap-2"},{default:t(()=>[(n(!0),w(y,null,b(l(d),a=>E((n(),_(B,H({key:a},l(x).filter(s=>s.value===a)[0],{closable:"",color:"primary","close-icon":"mdi-close-circle-outline","onClick:close":s=>S(a)}),null,16,["onClick:close"])),[[K,l(x).filter(s=>s.value===a).length]])),128))]),_:1}),e(r,null,{default:t(()=>[l(u)&&l(u).length?(n(),_(l(X),{key:0,items:l(u),"items-per-page":l(C),page:l(g),search:l(m)},{default:t(({items:a})=>[e(T,null,{default:t(()=>[(n(!0),w(y,null,b(a,(s,R)=>(n(),_(k,{key:R,cols:"12",sm:"6",md:"4"},{default:t(()=>[e(z,{variant:"outlined"},{default:t(()=>[e(r,{class:"d-flex justify-space-between"},{default:t(()=>[e(B,{color:"Primary"},{default:t(()=>[v(c(s.raw.discount)+"% Off ",1)]),_:2},1024),e(f,{icon:"",variant:"text",size:"small",class:"mt-n1"},{default:t(()=>[e(I,{size:"24",color:"error",icon:"mdi-heart"})]),_:1})]),_:2},1024),e(r,{class:"bg-background"},{default:t(()=>[e(P,{src:s.raw.image,height:"200"},null,8,["src"])]),_:2},1024),e(r,{class:"d-flex mt-n7 pb-0"},{default:t(()=>[e(O),e(f,{icon:"",elevation:"10",color:"success"},{default:t(()=>[e(I,{size:"24",icon:"mdi-cart-plus"})]),_:1})]),_:1}),e(r,{class:"mt-4"},{default:t(()=>[o("div",ae,[o("div",null,[o("h6",le,c(s.raw.name),1),o("span",se,c(s.raw.details[0]),1)])]),o("div",oe,[e(f,{variant:"outlined",color:"primary"},{default:t(()=>[v(" $"+c(s.raw.price),1)]),_:2},1024),o("div",re,[e(I,{size:"24",icon:"mdi-star",color:"warning"}),o("span",ie,c(s.raw.rating),1),o("span",null,"("+c(s.raw.totalReview)+" Reviews)",1)])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:1},8,["items","items-per-page","page","search"])):A("",!0)]),_:1}),e(r,null,{default:t(()=>[e(Y,{modelValue:l(g),"onUpdate:modelValue":i[2]||(i[2]=a=>V(g)?g.value=a:null),length:l(D)},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{ye as default};
