import{y as _,N as x,O as C,o as c,a as D,w as e,b as t,h as o,f as V,r as y,F as h,e as u,V as O,d as l,Q as S,t as s,l as n,x as B,q as v,R as I,E as N,j as P,s as T,k as L,m as M,G as A,H as E}from"./index-5cc15e35.js";import{r as F}from"./swiper-element-bundle-40debcf3.js";import{V as H,a as d}from"./VRow-31de0795.js";import{V as R}from"./VBreadcrumbs-bfc418b8.js";import{V as j}from"./VTextField-354b8d27.js";import{V as q}from"./VDataTable-58631e90.js";import{V as z}from"./VChip-0b64cb0d.js";/* empty css                   */import"./VCounter-5de066e9.js";import"./VField-3bcdd552.js";import"./options-2c517f2f.js";import"./VSelect-f3760063.js";import"./VCheckboxBtn-8be4ef26.js";import"./VTable-3188c983.js";import"./filter-14cd16c3.js";const G={class:"border rounded px-4"},Q={"events-prefix":"swiper-","slides-per-view":"1",navigation:"true",breakpoints:{992:{slidesPerView:4,spaceBetween:30},780:{slidesPerView:3,spaceBetween:30},500:{slidesPerView:2,spaceBetween:30}}},U={class:"text-primary font-weight-semibold"},$={class:"font-weight-semibold"},J={class:"font-weight-semibold"},K={class:"font-weight-semibold"},me={__name:"index",setup(W){const w=[{icon:"mdi-cart-plus",stats:"200.32k",name:"New Orders",color:"primary"},{icon:"mdi-update",stats:"35.21k",color:"warning",name:"Pending Orders"},{icon:"mdi-truck-outline",stats:"647.32k",color:"success",name:"Delivered Orders"},{icon:"mdi-cart-check",color:"info",stats:"215.36k",name:"Shifted Orders"},{icon:"mdi-cancel",stats:"8,649",color:"error",name:"Cancelled Orders"}],k=[{title:"Order Id",key:"orderId"},{title:"Customer",key:"customer"},{title:"Product Name",key:"productName"},{title:"Amount",key:"amount"},{title:"Order Date",key:"orderDate"},{title:"Delivery Date",key:"deliveryDate"},{title:"Payment Method",key:"paymentMethod"},{title:"Delivery Status",key:"deliveryStatus"},{title:"Actions",key:"actions"}],m=_([]);x(()=>{C.get("/orders").then(a=>{m.value=a.data})});const i=_(""),b=a=>a==="Delivered"?"success":a==="Out for Delivery"?"info":a==="Shipped"?"primary":a==="Processing"?"secondary":a==="Pending"?"warning":a==="Cancelled"?"error":"secondary",g=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Order",disabled:!0},{title:"List",disabled:!0}];return F(),(a,p)=>(c(),D(H,null,{default:e(()=>[t(d,{cols:"12"},{default:e(()=>[t(R,{items:g,divider:"-",class:"px-0"})]),_:1}),t(d,{cols:"12"},{default:e(()=>[o("div",G,[o("swiper-container",Q,[(c(),V(h,null,y(w,r=>o("swiper-slide",{key:r.name},[t(u,{"min-width":"200",class:"my-4"},{default:e(()=>[t(P,null,{prepend:e(()=>[t(T,{color:r.color,rounded:""},{default:e(()=>[t(v,{icon:r.icon},null,8,["icon"])]),_:2},1032,["color"])]),default:e(()=>[t(L,null,{default:e(()=>[n(s(r.stats),1)]),_:2},1024),t(M,null,{default:e(()=>[n(s(r.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)])),64))])])]),_:1}),t(d,{cols:"12"},{default:e(()=>[t(u,null,{default:e(()=>[t(O,null,{default:e(()=>[t(j,{modelValue:l(i),"onUpdate:modelValue":p[0]||(p[0]=r=>S(i)?i.value=r:null),"prepend-inner-icon":"mdi-magnify",placeholder:"Search Order"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(d,{cols:"12"},{default:e(()=>[t(u,null,{default:e(()=>[t(l(q),{headers:k,search:l(i),items:l(m),"items-per-page":10,class:"text-no-wrap"},{"item.orderId":e(({item:r})=>[o("span",U," #"+s(r.columns.orderId),1)]),"item.customer":e(({item:r})=>[o("span",$,s(r.columns.customer),1)]),"item.productName":e(({item:r})=>[o("span",J,s(r.columns.productName),1)]),"item.amount":e(({item:r})=>[o("span",K," $"+s(r.columns.amount),1)]),"item.deliveryStatus":e(({item:r})=>[t(z,{size:"small",label:"",color:b(r.columns.deliveryStatus)},{default:e(()=>[n(s(r.columns.deliveryStatus),1)]),_:2},1032,["color"])]),"item.actions":e(()=>[t(B,{icon:"",variant:"text"},{default:e(()=>[t(v,{icon:"mdi-dots-vertical"}),t(I,{activator:"parent"},{default:e(()=>[t(N,null,{default:e(()=>[(c(),V(h,null,y(["View","Delete","Edit"],(r,f)=>t(A,{key:f,value:f},{default:e(()=>[t(E,null,{default:e(()=>[n(s(r),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})]),_:1},8,["search","items"])]),_:1})]),_:1})]),_:1}))}};export{me as default};