import{V as ae,W as ie,X as oe,n as ce,Y as le,Z as E,_ as S,$ as j,a0 as F,P as h,l as _,v as k,p as I,a1 as ue,a2 as fe,F as U,k as b,f as v,r as N,a as d,b as q,x as M,c as ye,t as de,a3 as ge,a4 as me}from"./props-DH5iaWS8.js";import{y as pe,g as Y}from"./index-CfOrKyLd.js";function xe(t,e,...r){var s=t,n=ce,i;ae(()=>{n!==(n=e())&&(i&&(le(i),i=null),i=oe(()=>n(s,...r)))},ie)}var be=Object.create,B=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,_e=Object.getOwnPropertyNames,Ce=Object.getPrototypeOf,Se=Object.prototype.hasOwnProperty,Ee=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Oe=(t,e,r,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of _e(e))!Se.call(t,n)&&n!==r&&B(t,n,{get:()=>e[n],enumerable:!(s=ve(e,n))||s.enumerable});return t},we=(t,e,r)=>(r=t!=null?be(Ce(t)):{},Oe(!t||!t.__esModule?B(r,"default",{value:t,enumerable:!0}):r,t)),Ae=Ee(t=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isEqual=function(){var e=Object.prototype.toString,r=Object.getPrototypeOf,s=Object.getOwnPropertySymbols?function(n){return Object.keys(n).concat(Object.getOwnPropertySymbols(n))}:Object.keys;return function(n,i){return function c(a,o,u){var f,g,l,y=e.call(a),P=e.call(o);if(a===o)return!0;if(a==null||o==null)return!1;if(u.indexOf(a)>-1&&u.indexOf(o)>-1)return!0;if(u.push(a,o),y!=P||(f=s(a),g=s(o),f.length!=g.length||f.some(function(O){return!c(a[O],o[O],u)})))return!1;switch(y.slice(8,-1)){case"Symbol":return a.valueOf()==o.valueOf();case"Date":case"Number":return+a==+o||+a!=+a&&+o!=+o;case"RegExp":case"Function":case"String":case"Boolean":return""+a==""+o;case"Set":case"Map":f=a.entries(),g=o.entries();do if(!c((l=f.next()).value,g.next().value,u))return!1;while(!l.done);return!0;case"ArrayBuffer":a=new Uint8Array(a),o=new Uint8Array(o);case"DataView":a=new Uint8Array(a.buffer),o=new Uint8Array(o.buffer);case"Float32Array":case"Float64Array":case"Int8Array":case"Int16Array":case"Int32Array":case"Uint8Array":case"Uint16Array":case"Uint32Array":case"Uint8ClampedArray":case"Arguments":case"Array":if(a.length!=o.length)return!1;for(l=0;l<a.length;l++)if((l in a||l in o)&&(l in a!=l in o||!c(a[l],o[l],u)))return!1;return!0;case"Object":return c(r(a),r(o),u);default:return!1}}(n,i,[])}}()});we(Ae());var Ne=t=>t.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"-").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");const he=t=>t.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),ke=t=>Ne(t.replace(/([A-Z])/g," $1").trim()),X=t=>he(ke(t)),T="storybook-stories-extractor-context";function K(t){let e=S(t.isExtracting),r=S(t.register);return{get isExtracting(){return e},get register(){return r}}}function Te(t){const{stories:e}=t,r=K({isExtracting:!0,register:s=>{e.set(s.exportName??X(s.name),s)}});E(T,r)}function je(){return j(T)||E(T,K({isExtracting:!1,register:()=>{}})),F(T)}const D="storybook-story-renderer-context";function Fe(t){let e=h(S(t.currentStoryExportName)),r=h(S(t.args)),s=h(S(t.storyContext));function n(i){k(e,i.currentStoryExportName,!0),k(r,i.args,!0),k(s,i.storyContext,!0)}return{get args(){return _(r)},get storyContext(){return _(s)},get currentStoryExportName(){return _(e)},set:n}}function Pe(){const t=Fe({currentStoryExportName:void 0,args:{},storyContext:{}});E(D,t)}function W(){return j(D)||Pe(),F(D)}const C="storybook-stories-template-snippet-context";function L(){let t=h(void 0);function e(r){k(t,r,!0)}return{get template(){return _(t)},set:e}}function Re(){return j(C)||E(C,L()),F(C).template}function He(t){j(C)||E(C,L()),F(C).set(t)}var Ue=de('<p>No story rendered. See <a href="https://github.com/storybookjs/addon-svelte-csf#defining-stories" target="_blank">the docs</a> on how to define stories.</p>');function Z(t,e){I(e,!0);const r=fe(e,["$$slots","$$events","$$legacy","children","name","exportName","play"]),s=e.exportName??X(e.name),n=je(),i=W(),c=Re(),a=ue(()=>!n.isExtracting&&i.currentStoryExportName===s);n.isExtracting&&n.register({children:e.children,name:e.name,exportName:s,play:e.play,...r});function o(l,y){y&&l.playFunction&&(l.playFunction.__play=y)}U(()=>{_(a)&&o(i.storyContext,e.play)});var u=b(),f=v(u);{var g=l=>{var y=b(),P=v(y);{var O=m=>{var w=b(),R=v(w);xe(R,()=>e.children,()=>i.args,()=>i.storyContext),d(m,w)},Q=(m,w)=>{{var R=p=>{c(p,()=>i.args,()=>i.storyContext)},V=(p,$)=>{{var ee=x=>{var A=b(),re=v(A);M(re,()=>i.storyContext.component,(ne,se)=>{se(ne,ye(()=>i.args))}),d(x,A)},te=x=>{var A=Ue();d(x,A)};N(p,x=>{i.storyContext.component?x(ee):x(te,!1)},$)}};N(m,p=>{c?p(R):p(V,!1)},w)}};N(P,m=>{e.children?m(O):m(Q,!1)})}d(l,y)};N(f,l=>{_(a)&&l(g)})}d(t,u),q()}Z.__docgen={data:[],name:"Story.svelte"};function Qe(t){return{Story:Z}}function J(t,e){I(e,!0),Te(e.repository());var r=b(),s=v(r);M(s,()=>e.Stories,(n,i)=>{i(n,{})}),d(t,r),q()}J.__docgen={data:[{name:"Stories",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"repository",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"() => StoriesRepository<Component<any>>"},static:!1,readonly:!1}],name:"StoriesExtractor.svelte"};function De(t){switch(typeof t){case"number":case"symbol":return!1;case"string":return t.includes(".")||t.includes("[")||t.includes("]")}}function Ie(t){return Object.is(t,-0)?"-0":t.toString()}function qe(t){const e=[],r=t.length;if(r===0)return e;let s=0,n="",i="",c=!1;for(t.charCodeAt(0)===46&&(e.push(""),s++);s<r;){const a=t[s];i?a==="\\"&&s+1<r?(s++,n+=t[s]):a===i?i="":n+=a:c?a==='"'||a==="'"?i=a:a==="]"?(c=!1,e.push(n),n=""):n+=a:a==="["?(c=!0,n&&(e.push(n),n="")):a==="."?n&&(e.push(n),n=""):n+=a,s++}return n&&e.push(n),e}function z(t,e,r){if(t==null)return r;switch(typeof e){case"string":{const s=t[e];return s===void 0?De(e)?z(t,qe(e),r):r:s}case"number":case"symbol":{typeof e=="number"&&(e=Ie(e));const s=t[e];return s===void 0?r:s}default:{if(Array.isArray(e))return Me(t,e,r);Object.is(e==null?void 0:e.valueOf(),-0)?e="-0":e=String(e);const s=t[e];return s===void 0?r:s}}}function Me(t,e,r){if(e.length===0)return r;let s=t;for(let n=0;n<e.length;n++){if(s==null)return r;s=s[e[n]]}return s===void 0?r:s}const{addons:Ye}=__STORYBOOK_MODULE_PREVIEW_API__,Be=Ye.getChannel(),Xe=t=>{const{storyContext:e}=t;if(Ke(e))return;const r=We({code:e.parameters.__svelteCsf.rawCode,args:t.args});setTimeout(()=>{Be.emit(pe,{id:e.id,args:e.unmappedArgs,source:r})})},Ke=t=>{var n;const e=(n=t==null?void 0:t.parameters.docs)==null?void 0:n.source,r=t==null?void 0:t.parameters.__isArgsStory;return(t==null?void 0:t.parameters.__svelteCsf.rawCode)?(e==null?void 0:e.type)===Y.DYNAMIC?!1:!r||(e==null?void 0:e.code)||(e==null?void 0:e.type)===Y.CODE:!0},We=({code:t,args:e})=>{const r=Object.entries(e??{}).map(([i,c])=>Ze(i,c)).filter(i=>i);let s=r.join(" ");return s.length>50&&(s=`
  ${r.join(`
  `)}
