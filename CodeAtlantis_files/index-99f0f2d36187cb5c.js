(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3892:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4975)}])},902:function(e,a,s){"use strict";s.d(a,{Z:function(){return N}});var t=s(2676),r=s(1344),l=s(3617),i=s(7154),c=s(5271),n=s(4153),o=s(317),d=s(6277),x=s(8224),m=s(909),u=s(583),p=s(7618),g=s(804),f=s(5310),h=s(1989);let b=(0,c.memo)(e=>{let{form:a}=e,s=(0,x.Z)(),r=(0,c.useRef)(null);(0,c.useEffect)(()=>{var e;null===(e=r.current)||void 0===e||e.focus()},[]);let i=(0,d.Z)("POST /auth/login"),n=async()=>{let{username:e,email:t,password:r}=await a.validateFields(),l=await i.run(t?{email:t,password:r}:{username:e,password:r});m.default.setUserData(l),s.success("Welcome Back \uD83C\uDF7E")},[o,u]=(0,c.useState)(!1),p=(0,c.useRef)(null);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g.ro,{ref:r,label:"Password",name:"password",validateTrigger:[],rules:["required",h.I9],placeholder:"Password",autoComplete:"current-password",onPressEnter:()=>{var e;null===(e=p.current)||void 0===e||e.click()},extra:(0,t.jsx)("div",{className:"flex justify-end",children:(0,t.jsx)("a",{onClick:()=>u(!0),children:"Forgot Password?"})})}),(0,t.jsx)(l.ZP,{ref:p,type:"primary",onClick:n,loading:i.loading,children:"Log in →"}),(0,t.jsx)(f.Z,{open:o,setOpen:u,type:"reset",submitApi:"POST /auth/reset_password",getParams:e=>{let{email:a,verify_code:s,new_password:t}=e;return{email:a,new_password:t,verify_code:s}}})]})});var j=s(6344),y=s.n(j),v=s(3342);let w=(0,c.memo)(e=>{let{form:a}=e,{status:s}=m.default,r=(0,x.Z)(),[i,o]=(0,c.useState)(null),f=(0,c.useRef)(null),b=(0,c.useRef)(null);(0,c.useEffect)(()=>{var e;null===(e=f.current)||void 0===e||e.focus()},[]);let j=async()=>{var e;await a.validateFields(["email"]),null===(e=b.current)||void 0===e||e.focus()},w=(0,d.Z)("POST /auth/signup"),N=async()=>{let{username:e,email:s,password:t}=await a.validateFields(),r=await w.run({username:e,email:s,password:t});m.default.status=u.J.SIGNUP_EMAIL_WAIT,o(r)},k=async()=>{i.status=u.J.SIGNUP_EMAIL_WRONG,m.default.setUserData(i)},_=(0,d.Z)("POST /verify/send"),Z=(0,d.Z)("POST /auth/verify"),P=async()=>{let{verify_code:e}=await a.validateFields();await Z.run({verify_code:e}),i.status=u.J.VERIFIED,m.default.setUserData(i),r.success("Welcome to Kee \uD83D\uDC25")},E=(0,c.useRef)(null),S=()=>{var e;null===(e=E.current)||void 0===e||e.click()},T=(0,p.cn)(s===u.J.SIGNUP_EMAIL_WAIT?"pointer-events-none":"");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.Z,{ref:f,form:a,className:T,label:"Email",name:"email",placeholder:"Email",onPressEnter:j}),(0,t.jsx)(g.ro,{ref:b,className:T,label:"Password",name:"password",validateTrigger:[],rules:["required",h.Pu],placeholder:"Password",autoComplete:"off",onPressEnter:S}),i&&(0,t.jsx)(v.Z,{className:"mx-[8px]",apiSendCode:_,emailAddress:i.email,emailType:u.B.SIGNUP,onEmailWrong:k,onPressEnter:S}),(0,t.jsxs)(l.ZP,{ref:E,type:"primary",onClick:i?P:N,loading:w.loading||Z.loading,children:[i?"Home":"Sign up"," →"]}),!i&&(0,t.jsxs)("div",{className:"mt-[64px] text-[13px] text-black/40",children:["By clicking “Sign up →” above, you acknowledge that you have read and understood, and agree to Kee's"," ",(0,t.jsx)(y(),{className:"!text-black",href:"/terms",children:"Terms of Use"})," ","and"," ",(0,t.jsx)(y(),{className:"!text-black",href:"/privacy",children:"Privacy Policy"}),"."]})]})});var N=(0,c.memo)(e=>{let{isEmailLogin:a}=e,{isSignup:s,loginName:g,status:f}=m.default,h=(0,i.useRouter)(),{pathname:j}=h,y="/"===j;y&&null!==s&&(m.default.isSignup=null);let v=(0,x.Z)(),[N]=r.default.useForm();(0,c.useEffect)(()=>{g&&N.setFieldValue("username",g)},[N,g]);let[k,_]=(0,c.useState)(!1),Z=(0,d.Z)("GET /check"),P=async e=>{let{username:a}=e;_(!0);let{is_available:t}=await Z.run({username:a},{onError:()=>_(!1)});if(y&&await h.push("/home"),_(!1),null===s){m.default.isSignup=t,m.default.loginName=a;return}if(s){t?m.default.loginName=a:v.warning("".concat(a," - already exist"));return}t?v.warning("".concat(a," - not exist")):m.default.loginName=a},[E,S]=(0,c.useState)(""),T=async e=>{let{email:a}=e;S(a)},U=!y&&!!(a?E:g),z=(0,p.cn)(f===u.J.SIGNUP_EMAIL_WAIT?"pointer-events-none":"");return(0,t.jsxs)(r.default,{className:"auth-form",form:N,onFinish:a?T:P,children:[a?(0,t.jsx)(n.Z,{form:N,className:"launch-box upper-placeholder",label:"Email",name:"email",placeholder:"Email",onChange:()=>{S("")},suffix:!U&&(0,t.jsx)(l.ZP,{type:"primary",htmlType:"submit",children:"Launch →"})}):(0,t.jsx)(o.Z,{className:z,label:"name",name:"username",placeholder:"name",onChange:()=>{m.default.loginName=""},suffix:!U&&(0,t.jsx)(l.ZP,{type:"primary",htmlType:"submit",loading:k,children:"Launch →"})}),U&&(0,t.jsx)(t.Fragment,{children:s?(0,t.jsx)(w,{form:N}):(0,t.jsx)(b,{form:N})})]})})},4975:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return _}});var t=s(2676),r=s(3856),l=s(5312),i=s(6344),c=s.n(i),n=s(5271),o=s(1959),d=s(8758);s(3185);var x=s(3617),m=s(7154),u=s(902),p=s(7346),g=s(909);let f=(0,n.memo)(()=>{let{authLoading:e,username:a}=g.default,s=(0,m.useRouter)();return e?(0,t.jsx)(p.Z,{className:"launch-box !relative"}):a?(0,t.jsxs)("div",{className:"launch-box",children:[(0,t.jsxs)("div",{className:"flex items-center text-green-500",children:["kee.so",(0,t.jsx)("i",{children:"/"}),a,(0,t.jsx)("span",{className:"ml-[10px] mt-[3px] inline-block h-[12px] w-[12px] shrink-0 rounded-full bg-green-400"})]}),(0,t.jsx)(x.ZP,{type:"primary",onClick:()=>s.push("/home"),children:"Launch →"})]}):(0,t.jsx)(u.Z,{})}),h=[{color:"#2b69a4",x:2,y:2},{color:"#2bc1ff",x:1,y:1},{color:"#f73257",x:1,y:1},{color:"#ffddee",x:1,y:1},{color:"#ffbb22",x:1,y:1},{color:"#ff6535",x:1,y:1},{color:"#1dce5d",x:1,y:1},{color:"#ff6b00",x:2,y:2},{color:"#a937de",x:1,y:1},{color:"#027bc4",x:1,y:1},{color:"#fce2e1",x:2,y:2},{color:"#a69fcc",x:1,y:1},{color:"#7be09a",x:1,y:1},{color:"#f45d9a",x:1,y:1},{color:"#662ae3",x:1,y:1}],b=[{color:"#55a7c2",x:4,y:2},{color:"#64d8eb",x:2,y:2},{color:"#9584ff",x:1,y:1},{color:"#00c869",x:1,y:1},{color:"#cffcff",x:1,y:1},{color:"#b153e5",x:1,y:1},{color:"#df214e",x:1,y:1},{color:"#ccb05c",x:1,y:1},{color:"#00ce6b",x:2,y:2},{color:"#db51eb",x:1,y:1},{color:"#ec4bd9",x:1,y:1}],j=[{username:"macan",imgUrl:"https://img-sg.kee.so/00c49a89-2d98-4c04-8959-95c9663dec56/3b1805b80e11d0da9da6004e19ce9254.jpeg?x-oss-process=image/interlace,1/format,webp/resize,m_lfit,w_200"},{username:"thorxop",imgUrl:"https://img-sg.kee.so/2a950d33-ead4-4a18-9ce1-bd9d5afe20bd/64775b87d6aece0b5c1b1b479f60068b.jpg?x-oss-process=image/interlace,1/format,webp/resize,m_lfit,w_200"},{username:"olzz",imgUrl:"https://img-sg.kee.so/99891ef8-6360-4936-9ca1-52ec05d9e2f1/540085945589265ad440dec7eee7f8de.jpg?x-oss-process=image/interlace,1/format,webp/resize,m_lfit,w_200"},{username:"byewind",imgUrl:"https://img-sg.kee.so/6f34d423-fe37-4dc8-8e1d-1824cc1cf07c/a392e1f868606b7a009024eca28a856b.png?x-oss-process=image/interlace,1/format,webp/resize,m_lfit,w_200"},{username:"themisir",imgUrl:"https://img-sg.kee.so/c2fdd44d-4ceb-481c-ba40-6b396016fd15/6624cb0a3603d09d9b1fdd4d39462c11.jpeg?x-oss-process=image/interlace,1/format,webp/resize,m_lfit,w_200"},{username:"stevenrolph",imgUrl:"https://img-sg.kee.so/f0472cc2-8fec-4a21-97cf-6d76896ec238/bf43809037c32c677ce3ac3c4571da9d.jpg?x-oss-process=image/interlace,1/format,webp/resize,m_lfit,w_200"},{username:"islem",imgUrl:"https://img-sg.kee.so/a31eba95-f4c3-4952-9376-fd59ebb174b0/94ac86841d494717533163f4aadd97f4.jpeg?x-oss-process=image/interlace,1/format,webp/resize,m_lfit,w_200"},{username:"naoebemumcanal",imgUrl:"https://img-sg.kee.so/1500438b-f385-4369-8ee3-80f3e1e4164c/157366e92b9191d44d53effb42e1a1ce.png?x-oss-process=image/interlace,1/format,webp/resize,m_lfit,w_200"}],y=[{color:"#1d9bf0",text:"t"},{color:"#e300a3",text:"i"},{color:"#1a77f2",text:"f"},{color:"#ff0000",text:"y"},{color:"#24f4ee",text:"t"},{color:"#ec54a7",text:"d"},{color:"#1dce5d",text:"s"}],v=e=>{let{className:a="",scale:s=1.2,...r}=e;return(0,t.jsx)(l.E.div,{className:"cursor-grab ".concat(a),whileHover:{scale:s},whileDrag:{scale:s},transition:{duration:.2},drag:!0,dragSnapToOrigin:!0,dragTransition:{bounceStiffness:500},...r})},w=(0,n.memo)(e=>{let{className:a=""}=e;return(0,t.jsxs)("div",{className:"flex items-center [--app-row:1] ".concat(a),children:[(0,t.jsx)("div",{className:"aspect-square w-[calc(var(--app-size)*1.2)] rounded-full bg-white/60"}),(0,t.jsxs)("div",{className:"ml-[8px]",children:[(0,t.jsx)("div",{className:"h-[7px] w-[28px] rounded-full bg-white/20"}),(0,t.jsx)("div",{className:"mt-[8px] h-[7px] w-[48px] rounded-full bg-white/20"})]})]})}),N=(0,n.memo)(e=>{let{list:a}=e;return a.map(e=>{let{color:a,x:s,y:r}=e;return(0,t.jsx)("div",{style:{"--app-bg":a,"--app-col":s,"--app-row":r}},a)})}),k=(0,n.memo)(e=>{let{className:a="",list:s}=e;return(0,t.jsxs)("div",{className:"device aspect-[3/6.5] grid-cols-4 rounded-[calc(var(--app-size)*1.1)] px-[--space-x] py-[calc(var(--space-y)*1.8)] [--app-size:26px] [--device-width:8px] [--space-x:14px] [--space-y:17px] ".concat(a),children:[(0,t.jsx)(w,{className:"[--app-col:4]"}),(0,t.jsx)(N,{list:s})]})});var _=(0,n.memo)(e=>{let{className:a="",seoTitle:s}=e,l=(0,n.useRef)(null);return(0,t.jsxs)(o.Z,{className:"".concat(s?"":"index"," text-center ").concat(a),seoTitle:s,children:[(0,t.jsxs)("section",{className:"section",children:[(0,t.jsxs)("h1",{className:"relative z-10 my-[56px]",children:["Link in bio to ",(0,t.jsx)("span",{className:"opacity-20",children:"widgets"}),",",(0,t.jsx)("br",{}),"your ",(0,t.jsx)("span",{className:"opacity-20",children:"online"})," home screen.",(0,t.jsx)("br",{})]}),(0,t.jsx)(f,{}),(0,t.jsxs)("div",{className:"relative z-10 mt-[48px] font-medium leading-[1.6] max-md:text-[18px] md:text-[20px] [&_span]:opacity-50",children:["Create your home screen page,",(0,t.jsx)("br",{}),"choose in 3 themes: ",(0,t.jsx)("span",{children:"Apple"}),", ",(0,t.jsx)("span",{children:"Android"}),","," ",(0,t.jsx)("span",{children:"Windows"}),"."]})]}),(0,t.jsxs)("section",{className:"section -mx-[--grid-gap] max-lg:overflow-hidden",children:[(0,t.jsxs)("div",{className:"mx-auto mb-[120px] grid max-w-[calc(var(--air))] gap-[--grid-gap] rounded-[40px] bg-gradient-to-br from-[#4c032a] via-[#5c160a] to-[#05308e] p-[--grid-gap] [grid-template-columns:repeat(var(--grid-count),1fr)]",children:[(0,t.jsx)(d.Z,{widget:"twitter",desc:"_keeso",bg:"bgBase"}),(0,t.jsx)(d.Z,{widget:"instagram",desc:"nan.xiaobei",bg:"bgBase"}),(0,t.jsx)(d.Z,{widget:"github",desc:"nanxiaobei",bg:"bgBase"}),(0,t.jsx)(d.Z,{widget:"medium",desc:"nanxiaobei",bg:"bgBase"}),(0,t.jsx)(d.Z,{widget:"tiktok",desc:"nanxiaobei",bg:"bgBase"}),(0,t.jsx)(d.Z,{widget:"spotify",desc:"nanxiaobei",bg:"bgBase"})]}),(0,t.jsxs)("div",{className:"pointer-events-none flex h-[500px] justify-center lg:absolute  lg:inset-x-[2px] lg:top-[215px]",children:[(0,t.jsx)(k,{className:"pointer-events-auto absolute translate-x-[55%] rotate-[15deg] from-[#a7794f] to-[#645148] duration-200 hover:-translate-y-[10%] lg:right-0",list:b}),(0,t.jsx)(k,{className:"pointer-events-auto absolute -translate-x-[55%] -rotate-[15deg] from-[#81a0c9] to-[#7ea0ce] duration-200 hover:-translate-y-[10%] lg:left-0",list:h})]}),(0,t.jsxs)("h2",{className:"relative z-10",children:["Your"," ",(0,t.jsx)("span",{className:"highlight",children:"social links, URLs, photos, videos"}),",",(0,t.jsx)("br",{}),"design as ",(0,t.jsx)("span",{className:"highlight",children:"apps or widgets"})," on the page."]}),(0,t.jsx)("div",{className:"mt-[120px] flex flex-wrap justify-center gap-[24px] max-md:[--edge:6px] md:[--edge:8px]",children:j.map(e=>{let{username:a,imgUrl:s}=e;return(0,t.jsx)(r.Z,{color:"#a070e4",title:"kee.so/".concat(a),mouseEnterDelay:0,mouseLeaveDelay:0,children:(0,t.jsx)(c(),{className:"inline-flex items-center gap-[--edge] rounded-full bg-black/90 p-[--edge] leading-[1] tracking-[0.6px] !text-white/80 backdrop-blur-[--blur] hover:bg-[#a070e4] max-md:text-[16px] max-md:[--img:40px] md:text-[18px] md:[--img:64px]",href:"/".concat(a),target:"_blank",children:(0,t.jsx)("img",{className:"h-[--img] w-[--img] rounded-full object-cover",src:s,alt:""})},a)},a)})})]}),(0,t.jsxs)("section",{className:"section",children:[(0,t.jsxs)("h2",{children:["Your ",(0,t.jsx)("span",{className:"highlight",children:"podcasts, products, services"}),",",(0,t.jsx)("br",{}),"finally get the best way to showcase."]}),(0,t.jsx)("div",{ref:l,className:"mx-auto flex max-w-[680px] justify-between py-[64px] duration-200 [&.active+div>div]:text-black [&.active+div>div]:drop-shadow [&.active>div>div]:animate-bounce [&.active]:max-w-[360px] [&.active]:translate-y-[122px] [&.active]:scale-[50%]",children:y.map((e,a)=>{let{color:s,text:r}=e;return(0,t.jsx)(v,{style:{"--color":s,"--delay":"".concat((-.1*a).toFixed(1),"s")},children:(0,t.jsx)("div",{className:"aspect-square w-[48px] rounded-[12px] bg-[--color] px-[12px] py-[10px] text-right text-[20px] font-black leading-[0.8] text-white shadow ![animation-delay:--delay]",children:r})},s)})}),(0,t.jsx)("div",{className:"mx-auto flex h-[56px] w-[200px] cursor-pointer select-none items-center justify-center rounded-full bg-neutral-100/40 shadow shadow-black/10 backdrop-blur-[--blur]",onClick:()=>{var e;return null===(e=l.current)||void 0===e?void 0:e.classList.toggle("active")},children:(0,t.jsxs)("div",{className:"text-[18px] tracking-[1px] text-black/50 drop-shadow-md duration-200",children:["⚡️ kee.so",(0,t.jsx)("span",{className:"mx-[1px] scale-y-90",children:"/"}),"you"]})})]}),(0,t.jsxs)("section",{className:"section",children:[(0,t.jsxs)("h2",{children:["Your page, your home screen,",(0,t.jsx)("br",{}),"elegant, striking, easy to customize,",(0,t.jsx)("br",{}),"fully ",(0,t.jsx)("span",{className:"highlight",children:"designed by you"}),"."]}),(0,t.jsxs)("div",{className:"mt-[60px] flex justify-between gap-[24px] max-md:flex-col max-md:items-center",children:[(0,t.jsx)(d.Z,{className:"md:origin-top-right md:-rotate-[8deg]",widget:"twitter",desc:"_keeso"}),(0,t.jsx)(d.Z,{widget:"instagram",desc:"nan.xiaobei"}),(0,t.jsx)(d.Z,{className:"md:origin-top-left md:rotate-[8deg]",widget:"tiktok",desc:"nanxiaobei"})]})]})]})})},3185:function(){}},function(e){e.O(0,[991,714,88,850,937,959,758,888,774,179],function(){return e(e.s=3892)}),_N_E=e.O()}]);