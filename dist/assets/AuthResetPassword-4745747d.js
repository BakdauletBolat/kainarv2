import{u as h,y as n,c as w,o as g,f as b,b as e,w as t,e as x,j as y,k,l as d,V as v,d as s,J as P,Q as i,x as m,Z as B,h as u}from"./index-5cc15e35.js";import{a as C,b as R}from"./auth-bg-light-412908ec.js";import{V as c,a as l}from"./VRow-31de0795.js";import{V as T}from"./VForm-8adbab1a.js";import{V as _}from"./VTextField-354b8d27.js";/* empty css                   */import"./VCounter-5de066e9.js";import"./VField-3bcdd552.js";const N="/assets/girl-holding-tablet-device-e4a65636.png";const F={class:"auth-wrapper"},S=u("p",null,"Enter your new password.",-1),j={class:"d-flex align-center justify-center"},z=["src"],$={__name:"AuthResetPassword",setup(A){const f=h(),p=n(),a=n(""),V=w(()=>f.current.value.dark?C:R);return(E,o)=>(g(),b("div",F,[e(x,{"max-width":"900","min-width":"350"},{default:t(()=>[e(c,{"no-gutters":""},{default:t(()=>[e(l,{md:"6",cols:"12",class:"pa-sm-8 pa-4"},{default:t(()=>[e(y,null,{default:t(()=>[e(k,null,{default:t(()=>[d("Reset Password")]),_:1})]),_:1}),e(v,null,{default:t(()=>[S,e(s(T),{ref_key:"resetPasswordForm",ref:p,onSubmit:P(()=>{},["prevent"])},{default:t(()=>[e(c,null,{default:t(()=>[e(l,{cols:"12"},{default:t(()=>[e(_,{modelValue:s(a),"onUpdate:modelValue":o[0]||(o[0]=r=>i(a)?a.value=r:null),label:"Password"},null,8,["modelValue"])]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(_,{modelValue:s(a),"onUpdate:modelValue":o[1]||(o[1]=r=>i(a)?a.value=r:null),label:"New Password"},null,8,["modelValue"])]),_:1}),e(l,{cols:"12"},{default:t(()=>[e(m,{block:"",type:"submit",color:"primary",class:"mb-3"},{default:t(()=>[d(" Set New Password ")]),_:1}),e(m,{block:"",variant:"text",color:"secondary",size:"small","prepend-icon":"mdi-chevron-double-left",to:{name:"auth-login"}},{default:t(()=>[d(" Back to login ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}),e(l,{cols:"6",class:"pa-8 text-center border-s d-none d-md-block",style:B(`background-image:url(${s(V)});`)},{default:t(()=>[u("div",j,[u("img",{width:"280",src:s(N)},null,8,z)])]),_:1},8,["style"])]),_:1})]),_:1})]))}};export{$ as default};