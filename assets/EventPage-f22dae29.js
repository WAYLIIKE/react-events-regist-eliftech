import{j as e,a as v,r as _,u as m,N as x,c as j,b as g,g as u,d as N,s as W}from"./index-a5cf4b59.js";import{C as w}from"./Container-d51a7551.js";import{b as y,c as f,s as k,d as b,S as l,I as T}from"./Skeleton-5cceb0b0.js";const E="_item_10orm_1",L="_logoWrapper_10orm_11",C="_logo_10orm_11",P="_logoWord_10orm_26",F="_infoWrapper_10orm_35",B="_name_10orm_41",I="_email_10orm_45",n={item:E,logoWrapper:L,logo:C,logoWord:P,infoWrapper:F,name:B,email:I},S=({participant:s})=>e.jsx("li",{className:n.item,children:e.jsxs("div",{className:n.logoWrapper,children:[e.jsx("div",{className:n.logo,children:e.jsx("p",{className:n.logoWord,children:s.name[0]})}),e.jsxs("div",{className:n.infoWrapper,children:[e.jsx("p",{className:n.name,children:s.name}),e.jsx("p",{className:n.email,children:s.email})]})]})}),D="_container_3wo6v_1",$="_title_3wo6v_6",O="_locWrapper_3wo6v_15",R="_location_3wo6v_21",q="_text_3wo6v_28",z="_backLink_3wo6v_33",U="_scrollWrapper_3wo6v_45",A="_list_3wo6v_53",G="_subTitle_3wo6v_62",H="_input_3wo6v_72",J="_mainWrapper_3wo6v_90",K="_empty_3wo6v_94",M="_emptyContent_3wo6v_101",Q="_emptyText_3wo6v_110",V="_link_3wo6v_118",t={container:D,title:$,locWrapper:O,location:R,text:q,backLink:z,scrollWrapper:U,list:A,subTitle:G,input:H,mainWrapper:J,empty:K,emptyContent:M,emptyText:Q,link:V},X=({eventId:s})=>{const a=v(),[o,d]=_.useState({}),p=m(y),h=m(f),i=m(k);return _.useEffect(()=>{(async()=>{try{const r=await a(g(s));await a(u(s)),d(r.payload)}catch(r){console.error("Error fetching event info:",r)}})()},[a,s,d]),e.jsxs("div",{className:t.container,children:[e.jsxs(x,{className:t.backLink,to:"/events",children:[e.jsx(b,{}),e.jsx("p",{children:"back to all events"})]}),i?e.jsx(l,{variant:"rounded",width:700,height:98,sx:{marginBottom:"30px"}}):e.jsxs("div",{className:t.mainWrapper,children:[e.jsx("h1",{className:t.title,children:o.name}),e.jsxs("div",{className:t.locWrapper,children:[e.jsx(T,{size:22,color:"whitesmoke"}),e.jsx("p",{className:t.location,children:o.location})]}),e.jsx("p",{className:t.text,children:o.description})]}),e.jsxs("div",{className:t.scrollWrapper,children:[i?e.jsx(l,{variant:"rounded",width:670,height:25,sx:{marginBottom:"20px"}}):e.jsx("h2",{className:t.subTitle,children:`${o.name} participants`}),i?e.jsx(l,{variant:"rounded",width:670,height:37.67,sx:{marginBottom:"20px"}}):h===""&&p.length===0?null:e.jsx("input",{type:"text",placeholder:"Find your colleague",className:t.input,onChange:c=>a(j(c.target.value))}),i?e.jsx(l,{variant:"rounded",width:1316,height:450}):p.length===0?h?e.jsx("div",{className:t.empty,children:e.jsx("p",{className:t.emptyContent,children:"There are no participants with this query"})}):e.jsxs("div",{className:t.empty,children:[e.jsx("p",{className:t.emptyContent,children:"There are no participants registred yet"}),e.jsx("p",{className:t.emptyText,children:"be the first participant"}),e.jsx(x,{className:t.link,to:`/events/${o._id}/register`,children:"register"})]}):e.jsx("ul",{className:t.list,children:p.map((c,r)=>e.jsx(S,{participant:c},r))})]})]})},te=()=>{const{eventId:s}=N(),a=v();return _.useEffect(()=>{a(W())},[a]),e.jsx("div",{children:e.jsx(w,{children:e.jsx(X,{eventId:s})})})};export{te as default};
