import{ax as b,b6 as V,b7 as f,aA as v,aS as o,c,aD as x,b8 as I,b9 as l,b as k,ab as h}from"./index-5cc15e35.js";const C=b({indeterminate:Boolean,indeterminateIcon:{type:V,default:"$checkboxIndeterminate"},...f({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),y=v()({name:"VCheckboxBtn",props:C(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,s){let{slots:r}=s;const t=o(e,"indeterminate"),a=o(e,"modelValue");function u(n){t.value&&(t.value=!1)}const i=c(()=>t.value?e.indeterminateIcon:e.falseIcon),d=c(()=>t.value?e.indeterminateIcon:e.trueIcon);return x(()=>{const n=I(l.filterProps(e)[0],["modelValue"]);return k(l,h(n,{modelValue:a.value,"onUpdate:modelValue":[m=>a.value=m,u],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:i.value,trueIcon:d.value,"aria-checked":t.value?"mixed":void 0}),r)}),{}}});export{y as V,C as m};
