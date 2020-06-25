var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function a(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function c(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function g(){return d("")}function m(t,e,n,a){return t.addEventListener(e,n,a),()=>t.removeEventListener(e,n,a)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.data!==e&&(t.data=e)}function b(t,e,n,a){t.style.setProperty(e,n,a?"important":"")}let k;function E(t){k=t}function _(){const t=function(){if(!k)throw new Error("Function called outside component initialization");return k}();return(e,n)=>{const a=t.$$.callbacks[e];if(a){const i=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);a.slice().forEach(e=>{e.call(t,i)})}}}const w=[],y=[],$=[],v=[],P=Promise.resolve();let T=!1;function A(t){$.push(t)}let D=!1;const S=new Set;function I(){if(!D){D=!0;do{for(let t=0;t<w.length;t+=1){const e=w[t];E(e),C(e.$$)}for(w.length=0;y.length;)y.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];S.has(e)||(S.add(e),e())}$.length=0}while(w.length);for(;v.length;)v.pop()();T=!1,D=!1,S.clear()}}function C(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const L=new Set;let O;function M(){O={r:0,c:[],p:O}}function H(){O.r||a(O.c),O=O.p}function R(t,e){t&&t.i&&(L.delete(t),t.i(e))}function x(t,e,n,a){if(t&&t.o){if(L.has(t))return;L.add(t),O.c.push(()=>{L.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}}const F="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function N(t){t&&t.c()}function j(t,n,r){const{fragment:o,on_mount:s,on_destroy:l,after_update:c}=t.$$;o&&o.m(n,r),A(()=>{const n=s.map(e).filter(i);l?l.push(...n):a(n),t.$$.on_mount=[]}),c.forEach(A)}function B(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(w.push(t),T||(T=!0,P.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,i,r,o,s,c,u=[-1]){const d=k;E(e);const p=i.props||{},g=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u};let m=!1;if(g.ctx=r?r(e,p,(t,n,...a)=>{const i=a.length?a[0]:n;return g.ctx&&s(g.ctx[t],g.ctx[t]=i)&&(g.bound[t]&&g.bound[t](i),m&&G(e,t)),n}):[],g.update(),m=!0,a(g.before_update),g.fragment=!!o&&o(g.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);g.fragment&&g.fragment.l(t),t.forEach(l)}else g.fragment&&g.fragment.c();i.intro&&R(e.$$.fragment),j(e,i.target,i.anchor),I()}E(d)}class V{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function K(e){let n;return{c(){n=u("header"),n.innerHTML='<div class="row justify-content-center align-items-center"><div class="col-md-6 col-xs-12"><h1 class="display-1 text-light">Ajari Koding</h1> \n\t\t\t<h2 class="text-muted">oleh PHPID</h2> \n\t\t\t<p class="mt-3 text-light">\n\t\t\t\tKumpulan berbagai sumber daya untuk belajar koding dari hasil karya para kreator lokal yang terpercaya dan telah dikurasi oleh komunitas PHPID\n\t\t\t</p> \n\n\t\t\t<a href="https://github.com/phpid-jakarta/ajari-koding" target="_blank" rel="noopener noreferrer" class="btn btn-light">Yuk Berkontribusi</a></div></div>',f(n,"class","container-fluid bg-dark pb-5 pt-5")},m(t,e){s(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}class J extends V{constructor(t){super(),W(this,t,null,K,r,{})}}const U=["bg-primary","bg-success","bg-danger","bg-warning text-dark","bg-info","bg-dark"],z={php:{bg:"#333",fg:"#fff"},javascript:{bg:"#ffc107",fg:"#333"}},Y="semua",Q=[Y,"video","blog","ebook"];function q(t,e,n){const a=t.slice();return a[5]=e[n],a}function Z(t){let e,n,a,i,r,c,g,h=t[5]+"";function b(...e){return t[3](t[5],...e)}return{c(){e=u("li"),n=u("a"),a=d(h),r=p(),f(n,"class","nav-link text-capitalize"),f(n,"href",i="?tipe="+t[5]),f(e,"class","nav-item")},m(t,i){s(t,e,i),o(e,n),o(n,a),o(e,r),c||(g=m(n,"click",b),c=!0)},p(e,n){t=e},d(t){t&&l(e),c=!1,g()}}}function X(t){let e,n,a,i,r,c,g=t[5]+"";function h(...e){return t[2](t[5],...e)}return{c(){e=u("li"),n=u("a"),a=d(g),i=p(),f(n,"class","nav-link text-capitalize active"),f(n,"aria-current","page"),f(n,"href","?"),f(e,"class","nav-item")},m(t,l){s(t,e,l),o(e,n),o(n,a),o(e,i),r||(c=m(n,"click",h),r=!0)},p(e,n){t=e},d(t){t&&l(e),r=!1,c()}}}function tt(t){let e;function n(t,e){return t[5]===t[0]?X:Z}let a=n(t),i=a(t);return{c(){i.c(),e=g()},m(t,n){i.m(t,n),s(t,e,n)},p(t,r){a===(a=n(t))&&i?i.p(t,r):(i.d(1),i=a(t),i&&(i.c(),i.m(e.parentNode,e)))},d(t){i.d(t),t&&l(e)}}}function et(e){let n,a=Q,i=[];for(let t=0;t<a.length;t+=1)i[t]=tt(q(e,a,t));return{c(){n=u("ul");for(let t=0;t<i.length;t+=1)i[t].c();f(n,"class","nav nav-tabs mb-5")},m(t,e){s(t,n,e);for(let t=0;t<i.length;t+=1)i[t].m(n,null)},p(t,[e]){if(3&e){let r;for(a=Q,r=0;r<a.length;r+=1){const o=q(t,a,r);i[r]?i[r].p(o,e):(i[r]=tt(o),i[r].c(),i[r].m(n,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=a.length}},i:t,o:t,d(t){t&&l(n),c(i,t)}}}function nt(t,e,n){let{activeFilter:a}=e;const i=_();function r(t,e){t.preventDefault(),i("filter",{text:e})}return t.$set=t=>{"activeFilter"in t&&n(0,a=t.activeFilter)},[a,r,(t,e)=>r(e,t),(t,e)=>r(e,t)]}class at extends V{constructor(t){super(),W(this,t,nt,et,r,{activeFilter:0})}}function it(e){let n,a,i,r;return{c(){n=u("div"),a=u("input"),f(a,"type","text"),f(a,"class","form-control"),f(a,"id","txt-search"),f(a,"placeholder","Ketik kata kunci untuk mencari..."),f(n,"class","mb-3")},m(t,l){s(t,n,l),o(n,a),i||(r=m(a,"change",e[0]),i=!0)},p:t,i:t,o:t,d(t){t&&l(n),i=!1,r()}}}function rt(t){const e=_();return[function(t){const n=t.target.value;e("search",{text:n})}]}class ot extends V{constructor(t){super(),W(this,t,rt,it,r,{})}}const st=t=>t.map((t,e)=>{const n=z[t.toLowerCase()];if(n)return{tag:t,isMapped:!0,...n};{let n=U[0];for(let t=U.length-1;t>=0;t--)if(e%t==0){n=U[t];break}return{tag:t,isMapped:!1,classes:n}}});function lt(t,e,n){const a=t.slice();return a[6]=e[n],a}function ct(t){let e,n,a,i,r,c,g,b,k,E=t[6].tag+"",_=t[0].withCount[t[6].tag]+"";function w(...e){return t[4](t[6],...e)}return{c(){e=u("button"),n=d(E),a=p(),i=u("span"),r=d(_),c=p(),f(i,"class","badge bg-secondary"),f(e,"type","button"),f(e,"class",g="btn mr-1 mb-1 "+t[6].classes)},m(t,l){s(t,e,l),o(e,n),o(e,a),o(e,i),o(i,r),o(e,c),b||(k=m(e,"click",w),b=!0)},p(e,n){t=e,1&n&&_!==(_=t[0].withCount[t[6].tag]+"")&&h(r,_)},d(t){t&&l(e),b=!1,k()}}}function ut(t){let e,n,a,i,r,c,g,k,E=t[6].tag+"",_=t[0].withCount[t[6].tag]+"";function w(...e){return t[3](t[6],...e)}return{c(){e=u("button"),n=d(E),a=p(),i=u("span"),r=d(_),c=p(),f(i,"class","badge bg-secondary"),f(e,"type","button"),f(e,"class","btn mr-1 mb-1"),b(e,"background-color",t[6].bg),b(e,"color",t[6].fg)},m(t,l){s(t,e,l),o(e,n),o(e,a),o(e,i),o(i,r),o(e,c),g||(k=m(e,"click",w),g=!0)},p(e,n){t=e,1&n&&_!==(_=t[0].withCount[t[6].tag]+"")&&h(r,_)},d(t){t&&l(e),g=!1,k()}}}function dt(t){let e;let n=function(t,e){return t[6].isMapped?ut:ct}(t)(t);return{c(){n.c(),e=g()},m(t,a){n.m(t,a),s(t,e,a)},p(t,e){n.p(t,e)},d(t){n.d(t),t&&l(e)}}}function pt(e){let n,a=e[1].length>0&&function(t){let e,n=t[1],a=[];for(let e=0;e<n.length;e+=1)a[e]=dt(lt(t,n,e));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=g()},m(t,n){for(let e=0;e<a.length;e+=1)a[e].m(t,n);s(t,e,n)},p(t,i){if(7&i){let r;for(n=t[1],r=0;r<n.length;r+=1){const o=lt(t,n,r);a[r]?a[r].p(o,i):(a[r]=dt(o),a[r].c(),a[r].m(e.parentNode,e))}for(;r<a.length;r+=1)a[r].d(1);a.length=n.length}},d(t){c(a,t),t&&l(e)}}}(e);return{c(){n=u("div"),a&&a.c(),f(n,"class","mb-3")},m(t,e){s(t,n,e),a&&a.m(n,null)},p(t,[e]){t[1].length>0&&a.p(t,e)},i:t,o:t,d(t){t&&l(n),a&&a.d()}}}function gt(t,e,n){const a=_();let{allTags:i}=e;const r=st(i.tags),o=(t,e)=>{t.preventDefault(),a("tagclick",{text:e})};return t.$set=t=>{"allTags"in t&&n(0,i=t.allTags)},[i,r,o,(t,e)=>o(e,t.tag),(t,e)=>o(e,t.tag)]}class mt extends V{constructor(t){super(),W(this,t,gt,pt,r,{allTags:0})}}function ft(t,e,n){const a=t.slice();return a[2]=e[n],a}function ht(e){let n,a,i,r=e[2].tag+"";return{c(){n=u("span"),a=d(r),f(n,"class",i="badge mr-1 "+e[2].classes)},m(t,e){s(t,n,e),o(n,a)},p:t,d(t){t&&l(n)}}}function bt(e){let n,a,i,r=e[2].tag+"";return{c(){n=u("span"),a=d(r),i=p(),f(n,"class","badge mr-1"),b(n,"background-color",e[2].bg),b(n,"color",e[2].fg)},m(t,e){s(t,n,e),o(n,a),o(n,i)},p:t,d(t){t&&l(n)}}}function kt(t){let e;let n=function(t,e){return t[2].isMapped?bt:ht}(t)(t);return{c(){n.c(),e=g()},m(t,a){n.m(t,a),s(t,e,a)},p(t,e){n.p(t,e)},d(t){n.d(t),t&&l(e)}}}function Et(e){let n,a=e[0].length>0&&function(t){let e,n=t[0],a=[];for(let e=0;e<n.length;e+=1)a[e]=kt(ft(t,n,e));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=g()},m(t,n){for(let e=0;e<a.length;e+=1)a[e].m(t,n);s(t,e,n)},p(t,i){if(1&i){let r;for(n=t[0],r=0;r<n.length;r+=1){const o=ft(t,n,r);a[r]?a[r].p(o,i):(a[r]=kt(o),a[r].c(),a[r].m(e.parentNode,e))}for(;r<a.length;r+=1)a[r].d(1);a.length=n.length}},d(t){c(a,t),t&&l(e)}}}(e);return{c(){n=u("div"),a&&a.c(),f(n,"class","mb-3")},m(t,e){s(t,n,e),a&&a.m(n,null)},p(t,[e]){t[0].length>0&&a.p(t,e)},i:t,o:t,d(t){t&&l(n),a&&a.d()}}}function _t(t,e,n){let{topic_tags:a}=e;const i=st(a);return t.$set=t=>{"topic_tags"in t&&n(1,a=t.topic_tags)},[i,a]}class wt extends V{constructor(t){super(),W(this,t,_t,Et,r,{topic_tags:1})}}function yt(t){let e,n,a,i,r,c,g,m,b,k,E,_,w,y,$,v,P,T,A=t[0].title+"",D=t[0].creator+"",S=t[0].description+"";return w=new wt({props:{topic_tags:t[0].topic_tags}}),{c(){e=u("div"),n=u("div"),a=u("div"),i=u("h5"),r=d(A),c=p(),g=u("h6"),m=d(D),b=p(),k=u("p"),E=d(S),_=p(),N(w.$$.fragment),y=p(),$=u("a"),v=d("Pelajari"),f(i,"class","card-title"),f(g,"class","card-subtitle mb-2 text-muted"),f(k,"class","card-text"),f($,"href",P=t[0].url),f($,"target","_blank"),f($,"rel","noopener noreferrer"),f($,"class","btn btn-primary"),f(a,"class","card-body"),f(n,"class","card"),f(e,"class","col-md-4 col-sm-6 col-xs-12")},m(t,l){s(t,e,l),o(e,n),o(n,a),o(a,i),o(i,r),o(a,c),o(a,g),o(g,m),o(a,b),o(a,k),o(k,E),o(a,_),j(w,a,null),o(a,y),o(a,$),o($,v),T=!0},p(t,[e]){(!T||1&e)&&A!==(A=t[0].title+"")&&h(r,A),(!T||1&e)&&D!==(D=t[0].creator+"")&&h(m,D),(!T||1&e)&&S!==(S=t[0].description+"")&&h(E,S);const n={};1&e&&(n.topic_tags=t[0].topic_tags),w.$set(n),(!T||1&e&&P!==(P=t[0].url))&&f($,"href",P)},i(t){T||(R(w.$$.fragment,t),T=!0)},o(t){x(w.$$.fragment,t),T=!1},d(t){t&&l(e),B(w)}}}function $t(t,e,n){let{item:a}=e;return t.$set=t=>{"item"in t&&n(0,a=t.item)},[a]}class vt extends V{constructor(t){super(),W(this,t,$t,yt,r,{item:0})}}function Pt(e){let n;return{c(){n=u("footer"),n.innerHTML='<p class="text-center">\n\t\tCopyright © 2020, dipersembahkan oleh tim PHPID untuk 🇮🇩\n\t</p>',f(n,"class","container-fluid bg-light pb-4 pt-4")},m(t,e){s(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}class Tt extends V{constructor(t){super(),W(this,t,null,Pt,r,{})}}const{Boolean:At}=F;function Dt(t,e,n){const a=t.slice();return a[7]=e[n],a[9]=n,a}function St(t){let e,n,a=t[0],i=[];for(let e=0;e<a.length;e+=1)i[e]=It(Dt(t,a,e));const r=t=>x(i[t],1,1,()=>{i[t]=null});return{c(){e=u("div");for(let t=0;t<i.length;t+=1)i[t].c();f(e,"class","row justify-content-center")},m(t,a){s(t,e,a);for(let t=0;t<i.length;t+=1)i[t].m(e,null);n=!0},p(t,n){if(1&n){let o;for(a=t[0],o=0;o<a.length;o+=1){const r=Dt(t,a,o);i[o]?(i[o].p(r,n),R(i[o],1)):(i[o]=It(r),i[o].c(),R(i[o],1),i[o].m(e,null))}for(M(),o=a.length;o<i.length;o+=1)r(o);H()}},i(t){if(!n){for(let t=0;t<a.length;t+=1)R(i[t]);n=!0}},o(t){i=i.filter(At);for(let t=0;t<i.length;t+=1)x(i[t]);n=!1},d(t){t&&l(e),c(i,t)}}}function It(t){let e,n;return e=new vt({props:{item:t[7]}}),{c(){N(e.$$.fragment)},m(t,a){j(e,t,a),n=!0},p(t,n){const a={};1&n&&(a.item=t[7]),e.$set(a)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Ct(t){let e,n,a,i,r,c,d,g,m,h,b,k,E;n=new J({}),r=new at({props:{activeFilter:t[1]}}),r.$on("filter",t[3]),d=new ot({}),d.$on("search",t[4]),m=new mt({props:{allTags:t[2]}}),m.$on("tagclick",t[5]);let _=t[0].length>0&&St(t);return k=new Tt({}),{c(){e=u("main"),N(n.$$.fragment),a=p(),i=u("section"),N(r.$$.fragment),c=p(),N(d.$$.fragment),g=p(),N(m.$$.fragment),h=p(),_&&_.c(),b=p(),N(k.$$.fragment),f(i,"class","app-content container mt-5 mb-5 svelte-1kcn9fw"),f(e,"class","app")},m(t,l){s(t,e,l),j(n,e,null),o(e,a),o(e,i),j(r,i,null),o(i,c),j(d,i,null),o(i,g),j(m,i,null),o(i,h),_&&_.m(i,null),o(e,b),j(k,e,null),E=!0},p(t,[e]){const n={};2&e&&(n.activeFilter=t[1]),r.$set(n),t[0].length>0?_?(_.p(t,e),1&e&&R(_,1)):(_=St(t),_.c(),R(_,1),_.m(i,null)):_&&(M(),x(_,1,1,()=>{_=null}),H())},i(t){E||(R(n.$$.fragment,t),R(r.$$.fragment,t),R(d.$$.fragment,t),R(m.$$.fragment,t),R(_),R(k.$$.fragment,t),E=!0)},o(t){x(n.$$.fragment,t),x(r.$$.fragment,t),x(d.$$.fragment,t),x(m.$$.fragment,t),x(_),x(k.$$.fragment,t),E=!1},d(t){t&&l(e),B(n),B(r),B(d),B(m),_&&_.d(),B(k)}}}function Lt(t,e,n){let{data:a}=e,i=a.awesome_list,r=Y,o=(t=>{let e=new Set,n={};return t.forEach(t=>{t.topic_tags.forEach(t=>{e.has(t)?n={...n,[t]:n[t]+1}:(e.add(t),n={...n,[t]:1})})}),{tags:Array.from(e),withCount:n}})(i);return t.$set=t=>{"data"in t&&n(6,a=t.data)},[i,r,o,t=>{const e=t.detail.text.toLowerCase();n(1,r=e),n(0,i="semua"===e?a.awesome_list:a.awesome_list.filter(t=>t.tipe.toLowerCase()===e))},t=>{const e=t.detail.text.toLowerCase();n(0,i=""===e?a.awesome_list:a.awesome_list.filter(t=>t.title.toLowerCase().includes(e)||t.creator.toLowerCase().includes(e)||t.description.toLowerCase().includes(e)||t.url.toLowerCase().includes(e)))},t=>{const e=t.detail.text.toLowerCase();n(0,i=a.awesome_list.filter(t=>{return Boolean((n=e,t.topic_tags.find(t=>t.toLowerCase()===n)));var n}))},a]}return new class extends V{constructor(t){super(),W(this,t,Lt,Ct,r,{data:6})}}({target:document.body,props:{data:{last_updated:"2020-06-25T06:07:08.122Z",awesome_list:[{title:"SANTRI KODING",creator:"Fika Ridaul Maulayya",url:"https://santrikoding.com",description:"Belajar koding bahasa indonesia terlengkap dan mudah dipahami seperti Laravel, CodeIgniter, Vue JS, JavaScript dan masih banyak lagi.",topic_tags:["PHP","CodeIgniter","Laravel","SysAdmin","Database","JavaScript"],business_model:"FREEMIUM | MEMBERSHIP",tipe:"VIDEO",rating:""},{title:"YUK CODING",creator:"M. Nur Fawaiq",url:"https://youtube.com/yukcoding2",description:"Berbagi tutorial pemrograman gratis dan tips trik menarik seputar dunia IT.",topic_tags:["PHP","CodeIgniter","Laravel","Android","Database","Tips","dsb."],business_model:"FREE With Ads",tipe:"VIDEO",rating:""},{title:"CODEPOLITAN",founder_name:"Kresna Galuh","website/url":"www.codepolitan.com",description:"Semua yang kamu butuhkan untuk memulai belajar coding dan meningkatkan keahlian codingmu hingga mahir dengan alur belajar yang super jelas dan terarah.",topic_tags:["Fullstack Web Developer","Laravel","CodeIgniter","Web","PHP","JS","Android","Belajar Studi Kasus"],business_model:"MEMBERSHIP",tipe:"PORTAL",rating:""},{title:"NGODINGERS",creator:"Muhammad Fahriansyah & M Iqbal Maulana",url:"https://www.youtube.com/c/Ngodingers/featured",website:"(masih dalam tahap develop)",description:"Ngodingers bertujuan untuk memberikan konten pemrograman dengan Bahasa Indonesia, agar lebih mudah dalam dipahamai dan diaplikasikan dalam kehidupan.",topic_tags:["Nodejs","Golang","Aritificial Intelligence","OpenCV","Deep Learning","Machine Learning","Data Sience","Fullstack Developer","PHP","JS"],bussines_model:"Free with Ads",tipe:"VIDEO",rating:""},{title:"POJOK CODE",creator:"Asep Komarudin",url:"https://www.youtube.com/pojokcode",description:"Tutorial SQL dan Pemprograman",topic_tags:["PHP","Java","MySQL","MariaDB","SQL Server","Oracle","dsb."],business_model:"FREE With Ads",tipe:"VIDEO",rating:""},{title:"KAWAN KODING",creator:"Muhammad Amirul Ihsan",url:"https://kawankoding.id",description:"Tempatnya Belajar Laravel",topic_tags:["PHP","Laravel","Tips."],business_model:"FREE With Ads",tipe:"BLOG",rating:""},{title:"KENDARI KODING",creator:"Ilham Julian Efendi",url:"Url : https://www.youtube.com/channel/UCEzN0oBll3dQga-9z88heyA",description:"Berbagi tutorial pemrograman web dan mobile dan segala sesuatu yang menarik seputar dunia IT.",topic_tags:["PHP","CodeIgniter","Laravel","Flutter","git","github","Android","Database","Tips","dsb."],business_model:"FREE With Ads",tipe:"VIDEO",rating:""},{title:"DAENG WEB",creator:"Anugrah Sandi",url:"https://daengweb.id",description:"Belajar pemrograman dengan study case.",topic_tags:["PHP","Laravel","Flutter","VueJS","Tips."],business_model:"FREE With Ads",tipe:"BLOG",rating:""},{title:"WEB PROGRAMMING UNPAS","creator/founder_name":"Sandhika Galih","website/url":"https",description:"Channel Youtube Pembelajaran Web Design & Web Programming Dasar",topic_tags:["HTML","CSS","Javascript","PHP","CodeIgniter","Laravel","Git","Tips & Trik","Programming","Web Design"],business_model:"FREE With Ads",tipe:"VIDEO",rating:""},{title:"H4NK TECH","creator/founder_name":"Harry Setya Hadi","website/url":"https",description:"Berbagi seputar Tutotrial Komputer yang meliputi",topic_tags:["Database","Serivice","PHP","Codeigniter","HTML","Project","Filmora"],business_model:"FREE No Ads",tipe:"VIDEO",rating:""},{title:"DEA VENDITAMA","creator/founder_name":"Dea Venditama","website/url":"https",medium:"https",description:"Coding Tutorial and Random Things about Technology",topic_tags:["Tutorial","Web","PHP","Codeigniter","Yii","Python","Machine Learning","Data Science"],business_model:"FREE No Ads (for now)",tipe:"VIDEO",rating:""},{title:"DIDIK MAKARYO","creator/founder_name":"Didik Kurniawan","website/url":"https",description:"Bahas materi-materi kuliah S1-Teknik Informatika yang dikemas secara simple agar lebih mudah dipahami.",topic_tags:["Komputer","Opini IT","PHP","HTML","database"],business_model:"FREE No Ads",tipe:"VIDEO",rating:""},{title:"HOBI KOMPUTER","creator/_founder_name":"Hendri Pemenang","website/url":"https",description:"Channel Youtube Pembelajaran dan Berbagi Ilmu Web Developer untuk Front End, Back End, FULL STACK DEVELOPER, Dev Ops, Web Design & Web Programming Dasar.",topic_tags:["HTML","CSS","Javascript","PHP","Laravel","Git","Tips & Trik","Programming","Web Design","Modern Web","Front End Dev","Full Stack Developer"],business_model:"FREE No Ads",tipe:"VIDEO",rating:""},{title:"VICTOR SILALAHI","creator/founder_name":"Victor Silalahi","website/url":"https",description:"Video pembelajaran programming di javascript dan python",topic_tags:["Javascript","Jquery","Threejs","Visjs","Chartjs","plotlyjs","babylonjs","Python","Matplotlib","MySQL","Tkinter","socket","Data Visualization","Graph","3D"],business_model:"FREE No Ads",tipe:"VIDEO",rating:""},{title:"ID STACK",creator:"Hakim Sembiring",url:"https://idstack.net",description:"Situs Belajar Pemrograman Berbahasa Indonesia",topic_tags:["PHP","JavaScript","Laravel","VueJS","NodeJS"],business_model:"FREE | MEMBERSHIP",tipe:"BLOG",rating:""},{title:"TEKNO CERDAS",creator:"Rio Astamal",url:"https://teknocerdas.com/",description:"TeknoCerdas.com adalah sebuah portal berita teknologi informasi yang membahas cloud computing dan tutorial programming.",topik:"cloud computing, programming, security, aws, gcp, azure",business_model:"Free with Ads",tipe:"BLOG",rating:""},{title:"MY NOTES CODE","creator/founder_name":"Rizaldi Maulidia Achmad","website/url":"https",description:"My Notes Code adalah sebuah blog yang berisi mengenai kumpulan catatan seputar pemograman seperti tutorial, tips, trik, dan pemecahan masalah beserta solusinya",topic_tags:["PHP","Codeigniter","Laravel","jQuery","Tips & Trik"],business_model:"FREE With Ads",tipe:"BLOG",rating:""},{title:"GLC NETWORKS","creator/founder_name":"Achmad Mardiansyah","website/url":"https",description:"organisasi yang menyediakan jasa training dan solusi IT (aplikasi, networking, system dan automation), ada free webinar dan rekamannya diupload ke youtube",topic_tags:["HTML","CSS","Javascript","PHP","python","django","shell script","CodeIgniter","SQL","GIT","Laravel","Git","networking (cisco","mikrotik)","sysadmin (linux","bsd)","radius","billing dan automation."],business_model:"paid services with free webinars/consultation",tipe:"PORTAL",rating:""},{title:"ELRUSTA STUDIO",founder_name:"Chandra Ahmad Rizki","website/url":"https",description:"Sharing - sharing video belajar bahasa pemrograman",topic_tags:["HTML","CSS","Javascript","PHP","CodeIgniter","Angular","Ionic"],business_model:"FREE With Ads",tipe:"VIDEO",rating:""},{title:"WARUNG BELAJAR",creator:"Aris Samsudin","website/url":"https",description:"Sebuah Blog yang berisi mengenai tutorial dibidang teknologi, seperti Tutorial Pemrograman, penggunaan aplikasi komputer, dan smartphone.",topic_tags:["CMS Wordpress","HTML","CSS","Bootstrap","PHP","Codeigniter","Tips & Trik"],business_model:"FREE With Ads",tipe:"BLOG",rating:""},{title:"BADUYTECH SOLUTIONS","creator/_founder_name":"Moch Diki Widianto","website/url":"https",description:"Channel berbagi informasi dan pengetahuan dunia teknologi informasi dengan menggunakan Bahasa Indonesia.",topic_tags:["HTML","CSS","Javascript","PHP","Laravel","Git","Tips & Trik","Programming","Full Stack Developer."],business_model:"FREE No Ads",tipe:"VIDEO",rating:""},{title:"PETANI KODE",founder_name:"Ahmad Muhardian","website/url":"www.petanikode.com",description:"Tempat belajar budidaya kode.",topic_tags:["Javascript","Java","PHP","Python","Git","C","C++"],business_model:"Free with Ads",tipe:"VIDEO",rating:""}]}}})}();
//# sourceMappingURL=bundle.js.map