import{n as K,s as z,a as re,h as _e,g as ve,S as G,i as V,d as I,t as T,b as x,c as le,e as ce,f as D,j as de,k as me,l as Ie,m as ue,o as H,p as oe,q as De,u as qe,r as Le,v as Ne,w as O,x as te,y as Fe,z as Re,A as Ue,B as Q,C as we,D as Z,E as M,F as A,G as P,H as He,I as ke,J as xe}from"./index-X1lDVi0q.js";const U=[];function fe(t,e=K){let n;const i=new Set;function a(l){if(z(t,l)&&(t=l,n)){const d=!U.length;for(const c of i)c[1](),U.push(c,t);if(d){for(let c=0;c<U.length;c+=2)U[c][0](U[c+1]);U.length=0}}}function o(l){a(l(t))}function s(l,d=K){const c=[l,d];return i.add(c),i.size===1&&(n=e(a,o)||K),l(t),()=>{i.delete(c),i.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:s}}const $="storybook-registration-context",ae="storybook-registration-context-component";function Ce(t={}){re($,{render:!0,register:()=>{},meta:{},args:{},...t}),Te()}function Oe(t){re($,{render:!1,register:e=>{t.stories.push(e)},set meta(e){t.meta=e},args:{}})}function ze(){return _e($)||Ce(),ve($)}function Te(){re(ae,{argsStore:fe({}),storyContextStore:fe({})})}function Se(){return _e(ae)||Te(),ve(ae)}function We(t,e){const n=Se();n.argsStore.set(t),n.storyContextStore.set(e)}const Be=t=>t&4,Ke=t=>({context:t&2,args:t&4}),ge=t=>({...t[2],context:t[1],args:t[2]});function he(t){let e;const n=t[9].default,i=De(n,t,t[8],ge);return{c(){i&&i.c()},m(a,o){i&&i.m(a,o),e=!0},p(a,o){i&&i.p&&(!e||o&262)&&qe(i,n,a,a[8],Be(o)||!e?Le(a[8]):Ne(n,a[8],o,Ke),ge)},i(a){e||(x(i,a),e=!0)},o(a){T(i,a),e=!1},d(a){i&&i.d(a)}}}function Ge(t){let e,n,i=t[0]&&he(t);return{c(){i&&i.c(),e=de()},m(a,o){i&&i.m(a,o),D(a,e,o),n=!0},p(a,[o]){a[0]?i?(i.p(a,o),o&1&&x(i,1)):(i=he(a),i.c(),x(i,1),i.m(e.parentNode,e)):i&&(le(),T(i,1,1,()=>{i=null}),ce())},i(a){n||(x(i),n=!0)},o(a){T(i),n=!1},d(a){a&&I(e),i&&i.d(a)}}}function Ve(t,e){e&&t.playFunction&&(t.playFunction.__play=e)}function Ye(t,e,n){let i;const a=["name","template","play"];let o=me(e,a),s,l,{$$slots:d={},$$scope:c}=e;const h=Ie(d),y=ze();let{name:w}=e,{template:p=null}=e,{play:b=null}=e;if(!w)throw new Error("Missing Story name");y.register({name:w,...o,play:b,template:p??(h.default?null:"default")});const L=Se(),C=L.argsStore;ue(t,C,m=>n(2,l=m));const u=L.storyContextStore;return ue(t,u,m=>n(1,s=m)),t.$$set=m=>{e=H(H({},e),oe(m)),n(13,o=me(e,a)),"name"in m&&n(5,w=m.name),"template"in m&&n(6,p=m.template),"play"in m&&n(7,b=m.play),"$$scope"in m&&n(8,c=m.$$scope)},t.$$.update=()=>{t.$$.dirty&32&&n(0,i=y.render&&!y.templateName&&y.storyName==w),t.$$.dirty&131&&i&&Ve(s,b)},[i,s,l,C,u,w,p,b,c,d]}class ye extends G{constructor(e){super(),V(this,e,Ye,Ge,z,{name:5,template:6,play:7})}}var be;(be=module==null?void 0:module.hot)!=null&&be.decline&&module.hot.decline();const Xe=["Activate","AddUndo","BeforeAddUndo","BeforeExecCommand","BeforeGetContent","BeforeRenderUI","BeforeSetContent","BeforePaste","Blur","Change","ClearUndos","Click","CommentChange","CompositionEnd","CompositionStart","CompositionUpdate","ContextMenu","Copy","Cut","Dblclick","Deactivate","Dirty","Drag","DragDrop","DragEnd","DragGesture","DragOver","Drop","ExecCommand","Focus","FocusIn","FocusOut","GetContent","Hide","Init","Input","KeyDown","KeyPress","KeyUp","LoadContent","MouseDown","MouseEnter","MouseLeave","MouseMove","MouseOut","MouseOver","MouseUp","NodeChange","ObjectResizeStart","ObjectResized","ObjectSelected","Paste","PostProcess","PostRender","PreProcess","ProgressState","Redo","Remove","Reset","ResizeEditor","SaveContent","SelectionChange","SetAttrib","SetContent","Show","Submit","Undo","VisualAid"],Je=(t,e)=>{Xe.forEach(n=>{t.on(n,i=>{e(n.toLowerCase(),{eventName:n,event:i,editor:t})})})};function Qe(t){let e;return{c(){e=te("textarea"),O(e,"id",t[0]),we(e,"visibility","hidden")},m(n,i){D(n,e,i),t[20](e)},p(n,i){i&1&&O(e,"id",n[0])},d(n){n&&I(e),t[20](null)}}}function Ze(t){let e;return{c(){e=te("div"),O(e,"id",t[0])},m(n,i){D(n,e,i),t[19](e)},p(n,i){i&1&&O(e,"id",n[0])},d(n){n&&I(e),t[19](null)}}}function $e(t){let e;function n(o,s){return o[1]?Ze:Qe}let i=n(t),a=i(t);return{c(){e=te("div"),a.c(),O(e,"class",t[2])},m(o,s){D(o,e,s),a.m(e,null),t[21](e)},p(o,[s]){i===(i=n(o))&&a?a.p(o,s):(a.d(1),a=i(o),a&&(a.c(),a.m(e,null))),s&4&&O(e,"class",o[2])},i:K,o:K,d(o){o&&I(e),a.d(),t[21](null)}}}const Ee=t=>t+"_"+Math.floor(Math.random()*1e9)+String(Date.now()),et=t=>typeof t.options.set=="function"&&t.options.isRegistered("disabled"),tt=()=>{let t={listeners:[],scriptId:Ee("tiny-script"),scriptLoaded:!1,injected:!1};const e=(i,a,o,s)=>{t.injected=!0;const l=a.createElement("script");l.referrerPolicy="origin",l.type="application/javascript",l.src=o,l.onload=()=>{s()},a.head&&a.head.appendChild(l)};return{load:(i,a,o)=>{t.scriptLoaded?o():(t.listeners.push(o),t.injected||e(t.scriptId,i,a,()=>{t.listeners.forEach(s=>s()),t.scriptLoaded=!0}))}}};let nt=tt();function it(t,e,n){let{id:i=Ee("tinymce-svelte")}=e,{inline:a=void 0}=e,{disabled:o=!1}=e,{readonly:s=!1}=e,{apiKey:l="no-api-key"}=e,{licenseKey:d=void 0}=e,{channel:c="8"}=e,{scriptSrc:h=void 0}=e,{conf:y={}}=e,{modelEvents:w="change input undo redo"}=e,{value:p=""}=e,{text:b=""}=e,{cssClass:L="tinymce-wrapper"}=e,C,u,m,S=p,N=o,W=s;const q=(r,f)=>{var g;typeof((g=r.mode)==null?void 0:g.set)=="function"&&r.mode.set(f?"readonly":"design")},Y=(r,f)=>{et(r)?r.options.set("disabled",f):r.mode.set(f?"readonly":"design")},k=Fe(),E=()=>{const f=typeof window<"u"?window:global;return f&&f.tinymce?f.tinymce:null},X=()=>{var f;const r={...y,target:u,inline:a!==void 0?a:y.inline!==void 0?y.inline:!1,license_key:d,setup:g=>{g.on("PreInit",()=>{Y(g,o),q(g,s)}),n(15,m=g),g.on("init",()=>{g.setContent(p),g.on(w,()=>{n(16,S=g.getContent()),S!==p&&(n(5,p=S),n(6,b=g.getContent({format:"text"})))})}),Je(g,k),typeof y.setup=="function"&&y.setup(g)}};n(4,u.style.visibility="",u),(f=E())==null||f.init(r)};Re(()=>{if(E()!==null)X();else{const r=h||`https://cdn.tiny.cloud/1/${l}/tinymce/${c}/tinymce.min.js`;nt.load(C.ownerDocument,r,()=>{X()})}}),Ue(()=>{var r;m&&((r=E())==null||r.remove(m))});function B(r){Q[r?"unshift":"push"](()=>{u=r,n(4,u)})}function F(r){Q[r?"unshift":"push"](()=>{u=r,n(4,u)})}function R(r){Q[r?"unshift":"push"](()=>{C=r,n(3,C)})}return t.$$set=r=>{"id"in r&&n(0,i=r.id),"inline"in r&&n(1,a=r.inline),"disabled"in r&&n(7,o=r.disabled),"readonly"in r&&n(8,s=r.readonly),"apiKey"in r&&n(9,l=r.apiKey),"licenseKey"in r&&n(10,d=r.licenseKey),"channel"in r&&n(11,c=r.channel),"scriptSrc"in r&&n(12,h=r.scriptSrc),"conf"in r&&n(13,y=r.conf),"modelEvents"in r&&n(14,w=r.modelEvents),"value"in r&&n(5,p=r.value),"text"in r&&n(6,b=r.text),"cssClass"in r&&n(2,L=r.cssClass)},t.$$.update=()=>{t.$$.dirty&491936&&(m&&S!==p&&(m.setContent(p),n(6,b=m.getContent({format:"text"}))),m&&s!==W&&(n(18,W=s),q(m,s)),m&&o!==N&&(n(17,N=o),Y(m,o)))},[i,a,L,C,u,p,b,o,s,l,d,c,h,y,w,m,S,N,W,B,F,R]}class ne extends G{constructor(e){super(),V(this,e,it,$e,z,{id:0,inline:1,disabled:7,readonly:8,apiKey:9,licenseKey:10,channel:11,scriptSrc:12,conf:13,modelEvents:14,value:5,text:6,cssClass:2})}}ne.__docgen={keywords:[],data:[{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"inline",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"readonly",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"apiKey",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"no-api-key"'},{name:"licenseKey",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"channel",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"4",text:'"4"'},{kind:"const",type:"string",value:"5",text:'"5"'},{kind:"const",type:"string",value:"6",text:'"6"'},{kind:"const",type:"string",value:"7",text:'"7"'},{kind:"const",type:"string",value:"8",text:'"8"'},{kind:"const",type:"string",value:"4-dev",text:'"4-dev"'},{kind:"const",type:"string",value:"4-testing",text:'"4-testing"'},{kind:"const",type:"string",value:"5-dev",text:'"5-dev"'},{kind:"const",type:"string",value:"5-testing",text:'"5-testing"'},{kind:"const",type:"string",value:"6-dev",text:'"6-dev"'},{kind:"const",type:"string",value:"6-testing",text:'"6-testing"'},{kind:"const",type:"string",value:"7-dev",text:'"7-dev"'},{kind:"const",type:"string",value:"7-testing",text:'"7-testing"'},{kind:"const",type:"string",value:"8-dev",text:'"8-dev"'},{kind:"const",type:"string",value:"8-testing",text:'"8-testing"'}],text:'"4" | "5" | "6" | "7" | "8" | "4-dev" | "4-testing" | "5-dev" | "5-testing" | "6-dev" | "6-testing" | "7-dev" | "7-testing" | "8-dev" | "8-testing"'},static:!1,readonly:!1,defaultValue:'"8"'},{name:"scriptSrc",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"conf",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"RawEditorOptions"},static:!1,readonly:!1,defaultValue:"{}"},{name:"modelEvents",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"change input undo redo"'},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"text",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"cssClass",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"tinymce-wrapper"'}],name:"Editor.svelte"};const ot="https://tinymce-ai-jwt.onrender.com",at={config:{tinymceai_token_provider:()=>fetch(`${ot}/jwt`,{method:"POST",headers:{"Content-Type":"application/json"}}).then(t=>t.json()),content_id:"render_doc_1",tinymceai_sidebar_type:"static",tinymceai_default_model:"auto",tinymceai_allow_model_selection:!0,tinymceai_quickactions_menu:["ai-quickactions-chat-prompts","ai-quickactions-improve-writing","ai-quickactions-continue-writing","ai-quickactions-check-grammar","ai-quickactions-change-length","ai-quickactions-change-tone","ai-quickactions-translate","ai-quickactions-custom"],tinymceai_quickactions_chat_prompts:["ai-chat-explain","ai-chat-summarize","ai-chat-highlight-key-points"],tinymceai_quickactions_change_tone_menu:["ai-quickactions-tone-casual","ai-quickactions-tone-direct","ai-quickactions-tone-friendly","ai-quickactions-tone-confident","ai-quickactions-tone-professional"],tinymceai_languages:[{title:"English",language:"english"},{title:"Chinese (Simplified)",language:"chinese"},{title:"Spanish",language:"spanish"},{title:"German",language:"german"},{title:"Japanese",language:"japanese"},{title:"Portuguese",language:"portuguese"},{title:"Korean",language:"korean"},{title:"Italian",language:"italian"},{title:"Russian",language:"russian"},{title:"French",language:"french"}],tinymceai_quickactions_custom:[{type:"chat",title:"Generate Outline",prompt:"Create a detailed outline for the selected content"},{type:"action",title:"Convert to Table",prompt:"Convert this data into an HTML table",model:"gpt-4.1"},{type:"chat",title:"Explain Like I'm 5",prompt:"Explain the selected content as if I am a 5 year old child"}],tinymceai_chat_welcome_message:"<p><strong>Welcome to AI Chat!</strong></p><p>I can help you write, edit, review, and brainstorm. Ask me anything or use the quick actions above.</p>",tinymceai_chat_fetch_sources:()=>(console.log("[tinymceai] tinymceai_chat_fetch_sources called"),Promise.resolve([{label:"Sample Documents",icon:"document-properties",sources:[{label:"Company Guidelines",id:"doc-guidelines",type:"web-resource"},{label:"Product Roadmap",id:"doc-roadmap",type:"file"},{label:"FAQ Document",id:"doc-faq",type:"web-resource"}]}])),tinymceai_chat_fetch_source:t=>{if(console.log("[tinymceai] tinymceai_chat_fetch_source called with id:",t),t==="doc-guidelines")return Promise.resolve({type:"web-resource",url:"https://www.tiny.cloud"});if(t==="doc-roadmap"){const e=new Blob(["Sample roadmap content for testing"],{type:"text/plain"}),n=new File([e],"roadmap.txt",{type:"text/plain"});return Promise.resolve({type:"file",file:n})}else return Promise.resolve({type:"web-resource",url:"https://www.tiny.cloud/docs"})}},toolbar:"tinymceai-chat tinymceai-review tinymceai-quickactions",name:"tinymceai"},st=[{id:"1",title:"Quick replies",items:[{id:"2",title:"Message received",content:`<p dir="ltr">Hey {{Customer.FirstName}}!</p>
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
<p dir="ltr">{{Company.Name}} Customer Support</p>`}]},{id:"6",title:"Email Signatures",items:[{id:"11",title:"Tiny Signature",content:'<p>Regards<br /><br /><br /><a title="Tiny Technologies Inc" href="https://www.tiny.cloud/" target="_blank"><img src="https://www.tiny.cloud/email-static/tiny-logo.png" alt="Tiny Technologies Inc" width="130" height="42" /></a></p><p>Shiridi Gandham<br />QA Template Manager</p><p>Email:&nbsp;<a title="Email Shiridi" href="mailto:shiridi.gandham@tiny.cloud" target="_blank">shiridi.gandham@tiny.cloud</a><br />Phone:&nbsp;(+617) 3161 3557</p><p>Tiny Technologies<br /><a title="Tiny Technologies" href="https://www.tiny.cloud/" target="_blank">www.tiny.cloud</a></p><p><a title="Linkedin" href="https://www.linkedin.com/company/jointiny/" target="_blank" aria-invalid="true"><img src="https://www.tiny.cloud/email-static/social-linkedin.png" alt="Linkedin" width="20" height="20" /></a>&nbsp;<a title="Facebook" href="https://www.facebook.com/jointiny" target="_blank"><img src="https://www.tiny.cloud/email-static/social-facebook.png" alt="Facebook" width="20" height="20" /></a>&nbsp;<a title="Twitter" href="https://twitter.com/joinTiny" target="_blank"><img src="https://www.tiny.cloud/email-static/social-twitter.png" alt="Twitter" width="20" height="20" /></a>&nbsp;<a title="GitHub" href="https://github.com/tinymce/" target="_blank"><img src="https://www.tiny.cloud/email-static/social-github.png" alt="GitHub" width="20" height="20" /></a>&nbsp;<a title="Stack Overflow" href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank"><img src="https://www.tiny.cloud/email-static/social-stackoverflow.png" alt="Stack Overflow" width="20" height="20" /></a></p>'}]}],rt={toolbar:"addtemplate inserttemplate",name:"advtemplate",config:{advtemplate_templates:st}},lt={name:"accordion",toolbar:"accordion",config:{}},ct=[{value:"Current.Date",title:"Current date in DD/MM/YYYY format"},{value:"Campaign.Toc",title:"Linked table of contents in your campaign"},{title:"Phone",menu:[{value:"Phone.Home"},{value:"Phone.work"}]},{title:"Person",menu:[{value:"Person.Name"},{value:"Person.Name.First"},{value:"Person.Name.Last"},{value:"Person.Name.Full"},{title:"Email",menu:[{value:"Person.Email.Work"},{value:"Person.Email.Home"}]}]}],dt={toolbar:"mergetags",name:"mergetags",config:{mergetags_prefix:"${",mergetags_suffix:"}",mergetags_list:ct}},Me="https://demouserdirectory.tiny.cloud/v1/users",pt=async(t,e)=>{const n=t.term.toLowerCase();await fetch(`${Me}?q=${encodeURIComponent(n)}`).then(i=>i.json()).then(i=>e(i.data.map(a=>({id:a.id,name:a.name,image:a.avatar,description:a.custom.role})))).catch(i=>console.log(i))},mt=(t,e)=>{const n=t.getDoc().createElement("span");return n.className="mymention",n.setAttribute("data-mention-id",e.id),n.appendChild(t.getDoc().createTextNode("@"+e.name)),n},Ae=t=>{const e=document.createElement("div");return e.innerHTML='<div class="card"><img class="avatar" src="'+t.image+'"><h1>'+t.name+"</h1><p>"+t.description+"</p></div>",e},ut=async(t,e)=>{const n=Ae(t);e(n)},ft=async(t,e)=>{const n=t.getAttribute("data-mention-id");await fetch(`${Me}/${n}`).then(i=>i.json()).then(i=>{const a=Ae({id:i.id,name:i.name,image:i.avatar,description:i.custom.role});e(a)}).catch(i=>console.error(i))},gt={toolbar:"mentions",name:"mentions",config:{mentions_fetch:pt,mentions_menu_complete:mt,mentions_menu_hover:ut,mentions_select:ft,mentions_selector:".mymention",mentions_item_type:"profile",mentions_min_chars:0}},j="james-wilson",v={},ht=(t,e,n)=>{if(t.content==="fail")n(new Error("Something has gone wrong..."));else{const i="annotation-"+Pe();v[i]={uid:i,comments:[{uid:i,author:j,authorName:"James Wilson",authorAvatar:"https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg",content:t.content,createdAt:t.createdAt,modifiedAt:t.createdAt}]},setTimeout(()=>e({conversationUid:i}),_)}},_=200,Pe=()=>crypto.getRandomValues(new Uint32Array(1))[0].toString(36).substring(2,14),yt=(t,e)=>{const n="annotation-"+Pe();v[t.conversationUid].comments.push({uid:n,author:j,authorName:"James Wilson",authorAvatar:"https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg",content:t.content,createdAt:t.createdAt,modifiedAt:t.createdAt}),setTimeout(()=>e({commentUid:n}),_)},bt=(t,e)=>{setTimeout(()=>e({canDelete:!1,reason:"Must be admin user"}),_)},_t=(t,e)=>{const n=v[t.conversationUid];j===n.comments[0].author?(delete v[t.conversationUid],setTimeout(()=>e({canResolve:!0}),_)):setTimeout(()=>e({canResolve:!1,reason:"Must be conversation author"}),_)},vt=(t,e)=>{const n=v[t.conversationUid].comments;let i="Comment not found";const a=n.filter(o=>{if(o.uid===t.commentUid){if(j===o.author)return!1;i="Not authorised to delete this comment"}return!0});a.length===n.length?setTimeout(()=>e({canDelete:!1,reason:i}),_):(v[t.conversationUid].comments=a,setTimeout(()=>e({canDelete:!0}),_))},wt=(t,e)=>{const n=v[t.conversationUid].comments;let i="Comment not found",a=!1;const o=n.map(s=>{if(s.uid===t.commentUid){if(j===s.author)return a=!0,{...s,content:t.content,modifiedAt:new Date().toISOString()};i="Not authorised to edit this comment"}return s});a?(v[t.conversationUid].comments=o,setTimeout(()=>e({canEdit:a}),_)):setTimeout(()=>e({canEdit:a,reason:i}),_)},kt=(t,e)=>{const n=v[t.conversationUid];j===n.comments[0].author?(delete v[t.conversationUid],setTimeout(()=>e({canDelete:!0}),_)):setTimeout(()=>e({canDelete:!1,reason:"Must be conversation author"}),_)},xt=(t,e)=>{setTimeout(()=>{e({conversation:{uid:v[t.conversationUid].uid,comments:[...v[t.conversationUid].comments]}})},_)},Ct=(t,e)=>{const n={};t.forEach(i=>{const a=v[i];a&&(n[i]={...a})}),setTimeout(()=>e({conversations:n}),_)},Tt={toolbar:"comments",name:"tinycomments",config:{tinycomments_mode:"callback",tinycomments_mentions_enabled:!0,tinycomments_create:ht,tinycomments_reply:yt,tinycomments_delete:bt,tinycomments_resolve:_t,tinycomments_delete_all:kt,tinycomments_lookup:xt,tinycomments_delete_comment:vt,tinycomments_edit_comment:wt,tinycomments_fetch:Ct,tinycomments_author:j,tinycomments_author_name:"James Wilson",tinycomments_avatar:"https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg",tinycomments_fetch_author_info:t=>{setTimeout(()=>t({author:j,authorName:"James Wilson",authorAvatar:"https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_james-wilson_128_52f19412.jpg"}),_)}}},St={toolbar:"numlist bullist",name:"advlist",config:{advlist_number_styles:"default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman",advlist_bullet_styles:"default,circle,disc,square"}},Et={history:{2:[{id:1,uid:"james-wilson",timestamp:1752576936e3,feedback:"Nice improvement!"}]},version:1,contents:[{type:"p",children:[{type:"img",attrs:{style:"display: block; margin-left: auto; margin-right: auto;",title:"Tiny Logo",src:"https://www.tiny.cloud/docs/images/logos/android-chrome-256x256.png",alt:"TinyMCE Logo",width:"128",height:"128"}}]},{type:"h2",attrs:{style:"text-align: center;"},children:[{text:"Welcome to the TinyMCE Suggested Edits "},{text:"interactive ",opData:{id:1,type:"insert",uid:"alex-thompson",timestamp:1752015064e3}},{text:"demo!"}]},{type:"p",attrs:{style:"text-align: center;"},children:[{text:"Try out the Suggested Edits feature"},{text:": type in the editor, apply formatting or delete some content. T",opData:{id:2,type:"insert",uid:"alex-thompson",timestamp:1752415064e3}},{text:" by typing in the editor and t",opData:{id:2,type:"remove",uid:"alex-thompson",timestamp:1752415064e3}},{text:"hen"},{text:",",opData:{id:3,type:"insert",uid:"alex-thompson",timestamp:1752515064e3}},{text:" click"},{text:"ing",opData:{id:4,type:"remove",uid:"alex-thompson",timestamp:1752515064e3}},{text:" the Review Changes button in the toolbar"},{text:" to see your changes",opData:{id:5,type:"insert",uid:"kai-nakamura",timestamp:1752615064e3}},{text:"."}]},{type:"p",attrs:{style:"text-align: center;"},children:[{text:"And visit the "},{text:"pricing page",opData:{id:6,type:"modify",uid:"kai-nakamura",timestamp:1752615064e3},format:[{type:"a",attrs:{href:"https://www.tiny.cloud/pricing"}}],oldFormat:[{type:"a",attrs:{href:"https://www.tiny.cloud/pricing"}},"em"]},{text:" to learn more about our Premium plugins."}]},{type:"h2",children:[{text:"A simple table to play with"}]},{type:"table",attrs:{style:"border-collapse: collapse; width: 100%;",border:"1"},children:[{type:"thead",children:[{type:"tr",attrs:{style:"text-align: left;"},children:[{type:"th",children:[{text:"Product"}]},{type:"th",children:[{text:"Cost"}]},{type:"th",children:[{text:"Really?"}]}]}]},{type:"tbody",children:[{type:"tr",children:[{type:"td",children:[{text:"TinyMCE Cloud"}]},{type:"td",children:[{text:"Get started for free"}]},{type:"td",children:[{text:"Yes!",format:["strong"]}]}]},{type:"tr",children:[{type:"td",children:[{text:"Plupload"}]},{type:"td",children:[{text:"Free"}]},{type:"td",children:[{text:"Yes!",format:["strong"]}]}]}]}]},{type:"h2",opData:{id:7,type:"insert",uid:"mia-andersson",timestamp:1752576331e3},children:[{text:"Found a bug?"}]},{type:"p",children:[{text:" ",opData:{id:7,type:"remove",uid:"mia-andersson",timestamp:1752576331e3}},{text:"If you believe you have found a bug please create an issue on the ",opData:{id:7,type:"insert",uid:"mia-andersson",timestamp:1752576331e3}},{text:"GitHub repo",opData:{id:7,type:"insert",uid:"mia-andersson",timestamp:1752576331e3},format:[{type:"a",attrs:{href:"https://github.com/tinymce/tinymce/issues"}}]},{text:" to report it to the developers.",opData:{id:7,type:"insert",uid:"mia-andersson",timestamp:1752576331e3}}]},{type:"h2",children:[{text:"Finally…"}]},{type:"p",children:[{text:"Don’t forget to check out "},{text:"Plupload",format:[{type:"a",attrs:{href:"http://www.plupload.com",target:"_blank",rel:"noopener"}}]},{text:", the upload solution featuring HTML5 upload support."}]},{type:"p",children:[{text:"Thanks for supporting TinyMCE. We hope it helps you and your users create great content."}]},{type:"p",children:[{text:"All the best from the TinyMCE team."}]}]},Mt={toolbar:"suggestededits",name:"suggestededits",config:{suggestededits_model:Et,suggestededits_access:"full",suggestededits_content:"html"}},At={name:"codesample",toolbar:"codesample",config:{codesample_languages:[{text:"HTML/XML",value:"markup"},{text:"JavaScript",value:"javascript"},{text:"CSS",value:"css"},{text:"PHP",value:"php"},{text:"Ruby",value:"ruby"},{text:"Python",value:"python"},{text:"Java",value:"java"},{text:"C",value:"c"},{text:"C#####",value:"csharpppppp"},{text:"C++",value:"cpp"}]}},Pt={toolbar:"exportword",name:"exportword",config:{exportword_service_url:"https://exportdocx.converter.tiny.cloud",exportword_converter_options:{format:"A4",margin_top:"1in",margin_bottom:"1in",margin_right:"1in",margin_left:"1in",header:[{html:"<h1>First page header.</h1>",css:"h1 { font-size: 30px; }",type:"first"}],footer:[{html:"<p>Page footer</p>",css:"p { font-size: 12px; }",type:"default"}],orientation:"portrait",auto_pagination:!0,base_url:"https://example.com",timezone:"UTC"},exportword_converter_style:"p { color: cyan !important }"}},jt={name:"insertdatetime",toolbar:"insertdatetime",config:{insertdatetime_dateformat:"%Y/%m/%d",insertdatetime_timeformat:"%H%M%S",insertdatetime_formats:["%H:%M:%S","%Y-%m-%d","%I:%M:%S %p","%D","%H%M%S","%Y/%m/%d"]}},It={name:"anchor",toolbar:"anchor",config:{}},Dt={name:"autolink",config:{}},qt={name:"autosave",config:{}},Lt={name:"charmap",toolbar:"charmap",config:{}},Nt={name:"code",toolbar:"code",config:{}},Ft={name:"editimage",config:{}},Rt={name:"directionality",toolbar:"ltr rtl",config:{}},Ut={name:"emoticons",toolbar:"emoticons",config:{}},Ht={name:"fullscreen",toolbar:"fullscreen",config:{}},Ot={name:"help",toolbar:"help",config:{}},zt={name:"image",toolbar:"image",config:{image_advtab:!0,image_description:!0,image_dimensions:!0,image_title:!0,image_caption:!0}},Wt={name:"importcss",config:{}},Bt={name:"link",toolbar:"link unlink",config:{}},Kt={name:"lists",toolbar:"numlist bullist",config:{}},Gt={name:"media",toolbar:"media",config:{}},Vt={name:"nonbreaking",toolbar:"nonbreaking",config:{}},Yt={name:"pagebreak",toolbar:"pagebreak",config:{}},Xt={name:"preview",toolbar:"preview",config:{}},Jt={name:"quickbars",config:{quickbars_image_toolbar:"alignleft aligncenter alignright",quickbars_selection_toolbar:"undo redo | copy cut paste | quicklink align",quickbars_insert_toolbar:"quickimage quicktable | hr pagebreak"}},Qt={name:"save",toolbar:"save cancel",config:{}},Zt={name:"searchreplace",toolbar:"searchreplace",config:{save_onsavecallback:function(){alert("Saved")},save_oncancelcallback:function(){alert("Save Cancelled")}}},$t={name:"table",toolbar:"table",config:{}},en={name:"visualblocks",toolbar:"visualblocks",config:{}},tn={name:"visualchars",toolbar:"visualchars",config:{}},nn={name:"wordcount",config:{}},on={name:"a11ychecker",config:{},toolbar:"a11ycheck"},an={name:"advcode",config:{advcode_inline:!0}},sn={name:"advtable",config:{}},rn={name:"autocorrect",config:{autocorrect_autocorrect:!0,autocorrect_capitalize:!0}},ln={name:"casechange",toolbar:"casechange",config:{}},cn={name:"checklist",toolbar:"checklist",config:{}},dn={name:"editimage",toolbar:"rotateleft rotateright flipv fliph editimage imageoptions",config:{editimage_toolbar:"rotateleft rotateright flipv fliph editimage imageoptions",editimage_proxy_service_url:"https://imageproxy.tiny.cloud"}},pn={name:"exportpdf",toolbar:"exportpdf",config:{exportpdf_service_url:"https://exportpdf.converter.tiny.cloud",exportpdf_converter_options:{header_html:'<div style="text-align:center;">Document Title</div><div>Date: <span class="date"></span></div><div>Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>',footer_html:'<div style="text-align:right;">Confidential</div>',header_and_footer_css:"div { color: blue; font-family: Arial, sans-serif; font-size: 10pt; }",margin_top:"2cm",margin_bottom:"2cm",margin_left:"20mm",margin_right:"20mm",format:"A4",page_orientation:"portrait"},exportpdf_converter_style:"body { color: black !important; font-family: Helvetica, Arial, sans-serif; } p { color: cyan !important; }"}},mn={name:"footnotes",toolbar:"footnotes footnotesupdate",config:{}},un={name:"formatpainter",toolbar:"formatpainter",config:{}},fn={name:"importword",toolbar:"importword",config:{importword_service_url:"https://importdocx.converter.tiny.cloud",importword_converter_options:{formatting:{styles:"inline",resets:"inline",defaults:"inline"}}}},gn={name:"inlinecss",config:{}},hn={name:"linkchecker",config:{}},yn={name:"markdown",config:{}},bn={name:"math",toolbar:"math",config:{}},_n={name:"mediaembed",config:{}},vn={name:"pageembed",toolbar:"pageembed",config:{}},wn={name:"permanentpen",toolbar:"permanentpen",config:{permanentpen_properties:{fontname:"impact,sans-serif",forecolor:"#E74C3C",fontsize:"12px",bold:!0,italic:!1,strikethrough:!1,underline:!1}}},kn={name:"powerpaste",config:{}},xn=[{revisionId:"1",createdAt:"2023-11-25T03:30:46.171Z",content:"<h2>Rev 1</h2>"},{revisionId:"2",createdAt:"2023-11-25T12:06:09.675Z",content:"<h2>Rev 2</h2>"},{revisionId:"3",createdAt:"2023-11-27T03:23:32.351Z",content:"<h2>Rev 3</h2>"},{revisionId:"4",createdAt:"2023-11-29T12:35:16.203Z",content:"<h2>Rev 4</h2>"},{revisionId:"5",createdAt:"2023-11-28T08:01:56.100Z",content:"<h2>Rev 5</h2>"}],Cn={toolbar:"revisionhistory",name:"revisionhistory",config:{revisionhistory_fetch:()=>Promise.resolve(xn)}},Tn={name:"tableofcontents",toolbar:"tableofcontents",config:{}},Sn={name:"tinymcespellchecker",config:{}},En={name:"typography",toolbar:"typography",config:{}},Mn={name:"uploadcare",toolbar:"uploadcare",config:{uploadcare_public_key:"6ff5776be9bb64e10023"}},se=[lt,At,St,It,Dt,qt,Lt,Nt,Ft,Rt,Ut,Ht,Ot,zt,Wt,jt,Bt,Kt,Gt,Vt,Yt,Xt,Jt,Qt,Zt,$t,en,tn,nn,on,an,sn,rt,rn,ln,cn,dn,pn,Pt,mn,un,fn,gn,hn,yn,bn,_n,gt,dt,vn,wn,kn,Cn,Mt,Tn,Tt,Sn,En,Mn,at],An="https://demouserdirectory.tiny.cloud/v1/users",Pn="james-wilson",jn={height:600,mobile:{theme:"silver",contextmenu:"link image table preview"},pad_empty_with_br:!0,help_accessibility:!0,user_id:Pn,fetch_users:t=>Promise.all(t.map(e=>fetch(`${An}/${e}`).then(n=>n.json()).catch(()=>({id:e}))))},In=se.map(t=>t==null?void 0:t.toolbar).filter(Boolean).join(" | "),Dn=({excludePlugins:t,overrideConfig:e})=>{const n=se.map(o=>o.name).filter(o=>!(t!=null&&t.includes(o))),i=se.reduce((o,s)=>({...o,...s.config}),{});return{...{...jn,...i,...e},plugins:n,toolbar:In,height:500}};function qn(t){let e,n,i;var a=t[0];function o(s,l){return{}}return a&&(e=Z(a,o())),{c(){e&&A(e.$$.fragment),n=de()},m(s,l){e&&P(e,s,l),D(s,n,l),i=!0},p(s,[l]){if(l&1&&a!==(a=s[0])){if(e){le();const d=e;T(d.$$.fragment,1,0,()=>{M(d,1)}),ce()}a?(e=Z(a,o()),A(e.$$.fragment),x(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}},i(s){i||(e&&x(e.$$.fragment,s),i=!0)},o(s){e&&T(e.$$.fragment,s),i=!1},d(s){s&&I(n),e&&M(e,s)}}}function Ln(t,e,n){let{Stories:i}=e,{repositories:a}=e;return Oe(a),t.$$set=o=>{"Stories"in o&&n(0,i=o.Stories),"repositories"in o&&n(1,a=o.repositories)},[i,a]}class Nn extends G{constructor(e){super(),V(this,e,Ln,qn,z,{Stories:0,repositories:1})}}function Fn(t){let e,n,i;var a=t[0];function o(s,l){return{props:{}}}return a&&(e=Z(a,o()),t[4](e)),{c(){e&&A(e.$$.fragment),n=de()},m(s,l){e&&P(e,s,l),D(s,n,l),i=!0},p(s,[l]){if(l&1&&a!==(a=s[0])){if(e){le();const d=e;T(d.$$.fragment,1,0,()=>{M(d,1)}),ce()}a?(e=Z(a,o()),s[4](e),A(e.$$.fragment),x(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(a){const d={};e.$set(d)}},i(s){i||(e&&x(e.$$.fragment,s),i=!0)},o(s){e&&T(e.$$.fragment,s),i=!1},d(s){s&&I(n),t[4](null),e&&M(e,s)}}}function Rn(t,e,n){let{Stories:i}=e,{args:a={}}=e,{storyContext:o={}}=e,s;Ce(e);const l=Object.fromEntries(Object.entries(o.argTypes).filter(([c,h])=>h.action&&a[c]!=null).map(([c,h])=>[h.action,a[c]]));function d(c){Q[c?"unshift":"push"](()=>{s=c,n(1,s)})}return t.$$set=c=>{n(6,e=H(H({},e),oe(c))),"Stories"in c&&n(0,i=c.Stories),"args"in c&&n(2,a=c.args),"storyContext"in c&&n(3,o=c.storyContext)},t.$$.update=()=>{t.$$.dirty&12&&We(a,o),t.$$.dirty&2&&s&&Object.entries(l).forEach(([c,h])=>s.$on(c,h))},e=oe(e),[i,s,a,o,d]}class Un extends G{constructor(e){super(),V(this,e,Rn,Fn,z,{Stories:0,args:2,storyContext:3})}}function Hn(t){const e=t.split("").reduce((n,i)=>(n<<5)-n+i.charCodeAt(0)|0,0);return Math.abs(e).toString(16)}function On({id:t,name:e},n=[]){if(t)return t;if(!e)throw new Error("Id or Name should be specified");let i=e.replace(/\W+(.|$)/g,(a,o)=>o.toUpperCase());return n.indexOf(i)>=0&&(console.warn(`Story name conflict with exports - Please add an explicit id for story ${e}`),i+=Hn(e)),i}const{combineParameters:J}=__STORYBOOK_MODULE_PREVIEW_API__,{logger:ie}=__STORYBOOK_MODULE_CLIENT_LOGGER__,zn=document.createDocumentFragment?()=>document.createDocumentFragment():()=>document.createElement("div"),Wn=(t,{stories:e={},meta:n={},allocatedIds:i=[]},a=void 0)=>{var h,y,w;const o={meta:null,stories:[]};try{new Nn({target:zn(),props:{Stories:t,repositories:o}}).$destroy()}catch(p){ie.error(`Error extracting stories ${p.toString()}`,p)}const s=a||o.meta;if(!s)return ie.error("Missing module meta export or <Meta/> tag"),{};n.description&&!((w=(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.description)!=null&&w.component)&&(s.parameters=J(s.parameters,{docs:{description:{component:n.description}}}));const{component:l}=s,d=o.stories.filter(p=>p.isTemplate).map(p=>p.id),c=d.filter((p,b)=>d.indexOf(p)!==b);return c.length>0&&ie.warn(`Found duplicates templates id for stories '${s.name}': ${c}`),{meta:s,stories:o.stories.filter(p=>!p.isTemplate).reduce((p,b)=>{const{id:L,name:C,template:u,component:m,source:S=!1,play:N,...W}=b,q=On(b,i);if(!q)return p;const Y=u!=null&&d.indexOf(u)<0,k=(r,f)=>{if(Y)throw new Error(`Story ${C} is referencing an unknown template ${u}`);return{Component:Un,props:{Stories:t,storyName:C,templateId:u,args:r,storyContext:f,sourceComponent:m||l}}};k.storyName=C,Object.entries(W).forEach(([r,f])=>{k[r]=f}),N&&(k.play=r=>{var g;const f=(g=r==null?void 0:r.playFunction)==null?void 0:g.__play;return f?f(r):N(r)});const E=e[u?`tpl:${u}`:q],X=E?E.hasArgs:!0,B=E?E.source:null;B&&(k.parameters=J(k.parameters||{},{storySource:{source:B}}));let F;S===!0||S===!1&&!X?F=B:typeof S=="string"&&(F=S),F&&(k.parameters=J(k.parameters||{},{docs:{source:{code:F}}}));const R=e[q];return R!=null&&R.description&&(k.parameters=J(k.parameters||{},{docs:{description:{story:R.description}}})),p[q]=k,p},{})}};function Bn(t){let e,n;const i=[{apiKey:ee},{value:t[0]},t[8],{conf:t[2]}];let a={};for(let o=0;o<i.length;o+=1)a=H(a,i[o]);return e=new ne({props:a}),{c(){A(e.$$.fragment)},m(o,s){P(e,o,s),n=!0},p(o,s){const l=s&261?ke(i,[s&0&&{apiKey:ee},s&1&&{value:o[0]},s&256&&xe(o[8]),s&4&&{conf:o[2]}]):{};e.$set(l)},i(o){n||(x(e.$$.fragment,o),n=!0)},o(o){T(e.$$.fragment,o),n=!1},d(o){M(e,o)}}}function Kn(t){let e,n,i;const a=[{apiKey:ee},{value:t[0]},{conf:t[2]},t[8]];let o={};for(let s=0;s<a.length;s+=1)o=H(o,a[s]);return n=new ne({props:o}),{c(){e=te("div"),A(n.$$.fragment),we(e,"padding-top","100px")},m(s,l){D(s,e,l),P(n,e,null),i=!0},p(s,l){const d=l&261?ke(a,[l&0&&{apiKey:ee},l&1&&{value:s[0]},l&4&&{conf:s[2]},l&256&&xe(s[8])]):{};n.$set(d)},i(s){i||(x(n.$$.fragment,s),i=!0)},o(s){T(n.$$.fragment,s),i=!1},d(s){s&&I(e),M(n)}}}function Gn(t){let e,n,i,a;return e=new ye({props:{name:"Iframe",args:{...t[1],inline:!1},$$slots:{default:[Bn,({args:o})=>({8:o}),({args:o})=>o?256:0]},$$scope:{ctx:t}}}),i=new ye({props:{name:"Inline",args:{...t[1],inline:!0},$$slots:{default:[Kn,({args:o})=>({8:o}),({args:o})=>o?256:0]},$$scope:{ctx:t}}}),{c(){A(e.$$.fragment),n=He(),A(i.$$.fragment)},m(o,s){P(e,o,s),D(o,n,s),P(i,o,s),a=!0},p(o,[s]){const l={};s&768&&(l.$$scope={dirty:s,ctx:o}),e.$set(l);const d={};s&768&&(d.$$scope={dirty:s,ctx:o}),i.$set(d)},i(o){a||(x(e.$$.fragment,o),x(i.$$.fragment,o),a=!0)},o(o){T(e.$$.fragment,o),T(i.$$.fragment,o),a=!1},d(o){o&&I(n),M(e,o),M(i,o)}}}const Vn={title:"Editor",component:ne},ee="prsghhxax677rv082a1zj9b7cgjuoaqysf7h8ayxi5ao43ha";function Yn(t){let n=`
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
</div>`.trim();const i={channel:"8",scriptSrc:"https://cdn.staging.tiny.cloud/1/451hc4rk1hb0l77jr4loyiutfx7k9fs0decaxvfma65mwulu/tinymce/8-testing/tinymce.min.js"},a=Dn({excludePlugins:["tinydrive","uploadcare"]});return[n,i,a]}class je extends G{constructor(e){super(),V(this,e,Yn,Gn,z,{})}}je.__docgen={version:3,name:"Editor.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const pe=Wn(je,{meta:{},stories:{Iframe:{name:"Iframe",template:!1,source:"<Editor {apiKey} {value} { ...args } conf={ fullConfig }/>",tags:[],hasArgs:!0},Inline:{name:"Inline",template:!1,source:`<div style="padding-top:100px;">
  <Editor {apiKey} {value} conf={ fullConfig } {...args} />
</div>`,tags:[],hasArgs:!0}},allocatedIds:["default","Story","Editor","generateConfig"]},Vn),Jn=pe.meta,Qn=["Iframe","Inline"],Zn=pe.stories.Iframe,$n=pe.stories.Inline;export{Zn as Iframe,$n as Inline,Qn as __namedExportsOrder,Jn as default};
