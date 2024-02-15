import{_ as C}from"./CodeToggler-a1913054.js";import{V as g}from"./VDialog-a3f005aa.js";import{y as b,o as q,a as B,w as t,l as s,b as e,d as v,Q as f,e as n,V as m,B as V,x as o,ab as h,n as w,ax as j,ay as R,az as F,aA as O,aB as P,aC as L,aD as E,aE as x,q as G,aF as z,E as N,aG as U,G as y,A as T,a3 as H,f as k,v as M,a8 as W,a9 as c,au as Q,F as $,h as S,Y as J}from"./index-5cc15e35.js";import{V as I,a as d}from"./VRow-31de0795.js";import{V as D}from"./VTextField-354b8d27.js";import{V as Y}from"./VSelect-f3760063.js";import{V as K}from"./VAutocomplete-720e7e0b.js";import{V as A}from"./VCheckbox-bee0cd1c.js";import{V as X}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";/* empty css                   */import"./VCounter-5de066e9.js";import"./VField-3bcdd552.js";import"./VCheckboxBtn-8be4ef26.js";import"./VChip-0b64cb0d.js";import"./filter-14cd16c3.js";const Z={__name:"DialogActivator",setup(p){const a=b(!1);return(u,l)=>(q(),B(o,{color:"primary"},{default:t(()=>[s(" Open Dialog "),e(g,{modelValue:v(a),"onUpdate:modelValue":l[1]||(l[1]=i=>f(a)?a.value=i:null),activator:"parent",width:"auto"},{default:t(()=>[e(n,null,{default:t(()=>[e(m,null,{default:t(()=>[s(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),_:1}),e(V,null,{default:t(()=>[e(o,{color:"primary",block:"",onClick:l[0]||(l[0]=i=>a.value=!1)},{default:t(()=>[s(" Close Dialog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}},ee={__name:"DialogBasic",setup(p){const a=b(!1);return(u,l)=>(q(),B(g,{modelValue:v(a),"onUpdate:modelValue":l[1]||(l[1]=i=>f(a)?a.value=i:null),width:"auto"},{activator:t(({props:i})=>[e(o,h({color:"primary"},i),{default:t(()=>[s(" Open Dialog ")]),_:2},1040)]),default:t(()=>[e(n,null,{default:t(()=>[e(m,null,{default:t(()=>[s(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),_:1}),e(V,null,{default:t(()=>[e(o,{color:"primary",block:"",onClick:l[0]||(l[0]=i=>a.value=!1)},{default:t(()=>[s(" Close Dialog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},te={__name:"DialogForm",setup(p){const a=b(!1);return(u,l)=>(q(),B(g,{modelValue:v(a),"onUpdate:modelValue":l[2]||(l[2]=i=>f(a)?a.value=i:null),persistent:"",width:"600"},{activator:t(({props:i})=>[e(o,h({color:"primary"},i),{default:t(()=>[s(" Open Dialog ")]),_:2},1040)]),default:t(()=>[e(n,{title:"User Profile"},{default:t(()=>[e(m,null,{default:t(()=>[e(I,null,{default:t(()=>[e(d,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(D,{label:"Legal first name*",required:""})]),_:1}),e(d,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(D,{label:"Legal middle name",hint:"example of helper text only on focus"})]),_:1}),e(d,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(D,{label:"Legal last name*",hint:"example of persistent helper text","persistent-hint":"",required:""})]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(D,{label:"Email*",required:""})]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(D,{label:"Password*",type:"password",required:""})]),_:1}),e(d,{cols:"12",sm:"6"},{default:t(()=>[e(Y,{items:["0-17","18-29","30-54","54+"],label:"Age*",required:""})]),_:1}),e(d,{cols:"12",sm:"6"},{default:t(()=>[e(K,{items:["Skiing","Ice hockey","Soccer","Basketball","Hockey","Reading","Writing","Coding","Basejump"],label:"Interests",multiple:""})]),_:1})]),_:1})]),_:1}),e(V,null,{default:t(()=>[e(w),e(o,{color:"error",onClick:l[0]||(l[0]=i=>a.value=!1)},{default:t(()=>[s(" Close ")]),_:1}),e(o,{color:"primary",onClick:l[1]||(l[1]=i=>a.value=!1)},{default:t(()=>[s(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}};const ae=j({...R(),...F({variant:"text"})},"VToolbarItems"),le=O()({name:"VToolbarItems",props:ae(),setup(p,a){let{slots:u}=a;return P({VBtn:{color:L(p,"color"),height:"inherit",variant:L(p,"variant")}}),E(()=>{var l;return e("div",{class:["v-toolbar-items",p.class],style:p.style},[(l=u.default)==null?void 0:l.call(u)])}),{}}}),ie={__name:"DialogFullscreen",setup(p){const a=b(!1);return(u,l)=>(q(),B(g,{modelValue:v(a),"onUpdate:modelValue":l[2]||(l[2]=i=>f(a)?a.value=i:null),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition"},{activator:t(({props:i})=>[e(o,h({color:"primary",dark:""},i),{default:t(()=>[s(" Open Dialog ")]),_:2},1040)]),default:t(()=>[e(n,null,{default:t(()=>[e(x,{dark:"",color:"primary"},{default:t(()=>[e(o,{icon:"",dark:"",onClick:l[0]||(l[0]=i=>a.value=!1)},{default:t(()=>[e(G,null,{default:t(()=>[s("mdi-close")]),_:1})]),_:1}),e(z,null,{default:t(()=>[s("Settings")]),_:1}),e(w),e(le,null,{default:t(()=>[e(o,{variant:"text",onClick:l[1]||(l[1]=i=>a.value=!1)},{default:t(()=>[s(" Save ")]),_:1})]),_:1})]),_:1}),e(N,{lines:"two",subheader:""},{default:t(()=>[e(U,null,{default:t(()=>[s("User Controls")]),_:1}),e(y,{title:"Content filtering",subtitle:"Set the content filtering level to restrict apps that can be downloaded"}),e(y,{title:"Password",subtitle:"Require password for purchase or use password to restrict purchase"})]),_:1}),e(T),e(N,{subheader:""},{default:t(()=>[e(U,null,{default:t(()=>[s("General")]),_:1}),e(y,{title:"Notifications",subtitle:"Notify me about updates to apps or games that I downloaded",value:"notifications"},{prepend:t(({isActive:i})=>[e(A,{"model-value":i,class:"mb-n2"},null,8,["model-value"])]),_:1}),e(y,{title:"Sound",subtitle:"Auto-update apps at any time. Data charges may apply",value:"sound"},{prepend:t(({isActive:i})=>[e(A,{"model-value":i,class:"mb-n2"},null,8,["model-value"])]),_:1}),e(y,{title:"Auto-add widgets",subtitle:"Automatically add home screen widgets",value:"widgets"},{prepend:t(({isActive:i})=>[e(A,{"model-value":i,class:"mb-n2"},null,8,["model-value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},se={__name:"DialogLoader",setup(p){const a=b(!1);return H(a,u=>{u&&setTimeout(()=>a.value=!1,4e3)}),(u,l)=>(q(),k("div",null,[e(o,{disabled:v(a),loading:v(a),color:"primary",onClick:l[0]||(l[0]=i=>a.value=!0)},{default:t(()=>[s(" Start loading ")]),_:1},8,["disabled","loading"]),e(g,{modelValue:v(a),"onUpdate:modelValue":l[1]||(l[1]=i=>f(a)?a.value=i:null),scrim:!1,persistent:"",width:"auto"},{default:t(()=>[e(n,{color:"primary"},{default:t(()=>[e(m,null,{default:t(()=>[s(" Please stand by "),e(M,{indeterminate:"",color:"white",class:"mb-0"})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}},ue={__name:"DialogNesting",setup(p){const a=b(!1),u=b(!1),l=b(!1);return(i,r)=>(q(),k("div",null,[e(o,{color:"primary",onClick:r[0]||(r[0]=_=>a.value=!0)},{default:t(()=>[s(" Open Dialog 1 ")]),_:1}),e(g,{modelValue:v(a),"onUpdate:modelValue":r[3]||(r[3]=_=>f(a)?a.value=_:null),width:"auto"},{default:t(()=>[e(n,{title:"Dialog 1"},{default:t(()=>[e(m,null,{default:t(()=>[e(o,{color:"primary",onClick:r[1]||(r[1]=_=>u.value=!0)},{default:t(()=>[s(" Open Dialog 2 ")]),_:1})]),_:1}),e(V,null,{default:t(()=>[e(o,{color:"primary",onClick:r[2]||(r[2]=_=>a.value=!1)},{default:t(()=>[s(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(g,{modelValue:v(u),"onUpdate:modelValue":r[6]||(r[6]=_=>f(u)?u.value=_:null),width:"auto"},{default:t(()=>[e(n,{title:"Dialog 2"},{default:t(()=>[e(m,null,{default:t(()=>[e(o,{color:"primary",onClick:r[4]||(r[4]=_=>l.value=!v(l))},{default:t(()=>[s(" Open Dialog 3 ")]),_:1})]),_:1}),e(V,null,{default:t(()=>[e(o,{color:"primary",onClick:r[5]||(r[5]=_=>u.value=!1)},{default:t(()=>[s(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(g,{modelValue:v(l),"onUpdate:modelValue":r[8]||(r[8]=_=>f(l)?l.value=_:null),width:"auto"},{default:t(()=>[e(n,{title:"Dialog 3"},{default:t(()=>[e(V,null,{default:t(()=>[e(o,{color:"primary",onClick:r[7]||(r[7]=_=>l.value=!1)},{default:t(()=>[s(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}},oe={__name:"DialogOverflow",setup(p){const a=b(!1);return(u,l)=>(q(),B(g,{modelValue:v(a),"onUpdate:modelValue":l[2]||(l[2]=i=>f(a)?a.value=i:null),width:"800"},{activator:t(({props:i})=>[e(o,h({color:"primary"},i),{default:t(()=>[s(" Open Dialog ")]),_:2},1040)]),default:t(()=>[e(n,{title:"Use Google's location service?"},{default:t(()=>[e(m,null,{default:t(()=>[s(" Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat. Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla justo mattis duis interdum vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac egestas. Et vitae, nulla gravida erat scelerisque nullam nunc pellentesque, a dictumst cras augue, purus imperdiet non. Varius montes cursus varius vel tortor, nec leo a qui, magni cras, velit vel consectetuer lobortis vel. Nibh erat et wisi felis leo porttitor, sapien nibh sapien pede mi, sed eget porttitor, repellendus arcu ac quis. Luctus vulputate aut est sem magna, placerat accumsan nunc vestibulum ipsum ac auctor, maecenas lorem in ut nec mauris tortor, doloribus varius sem tortor vestibulum mollis, eleifend tortor felis tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris nec nunc euismod, tortor porta ridiculus potenti, massa tristique nam magna, et wisi placerat et erat ante. Eget pede erat in facilisis, fermentum venenatis sodales. Ac tortor sociis et non animi tristique, rhoncus malesuada, ut arcu volutpat scelerisque sollicitudin, elit curabitur dui pede purus dolor, integer aenean risus taciti nulla eleifend accumsan. At pulvinar diam parturient, interdum mi velit aliquet et a. Arcu at ac placerat eget justo semper, purus sociis curabitur mi ipsum consequat ut, mollis vestibulum, est ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc, montes lectus purus fermentum. Ac sit wisi. Sodales aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat aliquam erat, lectus morbi lobortis at assumenda. Consequat neque purus ipsum voluptas odio, netus vestibulum ut nec, suspendisse pellentesque nec enim in. Wisi dictum sed semper a, ipsum erat tellus habitasse est, erat sem ornare, vitae quisque ultricies. Dui sed blandit. Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc nibh pede, ipsum vestibulum aenean leo ante ultricies, nam cras quis sed penatibus amet. In mauris a. Integer metus mauris tortor, et rutrum vestibulum ultricies, ut phasellus in ullamcorper ut mollit, eu justo. Cursus pretium venenatis. Cras pellentesque vel sodales accumsan aenean. Feugiat metus sit nec in aliquet amet, porttitor pretium vulputate massa. Consequat ipsum luctus quisque adipiscing libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem natoque vestibulum et, aliquet faucibus at morbi nibh, vel condimentum. Massa unde orci sed id sed, odio donec congue nec praesent amet. Hymenaeos velit lacus, quis vivamus libero tempus duis, eu nisi eu, ipsum at accumsan pede justo morbi donec, massa et libero sit risus neque tortor. Ut sed sed etiam hendrerit dapibus, quis metus suspendisse nibh. Fringilla tempor felis augue magna. Cum arcu a, id vitae. Pellentesque pharetra in cras sociis adipiscing est. Nibh nec mattis at maecenas, nisl orci aliquam nulla justo egestas venenatis, elementum duis vel porta eros, massa vitae, eligendi imperdiet amet. Nec neque luctus suscipit, justo sem praesent, ut nisl quisque, volutpat torquent wisi tellus aliquam reprehenderit, curabitur cras at quis massa porttitor mauris. Eros sed ultrices. Amet dignissim justo urna feugiat mauris litora, etiam accumsan, lobortis a orci suspendisse. Semper ac mauris, varius bibendum pretium, orci urna nunc ullamcorper auctor, saepe sem integer quam, at feugiat egestas duis. Urna ligula ante. Leo elementum nonummy. Sagittis mauris est in ipsum, nulla amet non justo, proin id potenti platea posuere sit ut, nunc sit erat bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere morbi nunc tellus gravida vivamus. Mauris nec, facilisi quam fermentum, ut mauris integer, orci tellus tempus diam ut in pellentesque. Wisi faucibus tempor et odio leo diam, eleifend quis integer curabitur sit scelerisque ac, mauris consequat luctus quam penatibus fringilla dis, vitae lacus in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed blandit id sed. Tellus integer, dignissim id pede sodales quis, felis dolorem id mauris orci, orci tempus ut. Nullam hymenaeos. Curabitur in a, tortor ut praesent placerat tincidunt interdum, ac dignissim metus nonummy hendrerit wisi, etiam ut. Semper praesent integer fusce, tortor suspendisse, augue ligula orci ante asperiores ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio quam pellentesque quis lobortis, sollicitudin sed vestibulum sollicitudin, lectus parturient nullam, leo orci ligula ultrices. At tincidunt enim, suspendisse est sit sem ac. Amet tellus molestie est purus magna augue, non etiam et in wisi id. Non commodo, metus lorem facilisi lobortis ac velit, montes neque sed risus consectetuer fringilla dolor. Quam justo et integer aliquam, cursus nulla enim orci, nam cursus adipiscing, integer torquent non, fringilla per maecenas. Libero ipsum sed tellus purus et. Duis molestie placerat erat donec ut. Dolor enim erat massa faucibus ultrices in, ante ultricies orci lacus, libero consectetuer mauris magna feugiat neque dapibus, donec pretium et. Aptent dui, aliquam et et amet nostra ligula. Augue curabitur duis dui volutpat, tempus sed ut pede donec. Interdum luctus, lectus nulla aenean elit, id sit magna, vulputate ultrices pellentesque vel id fermentum morbi. Tortor et. Adipiscing augue lorem cum non lacus, rutrum sodales laoreet duis tortor, modi placerat facilisis et malesuada eros ipsum, vehicula tempus. Ac vivamus amet non aliquam venenatis lectus, sociosqu adipiscing consequat nec arcu odio. Blandit orci nec nec, posuere in pretium, enim ut, consectetuer nullam urna, risus vel. Nullam odio vehicula massa sed, etiam sociis mauris, lacus ullamcorper, libero imperdiet non sodales placerat justo vehicula. Nec morbi imperdiet. Fermentum sem libero iaculis bibendum et eros, eget maecenas non nunc, ad pellentesque. Ut nec diam elementum interdum. Elementum vitae tellus lacus vitae, ipsum phasellus, corporis vehicula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat. Semper wisi et, sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis. ")]),_:1}),e(V,null,{default:t(()=>[e(w),e(o,{color:"error",onClick:l[0]||(l[0]=i=>a.value=!1)},{default:t(()=>[s(" Disagree ")]),_:1}),e(o,{color:"success",onClick:l[1]||(l[1]=i=>a.value=!1)},{default:t(()=>[s(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},re={__name:"DialogPersistent ",setup(p){const a=b(!1);return(u,l)=>(q(),B(g,{modelValue:v(a),"onUpdate:modelValue":l[2]||(l[2]=i=>f(a)?a.value=i:null),persistent:"",width:"auto"},{activator:t(({props:i})=>[e(o,h({color:"primary"},i),{default:t(()=>[s(" Open Dialog ")]),_:2},1040)]),default:t(()=>[e(n,{title:"Use Google's location service?"},{default:t(()=>[e(m,null,{default:t(()=>[s(" Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. ")]),_:1}),e(V,null,{default:t(()=>[e(w),e(o,{color:"error",onClick:l[0]||(l[0]=i=>a.value=!1)},{default:t(()=>[s(" Disagree ")]),_:1}),e(o,{color:"primary",onClick:l[1]||(l[1]=i=>a.value=!1)},{default:t(()=>[s(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},ne={__name:"DialogScrollable",setup(p){const a=b(""),u=b(!1);return(l,i)=>(q(),B(g,{modelValue:v(u),"onUpdate:modelValue":i[3]||(i[3]=r=>f(u)?u.value=r:null),scrollable:"",width:"auto"},{activator:t(({props:r})=>[e(o,h({color:"primary"},r),{default:t(()=>[s(" Open Dialog ")]),_:2},1040)]),default:t(()=>[e(n,{title:"Select Country"},{default:t(()=>[e(T),e(m,{style:{height:"300px"}},{default:t(()=>[e(W,{modelValue:v(a),"onUpdate:modelValue":i[0]||(i[0]=r=>f(a)?a.value=r:null),column:""},{default:t(()=>[e(c,{label:"Bahamas, The",value:"bahamas"}),e(c,{label:"Bahrain",value:"bahrain"}),e(c,{label:"Bangladesh",value:"bangladesh"}),e(c,{label:"Barbados",value:"barbados"}),e(c,{label:"Belarus",value:"belarus"}),e(c,{label:"Belgium",value:"belgium"}),e(c,{label:"Belize",value:"belize"}),e(c,{label:"Benin",value:"benin"}),e(c,{label:"Bhutan",value:"bhutan"}),e(c,{label:"Bolivia",value:"bolivia"}),e(c,{label:"Bosnia and Herzegovina",value:"bosnia"}),e(c,{label:"Botswana",value:"botswana"}),e(c,{label:"Brazil",value:"brazil"}),e(c,{label:"Brunei",value:"brunei"}),e(c,{label:"Bulgaria",value:"bulgaria"}),e(c,{label:"Burkina Faso",value:"burkina"}),e(c,{label:"Burma",value:"burma"}),e(c,{label:"Burundi",value:"burundi"})]),_:1},8,["modelValue"])]),_:1}),e(T),e(V,null,{default:t(()=>[e(o,{color:"error",onClick:i[1]||(i[1]=r=>u.value=!1)},{default:t(()=>[s(" Close ")]),_:1}),e(o,{color:"success",onClick:i[2]||(i[2]=r=>u.value=!1)},{default:t(()=>[s(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},me={},de=S("div",{class:"text-h2 pa-12"}," Hello world! ",-1),ce=S("div",{class:"text-h2 pa-12"}," Hello world! ",-1);function pe(p,a){return q(),k($,null,[e(g,{transition:"dialog-bottom-transition",width:"auto"},{activator:t(({props:u})=>[e(o,h({color:"primary"},u,{class:"me-4"}),{default:t(()=>[s(" From the bottom ")]),_:2},1040)]),default:t(({isActive:u})=>[e(n,null,{default:t(()=>[e(x,{color:"primary",title:"Opening from the bottom"}),e(m,null,{default:t(()=>[de]),_:1}),e(V,{class:"justify-end"},{default:t(()=>[e(o,{variant:"text",onClick:l=>u.value=!1},{default:t(()=>[s(" Close ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1}),e(g,{transition:"dialog-top-transition",width:"auto"},{activator:t(({props:u})=>[e(o,h({color:"primary"},u),{default:t(()=>[s(" From the top ")]),_:2},1040)]),default:t(({isActive:u})=>[e(n,null,{default:t(()=>[e(x,{color:"primary",title:"Opening from the top"}),e(m,null,{default:t(()=>[ce]),_:1}),e(V,{class:"justify-end"},{default:t(()=>[e(o,{variant:"text",onClick:l=>u.value=!1},{default:t(()=>[s(" Close ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1})],64)}const ve=Q(me,[["render",pe]]),ge={__name:"DialogVmodel",setup(p){const a=b(!1);return(u,l)=>(q(),k($,null,[e(o,{color:"primary",onClick:l[0]||(l[0]=i=>a.value=!0)},{default:t(()=>[s(" Open Dialog ")]),_:1}),e(g,{modelValue:v(a),"onUpdate:modelValue":l[2]||(l[2]=i=>f(a)?a.value=i:null),width:"auto"},{default:t(()=>[e(n,null,{default:t(()=>[e(m,null,{default:t(()=>[s(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),_:1}),e(V,null,{default:t(()=>[e(o,{color:"primary",block:"",onClick:l[1]||(l[1]=i=>a.value=!1)},{default:t(()=>[s(" Close Dialog ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},be=`<script setup >
const dialog = ref(false)
<\/script>

<template>
  <VDialog
    v-model="dialog"
    width="auto"
  >
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <VCard>
      <VCardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </VCardText>

      <VCardActions>
        <VBtn
          color="primary"
          block
          @click="dialog = false"
        >
          Close Dialog
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,fe=`<script setup >
const dialog = ref(false)
<\/script>

<template>
  <VBtn color="primary">
    Open Dialog

    <VDialog
      v-model="dialog"
      activator="parent"
      width="auto"
    >
      <VCard>
        <VCardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </VCardText>

        <VCardActions>
          <VBtn
            color="primary"
            block
            @click="dialog = false"
          >
            Close Dialog
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </VBtn>
</template>
`,Ve=`<script setup >
const dialog = ref(false)
<\/script>

<template>
  <VDialog
    v-model="dialog"
    persistent
    width="600"
  >
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <VCard title="User Profile">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              label="Legal first name*"
              required
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              label="Legal middle name"
              hint="example of helper text only on focus"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              label="Legal last name*"
              hint="example of persistent helper text"
              persistent-hint
              required
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              label="Email*"
              required
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              label="Password*"
              type="password"
              required
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VSelect
              :items="['0-17', '18-29', '30-54', '54+']"
              label="Age*"
              required
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VAutocomplete
              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
              label="Interests"
              multiple
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="dialog = false"
        >
          Close
        </VBtn>
        <VBtn
          color="primary"
          @click="dialog = false"
        >
          Save
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,qe=`<script setup >
const dialog = ref(false)
<\/script>

<template>
  <VDialog
    v-model="dialog"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <template #activator="{ props }">
      <VBtn
        color="primary"
        dark
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <VCard>
      <VToolbar
        dark
        color="primary"
      >
        <VBtn
          icon
          dark
          @click="dialog = false"
        >
          <VIcon>mdi-close</VIcon>
        </VBtn>
        <VToolbarTitle>Settings</VToolbarTitle>
        <VSpacer />
        <VToolbarItems>
          <VBtn
            variant="text"
            @click="dialog = false"
          >
            Save
          </VBtn>
        </VToolbarItems>
      </VToolbar>

      <VList
        lines="two"
        subheader
      >
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <VList subheader>
        <VListSubheader>General</VListSubheader>
        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="notifications"
        >
          <template #prepend="{ isActive }">
            <VCheckbox
              :model-value="isActive"
              class="mb-n2"
            />
          </template>
        </VListItem>
        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="sound"
        >
          <template #prepend="{ isActive }">
            <VCheckbox
              :model-value="isActive"
              class="mb-n2"
            />
          </template>
        </VListItem>
        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="widgets"
        >
          <template #prepend="{ isActive }">
            <VCheckbox
              :model-value="isActive"
              class="mb-n2"
            />
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`,_e=`<script setup >
const dialog = ref(false)

watch(dialog, val => {
  if (!val)
    return
  setTimeout(() => (dialog.value = false), 4000)
})
<\/script>

<template>
  <div>
    <VBtn
      :disabled="dialog"
      :loading="dialog"
      color="primary"
      @click="dialog = true"
    >
      Start loading
    </VBtn>

    <VDialog
      v-model="dialog"
      :scrim="false"
      persistent
      width="auto"
    >
      <VCard color="primary">
        <VCardText>
          Please stand by
          <VProgressLinear
            indeterminate
            color="white"
            class="mb-0"
          />
        </VCardText>
      </VCard>
    </VDialog>
  </div>
</template>
`,Ce=`<script setup >
const dialog = ref(false)
const dialog2 = ref(false)
const dialog3 = ref(false)
<\/script>

<template>
  <div>
    <VBtn
      color="primary"
      @click="dialog = true"
    >
      Open Dialog 1
    </VBtn>

    <VDialog
      v-model="dialog"
      width="auto"
    >
      <VCard title="Dialog 1">
        <VCardText>
          <VBtn
            color="primary"
            @click="dialog2 = true"
          >
            Open Dialog 2
          </VBtn>
        </VCardText>

        <VCardActions>
          <VBtn
            color="primary"
            @click="dialog = false"
          >
            Close
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <VDialog
      v-model="dialog2"
      width="auto"
    >
      <VCard title="Dialog 2">
        <VCardText>
          <VBtn
            color="primary"
            @click="dialog3 = !dialog3"
          >
            Open Dialog 3
          </VBtn>
        </VCardText>

        <VCardActions>
          <VBtn
            color="primary"
            @click="dialog2 = false"
          >
            Close
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <VDialog
      v-model="dialog3"
      width="auto"
    >
      <VCard title="Dialog 3">
        <VCardActions>
          <VBtn
            color="primary"
            @click="dialog3 = false"
          >
            Close
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </div>
</template>
`,he=`<script setup >
const dialog = ref(false)
<\/script>

<template>
  <VDialog
    v-model="dialog"
    width="800"
  >
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <VCard title="Use Google's location service?">
      <VCardText>
        Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.
        Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla justo mattis duis interdum vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac egestas.
        Et vitae, nulla gravida erat scelerisque nullam nunc pellentesque, a dictumst cras augue, purus imperdiet non. Varius montes cursus varius vel tortor, nec leo a qui, magni cras, velit vel consectetuer lobortis vel. Nibh erat et wisi felis leo porttitor, sapien nibh sapien pede mi, sed eget porttitor, repellendus arcu ac quis. Luctus vulputate aut est sem magna, placerat accumsan nunc vestibulum ipsum ac auctor, maecenas lorem in ut nec mauris tortor, doloribus varius sem tortor vestibulum mollis, eleifend tortor felis tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris nec nunc euismod, tortor porta ridiculus potenti, massa tristique nam magna, et wisi placerat et erat ante. Eget pede erat in facilisis, fermentum venenatis sodales. Ac tortor sociis et non animi tristique, rhoncus malesuada, ut arcu volutpat scelerisque sollicitudin, elit curabitur dui pede purus dolor, integer aenean risus taciti nulla eleifend accumsan. At pulvinar diam parturient, interdum mi velit aliquet et a. Arcu at ac placerat eget justo semper, purus sociis curabitur mi ipsum consequat ut, mollis vestibulum, est ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc, montes lectus purus fermentum.
        Ac sit wisi. Sodales aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat aliquam erat, lectus morbi lobortis at assumenda. Consequat neque purus ipsum voluptas odio, netus vestibulum ut nec, suspendisse pellentesque nec enim in. Wisi dictum sed semper a, ipsum erat tellus habitasse est, erat sem ornare, vitae quisque ultricies. Dui sed blandit. Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc nibh pede, ipsum vestibulum aenean leo ante ultricies, nam cras quis sed penatibus amet. In mauris a. Integer metus mauris tortor, et rutrum vestibulum ultricies, ut phasellus in ullamcorper ut mollit, eu justo. Cursus pretium venenatis.
        Cras pellentesque vel sodales accumsan aenean. Feugiat metus sit nec in aliquet amet, porttitor pretium vulputate massa. Consequat ipsum luctus quisque adipiscing libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem natoque vestibulum et, aliquet faucibus at morbi nibh, vel condimentum. Massa unde orci sed id sed, odio donec congue nec praesent amet. Hymenaeos velit lacus, quis vivamus libero tempus duis, eu nisi eu, ipsum at accumsan pede justo morbi donec, massa et libero sit risus neque tortor. Ut sed sed etiam hendrerit dapibus, quis metus suspendisse nibh.
        Fringilla tempor felis augue magna. Cum arcu a, id vitae. Pellentesque pharetra in cras sociis adipiscing est. Nibh nec mattis at maecenas, nisl orci aliquam nulla justo egestas venenatis, elementum duis vel porta eros, massa vitae, eligendi imperdiet amet. Nec neque luctus suscipit, justo sem praesent, ut nisl quisque, volutpat torquent wisi tellus aliquam reprehenderit, curabitur cras at quis massa porttitor mauris. Eros sed ultrices. Amet dignissim justo urna feugiat mauris litora, etiam accumsan, lobortis a orci suspendisse. Semper ac mauris, varius bibendum pretium, orci urna nunc ullamcorper auctor, saepe sem integer quam, at feugiat egestas duis. Urna ligula ante. Leo elementum nonummy. Sagittis mauris est in ipsum, nulla amet non justo, proin id potenti platea posuere sit ut, nunc sit erat bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere morbi nunc tellus gravida vivamus.
        Mauris nec, facilisi quam fermentum, ut mauris integer, orci tellus tempus diam ut in pellentesque. Wisi faucibus tempor et odio leo diam, eleifend quis integer curabitur sit scelerisque ac, mauris consequat luctus quam penatibus fringilla dis, vitae lacus in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed blandit id sed. Tellus integer, dignissim id pede sodales quis, felis dolorem id mauris orci, orci tempus ut. Nullam hymenaeos. Curabitur in a, tortor ut praesent placerat tincidunt interdum, ac dignissim metus nonummy hendrerit wisi, etiam ut.
        Semper praesent integer fusce, tortor suspendisse, augue ligula orci ante asperiores ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio quam pellentesque quis lobortis, sollicitudin sed vestibulum sollicitudin, lectus parturient nullam, leo orci ligula ultrices. At tincidunt enim, suspendisse est sit sem ac. Amet tellus molestie est purus magna augue, non etiam et in wisi id. Non commodo, metus lorem facilisi lobortis ac velit, montes neque sed risus consectetuer fringilla dolor. Quam justo et integer aliquam, cursus nulla enim orci, nam cursus adipiscing, integer torquent non, fringilla per maecenas. Libero ipsum sed tellus purus et. Duis molestie placerat erat donec ut. Dolor enim erat massa faucibus ultrices in, ante ultricies orci lacus, libero consectetuer mauris magna feugiat neque dapibus, donec pretium et. Aptent dui, aliquam et et amet nostra ligula.
        Augue curabitur duis dui volutpat, tempus sed ut pede donec. Interdum luctus, lectus nulla aenean elit, id sit magna, vulputate ultrices pellentesque vel id fermentum morbi. Tortor et. Adipiscing augue lorem cum non lacus, rutrum sodales laoreet duis tortor, modi placerat facilisis et malesuada eros ipsum, vehicula tempus. Ac vivamus amet non aliquam venenatis lectus, sociosqu adipiscing consequat nec arcu odio. Blandit orci nec nec, posuere in pretium, enim ut, consectetuer nullam urna, risus vel. Nullam odio vehicula massa sed, etiam sociis mauris, lacus ullamcorper, libero imperdiet non sodales placerat justo vehicula. Nec morbi imperdiet. Fermentum sem libero iaculis bibendum et eros, eget maecenas non nunc, ad pellentesque. Ut nec diam elementum interdum. Elementum vitae tellus lacus vitae, ipsum phasellus, corporis vehicula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat.
        Semper wisi et, sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="dialog = false"
        >
          Disagree
        </VBtn>
        <VBtn
          color="success"
          @click="dialog = false"
        >
          Agree
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,Be=`<script setup >
const dialog = ref(false)
<\/script>

<template>
  <VDialog
    v-model="dialog"
    persistent
    width="auto"
  >
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <VCard title="Use Google's location service?">
      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="dialog = false"
        >
          Disagree
        </VBtn>
        <VBtn
          color="primary"
          @click="dialog = false"
        >
          Agree
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,ye=`<script setup >
const dialogm1 = ref('')
const dialog = ref(false)
<\/script>

<template>
  <VDialog
    v-model="dialog"
    scrollable
    width="auto"
  >
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <VCard title="Select Country">
      <VDivider />
      <VCardText style="height: 300px;">
        <VRadioGroup
          v-model="dialogm1"
          column
        >
          <VRadio
            label="Bahamas, The"
            value="bahamas"
          />
          <VRadio
            label="Bahrain"
            value="bahrain"
          />
          <VRadio
            label="Bangladesh"
            value="bangladesh"
          />
          <VRadio
            label="Barbados"
            value="barbados"
          />
          <VRadio
            label="Belarus"
            value="belarus"
          />
          <VRadio
            label="Belgium"
            value="belgium"
          />
          <VRadio
            label="Belize"
            value="belize"
          />
          <VRadio
            label="Benin"
            value="benin"
          />
          <VRadio
            label="Bhutan"
            value="bhutan"
          />
          <VRadio
            label="Bolivia"
            value="bolivia"
          />
          <VRadio
            label="Bosnia and Herzegovina"
            value="bosnia"
          />
          <VRadio
            label="Botswana"
            value="botswana"
          />
          <VRadio
            label="Brazil"
            value="brazil"
          />
          <VRadio
            label="Brunei"
            value="brunei"
          />
          <VRadio
            label="Bulgaria"
            value="bulgaria"
          />
          <VRadio
            label="Burkina Faso"
            value="burkina"
          />
          <VRadio
            label="Burma"
            value="burma"
          />
          <VRadio
            label="Burundi"
            value="burundi"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardActions>
        <VBtn
          color="error"
          @click="dialog = false"
        >
          Close
        </VBtn>
        <VBtn
          color="success"
          @click="dialog = false"
        >
          Save
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,De=`<template>
  <VDialog
    transition="dialog-bottom-transition"
    width="auto"
  >
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
        class="me-4"
      >
        From the bottom
      </VBtn>
    </template>

    <template #default="{ isActive }">
      <VCard>
        <VToolbar
          color="primary"
          title="Opening from the bottom"
        />
        <VCardText>
          <div class="text-h2 pa-12">
            Hello world!
          </div>
        </VCardText>
        <VCardActions class="justify-end">
          <VBtn
            variant="text"
            @click="isActive.value = false"
          >
            Close
          </VBtn>
        </VCardActions>
      </VCard>
    </template>
  </VDialog>

  <VDialog
    transition="dialog-top-transition"
    width="auto"
  >
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        From the top
      </VBtn>
    </template>
    <template #default="{ isActive }">
      <VCard>
        <VToolbar
          color="primary"
          title="Opening from the top"
        />
        <VCardText>
          <div class="text-h2 pa-12">
            Hello world!
          </div>
        </VCardText>
        <VCardActions class="justify-end">
          <VBtn
            variant="text"
            @click="isActive.value = false"
          >
            Close
          </VBtn>
        </VCardActions>
      </VCard>
    </template>
  </VDialog>
</template>
`,we=`<script setup >
const dialog = ref(false)
<\/script>

<template>
  <VBtn
    color="primary"
    @click="dialog = true"
  >
    Open Dialog
  </VBtn>

  <VDialog
    v-model="dialog"
    width="auto"
  >
    <VCard>
      <VCardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </VCardText>

      <VCardActions>
        <VBtn
          color="primary"
          block
          @click="dialog = false"
        >
          Close Dialog
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,Ge={__name:"index",setup(p){const a=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Components",disabled:!0},{title:"Dialogs",disabled:!0}];return(u,l)=>{const i=J("ApiBtn");return q(),B(I,null,{default:t(()=>[e(d,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:t(()=>[e(X,{divider:"-",items:a,class:"pa-0"}),S("div",null,[e(i,{href:"https://vuetifyjs.com/en/components/dialogs/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Basic"},{default:t(()=>[e(m,null,{default:t(()=>[e(ee)]),_:1}),e(C,{code:be},null,8,["code"])]),_:1})]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Activator"},{default:t(()=>[e(m,null,{default:t(()=>[e(Z)]),_:1}),e(C,{code:fe},null,8,["code"])]),_:1})]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"v-model"},{default:t(()=>[e(m,null,{default:t(()=>[e(ge)]),_:1}),e(C,{code:we},null,8,["code"])]),_:1})]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"FullScreen"},{default:t(()=>[e(m,null,{default:t(()=>[e(ie)]),_:1}),e(C,{code:qe},null,8,["code"])]),_:1})]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Transitions"},{default:t(()=>[e(m,null,{default:t(()=>[e(ve)]),_:1}),e(C,{code:De},null,8,["code"])]),_:1})]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Persistent"},{default:t(()=>[e(m,null,{default:t(()=>[e(re)]),_:1}),e(C,{code:Be},null,8,["code"])]),_:1})]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Scrollable"},{default:t(()=>[e(m,null,{default:t(()=>[e(ne)]),_:1}),e(C,{code:ye},null,8,["code"])]),_:1})]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Form"},{default:t(()=>[e(m,null,{default:t(()=>[e(te)]),_:1}),e(C,{code:Ve},null,8,["code"])]),_:1})]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Loader"},{default:t(()=>[e(m,null,{default:t(()=>[e(se)]),_:1}),e(C,{code:_e},null,8,["code"])]),_:1})]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Nesting"},{default:t(()=>[e(m,null,{default:t(()=>[e(ue)]),_:1}),e(C,{code:Ce},null,8,["code"])]),_:1})]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(n,{title:"Overflowed"},{default:t(()=>[e(m,null,{default:t(()=>[e(oe)]),_:1}),e(C,{code:he},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{Ge as default};
