import{o,a as f,w as a,b as e,e as w,j as Q,s as x,x as u,l as d,t as c,k as Y,m as Z,q as m,h as i,V as S,f as v,F as g,r as _,y as D,i as ee,a6 as $,A as q,B as ae,d as p,C as le,D as se,P as re,E as L,G as J,H as ce,I as ue,J as de,K as me,aa as P,ab as te,S as y,z as C,T as E,U as T,ac as pe,X as fe,a3 as ve,Q as F,ad as N,ae as U,af as I,ag as W,ah as R,ai as j,aj as K,ak as H,al as X,am as ge,an as _e,ao as he}from"./index-5cc15e35.js";import{a as k,V as B}from"./VRow-31de0795.js";import{p as we}from"./pineapple-30d50413.js";import{u as be,s as ye}from"./umbrella-1207aa4d.js";import{V as ke}from"./VForm-8adbab1a.js";import{V as ie}from"./VTextarea-43e68b5a.js";import{V as O}from"./VChip-0b64cb0d.js";import{V as Se,a as xe,b as Be,c as Ve}from"./VExpansionPanel-2c93a23d.js";import{V as Ae,a as A}from"./VWindowItem-e2d2e955.js";import{V as De}from"./VBreadcrumbs-bfc418b8.js";import{V as Pe,a as Ce}from"./VTabs-f93555dc.js";/* empty css                   */import"./VCounter-5de066e9.js";import"./VField-3bcdd552.js";const G="/assets/avatar-15-c975da27.png",Ee="/assets/cookies-7df03b7e.jpg",Me={__name:"Follower",props:{name:{type:String,required:!0},avatar:{type:String,required:!0},location:{type:String,required:!0},followBack:{type:Boolean,required:!0}},emits:["update:followBack"],setup(h,{emit:n}){const s=h;return(b,l)=>(o(),f(B,null,{default:a(()=>[e(k,{cols:"12"},{default:a(()=>[e(w,null,{default:a(()=>[e(Q,null,{prepend:a(()=>[e(x,{image:s.avatar},null,8,["image"])]),append:a(()=>[e(u,{size:"small",variant:"tonal",color:s.followBack?"success":"primary",onClick:l[0]||(l[0]=t=>n("update:followBack",!s.followBack))},{default:a(()=>[d(c(s.followBack?"Following":"Follow"),1)]),_:1},8,["color"])]),default:a(()=>[e(Y,{class:"text-base"},{default:a(()=>[d(c(s.name),1)]),_:1}),e(Z,{class:"d-flex align-center gap-1"},{default:a(()=>[e(m,{icon:"mdi-map-marker-outline"}),i("span",null,c(s.location),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},qe={class:"text-lg font-weight-regular mb-1"},Te={class:"mt-4"},Le={__name:"Friend",props:{avatar:{type:String,required:!0},name:{type:String,required:!0},designation:{type:String,required:!0}},setup(h){const n=h,s=[{icon:"mdi-facebook",color:"blue"},{icon:"mdi-instagram",color:"pink"},{icon:"mdi-linkedin",color:"blue"},{icon:"mdi-twitter",color:"blue"}];return(b,l)=>(o(),f(w,null,{default:a(()=>[e(S,{class:"text-center pa-8"},{default:a(()=>[e(x,{size:"80",image:n.avatar,class:"mb-4"},null,8,["image"]),i("h6",qe,c(n.name),1),i("span",null,c(n.designation),1),i("div",Te,[(o(),v(g,null,_(s,t=>e(u,{key:t.icon,icon:"",size:"36",color:t.color,variant:"text"},{default:a(()=>[e(m,{size:"20",icon:t.icon},null,8,["icon"])]),_:2},1032,["color"])),64))])]),_:1})]),_:1}))}};const Je={class:"me-1"},ze=i("span",null,"Comments",-1),$e={__name:"Post",props:{createdBy:{type:Object,required:!0},createdAt:{type:String,required:!0},content:{type:String,required:!0},image:{type:String,required:!1},likes:{type:Number,required:!0},comments:{type:Array,required:!0}},setup(h){const n=h,s=D(!1);return(b,l)=>(o(),f(w,null,{default:a(()=>[n.image?(o(),f(ee,{key:0,height:"200",cover:"","expand-on-click":"",src:n.image},null,8,["src"])):$("",!0),e(Q,null,{prepend:a(()=>[e(x,{image:n.createdBy.avatar},null,8,["image"])]),append:a(()=>[e(u,{icon:"",size:"small",variant:"text"},{default:a(()=>[e(m,{size:"24",icon:"mdi-dots-vertical"})]),_:1})]),default:a(()=>[e(Y,{class:"text-base"},{default:a(()=>[d(c(n.createdBy.name),1)]),_:1}),e(Z,null,{default:a(()=>[d(c(n.createdAt),1)]),_:1})]),_:1}),n.content?(o(),f(S,{key:1},{default:a(()=>[d(c(n.content),1)]),_:1})):$("",!0),e(q),e(ae,{class:"justify-space-between"},{default:a(()=>[e(u,{color:"error"},{default:a(()=>[e(m,{start:"",icon:"mdi-heart"}),i("span",null,c(n.likes),1)]),_:1}),e(u,{"append-icon":"mdi-chevron-down",onClick:l[0]||(l[0]=t=>s.value=!p(s))},{default:a(()=>[i("span",Je,c(n.comments.length),1),ze]),_:1})]),_:1}),e(le,null,{default:a(()=>[se(e(w,{subtitle:"Comments",class:"v-card--reveal",style:{height:"100%"}},{append:a(()=>[i("div",null,[e(u,{icon:"",variant:"text",size:"x-small",onClick:l[1]||(l[1]=t=>s.value=!1)},{default:a(()=>[e(m,{size:"20",icon:"mdi-close"})]),_:1})])]),default:a(()=>[e(S,{class:"comment-wrapper"},{default:a(()=>[e(p(re),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100 mb-4"},{default:a(()=>[e(L,{class:"comment-list"},{default:a(()=>[(o(!0),v(g,null,_(n.comments,t=>(o(),f(J,{key:t.createdAt},{prepend:a(()=>[e(x,{size:"36",image:t.createdBy.avatar},null,8,["image"])]),append:a(()=>[e(u,{icon:"",size:"x-small",variant:"text"},{default:a(()=>[e(m,{size:"24",icon:"mdi-dots-vertical"})]),_:1})]),default:a(()=>[e(ce,null,{default:a(()=>[d(c(t.createdBy.name),1)]),_:2},1024),e(ue,null,{default:a(()=>[d(c(t.createdAt),1)]),_:2},1024),i("p",null,c(t.content),1)]),_:2},1024))),128))]),_:1})]),_:1}),e(ke,{onSubmit:de(()=>{},["prevent"])},{default:a(()=>[e(ie,{rows:"1","hide-details":"auto",placeholder:"Write a comment..."}),e(u,{block:"",type:"submit",color:"primary",variant:"tonal",class:"mt-2"},{default:a(()=>[d(" Comment ")]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},512),[[me,p(s)]])]),_:1})]),_:1}))}},Fe=i("div",null,[i("h5",{class:"text-h5 font-weight-semibold"}," 94,049 "),i("span",null,"Follower")],-1),Ne=i("div",null,[i("h5",{class:"text-h5 font-weight-semibold"}," 12,584 "),i("span",null,"Following")],-1),Ue=i("p",null,"Software engineer, coffee lover, and occasional writer.",-1),Ie={class:"d-flex align-center flex-wrap gap-2 mt-4"},We=i("span",null,"Live video",-1),Re=i("span",null,"Photo/video",-1),je=i("span",null,"Life event",-1),Ke={__name:"Profile",setup(h){const n=[{icon:"mdi-briefcase-variant-outline",title:"MNO Technology as a Software Developer"},{icon:"mdi-school-outline",title:"Studied at University of Michigan, Ann Arbor"},{icon:"mdi-home-outline",title:"Lives in 123 Main Street, Anywhere, USA"},{icon:"mdi-map-marker-outline",title:"From London, United Kingdom"},{icon:"mdi-heart-outline",title:"Married"},{icon:"mdi-clock-outline",title:"Joined on December 2011"}],s=[{createdBy:{name:"John Doe",avatar:y},createdAt:"2 hours ago",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nunc odio lacinia nunc, eget aliquam massa nisl eget dolor. Sed euismod, nisl vel tincidunt luctus, nunc odio lacinia nunc, eget aliquam massa nisl eget dolor.",image:be,likes:12,comments:[{createdBy:{name:"John Doe",avatar:y},createdAt:"2 hours ago",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "},{createdBy:{name:"John Doe",avatar:y},createdAt:"2 hours ago",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}]},{createdBy:{name:"Jane Smith",avatar:C},createdAt:"1 day ago",content:"Nulla eget sem vitae eros pharetra viverra. Sed aliquet suscipit ipsum, in vehicula felis rhoncus vitae. Etiam et turpis non magna interdum varius.",image:we,likes:28,comments:[{createdBy:{name:"Jane Smith",avatar:C},createdAt:"1 day ago",content:"Nulla eget sem vitae eros pharetra viverra. Sed aliquet suscipit ipsum."},{createdBy:{name:"John Doe",avatar:y},createdAt:"1 day ago",content:"Maecenas tincidunt consequat ante, eu dictum nunc luctus ut."}]},{createdBy:{name:"Alice Lee",avatar:E},createdAt:"2 weeks ago",content:"Vestibulum cursus leo quis malesuada pharetra. Donec eget mauris sed sapien facilisis mollis. Nunc id lorem hendrerit, hendrerit odio a, rhoncus risus. ",image:ye,likes:64,comments:[{createdBy:{name:"Bob Johnson",avatar:T},createdAt:"2 weeks ago",content:"Vivamus sem augue, blandit eget consequat sed, iaculis at arcu."},{createdBy:{name:"Alice Lee",avatar:E},createdAt:"2 weeks ago",content:"Vestibulum cursus leo quis malesuada pharetra."},{createdBy:{name:"John Doe",avatar:y},createdAt:"2 weeks ago",content:"Praesent sodales ante vitae tortor fermentum, vitae tempus quam faucibus."}]}];return(b,l)=>(o(),f(B,null,{default:a(()=>[e(k,{cols:"12",md:"4"},{default:a(()=>[e(w,{class:"mb-6"},{default:a(()=>[e(S,{class:"d-flex align-center justify-space-between"},{default:a(()=>[Fe,e(q,{vertical:""}),Ne]),_:1})]),_:1}),e(w,{title:"Intro"},{default:a(()=>[e(S,null,{default:a(()=>[Ue,e(u,{block:"",variant:"tonal",class:"mb-2"},{default:a(()=>[d(" Edit Bio ")]),_:1}),e(L,{density:"compact"},{default:a(()=>[(o(),v(g,null,_(n,t=>e(J,{key:t.title,class:"px-0","prepend-icon":t.icon,title:t.title},null,8,["prepend-icon","title"])),64))]),_:1}),e(u,{block:"",variant:"tonal"},{default:a(()=>[d(" Edit details ")]),_:1}),i("div",Ie,[e(O,{"prepend-icon":"mdi-book-open-page-variant-outline",variant:"outlined",color:"primary"},{default:a(()=>[d(" Reading Book ")]),_:1}),e(O,{"prepend-icon":"mdi-airplane",variant:"outlined",color:"error"},{default:a(()=>[d(" Adaptive hunting ")]),_:1})])]),_:1})]),_:1})]),_:1}),e(k,{cols:"12",md:"8"},{default:a(()=>[e(w,null,{default:a(()=>[e(S,{class:"d-flex align-start gap-4"},{default:a(()=>[e(x,{size:"48",image:p(P)},null,8,["image"]),e(ie,{rows:"2","auto-grow":"","hide-details":"auto",placeholder:"What's on your mind?"})]),_:1}),e(q),e(ae,{class:"justify-space-between flex-wrap"},{default:a(()=>[e(u,null,{default:a(()=>[e(m,{start:"",size:"28",icon:"mdi-video-outline",color:"error"}),We]),_:1}),e(u,null,{default:a(()=>[e(m,{start:"",size:"28",icon:"mdi-image",color:"success"}),Re]),_:1}),e(u,null,{default:a(()=>[e(m,{start:"",size:"28",icon:"mdi-flag-checkered",color:"info"}),je]),_:1})]),_:1})]),_:1}),(o(),v(g,null,_(s,t=>e($e,te({key:t.likes},t,{class:"mt-6"}),null,16)),64))]),_:1})]),_:1}))}},He={class:"text-base font-weight-medium mb-2"},Xe={class:"text-sm text-medium-emphasis"},Oe={__name:"Settings",setup(h){const n=[{title:"Comments",subtitle:"Push, Emails, SMS",icon:"mdi-comment-outline",description:"These are notifications for comments on your posts and replies to your comments.",notifications:[{title:"Push",icon:"mdi-cellphone-message",isActive:!0},{title:"Email",icon:"mdi-email-outline",isActive:!0},{title:"SMS",icon:"mdi-message-text-outline",isActive:!1}]},{title:"Tags",subtitle:"Push, Emails, SMS",icon:"mdi-tag-outline",description:"These are notifications for when you are tagged in a post or comment.",notifications:[{title:"Push",icon:"mdi-cellphone-message",isActive:!0},{title:"Email",icon:"mdi-email-outline",isActive:!1},{title:"SMS",icon:"mdi-message-text-outline",isActive:!1}]},{title:"Likes",subtitle:"Push, Emails",icon:"mdi-heart-outline",description:"These are notifications for when someone likes your post or comment.",notifications:[{title:"Push",icon:"mdi-cellphone-message",isActive:!0},{title:"Email",icon:"mdi-email-outline",isActive:!0}]},{title:"Followers",subtitle:"Push, Emails",icon:"mdi-account-plus-outline",description:"These are notifications for when someone follows you or accepts your follow request.",notifications:[{title:"Push",icon:"mdi-cellphone-message",isActive:!0},{title:"Email",icon:"mdi-email-outline",isActive:!0}]},{title:"Mentions",subtitle:"Push, Emails, SMS",icon:"mdi-at",description:"These are notifications for when someone mentions you in a post or comment.",notifications:[{title:"Push",icon:"mdi-cellphone-message",isActive:!0},{title:"Email",icon:"mdi-email-outline",isActive:!1},{title:"SMS",icon:"mdi-message-text-outline",isActive:!1}]},{title:"Direct Messages",subtitle:"Push, Emails, SMS",icon:"mdi-message-outline",description:"These are notifications for when you receive a direct message from someone.",notifications:[{title:"Push",icon:"mdi-cellphone-message",isActive:!0},{title:"Email",icon:"mdi-email-outline",isActive:!1},{title:"SMS",icon:"mdi-message-text-outline",isActive:!1}]}];return(s,b)=>(o(),f(Ve,null,{default:a(()=>[(o(),v(g,null,_(n,l=>e(Se,{key:l.title},{default:a(()=>[e(xe,{class:"align-start gap-4"},{default:a(()=>[e(m,{size:"24",icon:l.icon},null,8,["icon"]),i("div",null,[i("p",He,c(l.title),1),i("span",Xe,c(l.subtitle),1)])]),_:2},1024),e(Be,null,{default:a(()=>[i("p",null,c(l.description),1),e(L,null,{default:a(()=>[(o(!0),v(g,null,_(l.notifications,t=>(o(),f(J,{key:t.title,"prepend-icon":t.icon,title:t.title},{append:a(()=>[e(pe,{"hide-details":"auto","model-value":t.isActive,density:"compact"},null,8,["model-value"])]),_:2},1032,["prepend-icon","title"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1}))}};const Ge={class:"d-flex align-center gap-4 mb-3"},Qe=i("div",{class:"text-white"},[i("h6",{class:"text-h6 font-weight-semibold"}," John Doe "),i("p",{class:"mb-0"}," Software Engineer ")],-1),Ye=i("h5",{class:"text-h5 mb-6"}," Followers ",-1),Ze=i("h5",{class:"text-h5 mb-6"}," Notification ",-1),fa={__name:"index",setup(h){const n=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"User",disabled:!0},{title:"Profile",disabled:!0}],s=[{name:"Profile",value:"profile",icon:"mdi-account-outline"},{name:"Followers",value:"followers",icon:"mdi-heart-outline"},{name:"Friends",value:"friends",icon:"mdi-account-group-outline"},{name:"Settings",value:"settings",icon:"mdi-cog-outline"}],b=fe(),l=D(b.params.tab),t=D(l.value||"profile"),ne=D([{avatar:y,name:"John Doe",location:"New York",followBack:!0},{avatar:C,name:"Jane Smith",location:"Los Angeles",followBack:!1},{avatar:E,name:"Tom Johnson",location:"Chicago",followBack:!0},{avatar:T,name:"Samantha Lee",location:"Houston",followBack:!0},{avatar:N,name:"Peter Kim",location:"San Francisco",followBack:!1},{avatar:P,name:"Lisa Chen",location:"Toronto",followBack:!0},{avatar:U,name:"Michael Wong",location:"Vancouver",followBack:!0},{avatar:I,name:"Karen Johnson",location:"Miami",followBack:!1},{avatar:W,name:"David Lee",location:"Dallas",followBack:!0},{avatar:R,name:"Emily Davis",location:"Boston",followBack:!1},{avatar:j,name:"William Chen",location:"Seattle",followBack:!0},{avatar:K,name:"Sarah Kim",location:"Montreal",followBack:!1},{avatar:H,name:"Matthew Wong",location:"Calgary",followBack:!0},{avatar:X,name:"Jasmine Lee",location:"Austin",followBack:!0},{avatar:G,name:"Daniel Kim",location:"Washington, D.C.",followBack:!1}]),oe=[{avatar:y,name:"John Doe",designation:"Software Engineer"},{avatar:C,name:"Jane Smith",designation:"Frontend Developer"},{avatar:E,name:"Robert Johnson",designation:"Backend Developer"},{avatar:T,name:"Jessica Lee",designation:"UI/UX Designer"},{avatar:N,name:"William Brown",designation:"Data Scientist"},{avatar:P,name:"Emily Davis",designation:"Marketing Manager"},{avatar:U,name:"Michael Wilson",designation:"Product Manager"},{avatar:I,name:"Stephanie Lee",designation:"HR Manager"},{avatar:W,name:"David Chen",designation:"Database Administrator"},{avatar:R,name:"Alexandra Kim",designation:"Mobile Developer"},{avatar:j,name:"Brian Thompson",designation:"Software Engineer"},{avatar:K,name:"Ashley Garcia",designation:"Fullstack Developer"},{avatar:H,name:"Christopher Robinson",designation:"DevOps Engineer"},{avatar:X,name:"Melanie Nguyen",designation:"UI/UX Designer"},{avatar:G,name:"Joshua Patel",designation:"Data Analyst"}];return ve(()=>b.params.tab,M=>{l.value=M,t.value=M}),(M,V)=>(o(),v("div",null,[e(B,{class:"mb-4"},{default:a(()=>[e(k,{cols:"12"},{default:a(()=>[e(De,{items:n,divider:"-",class:"px-0"})]),_:1}),e(k,{cols:"12"},{default:a(()=>[e(w,{rounded:"lg"},{default:a(()=>[e(ee,{height:"210",cover:"",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:p(Ee),style:{"z-index":"-1"}},null,8,["src"]),e(S,{class:"heading-content pb-0"},{default:a(()=>[i("div",Ge,[e(x,{size:"100",image:p(P)},null,8,["image"]),Qe]),e(Pe,{modelValue:p(t),"onUpdate:modelValue":V[0]||(V[0]=r=>F(t)?t.value=r:null),"align-tabs":"end",density:"compact",color:"primary"},{default:a(()=>[(o(),v(g,null,_(s,r=>e(Ce,{key:r.name,value:r.value,onClick:z=>p(ge).replace({name:"apps-user-profile",params:{tab:r.value}})},{default:a(()=>[e(m,{icon:r.icon,start:""},null,8,["icon"]),i("span",null,c(r.name),1)]),_:2},1032,["value","onClick"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(Ae,{modelValue:p(t),"onUpdate:modelValue":V[1]||(V[1]=r=>F(t)?t.value=r:null),class:"user-window"},{default:a(()=>[e(A,{value:"profile",transition:!1,"reverse-transition":!1},{default:a(()=>[e(Ke)]),_:1}),e(A,{value:"followers",transition:!1,"reverse-transition":!1},{default:a(()=>[Ye,e(B,null,{default:a(()=>[(o(!0),v(g,null,_(p(ne),r=>(o(),f(k,{key:r.name,cols:"12",sm:"6",md:"4"},{default:a(()=>[e(Me,te(r,{"follow-back":r.followBack,"onUpdate:followBack":z=>r.followBack=z}),null,16,["follow-back","onUpdate:followBack"])]),_:2},1024))),128))]),_:1})]),_:1}),e(A,{value:"friends",transition:!1,"reverse-transition":!1},{default:a(()=>[e(B,null,{default:a(()=>[(o(),v(g,null,_(oe,r=>e(k,{key:r.name,cols:"120 sm=6",md:"4"},{default:a(()=>[e(Le,_e(he(r)),null,16)]),_:2},1024)),64))]),_:1})]),_:1}),e(A,{value:"settings",transition:!1,"reverse-transition":!1},{default:a(()=>[Ze,e(Oe)]),_:1})]),_:1},8,["modelValue"])]))}};export{fa as default};