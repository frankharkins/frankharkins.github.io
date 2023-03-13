(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function E(){}const jt=e=>e;function It(e,t){for(const n in t)e[n]=t[n];return e}function $t(e){return e()}function ct(){return Object.create(null)}function M(e){e.forEach($t)}function ot(e){return typeof e=="function"}function W(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Nt(e){return Object.keys(e).length===0}function bt(e,t,n,i){if(e){const r=wt(e,t,n,i);return e[0](r)}}function wt(e,t,n,i){return e[1]&&i?It(n.ctx.slice(),e[1](i(t))):n.ctx}function vt(e,t,n,i){if(e[2]&&i){const r=e[2](i(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const o=[],l=Math.max(t.dirty.length,r.length);for(let s=0;s<l;s+=1)o[s]=t.dirty[s]|r[s];return o}return t.dirty|r}return t.dirty}function kt(e,t,n,i,r,o){if(r){const l=wt(t,n,i,o);e.p(l,r)}}function xt(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}const Et=typeof window<"u";let Ot=Et?()=>window.performance.now():()=>Date.now(),lt=Et?e=>requestAnimationFrame(e):E;const P=new Set;function Tt(e){P.forEach(t=>{t.c(e)||(P.delete(t),t.f())}),P.size!==0&&lt(Tt)}function Bt(e){let t;return P.size===0&&lt(Tt),{promise:new Promise(n=>{P.add(t={c:e,f:n})}),abort(){P.delete(t)}}}function m(e,t){e.appendChild(t)}function Ct(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Ft(e){const t=y("style");return Mt(Ct(e),t),t.sheet}function Mt(e,t){return m(e.head||e,t),t.sheet}function L(e,t,n){e.insertBefore(t,n||null)}function T(e){e.parentNode&&e.parentNode.removeChild(e)}function Pt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function O(e){return document.createTextNode(e)}function w(){return O(" ")}function ft(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function v(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function St(e){return Array.from(e.childNodes)}function B(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function I(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function qt(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,i,t),r}const V=new Map;let X=0;function Dt(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Ht(e,t){const n={stylesheet:Ft(t),rules:{}};return V.set(e,n),n}function at(e,t,n,i,r,o,l,s=0){const p=16.666/i;let c=`{
`;for(let h=0;h<=1;h+=p){const $=t+(n-t)*o(h);c+=h*100+`%{${l($,1-$)}}
`}const g=c+`100% {${l(n,1-n)}}
}`,f=`__svelte_${Dt(g)}_${s}`,d=Ct(e),{stylesheet:u,rules:_}=V.get(d)||Ht(d,e);_[f]||(_[f]=!0,u.insertRule(`@keyframes ${f} ${g}`,u.cssRules.length));const a=e.style.animation||"";return e.style.animation=`${a?`${a}, `:""}${f} ${i}ms linear ${r}ms 1 both`,X+=1,f}function Rt(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?o=>o.indexOf(t)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(e.style.animation=i.join(", "),X-=r,X||zt())}function zt(){lt(()=>{X||(V.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&T(t)}),V.clear())})}let st;function D(e){st=e}const q=[],rt=[],U=[],ut=[],Wt=Promise.resolve();let it=!1;function Gt(){it||(it=!0,Wt.then(At))}function H(e){U.push(e)}const Y=new Set;let Q=0;function At(){const e=st;do{for(;Q<q.length;){const t=q[Q];Q++,D(t),Kt(t.$$)}for(D(null),q.length=0,Q=0;rt.length;)rt.pop()();for(let t=0;t<U.length;t+=1){const n=U[t];Y.has(n)||(Y.add(n),n())}U.length=0}while(q.length);for(;ut.length;)ut.pop()();it=!1,Y.clear(),D(e)}function Kt(e){if(e.fragment!==null){e.update(),M(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}let S;function Qt(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function Z(e,t,n){e.dispatchEvent(qt(`${t?"intro":"outro"}${n}`))}const J=new Set;let N;function Ut(){N={r:0,c:[],p:N}}function Jt(){N.r||M(N.c),N=N.p}function b(e,t){e&&e.i&&(J.delete(e),e.i(t))}function k(e,t,n,i){if(e&&e.o){if(J.has(e))return;J.add(e),N.c.push(()=>{J.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}const Vt={duration:0};function dt(e,t,n,i){let r=t(e,n),o=i?0:1,l=null,s=null,p=null;function c(){p&&Rt(e,p)}function g(d,u){const _=d.b-o;return u*=Math.abs(_),{a:o,b:d.b,d:_,duration:u,start:d.start,end:d.start+u,group:d.group}}function f(d){const{delay:u=0,duration:_=300,easing:a=jt,tick:h=E,css:$}=r||Vt,x={start:Ot()+u,b:d};d||(x.group=N,N.r+=1),l||s?s=x:($&&(c(),p=at(e,o,d,_,u,a,$)),d&&h(0,1),l=g(x,_),H(()=>Z(e,d,"start")),Bt(F=>{if(s&&F>s.start&&(l=g(s,_),s=null,Z(e,l.b,"start"),$&&(c(),p=at(e,o,l.b,l.duration,0,a,r.css))),l){if(F>=l.end)h(o=l.b,1-o),Z(e,l.b,"end"),s||(l.b?c():--l.group.r||M(l.group.c)),l=null;else if(F>=l.start){const Lt=F-l.start;o=l.a+l.d*a(Lt/l.duration),h(o,1-o)}}return!!(l||s)}))}return{run(d){ot(r)?Qt().then(()=>{r=r(),f(d)}):f(d)},end(){c(),l=s=null}}}function j(e){e&&e.c()}function C(e,t,n,i){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),i||H(()=>{const l=e.$$.on_mount.map($t).filter(ot);e.$$.on_destroy?e.$$.on_destroy.push(...l):M(l),e.$$.on_mount=[]}),o.forEach(H)}function A(e,t){const n=e.$$;n.fragment!==null&&(M(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Xt(e,t){e.$$.dirty[0]===-1&&(q.push(e),Gt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function G(e,t,n,i,r,o,l,s=[-1]){const p=st;D(e);const c=e.$$={fragment:null,ctx:[],props:o,update:E,not_equal:r,bound:ct(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:ct(),dirty:s,skip_bound:!1,root:t.target||p.$$.root};l&&l(c.root);let g=!1;if(c.ctx=n?n(e,t.props||{},(f,d,...u)=>{const _=u.length?u[0]:d;return c.ctx&&r(c.ctx[f],c.ctx[f]=_)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](_),g&&Xt(e,f)),d}):[],c.update(),g=!0,M(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){const f=St(t.target);c.fragment&&c.fragment.l(f),f.forEach(T)}else c.fragment&&c.fragment.c();t.intro&&b(e.$$.fragment),C(e,t.target,t.anchor,t.customElement),At()}D(p)}class K{$destroy(){A(this,1),this.$destroy=E}$on(t,n){if(!ot(n))return E;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!Nt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Yt(e){const t=e-1;return t*t*t+1}function mt(e,{delay:t=0,duration:n=400,easing:i=Yt}={}){const r=getComputedStyle(e),o=+r.opacity,l=parseFloat(r.height),s=parseFloat(r.paddingTop),p=parseFloat(r.paddingBottom),c=parseFloat(r.marginTop),g=parseFloat(r.marginBottom),f=parseFloat(r.borderTopWidth),d=parseFloat(r.borderBottomWidth);return{delay:t,duration:n,easing:i,css:u=>`overflow: hidden;opacity: ${Math.min(u*20,1)*o};height: ${u*l}px;padding-top: ${u*s}px;padding-bottom: ${u*p}px;margin-top: ${u*c}px;margin-bottom: ${u*g}px;border-top-width: ${u*f}px;border-bottom-width: ${u*d}px;`}}const Zt=e=>({}),pt=e=>({}),te=e=>({}),ht=e=>({});function ee(e){let t;return{c(){t=O(e[0])},m(n,i){L(n,t,i)},p(n,i){i&1&&B(t,n[0])},d(n){n&&T(t)}}}function gt(e){let t,n,i;const r=e[6].content,o=bt(r,e,e[5],pt);return{c(){t=y("div"),o&&o.c(),v(t,"class","content svelte-14h285g")},m(l,s){L(l,t,s),o&&o.m(t,null),i=!0},p(l,s){o&&o.p&&(!i||s&32)&&kt(o,r,l,l[5],i?vt(r,l[5],s,Zt):xt(l[5]),pt)},i(l){i||(b(o,l),H(()=>{n||(n=dt(t,mt,{duration:200},!0)),n.run(1)}),i=!0)},o(l){k(o,l),n||(n=dt(t,mt,{duration:200},!1)),n.run(0),i=!1},d(l){l&&T(t),o&&o.d(l),l&&n&&n.end()}}}function ne(e){let t,n,i,r=e[1]?">":"-",o,l,s,p,c,g,f,d;const u=e[6].title,_=bt(u,e,e[5],ht),a=_||ee(e);let h=e[1]&&gt(e);return{c(){t=y("div"),n=y("button"),i=y("span"),o=O(r),l=w(),s=y("h2"),a&&a.c(),p=w(),h&&h.c(),v(i,"class","chevron force-monospace svelte-14h285g"),v(s,"class","svelte-14h285g"),v(n,"class","svelte-14h285g"),v(t,"class",c="component "+(e[1]?"open":"")+" svelte-14h285g")},m($,x){L($,t,x),m(t,n),m(n,i),m(i,o),m(n,l),m(n,s),a&&a.m(s,null),m(t,p),h&&h.m(t,null),e[7](t),g=!0,f||(d=[ft(window,"click",e[4]),ft(n,"click",e[3])],f=!0)},p($,[x]){(!g||x&2)&&r!==(r=$[1]?">":"-")&&B(o,r),_?_.p&&(!g||x&32)&&kt(_,u,$,$[5],g?vt(u,$[5],x,te):xt($[5]),ht):a&&a.p&&(!g||x&1)&&a.p($,g?x:-1),$[1]?h?(h.p($,x),x&2&&b(h,1)):(h=gt($),h.c(),b(h,1),h.m(t,null)):h&&(Ut(),k(h,1,1,()=>{h=null}),Jt()),(!g||x&2&&c!==(c="component "+($[1]?"open":"")+" svelte-14h285g"))&&v(t,"class",c)},i($){g||(b(a,$),b(h),g=!0)},o($){k(a,$),k(h),g=!1},d($){$&&T(t),a&&a.d($),h&&h.d(),e[7](null),f=!1,M(d)}}}function re(e,t,n){let{$$slots:i={},$$scope:r}=t,{title:o="Title"}=t,l=!1,s;function p(){n(1,l=!l)}function c(f){s.contains(f.target)==!1&&n(1,l=!1)}function g(f){rt[f?"unshift":"push"](()=>{s=f,n(2,s)})}return e.$$set=f=>{"title"in f&&n(0,o=f.title),"$$scope"in f&&n(5,r=f.$$scope)},[o,l,s,p,c,r,i,g]}class tt extends K{constructor(t){super(),G(this,t,re,ne,W,{title:0})}}function ie(e){let t,n;return{c(){t=y("span"),n=O(e[0]),v(t,"class","component svelte-16t1e4f"),I(t,"--end-width",e[4]*.6+"rem"),I(t,"--cursor-width",e[1]?"0.6rem":"0"),I(t,"--speed",e[2]+"s"),I(t,"--num-frames",e[4]),I(t,"--text-time-pct",e[5]+"%"),I(t,"--delay",e[3]+"s")},m(i,r){L(i,t,r),m(t,n)},p(i,[r]){r&1&&B(n,i[0]),r&2&&I(t,"--cursor-width",i[1]?"0.6rem":"0"),r&4&&I(t,"--speed",i[2]+"s"),r&8&&I(t,"--delay",i[3]+"s")},i:E,o:E,d(i){i&&T(t)}}}function oe(e,t,n){let{text:i}=t,{cursor:r=!1}=t,{speed:o=i.length/100}=t,{delay:l=0}=t,s=i.length,p=(s-1)/s*100;return e.$$set=c=>{"text"in c&&n(0,i=c.text),"cursor"in c&&n(1,r=c.cursor),"speed"in c&&n(2,o=c.speed),"delay"in c&&n(3,l=c.delay)},[i,r,o,l,s,p]}class R extends K{constructor(t){super(),G(this,t,oe,ie,W,{text:0,cursor:1,speed:2,delay:3})}}function _t(e,t,n){const i=e.slice();return i[4]=t[n],i}function yt(e){let t,n=e[4]+"",i;return{c(){t=y("br"),i=O(n)},m(r,o){L(r,t,o),L(r,i,o)},p(r,o){o&8&&n!==(n=r[4]+"")&&B(i,n)},d(r){r&&T(t),r&&T(i)}}}function le(e){let t,n,i,r,o=e[1]?`(${e[1]})`:"",l,s,p,c,g,f=e[3],d=[];for(let u=0;u<f.length;u+=1)d[u]=yt(_t(e,f,u));return{c(){t=y("li"),n=y("span"),i=O(e[0]),r=w(),l=O(o),s=w(),p=y("span");for(let u=0;u<d.length;u+=1)d[u].c();c=w(),g=y("p"),v(n,"class","title svelte-x2eaw5"),v(p,"class","info"),v(t,"class","svelte-x2eaw5")},m(u,_){L(u,t,_),m(t,n),m(n,i),m(t,r),m(t,l),m(t,s),m(t,p);for(let a=0;a<d.length;a+=1)d[a].m(p,null);m(t,c),m(t,g),g.innerHTML=e[2]},p(u,[_]){if(_&1&&B(i,u[0]),_&2&&o!==(o=u[1]?`(${u[1]})`:"")&&B(l,o),_&8){f=u[3];let a;for(a=0;a<f.length;a+=1){const h=_t(u,f,a);d[a]?d[a].p(h,_):(d[a]=yt(h),d[a].c(),d[a].m(p,null))}for(;a<d.length;a+=1)d[a].d(1);d.length=f.length}_&4&&(g.innerHTML=u[2])},i:E,o:E,d(u){u&&T(t),Pt(d,u)}}}function se(e,t,n){let{title:i="Title"}=t,{comment:r=""}=t,{description:o=""}=t,{info:l=["Institution","Date range"]}=t;return e.$$set=s=>{"title"in s&&n(0,i=s.title),"comment"in s&&n(1,r=s.comment),"description"in s&&n(2,o=s.description),"info"in s&&n(3,l=s.info)},[i,r,o,l]}class et extends K{constructor(t){super(),G(this,t,se,le,W,{title:0,comment:1,description:2,info:3})}}function ce(e){let t,n,i,r,o,l;return{c(){t=y("li"),n=y("a"),i=O(e[0]),r=w(),o=y("p"),l=O(e[2]),v(n,"href",e[1])},m(s,p){L(s,t,p),m(t,n),m(n,i),m(t,r),m(t,o),m(o,l)},p(s,[p]){p&1&&B(i,s[0]),p&2&&v(n,"href",s[1]),p&4&&B(l,s[2])},i:E,o:E,d(s){s&&T(t)}}}function fe(e,t,n){let{title:i="Title"}=t,{link:r=""}=t,{description:o=""}=t;return e.$$set=l=>{"title"in l&&n(0,i=l.title),"link"in l&&n(1,r=l.link),"description"in l&&n(2,o=l.description)},[i,r,o]}class nt extends K{constructor(t){super(),G(this,t,fe,ce,W,{title:0,link:1,description:2})}}function ae(e){let t,n,i;return n=new R({props:{text:"About",delay:z+.3}}),{c(){t=y("span"),j(n.$$.fragment),v(t,"slot","title")},m(r,o){L(r,t,o),C(n,t,null),i=!0},p:E,i(r){i||(b(n.$$.fragment,r),i=!0)},o(r){k(n.$$.fragment,r),i=!1},d(r){r&&T(t),A(n)}}}function ue(e){let t,n,i,r,o,l,s,p,c,g,f,d,u,_;return s=new et({props:{title:"Developer advocate",info:["Qiskit, IBM","2020 - present"],description:`I write and manage content for IBM's online <a
           href='https://qiskit.org/learn/'>quantum computing textbook</a>.
           I act as both a subject matter expert, and a bridge between academics
           and software developers.`}}),c=new et({props:{title:"Tutor",comment:"GCSE & A-level maths and physics",info:["Self-employed","2018-2020"]}}),f=new et({props:{title:"Student",comment:"Physics BSc",info:["University of Leeds","2015-2018"]}}),{c(){t=y("span"),n=y("p"),n.textContent=`Hi, I'm Frank. I have a background in physics, technical writing, and
      software development. I care about effective communication, and creating
      high-quality products.`,i=w(),r=y("h3"),r.textContent="Experience:",o=w(),l=y("ul"),j(s.$$.fragment),p=w(),j(c.$$.fragment),g=w(),j(f.$$.fragment),d=w(),u=y("p"),u.textContent="Contact me for further experience and details",v(t,"slot","content")},m(a,h){L(a,t,h),m(t,n),m(t,i),m(t,r),m(t,o),m(t,l),C(s,l,null),m(l,p),C(c,l,null),m(l,g),C(f,l,null),m(t,d),m(t,u),_=!0},p:E,i(a){_||(b(s.$$.fragment,a),b(c.$$.fragment,a),b(f.$$.fragment,a),_=!0)},o(a){k(s.$$.fragment,a),k(c.$$.fragment,a),k(f.$$.fragment,a),_=!1},d(a){a&&T(t),A(s),A(c),A(f)}}}function de(e){let t,n,i;return n=new R({props:{text:"Projects",delay:z+.4}}),{c(){t=y("span"),j(n.$$.fragment),v(t,"slot","title")},m(r,o){L(r,t,o),C(n,t,null),i=!0},p:E,i(r){i||(b(n.$$.fragment,r),i=!0)},o(r){k(n.$$.fragment,r),i=!1},d(r){r&&T(t),A(n)}}}function me(e){let t,n,i,r,o,l,s,p,c,g;return o=new nt({props:{title:"Carbon footprint calculator",link:"https://frankharkins.github.io/carbon-footprint/",description:`This is a small project I created to help me learn web development
             with Svelte. After trying other online calculators, I wanted to
             create something that showed you the effects of lifestyle changes in
             real time.`}}),s=new nt({props:{title:"CNOT",link:"https://cnot.io",description:"A website introducing quantum computing to undergraduate students."}}),c=new nt({props:{title:"Launchpad whackamole",link:"https://github.com/frankharkins/launchpad-whackamole",description:"A game for the original Novation Launchpad (a midi controller)."}}),{c(){t=y("span"),n=y("p"),n.textContent="Links to personal projects of mine.",i=w(),r=y("ul"),j(o.$$.fragment),l=w(),j(s.$$.fragment),p=w(),j(c.$$.fragment),v(t,"slot","content")},m(f,d){L(f,t,d),m(t,n),m(t,i),m(t,r),C(o,r,null),m(r,l),C(s,r,null),m(r,p),C(c,r,null),g=!0},p:E,i(f){g||(b(o.$$.fragment,f),b(s.$$.fragment,f),b(c.$$.fragment,f),g=!0)},o(f){k(o.$$.fragment,f),k(s.$$.fragment,f),k(c.$$.fragment,f),g=!1},d(f){f&&T(t),A(o),A(s),A(c)}}}function pe(e){let t,n,i;return n=new R({props:{text:"Contact",delay:z+.5}}),{c(){t=y("span"),j(n.$$.fragment),v(t,"slot","title")},m(r,o){L(r,t,o),C(n,t,null),i=!0},p:E,i(r){i||(b(n.$$.fragment,r),i=!0)},o(r){k(n.$$.fragment,r),i=!1},d(r){r&&T(t),A(n)}}}function he(e){let t;return{c(){t=y("span"),t.innerHTML=`<ul><li>Email me at <a href="mailto:frankharkins@hotmail.co.uk">frankharkins@hotmail.co.uk</a></li> 
        <li>Add me on <a href="https://www.linkedin.com/in/francis-harkins-382324151/">Linkedin</a></li></ul>`,v(t,"slot","content")},m(n,i){L(n,t,i)},p:E,d(n){n&&T(t)}}}function ge(e){let t,n,i,r,o,l,s,p,c,g,f,d,u,_;return i=new R({props:{text:"Frank Harkins",speed:z-.2,cursor:!0,delay:.2}}),o=new R({props:{text:"Developer / technical writer",delay:z+.2}}),c=new tt({props:{$$slots:{content:[ue],title:[ae]},$$scope:{ctx:e}}}),f=new tt({props:{$$slots:{content:[me],title:[de]},$$scope:{ctx:e}}}),u=new tt({props:{$$slots:{content:[he],title:[pe]},$$scope:{ctx:e}}}),{c(){t=y("main"),n=y("h1"),j(i.$$.fragment),r=w(),j(o.$$.fragment),l=w(),s=y("br"),p=w(),j(c.$$.fragment),g=w(),j(f.$$.fragment),d=w(),j(u.$$.fragment)},m(a,h){L(a,t,h),m(t,n),C(i,n,null),m(t,r),C(o,t,null),m(t,l),m(t,s),m(t,p),C(c,t,null),m(t,g),C(f,t,null),m(t,d),C(u,t,null),_=!0},p(a,[h]){const $={};h&1&&($.$$scope={dirty:h,ctx:a}),c.$set($);const x={};h&1&&(x.$$scope={dirty:h,ctx:a}),f.$set(x);const F={};h&1&&(F.$$scope={dirty:h,ctx:a}),u.$set(F)},i(a){_||(b(i.$$.fragment,a),b(o.$$.fragment,a),b(c.$$.fragment,a),b(f.$$.fragment,a),b(u.$$.fragment,a),_=!0)},o(a){k(i.$$.fragment,a),k(o.$$.fragment,a),k(c.$$.fragment,a),k(f.$$.fragment,a),k(u.$$.fragment,a),_=!1},d(a){a&&T(t),A(i),A(o),A(c),A(f),A(u)}}}const z=1.6;class _e extends K{constructor(t){super(),G(this,t,null,ge,W,{})}}new _e({target:document.getElementById("app")});