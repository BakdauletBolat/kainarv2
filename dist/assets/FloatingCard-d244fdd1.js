import{o as l,a as r,w as a,f as p,aL as s,h as u,ab as f,a6 as n,b as g,j as m,aM as c,k as y,l as o,t as i,m as _,e as k}from"./index-5cc15e35.js";const C={key:0,class:"floating-content"},V={__name:"FloatingCard",props:{image:{type:Object,required:!1},title:{type:String,required:!1},subtitle:{type:String,required:!1}},setup(d){const t=d;return(e,$)=>(l(),r(k,{class:"floating-card"},{default:a(()=>[e.$slots.floatingContent||t.image?(l(),p("div",C,[s(e.$slots,"floatingContent",{},()=>[u("img",f(t.image,{alt:"floating img",class:"w-100"}),null,16)])])):n("",!0),e.$slots.header||t.title||t.subtitle?s(e.$slots,"header",{key:1},()=>[g(m,null,c({default:a(()=>[t.title?(l(),r(y,{key:0},{default:a(()=>[o(i(t.title),1)]),_:1})):n("",!0),t.subtitle?(l(),r(_,{key:1},{default:a(()=>[o(i(t.subtitle),1)]),_:1})):n("",!0)]),_:2},[e.$slots.append?{name:"append",fn:a(()=>[s(e.$slots,"append")]),key:"0"}:void 0,e.$slots.prepend?{name:"prepend",fn:a(()=>[s(e.$slots,"prepend")]),key:"1"}:void 0]),1024)]):n("",!0),s(e.$slots,"default")]),_:3}))}};export{V as _};
