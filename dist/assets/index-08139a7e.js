import{_ as c}from"./CodeToggler-a1913054.js";import{V,a,b as f}from"./VStepper-8f6d1cee.js";import{o as u,a as o,w as t,b as e,d as i,A as l,e as r,l as _,Y as v,h as b,V as d}from"./index-5cc15e35.js";import{V as h,a as s}from"./VRow-31de0795.js";import{V as I}from"./VBreadcrumbs-bfc418b8.js";import"./vue.runtime.esm-bundler-47f2d23b.js";import"./VWindowItem-e2d2e955.js";const g={__name:"StepperAlternate",setup(m){return(p,n)=>(u(),o(i(f),{"alt-labels":""},{default:t(()=>[e(i(V),null,{default:t(()=>[e(i(a),{value:"1",title:"Ad unit details"}),e(l),e(i(a),{value:"2",title:"Ad sizes"}),e(l),e(i(a),{value:"3",title:"Ad templates"})]),_:1})]),_:1}))}},x={__name:"StepperBasic",setup(m){return(p,n)=>(u(),o(i(f),{items:["Step 1","Step 2","Step 3"]},{"item.1":t(()=>[e(r,{title:"Step One",flat:""},{default:t(()=>[_(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque praesentium tempora, ab temporibus repellat deserunt, qui vitae ex officiis commodi, incidunt dicta! Dolor perspiciatis quas, animi ipsam unde facere officiis? ")]),_:1})]),"item.2":t(()=>[e(r,{title:"Step Two",flat:""},{default:t(()=>[_(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit a blanditiis consequatur cum facilis harum, necessitatibus ipsam eaque reprehenderit voluptatum adipisci sit incidunt iusto aperiam illum consectetur, repellat, repudiandae aut. ")]),_:1})]),"item.3":t(()=>[e(r,{title:"Step Three",flat:""},{default:t(()=>[_(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, numquam tempora. Dolores praesentium repellat iste, voluptate eum ducimus hic illo eveniet commodi magnam officia quas nihil dolorum sapiente ab molestias. ")]),_:1})]),_:1}))}},C={__name:"StepperEditable",setup(m){return(p,n)=>(u(),o(i(f),null,{default:t(()=>[e(i(V),null,{default:t(()=>[e(i(a),{complete:"",editable:"",title:"Select campaign settings",value:"1"}),e(l),e(i(a),{complete:"",title:"Create an ad group",value:"2"}),e(l),e(i(a),{editable:"",title:"Create an ad",value:"3"})]),_:1})]),_:1}))}},D={__name:"StepperError",setup(m){return(p,n)=>(u(),o(i(f),{"model-value":"3"},{default:t(()=>[e(i(V),null,{default:t(()=>[e(i(a),{complete:"",title:"Job Search",value:"1"}),e(l),e(i(a),{rules:[()=>!1],title:"Application Submission",subtitle:"Missing Details",value:"2"}),e(l),e(i(a),{title:"Interview Process",value:"3"}),e(l),e(i(a),{title:"Hiring Decision",value:"4"})]),_:1})]),_:1}))}},q=`<script setup >
import { VStepper, VStepperHeader, VStepperItem } from 'vuetify/labs/VStepper'
<\/script>

<template>
  <VStepper alt-labels>
    <VStepperHeader>
      <VStepperItem
        value="1"
        title="Ad unit details"
      />

      <VDivider />

      <VStepperItem
        value="2"
        title="Ad sizes"
      />

      <VDivider />

      <VStepperItem
        value="3"
        title="Ad templates"
      />
    </VStepperHeader>
  </VStepper>
</template>
`,A=`<script setup >
import { VStepper } from 'vuetify/labs/VStepper'
<\/script>

<template>
  <VStepper :items="['Step 1', 'Step 2', 'Step 3']">
    <template #item.1>
      <VCard
        title="Step One"
        flat
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque praesentium tempora, ab temporibus repellat deserunt, qui vitae ex officiis commodi, incidunt dicta! Dolor perspiciatis quas, animi ipsam unde facere officiis?
      </VCard>
    </template>

    <template #item.2>
      <VCard
        title="Step Two"
        flat
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit a blanditiis consequatur cum facilis harum, necessitatibus ipsam eaque reprehenderit voluptatum adipisci sit incidunt iusto aperiam illum consectetur, repellat, repudiandae aut.
      </VCard>
    </template>

    <template #item.3>
      <VCard
        title="Step Three"
        flat
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, numquam tempora. Dolores praesentium repellat iste, voluptate eum ducimus hic illo eveniet commodi magnam officia quas nihil dolorum sapiente ab molestias.
      </VCard>
    </template>
  </VStepper>
</template>
`,H=`<script setup >
import { VStepper, VStepperHeader, VStepperItem } from 'vuetify/labs/VStepper'
<\/script>

<template>
  <VStepper>
    <VStepperHeader>
      <VStepperItem
        complete
        editable
        title="Select campaign settings"
        value="1"
      />

      <VDivider />

      <VStepperItem
        complete
        title="Create an ad group"
        value="2"
      />

      <VDivider />

      <VStepperItem
        editable
        title="Create an ad"
        value="3"
      />
    </VStepperHeader>
  </VStepper>
</template>
`,w=`<script setup >
import { VStepper, VStepperHeader, VStepperItem } from 'vuetify/labs/VStepper'
<\/script>

<template>
  <VStepper model-value="3">
    <VStepperHeader>
      <VStepperItem
        complete
        title="Job Search"
        value="1"
      />

      <VDivider />

      <VStepperItem
        :rules="[() => false]"
        title="Application Submission"
        subtitle="Missing Details"
        value="2"
      />

      <VDivider />

      <VStepperItem
        title="Interview Process"
        value="3"
      />

      <VDivider />

      <VStepperItem
        title="Hiring Decision"
        value="4"
      />
    </VStepperHeader>
  </VStepper>
</template>
`,j={__name:"index",setup(m){const p=[{title:"Home",disabled:!1,to:{path:"/"}},{title:"Components",disabled:!0},{title:"Stepper",disabled:!0}];return(n,B)=>{const S=v("ApiBtn");return u(),o(h,null,{default:t(()=>[e(s,{cols:"12",class:"d-flex align-center justify-space-between flex-wrap"},{default:t(()=>[e(I,{divider:"-",items:p,class:"pa-0"}),b("div",null,[e(S,{href:"https://vuetifyjs.com/en/components/steppers/",target:"_blank",rel:"noopener noreferrer"})])]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(r,{title:"Basic",variant:"text"},{default:t(()=>[e(d,null,{default:t(()=>[e(x)]),_:1}),e(c,{code:A},null,8,["code"])]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(r,{title:"Editable",variant:"text"},{default:t(()=>[e(d,null,{default:t(()=>[e(C)]),_:1}),e(c,{code:H},null,8,["code"])]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(r,{title:"Alternate",variant:"text"},{default:t(()=>[e(d,null,{default:t(()=>[e(g)]),_:1}),e(c,{code:q},null,8,["code"])]),_:1})]),_:1}),e(s,{cols:"12"},{default:t(()=>[e(r,{title:"Error",variant:"text"},{default:t(()=>[e(d,null,{default:t(()=>[e(D)]),_:1}),e(c,{code:w},null,8,["code"])]),_:1})]),_:1})]),_:1})}}};export{j as default};
