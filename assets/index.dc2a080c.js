import{j as h,s as p,r as u,S as f,a as b,R as _,b as v}from"./vendor.a27be15b.js";const x=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};x();const r=h.exports.jsx,o=h.exports.jsxs,y=h.exports.Fragment,w=a=>r(N,{onClick:()=>{localStorage.clear(),location.reload()},children:r("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",children:r("path",{fill:"currentColor",d:"M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z"})})}),N=p.button`
  width: 50px;
  height: 50px;
  padding: 10px;
  background-color: #fafafa;
  cursor: pointer;
  border-radius: 100%;
  color: #000;
  border: none;
  :hover {
    background-color: #f6ffa4;
  }
`,S=p.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;

  :active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }

  img {
    // border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%);
    padding: 20px;
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
  }
`,L=p.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  //   border-radius: 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`,k=({recipe:a})=>o(S,{children:[r("p",{children:a.title}),r("img",{src:a.image,alt:a.title}),r(L,{})]});const j=a=>{const[s,n]=u.exports.useState();u.exports.useEffect(()=>{i()},[]);const i=async()=>{const e=localStorage.getItem("popular_recipes");if(e)n(JSON.parse(e));else try{const d=(await(await fetch("https://api.spoonacular.com/recipes/random?apiKey=ff2ced53c0504537bb131ea772df6833&number=9")).json()).recipes;localStorage.setItem("popular_recipes",JSON.stringify(d)),n(d)}catch(t){console.log(t)}};return o(P,{children:[o("h2",{className:"popular__header",children:["Popular meals ",r(C,{children:"[styled components]"})]}),r(f,{options:{perPage:4,arrows:!1,pagination:!1,drag:"free",gap:"1rem"},children:s&&s.map(e=>r(b,{children:r(k,{recipe:e})},e.id))})]})},P=p.div`
  margin: 4rem 4rem;
  text-align: center;
  .popular__header {
    margin: 2rem 0;
  }
`,C=p.span`
  color: #8479e1;
`,O="_card_1nr76_1",H="_header_1nr76_10",I="_description_1nr76_18",A="_tags_1nr76_22",M="_vegetarian_1nr76_30";var l={card:O,header:H,description:I,tags:A,vegetarian:M};const z=({recipe:a})=>o("div",{className:l.card,children:[r("h3",{className:l.header,children:a.title}),r("div",{className:l.tags,children:r("span",{className:l.vegetarian,children:"vegetarian"})}),a.image?r("img",{src:a.image,alt:a.title}):"",r("div",{className:l.description,children:a.extendedIngredients.map(s=>r("p",{children:s.original},"veg"+Math.floor(Math.random()*999)+s.id))})]}),V="_wrapper_ugkd2_1",F="_cardList_ugkd2_4",B="_cardListHeader_ugkd2_12",E="_textHighlight_ugkd2_16";var g={wrapper:V,cardList:F,cardListHeader:B,textHighlight:E};const J=a=>{const[s,n]=u.exports.useState();u.exports.useEffect(()=>{i()},[]);const i=async()=>{const e=localStorage.getItem("vegetarian_recipes");if(e)n(JSON.parse(e));else try{const d=(await(await fetch("https://api.spoonacular.com/recipes/random?apiKey=ff2ced53c0504537bb131ea772df6833&number=20&tags=vegetarian")).json()).recipes;localStorage.setItem("vegetarian_recipes",JSON.stringify(d)),n(d)}catch(t){console.log(t)}};return o("div",{className:g.wrapper,children:[o("h2",{className:g.cardListHeader,children:["Vegetarian meals"," ",r("span",{className:g.textHighlight,children:"[css modules]"})]}),r("div",{className:g.cardList,children:s&&s.map(e=>r(z,{recipe:e},e.id))})]})},R=a=>o(y,{children:[r(j,{}),r(J,{})]});function K(){return o("div",{className:"App",children:[o("header",{style:{margin:"4rem",fontSize:"2rem",display:"flex",justifyContent:"space-between"},className:"App-header",children:["Pulmonaria\u{1F33C}",r(w,{})]}),r("div",{className:"App-wrapper",children:r(R,{})})]})}_.render(r(v.StrictMode,{children:r(K,{})}),document.getElementById("root"));
