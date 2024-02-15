import{u as w}from"./useInvoiceStore-ebc5ab5b.js";import{V as x,a as v}from"./VRow-31de0795.js";import{V as N}from"./VBreadcrumbs-bfc418b8.js";import{y as f,N as k,Y as I,o as C,a as D,w as e,b as t,e as z,x as l,l as i,V as g,d as r,Q as A,t as d,h as B,q as m,a2 as u}from"./index-5cc15e35.js";import{V as L}from"./VTextField-354b8d27.js";import{V as T}from"./VDataTable-58631e90.js";import{V as R}from"./VChip-0b64cb0d.js";/* empty css                   */import"./VCounter-5de066e9.js";import"./VField-3bcdd552.js";import"./options-2c517f2f.js";import"./VSelect-f3760063.js";import"./VCheckboxBtn-8be4ef26.js";import"./VTable-3188c983.js";import"./filter-14cd16c3.js";const X={__name:"List",setup(S){const _=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Invoice",disabled:!0},{title:"List",disabled:!0}],p=w(),c=f([]),V=[{title:"ID",key:"invoiceNumber"},{title:"Name",key:"customerName"},{title:"Invoice Date",key:"invoiceDate"},{title:"Due Date",key:"dueDate"},{title:"Amount",key:"totalAmount"},{title:"status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],o=f(""),b={unpaid:"red",EMI:"orange",full:"green"};k(()=>{p.fetchInvoices().then(s=>{c.value=s.data})});const y=s=>{p.deleteInvoice(s).then(n=>{c.value=n.data})};return(s,n)=>{const h=I("RouterLink");return C(),D(x,null,{default:e(()=>[t(v,{cols:"12"},{default:e(()=>[t(N,{items:_,divider:"-",class:"px-0"})]),_:1}),t(v,{cols:"12"},{default:e(()=>[t(z,{title:"Invoices"},{append:e(()=>[t(l,{to:{name:"apps-invoice-add"},color:"primary"},{default:e(()=>[i(" New Invoice ")]),_:1})]),default:e(()=>[t(g,null,{default:e(()=>[t(L,{modelValue:r(o),"onUpdate:modelValue":n[0]||(n[0]=a=>A(o)?o.value=a:null),density:"compact","prepend-inner-icon":"mdi-magnify",placeholder:"Search"},null,8,["modelValue"])]),_:1}),t(r(T),{search:r(o),"show-select":"",headers:V,items:r(c),"items-per-page":8,class:"table-borderless rounded-0 text-no-wrap"},{"item.invoiceNumber":e(({item:a})=>[t(h,{to:{name:"apps-invoice-details",params:{id:a.raw.invoiceNumber}},class:"invoice-number"},{default:e(()=>[i(d(a.raw.invoiceNumber),1)]),_:2},1032,["to"])]),"item.totalAmount":e(({item:a})=>[i(" $"+d(a.raw.totalAmount),1)]),"item.status":e(({item:a})=>[t(R,{label:"",density:"comfortable",color:b[a.raw.status],class:"text-capitalize"},{default:e(()=>[i(d(a.raw.status),1)]),_:2},1032,["color"])]),"item.actions":e(({item:a})=>[B("div",null,[t(l,{icon:"",variant:"plain",size:"x-small",to:{name:"apps-invoice-details",params:{id:a.raw.invoiceNumber}}},{default:e(()=>[t(m,{size:"20",icon:"mdi-eye-outline"}),t(u,{activator:"parent"},{default:e(()=>[i(" View ")]),_:1})]),_:2},1032,["to"]),t(l,{icon:"",variant:"plain",size:"x-small",to:{name:"apps-invoice-edit",params:{id:a.raw.invoiceNumber}}},{default:e(()=>[t(m,{size:"20",icon:"mdi-pencil-outline"}),t(u,{activator:"parent"},{default:e(()=>[i(" Edit ")]),_:1})]),_:2},1032,["to"]),t(l,{icon:"",variant:"plain",size:"x-small",onClick:E=>y(a.raw.invoiceNumber)},{default:e(()=>[t(m,{size:"20",icon:"mdi-delete-outline"}),t(u,{activator:"parent"},{default:e(()=>[i(" Delete ")]),_:1})]),_:2},1032,["onClick"])])]),_:1},8,["search","items"])]),_:1})]),_:1})]),_:1})}}};export{X as default};
