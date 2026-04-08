import{i as Xe,g as _e,o as Je,b as Ke,E as Qe,B as Ze,c as z,l as xe,u as P,a as ne,d as $e,N as et,e as tt,f as it,r as nt,q as ot,S as at,h as rt,j as st,k as ue,m,n as lt,p as ct,s as dt,t as k,v as j,w as Q,x as oe,y as h,z as B,A as W,C as U,D as H,F as Ce,G as Te,H as pe,I as O,J as Ee,K as Me,L as J,M as S,O as E,P as se,Q as ee,R as te,T as pt,U as me,V as ut,W as mt,X as fe,Y as ft}from"./iframe-Dcybs4O-.js";import"./preload-helper-C1FmrZbK.js";const yt=[];function ae(e,t=!1,i=!1){return Z(e,new Map,"",yt,null,i)}function Z(e,t,i,n,o=null,a=!1){if(typeof e=="object"&&e!==null){var s=t.get(e);if(s!==void 0)return s;if(e instanceof Map)return new Map(e);if(e instanceof Set)return new Set(e);if(Xe(e)){var r=Array(e.length);t.set(e,r),o!==null&&t.set(o,r);for(var l=0;l<e.length;l+=1){var p=e[l];l in e&&(r[l]=Z(p,t,i,n,null,a))}return r}if(_e(e)===Je){r={},t.set(e,r),o!==null&&t.set(o,r);for(var y of Object.keys(e))r[y]=Z(e[y],t,i,n,null,a);return r}if(e instanceof Date)return structuredClone(e);if(typeof e.toJSON=="function"&&!a)return Z(e.toJSON(),t,i,n,e)}if(e instanceof EventTarget)return e;try{return structuredClone(e)}catch{return e}}function K(e,t,...i){var n=new Ze(e);Ke(()=>{const o=t()??null;n.ensure(o,o&&(a=>o(a,...i)))},Qe)}function Se(e){z===null&&xe(),$e&&z.l!==null?ht(z).m.push(e):P(()=>{const t=ne(e);if(typeof t=="function")return t})}function gt(e){z===null&&xe(),Se(()=>()=>ne(e))}function ht(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}function Ae(e){var t,i,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(i=Ae(e[t]))&&(n&&(n+=" "),n+=i)}else for(i in e)e[i]&&(n&&(n+=" "),n+=i);return n}function bt(){for(var e,t,i=0,n="",o=arguments.length;i<o;i++)(e=arguments[i])&&(t=Ae(e))&&(n&&(n+=" "),n+=t);return n}function vt(e){return typeof e=="object"?bt(e):e??""}function kt(e,t,i){var n=e==null?"":""+e;return n===""?null:n}function wt(e,t,i,n,o,a){var s=e.__className;if(s!==i||s===void 0){var r=kt(i);r==null?e.removeAttribute("class"):e.className=r,e.__className=i}return a}const _t=Symbol("is custom element"),xt=Symbol("is html");function ye(e,t,i,n){var o=Ct(e);o[t]!==(o[t]=i)&&(i==null?e.removeAttribute(t):typeof i!="string"&&Tt(e).includes(t)?e[t]=i:e.setAttribute(t,i))}function Ct(e){return e.__attributes??(e.__attributes={[_t]:e.nodeName.includes("-"),[xt]:e.namespaceURI===et})}var ge=new Map;function Tt(e){var t=e.getAttribute("is")||e.nodeName,i=ge.get(t);if(i)return i;ge.set(t,i=[]);for(var n,o=e,a=Element.prototype;a!==o;){n=tt(o);for(var s in n)n[s].set&&i.push(s);o=_e(o)}return i}function he(e,t){return e===t||(e==null?void 0:e[at])===t}function re(e={},t,i,n){return it(()=>{var o,a;return nt(()=>{o=a,a=[],ne(()=>{e!==i(...a)&&(t(e,...a),o&&he(i(...o),e)&&t(null,...o))})}),()=>{ot(()=>{a&&he(i(...a),e)&&t(null,...a)})}}),e}function Et(e=!1){const t=z,i=t.l.u;if(!i)return;let n=()=>lt(t.s);if(e){let o=0,a={};const s=ct(()=>{let r=!1;const l=t.s;for(const p in l)l[p]!==a[p]&&(a[p]=l[p],r=!0);return r&&o++,o});n=()=>m(s)}i.b.length&&rt(()=>{be(t,n),ue(i.b)}),P(()=>{const o=ne(()=>i.m.map(st));return()=>{for(const a of o)typeof a=="function"&&a()}}),i.a.length&&P(()=>{be(t,n),ue(i.a)})}function be(e,t){if(e.l.s)for(const i of e.l.s)m(i);t()}dt();const Mt=["Activate","AddUndo","BeforeAddUndo","BeforeExecCommand","BeforeGetContent","BeforeRenderUI","BeforeSetContent","BeforePaste","Blur","Change","ClearUndos","Click","CommentChange","CompositionEnd","CompositionStart","CompositionUpdate","ContextMenu","Copy","Cut","Dblclick","Deactivate","Dirty","Drag","DragDrop","DragEnd","DragGesture","DragOver","Drop","ExecCommand","Focus","FocusIn","FocusOut","GetContent","Hide","Init","Input","KeyDown","KeyPress","KeyUp","LoadContent","MouseDown","MouseEnter","MouseLeave","MouseMove","MouseOut","MouseOver","MouseUp","NodeChange","ObjectResizeStart","ObjectResized","ObjectSelected","Paste","PostProcess","PostRender","PreProcess","ProgressState","Redo","Remove","Reset","ResizeEditor","SaveContent","SelectionChange","SetAttrib","SetContent","Show","Submit","Undo","VisualAid"],St=(e,t)=>{Mt.forEach(i=>{e.on(i,n=>{var o;(o=t[i.toLowerCase()])==null||o.call(t,n,e)})})},qe=e=>e+"_"+Math.floor(Math.random()*1e9)+String(Date.now()),At=e=>typeof e.options.set=="function"&&e.options.isRegistered("disabled"),qt=()=>{let e={listeners:[],scriptId:qe("tiny-script"),scriptLoaded:!1,injected:!1};const t=(n,o,a,s)=>{e.injected=!0;const r=o.createElement("script");r.referrerPolicy="origin",r.type="application/javascript",r.src=a,r.onload=()=>{s()},o.head&&o.head.appendChild(r)};return{load:(n,o,a)=>{e.scriptLoaded?a():(e.listeners.push(a),e.injected||t(e.scriptId,n,o,()=>{e.listeners.forEach(s=>s()),e.scriptLoaded=!0}))}}};let jt=qt();var Nt=j("<div></div>"),Pt=j('<textarea style="visibility:hidden"></textarea>'),It=j("<div><!></div>");function ie(e,t){W(t,!0);let i=k(t,"id",19,()=>qe("tinymce-svelte")),n=k(t,"inline",3,void 0),o=k(t,"disabled",3,!1),a=k(t,"readonly",3,!1),s=k(t,"apiKey",3,"no-api-key"),r=k(t,"licenseKey",3,void 0),l=k(t,"channel",3,"8"),p=k(t,"scriptSrc",3,void 0),y=k(t,"conf",19,()=>({})),M=k(t,"modelEvents",3,"change input undo redo"),f=k(t,"value",15,""),N=k(t,"text",15,""),v=k(t,"cssClass",3,"tinymce-wrapper"),C=Ce(t,["$$slots","$$events","$$legacy","id","inline","disabled","readonly","apiKey","licenseKey","channel","scriptSrc","conf","modelEvents","value","text","cssClass"]),R,A,T=U(void 0),I=ae(f()),G=ae(o()),V=ae(a());const Y=(c,d)=>{var u;typeof((u=c.mode)==null?void 0:u.set)=="function"&&c.mode.set(d?"readonly":"design")},X=(c,d)=>{At(c)?c.options.set("disabled",d):c.mode.set(d?"readonly":"design")};P(()=>{m(T)&&I!==f()&&(m(T).setContent(f()),N(m(T).getContent({format:"text"}))),m(T)&&a()!==V&&(V=a(),Y(m(T),a())),m(T)&&o()!==G&&(G=o(),X(m(T),o()))});const g=()=>{const d=typeof window<"u"?window:global;return d&&d.tinymce?d.tinymce:null},b=()=>{var d;const c={...y(),target:A,inline:n()!==void 0?n():y().inline!==void 0?y().inline:!1,license_key:r(),setup:u=>{u.on("PreInit",()=>{X(u,o()),Y(u,a())}),H(T,u,!0),u.on("init",()=>{u.setContent(f()),u.on(M(),()=>{I=u.getContent(),I!==f()&&(f(I),N(u.getContent({format:"text"})))})}),St(u,C),typeof y().setup=="function"&&y().setup(u)}};A.style.visibility="",(d=g())==null||d.init(c)};Se(()=>{if(g()!==null)b();else{const c=p()?p():`https://cdn.tiny.cloud/1/${s()}/tinymce/${l()}/tinymce.min.js`;jt.load(R.ownerDocument,c,()=>{b()})}}),gt(()=>{var c;m(T)&&((c=g())==null||c.remove(m(T)))});var _=It(),D=Te(_);{var F=c=>{var d=Nt();re(d,u=>A=u,()=>A),oe(()=>ye(d,"id",i())),h(c,d)},L=c=>{var d=Pt();re(d,u=>A=u,()=>A),oe(()=>ye(d,"id",i())),h(c,d)};Q(D,c=>{n()?c(F):c(L,-1)})}re(_,c=>R=c,()=>R),oe(()=>wt(_,1,vt(v()))),h(e,_),B()}ie.__docgen={data:[{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"inline",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"readonly",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"apiKey",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"no-api-key"'},{name:"licenseKey",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"channel",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"4",text:'"4"'},{kind:"const",type:"string",value:"5",text:'"5"'},{kind:"const",type:"string",value:"6",text:'"6"'},{kind:"const",type:"string",value:"7",text:'"7"'},{kind:"const",type:"string",value:"8",text:'"8"'},{kind:"const",type:"string",value:"4-dev",text:'"4-dev"'},{kind:"const",type:"string",value:"4-testing",text:'"4-testing"'},{kind:"const",type:"string",value:"5-dev",text:'"5-dev"'},{kind:"const",type:"string",value:"5-testing",text:'"5-testing"'},{kind:"const",type:"string",value:"6-dev",text:'"6-dev"'},{kind:"const",type:"string",value:"6-testing",text:'"6-testing"'},{kind:"const",type:"string",value:"7-dev",text:'"7-dev"'},{kind:"const",type:"string",value:"7-testing",text:'"7-testing"'},{kind:"const",type:"string",value:"8-dev",text:'"8-dev"'},{kind:"const",type:"string",value:"8-testing",text:'"8-testing"'}],text:'"4" | "5" | "6" | "7" | "8" | "4-dev" | "4-testing" | "5-dev" | "5-testing" | "6-dev" | "6-testing" | "7-dev" | "7-testing" | "8-dev" | "8-testing"'},static:!1,readonly:!1,defaultValue:'"8"'},{name:"scriptSrc",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"conf",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"RawEditorOptions"},static:!1,readonly:!1,defaultValue:"{}"},{name:"modelEvents",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"change input undo redo"'},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"text",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"cssClass",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"tinymce-wrapper"'},{name:"activate",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"addundo",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"beforeaddundo",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"beforeexeccommand",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"beforegetcontent",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"beforerenderui",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"beforesetcontent",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"beforepaste",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"blur",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"change",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"clearundos",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"click",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"commentchange",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"compositionend",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"compositionstart",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"compositionupdate",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"contextmenu",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"copy",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"cut",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"dblclick",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"deactivate",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"dirty",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"drag",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"dragdrop",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"dragend",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"draggesture",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"dragover",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"drop",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"execcommand",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"focus",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"focusin",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"focusout",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"getcontent",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"hide",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"init",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1,defaultValue:"function"},{name:"input",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"keydown",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"keypress",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"keyup",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"loadcontent",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"mousedown",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"mouseenter",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"mouseleave",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"mousemove",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"mouseout",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"mouseover",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"mouseup",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"nodechange",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"objectresizestart",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"objectresized",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"objectselected",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"paste",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"postprocess",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"postrender",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"preprocess",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"progressstate",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"redo",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"remove",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"reset",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"resizeeditor",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"savecontent",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"selectionchange",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"setattrib",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"setcontent",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"show",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"submit",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"undo",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1},{name:"visualaid",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"(event: any, editor: TinyMCE) => void"},static:!1,readonly:!1}],name:"Editor.svelte"};const Ot="https://tinymce-ai-jwt.onrender.com",Rt={config:{tinymceai_token_provider:()=>fetch(`${Ot}/jwt`,{method:"POST",headers:{"Content-Type":"application/json"}}).then(e=>e.json()),content_id:"render_doc_1",tinymceai_sidebar_type:"static",tinymceai_default_model:"auto",tinymceai_allow_model_selection:!0,tinymceai_quickactions_menu:["ai-quickactions-chat-prompts","ai-quickactions-improve-writing","ai-quickactions-continue-writing","ai-quickactions-check-grammar","ai-quickactions-change-length","ai-quickactions-change-tone","ai-quickactions-translate","ai-quickactions-custom"],tinymceai_quickactions_chat_prompts:["ai-chat-explain","ai-chat-summarize","ai-chat-highlight-key-points"],tinymceai_quickactions_change_tone_menu:["ai-quickactions-tone-casual","ai-quickactions-tone-direct","ai-quickactions-tone-friendly","ai-quickactions-tone-confident","ai-quickactions-tone-professional"],tinymceai_languages:[{title:"English",language:"english"},{title:"Chinese (Simplified)",language:"chinese"},{title:"Spanish",language:"spanish"},{title:"German",language:"german"},{title:"Japanese",language:"japanese"},{title:"Portuguese",language:"portuguese"},{title:"Korean",language:"korean"},{title:"Italian",language:"italian"},{title:"Russian",language:"russian"},{title:"French",language:"french"}],tinymceai_quickactions_custom:[{type:"chat",title:"Generate Outline",prompt:"Create a detailed outline for the selected content"},{type:"action",title:"Convert to Table",prompt:"Convert this data into an HTML table",model:"gpt-4.1"},{type:"chat",title:"Explain Like I'm 5",prompt:"Explain the selected content as if I am a 5 year old child"}],tinymceai_chat_welcome_message:"<p><strong>Welcome to AI Chat!</strong></p><p>I can help you write, edit, review, and brainstorm. Ask me anything or use the quick actions above.</p>",tinymceai_chat_fetch_sources:()=>(console.log("[tinymceai] tinymceai_chat_fetch_sources called"),Promise.resolve([{label:"Sample Documents",icon:"document-properties",sources:[{label:"Company Guidelines",id:"doc-guidelines",type:"web-resource"},{label:"Product Roadmap",id:"doc-roadmap",type:"file"},{label:"FAQ Document",id:"doc-faq",type:"web-resource"}]}])),tinymceai_chat_fetch_source:e=>{if(console.log("[tinymceai] tinymceai_chat_fetch_source called with id:",e),e==="doc-guidelines")return Promise.resolve({type:"web-resource",url:"https://www.tiny.cloud"});if(e==="doc-roadmap"){const t=new Blob(["Sample roadmap content for testing"],{type:"text/plain"}),i=new File([t],"roadmap.txt",{type:"text/plain"});return Promise.resolve({type:"file",file:i})}else return Promise.resolve({type:"web-resource",url:"https://www.tiny.cloud/docs"})}},toolbar:"tinymceai-chat tinymceai-review tinymceai-quickactions",name:"tinymceai"},Dt=[{id:"1",title:"Quick replies",items:[{id:"2",title:"Message received",content:`<p dir="ltr">Hey {{Customer.FirstName}}!</p>
<p dir="ltr">Just a quick note to say we&rsquo;ve received your message, and will get back to you within 48 hours.</p>
<p dir="ltr">For reference, your ticket number is: {{Ticket.Number}}</p>
<p dir="ltr">Should you have any questions in the meantime, just reply to this email and it will be attached to this ticket.</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Regards,</p>
<p dir="ltr">{{Agent.FirstName}}</p>`},{id:"3",title:"Thanks for the feedback",content:`<p dir="ltr">Hi {{Customer.FirstName}},</p>
<p dir="ltr">We appreciate you taking the time to provide feedback on {{Product.Name}}.</p>
<p dir="ltr">It sounds like it wasn&rsquo;t able to fully meet your expectations, for which we apologize. Rest assured our team looks at each piece of feedback and uses it to decide what to focus on next with {{Product.Name}}.</p>
<p dir="ltr"><strong>&nbsp;</strong></p>
<p dir="ltr">All the best, and let us know if there&rsquo;s anything else we can do to help.</p>
<p dir="ltr">-{{Agent.FirstName}}</p>`},{id:"6",title:"Still working on case",content:`<p dir="ltr"><img src="https://lh4.googleusercontent.com/-H7w_COxrsy2fVpjO6RRnoBsujhaLyg6AXux5zidqmQ_ik1mrE6BtnaTUdWYQuVbtKpviRqQiuPBOHNGUsEXvrRliEHc4-hKDrCLgQQ9Co-MI4uY2ehUvYtU1nn3EeS0WiUzST-7MQB2Z5YFXrMDwRk" width="320" height="240"></p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Hi {{Customer.FirstName}},</p>
<p dir="ltr">Just a quick note to let you know we&rsquo;re still working on your case. It&rsquo;s taking a bit longer than we hoped, but we&rsquo;re aiming to get you an answer in the next 48 hours.</p>
<p dir="ltr">Stay tuned,</p>
<p dir="ltr">{{Agent.FirstName}}</p>`}]},{id:"4",title:"Closing tickets",items:[{id:"7",title:"Closing ticket",content:`<p dir="ltr">Hi {{Customer.FirstName}},</p>
<p dir="ltr">We haven&rsquo;t heard back from you in over a week, so we have gone ahead and closed your ticket number {{Ticket.Number}}.</p>
<p dir="ltr">If you&rsquo;re still running into issues, not to worry, just reply to this email and we will re-open your ticket.</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">All the best,</p>
<p dir="ltr">{{Agent.FirstName}}</p>`},{id:"8",title:"Post-call survey",content:`<p dir="ltr">Hey {{Customer.FirstName}}!</p>
<p dir="ltr">&nbsp;</p>
<p dir="ltr">How did we do?</p>
<p dir="ltr">If you have a few moments, we&rsquo;d love you to fill out our post-support survey: {{Survey.Link}}</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Thanks in advance!<br>{{Company.Name}} Customer Support</p>`}]},{id:"5",title:"Product support",items:[{id:"9",title:"How to find model number",content:`<p dir="ltr">Hi {{Customer.FirstName}},</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">My name is {{Agent.FirstName}} and I will be glad to assist you today.</p>
<p dir="ltr">To troubleshoot your issue, we first need your model number, which can be found on the underside of your product beneath the safety warning label.&nbsp;</p>
<p dir="ltr">It should look something like the following: XX.XXXXX.X</p>
<p dir="ltr">Once you send it over, I will advise on next steps.</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Thanks!</p>
<p dir="ltr">{{Agent.FirstName}}</p>`},{id:"10",title:"Support escalation",content:`<p dir="ltr"><img src="https://lh3.googleusercontent.com/z4hleIymnERrS9OQQMBwmkqVne8kYZA0Kly9Ny64pp4fi47CWWUy30Q0-UkjGf-K-50zrfR-wltHUTbExzZ7VUSUAUG60Fll5f2E0UZcKjKoa-ZVlIcuOoe-RRckFWqiihUOfVds7pXtM8Y59uy2hpw" width="295" height="295"></p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Hi {{Customer.FirstName}},</p>
<p dir="ltr">We have escalated your ticket {{Ticket.Number}} to second-level support.</p>
<p dir="ltr">You should hear back from the new agent on your case, {{NewAgent.FirstName}}, shortly.</p>
<p><strong>&nbsp;</strong></p>
<p dir="ltr">Thanks,</p>
<p dir="ltr">{{Company.Name}} Customer Support</p>`}]},{id:"6",title:"Email Signatures",items:[{id:"11",title:"Tiny Signature",content:'<p>Regards<br /><br /><br /><a title="Tiny Technologies Inc" href="https://www.tiny.cloud/" target="_blank"><img src="https://www.tiny.cloud/email-static/tiny-logo.png" alt="Tiny Technologies Inc" width="130" height="42" /></a></p><p>Shiridi Gandham<br />QA Template Manager</p><p>Email:&nbsp;<a title="Email Shiridi" href="mailto:shiridi.gandham@tiny.cloud" target="_blank">shiridi.gandham@tiny.cloud</a><br />Phone:&nbsp;(+617) 3161 3557</p><p>Tiny Technologies<br /><a title="Tiny Technologies" href="https://www.tiny.cloud/" target="_blank">www.tiny.cloud</a></p><p><a title="Linkedin" href="https://www.linkedin.com/company/jointiny/" target="_blank" aria-invalid="true"><img src="https://www.tiny.cloud/email-static/social-linkedin.png" alt="Linkedin" width="20" height="20" /></a>&nbsp;<a title="Facebook" href="https://www.facebook.com/jointiny" target="_blank"><img src="https://www.tiny.cloud/email-static/social-facebook.png" alt="Facebook" width="20" height="20" /></a>&nbsp;<a title="Twitter" href="https://twitter.com/joinTiny" target="_blank"><img src="https://www.tiny.cloud/email-static/social-twitter.png" alt="Twitter" width="20" height="20" /></a>&nbsp;<a title="GitHub" href="https://github.com/tinymce/" target="_blank"><img src="https://www.tiny.cloud/email-static/social-github.png" alt="GitHub" width="20" height="20" /></a>&nbsp;<a title="Stack Overflow" href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank"><img src="https://www.tiny.cloud/email-static/social-stackoverflow.png" alt="Stack Overflow" width="20" height="20" /></a></p>'}]}],Ft={toolbar:"addtemplate inserttemplate",name:"advtemplate",config:{advtemplate_templates:Dt}},Lt={name:"accordion",toolbar:"accordion",config:{}},Ut=[{value:"Current.Date",title:"Current date in DD/MM/YYYY format"},{value:"Campaign.Toc",title:"Linked table of contents in your campaign"},{title:"Phone",menu:[{value:"Phone.Home"},{value:"Phone.work"}]},{title:"Person",menu:[{value:"Person.Name"},{value:"Person.Name.First"},{value:"Person.Name.Last"},{value:"Person.Name.Full"},{title:"Email",menu:[{value:"Person.Email.Work"},{value:"Person.Email.Home"}]}]}],Ht={toolbar:"mergetags",name:"mergetags",config:{mergetags_prefix:"${",mergetags_suffix:"}",mergetags_list:Ut}},je="https://demouserdirectory.tiny.cloud/v1/users",zt=async(e,t)=>{const i=e.term.toLowerCase();await fetch(`${je}?q=${encodeURIComponent(i)}`).then(n=>n.json()).then(n=>t(n.data.map(o=>({id:o.id,name:o.name,image:o.avatar,description:o.custom.role})))).catch(n=>console.log(n))},Bt=(e,t)=>{const i=e.getDoc().createElement("span");return i.className="mymention",i.setAttribute("data-mention-id",t.id),i.appendChild(e.getDoc().createTextNode("@"+t.name)),i},Ne=e=>{const t=document.createElement("div");return t.innerHTML='<div class="card"><img class="avatar" src="'+e.image+'"><h1>'+e.name+"</h1><p>"+e.description+"</p></div>",t},Wt=async(e,t)=>{const i=Ne(e);t(i)},Gt=async(e,t)=>{const i=e.getAttribute("data-mention-id");await fetch(`${je}/${i}`).then(n=>n.json()).then(n=>{const o=Ne({id:n.id,name:n.name,image:n.avatar,description:n.custom.role});t(o)}).catch(n=>console.error(n))},Vt={toolbar:"mentions",name:"mentions",config:{mentions_fetch:zt,mentions_menu_complete:Bt,mentions_menu_hover:Wt,mentions_select:Gt,mentions_selector:".mymention",mentions_item_type:"profile",mentions_min_chars:0}},q="james-wilson",x={},Yt=(e,t,i)=>{if(e.content==="fail")i(new Error("Something has gone wrong..."));else{const n="annotation-"+Pe();x[n]={uid:n,comments:[{uid:n,author:q,authorName:"James Wilson",authorAvatar:"https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg",content:e.content,createdAt:e.createdAt,modifiedAt:e.createdAt}]},setTimeout(()=>t({conversationUid:n}),w)}},w=200,Pe=()=>crypto.getRandomValues(new Uint32Array(1))[0].toString(36).substring(2,14),Xt=(e,t)=>{const i="annotation-"+Pe();x[e.conversationUid].comments.push({uid:i,author:q,authorName:"James Wilson",authorAvatar:"https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg",content:e.content,createdAt:e.createdAt,modifiedAt:e.createdAt}),setTimeout(()=>t({commentUid:i}),w)},Jt=(e,t)=>{setTimeout(()=>t({canDelete:!1,reason:"Must be admin user"}),w)},Kt=(e,t)=>{const i=x[e.conversationUid];q===i.comments[0].author?(delete x[e.conversationUid],setTimeout(()=>t({canResolve:!0}),w)):setTimeout(()=>t({canResolve:!1,reason:"Must be conversation author"}),w)},Qt=(e,t)=>{const i=x[e.conversationUid].comments;let n="Comment not found";const o=i.filter(a=>{if(a.uid===e.commentUid){if(q===a.author)return!1;n="Not authorised to delete this comment"}return!0});o.length===i.length?setTimeout(()=>t({canDelete:!1,reason:n}),w):(x[e.conversationUid].comments=o,setTimeout(()=>t({canDelete:!0}),w))},Zt=(e,t)=>{const i=x[e.conversationUid].comments;let n="Comment not found",o=!1;const a=i.map(s=>{if(s.uid===e.commentUid){if(q===s.author)return o=!0,{...s,content:e.content,modifiedAt:new Date().toISOString()};n="Not authorised to edit this comment"}return s});o?(x[e.conversationUid].comments=a,setTimeout(()=>t({canEdit:o}),w)):setTimeout(()=>t({canEdit:o,reason:n}),w)},$t=(e,t)=>{const i=x[e.conversationUid];q===i.comments[0].author?(delete x[e.conversationUid],setTimeout(()=>t({canDelete:!0}),w)):setTimeout(()=>t({canDelete:!1,reason:"Must be conversation author"}),w)},ei=(e,t)=>{setTimeout(()=>{t({conversation:{uid:x[e.conversationUid].uid,comments:[...x[e.conversationUid].comments]}})},w)},ti=(e,t)=>{const i={};e.forEach(n=>{const o=x[n];o&&(i[n]={...o})}),setTimeout(()=>t({conversations:i}),w)},ii={toolbar:"comments",name:"tinycomments",config:{tinycomments_mode:"callback",tinycomments_mentions_enabled:!0,tinycomments_create:Yt,tinycomments_reply:Xt,tinycomments_delete:Jt,tinycomments_resolve:Kt,tinycomments_delete_all:$t,tinycomments_lookup:ei,tinycomments_delete_comment:Qt,tinycomments_edit_comment:Zt,tinycomments_fetch:ti,tinycomments_author:q,tinycomments_author_name:"James Wilson",tinycomments_avatar:"https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg",tinycomments_fetch_author_info:e=>{setTimeout(()=>e({author:q,authorName:"James Wilson",authorAvatar:"https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg"}),w)}}},ni={toolbar:"numlist bullist",name:"advlist",config:{advlist_number_styles:"default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman",advlist_bullet_styles:"default,circle,disc,square"}},oi={history:{2:[{id:1,uid:"james-wilson",timestamp:1752576936e3,feedback:"Nice improvement!"}]},version:1,contents:[{type:"p",children:[{type:"img",attrs:{style:"display: block; margin-left: auto; margin-right: auto;",title:"Tiny Logo",src:"https://www.tiny.cloud/docs/images/logos/android-chrome-256x256.png",alt:"TinyMCE Logo",width:"128",height:"128"}}]},{type:"h2",attrs:{style:"text-align: center;"},children:[{text:"Welcome to the TinyMCE Suggested Edits "},{text:"interactive ",opData:{id:1,type:"insert",uid:"alex-thompson",timestamp:1752015064e3}},{text:"demo!"}]},{type:"p",attrs:{style:"text-align: center;"},children:[{text:"Try out the Suggested Edits feature"},{text:": type in the editor, apply formatting or delete some content. T",opData:{id:2,type:"insert",uid:"alex-thompson",timestamp:1752415064e3}},{text:" by typing in the editor and t",opData:{id:2,type:"remove",uid:"alex-thompson",timestamp:1752415064e3}},{text:"hen"},{text:",",opData:{id:3,type:"insert",uid:"alex-thompson",timestamp:1752515064e3}},{text:" click"},{text:"ing",opData:{id:4,type:"remove",uid:"alex-thompson",timestamp:1752515064e3}},{text:" the Review Changes button in the toolbar"},{text:" to see your changes",opData:{id:5,type:"insert",uid:"kai-nakamura",timestamp:1752615064e3}},{text:"."}]},{type:"p",attrs:{style:"text-align: center;"},children:[{text:"And visit the "},{text:"pricing page",opData:{id:6,type:"modify",uid:"kai-nakamura",timestamp:1752615064e3},format:[{type:"a",attrs:{href:"https://www.tiny.cloud/pricing"}}],oldFormat:[{type:"a",attrs:{href:"https://www.tiny.cloud/pricing"}},"em"]},{text:" to learn more about our Premium plugins."}]},{type:"h2",children:[{text:"A simple table to play with"}]},{type:"table",attrs:{style:"border-collapse: collapse; width: 100%;",border:"1"},children:[{type:"thead",children:[{type:"tr",attrs:{style:"text-align: left;"},children:[{type:"th",children:[{text:"Product"}]},{type:"th",children:[{text:"Cost"}]},{type:"th",children:[{text:"Really?"}]}]}]},{type:"tbody",children:[{type:"tr",children:[{type:"td",children:[{text:"TinyMCE Cloud"}]},{type:"td",children:[{text:"Get started for free"}]},{type:"td",children:[{text:"Yes!",format:["strong"]}]}]},{type:"tr",children:[{type:"td",children:[{text:"Plupload"}]},{type:"td",children:[{text:"Free"}]},{type:"td",children:[{text:"Yes!",format:["strong"]}]}]}]}]},{type:"h2",opData:{id:7,type:"insert",uid:"mia-andersson",timestamp:1752576331e3},children:[{text:"Found a bug?"}]},{type:"p",children:[{text:" ",opData:{id:7,type:"remove",uid:"mia-andersson",timestamp:1752576331e3}},{text:"If you believe you have found a bug please create an issue on the ",opData:{id:7,type:"insert",uid:"mia-andersson",timestamp:1752576331e3}},{text:"GitHub repo",opData:{id:7,type:"insert",uid:"mia-andersson",timestamp:1752576331e3},format:[{type:"a",attrs:{href:"https://github.com/tinymce/tinymce/issues"}}]},{text:" to report it to the developers.",opData:{id:7,type:"insert",uid:"mia-andersson",timestamp:1752576331e3}}]},{type:"h2",children:[{text:"Finally…"}]},{type:"p",children:[{text:"Don’t forget to check out "},{text:"Plupload",format:[{type:"a",attrs:{href:"http://www.plupload.com",target:"_blank",rel:"noopener"}}]},{text:", the upload solution featuring HTML5 upload support."}]},{type:"p",children:[{text:"Thanks for supporting TinyMCE. We hope it helps you and your users create great content."}]},{type:"p",children:[{text:"All the best from the TinyMCE team."}]}]},ai={toolbar:"suggestededits",name:"suggestededits",config:{suggestededits_model:oi,suggestededits_access:"full",suggestededits_content:"html"}},ri={name:"codesample",toolbar:"codesample",config:{codesample_languages:[{text:"HTML/XML",value:"markup"},{text:"JavaScript",value:"javascript"},{text:"CSS",value:"css"},{text:"PHP",value:"php"},{text:"Ruby",value:"ruby"},{text:"Python",value:"python"},{text:"Java",value:"java"},{text:"C",value:"c"},{text:"C#####",value:"csharpppppp"},{text:"C++",value:"cpp"}]}},si={toolbar:"exportword",name:"exportword",config:{exportword_service_url:"https://exportdocx.converter.tiny.cloud",exportword_converter_options:{format:"A4",margin_top:"1in",margin_bottom:"1in",margin_right:"1in",margin_left:"1in",header:[{html:"<h1>First page header.</h1>",css:"h1 { font-size: 30px; }",type:"first"}],footer:[{html:"<p>Page footer</p>",css:"p { font-size: 12px; }",type:"default"}],orientation:"portrait",auto_pagination:!0,base_url:"https://example.com",timezone:"UTC"},exportword_converter_style:"p { color: cyan !important }"}},li={name:"insertdatetime",toolbar:"insertdatetime",config:{insertdatetime_dateformat:"%Y/%m/%d",insertdatetime_timeformat:"%H%M%S",insertdatetime_formats:["%H:%M:%S","%Y-%m-%d","%I:%M:%S %p","%D","%H%M%S","%Y/%m/%d"]}},ci={name:"anchor",toolbar:"anchor",config:{}},di={name:"autolink",config:{}},pi={name:"autosave",config:{}},ui={name:"charmap",toolbar:"charmap",config:{}},mi={name:"code",toolbar:"code",config:{}},fi={name:"editimage",config:{}},yi={name:"directionality",toolbar:"ltr rtl",config:{}},gi={name:"emoticons",toolbar:"emoticons",config:{}},hi={name:"fullscreen",toolbar:"fullscreen",config:{}},bi={name:"help",toolbar:"help",config:{}},vi={name:"image",toolbar:"image",config:{image_advtab:!0,image_description:!0,image_dimensions:!0,image_title:!0,image_caption:!0}},ki={name:"importcss",config:{}},wi={name:"link",toolbar:"link unlink",config:{}},_i={name:"lists",toolbar:"numlist bullist",config:{}},xi={name:"media",toolbar:"media",config:{}},Ci={name:"nonbreaking",toolbar:"nonbreaking",config:{}},Ti={name:"pagebreak",toolbar:"pagebreak",config:{}},Ei={name:"preview",toolbar:"preview",config:{}},Mi={name:"quickbars",config:{quickbars_image_toolbar:"alignleft aligncenter alignright",quickbars_selection_toolbar:"undo redo | copy cut paste | quicklink align",quickbars_insert_toolbar:"quickimage quicktable | hr pagebreak"}},Si={name:"save",toolbar:"save cancel",config:{}},Ai={name:"searchreplace",toolbar:"searchreplace",config:{save_onsavecallback:function(){alert("Saved")},save_oncancelcallback:function(){alert("Save Cancelled")}}},qi={name:"table",toolbar:"table",config:{}},ji={name:"visualblocks",toolbar:"visualblocks",config:{}},Ni={name:"visualchars",toolbar:"visualchars",config:{}},Pi={name:"wordcount",config:{}},Ii={name:"a11ychecker",config:{},toolbar:"a11ycheck"},Oi={name:"advcode",config:{advcode_inline:!0}},Ri={name:"advtable",config:{}},Di={name:"autocorrect",config:{autocorrect_autocorrect:!0,autocorrect_capitalize:!0}},Fi={name:"casechange",toolbar:"casechange",config:{}},Li={name:"checklist",toolbar:"checklist",config:{}},Ui={name:"editimage",toolbar:"rotateleft rotateright flipv fliph editimage imageoptions",config:{editimage_toolbar:"rotateleft rotateright flipv fliph editimage imageoptions",editimage_proxy_service_url:"https://imageproxy.tiny.cloud"}},Hi={name:"exportpdf",toolbar:"exportpdf",config:{exportpdf_service_url:"https://exportpdf.converter.tiny.cloud",exportpdf_converter_options:{header_html:'<div style="text-align:center;">Document Title</div><div>Date: <span class="date"></span></div><div>Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>',footer_html:'<div style="text-align:right;">Confidential</div>',header_and_footer_css:"div { color: blue; font-family: Arial, sans-serif; font-size: 10pt; }",margin_top:"2cm",margin_bottom:"2cm",margin_left:"20mm",margin_right:"20mm",format:"A4",page_orientation:"portrait"},exportpdf_converter_style:"body { color: black !important; font-family: Helvetica, Arial, sans-serif; } p { color: cyan !important; }"}},zi={name:"footnotes",toolbar:"footnotes footnotesupdate",config:{}},Bi={name:"formatpainter",toolbar:"formatpainter",config:{}},Wi={name:"importword",toolbar:"importword",config:{importword_service_url:"https://importdocx.converter.tiny.cloud",importword_converter_options:{formatting:{styles:"inline",resets:"inline",defaults:"inline"}}}},Gi={name:"inlinecss",config:{}},Vi={name:"linkchecker",config:{}},Yi={name:"markdown",config:{}},Xi={name:"math",toolbar:"math",config:{}},Ji={name:"mediaembed",config:{}},Ki={name:"pageembed",toolbar:"pageembed",config:{}},Qi={name:"permanentpen",toolbar:"permanentpen",config:{permanentpen_properties:{fontname:"impact,sans-serif",forecolor:"#E74C3C",fontsize:"12px",bold:!0,italic:!1,strikethrough:!1,underline:!1}}},Zi={name:"powerpaste",config:{}},$i=[{revisionId:"1",createdAt:"2023-11-25T03:30:46.171Z",content:"<h2>Rev 1</h2>"},{revisionId:"2",createdAt:"2023-11-25T12:06:09.675Z",content:"<h2>Rev 2</h2>"},{revisionId:"3",createdAt:"2023-11-27T03:23:32.351Z",content:"<h2>Rev 3</h2>"},{revisionId:"4",createdAt:"2023-11-29T12:35:16.203Z",content:"<h2>Rev 4</h2>"},{revisionId:"5",createdAt:"2023-11-28T08:01:56.100Z",content:"<h2>Rev 5</h2>"}],en={toolbar:"revisionhistory",name:"revisionhistory",config:{revisionhistory_fetch:()=>Promise.resolve($i)}},tn={name:"tableofcontents",toolbar:"tableofcontents",config:{}},nn={name:"tinymcespellchecker",config:{}},on={name:"typography",toolbar:"typography",config:{}},an={name:"uploadcare",toolbar:"uploadcare",config:{uploadcare_public_key:"6ff5776be9bb64e10023"}},le=[Lt,ri,ni,ci,di,pi,ui,mi,fi,yi,gi,hi,bi,vi,ki,li,wi,_i,xi,Ci,Ti,Ei,Mi,Si,Ai,qi,ji,Ni,Pi,Ii,Oi,Ri,Ft,Di,Fi,Li,Ui,Hi,si,zi,Bi,Wi,Gi,Vi,Yi,Xi,Ji,Vt,Ht,Ki,Qi,Zi,en,ai,tn,ii,nn,on,an,Rt],rn="https://demouserdirectory.tiny.cloud/v1/users",sn="james-wilson",ln={height:600,mobile:{theme:"silver",contextmenu:"link image table preview"},pad_empty_with_br:!0,help_accessibility:!0,user_id:sn,fetch_users:e=>Promise.all(e.map(t=>fetch(`${rn}/${t}`).then(i=>i.json()).catch(()=>({id:t}))))},cn=le.map(e=>e==null?void 0:e.toolbar).filter(Boolean).join(" | "),dn=({excludePlugins:e,overrideConfig:t})=>{const i=le.map(a=>a.name).filter(a=>!(e!=null&&e.includes(a))),n=le.reduce((a,s)=>({...a,...s.config}),{});return{...{...ln,...n,...t},plugins:i,toolbar:cn,height:500}};var pn=Object.create,Ie=Object.defineProperty,un=Object.getOwnPropertyDescriptor,mn=Object.getOwnPropertyNames,fn=Object.getPrototypeOf,yn=Object.prototype.hasOwnProperty,gn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),hn=(e,t,i,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of mn(t))!yn.call(e,o)&&o!==i&&Ie(e,o,{get:()=>t[o],enumerable:!(n=un(t,o))||n.enumerable});return e},bn=(e,t,i)=>(i=e!=null?pn(fn(e)):{},hn(!e||!e.__esModule?Ie(i,"default",{value:e,enumerable:!0}):i,e)),vn=gn(e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.isEqual=function(){var t=Object.prototype.toString,i=Object.getPrototypeOf,n=Object.getOwnPropertySymbols?function(o){return Object.keys(o).concat(Object.getOwnPropertySymbols(o))}:Object.keys;return function(o,a){return function s(r,l,p){var y,M,f,N=t.call(r),v=t.call(l);if(r===l)return!0;if(r==null||l==null)return!1;if(p.indexOf(r)>-1&&p.indexOf(l)>-1)return!0;if(p.push(r,l),N!=v||(y=n(r),M=n(l),y.length!=M.length||y.some(function(C){return!s(r[C],l[C],p)})))return!1;switch(N.slice(8,-1)){case"Symbol":return r.valueOf()==l.valueOf();case"Date":case"Number":return+r==+l||+r!=+r&&+l!=+l;case"RegExp":case"Function":case"String":case"Boolean":return""+r==""+l;case"Set":case"Map":y=r.entries(),M=l.entries();do if(!s((f=y.next()).value,M.next().value,p))return!1;while(!f.done);return!0;case"ArrayBuffer":r=new Uint8Array(r),l=new Uint8Array(l);case"DataView":r=new Uint8Array(r.buffer),l=new Uint8Array(l.buffer);case"Float32Array":case"Float64Array":case"Int8Array":case"Int16Array":case"Int32Array":case"Uint8Array":case"Uint16Array":case"Uint32Array":case"Uint8ClampedArray":case"Arguments":case"Array":if(r.length!=l.length)return!1;for(f=0;f<r.length;f++)if((f in r||f in l)&&(f in r!=f in l||!s(r[f],l[f],p)))return!1;return!0;case"Object":return s(i(r),i(l),p);default:return!1}}(o,a,[])}}()});bn(vn());var kn=e=>e.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"-").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");const wn=e=>e.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""),_n=e=>kn(e.replace(/([A-Z])/g," $1").trim()),Oe=e=>wn(_n(e)),$="storybook-stories-extractor-context";function Re(e){let t=O(e.isExtracting),i=O(e.register);return{get isExtracting(){return t},get register(){return i}}}function xn(e){const{stories:t}=e,i=Re({isExtracting:!0,register:n=>{t.set(n.exportName??Oe(n.name),n)}});pe($,i)}function Cn(){return Ee($)||pe($,Re({isExtracting:!1,register:()=>{}})),Me($)}const ce="storybook-story-renderer-context";function Tn(e){let t=U(O(e.currentStoryExportName)),i=U(O(e.args)),n=U(O(e.storyContext)),o=U(O(e.metaRenderSnippet));function a(s){H(t,s.currentStoryExportName,!0),H(i,s.args,!0),H(n,s.storyContext,!0),H(o,s.metaRenderSnippet,!0)}return{get args(){return m(i)},get storyContext(){return m(n)},get currentStoryExportName(){return m(t)},get metaRenderSnippet(){return m(o)},set:a}}function En(){const e=Tn({currentStoryExportName:void 0,args:{},storyContext:{}});pe(ce,e)}function De(){return Ee(ce)||En(),Me(ce)}const Mn="svelte-csf",Sn=`${Mn}-v4`;var An=j(" <!>",1),qn=j(" <!>",1),jn=j('<p>No story rendered. See <a href="https://github.com/storybookjs/addon-svelte-csf#defining-stories" target="_blank">the docs</a> on how to define stories.</p>');function Nn(e,t){W(t,!0);let i=k(t,"asChild",3,!1),n=Ce(t,["$$slots","$$events","$$legacy","children","name","exportName","play","template","asChild"]);const o=t.exportName??Oe(t.name);let a=Cn(),s=De(),r=J(()=>!a.isExtracting&&s.currentStoryExportName===o);a.isExtracting&&a.register({children:t.children,name:t.name,exportName:o,play:t.play,...n});function l(v,C){C&&v.playFunction&&(v.playFunction.__play=C)}function p(v){return typeof v=="function"}P(()=>{m(r)&&l(s.storyContext,t.play)});const y=J(()=>{var v;return((v=s.storyContext.tags)==null?void 0:v.some(C=>C===Sn))??!1});var M=S(),f=E(M);{var N=v=>{var C=S(),R=E(C);{var A=g=>{var b=S(),_=E(b);K(_,()=>t.template,()=>s.args,()=>s.storyContext),h(g,b)},T=J(()=>p(t.template)),I=g=>{var b=S(),_=E(b);{var D=c=>{var d=S(),u=E(d);K(u,()=>t.children),h(c,d)},F=c=>{var d=An(),u=E(d);u.nodeValue=" ";var Ge=se(u);ee(Ge,()=>s.storyContext.component,(Ve,Ye)=>{Ye(Ve,te(()=>s.args,{get children(){return t.children}}))}),h(c,d)},L=c=>{var d=S(),u=E(d);K(u,()=>t.children),h(c,d)};Q(_,c=>{i()||m(y)?c(D):s.storyContext.component?c(F,1):c(L,-1)})}h(g,b)},G=J(()=>p(t.children)),V=g=>{var b=S(),_=E(b);K(_,()=>s.metaRenderSnippet,()=>s.args,()=>s.storyContext),h(g,b)},Y=g=>{var b=qn(),_=E(b);_.nodeValue=" ";var D=se(_);ee(D,()=>s.storyContext.component,(F,L)=>{L(F,te(()=>s.args))}),h(g,b)},X=g=>{var b=jn();h(g,b)};Q(R,g=>{m(T)?g(A):m(G)?g(I,1):s.metaRenderSnippet?g(V,2):s.storyContext.component?g(Y,3):g(X,-1)})}h(v,C)};Q(f,v=>{m(r)&&v(N)})}h(e,M),B()}function Pn(e){return{Story:Nn}}function In(e,t){W(t,!0),xn(t.repository());var i=S(),n=E(i);ee(n,()=>t.Stories,(o,a)=>{a(o,{})}),h(e,i),B()}function de(e){return e==="__proto__"}function On(e){switch(typeof e){case"number":case"symbol":return!1;case"string":return e.includes(".")||e.includes("[")||e.includes("]")}}function Fe(e){var t;return typeof e=="string"||typeof e=="symbol"?e:Object.is((t=e==null?void 0:e.valueOf)==null?void 0:t.call(e),-0)?"-0":String(e)}function Le(e){if(e==null)return"";if(typeof e=="string")return e;if(Array.isArray(e))return e.map(Le).join(",");const t=String(e);return t==="0"&&Object.is(Number(e),-0)?"-0":t}function Rn(e){if(Array.isArray(e))return e.map(Fe);if(typeof e=="symbol")return[e];e=Le(e);const t=[],i=e.length;if(i===0)return t;let n=0,o="",a="",s=!1;for(e.charCodeAt(0)===46&&(t.push(""),n++);n<i;){const r=e[n];a?r==="\\"&&n+1<i?(n++,o+=e[n]):r===a?a="":o+=r:s?r==='"'||r==="'"?a=r:r==="]"?(s=!1,t.push(o),o=""):o+=r:r==="["?(s=!0,o&&(t.push(o),o="")):r==="."?o&&(t.push(o),o=""):o+=r,n++}return o&&t.push(o),t}function Ue(e,t,i){if(e==null)return i;switch(typeof t){case"string":{if(de(t))return i;const n=e[t];return n===void 0?On(t)?Ue(e,Rn(t),i):i:n}case"number":case"symbol":{typeof t=="number"&&(t=Fe(t));const n=e[t];return n===void 0?i:n}default:{if(Array.isArray(t))return Dn(e,t,i);if(Object.is(t==null?void 0:t.valueOf(),-0)?t="-0":t=String(t),de(t))return i;const n=e[t];return n===void 0?i:n}}}function Dn(e,t,i){if(t.length===0)return i;let n=e;for(let o=0;o<t.length;o++){if(n==null||de(t[o]))return i;n=n[t[o]]}return n===void 0?i:n}const{addons:Fn}=__STORYBOOK_MODULE_PREVIEW_API__,Ln=Fn.getChannel(),Un=e=>{const{storyContext:t}=e;if(Hn(t))return;const i=zn({code:t.parameters.__svelteCsf.rawCode,args:e.args});setTimeout(()=>{Ln.emit(pt,{id:t.id,args:t.unmappedArgs,source:i})})},Hn=e=>{var o,a;const t=(o=e==null?void 0:e.parameters.docs)==null?void 0:o.source,i=e==null?void 0:e.parameters.__isArgsStory;return((a=e==null?void 0:e.parameters.__svelteCsf)==null?void 0:a.rawCode)?(t==null?void 0:t.type)===me.DYNAMIC?!1:!i||(t==null?void 0:t.code)||(t==null?void 0:t.type)===me.CODE:!0},zn=({code:e,args:t})=>{const i=Object.entries(t??{}).map(([a,s])=>Wn(a,s)).filter(a=>a);let n=i.join(" ");return n.length>50&&(n=`
  ${i.join(`
  `)}
`),e.replaceAll("{...args}",n).replace(/args(?:[\w\d_$.?[\]"'])+/g,a=>{const s=a.replaceAll("?",""),r=Ue({args:t},s);return He(r)})},Bn=e=>{var i;const t=((i=e.getMockName)==null?void 0:i.call(e))??e.name;return t&&t!=="spy"?t:"() => {}"},He=e=>{var t;return typeof e=="object"&&e[Symbol.for("svelte.snippet")]?"snippet":typeof e=="function"?Bn(e):(t=JSON.stringify(e,null,1))==null?void 0:t.replace(/\n/g,"").replace(new RegExp("(?<!\\s)([}\\]])$")," $1")},Wn=(e,t)=>{if(t==null)return null;if(t===!0)return e;const i=He(t);return typeof t=="string"?`${e}=${i}`:`${e}={${i}}`};function Gn(e,t){W(t,!0);const i=De();P(()=>{i.set({currentStoryExportName:t.exportName,args:t.args,storyContext:t.storyContext,metaRenderSnippet:t.metaRenderSnippet})}),P(()=>{Un({args:t.args,storyContext:t.storyContext})});var n=S(),o=E(n);ee(o,()=>t.Stories,(a,s)=>{s(a,{})}),h(e,n),B()}const Vn=document.createDocumentFragment?()=>document.createDocumentFragment():()=>document.createElement("div"),Yn=(e,t)=>{const i={stories:new Map};try{const o=ut(In,{target:Vn(),props:{Stories:e,repository:()=>i}});mt(o)}catch(o){console.error(`Error in mounting stories ${o.toString()}`,o)}const n={};for(const[o,a]of i.stories){const s={...a,render:(l,p)=>({Component:Gn,props:{exportName:o,Stories:e,storyContext:p,args:l,metaRenderSnippet:t.render}})},r=t.play??a.play;r&&(s.play=l=>{var y;const p=(y=l.playFunction)==null?void 0:y.__play;return p?p(l):r(l)}),n[o]=s}return t.parameters||(t.parameters={}),t.parameters.controls||(t.parameters.controls={}),t.parameters.controls.disableSaveFromUI=!0,n},Xn="prsghhxax677rv082a1zj9b7cgjuoaqysf7h8ayxi5ao43ha",Jn=`
<h1 id="mcetoc_1ipdv0ulf969"></h1>
<div class="mce-toc">
  <h1>Table of Contents</h1>
  <ul>
    <li><a href="#mcetoc_1ipdv0ulf96a">Checklist</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96b">Enhanced Media Embed</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96c">Enhanced Tables</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96d">Math</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96e">Mentions</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96f">Merge Tags</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96g">Page Embed</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96h">Accordion</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96i">Anchor</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96j">Character Map</a></li>
    <li><a href="#mcetoc_1ipdvq0109q7">Code Sample</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96l">Emoticons</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96m">Image</a></li>
    <li><a href="#mcetoc_1ipdvq0109q8">Lists &amp; List Styles</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96p">Link</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96p">Media</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96q">Nonbreaking Space</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96r">Page Break</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96s">Table</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96s">GoToAnchor</a></li>
    <li><a href="#mcetoc_1it7atcveh6">Uploadcare Image</a></li>
    <li><a href="#mcetoc_1ipdvq0109q9">Content </a></li>
    <li><a href="#mcetoc_1it7aic1fgt">Extra Content</a></li>
    <li><a href="#mcetoc_1ipdv0ulf96t">Footnotes</a></li>
  </ul>
</div>
<h1 id="mcetoc_1ipdv0ulf96a">Checklist</h1>
<ul class="tox-checklist">
  <li>One</li>
  <li>Two <ul class="tox-checklist">
      <li>Two.1</li>
      <li>Two.2</li>
    </ul>
  </li>
  <li>Three <ul class="tox-checklist">
      <li>Three.2 <ul class="tox-checklist">
          <li>Three.2.1</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
<h1 id="mcetoc_1ipdv0ulf96b">Enhanced Media Embed</h1>
<div style="max-width: 800px;" data-ephox-embed-iri="https://youtu.be/Ff6nar7Hr78?feature=shared">
  <div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" src="https://www.youtube.com/embed/Ff6nar7Hr78?rel=0" scrolling="no" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowfullscreen="allowfullscreen"></iframe></div>
</div>
<p>&nbsp;</p>
<h1 id="mcetoc_1ipdv0ulf96c">Enhanced Tables</h1>
<table style="width: 50%; height: 217.031px;" border="1" data-snooker-col-series="numeric" data-snooker-locked-cols="0">
  <colgroup>
    <col style="width: 7.69936%;" />
    <col style="width: 25.6645%;" />
    <col style="width: 33.3639%;" />
    <col style="width: 33.3639%;" />
  </colgroup>
  <tbody>
    <tr style="height: 36.1719px;">
      <td contenteditable="false">1</td>
      <td>A</td>
      <td>B</td>
      <td>C</td>
    </tr>
    <tr style="height: 36.1719px;">
      <td contenteditable="false">2</td>
      <td>
        <p>Checklist Enhanced Media Embed Enhanced Tables Footnotes Math Mentions Merge Tags Page Embed Table of Contents Accordion Anchor Character Map Code Sample Emoticons Image Lists List Styles Media Nonbreaking Space Page Break Table</p>
      </td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style="height: 36.1719px;">
      <td contenteditable="false">3</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style="height: 36.1719px;">
      <td contenteditable="false">4</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>
        <p>Checklist Enhanced Media Embed Enhanced Tables Footnotes Math Mentions Merge Tags Page Embed Table of Contents Accordion Anchor Character Map Code Sample Emoticons Image Lists List Styles Media Nonbreaking Space Page Break Table</p>
      </td>
    </tr>
    <tr style="height: 36.1719px;">
      <td contenteditable="false">5</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr style="height: 36.1719px;">
      <td contenteditable="false">6</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
  </tbody>
</table>
<h1 id="mcetoc_1ipdv0ulf96d">Math</h1>
<p>&nbsp;<tiny-math-inline formula="S_delta"></tiny-math-inline>'s</p>
<p><tiny-math-inline formula="{x_{k-1}}{x_k}"></tiny-math-inline></p>
<p>&nbsp;<tiny-math-inline formula="S_{delta_1}"></tiny-math-inline>,&nbsp;<tiny-math-inline formula="S_{delta_2}"></tiny-math-inline>&nbsp;<tiny-math-inline formula="displaystylemathop{L}_{ndoteqinfty}delta_n=0"></tiny-math-inline></p>
<tiny-math-block formula="mathop{L}_{ndoteqinfty} S_{delta_n} = int_a^b f(x)dx."></tiny-math-block>
<p><sup id="footnote_75157979611745299752311" class="mce-footnote"><a href="#footnotes_entry_75157979611745299752311">1</a></sup></p>
<tiny-math-block formula="displaystyle int_a^b f(x)dx =  mathop{L}_{ndoteqinfty} sum_{k=1}^n f(a+kDelta x)Delta x,  	ext{ where }  Delta x=\frac{b-a}{n}."></tiny-math-block>
<p>&nbsp;</p>
<h1 id="mcetoc_1ipdv0ulf96e">Mentions</h1>
<p><span class="mentionsmentionsmentions" style="color: green;" data-mce-mentions-id="virginiaturner">@virginiaturner</span> <span class="mentionsmentionsmentions" style="color: green;" data-mce-mentions-id="terrygreen333">@terrygreen333</span></p>
<h1 id="mcetoc_1ipdv0ulf96f">Merge Tags</h1>
<p>\${Campaign.Toc}</p>
<p>\${Current.Date}</p>
<h1 id="mcetoc_1ipdv0ulf96g">Page Embed</h1>
<div class="tiny-pageembed" style="display: inline-block; position: relative;"><iframe title="Test Title" src="https://sirca.org.au" name="Test Name" width="400" height="300" longdesc="Long Desc" scrolling="yes" sandbox=""></iframe></div>
<p>&nbsp;</p>
<h1 id="mcetoc_1ipdv0ulf96h">Accordion</h1>
<details class="mce-accordion">
  <summary>Accordion summary...new summary</summary>
  <p>Accordion body...new body</p>
  <p>matter 1</p>
  <p>matter 2</p>
  <p>matter 3</p>
  <ol>
    <li>list 1</li>
    <li>list 2</li>
    <li>list 3</li>
  </ol>
</details>
<h1 id="mcetoc_1ipdv0ulf96i"><a id="ThisisAnchor"></a>Anchor</h1>
<p>&nbsp;</p>
<h1 id="mcetoc_1ipdv0ulf96j">Character Map</h1>
<p>&piv;</p>
<h1 id="mcetoc_1ipdvq0109q7">Code Sample</h1>
<pre class="language-javascript"><code>// Sample checklist data
const checklistItems = [
  "Enhanced Media Embed",
  "Enhanced Tables",
  "Footnotes",
  "Math",
  "Mentions",
  "Merge Tags",
  "Page Embed",
  "Table of Contents",
  "Accordion",
  "Anchor",
  "Character Map",
  "Code Sample",
  "Emoticons",
  "Image",
  "Lists",
  "List Styles",
  "Media",
  "Nonbreaking Space",
  "Page Break",
  "Table"
];

// Function to display checklist items in a UL with id="checklist"
function showChecklist() {
  const ul = document.getElementById("checklist");
  ul.innerHTML = ""; // Clear existing list
  checklistItems.forEach(item =&gt; {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}</code></pre>
<h1 id="mcetoc_1ipdv0ulf96l">Emoticons</h1>
<p><img style="width: 1em; height: 1em; margin: 0 .05em 0 .1em; vertical-align: -.1em;" draggable="false" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/15.1.0/72x72/1f951.png" alt="🥑" data-emoticon="true" /> <img style="width: 1em; height: 1em; margin: 0 .05em 0 .1em; vertical-align: -.1em;" draggable="false" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/15.1.0/72x72/1f60a.png" alt="😊" data-emoticon="true" /></p>
<h1 id="mcetoc_1ipdv0ulf96m">Image</h1>
<figure class="image"><img style="border-width: 5px; border-style: solid; margin: 10px;" title="image titile 123" src="https://google.com/logos/google.jpg" alt="this is image " width="354" height="116" />
  <figcaption>Hello</figcaption>
</figure>
<p>&nbsp;</p>
<h1 id="mcetoc_1ipdvq0109q8">Lists &amp; List Styles</h1>
<h1 id="mcetoc_1ipdv0ulf96n"></h1>
<ol>
  <li>aaa<sup id="footnote_6481832211749372007241" class="mce-footnote"><a href="#footnotes_entry_6481832211749372007241">2</a></sup></li>
  <li>bbb <ol>
      <li>ccc <ol>
          <li>ddd <ol>
              <li>eee</li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
<ul>
  <li>111</li>
  <li>222 <ul>
      <li>333 <ul>
          <li style="list-style-type: none;">
            <ul>
              <li>444</li>
              <li>555 <ul>
                  <li>666</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
<ol style="list-style-type: lower-greek;">
  <li>0000 <ol style="list-style-type: lower-greek;">
      <li>1111 <ol style="list-style-type: lower-greek;">
          <li>2222 <ol style="list-style-type: lower-greek;">
              <li>333</li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
<h1 id="mcetoc_1ipdv0ulf96o"></h1>
<h1 id="mcetoc_1ipdv0ulf96p">Link</h1>
<p><a title="abc net au" href="https://abc.net.au">https://abc.net.au</a></p>
<h1 id="mcetoc_1ipdv0ulf96p">Media</h1>
<p><iframe src="https://www.youtube.com/embed/Ff6nar7Hr78?feature=shared" width="560" height="314" allowfullscreen="allowfullscreen"></iframe></p>
<h1 id="mcetoc_1ipdv0ulf96q">Nonbreaking Space</h1>
<p><span class="mce-nbsp-wrap" contenteditable="false">&nbsp;</span><span class="mce-nbsp-wrap" contenteditable="false">&nbsp;</span><span class="mce-nbsp-wrap" contenteditable="false">&nbsp;</span></p>
<h1 id="mcetoc_1ipdv0ulf96r">Page Break</h1>
<p><!-- pagebreak --></p>
<h1 id="mcetoc_1ipdv0ulf96s">Table</h1>
<table style="width: 50%; height: 75%; background-color: #f8cac6; border-color: #e03e2d; border-style: double;" border="10" cellspacing="10" cellpadding="10">
  <caption>Caption</caption>
  <colgroup>
    <col style="width: 25%;" />
    <col style="width: 25%;" />
    <col style="width: 25%;" />
    <col style="width: 25%;" />
  </colgroup>
  <tbody>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>
        <table style="width: 50%; background-color: #bfedd2; border-color: #169179;" border="20" cellspacing="20" cellpadding="20">
          <caption>Caption</caption>
          <colgroup>
            <col style="width: 33.3333%;" />
            <col style="width: 33.3333%;" />
            <col style="width: 33.3333%;" />
          </colgroup>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
  </tbody>
</table>
<h1 id="mcetoc_1ipdv0ulf96s"><a href="#ThisisAnchor">GoToAnchor</a></h1>
<h1 id="mcetoc_1it7atcveh6">Uploadcare Image</h1>
<p><span style="color: #4e5c73;">Mallorca, the jewel of the Mediterranean, is not just a place of beauty&mdash;it&rsquo;s a smart investment. With property values consistently on the rise, now is the perfect time to secure your piece of this sun-soaked paradise.&nbsp;</span></p>
<figure class="image"><img style="width: min(2048px, 100%); aspect-ratio: 2048 / 718;" src="https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/preview/" sizes="(min-width: 2048px) 2048px, 100vw" srcset="https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/resize/100x/ 100w,https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/resize/200x/ 200w,https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/resize/300x/ 300w,https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/resize/500x/ 500w,https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/resize/750x/ 750w,https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/resize/1000x/ 1000w,https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/resize/1250x/ 1250w,https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/resize/1500x/ 1500w,https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/resize/2000x/ 2000w,https://tiny.ucarecdn.com/ab5fa504-67d7-4905-ac98-537ef63006f4/-/preview/ 2048w" alt="Mallorca" />
  <figcaption>Michael Heuser on <a href="https://unsplash.com/@gum_meee">Unsplash</a></figcaption>
</figure>
<h1 id="mcetoc_1ipdvq0109q9">Content<br /><br /></h1>
<p style="font-family: Arial, sans-serif; font-size: 16px; color: #2c3e50; background-color: #f0f8ff; line-height: 1.6; text-align: justify; text-indent: 30px; letter-spacing: 0.5px; word-spacing: 1px; padding: 10px; margin: 10px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 6px rgba(0,0,0,0.1);"><strong><u><em>HTML</em></u></strong> was originally developed by <span style="color: #e74c3c; font-weight: bold; font-style: italic; text-decoration: underline dotted;">Tim Berners-Lee</span> in <span style="font-size: 18px; color: #2980b9; background-color: #eaf2f8; padding: 2px 4px; border: 1px dashed #3498db;">1990</span>. He is also known as the <span style="font-weight: bold; font-variant: small-caps; color: #8e44ad; text-shadow: 1px 1px #ccc;">father of the web</span>.</p>
<p style="font-family: 'Courier New', monospace; font-size: 15px; background-color: #fcf3cf; padding: 8px; border-left: 4px solid #f39c12; margin-left: 20px;">In <span style="color: #16a085; font-style: italic;">1996</span>, the <span style="text-transform: uppercase; color: #d35400;">World Wide Web Consortium (W3C)</span> became the authority to maintain the HTML specifications.</p>
<p style="font-style: oblique; background: linear-gradient(to right, #f9f9f9, #e0f7fa); padding: 10px;"><mark style="background-color: #ffff00; color: #000;">HTML also became an international standard (ISO) in 2000.</mark></p>
<p style="font-weight: bold; font-size: 17px; background-color: #d1f2eb; border: 1px solid #1abc9c; padding: 8px;"><span style="color: #27ae60;">HTML5</span> is the <span style="text-decoration: line-through; color: #c0392b;">latest</span> <span style="text-decoration: underline overline; background-color: #fce4ec;">version</span> of HTML. <span style="font-family: monospace; color: #34495e; background-color: #ecf0f1;">HTML5 provides a faster and more robust approach to web development.</span></p>
<p>This is a <strong>bold</strong> word.</p>
<p>This is an <em>italic</em> word.</p>
<p>This is an <u>underlined</u> word.</p>
<p>This is a <s>strikethrough</s> word.</p>
<p>This is a superscript example: E = mc<sup>2</sup></p>
<p>This is a subscript example: H<sub>2</sub>O</p>
<hr />
<hr />
<p>This is a&nbsp;<strong>bold</strong> word.</p>
<p>This is an <em>italic</em> word.</p>
<p>This is an <span style="text-decoration: underline;">underlined</span> word.</p>
<p>This is a&nbsp;<s>strikethrough</s> word.</p>
<p>This is a superscript example: E=mc<sup>2 </sup></p>
<p>This is a subscript example: H<sub>2</sub>O</p>
<h1 id="mcetoc_1it7aic1fgt">Extra Content</h1>
<p>Small Paragraph: Rich text editing has become essential in modern web applications, especially for platforms requiring user-generated content string2. Whether it's for blogs, comments, or documentation, a capable editor ensures formatting flexibility and intuitive controls string4. As demands increase for accessibility and cross-platform consistency, developers look for plugins and integrations that go beyond the basics string5 while ensuring performance remains optimized string1, especially during frequent input string3.</p>
<p>Medium Paragraph: Today's rich text editors must support more than bold and italics&mdash;features like collaborative editing, markdown conversion, and custom toolbar configurations are now expected string3. Frameworks such as TinyMCE and CKEditor provide extensible APIs string2, enabling teams to add custom buttons, event listeners, or even embed third-party tools like AI text suggestions string1. At the same time, accessibility cannot be overlooked; ARIA roles, keyboard navigation, and screen reader support must be baked into every component string5. Additionally, styling flexibility via themes or skins string4 plays a critical role in aligning with brand identity while preserving usability across devices.</p>
<p>Large Paragraph: In enterprise environments, rich text editing requirements can be highly specialized, often tied to workflows involving structured content, semantic tagging, or real-time synchronization across users string2. Editors must integrate with CMS platforms, export formats like JSON or XML string1, and enforce content constraints using schemas or validation layers. Advanced use cases might involve embedding dynamic widgets, managing multi-language input, or enabling inline commenting for collaborative review processes string5. The demand for clean, semantic output drives the need for highly configurable toolbars and plugin architectures string3 that adapt to context&mdash;whether it's editing code blocks, writing documentation, or drafting email templates. Equally important is performance: large documents should load instantly, autosave smoothly, and never lock up under load. Security concerns are also paramount, with XSS protection, sanitization, and trusted HTML output all critical for production-grade deployment. User experience is the final pillar&mdash;drag-and-drop uploads, custom placeholders, and responsive design string4 all contribute to a seamless editing experience that feels native, not bolted on.</p>
<br>
<pre>
Images:
https://tiny-playground.s3.us-east-1.amazonaws.com/imagestestdata/jpeg_small.jpeg
https://tiny-playground.s3.us-east-1.amazonaws.com/imagestestdata/jpeg_med.jpeg
https://google.com/logos/google.jpeg

Media Urls:

https://youtu.be/jqFMWNk8HR4
http://www.imdb.com/title/tt0116705/?ref_=fn_al_tt_1
https://www.instagram.com/p/BNXdWkBgDNG/
http://9gag.com/gag/avr1pRd
http://giphy.com/gifs/monkey-7C06IEsrGj4SQ
https://itunes.apple.com/au/album/sunshine-on-leith/id693789043
http://jsfiddle.net/timwienk/LgJsN/
https://twitter.com/TheAnimalVines/status/804530277607346176
https://www.youtube.com/watch?v=FPFSGfSUef4
https://youtu.be/FPFSGfSUef4
https://en.wikipedia.org/wiki/History_of_animation
https://vimeo.com/193866434
https://play.spotify.com/album/4cBfyeNYbJAmOq0sl3Hijd
</pre>
<hr />
<h1 id="mcetoc_1ipdv0ulf96t">Footnotes</h1>
<p>&nbsp;</p>
<div class="mce-footnotes">
  <hr />
  <ol>
    <li id="footnotes_entry_75157979611745299752311"><a class="mce-footnotes-backlink" href="#footnote_75157979611745299752311">^&nbsp;</a><span class="mce-footnotes-note">this is a math equation</span></li>
    <li id="footnotes_entry_6481832211749372007241"><a class="mce-footnotes-backlink" href="#footnote_6481832211749372007241">^&nbsp;</a><span class="mce-footnotes-note">This is a footnote for List</span></li>
  </ol>
</div>`.trim();let ve=Jn;const ke=dn({excludePlugins:["tinydrive","uploadcare"]}),ze={channel:"8"},Kn={title:"Editor",component:ie,args:{...ze,apiKey:Xn,inline:!1}},{Story:we}=Pn();var Qn=j('<div style="padding-top:100px; height:400px; border:1px solid #ccciq"><!></div>'),Zn=j("<!> <!>",1);function Be(e,t){W(t,!1),Et();var i=Zn(),n=E(i);{const a=(r,l=fe)=>{ie(r,te(l,{get value(){return ve},get conf(){return ke}}))};let s=ft(()=>({...ze,inline:!1}));we(n,{name:"Iframe",get args(){return m(s)},template:a,$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:"<Editor {...args} {value} conf={ fullConfig }/>"}}})}var o=se(n,2);we(o,{name:"Inline",args:{inline:!0},template:(s,r=fe)=>{var l=Qn(),p=Te(l);ie(p,te(r,{get value(){return ve},get conf(){return ke}})),h(s,l)},$$slots:{template:!0},parameters:{__svelteCsf:{rawCode:`<div style="padding-top:100px; height:400px; border:1px solid #ccciq">
  <Editor {...args} {value} conf={ fullConfig }/>
</div>`}}}),h(e,i),B()}Be.__docgen={data:[],name:"Editor.stories.svelte"};const We=Yn(Be,Kn),to=["Iframe","Inline"],io={...We.Iframe,tags:["svelte-csf-v5"]},no={...We.Inline,tags:["svelte-csf-v5"]};export{io as Iframe,no as Inline,to as __namedExportsOrder,Kn as default};
