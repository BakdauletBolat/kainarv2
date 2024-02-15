import{y as u,u as L,c as T,W as B,X as D,Y as N,o as E,f as I,b as e,w as t,e as q,j as F,l as i,k as O,m as A,V as P,d as s,J as $,C as y,D as f,K as g,h as a,x as r,Z as x,t as j,n as U,A as V,q as p,O as J}from"./index-5cc15e35.js";import{a as W,b as K}from"./auth-bg-light-412908ec.js";import{a as M}from"./working-desk-with-laptop-c8825b61.js";import{V as X,a as w}from"./VRow-31de0795.js";import{V as Y}from"./VAlert-7002bcd6.js";import{V as Z}from"./VForm-8adbab1a.js";import{V as k}from"./VTextField-354b8d27.js";/* empty css                   */import"./VCounter-5de066e9.js";import"./VField-3bcdd552.js";const G={class:"auth-wrapper"},H=a("p",{class:"mb-1"},[a("strong",null,"Email:"),i(),a("span",null,"admin@admin.com")],-1),Q=a("p",{class:"mb-0"},[a("strong",null,"Password:"),i(),a("span",null,"admin")],-1),ee={class:"text-caption"},te={class:"text-center mb-6"},ae={class:"d-flex align-center my-6"},se=a("span",{class:"mx-3"},"OR",-1),oe={class:"d-flex justify-center gap-4"},le={class:"d-flex align-center justify-center"},ie=["src"],ne=a("h6",{class:"text-body-1 font-weight-semibold mb-3"}," Not Register yet? ",-1),re=a("p",{class:"text-body-2"}," Lost access to OneAuth? Worry not. Set up passphrase and backup number to recover OneAuth easily. ",-1),ye={__name:"Login",setup(de){const v=u(),c=u(!0),d=u(!0),C=L(),n=u({email:"admin@admin.com",password:"admin"}),b=u({email:"",password:""}),S=T(()=>C.current.value.dark?W:K),z=B(),h=D(),R=()=>{var _;(_=v.value)==null||_.validate().then(o=>{o.valid&&J.get("/login",{params:{email:n.value.email,password:n.value.password}}).then(m=>{localStorage.setItem("userData",JSON.stringify(m.data)),z.replace(h.query.to?String(h.query.to):"/")}).catch(m=>{b.value.email=m.response.data.email,console.log(m.response.data.email)})})};return(_,o)=>{const m=N("RouterLink");return E(),I("div",G,[e(q,{"max-width":"900","min-width":"350"},{default:t(()=>[e(X,{"no-gutters":""},{default:t(()=>[e(w,{md:"6",cols:"12",class:"border-e pa-sm-8 pa-4",style:{height:"29.5rem"}},{default:t(()=>[e(F,null,{append:t(()=>[e(m,{to:{name:"register"},class:"text-body-2 text-medium-emphasis d-block d-md-none"},{default:t(()=>[i(" Register ")]),_:1})]),default:t(()=>[e(O,null,{default:t(()=>[i("Sign in")]),_:1}),e(A,null,{default:t(()=>[i("To access template")]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(Y,{color:"info",variant:"tonal",class:"mb-6"},{default:t(()=>[H,Q]),_:1}),e(s(Z),{ref_key:"loginForm",ref:v,onSubmit:$(R,["prevent"])},{default:t(()=>[e(y,null,{default:t(()=>[f(a("div",null,[e(k,{modelValue:s(n).email,"onUpdate:modelValue":o[0]||(o[0]=l=>s(n).email=l),label:"Email",rules:[l=>!!l||"Email is required"],class:"mb-6"},null,8,["modelValue","rules"]),e(r,{block:"",color:"primary",onClick:o[1]||(o[1]=l=>d.value=!s(d))},{default:t(()=>[i(" Next ")]),_:1})],512),[[g,s(d)]])]),_:1}),e(y,null,{default:t(()=>[f(a("div",null,[a("div",{class:"d-flex align-center border rounded py-1 px-2 mb-6",style:x(s(n).email?"":"border-color:rgb(var(--v-theme-error)) !important")},[a("span",ee,j(s(n).email),1),e(U),e(r,{size:"small",color:"primary",variant:"text",onClick:o[2]||(o[2]=l=>d.value=!s(d))},{default:t(()=>[i(" change ")]),_:1})],4),e(k,{modelValue:s(n).password,"onUpdate:modelValue":o[3]||(o[3]=l=>s(n).password=l),type:s(c)?"password":"text",label:"Password",rules:[l=>!!l||"User Name is required"],"append-inner-icon":s(c)?"mdi-eye-off-outline":"mdi-eye-outline","error-messages":s(b).email,class:"mb-6","onClick:appendInner":o[4]||(o[4]=l=>c.value=!s(c))},null,8,["modelValue","type","rules","append-inner-icon","error-messages"]),a("div",te,[e(m,{to:{name:"forgot-password"}},{default:t(()=>[i(" Forgot Password? ")]),_:1})]),e(r,{block:"",type:"submit",color:"primary"},{default:t(()=>[i(" Login ")]),_:1})],512),[[g,!s(d)]])]),_:1})]),_:1},8,["onSubmit"]),f(a("div",null,[a("div",ae,[e(V),se,e(V)]),a("div",oe,[e(r,{icon:"",variant:"text",color:"primary",size:"small"},{default:t(()=>[e(p,{size:"24",icon:"mdi-facebook"})]),_:1}),e(r,{icon:"",variant:"text",color:"info",size:"small"},{default:t(()=>[e(p,{size:"24",icon:"mdi-twitter"})]),_:1}),e(r,{icon:"",variant:"text",size:"small"},{default:t(()=>[e(p,{size:"24",icon:"mdi-github"})]),_:1}),e(r,{icon:"",variant:"text",color:"error",size:"small"},{default:t(()=>[e(p,{size:"24",icon:"mdi-google"})]),_:1})])],512),[[g,s(d)]])]),_:1})]),_:1}),e(w,{cols:"6",class:"pa-8 text-center d-none d-md-block",style:x(`background-image:url(${s(S)});`)},{default:t(()=>[a("div",le,[a("img",{width:"280",src:s(M)},null,8,ie)]),ne,re,e(r,{to:{name:"register"},variant:"outlined",color:"primary","append-icon":"mdi-account-plus-outline"},{default:t(()=>[i(" Register ")]),_:1})]),_:1},8,["style"])]),_:1})]),_:1})])}}};export{ye as default};