`),t.replaceAll("{...args}",s).replace(/args(?:[\w\d_$\.\?\[\]"'])+/g,i=>{const c=i.replaceAll("?",""),a=z({args:e},c);return G(a)})},Le=t=>{var r;const e=((r=t.getMockName)==null?void 0:r.call(t))??t.name;return e&&e!=="spy"?e:"() => {}"},G=t=>{var e;return typeof t=="object"&&t[Symbol.for("svelte.snippet")]?"snippet":typeof t=="function"?Le(t):(e=JSON.stringify(t,null,1))==null?void 0:e.replace(/\n/g,"").replace(new RegExp("(?<!\\s)([}\\]])$")," $1")},Ze=(t,e)=>{if(e==null)return null;if(e===!0)return t;const r=G(e);return typeof e=="string"?`${t}=${r}`:`${t}={${r}}`};function H(t,e){I(e,!0);const r=W();U(()=>{r.set({currentStoryExportName:e.exportName,args:e.args,storyContext:e.storyContext})}),U(()=>{Xe({args:e.args,storyContext:e.storyContext})});var s=b(),n=v(s);M(n,()=>e.Stories,(i,c)=>{c(i,{})}),d(t,s),q()}H.__docgen={data:[{name:"Stories",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"exportName",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"args",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"storyContext",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1}],name:"StoryRenderer.svelte"};const Je=document.createDocumentFragment?()=>document.createDocumentFragment():()=>document.createElement("div"),Ve=(t,e)=>{const r={stories:new Map};try{const n=ge(J,{target:Je(),props:{Stories:t,repository:()=>r}});me(n)}catch(n){console.error(`Error in mounting stories ${n.toString()}`,n)}const s={};for(const[n,i]of r.stories){const c={...i,render:(o,u)=>({Component:H,props:{exportName:n,Stories:t,storyContext:u,args:o}})},a=e.play??i.play;a&&(c.play=o=>{var f;const u=(f=o.playFunction)==null?void 0:f.__play;return u?u(o):a(o)}),s[n]=c}return s};export{xe as a,Ve as c,Qe as d,He as s};
