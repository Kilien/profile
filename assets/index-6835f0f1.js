import{r as q,i as j,u as R,a as S,b as E,w as I,o as J,E as A,c as Q,n as G,g as X,t as Y,d as Z,C as L,e as M,f as x,h as U,M as tt,j as et,k as at,l as nt,m as st,p as B,q as V,s as C,v as ot,x as ct,y as rt,z as $,A as N,B as it,D as lt,F as ut,S as ft,_ as dt}from"./index-9dd49a78.js";function T(){var p,v,_,m,w,g,c;const a=ht(window.location.href);let t=String((_=(v=(p=q.options)==null?void 0:p.history)==null?void 0:v.state)==null?void 0:_.current);t=(m=t==null?void 0:t.replace)==null?void 0:m.call(t,/\?\S*/,"");let n;const e=(g=(w=q)==null?void 0:w.options)==null?void 0:g.routes,o=e.find(s=>s.path==="/");if(t==="/")return{...o,query:a};const r=t.split("/").filter(s=>s);n=r[r.length-1];function u(s,i){var y,b;const d=(y=i==null?void 0:i.path)==null?void 0:y.split("/");if(s===(d==null?void 0:d[(d==null?void 0:d.length)-1]))return i;for(let O=0,z=(b=i==null?void 0:i.children)==null?void 0:b.length;O<z;O++){const H=i.children[O],P=u(s,H);if(P)return P}}let l,f;for(let s=0,i=(c=o==null?void 0:o.children)==null?void 0:c.length;s<i;s++){const d=o.children[s];l=u(n,d)}if(!l){const s=e.find(i=>{var y;const d=(y=i==null?void 0:i.path)==null?void 0:y.split("/").filter(b=>b);return(r==null?void 0:r[0])===d[0]});f=u(n,s)}return{...l||f,query:a}}function ht(a){let t={};if(a.indexOf("?")<0)return t;const e=a.split("?").filter((o,r)=>r>0);for(let o=0,r=e.length;o<r;o++){const l=e[o].split("&");for(let f=0;f<l.length;f++){let p=l[f].split("=");t[p[0]]=p[1]}}return t}j.global.t;function pt(a,t){var l,f,h;const n=T(),e=a||n,o=R(),{chainId:r}=o.ethersObj;return!((f=(l=e.meta)==null?void 0:l.needChains)==null?void 0:f.includes(r))&&((h=e.meta)==null?void 0:h.needChains)!==void 0?(o.setRightChain(!1),!1):(o.setRightChain(!0),!0)}const F=j.global.t;function wt(a){const t=T(),n=R(),e=S(!1);async function o(...r){if(!e.value){if(!window.ethereum){window.open("https://metamask.io/download/");return}if(!n.rightChain){A.error(F("base.8")),e.value=!0,await n.switchChain(t.meta.needChains[0]),e.value=!1;return}if(!n.defaultAccount){A.error(F("base.16")),e.value=!0,await n.linkWallet(),e.value=!1;return}e.value=!0,await a(...r),e.value=!1}}return[o,e]}function K(a,t){const n=R(),e=S(t.default);let o,r;function u(){const w=new AbortController;o=w,r=w.signal}async function l(w){u();const g=new Promise((c,s)=>{function i(){return r.removeEventListener("abort",i),s("取消成功")}r&&r.addEventListener("abort",i)});return await Promise.race([w,g])}const f=()=>{var w;(w=o==null?void 0:o.abort)==null||w.call(o)},h=E({loading:!1,status:null,message:"",refresh:_,cancel:f,execute:v,stopInterval:()=>{}});async function p(w){f(),h.loading=!0;const c=await l(a(w)).catch(s=>!1);return h.loading=!1,c&&((c==null?void 0:c.status)===!1?(h.message=c==null?void 0:c.message,h.status=!1):(e.value=Q(c,!0),h.status=!0),c)}async function v(w){return new Promise((g,c)=>{t!=null&&t.noAccount?p(w).then(async s=>{g(s)}).catch(s=>{g(s)}):I(()=>[n.defaultAccount,n.ethersObj.chainId,n.netWorkReady],()=>{!n.defaultAccount||!n.ethersObj.chainId||!n.netWorkReady||p(w).then(async s=>{g(s)}).catch(s=>{g(s)})},{immediate:!0})})}async function _(w){return new Promise((g,c)=>{p(w).then(async s=>{g(s)}).catch(s=>{g(s)})})}(t==null?void 0:t.immediate)===!1?I(()=>[n.touchRefreshRead],()=>{p()}):t!=null&&t.noAccount?(p(),I(()=>[n.touchRefreshRead],()=>{p()})):I(()=>[n.defaultAccount,n.ethersObj.chainId,n.netWorkReady,n.touchRefreshRead],()=>{!n.defaultAccount||!n.ethersObj.chainId||!n.netWorkReady||p()},{immediate:!0}),t!=null&&t.watcher&&I(t.watcher,()=>p());let m;return t!=null&&t.interval&&(clearInterval(m),m=setInterval(()=>{p()},t.interval),h.stopInterval=()=>{clearInterval(m)}),J(()=>{m&&clearInterval(m)}),[e,h]}function gt(a){const t=R();I(()=>[t.defaultAccount,t.ethersObj.chainId,t.netWorkReady],(n,e)=>{!t.defaultAccount||!t.ethersObj.chainId||!t.netWorkReady||(pt(),a(),G(()=>{t.setTouchAfterWatchAccount(t.touchAfterWatchAccount+1)}))},{immediate:!0})}const yt=j.global.t;async function W(a,t,...n){return[...n],t?t==null?void 0:t(...n).then(async e=>{var u;A({type:"info",message:yt("base.10")});const{events:o}=await((u=e==null?void 0:e.wait)==null?void 0:u.call(e)),r=a===!1||(a==null?void 0:a.success)===!1;return typeof a=="object"&&typeof(a==null?void 0:a.success)=="string"?A.success(a.success):r||A.success("success"),{status:!0,datas:o}}).catch(e=>{var u,l;let o=(e==null?void 0:e.reason)||((u=e==null?void 0:e.data)==null?void 0:u.message)||((l=e==null?void 0:e.error)==null?void 0:l.message)||(e==null?void 0:e.message)||e;return X(e)&&(o="User denied transaction"),o=String(o).length>200?"error":o,a===!1||(a==null?void 0:a.error)===!1||A.error(o),{status:!1,datas:"0",errorOrigin:e,message:o}}):(A.error("error"),{status:!1,datas:"0"})}async function k(a,...t){if(a)return await(a==null?void 0:a(...t).then(n=>({status:!0,datas:n})).catch(n=>(R().defaultAccount,{status:!1,datas:"0",errorOrigin:n,message:n})))}function bt(){var r,u,l;const a=R(),t=T(),{ethers:n,signerValue:e}=a.ethersObj;let o=Y(e);if(!a.defaultAccount||!a.rightChain){const f=Z((u=(r=t==null?void 0:t.meta)==null?void 0:r.needChains)==null?void 0:u[0]);o=new n.providers.JsonRpcProvider((l=f==null?void 0:f.rpcUrls)==null?void 0:l[0])}return o}const D=j.global.t,vt=a=>{const t=R(),n=S(!1),e=S({}),o=S(18);async function r(c){const s=bt();return e.value=new L(c.address,c.abi,s),n.value=!0,e}r(a),gt(()=>{r(a)});async function u(){const{datas:c,status:s}=await k(e.value.decimals);return o.value=+c||18,o.value}const l=E({origin:"0",show:"0"});async function f(c=2,s,i=18){const d=s??t.defaultAccount,{status:y,datas:b}=await k(e.value.balanceOf,d)||{};return l.origin=y?b:"0",l.show=y?M(b,-c,i):"0",l}const h=E({origin:"0",show:"0"});async function p(c=2,s=18){const{status:i,datas:d}=await k(e.value.totalSupply);return h.origin=i?d:"0",h.show=i?M(d,-c,s):"0",h}const v=S(!1);async function _(c){const s=await k(e.value.allowance,t.defaultAccount,c)||{},i=f()||{},[{status:d,datas:y},{origin:b}]=await Promise.all([s,i]);return d?(v.value=+b?x(y,b):!!+y,v.value):!1}async function m(c){const{status:s}=await W({success:D("base.5")},e.value.approve,c,tt);return s}async function w(c,s,i=18){const d=U(s,10**i),{status:y}=await W({success:D("base.6")},e.value.transfer,c,d);return y}async function g(c,s,i,d=18){const y=U(i,10**d),{status:b}=await W({success:D("base.6")},e.value.transferFrom,c,s,y);return b}return{created:n,balanceObj:l,totalSupplyObj:h,hasAllow:v,createContract:r,getDecimals:u,getBalance:f,totalSupply:p,allow:_,auth:m,transfer:w,transferFrom:g}},mt=a=>(lt("data-v-ea904a27"),a=a(),ut(),a),_t={class:"test-wrap"},At=mt(()=>B("h1",null,"test wrap page...",-1)),Rt=et({__name:"index",setup(a){const t=vt({address:$.address,abi:$.abi}),[n,e]=K(async()=>await t.getBalance(),{default:{origin:"0",show:"0"}}),[o,r]=K(async()=>await t.getDecimals(),{default:18}),[u,l]=wt(async()=>{await t.auth(ft)});return(f,h)=>{const p=at("bp-button"),v=nt("load");return N(),st("div",_t,[At,B("div",{onClick:h[0]||(h[0]=(..._)=>C(u)&&C(u)(..._))},"余额： "+V(C(n)),1),B("div",null,"精度："+V(C(o)),1),ot((N(),ct(p,{class:"px-20",sink:"",onClick:C(u)},{default:rt(()=>[it("尝试授权write操作")]),_:1},8,["onClick"])),[[v,C(l)]])])}}});const It=dt(Rt,[["__scopeId","data-v-ea904a27"]]);export{It as default};
