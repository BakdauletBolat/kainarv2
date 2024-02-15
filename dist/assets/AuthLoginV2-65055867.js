import{y as c,u as b,a5 as y,c as w,Y as k,o as h,a as C,w as t,b as e,e as z,j as L,l as i,k as T,m as B,V as F,d as a,J as R,x as n,h as r,A as p,q as m}from"./index-5cc15e35.js";import{V as _,a as l}from"./VRow-31de0795.js";import{V as j}from"./VForm-8adbab1a.js";import{V as g}from"./VTextField-354b8d27.js";/* empty css                   */import"./VCounter-5de066e9.js";import"./VField-3bcdd552.js";const N="/assets/login-cover-dark-840f4434.svg",S="/assets/login-cover-bb921a44.svg";const q={class:"d-flex align-center my-6"},A=r("span",{class:"mx-3"},"OR",-1),D={class:"d-flex justify-center gap-4"},I=["src"],H={__name:"AuthLoginV2",setup(P){const d=c({email:"",password:""}),{global:V}=b();y.isBoxLayout.value=!1;const u=c(!1),x=c(),v=w(()=>V.current.value.dark?N:S);return(U,o)=>{const f=k("RouterLink");return h(),C(_,{"no-gutters":"",class:"auth-wrapper-v2"},{default:t(()=>[e(l,{cols:"12",md:"4",class:"d-flex flex-column bg-surface justify-center align-center"},{default:t(()=>[e(z,{flat:"","max-width":"400"},{default:t(()=>[e(L,null,{append:t(()=>[e(f,{to:{name:"auth-register"},class:"text-body-2 text-medium-emphasis d-block d-md-none"},{default:t(()=>[i(" Register ")]),_:1})]),default:t(()=>[e(T,null,{default:t(()=>[i("Sign in")]),_:1}),e(B,null,{default:t(()=>[i("To access template")]),_:1})]),_:1}),e(F,null,{default:t(()=>[e(a(j),{ref_key:"loginForm",ref:x,onSubmit:R(()=>{},["prevent"])},{default:t(()=>[e(_,null,{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(g,{modelValue:a(d).email,"onUpdate:modelValue":o[0]||(o[0]=s=>a(d).email=s),label:"Email",rules:[s=>!!s||"Email is required"]},null,8,["modelValue","rules"])]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(g,{modelValue:a(d).password,"onUpdate:modelValue":o[1]||(o[1]=s=>a(d).password=s),type:a(u)?"password":"text",label:"Password",rules:[s=>!!s||"User Name is required"],"append-inner-icon":a(u)?"mdi-eye-off-outline":"mdi-eye-outline","onClick:appendInner":o[2]||(o[2]=s=>u.value=!a(u))},null,8,["modelValue","type","rules","append-inner-icon"])]),_:1}),e(l,{cols:"12",class:"text-center"},{default:t(()=>[e(f,{to:{name:"auth-forgot-password"}},{default:t(()=>[i(" Forgot Password? ")]),_:1})]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(n,{block:"",type:"submit",color:"primary"},{default:t(()=>[i(" Login ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]),r("div",null,[r("div",q,[e(p),A,e(p)]),r("div",D,[e(n,{icon:"",variant:"text",color:"primary",size:"small"},{default:t(()=>[e(m,{size:"24",icon:"mdi-facebook"})]),_:1}),e(n,{icon:"",variant:"text",color:"info",size:"small"},{default:t(()=>[e(m,{size:"24",icon:"mdi-twitter"})]),_:1}),e(n,{icon:"",variant:"text",size:"small"},{default:t(()=>[e(m,{size:"24",icon:"mdi-github"})]),_:1}),e(n,{icon:"",variant:"text",color:"error",size:"small"},{default:t(()=>[e(m,{size:"24",icon:"mdi-google"})]),_:1})])])]),_:1})]),_:1})]),_:1}),e(l,{md:"8",class:"d-none d-md-flex align-center justify-center"},{default:t(()=>[r("img",{src:a(v),width:"600"},null,8,I)]),_:1})]),_:1})}}};export{H as default};