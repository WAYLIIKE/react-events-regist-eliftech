import{j as s,N as a,u as o,a as l,r as p,f as _}from"./index-a5cf4b59.js";import{I as d,s as m,S as x,a as j}from"./Skeleton-5cceb0b0.js";import{C as h}from"./Container-d51a7551.js";const N={},u="_item_1ij31_1",v="_title_1ij31_13",g="_wrapper_1ij31_19",f="_locWrapper_1ij31_25",k="_location_1ij31_31",E="_description_1ij31_37",W="_link_1ij31_43",t={item:u,title:v,wrapper:g,locWrapper:f,location:k,description:E,link:W},w=({event:e})=>s.jsxs("li",{className:t.item,children:[s.jsxs("div",{className:t.wrapper,children:[s.jsx("h2",{className:t.title,children:e.name}),s.jsxs("div",{className:t.locWrapper,children:[s.jsx(d,{size:22,color:"whitesmoke"}),s.jsx("p",{className:t.location,children:e.location})]})]}),s.jsx("p",{className:t.description,children:e.description}),s.jsx(a,{className:t.link,to:`/events/${e._id}/register`,children:"Register"}),s.jsx(a,{className:t.link,to:`/events/${e._id}`,children:"View"})]}),L="_container_c0o24_1",$="_scrollWrapper_c0o24_7",I="_list_c0o24_17",R="_title_c0o24_25",i={container:L,scrollWrapper:$,list:I,title:R},S=({events:e})=>{const c=o(m);return s.jsx("div",{className:i.container,children:s.jsxs("div",{className:i.scrollWrapper,children:[s.jsx("h1",{className:i.title,children:"All upcoming events"}),c?Array.from({length:3}).map((n,r)=>s.jsx(x,{variant:"rounded",width:"calc(100% - 28px)",height:136,sx:{borderRadius:"20px",margin:"10px",marginTop:"30px",marginBottom:"35px"}},r)):s.jsx("ul",{className:i.list,children:e.map((n,r)=>s.jsx(w,{event:n},r))})]})})},y=()=>{const e=l(),c=o(j);return p.useEffect(()=>{e(_())},[e]),s.jsx("div",{className:N.container,children:s.jsx(h,{children:s.jsx(S,{events:c})})})};export{y as default};
