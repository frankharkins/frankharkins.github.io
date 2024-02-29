(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function E(){}function Le(t,e){for(const n in e)t[n]=e[n];return t}function $e(t){return t()}function ie(){return Object.create(null)}function z(t){t.forEach($e)}function be(t){return typeof t=="function"}function H(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ae(t){return Object.keys(t).length===0}function we(t,e,n,i){if(t){const r=ke(t,e,n,i);return t[0](r)}}function ke(t,e,n,i){return t[1]&&i?Le(n.ctx.slice(),t[1](i(e))):n.ctx}function ye(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],o=Math.max(e.dirty.length,r.length);for(let f=0;f<o;f+=1)l[f]=e.dirty[f]|r[f];return l}return e.dirty|r}return e.dirty}function ve(t,e,n,i,r,l){if(r){const o=ke(e,n,i,l);t.p(o,r)}}function Te(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function _(t,e){t.appendChild(e)}function A(t,e,n){t.insertBefore(e,n||null)}function L(t){t.parentNode&&t.parentNode.removeChild(t)}function Ce(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function P(t){return document.createTextNode(t)}function C(){return P(" ")}function re(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function v(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function xe(t){return Array.from(t.childNodes)}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function M(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let ne;function G(t){ne=t}const F=[],Z=[],R=[],le=[],Ie=Promise.resolve();let ee=!1;function je(){ee||(ee=!0,Ie.then(Ee))}function te(t){R.push(t)}const X=new Set;let U=0;function Ee(){const t=ne;do{for(;U<F.length;){const e=F[U];U++,G(e),Me(e.$$)}for(G(null),F.length=0,U=0;Z.length;)Z.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];X.has(n)||(X.add(n),n())}R.length=0}while(F.length);for(;le.length;)le.pop()();ee=!1,X.clear(),G(t)}function Me(t){if(t.fragment!==null){t.update(),z(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(te)}}const V=new Set;let O;function B(){O={r:0,c:[],p:O}}function N(){O.r||z(O.c),O=O.p}function p(t,e){t&&t.i&&(V.delete(t),t.i(e))}function w(t,e,n,i){if(t&&t.o){if(V.has(t))return;V.add(t),O.c.push(()=>{V.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function j(t){t&&t.c()}function x(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||te(()=>{const o=t.$$.on_mount.map($e).filter(be);t.$$.on_destroy?t.$$.on_destroy.push(...o):z(o),t.$$.on_mount=[]}),l.forEach(te)}function I(t,e){const n=t.$$;n.fragment!==null&&(z(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pe(t,e){t.$$.dirty[0]===-1&&(F.push(t),je(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(t,e,n,i,r,l,o,f=[-1]){const m=ne;G(t);const c=t.$$={fragment:null,ctx:[],props:l,update:E,not_equal:r,bound:ie(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:ie(),dirty:f,skip_bound:!1,root:e.target||m.$$.root};o&&o(c.root);let k=!1;if(c.ctx=n?n(t,e.props||{},(g,a,...s)=>{const $=s.length?s[0]:a;return c.ctx&&r(c.ctx[g],c.ctx[g]=$)&&(!c.skip_bound&&c.bound[g]&&c.bound[g]($),k&&Pe(t,g)),a}):[],c.update(),k=!0,z(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const g=xe(e.target);c.fragment&&c.fragment.l(g),g.forEach(L)}else c.fragment&&c.fragment.c();e.intro&&p(t.$$.fragment),x(t,e.target,e.anchor,e.customElement),Ee()}G(m)}class Q{$destroy(){I(this,1),this.$destroy=E}$on(e,n){if(!be(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Ae(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const qe=t=>({}),oe=t=>({}),Se=t=>({}),se=t=>({});function fe(t){let e,n;const i=t[5].content,r=we(i,t,t[4],oe);return{c(){e=b("div"),r&&r.c(),v(e,"class","content svelte-10zxl5g")},m(l,o){A(l,e,o),r&&r.m(e,null),n=!0},p(l,o){r&&r.p&&(!n||o&16)&&ve(r,i,l,l[4],n?ye(i,l[4],o,qe):Te(l[4]),oe)},i(l){n||(p(r,l),n=!0)},o(l){w(r,l),n=!1},d(l){l&&L(e),r&&r.d(l)}}}function Be(t){let e,n,i=t[0]?"=":"-",r,l,o,f,m,c,k,g,a,s;const $=t[5].title,u=we($,t,t[4],se);let d=t[0]&&fe(t);return{c(){e=b("div"),n=b("span"),r=P(i),l=C(),o=b("div"),f=b("button"),m=b("h2"),u&&u.c(),c=C(),d&&d.c(),v(n,"class","chevron force-monospace svelte-10zxl5g"),v(m,"class","svelte-10zxl5g"),v(f,"class","svelte-10zxl5g"),M(o,"display","inline-block"),v(e,"class",k="component "+(t[0]?"open":"")+" svelte-10zxl5g")},m(h,y){A(h,e,y),_(e,n),_(n,r),_(e,l),_(e,o),_(o,f),_(f,m),u&&u.m(m,null),_(e,c),d&&d.m(e,null),t[6](e),g=!0,a||(s=[re(window,"click",t[3]),re(f,"click",t[2])],a=!0)},p(h,[y]){(!g||y&1)&&i!==(i=h[0]?"=":"-")&&S(r,i),u&&u.p&&(!g||y&16)&&ve(u,$,h,h[4],g?ye($,h[4],y,Se):Te(h[4]),se),h[0]?d?(d.p(h,y),y&1&&p(d,1)):(d=fe(h),d.c(),p(d,1),d.m(e,null)):d&&(B(),w(d,1,1,()=>{d=null}),N()),(!g||y&1&&k!==(k="component "+(h[0]?"open":"")+" svelte-10zxl5g"))&&v(e,"class",k)},i(h){g||(p(u,h),p(d),g=!0)},o(h){w(u,h),w(d),g=!1},d(h){h&&L(e),u&&u.d(h),d&&d.d(),t[6](null),a=!1,z(s)}}}function Ne(t,e,n){let{$$slots:i={},$$scope:r}=e,l=!1,o;function f(){n(0,l=!l)}function m(k){o.contains(k.target)==!1&&n(0,l=!1)}function c(k){Z[k?"unshift":"push"](()=>{o=k,n(1,o)})}return t.$$set=k=>{"$$scope"in k&&n(4,r=k.$$scope)},[l,o,f,m,r,i,c]}class K extends Q{constructor(e){super(),D(this,e,Ne,Be,H,{})}}function Oe(t){let e,n;return{c(){e=b("span"),n=P(t[0]),v(e,"class","component svelte-16t1e4f"),M(e,"--end-width",t[4]*.6+"rem"),M(e,"--cursor-width",t[1]?"0.5rem":"0"),M(e,"--speed",t[2]+"s"),M(e,"--num-frames",t[4]),M(e,"--text-time-pct",t[5]+"%"),M(e,"--delay",t[3]+"s")},m(i,r){A(i,e,r),_(e,n)},p(i,[r]){r&1&&S(n,i[0]),r&2&&M(e,"--cursor-width",i[1]?"0.5rem":"0"),r&4&&M(e,"--speed",i[2]+"s"),r&8&&M(e,"--delay",i[3]+"s")},i:E,o:E,d(i){i&&L(e)}}}function ze(t,e,n){let{text:i}=e,{cursor:r=!0}=e,{speed:l=i.length/100}=e,{delay:o=0}=e,f=i.length,m=(f-1)/f*100;return t.$$set=c=>{"text"in c&&n(0,i=c.text),"cursor"in c&&n(1,r=c.cursor),"speed"in c&&n(2,l=c.speed),"delay"in c&&n(3,o=c.delay)},[i,r,l,o,f,m]}class He extends Q{constructor(e){super(),D(this,e,ze,Oe,H,{text:0,cursor:1,speed:2,delay:3})}}function ce(t,e,n){const i=t.slice();return i[4]=e[n],i}function ue(t){let e=t[4]+"",n,i;return{c(){n=P(e),i=b("br")},m(r,l){A(r,n,l),A(r,i,l)},p(r,l){l&8&&e!==(e=r[4]+"")&&S(n,e)},d(r){r&&L(n),r&&L(i)}}}function De(t){let e,n,i,r,l=t[1]?`(${t[1]})`:"",o,f,m,c,k,g=t[3],a=[];for(let s=0;s<g.length;s+=1)a[s]=ue(ce(t,g,s));return{c(){e=b("li"),n=b("span"),i=P(t[0]),r=C(),o=P(l),f=C(),m=b("div");for(let s=0;s<a.length;s+=1)a[s].c();c=C(),k=b("p"),v(n,"class","title"),v(m,"class","content svelte-ab73zc"),v(e,"class","svelte-ab73zc")},m(s,$){A(s,e,$),_(e,n),_(n,i),_(e,r),_(e,o),_(e,f),_(e,m);for(let u=0;u<a.length;u+=1)a[u].m(m,null);_(m,c),_(m,k),k.innerHTML=t[2]},p(s,[$]){if($&1&&S(i,s[0]),$&2&&l!==(l=s[1]?`(${s[1]})`:"")&&S(o,l),$&8){g=s[3];let u;for(u=0;u<g.length;u+=1){const d=ce(s,g,u);a[u]?a[u].p(d,$):(a[u]=ue(d),a[u].c(),a[u].m(m,c))}for(;u<a.length;u+=1)a[u].d(1);a.length=g.length}$&4&&(k.innerHTML=s[2])},i:E,o:E,d(s){s&&L(e),Ce(a,s)}}}function Qe(t,e,n){let{title:i="Title"}=e,{comment:r=""}=e,{description:l=""}=e,{info:o=["Institution","Date range"]}=e;return t.$$set=f=>{"title"in f&&n(0,i=f.title),"comment"in f&&n(1,r=f.comment),"description"in f&&n(2,l=f.description),"info"in f&&n(3,o=f.info)},[i,r,l,o]}class Y extends Q{constructor(e){super(),D(this,e,Qe,De,H,{title:0,comment:1,description:2,info:3})}}function Fe(t){let e,n,i,r,l,o;return{c(){e=b("li"),n=b("a"),i=P(t[0]),r=C(),l=b("p"),o=P(t[2]),v(n,"href",t[1])},m(f,m){A(f,e,m),_(e,n),_(n,i),_(e,r),_(e,l),_(l,o)},p(f,[m]){m&1&&S(i,f[0]),m&2&&v(n,"href",f[1]),m&4&&S(o,f[2])},i:E,o:E,d(f){f&&L(e)}}}function Ge(t,e,n){let{title:i="Title"}=e,{link:r=""}=e,{description:l=""}=e;return t.$$set=o=>{"title"in o&&n(0,i=o.title),"link"in o&&n(1,r=o.link),"description"in o&&n(2,l=o.description)},[i,r,l]}class J extends Q{constructor(e){super(),D(this,e,Ge,Fe,H,{title:0,link:1,description:2})}}function Ke(t){let e;return{c(){e=P(t[0])},m(n,i){A(n,e,i)},p(n,[i]){i&1&&S(e,n[0])},i:E,o:E,d(n){n&&L(e)}}}function Ue(t,e,n){let i="|",r=0;function l(){let o=["\u28FE","\u28FD","\u28FB","\u28BF","\u287F","\u28DF","\u28EF","\u28F7"];r=(r+1)%o.length,n(0,i=o[r]),window.setTimeout(l,80)}return l(),[i]}class Je extends Q{constructor(e){super(),D(this,e,Ue,Ke,H,{})}}function ae(t){let e;return{c(){e=b("p"),e.textContent="Developer / science writer",v(e,"class","mono"),M(e,"margin-bottom","3rem")},m(n,i){A(n,e,i)},d(n){n&&L(e)}}}function me(t){let e,n;return e=new K({props:{$$slots:{content:[Ve],title:[Re]},$$scope:{ctx:t}}}),{c(){j(e.$$.fragment)},m(i,r){x(e,i,r),n=!0},i(i){n||(p(e.$$.fragment,i),n=!0)},o(i){w(e.$$.fragment,i),n=!1},d(i){I(e,i)}}}function Re(t){let e;return{c(){e=b("span"),e.textContent="About",v(e,"slot","title")},m(n,i){A(n,e,i)},p:E,d(n){n&&L(e)}}}function Ve(t){let e;return{c(){e=b("span"),e.innerHTML=`<p>I&#39;m from the north of England, but now live in London.
        </p><p>I currently work for IBM Quantum, where I sit somewhere between science
        writer and software developer. My role is helping people use our
        products through documentation, software support, and teaching about
        quantum computing in general.
        </p><p>The most important skill in my work is making things easier to
        understand, whether it&#39;s a concept in physics or a block of code.</p>`,v(e,"slot","content")},m(n,i){A(n,e,i)},p:E,d(n){n&&L(e)}}}function de(t){let e,n;return e=new K({props:{$$slots:{content:[Xe],title:[We]},$$scope:{ctx:t}}}),{c(){j(e.$$.fragment)},m(i,r){x(e,i,r),n=!0},i(i){n||(p(e.$$.fragment,i),n=!0)},o(i){w(e.$$.fragment,i),n=!1},d(i){I(e,i)}}}function We(t){let e;return{c(){e=b("span"),e.textContent="Experience",v(e,"slot","title")},m(n,i){A(n,e,i)},p:E,d(n){n&&L(e)}}}function Xe(t){let e,n,i,r,l,o,f,m;return i=new Y({props:{title:"Developer advocate",info:["Qiskit, IBM","2020 - present"],description:`A developer advocate improves the experience for developers that use
              IBM Quantum's products. For me, this includes helping developers
              understand concepts in quantum computing through learning materials and
              <a href='https://github.com/Qiskit/documentation/'>documentation</a>,
               as well as supporting their projects through our official software
               <a href="https://qiskit.org/ecosystem/">Ecosystem</a>.
              <p>
              I previously wrote and managed content for IBM's online <a
              href='https://github.com/qiskit/textbook'>quantum computing textbook</a>.
              I was both a subject-matter expert and a bridge between academics,
              designers, and software developers.`}}),l=new Y({props:{title:"Tutor",info:["Self-employed","2018-2020"],description:`I taught GCSE & A\u2019-level Maths and Physics. During
              this time, I also created a website to teach quantum computing to
              students of different backgrounds.`}}),f=new Y({props:{title:"Student",info:["University of Leeds","2015-2018"],description:`I studied Physics, graduating with a 2:1. My dissertation was on
            quantum computing.`}}),{c(){e=b("span"),n=b("ul"),j(i.$$.fragment),r=C(),j(l.$$.fragment),o=C(),j(f.$$.fragment),v(e,"slot","content")},m(c,k){A(c,e,k),_(e,n),x(i,n,null),_(n,r),x(l,n,null),_(n,o),x(f,n,null),m=!0},p:E,i(c){m||(p(i.$$.fragment,c),p(l.$$.fragment,c),p(f.$$.fragment,c),m=!0)},o(c){w(i.$$.fragment,c),w(l.$$.fragment,c),w(f.$$.fragment,c),m=!1},d(c){c&&L(e),I(i),I(l),I(f)}}}function pe(t){let e,n;return e=new K({props:{$$slots:{content:[Ze],title:[Ye]},$$scope:{ctx:t}}}),{c(){j(e.$$.fragment)},m(i,r){x(e,i,r),n=!0},i(i){n||(p(e.$$.fragment,i),n=!0)},o(i){w(e.$$.fragment,i),n=!1},d(i){I(e,i)}}}function Ye(t){let e;return{c(){e=b("span"),e.textContent="Projects",v(e,"slot","title")},m(n,i){A(n,e,i)},p:E,d(n){n&&L(e)}}}function Ze(t){let e,n,i,r,l,o,f,m,c,k,g,a;return l=new J({props:{title:"quPython",link:"https://github.com/frankharkins/qupython",description:"A reimagining of how we write quantum programs in Python."}}),f=new J({props:{title:"Carbon footprint calculator",link:"https://frankharkins.github.io/carbon-footprint/",description:`A small project to help me learn web development with Svelte.
            After trying other online calculators, I wanted to create something
            that showed the effects of lifestyle changes in real time.`}}),c=new J({props:{title:"CNOT",link:"https://cnot.io",description:"An introduction to quantum computing."}}),g=new J({props:{title:"Launchpad whackamole",link:"https://github.com/frankharkins/launchpad-whackamole",description:"A game for the original Novation Launchpad (a midi controller)."}}),{c(){e=b("span"),n=b("p"),n.textContent="Personal projects of mine.",i=C(),r=b("ul"),j(l.$$.fragment),o=C(),j(f.$$.fragment),m=C(),j(c.$$.fragment),k=C(),j(g.$$.fragment),v(e,"slot","content")},m(s,$){A(s,e,$),_(e,n),_(e,i),_(e,r),x(l,r,null),_(r,o),x(f,r,null),_(r,m),x(c,r,null),_(r,k),x(g,r,null),a=!0},p:E,i(s){a||(p(l.$$.fragment,s),p(f.$$.fragment,s),p(c.$$.fragment,s),p(g.$$.fragment,s),a=!0)},o(s){w(l.$$.fragment,s),w(f.$$.fragment,s),w(c.$$.fragment,s),w(g.$$.fragment,s),a=!1},d(s){s&&L(e),I(l),I(f),I(c),I(g)}}}function _e(t){let e,n;return e=new K({props:{$$slots:{content:[tt],title:[et]},$$scope:{ctx:t}}}),{c(){j(e.$$.fragment)},m(i,r){x(e,i,r),n=!0},i(i){n||(p(e.$$.fragment,i),n=!0)},o(i){w(e.$$.fragment,i),n=!1},d(i){I(e,i)}}}function et(t){let e;return{c(){e=b("span"),e.textContent="Blog",v(e,"slot","title")},m(n,i){A(n,e,i)},p:E,d(n){n&&L(e)}}}function tt(t){let e;return{c(){e=b("span"),e.innerHTML='<p>Check out <a href="/blog">my blog</a>.</p>',v(e,"slot","content")},m(n,i){A(n,e,i)},p:E,d(n){n&&L(e)}}}function ge(t){let e,n;return e=new K({props:{$$slots:{content:[it],title:[nt]},$$scope:{ctx:t}}}),{c(){j(e.$$.fragment)},m(i,r){x(e,i,r),n=!0},i(i){n||(p(e.$$.fragment,i),n=!0)},o(i){w(e.$$.fragment,i),n=!1},d(i){I(e,i)}}}function nt(t){let e;return{c(){e=b("span"),e.textContent="Contact",v(e,"slot","title")},m(n,i){A(n,e,i)},p:E,d(n){n&&L(e)}}}function it(t){let e;return{c(){e=b("span"),e.innerHTML=`<ul><li>Email me at <a href="mailto:frankharkins@hotmail.co.uk">frankharkins@hotmail.co.uk</a></li> 
          <li>Add me on <a href="https://www.linkedin.com/in/francis-harkins-382324151/">Linkedin</a></li></ul>`,v(e,"slot","content")},m(n,i){A(n,e,i)},p:E,d(n){n&&L(e)}}}function he(t){let e,n;return e=new Je({}),{c(){j(e.$$.fragment)},m(i,r){x(e,i,r),n=!0},i(i){n||(p(e.$$.fragment,i),n=!0)},o(i){w(e.$$.fragment,i),n=!1},d(i){I(e,i)}}}function rt(t){let e,n,i,r,l,o,f,m,c,k,g;i=new He({props:{text:"Frank Harkins",speed:1.5,delay:.5}});let a=t[0]>1&&ae(),s=t[0]>2&&me(t),$=t[0]>3&&de(t),u=t[0]>4&&pe(t),d=t[0]>5&&_e(t),h=t[0]>6&&ge(t),y=W>t[0]&&t[0]>0&&he();return{c(){e=b("main"),n=b("h1"),j(i.$$.fragment),r=C(),a&&a.c(),l=C(),s&&s.c(),o=C(),$&&$.c(),f=C(),u&&u.c(),m=C(),d&&d.c(),c=C(),h&&h.c(),k=C(),y&&y.c()},m(T,q){A(T,e,q),_(e,n),x(i,n,null),_(e,r),a&&a.m(e,null),_(e,l),s&&s.m(e,null),_(e,o),$&&$.m(e,null),_(e,f),u&&u.m(e,null),_(e,m),d&&d.m(e,null),_(e,c),h&&h.m(e,null),_(e,k),y&&y.m(e,null),g=!0},p(T,[q]){T[0]>1?a||(a=ae(),a.c(),a.m(e,l)):a&&(a.d(1),a=null),T[0]>2?s?q&1&&p(s,1):(s=me(T),s.c(),p(s,1),s.m(e,o)):s&&(B(),w(s,1,1,()=>{s=null}),N()),T[0]>3?$?q&1&&p($,1):($=de(T),$.c(),p($,1),$.m(e,f)):$&&(B(),w($,1,1,()=>{$=null}),N()),T[0]>4?u?q&1&&p(u,1):(u=pe(T),u.c(),p(u,1),u.m(e,m)):u&&(B(),w(u,1,1,()=>{u=null}),N()),T[0]>5?d?q&1&&p(d,1):(d=_e(T),d.c(),p(d,1),d.m(e,c)):d&&(B(),w(d,1,1,()=>{d=null}),N()),T[0]>6?h?q&1&&p(h,1):(h=ge(T),h.c(),p(h,1),h.m(e,k)):h&&(B(),w(h,1,1,()=>{h=null}),N()),W>T[0]&&T[0]>0?y?q&1&&p(y,1):(y=he(),y.c(),p(y,1),y.m(e,null)):y&&(B(),w(y,1,1,()=>{y=null}),N())},i(T){g||(p(i.$$.fragment,T),p(s),p($),p(u),p(d),p(h),p(y),g=!0)},o(T){w(i.$$.fragment,T),w(s),w($),w(u),w(d),w(h),w(y),g=!1},d(T){T&&L(e),I(i),a&&a.d(),s&&s.d(),$&&$.d(),u&&u.d(),d&&d.d(),h&&h.d(),y&&y.d()}}}const lt=.3,W=7;function ot(t,e,n){let i=0;function r(){n(0,i=i+1),i==1?window.setTimeout(r,1e3):i<W&&window.setTimeout(r,lt*1e3)}return window.setTimeout(r,2.1*1e3),document.body.addEventListener("click",()=>{n(0,i=W)},!0),[i]}class st extends Q{constructor(e){super(),D(this,e,ot,rt,H,{})}}new st({target:document.getElementById("app")});
