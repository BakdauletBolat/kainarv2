import{V as b}from"./vue3-apexcharts.common-dbe3e73f.js";import{u as f,c as n,o as d,a as u,d as l,Y as w,w as r,b as e,h as k,e as h,V as m}from"./index-5cc15e35.js";import{V as T,a as i}from"./VRow-31de0795.js";import{V as B}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";const O={__name:"AreaChart",setup(v){const o=f(),a=n(()=>o.current.value.colors),t=[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}],s=n(()=>({chart:{type:"area",parentHeightOffset:0,toolbar:{show:!1}},colors:[a.value.primary,a.value.warning],dataLabels:{enabled:!1},grid:{borderColor:"rgba(var(--v-border-color), var(--v-border-opacity))"},stroke:{curve:"smooth"},legend:{labels:{colors:"rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity))"}},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"],labels:{style:{colors:"rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))"}},axisBorder:{show:!1}},yaxis:{labels:{style:{colors:"rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))"}}},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}));return(c,p)=>(d(),u(l(b),{options:l(s),series:t,height:300},null,8,["options"]))}},H={__name:"BarChart",setup(v){const o=f(),a=n(()=>o.current.value.colors),t=[{data:[21,22,10,28,16,21]}],s=n(()=>{const c=a.value.background;return{chart:{type:"bar",parentHeightOffset:0,toolbar:{show:!1}},grid:{show:!1,padding:{top:-10,left:-7,right:0,bottom:5}},colors:[a.value.primary,a.value.secondary,a.value.warning,a.value.info,a.value.error,a.value.success],plotOptions:{bar:{columnWidth:"20%",distributed:!0,colors:{backgroundBarColors:[c,c,c,c,c],backgroundBarRadius:5}}},legend:{show:!1},dataLabels:{enabled:!1},xaxis:{categories:[["John","Doe"],["Joe","Smith"],["Jake","Williams"],["Peter","Brown"],["Mary","Evans"],["Peter","Brown"]],labels:{style:{colors:"rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))"}},axisBorder:{color:"rgba(var(--v-border-color), var(--v-border-opacity))"},axisTicks:{color:"rgba(var(--v-border-color), var(--v-border-opacity))"}},yaxis:{labels:{style:{colors:"rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))"}}}}});return(c,p)=>(d(),u(l(b),{options:l(s),series:t,height:300},null,8,["options"]))}},A={__name:"HeatChart",setup(v){const o=f(),a=n(()=>o.current.value.colors),t=(p,_)=>{let g=0;const y=[];for(;g<p;){const x=(g+1).toString(),C=Math.floor(Math.random()*(_.max-_.min+1))+_.min;y.push({x,y:C}),g+=1}return y},s=[{name:"Jan",data:t(20,{min:-30,max:55})},{name:"Feb",data:t(20,{min:-30,max:55})},{name:"Mar",data:t(20,{min:-30,max:55})},{name:"Apr",data:t(20,{min:-30,max:55})},{name:"May",data:t(20,{min:-30,max:55})},{name:"Jun",data:t(20,{min:-30,max:55})},{name:"Jul",data:t(20,{min:-30,max:55})},{name:"Aug",data:t(20,{min:-30,max:55})},{name:"Sep",data:t(20,{min:-30,max:55})}],c=n(()=>({chart:{type:"heatmap",parentHeightOffset:0},grid:{borderColor:"rgba(var(--v-border-color), var(--v-border-opacity))"},plotOptions:{heatmap:{shadeIntensity:.5,radius:0,useFillColorAsStroke:!0,colorScale:{ranges:[{from:-30,to:5,name:"low",color:a.value.primary},{from:6,to:20,name:"medium",color:a.value.info},{from:21,to:45,name:"high",color:a.value.warning},{from:46,to:55,name:"extreme",color:a.value.error}]}}},stroke:{width:1},legend:{labels:{colors:"rgba(var(--v-theme-on-surface), var(--v-medium-emphasis-opacity))"}},dataLabels:{enabled:!1},xaxis:{labels:{style:{colors:"rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))"}},axisBorder:{color:"rgba(var(--v-border-color), var(--v-border-opacity))"},axisTicks:{color:"rgba(var(--v-border-color), var(--v-border-opacity))"}},yaxis:{labels:{style:{colors:"rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))"}}}}));return(p,_)=>(d(),u(l(b),{options:l(c),series:s,height:300},null,8,["options"]))}},V={__name:"HorizontalBarChart",setup(v){const o=f(),a=n(()=>o.current.value.colors),t=[{data:[400,430,448,470,540,580,690,1100,1200,1380]}],s=n(()=>({chart:{type:"bar",parentHeightOffset:0,toolbar:{show:!1}},grid:{show:!1,padding:{top:-10,left:-7,right:0,bottom:5}},colors:[a.value.primary],plotOptions:{bar:{borderRadius:4,horizontal:!0,colors:{backgroundBarRadius:5}}},legend:{show:!1},dataLabels:{enabled:!1},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"],labels:{style:{colors:"rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))"}},axisBorder:{color:"rgba(var(--v-border-color), var(--v-border-opacity))"},axisTicks:{color:"rgba(var(--v-border-color), var(--v-border-opacity))"}},yaxis:{labels:{style:{colors:"rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))"}}}}));return(c,p)=>(d(),u(l(b),{options:l(s),series:t,height:300},null,8,["options"]))}},J={__name:"PieChart",setup(v){const o=[44,55,41,17,15],a=n(()=>({chart:{type:"donut",parentHeightOffset:0,toolbar:{show:!1}},stroke:{width:0},legend:{show:!1}}));return(t,s)=>(d(),u(l(b),{options:l(a),series:o,height:300},null,8,["options"]))}},M={__name:"PolarChart",setup(v){const o=f(),a=n(()=>o.current.value.colors),t=[14,23,21,17,15,10,12,17,21],s=n(()=>({chart:{type:"polarArea",parentHeightOffset:0,toolbar:{show:!1}},legend:{show:!1},stroke:{colors:[a.value.surface]},fill:{opacity:.8},colors:[a.value.primary],yaxis:{show:!1},plotOptions:{polarArea:{rings:{strokeWidth:1,strokeColor:"rgba(var(--v-border-color), var(--v-border-opacity))"},spokes:{strokeWidth:1,connectorColors:"rgba(var(--v-border-color), var(--v-border-opacity))"}}}}));return(c,p)=>(d(),u(l(b),{options:l(s),series:t,height:320},null,8,["options"]))}},R={__name:"RadarChart",setup(v){const o=f(),a=n(()=>o.current.value.colors),t=[{name:"Series 1",data:[80,50,30,40,100,20]}],s=n(()=>({chart:{type:"radar",parentHeightOffset:0,toolbar:{show:!1}},colors:[a.value.primary],yaxis:{show:!1},xaxis:{categories:["January","February","March","April","May","June"],labels:{style:{colors:["rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))","rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))","rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))","rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))","rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))","rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))","rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))","rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))"]}}},plotOptions:{radar:{polygons:{strokeColors:"rgba(var(--v-border-color), var(--v-border-opacity))",connectorColors:"rgba(var(--v-border-color), var(--v-border-opacity))"}}}}));return(c,p)=>(d(),u(l(b),{options:l(s),series:t,height:300},null,8,["options"]))}},S={__name:"RadialBarChart",setup(v){const o=f(),a=n(()=>o.current.value.colors),t=[70],s=n(()=>({chart:{type:"radialBar",parentHeightOffset:0,toolbar:{show:!1}},plotOptions:{radialBar:{hollow:{size:"65%",background:"transparent"},track:{background:a.value.background},dataLabels:{value:{color:"rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity))"}}}},labels:["Cricket"]}));return(c,p)=>(d(),u(l(b),{options:l(s),series:t,height:300},null,8,["options"]))}};const F={__name:"index",setup(v){const o=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Apex Chart",disabled:!0}];return(a,t)=>{const s=w("ApiBtn");return d(),u(T,null,{default:r(()=>[e(i,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:r(()=>[e(B,{divider:"-",items:o,class:"pa-0"}),k("div",null,[e(s,{href:"https://apexcharts.com/docs/options/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(i,{cols:"12",md:"6"},{default:r(()=>[e(h,{title:"Bar Chart"},{default:r(()=>[e(m,null,{default:r(()=>[e(H)]),_:1})]),_:1})]),_:1}),e(i,{cols:"12",md:"6"},{default:r(()=>[e(h,{title:"Area Chart"},{default:r(()=>[e(m,null,{default:r(()=>[e(O)]),_:1})]),_:1})]),_:1}),e(i,{cols:"12",md:"6"},{default:r(()=>[e(h,{title:"Horizontal Bar Chart"},{default:r(()=>[e(m,null,{default:r(()=>[e(V)]),_:1})]),_:1})]),_:1}),e(i,{cols:"12",md:"6"},{default:r(()=>[e(h,{title:"Heat Chart"},{default:r(()=>[e(m,null,{default:r(()=>[e(A)]),_:1})]),_:1})]),_:1}),e(i,{cols:"12",md:"6"},{default:r(()=>[e(h,{title:"Radial Bar Chart"},{default:r(()=>[e(m,null,{default:r(()=>[e(S)]),_:1})]),_:1})]),_:1}),e(i,{cols:"12",md:"6"},{default:r(()=>[e(h,{title:"Pie Chart"},{default:r(()=>[e(m,null,{default:r(()=>[e(J)]),_:1})]),_:1})]),_:1}),e(i,{cols:"12",md:"6"},{default:r(()=>[e(h,{title:"Radar Chart"},{default:r(()=>[e(m,null,{default:r(()=>[e(R)]),_:1})]),_:1})]),_:1}),e(i,{cols:"12",md:"6"},{default:r(()=>[e(h,{title:"Polar Area Chart"},{default:r(()=>[e(m,null,{default:r(()=>[e(M)]),_:1})]),_:1})]),_:1})]),_:1})}}};export{F as default};
