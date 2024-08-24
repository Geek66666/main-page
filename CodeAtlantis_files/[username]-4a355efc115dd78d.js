(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[280],{3037:function(e,t,r){"use strict";var n,a=r(5271);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}t.Z=function(e){return a.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"1.8 1.8 20.4 20.4"},e),n||(n=a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.2,d:"M3 12h18m0 0-7-7m7 7-7 7"})),">")}},6980:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[username]",function(){return r(4809)}])},6727:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(9849),a=r(5271),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"}}]},name:"plus-circle",theme:"filled"},l=r(6837),i=a.forwardRef(function(e,t){return a.createElement(l.Z,(0,n.Z)({},e,{ref:t,icon:s}))})},7408:function(e,t,r){"use strict";r.d(t,{dV:function(){return c},kK:function(){return o}});var n=r(2676),a=r(6344),s=r.n(a),l=r(2165),i=r(800);let c=e=>{let{code:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{title:t}),(0,n.jsxs)("div",{className:"flex h-[100svh] flex-col items-center justify-center pb-[10vh]",children:[(0,n.jsx)("h1",{className:"mb-[24px] text-9xl font-semibold",children:t}),(0,n.jsxs)(s(),{className:"flex items-center text-[18px] font-medium",href:"/",children:["Back to →",(0,n.jsx)(i.Z,{className:"ml-[10px]"}),"Kee"]})]})]})},o=e=>{let{res:t,err:r}=e;return{errCode:t?t.statusCode:r?r.statusCode:404}};t.ZP=c},2556:function(e,t,r){"use strict";var n=r(2676),a=r(3617),s=r(7154),l=r(5271),i=r(1959),c=r(7346),o=r(6277),u=r(909);let d=(0,l.memo)(e=>{let{queryName:t}=e,{username:r}=u.default,l=(0,s.useRouter)(),i=(0,o.Z)("GET /check",{auto:!0,params:{username:t}});return i.loading?(0,n.jsx)(c.Z,{className:"!relative ml-[12px]"}):i.data?i.data.is_available?r?(0,n.jsx)("span",{children:"not found \uD83D\uDD16"}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:"is available \uD83E\uDD33"}),(0,n.jsx)(a.ZP,{className:"!ml-[16px]",type:"primary",onClick:async()=>{await l.push("/home"),u.default.goSignup(t)},children:"Get it →"})]}):(0,n.jsx)("span",{children:"is not available \uD83E\uDDA6"}):(0,n.jsx)("span",{children:"oops! ❌"})}),m={error:"oops! ❌",unavailable:"is not available \uD83E\uDDA6",building:"is under building \uD83E\uDEB5",signup:null},p=(0,l.memo)(e=>{let{queryName:t,type:r}=e;return(0,n.jsx)(i.Z,{seoTitle:"error"===r?"Error":"404",className:"no-user",noFooter:!0,children:(0,n.jsxs)("div",{className:"launch-box !m-auto w-fit -translate-y-[7vh] [&>div:first-child+*]:ml-auto [&>span]:ml-[12px] [&>span]:mt-[4px] [&>span]:whitespace-nowrap [&>span]:text-[14px] [&>span]:text-black/80",children:[(0,n.jsxs)("div",{children:["kee.so",(0,n.jsx)("i",{children:"/"}),t]}),"signup"!==r?(0,n.jsx)("span",{children:m[r]}):(0,n.jsx)(d,{queryName:t})]})})});t.Z=p},8619:function(e,t,r){"use strict";var n=r(2676),a=r(5271),s=r(5029),l=r(5489),i=r(7051),c=r(5406);let o=(0,a.memo)(e=>{let t,{bg_page:r,bg_noise:o,bg_blur:u,isPage:d=!0}=e,m=(0,c.Z)(r),p="",x="",h=(0,a.useRef)(null),f=(0,a.useRef)({});m?(x=(0,i.Z)({url:r,width:u?200:1920,blur:!!u}),d||x in f.current?(t=(0,l.Z)({url:x,prefix:"#e1e2e3"}),p=u?"after:backdrop-blur-[--blur]":""):(t=(0,l.Z)({url:r,width:50,prefix:"#e1e2e3"}),p="after:backdrop-blur-[--blur]")):t=(0,s.Jm)(r,"silver");let[,g]=(0,a.useState)(!1);return(0,n.jsx)("div",{ref:h,className:"air-bg fixed inset-0 -z-20 before:absolute before:inset-0 before:duration-300 before:[background:--bg-page] after:absolute after:inset-0 ".concat(p," ").concat(o?"after:[background-image:--bg-noise]":""),style:{"--bg-page":t},children:m&&!d&&!(x in f.current)&&(0,n.jsx)("img",{className:"hidden",src:x,onLoad:()=>{f.current[x]=!0,g(e=>!e)},alt:""})})});t.Z=o},1817:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(2676),a=r(6727),s=r(5271),l=r(9435),i=r(9595),c=r(4056),o=r(9161),u=r(7024),d=r(7618);let m=e=>{let{value:t,onChange:r,children:a}=e,m=(0,s.useRef)([]),p=(0,s.useRef)(""),[x,h]=(0,s.useState)(null),f=(0,d.cn)(x?"pointer-events-none":""),g=(0,s.useMemo)(()=>{let e=!!t&&(t.startsWith("emoji:")||m.current.includes(t));return e||(p.current=t),!!p.current&&e},[t]),v=(0,s.useRef)(r);v.current=r;let b=(0,s.useCallback)(e=>{var t;null===(t=v.current)||void 0===t||t.call(v,e)},[]);return(0,n.jsx)(i.Z,{uploadingClass:f,title:"Avatar",extra:(0,n.jsx)(c.Z,{showRemove:g,onClick:()=>{var e;return null===(e=v.current)||void 0===e?void 0:e.call(v,p.current)}}),contentClass:(0,d.cn)("!p-0"),content:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"px-[16px] py-[10px]",children:[m.current.length>0&&(0,n.jsx)(u.Z,{className:"mb-2",options:m.current,value:t,onChange:v.current,uploadingEl:x,imgWidth:200}),(0,n.jsx)(o.Z,{onChange:(e,t)=>{var r;m.current=e,null===(r=v.current)||void 0===r||r.call(v,e[0]||p.current),h(t)},children:"Upload Avatar"})]}),(0,n.jsx)(l.Z,{onChange:b})]}),children:a(x)})};var p=e=>{let{onChange:t,children:r}=e;return t?(0,n.jsx)(m,{...e}):r()},x=r(4884),h=r(4115),f=r(909),g=r(7051);let v="Welcome to my home";var b=(0,s.memo)(e=>{let{username:t,avatar_url:r,nickname:s,bio_info:l,text_center:i,onAvatarChange:c}=e,{isPhoneView:o}=f.default,u=!c,m=o||u,b=r.startsWith("emoji:");return(0,n.jsxs)("div",{className:"profile mb-[calc(var(--grid-gap)*1.5)] flex ".concat(i?"justify-center pr-[--avatar-size]":"pr-[--40]"),style:{"--avatar-size":"calc(var(--grid-size)*1.1)"},children:[(0,n.jsx)(p,{value:r,onChange:c,children:e=>(0,n.jsxs)("div",{className:"picker-bg relative flex h-[--avatar-size] w-[--avatar-size] shrink-0 items-center justify-center rounded-full bg-white/80 backdrop-blur-[--blur] ![--picker-bg-color:rgb(0_0_0/0.2)] [box-shadow:inset_0_0_var(--1)_rgb(0_0_0/0.24)] [&_img]:h-full [&_img]:w-full [&_img]:rounded-full [&_img]:object-cover",style:{"--emoji-size":"var(--64)"},children:[b?(0,n.jsx)(x.Z,{icon:r}):(0,n.jsxs)(n.Fragment,{children:[r?(0,n.jsx)("img",{src:(0,g.Z)({url:r,width:200}),alt:""}):(0,n.jsx)("div",{className:"group relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-black/[6%] to-black/[3%]",children:(0,n.jsx)(a.Z,{className:"text-[--24] opacity-30 duration-200 group-hover:opacity-60",hidden:m})}),e]}),(0,n.jsx)("div",{className:"bg light pointer-events-none absolute inset-0 z-30 rounded-[inherit] duration-300"})]})}),(0,n.jsxs)("div",{className:"flex-1 px-[--grid-gap]",children:[(0,n.jsx)(h.Z,{className:"title mt-[--14]",selfClass:(0,d.cn)("font-semibold [--font-size:--36] [font-style:--title-style]"),name:"nickname",rules:["max=240"],prompt:t,display:u?s||t:void 0,onChange:()=>f.default.checkChanged()}),(0,n.jsx)(h.Z,{className:"desc mt-[--6]",selfClass:(0,d.cn)("opacity-60 [--font-size:--17] [--line-height:1.5]"),name:"bio_info",rules:["max=240"],prompt:v,display:u?l||v:void 0,onChange:()=>f.default.checkChanged()})]})]})})},9871:function(e,t,r){"use strict";var n=r(2676),a=r(6344),s=r.n(a),l=r(5271),i=r(800),c=r(909);let o=(0,l.memo)(e=>{let{isPage:t=!0}=e,{isPhoneView:r}=c.default;return r||t?(0,n.jsx)("div",{className:"brand-mark mx-auto mt-auto pt-[--header]",children:(0,n.jsxs)(s(),{className:"user-btn pl-[11px] pr-[15px] [transition:300ms] hover:scale-[1.02]",href:"/",children:[(0,n.jsx)(i.Z,{size:24}),(0,n.jsx)("span",{className:"mt-[1px] text-[13px] font-medium",children:"Create your Kee"})]})}):null});t.Z=o},4809:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return D},default:function(){return z}});var n,a=r(2676),s=r(5271),l=r(7408),i=r(2556),c=r(51);r(1989);var o=r(583),u=r(5335),d=r(7154),m=r(1959),p=r(8619),x=r(1817),h=r(9871),f=r(7135),g=r(3037);function v(){return(v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var b=function(e){return s.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 1 24 24"},e),n||(n=s.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 14v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6M12 17V3m0 0L7 8.444M12 3l5 5.444"})))},j=r(5744);let k=[{key:"twitter",name:"X",getLink:e=>{let{title:t,url:r}=e;return"https://twitter.com/intent/tweet?text=".concat(t," - ").concat(r)}},{key:"facebook",name:"Facebook",getLink:e=>{let{url:t}=e;return"https://www.facebook.com/sharer.php?u=".concat(t)}},{key:"linkedin",name:"LinkedIn",getLink:e=>{let{url:t}=e;return"https://www.linkedin.com/sharing/share-offsite/?url=".concat(t)}},{key:"snapchat",name:"Snapchat",getLink:e=>{let{url:t}=e;return"https://www.snapchat.com/scan?attachmentUrl=".concat(t)}},{key:"whatsapp",name:"WhatsApp",getLink:e=>{let{title:t,url:r}=e;return"https://wa.me/?text=".concat(t," - ").concat(r)}},{key:"messenger",name:"Messenger",getLink:()=>"https://www.messenger.com/new"},{key:"email",name:"Email",getLink:e=>{let{title:t,url:r}=e;return"mailto:?subject=".concat(t,"&body=").concat(t," - ").concat(r)}}],w=(0,s.memo)(e=>{let{username:t}=e,r=(0,s.useRef)(null),n="https://kee.so/".concat(t);return(0,a.jsx)(f.Z,{trigger:"click",content:(0,a.jsxs)("div",{className:"flex flex-col gap-[3px] font-medium",children:[k.map(e=>{let{key:t,name:r,getLink:s}=e;return(0,a.jsxs)("a",{className:"flex items-center gap-[10px] rounded-[12px] p-[9px] hover:bg-black/5",href:s({title:"Check out this Kee!",url:n}),target:"_blank",children:[(0,a.jsx)("div",{className:"aspect-square w-[28px] rounded-[25%] shadow shadow-black/10 [background:#eee_var(--icon)_center/cover_no-repeat]",style:{"--icon":"url(https://img-sg.kee.so/widgets/".concat(t,".webp)")}}),"Share on ",r,(0,a.jsx)(g.Z,{className:"ml-auto w-[12px]"})]},t)}),(0,a.jsxs)("button",{className:"mt-[9px] flex items-center rounded-[12px] p-[11px] [border:1px_solid_#eee] hover:bg-black/5",onClick:()=>{(0,j.Z)(n),r.current.innerText="Copied!",setTimeout(()=>{r.current.innerText="Copy"},1e3)},children:[(0,a.jsxs)("span",{className:"max-w-[240px] truncate tracking-[0.5px]",children:["kee.so/",t]}),(0,a.jsx)("span",{ref:r,className:"ml-[8px] block w-[72px] text-right font-normal opacity-60 [font-size:12px]",children:"Copy"})]})]}),children:(0,a.jsx)("a",{className:"user-btn absolute right-[--grid-gap] top-[calc(var(--header)+var(--20))] z-10",children:(0,a.jsx)(b,{className:"w-[16px]"})})})});var _=r(5029),y=r(909),N=r(8758),Z=r(7939);let C=(0,s.memo)(e=>{let{data:t,index:r,theme_name:n,bg_page:s,text_color:l,text_center:i,text_italic:c}=e,{grid_id:o,widget:u,row:d,col:m,bg:p,icon:x,image:h,title:f,desc:g,url:v,url_on:b,title_type:j,title_font:k,title_weight:w}=t,{socialHost:_,descText:y}=Z.wo[u],C=!!_&&!y;return(0,a.jsx)(N.Z,{widget:u,row:d,col:m,bg:p,icon:x,image:h,title:f,desc:C&&(null==g?void 0:g.startsWith("@"))?g.slice(1):g,url:C&&(null==v?void 0:v.startsWith("@"))?v.slice(1):v,url_on:b,title_type:j,title_font:k,title_weight:w,theme_name:n,bg_page:s,text_color:l,text_center:i,text_italic:c,index:r},o)}),E=(0,s.memo)(e=>{let{user:t}=e,{username:r}=y.default,n=(0,d.useRouter)(),l=(0,s.useRef)(null),{username:i,avatar_url:c,nickname:o,bio_info:u,theme_name:f,grids:g,bg_page:v,bg_noise:b,bg_blur:j,text_color:k,text_center:N,text_italic:Z}=t,E=_.F2[f];return(0,a.jsxs)(m.Z,{seoTitle:o||i||"Kee",seoClean:!i,seoImage:i&&"https://kee.so/api/og/".concat(i),className:"user air-plane [color:--text-color]",style:{"--text-color":(0,_.Jm)(k,"black"),"--text-align":N?"center":"left","--title-style":Z?"italic":"normal"},noHeader:!0,noMain:!0,noFooter:!0,children:[r===i&&(0,a.jsxs)("a",{className:"fixed right-[12px] top-[12px] z-10 flex h-[30px] select-none items-center gap-[4px] rounded-[8px] bg-neutral-100/30 px-[10px] shadow backdrop-blur-[--blur]",onClick:()=>{var e;null===(e=l.current)||void 0===e||e.classList.add("active"),n.push("/home")},children:["Edit",(0,a.jsx)("span",{className:"text-[12px] [&.active]:animate-spin",ref:l,children:"∴"})]}),(0,a.jsxs)("div",{className:"air-center",children:[(0,a.jsx)(x.Z,{username:i,avatar_url:c,nickname:o,bio_info:u,text_center:N}),(0,a.jsx)(w,{username:i}),(0,a.jsx)("div",{className:"grid-list",children:g.map((e,t)=>(0,a.jsx)(C,{data:e,index:t,theme_name:E,bg_page:v,text_color:k,text_center:N,text_italic:Z},e.grid_id))}),(0,a.jsx)(h.Z,{})]}),(0,a.jsx)(p.Z,{bg_page:v,bg_noise:b,bg_blur:j})]})});var z=(0,s.memo)(e=>{let{queryName:t,userData:r}=e;return t?r?r.username?r.status!==o.J.PUBLISHED?(0,a.jsx)(i.Z,{queryName:t,type:"building"}):(0,a.jsx)(E,{user:{...c.$y,...(0,u.e)(r),...(0,u.p)(r.theme)}}):(0,a.jsx)(i.Z,{queryName:t,type:"error"}):(0,a.jsx)(i.Z,{queryName:t,type:"signup"}):(0,a.jsx)(l.dV,{code:404})}),D=!0},5744:function(e,t){"use strict";t.Z=e=>{navigator.clipboard.writeText(e)}}},function(e){e.O(0,[991,714,88,850,937,959,758,888,774,179],function(){return e(e.s=6980)}),_N_E=e.O()}]);