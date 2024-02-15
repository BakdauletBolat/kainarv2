import{y as u,N as z,o as v,a as h,w as l,O as y,b as a,e as x,j as B,x as d,d as s,l as m,h as p,Q as C,s as D,i as F,f as I,t as _,q as U,a2 as k,V as T,J as $,a8 as M,a9 as g}from"./index-5cc15e35.js";import{V as N,a as i}from"./VRow-31de0795.js";import{V as P}from"./VBreadcrumbs-bfc418b8.js";import{V as c}from"./VTextField-354b8d27.js";import{V as j}from"./VDataTable-58631e90.js";import{V as G}from"./VChip-0b64cb0d.js";import{V as H}from"./VDialog-a3f005aa.js";import{V as J}from"./VForm-8adbab1a.js";/* empty css                   */import"./VCounter-5de066e9.js";import"./VField-3bcdd552.js";import"./options-2c517f2f.js";import"./VSelect-f3760063.js";import"./VCheckboxBtn-8be4ef26.js";import"./VTable-3188c983.js";import"./filter-14cd16c3.js";const L={style:{width:"10rem"}},O={key:1},Q={class:"text-high-emphasis font-weight-medium"},Y={class:"text-capitalize text-xs"},fe={__name:"index",setup(K){const f=u(""),R=[{title:"Name",key:"name"},{title:"Email",key:"email"},{title:"Company",key:"company"},{title:"Role",key:"role"},{title:"Status",key:"status"},{title:"Actions",key:"actions"}],b=u([]),w=u(),o=u({name:"",email:"",company:"",role:"",status:"inactive"}),V=()=>{y.get("/users").then(r=>{b.value=r.data})};z(V);const S=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"User",disabled:!0},{title:"List",disabled:!0}],A=r=>r==="active"?"success":r==="inactive"?"error":"warning",n=u(!1),E=r=>{y.delete(`/user/delete/${r}`).then(t=>{t.status===204&&V()}).catch(t=>{console.log(t)})},q=async()=>{var t;const r=await((t=w.value)==null?void 0:t.validate());if(r!=null&&r.valid)try{const e=await y.post("/user/add",{user:o.value});n.value=!1,e.status===201&&V()}catch(e){console.error(e)}};return(r,t)=>(v(),h(N,null,{default:l(()=>[a(i,{cols:"12"},{default:l(()=>[a(P,{items:S,divider:"-",class:"px-0"})]),_:1}),a(i,{cols:"12"},{default:l(()=>[a(x,null,{default:l(()=>[a(B,null,{prepend:l(()=>[a(d,{color:"primary",onClick:t[0]||(t[0]=e=>n.value=!s(n))},{default:l(()=>[m(" Add New User ")]),_:1})]),append:l(()=>[p("div",L,[a(c,{modelValue:s(f),"onUpdate:modelValue":t[1]||(t[1]=e=>C(f)?f.value=e:null),"prepend-inner-icon":"mdi-magnify",placeholder:"Search..."},null,8,["modelValue"])])]),_:1}),a(s(j),{search:s(f),headers:R,items:s(b),"show-select":"",class:"table-borderless text-medium-emphasis rounded-0 text-no-wrap"},{"item.name":l(({item:e})=>[p("div",null,[a(D,{size:"32",color:"primary",image:e.raw.avatar,class:"me-2"},{default:l(()=>[e.raw.avatar?(v(),h(F,{key:0,src:e.raw.avatar},null,8,["src"])):(v(),I("span",O,_(e.raw.name.charAt(0).toUpperCase()),1))]),_:2},1032,["image"]),p("span",Q,_(e.raw.name),1)])]),"item.status":l(({item:e})=>[a(G,{label:"",density:"comfortable",color:A(e.raw.status)},{default:l(()=>[p("span",Y,_(e.raw.status),1)]),_:2},1032,["color"])]),"item.actions":l(({item:e})=>[p("div",null,[a(d,{icon:"",variant:"plain",size:"x-small",to:{name:"apps-user-profile",params:{tab:"profile"}}},{default:l(()=>[a(U,{size:"20",icon:"mdi-eye-outline"}),a(k,{activator:"parent"},{default:l(()=>[m(" View ")]),_:1})]),_:1}),a(d,{icon:"",variant:"plain",size:"x-small",onClick:W=>E(e.raw.id)},{default:l(()=>[a(U,{size:"20",icon:"mdi-delete-outline"}),a(k,{activator:"parent"},{default:l(()=>[m(" Delete ")]),_:1})]),_:2},1032,["onClick"])])]),_:1},8,["search","items"])]),_:1}),a(H,{modelValue:s(n),"onUpdate:modelValue":t[8]||(t[8]=e=>C(n)?n.value=e:null),width:"500"},{default:l(()=>[a(x,{title:"Add New User"},{default:l(()=>[a(T,null,{default:l(()=>[a(s(J),{ref_key:"refUserForm",ref:w,onSubmit:$(q,["prevent"])},{default:l(()=>[a(N,null,{default:l(()=>[a(i,{cols:"12"},{default:l(()=>[a(c,{modelValue:s(o).name,"onUpdate:modelValue":t[2]||(t[2]=e=>s(o).name=e),label:"Name",rules:[e=>!!e||"Name is required"],placeholder:"Please Enter Your Full Name"},null,8,["modelValue","rules"])]),_:1}),a(i,{cols:"12"},{default:l(()=>[a(c,{modelValue:s(o).email,"onUpdate:modelValue":t[3]||(t[3]=e=>s(o).email=e),label:"Email",rules:[e=>!!e||"Email is required"],placeholder:"Please Enter Email"},null,8,["modelValue","rules"])]),_:1}),a(i,{cols:"12"},{default:l(()=>[a(c,{modelValue:s(o).company,"onUpdate:modelValue":t[4]||(t[4]=e=>s(o).company=e),label:"Company",rules:[e=>!!e||"Company is required"],placeholder:"Company"},null,8,["modelValue","rules"])]),_:1}),a(i,{cols:"12"},{default:l(()=>[a(c,{modelValue:s(o).role,"onUpdate:modelValue":t[5]||(t[5]=e=>s(o).role=e),label:"Role",rules:[e=>!!e||"Role is required"],placeholder:"Role"},null,8,["modelValue","rules"])]),_:1}),a(i,{cols:"12"},{default:l(()=>[a(M,{modelValue:s(o).status,"onUpdate:modelValue":t[6]||(t[6]=e=>s(o).status=e),inline:"",label:"Status","hide-details":"auto",rules:[e=>!!e||"Status is required"]},{default:l(()=>[a(g,{value:"active",color:"success",label:"Active"}),a(g,{color:"error",value:"inactive",label:"Inactive"})]),_:1},8,["modelValue","rules"])]),_:1}),a(i,{cols:"12"},{default:l(()=>[a(d,{color:"success",variant:"tonal",type:"submit",class:"me-4"},{default:l(()=>[m(" Submit ")]),_:1}),a(d,{color:"secondary",variant:"tonal",type:"reset",onClick:t[7]||(t[7]=e=>n.value=!1)},{default:l(()=>[m(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}};export{fe as default};
