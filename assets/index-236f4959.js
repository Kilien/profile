import{_ as _i,u as Kr,a as _n,H as Jr,I as $n,B as Ut,p as Nt,q as Et,J as Ki,K as Qr,s as ji,v as fi,F as Mo,G as So,k as es,w as yo,L as Yi,N as bo,g as Ra,b as wo,O as Tn,P as Eo,x as To,Q as Ao}from"./index-2929b040.js";const Da=r=>(Mo("data-v-37dc301f"),r=r(),So(),r),Co={class:"loader__word"},Lo=Da(()=>Et("p",{class:"loader__word"},"and Welcome.",-1)),Po=Da(()=>Et("p",{class:"loader__word loader__word--logo serif"},"QI",-1)),Ro={__name:"index",setup(r){const e=Kr(),t=_n("Hello"),n=_n(null),i=_n(null);return Jr(()=>{var c;const o=Array.from((c=n.value)==null?void 0:c.children),a=$n.timeline({delay:.6,paused:!1,defaults:{duration:.65,ease:"power1.out"}});a.set(o.value,{opacity:0,filter:"blur(10px)"});for(let l=0;l<o.length;l++){const h=o[l];l===0?(a.set(h,{opacity:1,filter:"blur(0px)"}),a.fromTo(i.value,{color:"#000"},{color:"#fff",ease:"power3.out",stagger:.05})):a.to(h,{opacity:1,filter:"blur(0px)"},"-=0.125"),a.to(h,{opacity:0,filter:"blur(5px)"},`+=${.45}`)}a.to(n.value,{opacity:0,onStart:()=>{},onEnd:()=>{e.setWelcoming(!1)}}),a.set(n.value,{display:"none"})}),(s,o)=>(Ut(),Nt("div",{ref_key:"loader",ref:n,class:"loader"},[Et("p",Co,[(Ut(!0),Nt(Ki,null,Qr(fi(t),(a,c)=>(Ut(),Nt("span",{key:c,ref_for:!0,ref_key:"loaderWord1Chars",ref:i,class:"loader__word__char"},ji(a),1))),128))]),Lo,Po],512))}},Do=_i(Ro,[["__scopeId","data-v-37dc301f"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ts="151",Io=0,ls=1,Uo=2,Ia=1,No=2,hi=3,rn=0,ft=1,Yt=2,nn=0,jn=1,cs=2,us=3,hs=4,Fo=5,Wn=100,Oo=101,zo=102,ds=103,fs=104,Bo=200,Go=201,Ho=202,Vo=203,Ua=204,Na=205,ko=206,Wo=207,qo=208,Xo=209,Yo=210,$o=0,jo=1,Zo=2,kr=3,Ko=4,Jo=5,Qo=6,el=7,Fa=0,tl=1,nl=2,jt=0,il=1,rl=2,sl=3,al=4,ol=5,Oa=300,Qn=301,ei=302,Wr=303,qr=304,Ji=306,Xr=1e3,Dt=1001,Yr=1002,ct=1003,ps=1004,or=1005,bt=1006,ll=1007,pi=1008,yn=1009,cl=1010,ul=1011,za=1012,hl=1013,vn=1014,xn=1015,mi=1016,dl=1017,fl=1018,Zn=1020,pl=1021,It=1023,ml=1024,gl=1025,Mn=1026,ti=1027,_l=1028,vl=1029,xl=1030,Ml=1031,Sl=1033,lr=33776,cr=33777,ur=33778,hr=33779,ms=35840,gs=35841,_s=35842,vs=35843,yl=36196,xs=37492,Ms=37496,Ss=37808,ys=37809,bs=37810,ws=37811,Es=37812,Ts=37813,As=37814,Cs=37815,Ls=37816,Ps=37817,Rs=37818,Ds=37819,Is=37820,Us=37821,dr=36492,bl=36283,Ns=36284,Fs=36285,Os=36286,bn=3e3,Oe=3001,wl=3200,El=3201,Tl=0,Al=1,zt="srgb",gi="srgb-linear",Ba="display-p3",fr=7680,Cl=519,zs=35044,Bs="300 es",$r=1035;class ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pr=Math.PI/180,jr=180/Math.PI;function vi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rt[r&255]+rt[r>>8&255]+rt[r>>16&255]+rt[r>>24&255]+"-"+rt[e&255]+rt[e>>8&255]+"-"+rt[e>>16&15|64]+rt[e>>24&255]+"-"+rt[t&63|128]+rt[t>>8&255]+"-"+rt[t>>16&255]+rt[t>>24&255]+rt[n&255]+rt[n>>8&255]+rt[n>>16&255]+rt[n>>24&255]).toLowerCase()}function ht(r,e,t){return Math.max(e,Math.min(t,r))}function Ll(r,e){return(r%e+e)%e}function mr(r,e,t){return(1-t)*r+t*e}function Gs(r){return(r&r-1)===0&&r!==0}function Pl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function bi(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function mt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],m=n[5],_=n[8],M=i[0],p=i[3],u=i[6],T=i[1],S=i[4],b=i[7],E=i[2],L=i[5],R=i[8];return s[0]=o*M+a*T+c*E,s[3]=o*p+a*S+c*L,s[6]=o*u+a*b+c*R,s[1]=l*M+h*T+d*E,s[4]=l*p+h*S+d*L,s[7]=l*u+h*b+d*R,s[2]=f*M+m*T+_*E,s[5]=f*p+m*S+_*L,s[8]=f*u+m*b+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,f=a*c-h*s,m=l*s-o*c,_=t*d+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=d*M,e[1]=(i*l-h*n)*M,e[2]=(a*n-i*o)*M,e[3]=f*M,e[4]=(h*t-i*c)*M,e[5]=(i*s-a*t)*M,e[6]=m*M,e[7]=(n*c-l*t)*M,e[8]=(o*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gr.makeScale(e,t)),this}rotate(e){return this.premultiply(gr.makeRotation(-e)),this}translate(e,t){return this.premultiply(gr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gr=new Pe;function Ga(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Zi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Kn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _r(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Rl=new Pe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Dl=new Pe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Il(r){return r.convertSRGBToLinear().applyMatrix3(Dl)}function Ul(r){return r.applyMatrix3(Rl).convertLinearToSRGB()}const Nl={[gi]:r=>r,[zt]:r=>r.convertSRGBToLinear(),[Ba]:Il},Fl={[gi]:r=>r,[zt]:r=>r.convertLinearToSRGB(),[Ba]:Ul},gt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return gi},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Nl[e],i=Fl[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let An;class Ha{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{An===void 0&&(An=Zi("canvas")),An.width=e.width,An.height=e.height;const n=An.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=An}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Kn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Va{constructor(e=null){this.isSource=!0,this.uuid=vi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(vr(i[o].image)):s.push(vr(i[o]))}else s=vr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function vr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ha.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ol=0;class xt extends ii{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,n=Dt,i=Dt,s=bt,o=pi,a=It,c=yn,l=xt.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=vi(),this.name="",this.source=new Va(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xr:e.x=e.x-Math.floor(e.x);break;case Dt:e.x=e.x<0?0:1;break;case Yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xr:e.y=e.y-Math.floor(e.y);break;case Dt:e.y=e.y<0?0:1;break;case Yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=Oa;xt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,i=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],_=c[9],M=c[2],p=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-M)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+M)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,b=(m+1)/2,E=(u+1)/2,L=(h+f)/4,R=(d+M)/4,I=(_+p)/4;return S>b&&S>E?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=L/n,s=R/n):b>E?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=L/i,s=I/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=R/s,i=I/s),this.set(n,i,s,t),this}let T=Math.sqrt((p-_)*(p-_)+(d-M)*(d-M)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(d-M)/T,this.z=(f-h)/T,this.w=Math.acos((l+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wn extends ii{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new xt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Va(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ka extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ct,this.minFilter=ct,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zl extends xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ct,this.minFilter=ct,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const f=s[o+0],m=s[o+1],_=s[o+2],M=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=M;return}if(d!==M||c!==f||l!==m||h!==_){let p=1-a;const u=c*f+l*m+h*_+d*M,T=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const E=Math.sqrt(S),L=Math.atan2(E,u*T);p=Math.sin(p*L)/E,a=Math.sin(a*L)/E}const b=a*T;if(c=c*p+f*b,l=l*p+m*b,h=h*p+_*b,d=d*p+M*b,p===1-a){const E=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=E,l*=E,h*=E,d*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+h*d+c*m-l*f,e[t+1]=c*_+h*f+l*d-a*m,e[t+2]=l*_+h*m+a*f-c*d,e[t+3]=h*_-a*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(s/2),f=c(n/2),m=c(i/2),_=c(s/2);switch(o){case"XYZ":this._x=f*h*d+l*m*_,this._y=l*m*d-f*h*_,this._z=l*h*_+f*m*d,this._w=l*h*d-f*m*_;break;case"YXZ":this._x=f*h*d+l*m*_,this._y=l*m*d-f*h*_,this._z=l*h*_-f*m*d,this._w=l*h*d+f*m*_;break;case"ZXY":this._x=f*h*d-l*m*_,this._y=l*m*d+f*h*_,this._z=l*h*_+f*m*d,this._w=l*h*d-f*m*_;break;case"ZYX":this._x=f*h*d-l*m*_,this._y=l*m*d+f*h*_,this._z=l*h*_-f*m*d,this._w=l*h*d+f*m*_;break;case"YZX":this._x=f*h*d+l*m*_,this._y=l*m*d+f*h*_,this._z=l*h*_-f*m*d,this._w=l*h*d-f*m*_;break;case"XZY":this._x=f*h*d-l*m*_,this._y=l*m*d-f*h*_,this._z=l*h*_+f*m*d,this._w=l*h*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,h=c*n+a*t-s*i,d=c*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=l*c+f*-s+h*-a-d*-o,this.y=h*c+f*-o+d*-s-l*-a,this.z=d*c+f*-a+l*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xr.copy(this).projectOnVector(e),this.sub(xr)}reflect(e){return this.sub(xr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xr=new N,Hs=new xi;class Mi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Cn.copy(e.boundingBox),Cn.applyMatrix4(e.matrixWorld),this.union(Cn);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Vt.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Vt)}else i.boundingBox===null&&i.computeBoundingBox(),Cn.copy(i.boundingBox),Cn.applyMatrix4(e.matrixWorld),this.union(Cn)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vt),Vt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ai),wi.subVectors(this.max,ai),Ln.subVectors(e.a,ai),Pn.subVectors(e.b,ai),Rn.subVectors(e.c,ai),Kt.subVectors(Pn,Ln),Jt.subVectors(Rn,Pn),cn.subVectors(Ln,Rn);let t=[0,-Kt.z,Kt.y,0,-Jt.z,Jt.y,0,-cn.z,cn.y,Kt.z,0,-Kt.x,Jt.z,0,-Jt.x,cn.z,0,-cn.x,-Kt.y,Kt.x,0,-Jt.y,Jt.x,0,-cn.y,cn.x,0];return!Mr(t,Ln,Pn,Rn,wi)||(t=[1,0,0,0,1,0,0,0,1],!Mr(t,Ln,Pn,Rn,wi))?!1:(Ei.crossVectors(Kt,Jt),t=[Ei.x,Ei.y,Ei.z],Mr(t,Ln,Pn,Rn,wi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ht[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ht[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ht[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ht[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ht[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ht[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ht[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ht[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ht),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ht=[new N,new N,new N,new N,new N,new N,new N,new N],Vt=new N,Cn=new Mi,Ln=new N,Pn=new N,Rn=new N,Kt=new N,Jt=new N,cn=new N,ai=new N,wi=new N,Ei=new N,un=new N;function Mr(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){un.fromArray(r,s);const a=i.x*Math.abs(un.x)+i.y*Math.abs(un.y)+i.z*Math.abs(un.z),c=e.dot(un),l=t.dot(un),h=n.dot(un);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Bl=new Mi,oi=new N,Sr=new N;class ns{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bl.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oi.subVectors(e,this.center);const t=oi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(oi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oi.copy(e.center).add(Sr)),this.expandByPoint(oi.copy(e.center).sub(Sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kt=new N,yr=new N,Ti=new N,Qt=new N,br=new N,Ai=new N,wr=new N;class Gl{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kt.copy(this.origin).addScaledVector(this.direction,t),kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yr.copy(e).add(t).multiplyScalar(.5),Ti.copy(t).sub(e).normalize(),Qt.copy(this.origin).sub(yr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ti),a=Qt.dot(this.direction),c=-Qt.dot(Ti),l=Qt.lengthSq(),h=Math.abs(1-o*o);let d,f,m,_;if(h>0)if(d=o*c-a,f=o*a-c,_=s*h,d>=0)if(f>=-_)if(f<=_){const M=1/h;d*=M,f*=M,m=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l):f<=_?(d=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(yr).addScaledVector(Ti,f),m}intersectSphere(e,t){kt.subVectors(e.center,this.origin);const n=kt.dot(this.direction),i=kt.dot(kt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kt)!==null}intersectTriangle(e,t,n,i,s){br.subVectors(t,e),Ai.subVectors(n,e),wr.crossVectors(br,Ai);let o=this.direction.dot(wr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qt.subVectors(this.origin,e);const c=a*this.direction.dot(Ai.crossVectors(Qt,Ai));if(c<0)return null;const l=a*this.direction.dot(br.cross(Qt));if(l<0||c+l>o)return null;const h=-a*Qt.dot(wr);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,c,l,h,d,f,m,_,M,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=s,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=_,u[11]=M,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Dn.setFromMatrixColumn(e,0).length(),s=1/Dn.setFromMatrixColumn(e,1).length(),o=1/Dn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,m=o*d,_=a*h,M=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=m+_*l,t[5]=f-M*l,t[9]=-a*c,t[2]=M-f*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,m=c*d,_=l*h,M=l*d;t[0]=f+M*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-_,t[6]=M+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,m=c*d,_=l*h,M=l*d;t[0]=f-M*a,t[4]=-o*d,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*h,t[9]=M-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,m=o*d,_=a*h,M=a*d;t[0]=c*h,t[4]=_*l-m,t[8]=f*l+M,t[1]=c*d,t[5]=M*l+f,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,_=a*c,M=a*l;t[0]=c*h,t[4]=M-f*d,t[8]=_*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*d+_,t[10]=f-M*d}else if(e.order==="XZY"){const f=o*c,m=o*l,_=a*c,M=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+M,t[5]=o*h,t[9]=m*d-_,t[2]=_*d-m,t[6]=a*h,t[10]=M*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hl,e,Vl)}lookAt(e,t,n){const i=this.elements;return _t.subVectors(e,t),_t.lengthSq()===0&&(_t.z=1),_t.normalize(),en.crossVectors(n,_t),en.lengthSq()===0&&(Math.abs(n.z)===1?_t.x+=1e-4:_t.z+=1e-4,_t.normalize(),en.crossVectors(n,_t)),en.normalize(),Ci.crossVectors(_t,en),i[0]=en.x,i[4]=Ci.x,i[8]=_t.x,i[1]=en.y,i[5]=Ci.y,i[9]=_t.y,i[2]=en.z,i[6]=Ci.z,i[10]=_t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],m=n[13],_=n[2],M=n[6],p=n[10],u=n[14],T=n[3],S=n[7],b=n[11],E=n[15],L=i[0],R=i[4],I=i[8],v=i[12],w=i[1],q=i[5],Y=i[9],C=i[13],U=i[2],O=i[6],J=i[10],j=i[14],W=i[3],$=i[7],Q=i[11],ue=i[15];return s[0]=o*L+a*w+c*U+l*W,s[4]=o*R+a*q+c*O+l*$,s[8]=o*I+a*Y+c*J+l*Q,s[12]=o*v+a*C+c*j+l*ue,s[1]=h*L+d*w+f*U+m*W,s[5]=h*R+d*q+f*O+m*$,s[9]=h*I+d*Y+f*J+m*Q,s[13]=h*v+d*C+f*j+m*ue,s[2]=_*L+M*w+p*U+u*W,s[6]=_*R+M*q+p*O+u*$,s[10]=_*I+M*Y+p*J+u*Q,s[14]=_*v+M*C+p*j+u*ue,s[3]=T*L+S*w+b*U+E*W,s[7]=T*R+S*q+b*O+E*$,s[11]=T*I+S*Y+b*J+E*Q,s[15]=T*v+S*C+b*j+E*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],m=e[14],_=e[3],M=e[7],p=e[11],u=e[15];return _*(+s*c*d-i*l*d-s*a*f+n*l*f+i*a*m-n*c*m)+M*(+t*c*m-t*l*f+s*o*f-i*o*m+i*l*h-s*c*h)+p*(+t*l*d-t*a*m-s*o*d+n*o*m+s*a*h-n*l*h)+u*(-i*a*h-t*c*d+t*a*f+i*o*d-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],m=e[11],_=e[12],M=e[13],p=e[14],u=e[15],T=d*p*l-M*f*l+M*c*m-a*p*m-d*c*u+a*f*u,S=_*f*l-h*p*l-_*c*m+o*p*m+h*c*u-o*f*u,b=h*M*l-_*d*l+_*a*m-o*M*m-h*a*u+o*d*u,E=_*d*c-h*M*c-_*a*f+o*M*f+h*a*p-o*d*p,L=t*T+n*S+i*b+s*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return e[0]=T*R,e[1]=(M*f*s-d*p*s-M*i*m+n*p*m+d*i*u-n*f*u)*R,e[2]=(a*p*s-M*c*s+M*i*l-n*p*l-a*i*u+n*c*u)*R,e[3]=(d*c*s-a*f*s-d*i*l+n*f*l+a*i*m-n*c*m)*R,e[4]=S*R,e[5]=(h*p*s-_*f*s+_*i*m-t*p*m-h*i*u+t*f*u)*R,e[6]=(_*c*s-o*p*s-_*i*l+t*p*l+o*i*u-t*c*u)*R,e[7]=(o*f*s-h*c*s+h*i*l-t*f*l-o*i*m+t*c*m)*R,e[8]=b*R,e[9]=(_*d*s-h*M*s-_*n*m+t*M*m+h*n*u-t*d*u)*R,e[10]=(o*M*s-_*a*s+_*n*l-t*M*l-o*n*u+t*a*u)*R,e[11]=(h*a*s-o*d*s-h*n*l+t*d*l+o*n*m-t*a*m)*R,e[12]=E*R,e[13]=(h*M*i-_*d*i+_*n*f-t*M*f-h*n*p+t*d*p)*R,e[14]=(_*a*i-o*M*i-_*n*c+t*M*c+o*n*p-t*a*p)*R,e[15]=(o*d*i-h*a*i+h*n*c-t*d*c-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,d=a+a,f=s*l,m=s*h,_=s*d,M=o*h,p=o*d,u=a*d,T=c*l,S=c*h,b=c*d,E=n.x,L=n.y,R=n.z;return i[0]=(1-(M+u))*E,i[1]=(m+b)*E,i[2]=(_-S)*E,i[3]=0,i[4]=(m-b)*L,i[5]=(1-(f+u))*L,i[6]=(p+T)*L,i[7]=0,i[8]=(_+S)*R,i[9]=(p-T)*R,i[10]=(1-(f+M))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Dn.set(i[0],i[1],i[2]).length();const o=Dn.set(i[4],i[5],i[6]).length(),a=Dn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ct.copy(this);const l=1/s,h=1/o,d=1/a;return Ct.elements[0]*=l,Ct.elements[1]*=l,Ct.elements[2]*=l,Ct.elements[4]*=h,Ct.elements[5]*=h,Ct.elements[6]*=h,Ct.elements[8]*=d,Ct.elements[9]*=d,Ct.elements[10]*=d,t.setFromRotationMatrix(Ct),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,c=1/(t-e),l=1/(n-i),h=1/(o-s),d=(t+e)*c,f=(n+i)*l,m=(o+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Dn=new N,Ct=new nt,Hl=new N(0,0,0),Vl=new N(1,1,1),en=new N,Ci=new N,_t=new N,Vs=new nt,ks=new xi;class Qi{constructor(e=0,t=0,n=0,i=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ks.setFromEuler(this),this.setFromQuaternion(ks,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class Wa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kl=0;const Ws=new N,In=new xi,Wt=new nt,Li=new N,li=new N,Wl=new N,ql=new xi,qs=new N(1,0,0),Xs=new N(0,1,0),Ys=new N(0,0,1),Xl={type:"added"},$s={type:"removed"};class Mt extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new N,t=new Qi,n=new xi,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new Pe}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.multiply(In),this}rotateOnWorldAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.premultiply(In),this}rotateX(e){return this.rotateOnAxis(qs,e)}rotateY(e){return this.rotateOnAxis(Xs,e)}rotateZ(e){return this.rotateOnAxis(Ys,e)}translateOnAxis(e,t){return Ws.copy(e).applyQuaternion(this.quaternion),this.position.add(Ws.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qs,e)}translateY(e){return this.translateOnAxis(Xs,e)}translateZ(e){return this.translateOnAxis(Ys,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Li.copy(e):Li.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wt.lookAt(li,Li,this.up):Wt.lookAt(Li,li,this.up),this.quaternion.setFromRotationMatrix(Wt),i&&(Wt.extractRotation(i.matrixWorld),In.setFromRotationMatrix(Wt),this.quaternion.premultiply(In.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($s)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent($s)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Wt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,e,Wl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,ql,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mt.DEFAULT_UP=new N(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Lt=new N,qt=new N,Er=new N,Xt=new N,Un=new N,Nn=new N,js=new N,Tr=new N,Ar=new N,Cr=new N;let Pi=!1;class Rt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Lt.subVectors(e,t),i.cross(Lt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Lt.subVectors(i,t),qt.subVectors(n,t),Er.subVectors(e,t);const o=Lt.dot(Lt),a=Lt.dot(qt),c=Lt.dot(Er),l=qt.dot(qt),h=qt.dot(Er),d=o*l-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,m=(l*c-a*h)*f,_=(o*h-a*c)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xt),Xt.x>=0&&Xt.y>=0&&Xt.x+Xt.y<=1}static getUV(e,t,n,i,s,o,a,c){return Pi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pi=!0),this.getInterpolation(e,t,n,i,s,o,a,c)}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Xt),c.setScalar(0),c.addScaledVector(s,Xt.x),c.addScaledVector(o,Xt.y),c.addScaledVector(a,Xt.z),c}static isFrontFacing(e,t,n,i){return Lt.subVectors(n,t),qt.subVectors(e,t),Lt.cross(qt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Lt.subVectors(this.c,this.b),qt.subVectors(this.a,this.b),Lt.cross(qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Pi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pi=!0),Rt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Rt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Rt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Un.subVectors(i,n),Nn.subVectors(s,n),Tr.subVectors(e,n);const c=Un.dot(Tr),l=Nn.dot(Tr);if(c<=0&&l<=0)return t.copy(n);Ar.subVectors(e,i);const h=Un.dot(Ar),d=Nn.dot(Ar);if(h>=0&&d<=h)return t.copy(i);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Un,o);Cr.subVectors(e,s);const m=Un.dot(Cr),_=Nn.dot(Cr);if(_>=0&&m<=_)return t.copy(s);const M=m*l-c*_;if(M<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Nn,a);const p=h*_-m*d;if(p<=0&&d-h>=0&&m-_>=0)return js.subVectors(s,i),a=(d-h)/(d-h+(m-_)),t.copy(i).addScaledVector(js,a);const u=1/(p+M+f);return o=M*u,a=f*u,t.copy(n).addScaledVector(Un,o).addScaledVector(Nn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Yl=0;class er extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=jn,this.side=rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ua,this.blendDst=Na,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jn&&(n.blending=this.blending),this.side!==rn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pt={h:0,s:0,l:0},Ri={h:0,s:0,l:0};function Lr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=gt.workingColorSpace){if(e=Ll(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Lr(o,s,e+1/3),this.g=Lr(o,s,e),this.b=Lr(o,s,e-1/3)}return gt.toWorkingColorSpace(this,i),this}setStyle(e,t=zt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,gt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,gt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=qa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return gt.fromWorkingColorSpace(st.copy(this),e),ht(st.r*255,0,255)<<16^ht(st.g*255,0,255)<<8^ht(st.b*255,0,255)<<0}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(st.copy(this),t);const n=st.r,i=st.g,s=st.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(st.copy(this),t),e.r=st.r,e.g=st.g,e.b=st.b,e}getStyle(e=zt){gt.fromWorkingColorSpace(st.copy(this),e);const t=st.r,n=st.g,i=st.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Pt),Pt.h+=e,Pt.s+=t,Pt.l+=n,this.setHSL(Pt.h,Pt.s,Pt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pt),e.getHSL(Ri);const n=mr(Pt.h,Ri.h,t),i=mr(Pt.s,Ri.s,t),s=mr(Pt.l,Ri.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const st=new Ge;Ge.NAMES=qa;class Xa extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xe=new N,Di=new ze;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zs,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Di.fromBufferAttribute(this,t),Di.applyMatrix3(e),this.setXY(t,Di.x,Di.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix3(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix4(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyNormalMatrix(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.transformDirection(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ya extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $a extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Sn extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $l=0;const yt=new nt,Pr=new Mt,Fn=new N,vt=new Mi,ci=new Mi,Qe=new N;class En extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ga(e)?$a:Ya)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yt.makeRotationFromQuaternion(e),this.applyMatrix4(yt),this}rotateX(e){return yt.makeRotationX(e),this.applyMatrix4(yt),this}rotateY(e){return yt.makeRotationY(e),this.applyMatrix4(yt),this}rotateZ(e){return yt.makeRotationZ(e),this.applyMatrix4(yt),this}translate(e,t,n){return yt.makeTranslation(e,t,n),this.applyMatrix4(yt),this}scale(e,t,n){return yt.makeScale(e,t,n),this.applyMatrix4(yt),this}lookAt(e){return Pr.lookAt(e),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fn).negate(),this.translate(Fn.x,Fn.y,Fn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];vt.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,vt.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,vt.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(vt.min),this.boundingBox.expandByPoint(vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(vt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ci.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(vt.min,ci.min),vt.expandByPoint(Qe),Qe.addVectors(vt.max,ci.max),vt.expandByPoint(Qe)):(vt.expandByPoint(ci.min),vt.expandByPoint(ci.max))}vt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Qe.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Qe));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Qe.fromBufferAttribute(a,l),c&&(Fn.fromBufferAttribute(e,l),Qe.add(Fn)),i=Math.max(i,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<a;w++)l[w]=new N,h[w]=new N;const d=new N,f=new N,m=new N,_=new ze,M=new ze,p=new ze,u=new N,T=new N;function S(w,q,Y){d.fromArray(i,w*3),f.fromArray(i,q*3),m.fromArray(i,Y*3),_.fromArray(o,w*2),M.fromArray(o,q*2),p.fromArray(o,Y*2),f.sub(d),m.sub(d),M.sub(_),p.sub(_);const C=1/(M.x*p.y-p.x*M.y);isFinite(C)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-M.y).multiplyScalar(C),T.copy(m).multiplyScalar(M.x).addScaledVector(f,-p.x).multiplyScalar(C),l[w].add(u),l[q].add(u),l[Y].add(u),h[w].add(T),h[q].add(T),h[Y].add(T))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let w=0,q=b.length;w<q;++w){const Y=b[w],C=Y.start,U=Y.count;for(let O=C,J=C+U;O<J;O+=3)S(n[O+0],n[O+1],n[O+2])}const E=new N,L=new N,R=new N,I=new N;function v(w){R.fromArray(s,w*3),I.copy(R);const q=l[w];E.copy(q),E.sub(R.multiplyScalar(R.dot(q))).normalize(),L.crossVectors(I,q);const C=L.dot(h[w])<0?-1:1;c[w*4]=E.x,c[w*4+1]=E.y,c[w*4+2]=E.z,c[w*4+3]=C}for(let w=0,q=b.length;w<q;++w){const Y=b[w],C=Y.start,U=Y.count;for(let O=C,J=C+U;O<J;O+=3)v(n[O+0]),v(n[O+1]),v(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new N,s=new N,o=new N,a=new N,c=new N,l=new N,h=new N,d=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),M=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,p),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qe.fromBufferAttribute(e,t),Qe.normalize(),e.setXYZ(t,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h);let m=0,_=0;for(let M=0,p=c.length;M<p;M++){a.isInterleavedBufferAttribute?m=c[M]*a.data.stride+a.offset:m=c[M]*h;for(let u=0;u<h;u++)f[_++]=l[m++]}return new Gt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new En,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const f=l[h],m=e(f,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zs=new nt,Ot=new Gl,Ii=new ns,Ks=new N,On=new N,zn=new N,Bn=new N,Rr=new N,Ui=new N,Ni=new ze,Fi=new ze,Oi=new ze,Js=new N,Qs=new N,ea=new N,zi=new N,Bi=new N;class $t extends Mt{constructor(e=new En,t=new Xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ui.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(Rr.fromBufferAttribute(d,e),o?Ui.addScaledVector(Rr,h):Ui.addScaledVector(Rr.sub(t),h))}t.add(Ui)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ii.copy(n.boundingSphere),Ii.applyMatrix4(s),Ot.copy(e.ray).recast(e.near),Ii.containsPoint(Ot.origin)===!1&&(Ot.intersectSphere(Ii,Ks)===null||Ot.origin.distanceToSquared(Ks)>(e.far-e.near)**2))||(Zs.copy(s).invert(),Ot.copy(e.ray).applyMatrix4(Zs),n.boundingBox!==null&&Ot.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,d=n.attributes.normal,f=n.groups,m=n.drawRange;if(a!==null)if(Array.isArray(i))for(let _=0,M=f.length;_<M;_++){const p=f[_],u=i[p.materialIndex],T=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=T,E=S;b<E;b+=3){const L=a.getX(b),R=a.getX(b+1),I=a.getX(b+2);o=Gi(this,u,e,Ot,l,h,d,L,R,I),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const _=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let p=_,u=M;p<u;p+=3){const T=a.getX(p),S=a.getX(p+1),b=a.getX(p+2);o=Gi(this,i,e,Ot,l,h,d,T,S,b),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let _=0,M=f.length;_<M;_++){const p=f[_],u=i[p.materialIndex],T=Math.max(p.start,m.start),S=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let b=T,E=S;b<E;b+=3){const L=b,R=b+1,I=b+2;o=Gi(this,u,e,Ot,l,h,d,L,R,I),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const _=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let p=_,u=M;p<u;p+=3){const T=p,S=p+1,b=p+2;o=Gi(this,i,e,Ot,l,h,d,T,S,b),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function jl(r,e,t,n,i,s,o,a){let c;if(e.side===ft?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===rn,a),c===null)return null;Bi.copy(a),Bi.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Bi);return l<t.near||l>t.far?null:{distance:l,point:Bi.clone(),object:r}}function Gi(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,On),r.getVertexPosition(c,zn),r.getVertexPosition(l,Bn);const h=jl(r,e,t,n,On,zn,Bn,zi);if(h){i&&(Ni.fromBufferAttribute(i,a),Fi.fromBufferAttribute(i,c),Oi.fromBufferAttribute(i,l),h.uv=Rt.getInterpolation(zi,On,zn,Bn,Ni,Fi,Oi,new ze)),s&&(Ni.fromBufferAttribute(s,a),Fi.fromBufferAttribute(s,c),Oi.fromBufferAttribute(s,l),h.uv2=Rt.getInterpolation(zi,On,zn,Bn,Ni,Fi,Oi,new ze)),o&&(Js.fromBufferAttribute(o,a),Qs.fromBufferAttribute(o,c),ea.fromBufferAttribute(o,l),h.normal=Rt.getInterpolation(zi,On,zn,Bn,Js,Qs,ea,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new N,materialIndex:0};Rt.getNormal(On,zn,Bn,d.normal),h.face=d}return h}class Si extends En{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Sn(l,3)),this.setAttribute("normal",new Sn(h,3)),this.setAttribute("uv",new Sn(d,2));function _(M,p,u,T,S,b,E,L,R,I,v){const w=b/R,q=E/I,Y=b/2,C=E/2,U=L/2,O=R+1,J=I+1;let j=0,W=0;const $=new N;for(let Q=0;Q<J;Q++){const ue=Q*q-C;for(let ae=0;ae<O;ae++){const B=ae*w-Y;$[M]=B*T,$[p]=ue*S,$[u]=U,l.push($.x,$.y,$.z),$[M]=0,$[p]=0,$[u]=L>0?1:-1,h.push($.x,$.y,$.z),d.push(ae/R),d.push(1-Q/I),j+=1}}for(let Q=0;Q<I;Q++)for(let ue=0;ue<R;ue++){const ae=f+ue+O*Q,B=f+ue+O*(Q+1),X=f+(ue+1)+O*(Q+1),ie=f+(ue+1)+O*Q;c.push(ae,B,ie),c.push(B,X,ie),W+=6}a.addGroup(m,W,v),m+=W,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ni(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function lt(r){const e={};for(let t=0;t<r.length;t++){const n=ni(r[t]);for(const i in n)e[i]=n[i]}return e}function Zl(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ja(r){return r.getRenderTarget()===null&&r.outputEncoding===Oe?zt:gi}const Kl={clone:ni,merge:lt};var Jl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ql=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jl,this.fragmentShader=Ql,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ni(e.uniforms),this.uniformsGroups=Zl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Za extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wt extends Za{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gn=-90,Hn=1;class ec extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new wt(Gn,Hn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new wt(Gn,Hn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new wt(Gn,Hn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new wt(Gn,Hn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new wt(Gn,Hn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new wt(Gn,Hn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,h=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=jt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Ka extends xt{constructor(e,t,n,i,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Qn,super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tc extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ka(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Si(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ft,blending:nn});s.uniforms.tEquirect.value=t;const o=new $t(i,s),a=t.minFilter;return t.minFilter===pi&&(t.minFilter=bt),new ec(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Dr=new N,nc=new N,ic=new Pe;class pn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Dr.subVectors(n,t).cross(nc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Dr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ic.getNormalMatrix(e),i=this.coplanarPoint(Dr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hn=new ns,Hi=new N;class Ja{constructor(e=new pn,t=new pn,n=new pn,i=new pn,s=new pn,o=new pn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7],f=n[8],m=n[9],_=n[10],M=n[11],p=n[12],u=n[13],T=n[14],S=n[15];return t[0].setComponents(a-i,d-c,M-f,S-p).normalize(),t[1].setComponents(a+i,d+c,M+f,S+p).normalize(),t[2].setComponents(a+s,d+l,M+m,S+u).normalize(),t[3].setComponents(a-s,d-l,M-m,S-u).normalize(),t[4].setComponents(a-o,d-h,M-_,S-T).normalize(),t[5].setComponents(a+o,d+h,M+_,S+T).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hn)}intersectsSprite(e){return hn.center.set(0,0,0),hn.radius=.7071067811865476,hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(hn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Hi.x=i.normal.x>0?e.max.x:e.min.x,Hi.y=i.normal.y>0?e.max.y:e.min.y,Hi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Hi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qa(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function rc(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,f=l.usage,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,d,f),l.onUploadCallback();let _;if(d instanceof Float32Array)_=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(d instanceof Int16Array)_=5122;else if(d instanceof Uint32Array)_=5125;else if(d instanceof Int32Array)_=5124;else if(d instanceof Int8Array)_=5120;else if(d instanceof Uint8Array)_=5121;else if(d instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,d){const f=h.array,m=h.updateRange;r.bindBuffer(d,l),m.count===-1?r.bufferSubData(d,0,f):(t?r.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,i(l,h)):d.version<l.version&&(s(d.buffer,l,h),d.version=l.version)}return{get:o,remove:a,update:c}}class tr extends En{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=e/a,f=t/c,m=[],_=[],M=[],p=[];for(let u=0;u<h;u++){const T=u*f-o;for(let S=0;S<l;S++){const b=S*d-s;_.push(b,-T,0),M.push(0,0,1),p.push(S/a),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let T=0;T<a;T++){const S=T+l*u,b=T+l*(u+1),E=T+1+l*(u+1),L=T+1+l*u;m.push(S,b,L),m.push(b,E,L)}this.setIndex(m),this.setAttribute("position",new Sn(_,3)),this.setAttribute("normal",new Sn(M,3)),this.setAttribute("uv",new Sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.width,e.height,e.widthSegments,e.heightSegments)}}var sc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ac=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hc="vec3 transformed = vec3( position );",dc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_c=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ec=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ac=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ic=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Uc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Oc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$c=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,jc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,eu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ru=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,su=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,au=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ou=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,du=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_u=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,xu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Su=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Eu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Au=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ru=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Du=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ou=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Vu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ku=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$u=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,ju=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Zu=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ku=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ju=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,th=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ih=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ah=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ch=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ph=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_h=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Eh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Th=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ah=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ch=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ph=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Dh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ih=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ee={alphamap_fragment:sc,alphamap_pars_fragment:ac,alphatest_fragment:oc,alphatest_pars_fragment:lc,aomap_fragment:cc,aomap_pars_fragment:uc,begin_vertex:hc,beginnormal_vertex:dc,bsdfs:fc,iridescence_fragment:pc,bumpmap_pars_fragment:mc,clipping_planes_fragment:gc,clipping_planes_pars_fragment:_c,clipping_planes_pars_vertex:vc,clipping_planes_vertex:xc,color_fragment:Mc,color_pars_fragment:Sc,color_pars_vertex:yc,color_vertex:bc,common:wc,cube_uv_reflection_fragment:Ec,defaultnormal_vertex:Tc,displacementmap_pars_vertex:Ac,displacementmap_vertex:Cc,emissivemap_fragment:Lc,emissivemap_pars_fragment:Pc,encodings_fragment:Rc,encodings_pars_fragment:Dc,envmap_fragment:Ic,envmap_common_pars_fragment:Uc,envmap_pars_fragment:Nc,envmap_pars_vertex:Fc,envmap_physical_pars_fragment:$c,envmap_vertex:Oc,fog_vertex:zc,fog_pars_vertex:Bc,fog_fragment:Gc,fog_pars_fragment:Hc,gradientmap_pars_fragment:Vc,lightmap_fragment:kc,lightmap_pars_fragment:Wc,lights_lambert_fragment:qc,lights_lambert_pars_fragment:Xc,lights_pars_begin:Yc,lights_toon_fragment:jc,lights_toon_pars_fragment:Zc,lights_phong_fragment:Kc,lights_phong_pars_fragment:Jc,lights_physical_fragment:Qc,lights_physical_pars_fragment:eu,lights_fragment_begin:tu,lights_fragment_maps:nu,lights_fragment_end:iu,logdepthbuf_fragment:ru,logdepthbuf_pars_fragment:su,logdepthbuf_pars_vertex:au,logdepthbuf_vertex:ou,map_fragment:lu,map_pars_fragment:cu,map_particle_fragment:uu,map_particle_pars_fragment:hu,metalnessmap_fragment:du,metalnessmap_pars_fragment:fu,morphcolor_vertex:pu,morphnormal_vertex:mu,morphtarget_pars_vertex:gu,morphtarget_vertex:_u,normal_fragment_begin:vu,normal_fragment_maps:xu,normal_pars_fragment:Mu,normal_pars_vertex:Su,normal_vertex:yu,normalmap_pars_fragment:bu,clearcoat_normal_fragment_begin:wu,clearcoat_normal_fragment_maps:Eu,clearcoat_pars_fragment:Tu,iridescence_pars_fragment:Au,output_fragment:Cu,packing:Lu,premultiplied_alpha_fragment:Pu,project_vertex:Ru,dithering_fragment:Du,dithering_pars_fragment:Iu,roughnessmap_fragment:Uu,roughnessmap_pars_fragment:Nu,shadowmap_pars_fragment:Fu,shadowmap_pars_vertex:Ou,shadowmap_vertex:zu,shadowmask_pars_fragment:Bu,skinbase_vertex:Gu,skinning_pars_vertex:Hu,skinning_vertex:Vu,skinnormal_vertex:ku,specularmap_fragment:Wu,specularmap_pars_fragment:qu,tonemapping_fragment:Xu,tonemapping_pars_fragment:Yu,transmission_fragment:$u,transmission_pars_fragment:ju,uv_pars_fragment:Zu,uv_pars_vertex:Ku,uv_vertex:Ju,worldpos_vertex:Qu,background_vert:eh,background_frag:th,backgroundCube_vert:nh,backgroundCube_frag:ih,cube_vert:rh,cube_frag:sh,depth_vert:ah,depth_frag:oh,distanceRGBA_vert:lh,distanceRGBA_frag:ch,equirect_vert:uh,equirect_frag:hh,linedashed_vert:dh,linedashed_frag:fh,meshbasic_vert:ph,meshbasic_frag:mh,meshlambert_vert:gh,meshlambert_frag:_h,meshmatcap_vert:vh,meshmatcap_frag:xh,meshnormal_vert:Mh,meshnormal_frag:Sh,meshphong_vert:yh,meshphong_frag:bh,meshphysical_vert:wh,meshphysical_frag:Eh,meshtoon_vert:Th,meshtoon_frag:Ah,points_vert:Ch,points_frag:Lh,shadow_vert:Ph,shadow_frag:Rh,sprite_vert:Dh,sprite_frag:Ih},te={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaTest:{value:0}}},Bt={basic:{uniforms:lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:lt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:lt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:lt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:lt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:lt([te.points,te.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:lt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:lt([te.common,te.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:lt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:lt([te.sprite,te.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:lt([te.common,te.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:lt([te.lights,te.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Bt.physical={uniforms:lt([Bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const Vi={r:0,b:0,g:0};function Uh(r,e,t,n,i,s,o){const a=new Ge(0);let c=s===!0?0:1,l,h,d=null,f=0,m=null;function _(p,u){let T=!1,S=u.isScene===!0?u.background:null;S&&S.isTexture&&(S=(u.backgroundBlurriness>0?t:e).get(S));const b=r.xr,E=b.getSession&&b.getSession();E&&E.environmentBlendMode==="additive"&&(S=null),S===null?M(a,c):S&&S.isColor&&(M(S,1),T=!0),(r.autoClear||T)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Ji)?(h===void 0&&(h=new $t(new Si(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:ni(Bt.backgroundCube.uniforms),vertexShader:Bt.backgroundCube.vertexShader,fragmentShader:Bt.backgroundCube.fragmentShader,side:ft,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=S.encoding!==Oe,(d!==S||f!==S.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,d=S,f=S.version,m=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new $t(new tr(2,2),new sn({name:"BackgroundMaterial",uniforms:ni(Bt.background.uniforms),vertexShader:Bt.background.vertexShader,fragmentShader:Bt.background.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=S.encoding!==Oe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,d=S,f=S.version,m=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function M(p,u){p.getRGB(Vi,ja(r)),n.buffers.color.setClear(Vi.r,Vi.g,Vi.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),c=u,M(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,M(a,c)},render:_}}function Nh(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=p(null);let l=c,h=!1;function d(U,O,J,j,W){let $=!1;if(o){const Q=M(j,J,O);l!==Q&&(l=Q,m(l.object)),$=u(U,j,J,W),$&&T(U,j,J,W)}else{const Q=O.wireframe===!0;(l.geometry!==j.id||l.program!==J.id||l.wireframe!==Q)&&(l.geometry=j.id,l.program=J.id,l.wireframe=Q,$=!0)}W!==null&&t.update(W,34963),($||h)&&(h=!1,I(U,O,J,j),W!==null&&r.bindBuffer(34963,t.get(W).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(U){return n.isWebGL2?r.bindVertexArray(U):s.bindVertexArrayOES(U)}function _(U){return n.isWebGL2?r.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function M(U,O,J){const j=J.wireframe===!0;let W=a[U.id];W===void 0&&(W={},a[U.id]=W);let $=W[O.id];$===void 0&&($={},W[O.id]=$);let Q=$[j];return Q===void 0&&(Q=p(f()),$[j]=Q),Q}function p(U){const O=[],J=[],j=[];for(let W=0;W<i;W++)O[W]=0,J[W]=0,j[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:J,attributeDivisors:j,object:U,attributes:{},index:null}}function u(U,O,J,j){const W=l.attributes,$=O.attributes;let Q=0;const ue=J.getAttributes();for(const ae in ue)if(ue[ae].location>=0){const X=W[ae];let ie=$[ae];if(ie===void 0&&(ae==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),ae==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor)),X===void 0||X.attribute!==ie||ie&&X.data!==ie.data)return!0;Q++}return l.attributesNum!==Q||l.index!==j}function T(U,O,J,j){const W={},$=O.attributes;let Q=0;const ue=J.getAttributes();for(const ae in ue)if(ue[ae].location>=0){let X=$[ae];X===void 0&&(ae==="instanceMatrix"&&U.instanceMatrix&&(X=U.instanceMatrix),ae==="instanceColor"&&U.instanceColor&&(X=U.instanceColor));const ie={};ie.attribute=X,X&&X.data&&(ie.data=X.data),W[ae]=ie,Q++}l.attributes=W,l.attributesNum=Q,l.index=j}function S(){const U=l.newAttributes;for(let O=0,J=U.length;O<J;O++)U[O]=0}function b(U){E(U,0)}function E(U,O){const J=l.newAttributes,j=l.enabledAttributes,W=l.attributeDivisors;J[U]=1,j[U]===0&&(r.enableVertexAttribArray(U),j[U]=1),W[U]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,O),W[U]=O)}function L(){const U=l.newAttributes,O=l.enabledAttributes;for(let J=0,j=O.length;J<j;J++)O[J]!==U[J]&&(r.disableVertexAttribArray(J),O[J]=0)}function R(U,O,J,j,W,$){n.isWebGL2===!0&&(J===5124||J===5125)?r.vertexAttribIPointer(U,O,J,W,$):r.vertexAttribPointer(U,O,J,j,W,$)}function I(U,O,J,j){if(n.isWebGL2===!1&&(U.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const W=j.attributes,$=J.getAttributes(),Q=O.defaultAttributeValues;for(const ue in $){const ae=$[ue];if(ae.location>=0){let B=W[ue];if(B===void 0&&(ue==="instanceMatrix"&&U.instanceMatrix&&(B=U.instanceMatrix),ue==="instanceColor"&&U.instanceColor&&(B=U.instanceColor)),B!==void 0){const X=B.normalized,ie=B.itemSize,re=t.get(B);if(re===void 0)continue;const F=re.buffer,ye=re.type,Se=re.bytesPerElement;if(B.isInterleavedBufferAttribute){const ne=B.data,ve=ne.stride,Ie=B.offset;if(ne.isInstancedInterleavedBuffer){for(let pe=0;pe<ae.locationSize;pe++)E(ae.location+pe,ne.meshPerAttribute);U.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let pe=0;pe<ae.locationSize;pe++)b(ae.location+pe);r.bindBuffer(34962,F);for(let pe=0;pe<ae.locationSize;pe++)R(ae.location+pe,ie/ae.locationSize,ye,X,ve*Se,(Ie+ie/ae.locationSize*pe)*Se)}else{if(B.isInstancedBufferAttribute){for(let ne=0;ne<ae.locationSize;ne++)E(ae.location+ne,B.meshPerAttribute);U.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ne=0;ne<ae.locationSize;ne++)b(ae.location+ne);r.bindBuffer(34962,F);for(let ne=0;ne<ae.locationSize;ne++)R(ae.location+ne,ie/ae.locationSize,ye,X,ie*Se,ie/ae.locationSize*ne*Se)}}else if(Q!==void 0){const X=Q[ue];if(X!==void 0)switch(X.length){case 2:r.vertexAttrib2fv(ae.location,X);break;case 3:r.vertexAttrib3fv(ae.location,X);break;case 4:r.vertexAttrib4fv(ae.location,X);break;default:r.vertexAttrib1fv(ae.location,X)}}}}L()}function v(){Y();for(const U in a){const O=a[U];for(const J in O){const j=O[J];for(const W in j)_(j[W].object),delete j[W];delete O[J]}delete a[U]}}function w(U){if(a[U.id]===void 0)return;const O=a[U.id];for(const J in O){const j=O[J];for(const W in j)_(j[W].object),delete j[W];delete O[J]}delete a[U.id]}function q(U){for(const O in a){const J=a[O];if(J[U.id]===void 0)continue;const j=J[U.id];for(const W in j)_(j[W].object),delete j[W];delete J[U.id]}}function Y(){C(),h=!0,l!==c&&(l=c,m(l.object))}function C(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:C,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:q,initAttributes:S,enableAttribute:b,disableUnusedAttributes:L}}function Fh(r,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,h){r.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,d){if(d===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,l,h,d),t.update(h,s,d)}this.setMode=o,this.render=a,this.renderInstances=c}function Oh(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),_=r.getParameter(34076),M=r.getParameter(34921),p=r.getParameter(36347),u=r.getParameter(36348),T=r.getParameter(36349),S=f>0,b=o||e.has("OES_texture_float"),E=S&&b,L=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:M,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:T,vertexTextures:S,floatFragmentTextures:b,floatVertexTextures:E,maxSamples:L}}function zh(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new pn,a=new Pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,M=d.clipIntersection,p=d.clipShadows,u=r.get(d);if(!i||_===null||_.length===0||s&&!p)s?h(null):l();else{const T=s?0:n,S=T*4;let b=u.clippingState||null;c.value=b,b=h(_,f,S,m);for(let E=0;E!==S;++E)b[E]=t[E];u.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,_){const M=d!==null?d.length:0;let p=null;if(M!==0){if(p=c.value,_!==!0||p===null){const u=m+M*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<u)&&(p=new Float32Array(u));for(let S=0,b=m;S!==M;++S,b+=4)o.copy(d[S]).applyMatrix4(T,a),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function Bh(r){let e=new WeakMap;function t(o,a){return a===Wr?o.mapping=Qn:a===qr&&(o.mapping=ei),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Wr||a===qr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new tc(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Gh extends Za{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qn=4,ta=[.125,.215,.35,.446,.526,.582],gn=20,Ir=new Gh,na=new Ge;let Ur=null;const mn=(1+Math.sqrt(5))/2,Vn=1/mn,ia=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,mn,Vn),new N(0,mn,-Vn),new N(Vn,0,mn),new N(-Vn,0,mn),new N(mn,Vn,0),new N(-mn,Vn,0)];class ra{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ur=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=aa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ur),e.scissorTest=!1,ki(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qn||e.mapping===ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ur=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:mi,format:It,encoding:bn,depthBuffer:!1},i=sa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hh(s)),this._blurMaterial=Vh(s,e,t)}return i}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,Ir)}_sceneToCubeUV(e,t,n,i){const a=new wt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(na),h.toneMapping=jt,h.autoClear=!1;const m=new Xa({name:"PMREM.Background",side:ft,depthWrite:!1,depthTest:!1}),_=new $t(new Si,m);let M=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,M=!0):(m.color.copy(na),M=!0);for(let u=0;u<6;u++){const T=u%3;T===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):T===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const S=this._cubeSize;ki(i,T*S,u>2?S:0,S,S),h.setRenderTarget(i),M&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Qn||e.mapping===ei;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=oa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=aa());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ki(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ir)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ia[(i-1)%ia.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new $t(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*gn-1),M=s/_,p=isFinite(s)?1+Math.floor(h*M):gn;p>gn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gn}`);const u=[];let T=0;for(let R=0;R<gn;++R){const I=R/M,v=Math.exp(-I*I/2);u.push(v),R===0?T+=v:R<p&&(T+=2*v)}for(let R=0;R<u.length;R++)u[R]=u[R]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-n;const b=this._sizeLods[i],E=3*b*(i>S-qn?i-S+qn:0),L=4*(this._cubeSize-b);ki(t,E,L,3*b,2*b),c.setRenderTarget(t),c.render(d,Ir)}}function Hh(r){const e=[],t=[],n=[];let i=r;const s=r-qn+1+ta.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-qn?c=ta[o-r+qn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,M=3,p=2,u=1,T=new Float32Array(M*_*m),S=new Float32Array(p*_*m),b=new Float32Array(u*_*m);for(let L=0;L<m;L++){const R=L%3*2/3-1,I=L>2?0:-1,v=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];T.set(v,M*_*L),S.set(f,p*_*L);const w=[L,L,L,L,L,L];b.set(w,u*_*L)}const E=new En;E.setAttribute("position",new Gt(T,M)),E.setAttribute("uv",new Gt(S,p)),E.setAttribute("faceIndex",new Gt(b,u)),e.push(E),i>qn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sa(r,e,t){const n=new wn(r,e,t);return n.texture.mapping=Ji,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ki(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Vh(r,e,t){const n=new Float32Array(gn),i=new N(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:gn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function aa(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function oa(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function is(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kh(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Wr||c===qr,h=c===Qn||c===ei;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new ra(r)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new ra(r));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Wh(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qh(r,e,t,n){const i={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const _ in f)e.update(f[_],34962);const m=d.morphAttributes;for(const _ in m){const M=m[_];for(let p=0,u=M.length;p<u;p++)e.update(M[p],34962)}}function l(d){const f=[],m=d.index,_=d.attributes.position;let M=0;if(m!==null){const T=m.array;M=m.version;for(let S=0,b=T.length;S<b;S+=3){const E=T[S+0],L=T[S+1],R=T[S+2];f.push(E,L,L,R,R,E)}}else{const T=_.array;M=_.version;for(let S=0,b=T.length/3-1;S<b;S+=3){const E=S+0,L=S+1,R=S+2;f.push(E,L,L,R,R,E)}}const p=new(Ga(f)?$a:Ya)(f,1);p.version=M;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Xh(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,m){r.drawElements(s,m,a,f*c),t.update(m,s,1)}function d(f,m,_){if(_===0)return;let M,p;if(i)M=r,p="drawElementsInstanced";else if(M=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",M===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[p](s,m,a,f*c,_),t.update(m,s,_)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d}function Yh(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $h(r,e){return r[0]-e[0]}function jh(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Zh(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new tt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0;let M=s.get(h);if(M===void 0||M.count!==_){let U=function(){Y.dispose(),s.delete(h),h.removeEventListener("dispose",U)};M!==void 0&&M.texture.dispose();const T=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let I=0;T===!0&&(I=1),S===!0&&(I=2),b===!0&&(I=3);let v=h.attributes.position.count*I,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const q=new Float32Array(v*w*4*_),Y=new ka(q,v,w,_);Y.type=xn,Y.needsUpdate=!0;const C=I*4;for(let O=0;O<_;O++){const J=E[O],j=L[O],W=R[O],$=v*w*4*O;for(let Q=0;Q<J.count;Q++){const ue=Q*C;T===!0&&(o.fromBufferAttribute(J,Q),q[$+ue+0]=o.x,q[$+ue+1]=o.y,q[$+ue+2]=o.z,q[$+ue+3]=0),S===!0&&(o.fromBufferAttribute(j,Q),q[$+ue+4]=o.x,q[$+ue+5]=o.y,q[$+ue+6]=o.z,q[$+ue+7]=0),b===!0&&(o.fromBufferAttribute(W,Q),q[$+ue+8]=o.x,q[$+ue+9]=o.y,q[$+ue+10]=o.z,q[$+ue+11]=W.itemSize===4?o.w:1)}}M={count:_,texture:Y,size:new ze(v,w)},s.set(h,M),h.addEventListener("dispose",U)}let p=0;for(let T=0;T<f.length;T++)p+=f[T];const u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(r,"morphTargetBaseInfluence",u),d.getUniforms().setValue(r,"morphTargetInfluences",f),d.getUniforms().setValue(r,"morphTargetsTexture",M.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",M.size)}else{const m=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==m){_=[];for(let S=0;S<m;S++)_[S]=[S,0];n[h.id]=_}for(let S=0;S<m;S++){const b=_[S];b[0]=S,b[1]=f[S]}_.sort(jh);for(let S=0;S<8;S++)S<m&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort($h);const M=h.morphAttributes.position,p=h.morphAttributes.normal;let u=0;for(let S=0;S<8;S++){const b=a[S],E=b[0],L=b[1];E!==Number.MAX_SAFE_INTEGER&&L?(M&&h.getAttribute("morphTarget"+S)!==M[E]&&h.setAttribute("morphTarget"+S,M[E]),p&&h.getAttribute("morphNormal"+S)!==p[E]&&h.setAttribute("morphNormal"+S,p[E]),i[S]=L,u+=L):(M&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),p&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const T=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(r,"morphTargetBaseInfluence",T),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Kh(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);return i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const eo=new xt,to=new ka,no=new zl,io=new Ka,la=[],ca=[],ua=new Float32Array(16),ha=new Float32Array(9),da=new Float32Array(4);function ri(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=la[i];if(s===void 0&&(s=new Float32Array(i),la[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function $e(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function je(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function nr(r,e){let t=ca[e];t===void 0&&(t=new Int32Array(e),ca[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Jh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Qh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($e(t,e))return;r.uniform2fv(this.addr,e),je(t,e)}}function ed(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($e(t,e))return;r.uniform3fv(this.addr,e),je(t,e)}}function td(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($e(t,e))return;r.uniform4fv(this.addr,e),je(t,e)}}function nd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($e(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),je(t,e)}else{if($e(t,n))return;da.set(n),r.uniformMatrix2fv(this.addr,!1,da),je(t,n)}}function id(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($e(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),je(t,e)}else{if($e(t,n))return;ha.set(n),r.uniformMatrix3fv(this.addr,!1,ha),je(t,n)}}function rd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($e(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),je(t,e)}else{if($e(t,n))return;ua.set(n),r.uniformMatrix4fv(this.addr,!1,ua),je(t,n)}}function sd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ad(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($e(t,e))return;r.uniform2iv(this.addr,e),je(t,e)}}function od(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($e(t,e))return;r.uniform3iv(this.addr,e),je(t,e)}}function ld(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($e(t,e))return;r.uniform4iv(this.addr,e),je(t,e)}}function cd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ud(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($e(t,e))return;r.uniform2uiv(this.addr,e),je(t,e)}}function hd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($e(t,e))return;r.uniform3uiv(this.addr,e),je(t,e)}}function dd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($e(t,e))return;r.uniform4uiv(this.addr,e),je(t,e)}}function fd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||eo,i)}function pd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||no,i)}function md(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||io,i)}function gd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||to,i)}function _d(r){switch(r){case 5126:return Jh;case 35664:return Qh;case 35665:return ed;case 35666:return td;case 35674:return nd;case 35675:return id;case 35676:return rd;case 5124:case 35670:return sd;case 35667:case 35671:return ad;case 35668:case 35672:return od;case 35669:case 35673:return ld;case 5125:return cd;case 36294:return ud;case 36295:return hd;case 36296:return dd;case 35678:case 36198:case 36298:case 36306:case 35682:return fd;case 35679:case 36299:case 36307:return pd;case 35680:case 36300:case 36308:case 36293:return md;case 36289:case 36303:case 36311:case 36292:return gd}}function vd(r,e){r.uniform1fv(this.addr,e)}function xd(r,e){const t=ri(e,this.size,2);r.uniform2fv(this.addr,t)}function Md(r,e){const t=ri(e,this.size,3);r.uniform3fv(this.addr,t)}function Sd(r,e){const t=ri(e,this.size,4);r.uniform4fv(this.addr,t)}function yd(r,e){const t=ri(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function bd(r,e){const t=ri(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function wd(r,e){const t=ri(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ed(r,e){r.uniform1iv(this.addr,e)}function Td(r,e){r.uniform2iv(this.addr,e)}function Ad(r,e){r.uniform3iv(this.addr,e)}function Cd(r,e){r.uniform4iv(this.addr,e)}function Ld(r,e){r.uniform1uiv(this.addr,e)}function Pd(r,e){r.uniform2uiv(this.addr,e)}function Rd(r,e){r.uniform3uiv(this.addr,e)}function Dd(r,e){r.uniform4uiv(this.addr,e)}function Id(r,e,t){const n=this.cache,i=e.length,s=nr(t,i);$e(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||eo,s[o])}function Ud(r,e,t){const n=this.cache,i=e.length,s=nr(t,i);$e(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||no,s[o])}function Nd(r,e,t){const n=this.cache,i=e.length,s=nr(t,i);$e(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||io,s[o])}function Fd(r,e,t){const n=this.cache,i=e.length,s=nr(t,i);$e(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||to,s[o])}function Od(r){switch(r){case 5126:return vd;case 35664:return xd;case 35665:return Md;case 35666:return Sd;case 35674:return yd;case 35675:return bd;case 35676:return wd;case 5124:case 35670:return Ed;case 35667:case 35671:return Td;case 35668:case 35672:return Ad;case 35669:case 35673:return Cd;case 5125:return Ld;case 36294:return Pd;case 36295:return Rd;case 36296:return Dd;case 35678:case 36198:case 36298:case 36306:case 35682:return Id;case 35679:case 36299:case 36307:return Ud;case 35680:case 36300:case 36308:case 36293:return Nd;case 36289:case 36303:case 36311:case 36292:return Fd}}class zd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=_d(t.type)}}class Bd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Od(t.type)}}class Gd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Nr=/(\w+)(\])?(\[|\.)?/g;function fa(r,e){r.seq.push(e),r.map[e.id]=e}function Hd(r,e,t){const n=r.name,i=n.length;for(Nr.lastIndex=0;;){const s=Nr.exec(n),o=Nr.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){fa(t,l===void 0?new zd(a,r,e):new Bd(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new Gd(a),fa(t,d)),t=d}}}class $i{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Hd(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function pa(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Vd=0;function kd(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Wd(r){switch(r){case bn:return["Linear","( value )"];case Oe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function ma(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+kd(r.getShaderSource(e),o)}else return i}function qd(r,e){const t=Wd(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Xd(r,e){let t;switch(e){case il:t="Linear";break;case rl:t="Reinhard";break;case sl:t="OptimizedCineon";break;case al:t="ACESFilmic";break;case ol:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Yd(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(di).join(`
`)}function $d(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jd(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function di(r){return r!==""}function ga(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _a(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zr(r){return r.replace(Zd,Kd)}function Kd(r,e){const t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Zr(t)}const Jd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function va(r){return r.replace(Jd,Qd)}function Qd(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function xa(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ef(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ia?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===No?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function tf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qn:case ei:e="ENVMAP_TYPE_CUBE";break;case Ji:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nf(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ei:e="ENVMAP_MODE_REFRACTION";break}return e}function rf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Fa:e="ENVMAP_BLENDING_MULTIPLY";break;case tl:e="ENVMAP_BLENDING_MIX";break;case nl:e="ENVMAP_BLENDING_ADD";break}return e}function sf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function af(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ef(t),l=tf(t),h=nf(t),d=rf(t),f=sf(t),m=t.isWebGL2?"":Yd(t),_=$d(s),M=i.createProgram();let p,u,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(di).join(`
`),p.length>0&&(p+=`
`),u=[m,_].filter(di).join(`
`),u.length>0&&(u+=`
`)):(p=[xa(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(di).join(`
`),u=[m,xa(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jt?"#define TONE_MAPPING":"",t.toneMapping!==jt?Ee.tonemapping_pars_fragment:"",t.toneMapping!==jt?Xd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.encodings_pars_fragment,qd("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(di).join(`
`)),o=Zr(o),o=ga(o,t),o=_a(o,t),a=Zr(a),a=ga(a,t),a=_a(a,t),o=va(o),a=va(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===Bs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=T+p+o,b=T+u+a,E=pa(i,35633,S),L=pa(i,35632,b);if(i.attachShader(M,E),i.attachShader(M,L),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M),r.debug.checkShaderErrors){const v=i.getProgramInfoLog(M).trim(),w=i.getShaderInfoLog(E).trim(),q=i.getShaderInfoLog(L).trim();let Y=!0,C=!0;if(i.getProgramParameter(M,35714)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,M,E,L);else{const U=ma(i,E,"vertex"),O=ma(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,35715)+`

Program Info Log: `+v+`
`+U+`
`+O)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(w===""||q==="")&&(C=!1);C&&(this.diagnostics={runnable:Y,programLog:v,vertexShader:{log:w,prefix:p},fragmentShader:{log:q,prefix:u}})}i.deleteShader(E),i.deleteShader(L);let R;this.getUniforms=function(){return R===void 0&&(R=new $i(i,M)),R};let I;return this.getAttributes=function(){return I===void 0&&(I=jd(i,M)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.name=t.shaderName,this.id=Vd++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=L,this}let of=0;class lf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cf(e),t.set(e,n)),n}}class cf{constructor(e){this.id=of++,this.code=e,this.usedTimes=0}}function uf(r,e,t,n,i,s,o){const a=new Wa,c=new lf,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(v){return v===1?"uv2":"uv"}function p(v,w,q,Y,C){const U=Y.fog,O=C.geometry,J=v.isMeshStandardMaterial?Y.environment:null,j=(v.isMeshStandardMaterial?t:e).get(v.envMap||J),W=j&&j.mapping===Ji?j.image.height:null,$=_[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ue=Q!==void 0?Q.length:0;let ae=0;O.morphAttributes.position!==void 0&&(ae=1),O.morphAttributes.normal!==void 0&&(ae=2),O.morphAttributes.color!==void 0&&(ae=3);let B,X,ie,re;if($){const oe=Bt[$];B=oe.vertexShader,X=oe.fragmentShader}else B=v.vertexShader,X=v.fragmentShader,c.update(v),ie=c.getVertexShaderID(v),re=c.getFragmentShaderID(v);const F=r.getRenderTarget(),ye=C.isInstancedMesh===!0,Se=!!v.map,ne=!!v.matcap,ve=!!j,Ie=!!v.aoMap,pe=!!v.lightMap,Ce=!!v.bumpMap,Ze=!!v.normalMap,et=!!v.displacementMap,Ke=!!v.emissiveMap,Ye=!!v.metalnessMap,Ue=!!v.roughnessMap,Ve=v.clearcoat>0,ut=v.iridescence>0,y=v.sheen>0,g=v.transmission>0,z=Ve&&!!v.clearcoatMap,K=Ve&&!!v.clearcoatNormalMap,ee=Ve&&!!v.clearcoatRoughnessMap,se=ut&&!!v.iridescenceMap,xe=ut&&!!v.iridescenceThicknessMap,ce=y&&!!v.sheenColorMap,V=y&&!!v.sheenRoughnessMap,he=!!v.specularMap,me=!!v.specularColorMap,_e=!!v.specularIntensityMap,le=g&&!!v.transmissionMap,de=g&&!!v.thicknessMap,Re=!!v.gradientMap,Ne=!!v.alphaMap,ke=v.alphaTest>0,A=!!v.extensions,H=!!O.attributes.uv2;return{isWebGL2:h,shaderID:$,shaderName:v.type,vertexShader:B,fragmentShader:X,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:ye,instancingColor:ye&&C.instanceColor!==null,supportsVertexTextures:f,outputEncoding:F===null?r.outputEncoding:F.isXRRenderTarget===!0?F.texture.encoding:bn,map:Se,matcap:ne,envMap:ve,envMapMode:ve&&j.mapping,envMapCubeUVHeight:W,aoMap:Ie,lightMap:pe,bumpMap:Ce,normalMap:Ze,displacementMap:f&&et,emissiveMap:Ke,normalMapObjectSpace:Ze&&v.normalMapType===Al,normalMapTangentSpace:Ze&&v.normalMapType===Tl,decodeVideoTexture:Se&&v.map.isVideoTexture===!0&&v.map.encoding===Oe,metalnessMap:Ye,roughnessMap:Ue,clearcoat:Ve,clearcoatMap:z,clearcoatNormalMap:K,clearcoatRoughnessMap:ee,iridescence:ut,iridescenceMap:se,iridescenceThicknessMap:xe,sheen:y,sheenColorMap:ce,sheenRoughnessMap:V,specularMap:he,specularColorMap:me,specularIntensityMap:_e,transmission:g,transmissionMap:le,thicknessMap:de,gradientMap:Re,opaque:v.transparent===!1&&v.blending===jn,alphaMap:Ne,alphaTest:ke,combine:v.combine,mapUv:Se&&M(v.map.channel),aoMapUv:Ie&&M(v.aoMap.channel),lightMapUv:pe&&M(v.lightMap.channel),bumpMapUv:Ce&&M(v.bumpMap.channel),normalMapUv:Ze&&M(v.normalMap.channel),displacementMapUv:et&&M(v.displacementMap.channel),emissiveMapUv:Ke&&M(v.emissiveMap.channel),metalnessMapUv:Ye&&M(v.metalnessMap.channel),roughnessMapUv:Ue&&M(v.roughnessMap.channel),clearcoatMapUv:z&&M(v.clearcoatMap.channel),clearcoatNormalMapUv:K&&M(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&M(v.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&M(v.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&M(v.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&M(v.sheenColorMap.channel),sheenRoughnessMapUv:V&&M(v.sheenRoughnessMap.channel),specularMapUv:he&&M(v.specularMap.channel),specularColorMapUv:me&&M(v.specularColorMap.channel),specularIntensityMapUv:_e&&M(v.specularIntensityMap.channel),transmissionMapUv:le&&M(v.transmissionMap.channel),thicknessMapUv:de&&M(v.thicknessMap.channel),alphaMapUv:Ne&&M(v.alphaMap.channel),vertexTangents:Ze&&!!O.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs2:H,pointsUvs:C.isPoints===!0&&!!O.attributes.uv&&(Se||Ne),fog:!!U,useFog:v.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:C.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ae,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:jt,useLegacyLights:r.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Yt,flipSided:v.side===ft,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:A&&v.extensions.derivatives===!0,extensionFragDepth:A&&v.extensions.fragDepth===!0,extensionDrawBuffers:A&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:A&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function u(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const q in v.defines)w.push(q),w.push(v.defines[q]);return v.isRawShaderMaterial===!1&&(T(w,v),S(w,v),w.push(r.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function T(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUvs2&&a.enable(13),w.vertexTangents&&a.enable(14),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.decodeVideoTexture&&a.enable(17),w.opaque&&a.enable(18),w.pointsUvs&&a.enable(19),v.push(a.mask)}function b(v){const w=_[v.type];let q;if(w){const Y=Bt[w];q=Kl.clone(Y.uniforms)}else q=v.uniforms;return q}function E(v,w){let q;for(let Y=0,C=l.length;Y<C;Y++){const U=l[Y];if(U.cacheKey===w){q=U,++q.usedTimes;break}}return q===void 0&&(q=new af(r,w,v,s),l.push(q)),q}function L(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),v.destroy()}}function R(v){c.remove(v)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:b,acquireProgram:E,releaseProgram:L,releaseShaderCache:R,programs:l,dispose:I}}function hf(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function df(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ma(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Sa(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,m,_,M,p){let u=r[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:M,group:p},r[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=M,u.group=p),e++,u}function a(d,f,m,_,M,p){const u=o(d,f,m,_,M,p);m.transmission>0?n.push(u):m.transparent===!0?i.push(u):t.push(u)}function c(d,f,m,_,M,p){const u=o(d,f,m,_,M,p);m.transmission>0?n.unshift(u):m.transparent===!0?i.unshift(u):t.unshift(u)}function l(d,f){t.length>1&&t.sort(d||df),n.length>1&&n.sort(f||Ma),i.length>1&&i.sort(f||Ma)}function h(){for(let d=e,f=r.length;d<f;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function ff(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Sa,r.set(n,[o])):i>=s.length?(o=new Sa,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function pf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ge};break;case"SpotLight":t={position:new N,direction:new N,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function mf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let gf=0;function _f(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function vf(r,e){const t=new pf,n=mf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new N);const s=new N,o=new nt,a=new nt;function c(h,d){let f=0,m=0,_=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let M=0,p=0,u=0,T=0,S=0,b=0,E=0,L=0,R=0,I=0;h.sort(_f);const v=d===!0?Math.PI:1;for(let q=0,Y=h.length;q<Y;q++){const C=h[q],U=C.color,O=C.intensity,J=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=U.r*O*v,m+=U.g*O*v,_+=U.b*O*v;else if(C.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(C.sh.coefficients[W],O);else if(C.isDirectionalLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*v),C.castShadow){const $=C.shadow,Q=n.get(C);Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,i.directionalShadow[M]=Q,i.directionalShadowMap[M]=j,i.directionalShadowMatrix[M]=C.shadow.matrix,b++}i.directional[M]=W,M++}else if(C.isSpotLight){const W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(U).multiplyScalar(O*v),W.distance=J,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,i.spot[u]=W;const $=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,$.updateMatrices(C),C.castShadow&&I++),i.spotLightMatrix[u]=$.matrix,C.castShadow){const Q=n.get(C);Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,i.spotShadow[u]=Q,i.spotShadowMap[u]=j,L++}u++}else if(C.isRectAreaLight){const W=t.get(C);W.color.copy(U).multiplyScalar(O),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),i.rectArea[T]=W,T++}else if(C.isPointLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*v),W.distance=C.distance,W.decay=C.decay,C.castShadow){const $=C.shadow,Q=n.get(C);Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,Q.shadowCameraNear=$.camera.near,Q.shadowCameraFar=$.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=C.shadow.matrix,E++}i.point[p]=W,p++}else if(C.isHemisphereLight){const W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(O*v),W.groundColor.copy(C.groundColor).multiplyScalar(O*v),i.hemi[S]=W,S++}}T>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=_;const w=i.hash;(w.directionalLength!==M||w.pointLength!==p||w.spotLength!==u||w.rectAreaLength!==T||w.hemiLength!==S||w.numDirectionalShadows!==b||w.numPointShadows!==E||w.numSpotShadows!==L||w.numSpotMaps!==R)&&(i.directional.length=M,i.spot.length=u,i.rectArea.length=T,i.point.length=p,i.hemi.length=S,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=L+R-I,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=I,w.directionalLength=M,w.pointLength=p,w.spotLength=u,w.rectAreaLength=T,w.hemiLength=S,w.numDirectionalShadows=b,w.numPointShadows=E,w.numSpotShadows=L,w.numSpotMaps=R,i.version=gf++)}function l(h,d){let f=0,m=0,_=0,M=0,p=0;const u=d.matrixWorldInverse;for(let T=0,S=h.length;T<S;T++){const b=h[T];if(b.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(u),f++}else if(b.isSpotLight){const E=i.spot[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(u),_++}else if(b.isRectAreaLight){const E=i.rectArea[M];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(u),a.identity(),o.copy(b.matrixWorld),o.premultiply(u),a.extractRotation(o),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(b.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(u),m++}else if(b.isHemisphereLight){const E=i.hemi[p];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(u),p++}}}return{setup:c,setupView:l,state:i}}function ya(r,e){const t=new vf(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function xf(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new ya(r,e),t.set(s,[c])):o>=a.length?(c=new ya(r,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Mf extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sf extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wf(r,e,t){let n=new Ja;const i=new ze,s=new ze,o=new tt,a=new Mf({depthPacking:El}),c=new Sf,l={},h=t.maxTextureSize,d={[rn]:ft,[ft]:rn,[Yt]:Yt},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:yf,fragmentShader:bf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new En;_.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new $t(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ia,this.render=function(b,E,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const R=r.getRenderTarget(),I=r.getActiveCubeFace(),v=r.getActiveMipmapLevel(),w=r.state;w.setBlending(nn),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);for(let q=0,Y=b.length;q<Y;q++){const C=b[q],U=C.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const O=U.getFrameExtents();if(i.multiply(O),s.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/O.x),i.x=s.x*O.x,U.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/O.y),i.y=s.y*O.y,U.mapSize.y=s.y)),U.map===null){const j=this.type!==hi?{minFilter:ct,magFilter:ct}:{};U.map=new wn(i.x,i.y,j),U.map.texture.name=C.name+".shadowMap",U.camera.updateProjectionMatrix()}r.setRenderTarget(U.map),r.clear();const J=U.getViewportCount();for(let j=0;j<J;j++){const W=U.getViewport(j);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),w.viewport(o),U.updateMatrices(C,j),n=U.getFrustum(),S(E,L,U.camera,C,this.type)}U.isPointLightShadow!==!0&&this.type===hi&&u(U,L),U.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(R,I,v)};function u(b,E){const L=e.update(M);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new wn(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,L,f,M,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,L,m,M,null)}function T(b,E,L,R){let I=null;const v=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(v!==void 0)I=v;else if(I=L.isPointLight===!0?c:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const w=I.uuid,q=E.uuid;let Y=l[w];Y===void 0&&(Y={},l[w]=Y);let C=Y[q];C===void 0&&(C=I.clone(),Y[q]=C),I=C}if(I.visible=E.visible,I.wireframe=E.wireframe,R===hi?I.side=E.shadowSide!==null?E.shadowSide:E.side:I.side=E.shadowSide!==null?E.shadowSide:d[E.side],I.alphaMap=E.alphaMap,I.alphaTest=E.alphaTest,I.map=E.map,I.clipShadows=E.clipShadows,I.clippingPlanes=E.clippingPlanes,I.clipIntersection=E.clipIntersection,I.displacementMap=E.displacementMap,I.displacementScale=E.displacementScale,I.displacementBias=E.displacementBias,I.wireframeLinewidth=E.wireframeLinewidth,I.linewidth=E.linewidth,L.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const w=r.properties.get(I);w.light=L}return I}function S(b,E,L,R,I){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===hi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const q=e.update(b),Y=b.material;if(Array.isArray(Y)){const C=q.groups;for(let U=0,O=C.length;U<O;U++){const J=C[U],j=Y[J.materialIndex];if(j&&j.visible){const W=T(b,j,R,I);r.renderBufferDirect(L,null,q,W,b,J)}}}else if(Y.visible){const C=T(b,Y,R,I);r.renderBufferDirect(L,null,q,C,b,null)}}const w=b.children;for(let q=0,Y=w.length;q<Y;q++)S(w[q],E,L,R,I)}}function Ef(r,e,t){const n=t.isWebGL2;function i(){let A=!1;const H=new tt;let Z=null;const oe=new tt(0,0,0,0);return{setMask:function(fe){Z!==fe&&!A&&(r.colorMask(fe,fe,fe,fe),Z=fe)},setLocked:function(fe){A=fe},setClear:function(fe,Be,He,it,Zt){Zt===!0&&(fe*=it,Be*=it,He*=it),H.set(fe,Be,He,it),oe.equals(H)===!1&&(r.clearColor(fe,Be,He,it),oe.copy(H))},reset:function(){A=!1,Z=null,oe.set(-1,0,0,0)}}}function s(){let A=!1,H=null,Z=null,oe=null;return{setTest:function(fe){fe?F(2929):ye(2929)},setMask:function(fe){H!==fe&&!A&&(r.depthMask(fe),H=fe)},setFunc:function(fe){if(Z!==fe){switch(fe){case $o:r.depthFunc(512);break;case jo:r.depthFunc(519);break;case Zo:r.depthFunc(513);break;case kr:r.depthFunc(515);break;case Ko:r.depthFunc(514);break;case Jo:r.depthFunc(518);break;case Qo:r.depthFunc(516);break;case el:r.depthFunc(517);break;default:r.depthFunc(515)}Z=fe}},setLocked:function(fe){A=fe},setClear:function(fe){oe!==fe&&(r.clearDepth(fe),oe=fe)},reset:function(){A=!1,H=null,Z=null,oe=null}}}function o(){let A=!1,H=null,Z=null,oe=null,fe=null,Be=null,He=null,it=null,Zt=null;return{setTest:function(We){A||(We?F(2960):ye(2960))},setMask:function(We){H!==We&&!A&&(r.stencilMask(We),H=We)},setFunc:function(We,St,Ft){(Z!==We||oe!==St||fe!==Ft)&&(r.stencilFunc(We,St,Ft),Z=We,oe=St,fe=Ft)},setOp:function(We,St,Ft){(Be!==We||He!==St||it!==Ft)&&(r.stencilOp(We,St,Ft),Be=We,He=St,it=Ft)},setLocked:function(We){A=We},setClear:function(We){Zt!==We&&(r.clearStencil(We),Zt=We)},reset:function(){A=!1,H=null,Z=null,oe=null,fe=null,Be=null,He=null,it=null,Zt=null}}}const a=new i,c=new s,l=new o,h=new WeakMap,d=new WeakMap;let f={},m={},_=new WeakMap,M=[],p=null,u=!1,T=null,S=null,b=null,E=null,L=null,R=null,I=null,v=!1,w=null,q=null,Y=null,C=null,U=null;const O=r.getParameter(35661);let J=!1,j=0;const W=r.getParameter(7938);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),J=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),J=j>=2);let $=null,Q={};const ue=r.getParameter(3088),ae=r.getParameter(2978),B=new tt().fromArray(ue),X=new tt().fromArray(ae);function ie(A,H,Z){const oe=new Uint8Array(4),fe=r.createTexture();r.bindTexture(A,fe),r.texParameteri(A,10241,9728),r.texParameteri(A,10240,9728);for(let Be=0;Be<Z;Be++)r.texImage2D(H+Be,0,6408,1,1,0,6408,5121,oe);return fe}const re={};re[3553]=ie(3553,3553,1),re[34067]=ie(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),F(2929),c.setFunc(kr),et(!1),Ke(ls),F(2884),Ce(nn);function F(A){f[A]!==!0&&(r.enable(A),f[A]=!0)}function ye(A){f[A]!==!1&&(r.disable(A),f[A]=!1)}function Se(A,H){return m[A]!==H?(r.bindFramebuffer(A,H),m[A]=H,n&&(A===36009&&(m[36160]=H),A===36160&&(m[36009]=H)),!0):!1}function ne(A,H){let Z=M,oe=!1;if(A)if(Z=_.get(H),Z===void 0&&(Z=[],_.set(H,Z)),A.isWebGLMultipleRenderTargets){const fe=A.texture;if(Z.length!==fe.length||Z[0]!==36064){for(let Be=0,He=fe.length;Be<He;Be++)Z[Be]=36064+Be;Z.length=fe.length,oe=!0}}else Z[0]!==36064&&(Z[0]=36064,oe=!0);else Z[0]!==1029&&(Z[0]=1029,oe=!0);oe&&(t.isWebGL2?r.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function ve(A){return p!==A?(r.useProgram(A),p=A,!0):!1}const Ie={[Wn]:32774,[Oo]:32778,[zo]:32779};if(n)Ie[ds]=32775,Ie[fs]=32776;else{const A=e.get("EXT_blend_minmax");A!==null&&(Ie[ds]=A.MIN_EXT,Ie[fs]=A.MAX_EXT)}const pe={[Bo]:0,[Go]:1,[Ho]:768,[Ua]:770,[Yo]:776,[qo]:774,[ko]:772,[Vo]:769,[Na]:771,[Xo]:775,[Wo]:773};function Ce(A,H,Z,oe,fe,Be,He,it){if(A===nn){u===!0&&(ye(3042),u=!1);return}if(u===!1&&(F(3042),u=!0),A!==Fo){if(A!==T||it!==v){if((S!==Wn||L!==Wn)&&(r.blendEquation(32774),S=Wn,L=Wn),it)switch(A){case jn:r.blendFuncSeparate(1,771,1,771);break;case cs:r.blendFunc(1,1);break;case us:r.blendFuncSeparate(0,769,0,1);break;case hs:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case jn:r.blendFuncSeparate(770,771,1,771);break;case cs:r.blendFunc(770,1);break;case us:r.blendFuncSeparate(0,769,0,1);break;case hs:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}b=null,E=null,R=null,I=null,T=A,v=it}return}fe=fe||H,Be=Be||Z,He=He||oe,(H!==S||fe!==L)&&(r.blendEquationSeparate(Ie[H],Ie[fe]),S=H,L=fe),(Z!==b||oe!==E||Be!==R||He!==I)&&(r.blendFuncSeparate(pe[Z],pe[oe],pe[Be],pe[He]),b=Z,E=oe,R=Be,I=He),T=A,v=!1}function Ze(A,H){A.side===Yt?ye(2884):F(2884);let Z=A.side===ft;H&&(Z=!Z),et(Z),A.blending===jn&&A.transparent===!1?Ce(nn):Ce(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),a.setMask(A.colorWrite);const oe=A.stencilWrite;l.setTest(oe),oe&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Ue(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?F(32926):ye(32926)}function et(A){w!==A&&(A?r.frontFace(2304):r.frontFace(2305),w=A)}function Ke(A){A!==Io?(F(2884),A!==q&&(A===ls?r.cullFace(1029):A===Uo?r.cullFace(1028):r.cullFace(1032))):ye(2884),q=A}function Ye(A){A!==Y&&(J&&r.lineWidth(A),Y=A)}function Ue(A,H,Z){A?(F(32823),(C!==H||U!==Z)&&(r.polygonOffset(H,Z),C=H,U=Z)):ye(32823)}function Ve(A){A?F(3089):ye(3089)}function ut(A){A===void 0&&(A=33984+O-1),$!==A&&(r.activeTexture(A),$=A)}function y(A,H,Z){Z===void 0&&($===null?Z=33984+O-1:Z=$);let oe=Q[Z];oe===void 0&&(oe={type:void 0,texture:void 0},Q[Z]=oe),(oe.type!==A||oe.texture!==H)&&($!==Z&&(r.activeTexture(Z),$=Z),r.bindTexture(A,H||re[A]),oe.type=A,oe.texture=H)}function g(){const A=Q[$];A!==void 0&&A.type!==void 0&&(r.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function K(){try{r.compressedTexImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ee(){try{r.texSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function se(){try{r.texSubImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ce(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function V(){try{r.texStorage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function he(){try{r.texStorage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function me(){try{r.texImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function _e(){try{r.texImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function le(A){B.equals(A)===!1&&(r.scissor(A.x,A.y,A.z,A.w),B.copy(A))}function de(A){X.equals(A)===!1&&(r.viewport(A.x,A.y,A.z,A.w),X.copy(A))}function Re(A,H){let Z=d.get(H);Z===void 0&&(Z=new WeakMap,d.set(H,Z));let oe=Z.get(A);oe===void 0&&(oe=r.getUniformBlockIndex(H,A.name),Z.set(A,oe))}function Ne(A,H){const oe=d.get(H).get(A);h.get(H)!==oe&&(r.uniformBlockBinding(H,oe,A.__bindingPointIndex),h.set(H,oe))}function ke(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},$=null,Q={},m={},_=new WeakMap,M=[],p=null,u=!1,T=null,S=null,b=null,E=null,L=null,R=null,I=null,v=!1,w=null,q=null,Y=null,C=null,U=null,B.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:F,disable:ye,bindFramebuffer:Se,drawBuffers:ne,useProgram:ve,setBlending:Ce,setMaterial:Ze,setFlipSided:et,setCullFace:Ke,setLineWidth:Ye,setPolygonOffset:Ue,setScissorTest:Ve,activeTexture:ut,bindTexture:y,unbindTexture:g,compressedTexImage2D:z,compressedTexImage3D:K,texImage2D:me,texImage3D:_e,updateUBOMapping:Re,uniformBlockBinding:Ne,texStorage2D:V,texStorage3D:he,texSubImage2D:ee,texSubImage3D:se,compressedTexSubImage2D:xe,compressedTexSubImage3D:ce,scissor:le,viewport:de,reset:ke}}function Tf(r,e,t,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let M;const p=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(y,g){return u?new OffscreenCanvas(y,g):Zi("canvas")}function S(y,g,z,K){let ee=1;if((y.width>K||y.height>K)&&(ee=K/Math.max(y.width,y.height)),ee<1||g===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const se=g?Pl:Math.floor,xe=se(ee*y.width),ce=se(ee*y.height);M===void 0&&(M=T(xe,ce));const V=z?T(xe,ce):M;return V.width=xe,V.height=ce,V.getContext("2d").drawImage(y,0,0,xe,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+xe+"x"+ce+")."),V}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function b(y){return Gs(y.width)&&Gs(y.height)}function E(y){return a?!1:y.wrapS!==Dt||y.wrapT!==Dt||y.minFilter!==ct&&y.minFilter!==bt}function L(y,g){return y.generateMipmaps&&g&&y.minFilter!==ct&&y.minFilter!==bt}function R(y){r.generateMipmap(y)}function I(y,g,z,K,ee=!1){if(a===!1)return g;if(y!==null){if(r[y]!==void 0)return r[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let se=g;return g===6403&&(z===5126&&(se=33326),z===5131&&(se=33325),z===5121&&(se=33321)),g===33319&&(z===5126&&(se=33328),z===5131&&(se=33327),z===5121&&(se=33323)),g===6408&&(z===5126&&(se=34836),z===5131&&(se=34842),z===5121&&(se=K===Oe&&ee===!1?35907:32856),z===32819&&(se=32854),z===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function v(y,g,z){return L(y,z)===!0||y.isFramebufferTexture&&y.minFilter!==ct&&y.minFilter!==bt?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function w(y){return y===ct||y===ps||y===or?9728:9729}function q(y){const g=y.target;g.removeEventListener("dispose",q),C(g),g.isVideoTexture&&_.delete(g)}function Y(y){const g=y.target;g.removeEventListener("dispose",Y),O(g)}function C(y){const g=n.get(y);if(g.__webglInit===void 0)return;const z=y.source,K=p.get(z);if(K){const ee=K[g.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&U(y),Object.keys(K).length===0&&p.delete(z)}n.remove(y)}function U(y){const g=n.get(y);r.deleteTexture(g.__webglTexture);const z=y.source,K=p.get(z);delete K[g.__cacheKey],o.memory.textures--}function O(y){const g=y.texture,z=n.get(y),K=n.get(g);if(K.__webglTexture!==void 0&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)r.deleteFramebuffer(z.__webglFramebuffer[ee]),z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[ee]);else{if(r.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ee=0;ee<z.__webglColorRenderbuffer.length;ee++)z.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[ee]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let ee=0,se=g.length;ee<se;ee++){const xe=n.get(g[ee]);xe.__webglTexture&&(r.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(g[ee])}n.remove(g),n.remove(y)}let J=0;function j(){J=0}function W(){const y=J;return y>=c&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+c),J+=1,y}function $(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.encoding),g.join()}function Q(y,g){const z=n.get(y);if(y.isVideoTexture&&Ve(y),y.isRenderTargetTexture===!1&&y.version>0&&z.__version!==y.version){const K=y.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(z,y,g);return}}t.bindTexture(3553,z.__webglTexture,33984+g)}function ue(y,g){const z=n.get(y);if(y.version>0&&z.__version!==y.version){ye(z,y,g);return}t.bindTexture(35866,z.__webglTexture,33984+g)}function ae(y,g){const z=n.get(y);if(y.version>0&&z.__version!==y.version){ye(z,y,g);return}t.bindTexture(32879,z.__webglTexture,33984+g)}function B(y,g){const z=n.get(y);if(y.version>0&&z.__version!==y.version){Se(z,y,g);return}t.bindTexture(34067,z.__webglTexture,33984+g)}const X={[Xr]:10497,[Dt]:33071,[Yr]:33648},ie={[ct]:9728,[ps]:9984,[or]:9986,[bt]:9729,[ll]:9985,[pi]:9987};function re(y,g,z){if(z?(r.texParameteri(y,10242,X[g.wrapS]),r.texParameteri(y,10243,X[g.wrapT]),(y===32879||y===35866)&&r.texParameteri(y,32882,X[g.wrapR]),r.texParameteri(y,10240,ie[g.magFilter]),r.texParameteri(y,10241,ie[g.minFilter])):(r.texParameteri(y,10242,33071),r.texParameteri(y,10243,33071),(y===32879||y===35866)&&r.texParameteri(y,32882,33071),(g.wrapS!==Dt||g.wrapT!==Dt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(y,10240,w(g.magFilter)),r.texParameteri(y,10241,w(g.minFilter)),g.minFilter!==ct&&g.minFilter!==bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===ct||g.minFilter!==or&&g.minFilter!==pi||g.type===xn&&e.has("OES_texture_float_linear")===!1||a===!1&&g.type===mi&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||n.get(g).__currentAnisotropy)&&(r.texParameterf(y,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy)}}function F(y,g){let z=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",q));const K=g.source;let ee=p.get(K);ee===void 0&&(ee={},p.set(K,ee));const se=$(g);if(se!==y.__cacheKey){ee[se]===void 0&&(ee[se]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[se].usedTimes++;const xe=ee[y.__cacheKey];xe!==void 0&&(ee[y.__cacheKey].usedTimes--,xe.usedTimes===0&&U(g)),y.__cacheKey=se,y.__webglTexture=ee[se].texture}return z}function ye(y,g,z){let K=3553;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(K=35866),g.isData3DTexture&&(K=32879);const ee=F(y,g),se=g.source;t.bindTexture(K,y.__webglTexture,33984+z);const xe=n.get(se);if(se.version!==xe.__version||ee===!0){t.activeTexture(33984+z),r.pixelStorei(37440,g.flipY),r.pixelStorei(37441,g.premultiplyAlpha),r.pixelStorei(3317,g.unpackAlignment),r.pixelStorei(37443,0);const ce=E(g)&&b(g.image)===!1;let V=S(g.image,ce,!1,h);V=ut(g,V);const he=b(V)||a,me=s.convert(g.format,g.encoding);let _e=s.convert(g.type),le=I(g.internalFormat,me,_e,g.encoding,g.isVideoTexture);re(K,g,he);let de;const Re=g.mipmaps,Ne=a&&g.isVideoTexture!==!0,ke=xe.__version===void 0||ee===!0,A=v(g,V,he);if(g.isDepthTexture)le=6402,a?g.type===xn?le=36012:g.type===vn?le=33190:g.type===Zn?le=35056:le=33189:g.type===xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===Mn&&le===6402&&g.type!==za&&g.type!==vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=vn,_e=s.convert(g.type)),g.format===ti&&le===6402&&(le=34041,g.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Zn,_e=s.convert(g.type))),ke&&(Ne?t.texStorage2D(3553,1,le,V.width,V.height):t.texImage2D(3553,0,le,V.width,V.height,0,me,_e,null));else if(g.isDataTexture)if(Re.length>0&&he){Ne&&ke&&t.texStorage2D(3553,A,le,Re[0].width,Re[0].height);for(let H=0,Z=Re.length;H<Z;H++)de=Re[H],Ne?t.texSubImage2D(3553,H,0,0,de.width,de.height,me,_e,de.data):t.texImage2D(3553,H,le,de.width,de.height,0,me,_e,de.data);g.generateMipmaps=!1}else Ne?(ke&&t.texStorage2D(3553,A,le,V.width,V.height),t.texSubImage2D(3553,0,0,0,V.width,V.height,me,_e,V.data)):t.texImage2D(3553,0,le,V.width,V.height,0,me,_e,V.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ne&&ke&&t.texStorage3D(35866,A,le,Re[0].width,Re[0].height,V.depth);for(let H=0,Z=Re.length;H<Z;H++)de=Re[H],g.format!==It?me!==null?Ne?t.compressedTexSubImage3D(35866,H,0,0,0,de.width,de.height,V.depth,me,de.data,0,0):t.compressedTexImage3D(35866,H,le,de.width,de.height,V.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage3D(35866,H,0,0,0,de.width,de.height,V.depth,me,_e,de.data):t.texImage3D(35866,H,le,de.width,de.height,V.depth,0,me,_e,de.data)}else{Ne&&ke&&t.texStorage2D(3553,A,le,Re[0].width,Re[0].height);for(let H=0,Z=Re.length;H<Z;H++)de=Re[H],g.format!==It?me!==null?Ne?t.compressedTexSubImage2D(3553,H,0,0,de.width,de.height,me,de.data):t.compressedTexImage2D(3553,H,le,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(3553,H,0,0,de.width,de.height,me,_e,de.data):t.texImage2D(3553,H,le,de.width,de.height,0,me,_e,de.data)}else if(g.isDataArrayTexture)Ne?(ke&&t.texStorage3D(35866,A,le,V.width,V.height,V.depth),t.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,me,_e,V.data)):t.texImage3D(35866,0,le,V.width,V.height,V.depth,0,me,_e,V.data);else if(g.isData3DTexture)Ne?(ke&&t.texStorage3D(32879,A,le,V.width,V.height,V.depth),t.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,me,_e,V.data)):t.texImage3D(32879,0,le,V.width,V.height,V.depth,0,me,_e,V.data);else if(g.isFramebufferTexture){if(ke)if(Ne)t.texStorage2D(3553,A,le,V.width,V.height);else{let H=V.width,Z=V.height;for(let oe=0;oe<A;oe++)t.texImage2D(3553,oe,le,H,Z,0,me,_e,null),H>>=1,Z>>=1}}else if(Re.length>0&&he){Ne&&ke&&t.texStorage2D(3553,A,le,Re[0].width,Re[0].height);for(let H=0,Z=Re.length;H<Z;H++)de=Re[H],Ne?t.texSubImage2D(3553,H,0,0,me,_e,de):t.texImage2D(3553,H,le,me,_e,de);g.generateMipmaps=!1}else Ne?(ke&&t.texStorage2D(3553,A,le,V.width,V.height),t.texSubImage2D(3553,0,0,0,me,_e,V)):t.texImage2D(3553,0,le,me,_e,V);L(g,he)&&R(K),xe.__version=se.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Se(y,g,z){if(g.image.length!==6)return;const K=F(y,g),ee=g.source;t.bindTexture(34067,y.__webglTexture,33984+z);const se=n.get(ee);if(ee.version!==se.__version||K===!0){t.activeTexture(33984+z),r.pixelStorei(37440,g.flipY),r.pixelStorei(37441,g.premultiplyAlpha),r.pixelStorei(3317,g.unpackAlignment),r.pixelStorei(37443,0);const xe=g.isCompressedTexture||g.image[0].isCompressedTexture,ce=g.image[0]&&g.image[0].isDataTexture,V=[];for(let H=0;H<6;H++)!xe&&!ce?V[H]=S(g.image[H],!1,!0,l):V[H]=ce?g.image[H].image:g.image[H],V[H]=ut(g,V[H]);const he=V[0],me=b(he)||a,_e=s.convert(g.format,g.encoding),le=s.convert(g.type),de=I(g.internalFormat,_e,le,g.encoding),Re=a&&g.isVideoTexture!==!0,Ne=se.__version===void 0||K===!0;let ke=v(g,he,me);re(34067,g,me);let A;if(xe){Re&&Ne&&t.texStorage2D(34067,ke,de,he.width,he.height);for(let H=0;H<6;H++){A=V[H].mipmaps;for(let Z=0;Z<A.length;Z++){const oe=A[Z];g.format!==It?_e!==null?Re?t.compressedTexSubImage2D(34069+H,Z,0,0,oe.width,oe.height,_e,oe.data):t.compressedTexImage2D(34069+H,Z,de,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+H,Z,0,0,oe.width,oe.height,_e,le,oe.data):t.texImage2D(34069+H,Z,de,oe.width,oe.height,0,_e,le,oe.data)}}}else{A=g.mipmaps,Re&&Ne&&(A.length>0&&ke++,t.texStorage2D(34067,ke,de,V[0].width,V[0].height));for(let H=0;H<6;H++)if(ce){Re?t.texSubImage2D(34069+H,0,0,0,V[H].width,V[H].height,_e,le,V[H].data):t.texImage2D(34069+H,0,de,V[H].width,V[H].height,0,_e,le,V[H].data);for(let Z=0;Z<A.length;Z++){const fe=A[Z].image[H].image;Re?t.texSubImage2D(34069+H,Z+1,0,0,fe.width,fe.height,_e,le,fe.data):t.texImage2D(34069+H,Z+1,de,fe.width,fe.height,0,_e,le,fe.data)}}else{Re?t.texSubImage2D(34069+H,0,0,0,_e,le,V[H]):t.texImage2D(34069+H,0,de,_e,le,V[H]);for(let Z=0;Z<A.length;Z++){const oe=A[Z];Re?t.texSubImage2D(34069+H,Z+1,0,0,_e,le,oe.image[H]):t.texImage2D(34069+H,Z+1,de,_e,le,oe.image[H])}}}L(g,me)&&R(34067),se.__version=ee.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ne(y,g,z,K,ee){const se=s.convert(z.format,z.encoding),xe=s.convert(z.type),ce=I(z.internalFormat,se,xe,z.encoding);n.get(g).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,ce,g.width,g.height,g.depth,0,se,xe,null):t.texImage2D(ee,0,ce,g.width,g.height,0,se,xe,null)),t.bindFramebuffer(36160,y),Ue(g)?f.framebufferTexture2DMultisampleEXT(36160,K,ee,n.get(z).__webglTexture,0,Ye(g)):(ee===3553||ee>=34069&&ee<=34074)&&r.framebufferTexture2D(36160,K,ee,n.get(z).__webglTexture,0),t.bindFramebuffer(36160,null)}function ve(y,g,z){if(r.bindRenderbuffer(36161,y),g.depthBuffer&&!g.stencilBuffer){let K=33189;if(z||Ue(g)){const ee=g.depthTexture;ee&&ee.isDepthTexture&&(ee.type===xn?K=36012:ee.type===vn&&(K=33190));const se=Ye(g);Ue(g)?f.renderbufferStorageMultisampleEXT(36161,se,K,g.width,g.height):r.renderbufferStorageMultisample(36161,se,K,g.width,g.height)}else r.renderbufferStorage(36161,K,g.width,g.height);r.framebufferRenderbuffer(36160,36096,36161,y)}else if(g.depthBuffer&&g.stencilBuffer){const K=Ye(g);z&&Ue(g)===!1?r.renderbufferStorageMultisample(36161,K,35056,g.width,g.height):Ue(g)?f.renderbufferStorageMultisampleEXT(36161,K,35056,g.width,g.height):r.renderbufferStorage(36161,34041,g.width,g.height),r.framebufferRenderbuffer(36160,33306,36161,y)}else{const K=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let ee=0;ee<K.length;ee++){const se=K[ee],xe=s.convert(se.format,se.encoding),ce=s.convert(se.type),V=I(se.internalFormat,xe,ce,se.encoding),he=Ye(g);z&&Ue(g)===!1?r.renderbufferStorageMultisample(36161,he,V,g.width,g.height):Ue(g)?f.renderbufferStorageMultisampleEXT(36161,he,V,g.width,g.height):r.renderbufferStorage(36161,V,g.width,g.height)}}r.bindRenderbuffer(36161,null)}function Ie(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Q(g.depthTexture,0);const K=n.get(g.depthTexture).__webglTexture,ee=Ye(g);if(g.depthTexture.format===Mn)Ue(g)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,ee):r.framebufferTexture2D(36160,36096,3553,K,0);else if(g.depthTexture.format===ti)Ue(g)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,ee):r.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function pe(y){const g=n.get(y),z=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ie(g.__webglFramebuffer,y)}else if(z){g.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,g.__webglFramebuffer[K]),g.__webglDepthbuffer[K]=r.createRenderbuffer(),ve(g.__webglDepthbuffer[K],y,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=r.createRenderbuffer(),ve(g.__webglDepthbuffer,y,!1);t.bindFramebuffer(36160,null)}function Ce(y,g,z){const K=n.get(y);g!==void 0&&ne(K.__webglFramebuffer,y,y.texture,36064,3553),z!==void 0&&pe(y)}function Ze(y){const g=y.texture,z=n.get(y),K=n.get(g);y.addEventListener("dispose",Y),y.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=g.version,o.memory.textures++);const ee=y.isWebGLCubeRenderTarget===!0,se=y.isWebGLMultipleRenderTargets===!0,xe=b(y)||a;if(ee){z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)z.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(z.__webglFramebuffer=r.createFramebuffer(),se)if(i.drawBuffers){const ce=y.texture;for(let V=0,he=ce.length;V<he;V++){const me=n.get(ce[V]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&Ue(y)===!1){const ce=se?g:[g];z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer);for(let V=0;V<ce.length;V++){const he=ce[V];z.__webglColorRenderbuffer[V]=r.createRenderbuffer(),r.bindRenderbuffer(36161,z.__webglColorRenderbuffer[V]);const me=s.convert(he.format,he.encoding),_e=s.convert(he.type),le=I(he.internalFormat,me,_e,he.encoding,y.isXRRenderTarget===!0),de=Ye(y);r.renderbufferStorageMultisample(36161,de,le,y.width,y.height),r.framebufferRenderbuffer(36160,36064+V,36161,z.__webglColorRenderbuffer[V])}r.bindRenderbuffer(36161,null),y.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(z.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,K.__webglTexture),re(34067,g,xe);for(let ce=0;ce<6;ce++)ne(z.__webglFramebuffer[ce],y,g,36064,34069+ce);L(g,xe)&&R(34067),t.unbindTexture()}else if(se){const ce=y.texture;for(let V=0,he=ce.length;V<he;V++){const me=ce[V],_e=n.get(me);t.bindTexture(3553,_e.__webglTexture),re(3553,me,xe),ne(z.__webglFramebuffer,y,me,36064+V,3553),L(me,xe)&&R(3553)}t.unbindTexture()}else{let ce=3553;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?ce=y.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,K.__webglTexture),re(ce,g,xe),ne(z.__webglFramebuffer,y,g,36064,ce),L(g,xe)&&R(ce),t.unbindTexture()}y.depthBuffer&&pe(y)}function et(y){const g=b(y)||a,z=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let K=0,ee=z.length;K<ee;K++){const se=z[K];if(L(se,g)){const xe=y.isWebGLCubeRenderTarget?34067:3553,ce=n.get(se).__webglTexture;t.bindTexture(xe,ce),R(xe),t.unbindTexture()}}}function Ke(y){if(a&&y.samples>0&&Ue(y)===!1){const g=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],z=y.width,K=y.height;let ee=16384;const se=[],xe=y.stencilBuffer?33306:36096,ce=n.get(y),V=y.isWebGLMultipleRenderTargets===!0;if(V)for(let he=0;he<g.length;he++)t.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+he,36161,null),t.bindFramebuffer(36160,ce.__webglFramebuffer),r.framebufferTexture2D(36009,36064+he,3553,null,0);t.bindFramebuffer(36008,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ce.__webglFramebuffer);for(let he=0;he<g.length;he++){se.push(36064+he),y.depthBuffer&&se.push(xe);const me=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(me===!1&&(y.depthBuffer&&(ee|=256),y.stencilBuffer&&(ee|=1024)),V&&r.framebufferRenderbuffer(36008,36064,36161,ce.__webglColorRenderbuffer[he]),me===!0&&(r.invalidateFramebuffer(36008,[xe]),r.invalidateFramebuffer(36009,[xe])),V){const _e=n.get(g[he]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,_e,0)}r.blitFramebuffer(0,0,z,K,0,0,z,K,ee,9728),m&&r.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),V)for(let he=0;he<g.length;he++){t.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+he,36161,ce.__webglColorRenderbuffer[he]);const me=n.get(g[he]).__webglTexture;t.bindFramebuffer(36160,ce.__webglFramebuffer),r.framebufferTexture2D(36009,36064+he,3553,me,0)}t.bindFramebuffer(36009,ce.__webglMultisampledFramebuffer)}}function Ye(y){return Math.min(d,y.samples)}function Ue(y){const g=n.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ve(y){const g=o.render.frame;_.get(y)!==g&&(_.set(y,g),y.update())}function ut(y,g){const z=y.encoding,K=y.format,ee=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===$r||z!==bn&&(z===Oe?a===!1?e.has("EXT_sRGB")===!0&&K===It?(y.format=$r,y.minFilter=bt,y.generateMipmaps=!1):g=Ha.sRGBToLinear(g):(K!==It||ee!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",z)),g}this.allocateTextureUnit=W,this.resetTextureUnits=j,this.setTexture2D=Q,this.setTexture2DArray=ue,this.setTexture3D=ae,this.setTextureCube=B,this.rebindTextures=Ce,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Ue}function Af(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===yn)return 5121;if(s===dl)return 32819;if(s===fl)return 32820;if(s===cl)return 5120;if(s===ul)return 5122;if(s===za)return 5123;if(s===hl)return 5124;if(s===vn)return 5125;if(s===xn)return 5126;if(s===mi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===pl)return 6406;if(s===It)return 6408;if(s===ml)return 6409;if(s===gl)return 6410;if(s===Mn)return 6402;if(s===ti)return 34041;if(s===$r)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===_l)return 6403;if(s===vl)return 36244;if(s===xl)return 33319;if(s===Ml)return 33320;if(s===Sl)return 36249;if(s===lr||s===cr||s===ur||s===hr)if(o===Oe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===lr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===lr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===cr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ur)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ms||s===gs||s===_s||s===vs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ms)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_s)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xs||s===Ms)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===xs)return o===Oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ms)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ss||s===ys||s===bs||s===ws||s===Es||s===Ts||s===As||s===Cs||s===Ls||s===Ps||s===Rs||s===Ds||s===Is||s===Us)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ss)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ys)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bs)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ws)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Es)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ts)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===As)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Cs)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ls)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ps)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Rs)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ds)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Is)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Us)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===dr)return o===Oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===bl||s===Ns||s===Fs||s===Os)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===dr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ns)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Os)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zn?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Cf extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wi extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lf={type:"move"};class Fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,n),u=this._getHandJoint(l,M);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,_=.005;l.inputState.pinching&&f>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lf)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Pf extends xt{constructor(e,t,n,i,s,o,a,c,l,h){if(h=h!==void 0?h:Mn,h!==Mn&&h!==ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Mn&&(n=vn),n===void 0&&h===ti&&(n=Zn),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ct,this.minFilter=c!==void 0?c:ct,this.flipY=!1,this.generateMipmaps=!1}}class Rf extends ii{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,_=null;const M=t.getContextAttributes();let p=null,u=null;const T=[],S=[],b=new Set,E=new Map,L=new wt;L.layers.enable(1),L.viewport=new tt;const R=new wt;R.layers.enable(2),R.viewport=new tt;const I=[L,R],v=new Cf;v.layers.enable(1),v.layers.enable(2);let w=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let X=T[B];return X===void 0&&(X=new Fr,T[B]=X),X.getTargetRaySpace()},this.getControllerGrip=function(B){let X=T[B];return X===void 0&&(X=new Fr,T[B]=X),X.getGripSpace()},this.getHand=function(B){let X=T[B];return X===void 0&&(X=new Fr,T[B]=X),X.getHandSpace()};function Y(B){const X=S.indexOf(B.inputSource);if(X===-1)return;const ie=T[X];ie!==void 0&&ie.dispatchEvent({type:B.type,data:B.inputSource})}function C(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",C),i.removeEventListener("inputsourceschange",U);for(let B=0;B<T.length;B++){const X=S[B];X!==null&&(S[B]=null,T[B].disconnect(X))}w=null,q=null,e.setRenderTarget(p),m=null,f=null,d=null,i=null,u=null,ae.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",C),i.addEventListener("inputsourceschange",U),M.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers===void 0?M.antialias:!0,alpha:M.alpha,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:m}),u=new wn(m.framebufferWidth,m.framebufferHeight,{format:It,type:yn,encoding:e.outputEncoding,stencilBuffer:M.stencil})}else{let X=null,ie=null,re=null;M.depth&&(re=M.stencil?35056:33190,X=M.stencil?ti:Mn,ie=M.stencil?Zn:vn);const F={colorFormat:32856,depthFormat:re,scaleFactor:s};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(F),i.updateRenderState({layers:[f]}),u=new wn(f.textureWidth,f.textureHeight,{format:It,type:yn,depthTexture:new Pf(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:M.stencil,encoding:e.outputEncoding,samples:M.antialias?4:0});const ye=e.properties.get(u);ye.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(B){for(let X=0;X<B.removed.length;X++){const ie=B.removed[X],re=S.indexOf(ie);re>=0&&(S[re]=null,T[re].disconnect(ie))}for(let X=0;X<B.added.length;X++){const ie=B.added[X];let re=S.indexOf(ie);if(re===-1){for(let ye=0;ye<T.length;ye++)if(ye>=S.length){S.push(ie),re=ye;break}else if(S[ye]===null){S[ye]=ie,re=ye;break}if(re===-1)break}const F=T[re];F&&F.connect(ie)}}const O=new N,J=new N;function j(B,X,ie){O.setFromMatrixPosition(X.matrixWorld),J.setFromMatrixPosition(ie.matrixWorld);const re=O.distanceTo(J),F=X.projectionMatrix.elements,ye=ie.projectionMatrix.elements,Se=F[14]/(F[10]-1),ne=F[14]/(F[10]+1),ve=(F[9]+1)/F[5],Ie=(F[9]-1)/F[5],pe=(F[8]-1)/F[0],Ce=(ye[8]+1)/ye[0],Ze=Se*pe,et=Se*Ce,Ke=re/(-pe+Ce),Ye=Ke*-pe;X.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ye),B.translateZ(Ke),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Ue=Se+Ke,Ve=ne+Ke,ut=Ze-Ye,y=et+(re-Ye),g=ve*ne/Ve*Ue,z=Ie*ne/Ve*Ue;B.projectionMatrix.makePerspective(ut,y,g,z,Ue,Ve),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function W(B,X){X===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(X.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;v.near=R.near=L.near=B.near,v.far=R.far=L.far=B.far,(w!==v.near||q!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,q=v.far);const X=B.parent,ie=v.cameras;W(v,X);for(let re=0;re<ie.length;re++)W(ie[re],X);ie.length===2?j(v,L,R):v.projectionMatrix.copy(L.projectionMatrix),$(B,v,X)};function $(B,X,ie){ie===null?B.matrix.copy(X.matrixWorld):(B.matrix.copy(ie.matrixWorld),B.matrix.invert(),B.matrix.multiply(X.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0);const re=B.children;for(let F=0,ye=re.length;F<ye;F++)re[F].updateMatrixWorld(!0);B.projectionMatrix.copy(X.projectionMatrix),B.projectionMatrixInverse.copy(X.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=jr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(B){c=B,f!==null&&(f.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.getPlanes=function(){return b};let Q=null;function ue(B,X){if(h=X.getViewerPose(l||o),_=X,h!==null){const ie=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let re=!1;ie.length!==v.cameras.length&&(v.cameras.length=0,re=!0);for(let F=0;F<ie.length;F++){const ye=ie[F];let Se=null;if(m!==null)Se=m.getViewport(ye);else{const ve=d.getViewSubImage(f,ye);Se=ve.viewport,F===0&&(e.setRenderTargetTextures(u,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(u))}let ne=I[F];ne===void 0&&(ne=new wt,ne.layers.enable(F),ne.viewport=new tt,I[F]=ne),ne.matrix.fromArray(ye.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(ye.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Se.x,Se.y,Se.width,Se.height),F===0&&(v.matrix.copy(ne.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),re===!0&&v.cameras.push(ne)}}for(let ie=0;ie<T.length;ie++){const re=S[ie],F=T[ie];re!==null&&F!==void 0&&F.update(re,X,l||o)}if(Q&&Q(B,X),X.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:X.detectedPlanes});let ie=null;for(const re of b)X.detectedPlanes.has(re)||(ie===null&&(ie=[]),ie.push(re));if(ie!==null)for(const re of ie)b.delete(re),E.delete(re),n.dispatchEvent({type:"planeremoved",data:re});for(const re of X.detectedPlanes)if(!b.has(re))b.add(re),E.set(re,X.lastChangedTime),n.dispatchEvent({type:"planeadded",data:re});else{const F=E.get(re);re.lastChangedTime>F&&(E.set(re,re.lastChangedTime),n.dispatchEvent({type:"planechanged",data:re}))}}_=null}const ae=new Qa;ae.setAnimationLoop(ue),this.setAnimationLoop=function(B){Q=B},this.dispose=function(){}}}function Df(r,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,ja(r)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function i(p,u,T,S,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,b)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),M(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?c(p,u,T,S):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===ft&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===ft&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const T=e.get(u).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const S=r.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*S,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,T,S){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*T,p.scale.value=S*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,T){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ft&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function M(p,u){const T=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function If(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function c(T,S){const b=S.program;n.uniformBlockBinding(T,b)}function l(T,S){let b=i[T.id];b===void 0&&(_(T),b=h(T),i[T.id]=b,T.addEventListener("dispose",p));const E=S.program;n.updateUBOMapping(T,E);const L=e.render.frame;s[T.id]!==L&&(f(T),s[T.id]=L)}function h(T){const S=d();T.__bindingPointIndex=S;const b=r.createBuffer(),E=T.__size,L=T.usage;return r.bindBuffer(35345,b),r.bufferData(35345,E,L),r.bindBuffer(35345,null),r.bindBufferBase(35345,S,b),b}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const S=i[T.id],b=T.uniforms,E=T.__cache;r.bindBuffer(35345,S);for(let L=0,R=b.length;L<R;L++){const I=b[L];if(m(I,L,E)===!0){const v=I.__offset,w=Array.isArray(I.value)?I.value:[I.value];let q=0;for(let Y=0;Y<w.length;Y++){const C=w[Y],U=M(C);typeof C=="number"?(I.__data[0]=C,r.bufferSubData(35345,v+q,I.__data)):C.isMatrix3?(I.__data[0]=C.elements[0],I.__data[1]=C.elements[1],I.__data[2]=C.elements[2],I.__data[3]=C.elements[0],I.__data[4]=C.elements[3],I.__data[5]=C.elements[4],I.__data[6]=C.elements[5],I.__data[7]=C.elements[0],I.__data[8]=C.elements[6],I.__data[9]=C.elements[7],I.__data[10]=C.elements[8],I.__data[11]=C.elements[0]):(C.toArray(I.__data,q),q+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,v,I.__data)}}r.bindBuffer(35345,null)}function m(T,S,b){const E=T.value;if(b[S]===void 0){if(typeof E=="number")b[S]=E;else{const L=Array.isArray(E)?E:[E],R=[];for(let I=0;I<L.length;I++)R.push(L[I].clone());b[S]=R}return!0}else if(typeof E=="number"){if(b[S]!==E)return b[S]=E,!0}else{const L=Array.isArray(b[S])?b[S]:[b[S]],R=Array.isArray(E)?E:[E];for(let I=0;I<L.length;I++){const v=L[I];if(v.equals(R[I])===!1)return v.copy(R[I]),!0}}return!1}function _(T){const S=T.uniforms;let b=0;const E=16;let L=0;for(let R=0,I=S.length;R<I;R++){const v=S[R],w={boundary:0,storage:0},q=Array.isArray(v.value)?v.value:[v.value];for(let Y=0,C=q.length;Y<C;Y++){const U=q[Y],O=M(U);w.boundary+=O.boundary,w.storage+=O.storage}if(v.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=b,R>0){L=b%E;const Y=E-L;L!==0&&Y-w.boundary<0&&(b+=E-L,v.__offset=b)}b+=w.storage}return L=b%E,L>0&&(b+=E-L),T.__size=b,T.__cache={},this}function M(T){const S={boundary:0,storage:0};return typeof T=="number"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function p(T){const S=T.target;S.removeEventListener("dispose",p);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function u(){for(const T in i)r.deleteBuffer(i[T]);o=[],i={},s={}}return{bind:c,update:l,dispose:u}}function Uf(){const r=Zi("canvas");return r.style.display="block",r}class ro{constructor(e={}){const{canvas:t=Uf(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let m=null,_=null;const M=[],p=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=bn,this.useLegacyLights=!0,this.toneMapping=jt,this.toneMappingExposure=1;const u=this;let T=!1,S=0,b=0,E=null,L=-1,R=null;const I=new tt,v=new tt;let w=null,q=t.width,Y=t.height,C=1,U=null,O=null;const J=new tt(0,0,q,Y),j=new tt(0,0,q,Y);let W=!1;const $=new Ja;let Q=!1,ue=!1,ae=null;const B=new nt,X=new N,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return E===null?C:1}let F=n;function ye(x,D){for(let G=0;G<x.length;G++){const P=x[G],k=t.getContext(P,D);if(k!==null)return k}return null}try{const x={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ts}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),F===null){const D=["webgl2","webgl","experimental-webgl"];if(u.isWebGL1Renderer===!0&&D.shift(),F=ye(D,x),F===null)throw ye(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Se,ne,ve,Ie,pe,Ce,Ze,et,Ke,Ye,Ue,Ve,ut,y,g,z,K,ee,se,xe,ce,V,he,me;function _e(){Se=new Wh(F),ne=new Oh(F,Se,e),Se.init(ne),V=new Af(F,Se,ne),ve=new Ef(F,Se,ne),Ie=new Yh,pe=new hf,Ce=new Tf(F,Se,ve,pe,ne,V,Ie),Ze=new Bh(u),et=new kh(u),Ke=new rc(F,ne),he=new Nh(F,Se,Ke,ne),Ye=new qh(F,Ke,Ie,he),Ue=new Kh(F,Ye,Ke,Ie),se=new Zh(F,ne,Ce),z=new zh(pe),Ve=new uf(u,Ze,et,Se,ne,he,z),ut=new Df(u,pe),y=new ff,g=new xf(Se,ne),ee=new Uh(u,Ze,et,ve,Ue,f,c),K=new wf(u,Ue,ne),me=new If(F,Ie,ne,ve),xe=new Fh(F,Se,Ie,ne),ce=new Xh(F,Se,Ie,ne),Ie.programs=Ve.programs,u.capabilities=ne,u.extensions=Se,u.properties=pe,u.renderLists=y,u.shadowMap=K,u.state=ve,u.info=Ie}_e();const le=new Rf(u,F);this.xr=le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const x=Se.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Se.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(x){x!==void 0&&(C=x,this.setSize(q,Y,!1))},this.getSize=function(x){return x.set(q,Y)},this.setSize=function(x,D,G=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=x,Y=D,t.width=Math.floor(x*C),t.height=Math.floor(D*C),G===!0&&(t.style.width=x+"px",t.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(q*C,Y*C).floor()},this.setDrawingBufferSize=function(x,D,G){q=x,Y=D,C=G,t.width=Math.floor(x*G),t.height=Math.floor(D*G),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(I)},this.getViewport=function(x){return x.copy(J)},this.setViewport=function(x,D,G,P){x.isVector4?J.set(x.x,x.y,x.z,x.w):J.set(x,D,G,P),ve.viewport(I.copy(J).multiplyScalar(C).floor())},this.getScissor=function(x){return x.copy(j)},this.setScissor=function(x,D,G,P){x.isVector4?j.set(x.x,x.y,x.z,x.w):j.set(x,D,G,P),ve.scissor(v.copy(j).multiplyScalar(C).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(x){ve.setScissorTest(W=x)},this.setOpaqueSort=function(x){U=x},this.setTransparentSort=function(x){O=x},this.getClearColor=function(x){return x.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(x=!0,D=!0,G=!0){let P=0;x&&(P|=16384),D&&(P|=256),G&&(P|=1024),F.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),y.dispose(),g.dispose(),pe.dispose(),Ze.dispose(),et.dispose(),Ue.dispose(),he.dispose(),me.dispose(),Ve.dispose(),le.dispose(),le.removeEventListener("sessionstart",fe),le.removeEventListener("sessionend",Be),ae&&(ae.dispose(),ae=null),He.stop()};function de(x){x.preventDefault(),T=!0}function Re(){T=!1;const x=Ie.autoReset,D=K.enabled,G=K.autoUpdate,P=K.needsUpdate,k=K.type;_e(),Ie.autoReset=x,K.enabled=D,K.autoUpdate=G,K.needsUpdate=P,K.type=k}function Ne(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ke(x){const D=x.target;D.removeEventListener("dispose",ke),A(D)}function A(x){H(x),pe.remove(x)}function H(x){const D=pe.get(x).programs;D!==void 0&&(D.forEach(function(G){Ve.releaseProgram(G)}),x.isShaderMaterial&&Ve.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,G,P,k,ge){D===null&&(D=ie);const Me=k.isMesh&&k.matrixWorld.determinant()<0,be=go(x,D,G,P,k);ve.setMaterial(P,Me);let we=G.index,Te=1;P.wireframe===!0&&(we=Ye.getWireframeAttribute(G),Te=2);const Ae=G.drawRange,Le=G.attributes.position;let Fe=Ae.start*Te,at=(Ae.start+Ae.count)*Te;ge!==null&&(Fe=Math.max(Fe,ge.start*Te),at=Math.min(at,(ge.start+ge.count)*Te)),we!==null?(Fe=Math.max(Fe,0),at=Math.min(at,we.count)):Le!=null&&(Fe=Math.max(Fe,0),at=Math.min(at,Le.count));const At=at-Fe;if(At<0||At===1/0)return;he.setup(k,P,be,G,we);let an,qe=xe;if(we!==null&&(an=Ke.get(we),qe=ce,qe.setIndex(an)),k.isMesh)P.wireframe===!0?(ve.setLineWidth(P.wireframeLinewidth*re()),qe.setMode(1)):qe.setMode(4);else if(k.isLine){let De=P.linewidth;De===void 0&&(De=1),ve.setLineWidth(De*re()),k.isLineSegments?qe.setMode(1):k.isLineLoop?qe.setMode(2):qe.setMode(3)}else k.isPoints?qe.setMode(0):k.isSprite&&qe.setMode(4);if(k.isInstancedMesh)qe.renderInstances(Fe,At,k.count);else if(G.isInstancedBufferGeometry){const De=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ir=Math.min(G.instanceCount,De);qe.renderInstances(Fe,At,ir)}else qe.render(Fe,At)},this.compile=function(x,D){function G(P,k,ge){P.transparent===!0&&P.side===Yt&&P.forceSinglePass===!1?(P.side=ft,P.needsUpdate=!0,yi(P,k,ge),P.side=rn,P.needsUpdate=!0,yi(P,k,ge),P.side=Yt):yi(P,k,ge)}_=g.get(x),_.init(),p.push(_),x.traverseVisible(function(P){P.isLight&&P.layers.test(D.layers)&&(_.pushLight(P),P.castShadow&&_.pushShadow(P))}),_.setupLights(u.useLegacyLights),x.traverse(function(P){const k=P.material;if(k)if(Array.isArray(k))for(let ge=0;ge<k.length;ge++){const Me=k[ge];G(Me,x,P)}else G(k,x,P)}),p.pop(),_=null};let Z=null;function oe(x){Z&&Z(x)}function fe(){He.stop()}function Be(){He.start()}const He=new Qa;He.setAnimationLoop(oe),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(x){Z=x,le.setAnimationLoop(x),x===null?He.stop():He.start()},le.addEventListener("sessionstart",fe),le.addEventListener("sessionend",Be),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(D),D=le.getCamera()),x.isScene===!0&&x.onBeforeRender(u,x,D,E),_=g.get(x,p.length),_.init(),p.push(_),B.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),$.setFromProjectionMatrix(B),ue=this.localClippingEnabled,Q=z.init(this.clippingPlanes,ue),m=y.get(x,M.length),m.init(),M.push(m),it(x,D,0,u.sortObjects),m.finish(),u.sortObjects===!0&&m.sort(U,O),Q===!0&&z.beginShadows();const G=_.state.shadowsArray;if(K.render(G,x,D),Q===!0&&z.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(m,x),_.setupLights(u.useLegacyLights),D.isArrayCamera){const P=D.cameras;for(let k=0,ge=P.length;k<ge;k++){const Me=P[k];Zt(m,x,Me,Me.viewport)}}else Zt(m,x,D);E!==null&&(Ce.updateMultisampleRenderTarget(E),Ce.updateRenderTargetMipmap(E)),x.isScene===!0&&x.onAfterRender(u,x,D),he.resetDefaultState(),L=-1,R=null,p.pop(),p.length>0?_=p[p.length-1]:_=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function it(x,D,G,P){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)G=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)_.pushLight(x),x.castShadow&&_.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||$.intersectsSprite(x)){P&&X.setFromMatrixPosition(x.matrixWorld).applyMatrix4(B);const Me=Ue.update(x),be=x.material;be.visible&&m.push(x,Me,be,G,X.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(x.isSkinnedMesh&&x.skeleton.frame!==Ie.render.frame&&(x.skeleton.update(),x.skeleton.frame=Ie.render.frame),!x.frustumCulled||$.intersectsObject(x))){P&&X.setFromMatrixPosition(x.matrixWorld).applyMatrix4(B);const Me=Ue.update(x),be=x.material;if(Array.isArray(be)){const we=Me.groups;for(let Te=0,Ae=we.length;Te<Ae;Te++){const Le=we[Te],Fe=be[Le.materialIndex];Fe&&Fe.visible&&m.push(x,Me,Fe,G,X.z,Le)}}else be.visible&&m.push(x,Me,be,G,X.z,null)}}const ge=x.children;for(let Me=0,be=ge.length;Me<be;Me++)it(ge[Me],D,G,P)}function Zt(x,D,G,P){const k=x.opaque,ge=x.transmissive,Me=x.transparent;_.setupLightsView(G),Q===!0&&z.setGlobalState(u.clippingPlanes,G),ge.length>0&&We(k,ge,D,G),P&&ve.viewport(I.copy(P)),k.length>0&&St(k,D,G),ge.length>0&&St(ge,D,G),Me.length>0&&St(Me,D,G),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function We(x,D,G,P){if(ae===null){const be=ne.isWebGL2;ae=new wn(1024,1024,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?mi:yn,minFilter:pi,samples:be&&a===!0?4:0})}const k=u.getRenderTarget();u.setRenderTarget(ae),u.clear();const ge=u.toneMapping;u.toneMapping=jt,St(x,G,P),Ce.updateMultisampleRenderTarget(ae),Ce.updateRenderTargetMipmap(ae);let Me=!1;for(let be=0,we=D.length;be<we;be++){const Te=D[be],Ae=Te.object,Le=Te.geometry,Fe=Te.material,at=Te.group;if(Fe.side===Yt&&Ae.layers.test(P.layers)){const At=Fe.side;Fe.side=ft,Fe.needsUpdate=!0,Ft(Ae,G,P,Le,Fe,at),Fe.side=At,Fe.needsUpdate=!0,Me=!0}}Me===!0&&(Ce.updateMultisampleRenderTarget(ae),Ce.updateRenderTargetMipmap(ae)),u.setRenderTarget(k),u.toneMapping=ge}function St(x,D,G){const P=D.isScene===!0?D.overrideMaterial:null;for(let k=0,ge=x.length;k<ge;k++){const Me=x[k],be=Me.object,we=Me.geometry,Te=P===null?Me.material:P,Ae=Me.group;be.layers.test(G.layers)&&Ft(be,D,G,we,Te,Ae)}}function Ft(x,D,G,P,k,ge){x.onBeforeRender(u,D,G,P,k,ge),x.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),k.onBeforeRender(u,D,G,P,x,ge),k.transparent===!0&&k.side===Yt&&k.forceSinglePass===!1?(k.side=ft,k.needsUpdate=!0,u.renderBufferDirect(G,D,P,k,x,ge),k.side=rn,k.needsUpdate=!0,u.renderBufferDirect(G,D,P,k,x,ge),k.side=Yt):u.renderBufferDirect(G,D,P,k,x,ge),x.onAfterRender(u,D,G,P,k,ge)}function yi(x,D,G){D.isScene!==!0&&(D=ie);const P=pe.get(x),k=_.state.lights,ge=_.state.shadowsArray,Me=k.state.version,be=Ve.getParameters(x,k.state,ge,D,G),we=Ve.getProgramCacheKey(be);let Te=P.programs;P.environment=x.isMeshStandardMaterial?D.environment:null,P.fog=D.fog,P.envMap=(x.isMeshStandardMaterial?et:Ze).get(x.envMap||P.environment),Te===void 0&&(x.addEventListener("dispose",ke),Te=new Map,P.programs=Te);let Ae=Te.get(we);if(Ae!==void 0){if(P.currentProgram===Ae&&P.lightsStateVersion===Me)return ss(x,be),Ae}else be.uniforms=Ve.getUniforms(x),x.onBuild(G,be,u),x.onBeforeCompile(be,u),Ae=Ve.acquireProgram(be,we),Te.set(we,Ae),P.uniforms=be.uniforms;const Le=P.uniforms;(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Le.clippingPlanes=z.uniform),ss(x,be),P.needsLights=vo(x),P.lightsStateVersion=Me,P.needsLights&&(Le.ambientLightColor.value=k.state.ambient,Le.lightProbe.value=k.state.probe,Le.directionalLights.value=k.state.directional,Le.directionalLightShadows.value=k.state.directionalShadow,Le.spotLights.value=k.state.spot,Le.spotLightShadows.value=k.state.spotShadow,Le.rectAreaLights.value=k.state.rectArea,Le.ltc_1.value=k.state.rectAreaLTC1,Le.ltc_2.value=k.state.rectAreaLTC2,Le.pointLights.value=k.state.point,Le.pointLightShadows.value=k.state.pointShadow,Le.hemisphereLights.value=k.state.hemi,Le.directionalShadowMap.value=k.state.directionalShadowMap,Le.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Le.spotShadowMap.value=k.state.spotShadowMap,Le.spotLightMatrix.value=k.state.spotLightMatrix,Le.spotLightMap.value=k.state.spotLightMap,Le.pointShadowMap.value=k.state.pointShadowMap,Le.pointShadowMatrix.value=k.state.pointShadowMatrix);const Fe=Ae.getUniforms(),at=$i.seqWithValue(Fe.seq,Le);return P.currentProgram=Ae,P.uniformsList=at,Ae}function ss(x,D){const G=pe.get(x);G.outputEncoding=D.outputEncoding,G.instancing=D.instancing,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function go(x,D,G,P,k){D.isScene!==!0&&(D=ie),Ce.resetTextureUnits();const ge=D.fog,Me=P.isMeshStandardMaterial?D.environment:null,be=E===null?u.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:bn,we=(P.isMeshStandardMaterial?et:Ze).get(P.envMap||Me),Te=P.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ae=!!P.normalMap&&!!G.attributes.tangent,Le=!!G.morphAttributes.position,Fe=!!G.morphAttributes.normal,at=!!G.morphAttributes.color,At=P.toneMapped?u.toneMapping:jt,an=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,qe=an!==void 0?an.length:0,De=pe.get(P),ir=_.state.lights;if(Q===!0&&(ue===!0||x!==R)){const pt=x===R&&P.id===L;z.setState(P,x,pt)}let Je=!1;P.version===De.__version?(De.needsLights&&De.lightsStateVersion!==ir.state.version||De.outputEncoding!==be||k.isInstancedMesh&&De.instancing===!1||!k.isInstancedMesh&&De.instancing===!0||k.isSkinnedMesh&&De.skinning===!1||!k.isSkinnedMesh&&De.skinning===!0||De.envMap!==we||P.fog===!0&&De.fog!==ge||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==z.numPlanes||De.numIntersection!==z.numIntersection)||De.vertexAlphas!==Te||De.vertexTangents!==Ae||De.morphTargets!==Le||De.morphNormals!==Fe||De.morphColors!==at||De.toneMapping!==At||ne.isWebGL2===!0&&De.morphTargetsCount!==qe)&&(Je=!0):(Je=!0,De.__version=P.version);let on=De.currentProgram;Je===!0&&(on=yi(P,D,k));let as=!1,si=!1,rr=!1;const ot=on.getUniforms(),ln=De.uniforms;if(ve.useProgram(on.program)&&(as=!0,si=!0,rr=!0),P.id!==L&&(L=P.id,si=!0),as||R!==x){if(ot.setValue(F,"projectionMatrix",x.projectionMatrix),ne.logarithmicDepthBuffer&&ot.setValue(F,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),R!==x&&(R=x,si=!0,rr=!0),P.isShaderMaterial||P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshStandardMaterial||P.envMap){const pt=ot.map.cameraPosition;pt!==void 0&&pt.setValue(F,X.setFromMatrixPosition(x.matrixWorld))}(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&ot.setValue(F,"isOrthographic",x.isOrthographicCamera===!0),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial||P.isShadowMaterial||k.isSkinnedMesh)&&ot.setValue(F,"viewMatrix",x.matrixWorldInverse)}if(k.isSkinnedMesh){ot.setOptional(F,k,"bindMatrix"),ot.setOptional(F,k,"bindMatrixInverse");const pt=k.skeleton;pt&&(ne.floatVertexTextures?(pt.boneTexture===null&&pt.computeBoneTexture(),ot.setValue(F,"boneTexture",pt.boneTexture,Ce),ot.setValue(F,"boneTextureSize",pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const sr=G.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0&&ne.isWebGL2===!0)&&se.update(k,G,on),(si||De.receiveShadow!==k.receiveShadow)&&(De.receiveShadow=k.receiveShadow,ot.setValue(F,"receiveShadow",k.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&(ln.envMap.value=we,ln.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),si&&(ot.setValue(F,"toneMappingExposure",u.toneMappingExposure),De.needsLights&&_o(ln,rr),ge&&P.fog===!0&&ut.refreshFogUniforms(ln,ge),ut.refreshMaterialUniforms(ln,P,C,Y,ae),$i.upload(F,De.uniformsList,ln,Ce)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&($i.upload(F,De.uniformsList,ln,Ce),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&ot.setValue(F,"center",k.center),ot.setValue(F,"modelViewMatrix",k.modelViewMatrix),ot.setValue(F,"normalMatrix",k.normalMatrix),ot.setValue(F,"modelMatrix",k.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){const pt=P.uniformsGroups;for(let ar=0,xo=pt.length;ar<xo;ar++)if(ne.isWebGL2){const os=pt[ar];me.update(os,on),me.bind(os,on)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return on}function _o(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function vo(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(x,D,G){pe.get(x.texture).__webglTexture=D,pe.get(x.depthTexture).__webglTexture=G;const P=pe.get(x);P.__hasExternalTextures=!0,P.__hasExternalTextures&&(P.__autoAllocateDepthBuffer=G===void 0,P.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),P.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,D){const G=pe.get(x);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,G=0){E=x,S=D,b=G;let P=!0,k=null,ge=!1,Me=!1;if(x){const we=pe.get(x);we.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(36160,null),P=!1):we.__webglFramebuffer===void 0?Ce.setupRenderTarget(x):we.__hasExternalTextures&&Ce.rebindTextures(x,pe.get(x.texture).__webglTexture,pe.get(x.depthTexture).__webglTexture);const Te=x.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(Me=!0);const Ae=pe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(k=Ae[D],ge=!0):ne.isWebGL2&&x.samples>0&&Ce.useMultisampledRTT(x)===!1?k=pe.get(x).__webglMultisampledFramebuffer:k=Ae,I.copy(x.viewport),v.copy(x.scissor),w=x.scissorTest}else I.copy(J).multiplyScalar(C).floor(),v.copy(j).multiplyScalar(C).floor(),w=W;if(ve.bindFramebuffer(36160,k)&&ne.drawBuffers&&P&&ve.drawBuffers(x,k),ve.viewport(I),ve.scissor(v),ve.setScissorTest(w),ge){const we=pe.get(x.texture);F.framebufferTexture2D(36160,36064,34069+D,we.__webglTexture,G)}else if(Me){const we=pe.get(x.texture),Te=D||0;F.framebufferTextureLayer(36160,36064,we.__webglTexture,G||0,Te)}L=-1},this.readRenderTargetPixels=function(x,D,G,P,k,ge,Me){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=pe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){ve.bindFramebuffer(36160,be);try{const we=x.texture,Te=we.format,Ae=we.type;if(Te!==It&&V.convert(Te)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Ae===mi&&(Se.has("EXT_color_buffer_half_float")||ne.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ae!==yn&&V.convert(Ae)!==F.getParameter(35738)&&!(Ae===xn&&(ne.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-P&&G>=0&&G<=x.height-k&&F.readPixels(D,G,P,k,V.convert(Te),V.convert(Ae),ge)}finally{const we=E!==null?pe.get(E).__webglFramebuffer:null;ve.bindFramebuffer(36160,we)}}},this.copyFramebufferToTexture=function(x,D,G=0){const P=Math.pow(2,-G),k=Math.floor(D.image.width*P),ge=Math.floor(D.image.height*P);Ce.setTexture2D(D,0),F.copyTexSubImage2D(3553,G,0,0,x.x,x.y,k,ge),ve.unbindTexture()},this.copyTextureToTexture=function(x,D,G,P=0){const k=D.image.width,ge=D.image.height,Me=V.convert(G.format),be=V.convert(G.type);Ce.setTexture2D(G,0),F.pixelStorei(37440,G.flipY),F.pixelStorei(37441,G.premultiplyAlpha),F.pixelStorei(3317,G.unpackAlignment),D.isDataTexture?F.texSubImage2D(3553,P,x.x,x.y,k,ge,Me,be,D.image.data):D.isCompressedTexture?F.compressedTexSubImage2D(3553,P,x.x,x.y,D.mipmaps[0].width,D.mipmaps[0].height,Me,D.mipmaps[0].data):F.texSubImage2D(3553,P,x.x,x.y,Me,be,D.image),P===0&&G.generateMipmaps&&F.generateMipmap(3553),ve.unbindTexture()},this.copyTextureToTexture3D=function(x,D,G,P,k=0){if(u.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=x.max.x-x.min.x+1,Me=x.max.y-x.min.y+1,be=x.max.z-x.min.z+1,we=V.convert(P.format),Te=V.convert(P.type);let Ae;if(P.isData3DTexture)Ce.setTexture3D(P,0),Ae=32879;else if(P.isDataArrayTexture)Ce.setTexture2DArray(P,0),Ae=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,P.flipY),F.pixelStorei(37441,P.premultiplyAlpha),F.pixelStorei(3317,P.unpackAlignment);const Le=F.getParameter(3314),Fe=F.getParameter(32878),at=F.getParameter(3316),At=F.getParameter(3315),an=F.getParameter(32877),qe=G.isCompressedTexture?G.mipmaps[0]:G.image;F.pixelStorei(3314,qe.width),F.pixelStorei(32878,qe.height),F.pixelStorei(3316,x.min.x),F.pixelStorei(3315,x.min.y),F.pixelStorei(32877,x.min.z),G.isDataTexture||G.isData3DTexture?F.texSubImage3D(Ae,k,D.x,D.y,D.z,ge,Me,be,we,Te,qe.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ae,k,D.x,D.y,D.z,ge,Me,be,we,qe.data)):F.texSubImage3D(Ae,k,D.x,D.y,D.z,ge,Me,be,we,Te,qe),F.pixelStorei(3314,Le),F.pixelStorei(32878,Fe),F.pixelStorei(3316,at),F.pixelStorei(3315,At),F.pixelStorei(32877,an),k===0&&P.generateMipmaps&&F.generateMipmap(Ae),ve.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?Ce.setTextureCube(x,0):x.isData3DTexture?Ce.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ce.setTexture2DArray(x,0):Ce.setTexture2D(x,0),ve.unbindTexture()},this.resetState=function(){S=0,b=0,E=null,ve.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class Nf extends ro{}Nf.prototype.isWebGL1Renderer=!0;class Ff extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Of{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ba(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ba();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ba(){return(typeof performance>"u"?Date:performance).now()}class zf extends tr{constructor(e,t,n,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ts}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ts);const Bf=`uniform float objectOpacity;
uniform float randomSeed;
uniform float noisePower;
uniform float pixelRatio;
uniform float time;
uniform vec2 resolution;

varying vec3 vPosition;

vec4 permute(vec4 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;

    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 1.0 / 7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;

    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

vec3 normalizeRGBColor(vec3 color) {
    return color / 255.0;
}

mat2 getRotationMatrix(float angle) {
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

float rand(vec2 p) {
    vec2 k1 = vec2(23.14069263277926, 2.665144142690225);
    return fract(cos(dot(p, k1)) * 12345.6789);
}

float lines(vec2 uv, float offset) {
    return smoothstep(0.0, 0.5 + offset * 0.5, abs(0.55 * (sin(uv.x * 12.0) + offset * 2.0)));
}

void main(void) {
    float shaderZoom = 0.0;

    if(resolution.x > 700.0) {
        shaderZoom = 0.25;
    } else {
        shaderZoom = 0.45;
    }

    vec3 color1 = vec3(0.0, 0.0, 0.0);
    vec3 color2 = vec3(204, 149, 192);

    // LIGHT_GREEN
    // vec3 color3 = vec3(230.0, 255.0, 233.0);
    // GREEN
    vec3 color3 = vec3(95, 195, 228);
    // DARK_GREEN
    // vec3 color3 = vec3(89.0, 128.0, 94.0);
    // DARK_GREEN v2
    // vec3 color3 = vec3(51.0, 128.0, 61.0);
    // DESATURATED_GREEN
    // vec3 color3 = vec3(143.0, 204.0, 151.0);
    // BLACK
    // vec3 color3 = vec3(64.0, 57.0, 59.0);
    // PINK + BLACK
    // vec3 color3 = vec3(128.0, 115.0, 118.0);
    // LIGHT_BLUE + GRAY
    // vec3 color3 = vec3(152.0, 172.0, 179.0);

    color1 = normalizeRGBColor(color1);
    color2 = normalizeRGBColor(color2);
    color3 = normalizeRGBColor(color3);

    float noise = snoise(vPosition + time * 0.175 + randomSeed * 100.0) * (noisePower * 0.55);
    vec2 baseUv = getRotationMatrix(noise + -1.0) * vPosition.xy * shaderZoom;

    float firstPattern = lines(baseUv, 0.5);
    float secondPattern = lines(baseUv, 0.05);

    vec3 firstColor = mix(color3, color2, firstPattern);
    vec3 resColor = mix(firstColor, color1, secondPattern);

    float grainStrength = 0.075;
    if(pixelRatio > 2.0) {
        grainStrength = 0.135;
    }

    vec2 uvNoise = vPosition.xy;
    uvNoise.y *= rand(vec2(uvNoise.y, randomSeed));

    vec3 grain = vec3(rand(uvNoise) * grainStrength);
    resColor += grain;

    gl_FragColor = vec4(resColor, 1.0) * objectOpacity;
}
`,Gf=`varying vec3 vPosition;
varying vec2 vUv;

void main(void) {
    vUv = uv;
    vPosition = position;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;const Hf=new Of,Vf=2.3;let kf=!1,wa=!1,tn=null,Or=16/9,dn=null,fn=null,zr=null;const Wf={mounted(){const{canvas:r}=this.$refs;Or=window.innerWidth/window.innerHeight,zr=new Ff,tn=new ro({powerPreference:"high-performance",precision:"highp",canvas:r}),tn.setPixelRatio(Math.min(window.devicePixelRatio,Vf)),tn.outputEncoding=Oe,tn.autoClearColor=new Ge(3,3,3),tn.failIfMajorPerformanceCaveat=!0,dn=new wt(70,Or,.5,2),dn.position.set(0,0,1);const e=2,t=new zf(e*Or,e),n=new sn({fragmentShader:Bf,vertexShader:Gf,extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},uniforms:{time:{value:0},randomSeed:{value:Math.random()},objectOpacity:{value:0},noisePower:{value:1},pixelRatio:{value:window.devicePixelRatio},resolution:{value:new ze(window.innerWidth,window.innerHeight)}},depthTest:!1});fn=new $t(t,n),zr.add(fn),dn.matrixAutoUpdate=!1,fn.matrixAutoUpdate=!1,window.addEventListener("resize",this.resize),this.resize(),wa=!0,$n.to(fn.material.uniforms.objectOpacity,{value:1,duration:1.75,delay:.125}),$n.ticker.add(this.render)},methods:{resize(){const r=tn.domElement,e=r.clientWidth,t=r.clientHeight;(r.width!==e||r.height!==t)&&(tn.setSize(e,t,!1),dn.aspect=e/t,dn.updateProjectionMatrix()),dn.updateMatrix(),fn.updateMatrix(),fn.material.uniforms.resolution.value.set(window.innerWidth,window.innerHeight)},render(){window.scrollY-20>window.innerHeight||!wa||kf||(fn.material.uniforms.time.value=Hf.getElapsedTime(),tn.render(zr,dn))}}},qf={ref:"canvas",class:"canvas","aria-label":"landing background"};function Xf(r,e,t,n,i,s){return Ut(),Nt("canvas",qf,null,512)}const Yf=_i(Wf,[["render",Xf],["__scopeId","data-v-6d6c7a4c"]]),$f=bo('<h1 class="header__container__title" data-v-093492b7><span class="sr-only" data-v-093492b7>Qifan Zhuang</span><span class="line" aria-hidden="true" data-v-093492b7><span class="line__content" data-v-093492b7>Qifan</span></span><span class="line" aria-hidden="true" data-v-093492b7><span class="line__content ml-50 mt-25" data-v-093492b7>Zhuang</span></span></h1>',1),jf={class:"header__container__subtitle"},Zf={class:"sr-only"},Kf=["innerHTML"],Jf=es({__name:"index",setup(r){const e=Kr(),t=_n(null),n=_n(null),i=_n(null),s=_n("Software Developer");return Jr(()=>{$n.fromTo(n.value,{y:-3},{y:20,scrollTrigger:{scrub:!0,trigger:t.value,start:"top-=50px top",end:"bottom top"}}),$n.fromTo(".scroll-down",{opacity:1},{opacity:0,scrollTrigger:{scrub:.75,trigger:t.value,start:"top+=25% top",end:"bottom-=25% top"}});const o=$n.timeline({paused:!0,delay:.25});o.from(".line__content",{yPercent:105,ease:"power1.out",duration:1,stagger:.25}),o.from(i.value,{opacity:0,stagger:{amount:.5,from:"center"}},"-=0.75"),o.from(".nav__sections__list__section, .nav__menu-button",{opacity:0,stagger:.05},"<+0.75"),o.from(".scroll-down",{opacity:0},"<+0.25"),yo(()=>[e.welcoming],()=>{o.play()})}),(o,a)=>(Ut(),Nt("div",{class:"banner-wrap",ref_key:"header",ref:t},[Yi(Yf),Et("div",{ref_key:"headerContainer",ref:n,class:"header__container"},[$f,Et("div",jf,[Et("p",Zf,ji(fi(s)),1),(Ut(!0),Nt(Ki,null,Qr(fi(s),(c,l)=>(Ut(),Nt("span",{key:l,ref_for:!0,ref_key:"headerContainerSubtitle",ref:i,"aria-hidden":"true",innerHTML:c},null,8,Kf))),128))])],512)],512))}});const Qf=_i(Jf,[["__scopeId","data-v-093492b7"]]);function kn(r,e,t){return e>r?e:t<r?t:r}function qi(r){return+(r>0)-+(r<0)}function ep(r){return Math.round(r*1e4)/1e4}var Ea={};function tp(r){return"-"+r[0].toLowerCase()}function so(r){return Ea[r]||(Ea[r]=r.replace(/([A-Z])/g,tp))}function Xi(r,e){return!r||r.length===0?[]:r.nodeName?[r]:[].slice.call(r[0].nodeName?r:(e||document.documentElement).querySelectorAll(r))}function Ta(r,e){for(var t in e)t.indexOf("_")&&r.setAttribute("data-"+so(t),e[t])}function np(r){return function(e,t){for(var n in t)n.indexOf("_")&&(r===!0||r[n])&&e.style.setProperty("--"+so(n),ep(t[n]))}}var Jn,Xn=[];function ip(){Jn=0,Xn.slice().forEach(function(r){return r()}),ao()}function ao(){!Jn&&Xn.length&&(Jn=requestAnimationFrame(ip))}function rp(r){return Xn.push(r),ao(),function(){Xn=Xn.filter(function(e){return e!==r}),!Xn.length&&Jn&&(cancelAnimationFrame(Jn),Jn=0)}}function Aa(r,e,t,n){return typeof r=="function"?r(e,t,n):r}function ui(){}function sp(r){r=r||{};var e=r.onChange||ui,t=r.onHidden||ui,n=r.onShown||ui,i=r.onScroll||ui,s=r.cssProps?np(r.cssProps):ui,o=r.scrollingElement,a=o?Xi(o)[0]:window,c=o?Xi(o)[0]:document.documentElement,l=!1,h={},d=[],f,m,_;function M(){d=Xi(r.targets||"[data-scroll]",Xi(r.scope||c)[0]).map(function(E){return{element:E}})}function p(){var E=c.clientWidth,L=c.clientHeight,R=qi(-f+(f=c.scrollLeft||window.pageXOffset)),I=qi(-m+(m=c.scrollTop||window.pageYOffset)),v=c.scrollLeft/(c.scrollWidth-E||1),w=c.scrollTop/(c.scrollHeight-L||1);l=l||h.scrollDirX!==R||h.scrollDirY!==I||h.scrollPercentX!==v||h.scrollPercentY!==w,h.scrollDirX=R,h.scrollDirY=I,h.scrollPercentX=v,h.scrollPercentY=w;for(var q=!1,Y=0;Y<d.length;Y++){var C=d[Y],U=C.element,O=U,J=0,j=0;do J+=O.offsetLeft,j+=O.offsetTop,O=O.offsetParent;while(O&&O!==a);var W=U.clientHeight||U.offsetHeight||0,$=U.clientWidth||U.offsetWidth||0,Q=(kn(J+$,f,f+E)-kn(J,f,f+E))/$,ue=(kn(j+W,m,m+L)-kn(j,m,m+L))/W,ae=Q===1?0:qi(J-f),B=ue===1?0:qi(j-m),X=kn((f-($/2+J-E/2))/(E/2),-1,1),ie=kn((m-(W/2+j-L/2))/(L/2),-1,1),re=void 0;r.offset?re=Aa(r.offset,U,C,c)<=m?1:0:(Aa(r.threshold,U,C,c)||0)<Q*ue?re=1:re=0;var F=C.visible!==re,ye=C._changed||F||C.visibleX!==Q||C.visibleY!==ue||C.index!==Y||C.elementHeight!==W||C.elementWidth!==$||C.offsetX!==J||C.offsetY!==j||C.intersectX!==C.intersectX||C.intersectY!==C.intersectY||C.viewportX!==X||C.viewportY!==ie;ye&&(q=!0,C._changed=!0,C._visibleChanged=F,C.visible=re,C.elementHeight=W,C.elementWidth=$,C.index=Y,C.offsetX=J,C.offsetY=j,C.visibleX=Q,C.visibleY=ue,C.intersectX=ae,C.intersectY=B,C.viewportX=X,C.viewportY=ie,C.visible=re)}!_&&(l||q)&&(_=rp(u))}function u(){T(),l&&(l=!1,Ta(c,{scrollDirX:h.scrollDirX,scrollDirY:h.scrollDirY}),s(c,h),i(c,h,d));for(var E=d.length,L=E-1;L>-1;L--){var R=d[L],I=R.element,v=R.visible,w=I.hasAttribute("scrollout-once")||!1;R._changed&&(R._changed=!1,s(I,R)),R._visibleChanged&&(Ta(I,{scroll:v?"in":"out"}),e(I,R,c),(v?n:t)(I,R,c)),v&&(r.once||w)&&d.splice(L,1)}}function T(){_&&(_(),_=void 0)}M(),p(),u();var S=0,b=function(){S=S||setTimeout(function(){S=0,p()},0)};return window.addEventListener("resize",b),a.addEventListener("scroll",b),{index:M,update:p,teardown:function(){T(),window.removeEventListener("resize",b),a.removeEventListener("scroll",b)}}}var ap=sp;const op=Ra(ap);var rs={exports:{}},Ca=typeof document<"u"?document.createElement("p").style:{},La=["O","ms","Moz","Webkit"],Br=/([A-Z])/g,Gr={};function oo(r){if(r=r.replace(/-([a-z])/g,function(i,s){return s.toUpperCase()}),Ca[r]!==void 0)return r;for(var e=r.charAt(0).toUpperCase()+r.slice(1),t=La.length;t--;){var n=La[t]+e;if(Ca[n]!==void 0)return n}return r}function lp(r){return r in Gr?Gr[r]:Gr[r]=oo(r)}function cp(r){return r=oo(r),Br.test(r)&&(r="-"+r.replace(Br,"-$1"),Br.lastIndex=0),r.toLowerCase()}rs.exports=lp;rs.exports.dash=cp;var up=rs.exports;const hp=Ra(up);function lo(r,e){return r instanceof window.HTMLElement?[e(r)]:typeof r=="object"?Object.keys(r).map(t=>e(r[t])):r.map(e)}const Hr={easeInOut:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeOut:"cubic-bezier(0.23, 1, 0.32, 1)",easeIn:"cubic-bezier(0.42, 0, 1, 1)",ease:"cubic-bezier(0.25, 0.1, 0.25, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)",linear:"cubic-bezier(0, 0, 1, 1)",back:"cubic-bezier(.37,1.62,.75,.87)",backIn:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",backOut:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",backInOut:"cubic-bezier(0.68, -0.55, 0.265, 1.55)",elasticIn:"cubic-bezier(0.04, 0.01, 0.23, 1)",elasticOut:"cubic-bezier(0.04, 0.99, 0.32, 0.99)",elasticInOut:"cubic-bezier(0.07, 0.95, 0.07, 1.05)",bounceIn:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",bounceOut:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",bounceInOut:"cubic-bezier(0.68, -0.55, 0.265, 1.55)",circIn:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",circOut:"cubic-bezier(0.075, 0.82, 0.165, 1)",circInOut:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",default:"cubic-bezier(0.77, 0, 0.175, 1)"},Tt=r=>{if(r==="undefined")return Hr.default;if(r&&!Hr[r])throw new Error(`Invalid Easing ${r} option.`);return Hr[r]};function Yn({element:r,expression:e=" ",append:t=!0}){const n=dp(r.innerHTML.toString().trim(),e);let i="";n.forEach(o=>{o.indexOf("<br>")>-1?o.split("<br>").forEach((c,l)=>{i+=l>0?"<br>"+Vr(c):Vr(c)}):i+=Vr(o)}),r.innerHTML=i;const s=r.querySelectorAll("span");return t&&s.forEach(o=>{const a=o.textContent.length===1,c=o.innerHTML.trim()!=="",l=o.textContent!=="&",h=o.textContent!=="-";a&&c&&l&&h&&(o.innerHTML=`${o.textContent}&nbsp;`)}),s}function co(r){const e=[];let t=[],n=r[0].offsetTop;return r.forEach((i,s)=>{i.offsetTop===n&&t.push(i),i.offsetTop!==n&&(e.push(t),t=[],t.push(i),n=i.offsetTop),s+1===r.length&&e.push(t)}),e}function dp(r,e){const t=r.split("<br>");let n=[];return t.forEach((i,s)=>{let o=!1,a="";const c=[];s>0&&n.push("<br>"),n=n.concat(i.split(e)),n.forEach(l=>{!o&&(l.includes("<a")||l.includes("<strong"))&&(a="",o=!0),o&&(a+=` ${l}`),o&&(l.includes("/a>")||l.includes("/strong>"))&&(c.push(a),a=""),!o&&a===""&&c.push(l),o&&(l.includes("/a>")||l.includes("/strong>"))&&(o=!1)}),n=c}),n}function Vr(r){return r===""?r:r===" "?"&nbsp;":(r=r.trim(),r==="<br>"?"<br>":`<span>${r}</span>`+(r.length>1?" ":""))}const uo={duration:1450,stagger:100,fade:!1,top:!1,reveal:!0,once:!0,rotation:0,scale:1,easing:Tt("default"),fadeDuration:1e3,fadeEasing:Tt("default"),threshold:.5,transformOrigin:"center center"},ho={duration:1e3,stagger:50,fade:!1,top:!1,reveal:!0,once:!0,rotation:0,scale:1,easing:Tt("default"),fadeDuration:1e3,fadeEasing:Tt("default"),threshold:.5,transformOrigin:"center center"},dt=typeof window<"u"&&typeof document<"u"&&typeof navigator<"u"&&typeof requestAnimationFrame<"u";class fo{constructor({element:e,elements:t}){const{animationDelay:n,animationTarget:i}=e.dataset;this.delay=n,this.element=e,this.elements=t,this.repeat=!1,this.target=i?e.closest(i):e,this.transformPrefix=hp("transform"),this.isVisible=!1,this.threshold=.5,dt&&"IntersectionObserver"in window?(this.createObserver(),this.animateOut()):this.animateIn()}createObserver(){dt&&(this.observer=new window.IntersectionObserver((e,t)=>{e.forEach(n=>{!this.isVisible&&n.isIntersecting?(this.animateIn(),this.repeat&&t.unobserve(n.target)):this.animateOut()})},{root:null,rootMargin:"0px",threshold:this.threshold}).observe(this.target))}animateIn(){this.isVisible=!0}animateOut(){this.isVisible=!1}}class fp extends fo{constructor({element:e,options:t={}}){const n=[],i=dt?e.querySelectorAll("h1, h2, p"):[];if(i.length===0){Yn({element:e}),Yn({element:e});const s=dt?e.querySelectorAll("span span"):[];n.push(...s)}i.length!==0&&i.forEach(s=>{Yn({element:s}),Yn({element:s});const o=dt?s.querySelectorAll("span span"):[];n.push(...o)}),super({element:e,elements:{lines:n}}),this.options=Object.assign({},uo,t),this.repeat=this.options.once,this.threshold=this.options.threshold,this.onResize(),dt&&"IntersectionObserver"in window&&this.animateOut()}addStyles(e,t){e.style.transition=`transform ${this.options.duration}ms ${t*this.options.stagger}ms ${this.options.easing}, opacity ${this.options.fadeDuration}ms ${t*this.options.stagger}ms ${this.options.fadeEasing}`,e.style.transformOrigin=this.options.transformOrigin?this.options.transformOrigin:"center center",e.style[this.transformPrefix]="translateY(0) scale(1) rotate(0)",this.options.fade&&(e.style.opacity="1")}animateIn(){super.animateIn(),!(typeof this.lines>"u")&&(typeof this.lines=="object"?Object.keys(this.lines).forEach((e,t)=>{this.lines[e].forEach(n=>{this.addStyles(n,t)})}):this.lines.forEach((e,t)=>{e.forEach(n=>{this.addStyles(n,t)})}))}animateOut(){super.animateOut(),!(typeof this.lines>"u")&&(typeof this.lines=="object"?Object.keys(this.lines).forEach(e=>{this.lines[e].forEach(t=>{t.style[this.transformPrefix]=`translateY(${this.options.reveal?`${this.options.top?"-":""}150%`:"0%"})  scale(${this.options.scale}) rotate(${this.options.rotation}deg)`,this.options.fade&&(t.style.opacity="0")})}):this.lines.forEach(e=>{e.forEach(t=>{t.style[this.transformPrefix]=`translateY(${this.options.reveal?`${this.options.top?"-":""}150%`:"0%"})  scale(${this.options.scale}) rotate(${this.options.rotation}deg)`,this.options.fade&&(t.style.opacity="0")})}))}onResize(){this.lines=co(this.elements.lines)}onRefresh(){this.onResize()}}const Pa=["H1","H2","H3","H4","H5","H6"];class pp extends fo{constructor({element:e,options:t={}}){const n=[],i=[],s=dt?e.querySelectorAll("h1, h2, p"):[];if(Pa.includes(e.tagName))s.length===0&&(Yn({element:e}),(dt?e.querySelectorAll("span"):[]).forEach(a=>{a.classList.add("word"),n.push(a)})),s.length!==0&&s.forEach(o=>{Yn({element:o}),(dt?o.querySelectorAll("span"):[]).forEach(c=>{c.classList.add("word"),n.push(c)})}),n.forEach(o=>{let a="";o.innerText.split("").map(h=>a+=h==" "?"<span class='gap'></span>":`<span class='char'>${h}</span>`),o.innerHTML=a;const l=dt?o.querySelectorAll("span"):[];i.push(...l)}),i.forEach((o,a)=>{o.setAttribute("data-char-index",a+1)}),e.classList.add("textify-title");else throw new Error("Textify.js: The target element must be a heading tag.");super({element:e,elements:{words:n,chars:i}}),Pa.includes(e.tagName)&&(this.options=Object.assign({},ho,t),this.repeat=this.options.once,this.threshold=this.options.threshold,this.onResize(),dt&&"IntersectionObserver"in window&&this.animateOut())}animateIn(){super.animateIn(),!(typeof this.lines>"u")&&this.elements.chars.forEach((e,t)=>{e.style.transition=`transform ${this.options.duration}ms ${t*this.options.stagger}ms ${this.options.easing}, opacity ${this.options.fadeDuration}ms ${t*this.options.stagger}ms ${this.options.fadeEasing}`,e.style.transformOrigin=this.options.transformOrigin?this.options.transformOrigin:"center center",e.style[this.transformPrefix]="translateY(0) rotate(0) scale(1)",this.options.fade&&(e.style.opacity=1)})}animateOut(){super.animateOut(),!(typeof this.lines>"u")&&this.elements.chars.forEach(e=>{e.style[this.transformPrefix]=`translateY(${this.options.reveal?`${this.options.top?"-":""}150%`:"0%"}) rotate(${this.options.rotation}deg) scale(${this.options.scale})`,this.options.fade&&(e.style.opacity=0)})}onResize(){this.lines=co(this.elements.words)}onRefresh(){this.onResize()}}class po{constructor(e={}){if(!e.easing)e.easing=Tt("default");else try{e.easing=Tt(e.easing)}catch(i){throw new Error(i)}if(!e.fadeEasing)e.fadeEasing=Tt("default");else try{e.fadeEasing=Tt(e.fadeEasing)}catch(i){throw new Error(i)}const t=Object.assign({},ho,e),n=e.selector?e.selector:"[data-textify-title]";dt&&(this.elements=document.querySelectorAll(n),this.animations=lo(this.elements,i=>new pp({element:i,options:t})),this.events())}events(){window.addEventListener("resize",this.onResize.bind(this))}show(){this.animations.forEach(e=>{e.animateIn()})}hide(){this.animations.forEach(e=>{e.animateOut()})}onResize(){this.animations.forEach(e=>{e.onResize&&e.onResize()})}onRefresh(){this.animations.forEach(e=>{e.onRefresh&&e.onRefresh()})}}class mo{constructor(e={}){if(!e.easing)e.easing=Tt("default");else try{e.easing=Tt(e.easing)}catch(i){throw new Error(i)}if(!e.fadeEasing)e.fadeEasing=Tt("default");else try{e.fadeEasing=Tt(e.fadeEasing)}catch(i){throw new Error(i)}const t=Object.assign({},uo,e),n=e.selector?e.selector:"[data-textify]";if(dt){if(!document.querySelector(n))throw new Error("No element found with selector: "+n);this.elements=document.querySelectorAll(n),this.animations=lo(this.elements,i=>new fp({element:i,options:t})),this.elements.forEach(i=>{i.querySelectorAll("span").forEach(o=>{o.style.display="inline-block",o.style.overflow="hidden",o.style.verticalAlign="top",o.style.transformOrigin="center"})}),this.events()}}events(){window.addEventListener("resize",this.onResize.bind(this))}show(){this.animations.forEach(e=>{e.animateIn()})}hide(){this.animations.forEach(e=>{e.animateOut()})}onResize(){this.animations.forEach(e=>{e.onResize&&e.onResize()})}onRefresh(){this.animations.forEach(e=>{e.onRefresh&&e.onRefresh()})}}const mp={Textify:mo,TextifyTitle:po};dt&&(window.Textify=mo,window.TextifyTitle=po);const gp={class:"about-wrap"},_p={class:"content-wrap"},vp={class:"title text-64 mb-24"},xp={class:"paragraph"},Mp={class:"about-tech"},Sp=["src"],yp=es({__name:"index",setup(r){const{TextifyTitle:e,Textify:t}=mp,n=wo([{svg:Tn("common/JavaScript.svg"),link:"https://js.irg/"},{svg:Tn("common/TypeScript.svg"),link:"https://typescriptlang.org/"},{svg:Tn("common/HTML.svg")},{svg:Tn("common/CSS.svg")},{svg:Tn("common/Rust.svg"),link:"https://rust-lang.org/"},{svg:Tn("common/Python.svg"),link:"https://python.org/"}]);return Jr(()=>{new e({selector:".title",duration:400,stagger:40,fade:!0,top:!1,reveal:!0,once:!1,rotation:0,scale:1,easing:"linear",fadeEasing:"backOut",fadeDuration:1e3,threshold:1,transformOrigin:"center center"}),new t({selector:".paragraph",duration:2e3,stagger:100,fade:!0,top:!1,once:!1,rotation:0,scale:.75,easing:"easeOut",fadeEasing:"back"}),op({targets:".top",onShown:function(i){i.classList.remove("animate__fadeOutDown"),i.offsetWidth,i.classList.add("animate__fadeInUp")},onHidden:function(i){i.classList.remove("animate__fadeInUp"),i.offsetWidth,i.classList.add("animate__fadeOutDown")}})}),(i,s)=>(Ut(),Nt("section",gp,[Et("div",_p,[Et("h1",vp,ji(i.$p("About")),1),Et("p",xp,ji(i.$p(`Hello everyone! I'm Qifan Zhuang, a software developer from China. Although I mainly
        write JS/TS, HTML/CSS and Python, I actually use low-level languages like Rust as well. Other than programming, I
        like to watch anime and writing.`)),1)]),Et("ul",Mp,[(Ut(!0),Nt(Ki,null,Qr(fi(n),(o,a)=>(Ut(),Nt("li",{class:"tech-item mouseTarget",key:a},[Et("img",{src:o.svg,class:"cursor-scale item-svg top animate__animated"},null,8,Sp)]))),128))])]))}});const bp=_i(yp,[["__scopeId","data-v-732b6015"]]),wp={class:"home-wrap",id:"header","data-scroll-container":""},Ep=es({__name:"index",setup(r){const e=Kr(),{welcoming:t}=Eo(e);return(n,i)=>{const s=Do;return Ut(),Nt(Ki,null,[To(Yi(s,null,null,512),[[Ao,fi(t)]]),Et("main",wp,[Yi(Qf),Yi(bp)])],64)}}});const Ap=_i(Ep,[["__scopeId","data-v-e4c0954d"]]);export{Ap as default};
