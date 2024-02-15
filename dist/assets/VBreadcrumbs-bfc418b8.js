import{ax as C,ay as f,aA as k,aD as V,b as t,bl as D,aK as P,bw as I,c as g,dw as h,b6 as w,bh as A,bk as R,bA as F,aC as n,br as x,bt as L,aB as N,q as T,bz as _,F as $,ab as q}from"./index-5cc15e35.js";const z=C({divider:[Number,String],...f()},"VBreadcrumbsDivider"),K=k()({name:"VBreadcrumbsDivider",props:z(),setup(e,c){let{slots:a}=c;return V(()=>{var l;return t("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((l=a==null?void 0:a.default)==null?void 0:l.call(a))??e.divider])}),{}}}),j=C({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...f(),...D(),...P({tag:"li"})},"VBreadcrumbsItem"),E=k()({name:"VBreadcrumbsItem",props:j(),setup(e,c){let{slots:a,attrs:l}=c;const d=I(e,l),i=g(()=>{var s;return e.active||((s=d.isActive)==null?void 0:s.value)}),v=g(()=>i.value?e.activeColor:e.color),{textColorClasses:b,textColorStyles:r}=h(v);return V(()=>t(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":i.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:i.value&&e.activeClass},b.value,e.class],style:[r.value,e.style],"aria-current":i.value?"page":void 0},{default:()=>{var s,o;return[d.isLink.value?t("a",{class:"v-breadcrumbs-item--link",href:d.href.value,"aria-current":i.value?"page":void 0,onClick:d.navigate},[((o=a.default)==null?void 0:o.call(a))??e.title]):((s=a.default)==null?void 0:s.call(a))??e.title]}})),{}}}),G=C({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:w,items:{type:Array,default:()=>[]},...f(),...A(),...R(),...P({tag:"ul"})},"VBreadcrumbs"),J=k()({name:"VBreadcrumbs",props:G(),setup(e,c){let{slots:a}=c;const{backgroundColorClasses:l,backgroundColorStyles:d}=F(n(e,"bgColor")),{densityClasses:i}=x(e),{roundedClasses:v}=L(e);N({VBreadcrumbsDivider:{divider:n(e,"divider")},VBreadcrumbsItem:{activeClass:n(e,"activeClass"),activeColor:n(e,"activeColor"),color:n(e,"color"),disabled:n(e,"disabled")}});const b=g(()=>e.items.map(r=>typeof r=="string"?{item:{title:r},raw:r}:{item:r,raw:r}));return V(()=>{const r=!!(a.prepend||e.icon);return t(e.tag,{class:["v-breadcrumbs",l.value,i.value,v.value,e.class],style:[d.value,e.style]},{default:()=>{var s;return[r&&t("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[a.prepend?t(_,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},a.prepend):t(T,{key:"prepend-icon",start:!0,icon:e.icon},null)]),b.value.map((o,m,y)=>{let{item:B,raw:S}=o;return t($,null,[t(E,q({key:B.title,disabled:m>=y.length-1},B),{default:a.title?()=>{var u;return(u=a.title)==null?void 0:u.call(a,{item:S,index:m})}:void 0}),m<y.length-1&&t(K,null,{default:a.divider?()=>{var u;return(u=a.divider)==null?void 0:u.call(a,{item:S,index:m})}:void 0})])}),(s=a.default)==null?void 0:s.call(a)]}})}),{}}});export{J as V};
