(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6996:function(e,t,s){Promise.resolve().then(s.bind(s,5949))},2835:function(e,t,s){"use strict";s.d(t,{cn:function(){return r}});var a=s(1994),n=s(3335);function r(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,n.m6)((0,a.W)(t))}},5949:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return eb}});var a=s(7437),n=s(2835);function r(e){let{className:t,children:s,reverse:r,duration:i=20,delay:l=10,radius:o=50,path:c=!0}=e;return(0,a.jsxs)(a.Fragment,{children:[c&&(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:"pointer-events-none absolute inset-0 size-full",children:(0,a.jsx)("circle",{className:"stroke-black/10 stroke-1 dark:stroke-white/10",cx:"50%",cy:"50%",r:o,fill:"none"})}),(0,a.jsx)("div",{style:{"--duration":i,"--radius":o,"--delay":-l},className:(0,n.cn)("absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border  [animation-delay:calc(var(--delay)*1000ms)] bg-transparent ".concat(r?"[animation-direction:reverse]":""),t),children:s})]})}var i=s(2265),l=s(7584);s(1614);var o=s(8664);s(2648);let c=(0,i.createContext)(void 0),d=e=>{let{children:t,className:s,containerClassName:r}=e,l=(0,i.useRef)(null),[o,d]=(0,i.useState)(!1);return(0,a.jsx)(c.Provider,{value:[o,d],children:(0,a.jsx)("div",{className:(0,n.cn)("py-20 flex items-center justify-center",r),style:{perspective:"1000px",pointerEvents:"auto"},children:(0,a.jsx)("div",{ref:l,onMouseEnter:e=>{if(d(!0),!l.current)return},onMouseMove:e=>{if(!l.current)return;let{left:t,top:s,width:a,height:n}=l.current.getBoundingClientRect(),r=(e.clientX-t-a/2)/25,i=(e.clientY-s-n/2)/25;console.log("rotateX: ".concat(i,", rotateY: ").concat(r)),l.current.style.transform="rotateY(".concat(r,"deg) rotateX(").concat(i,"deg)")},onMouseLeave:e=>{l.current&&(d(!1),l.current.style.transform="rotateY(0deg) rotateX(0deg)")},className:(0,n.cn)("flex items-center justify-center relative transition-all duration-200 ease-linear",s),style:{transformStyle:"preserve-3d",pointerEvents:"auto"},children:t})})})},m=e=>{let{children:t,className:s}=e;return(0,a.jsx)("div",{className:(0,n.cn)("h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",s),children:t})},x=e=>{let{as:t="div",children:s,className:r,translateX:l=0,translateY:o=0,translateZ:c=0,rotateX:d=0,rotateY:m=0,rotateZ:x=0,...p}=e,f=(0,i.useRef)(null),[h]=u();(0,i.useEffect)(()=>{g()},[h]);let g=()=>{f.current&&(h?f.current.style.transform="translateX(".concat(l,"px) translateY(").concat(o,"px) translateZ(").concat(c,"px) rotateX(").concat(d,"deg) rotateY(").concat(m,"deg) rotateZ(").concat(x,"deg)"):f.current.style.transform="translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)")};return(0,a.jsx)(t,{ref:f,className:(0,n.cn)("w-fit transition duration-200 ease-linear",r),...p,children:s})},u=()=>{let e=(0,i.useContext)(c);if(void 0===e)throw Error("useMouseEnter must be used within a MouseEnterProvider");return e};var p=s(1906),f=s(5447),h=s(9212),g=s(5318),v=s(3812),b=s(8938),y=s(4506);let j=(e,t,s)=>{let a=t-e;return((s-e)%a+a)%a+e};function w(e){let{children:t,baseVelocity:s=100,...n}=e,r=(0,p.c)(0),{scrollY:l}=(0,f.v)(),o=(0,h.T)(l),c=(0,g.q)(o,{damping:50,stiffness:400}),d=(0,v.H)(c,[0,1e3],[0,5],{clamp:!1}),[m,x]=(0,i.useState)(1),u=(0,i.useRef)(null),w=(0,i.useRef)(null);(0,i.useEffect)(()=>{let e=()=>{u.current&&w.current&&x(Math.ceil(u.current.offsetWidth/w.current.offsetWidth)+2)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]);let N=(0,v.H)(r,e=>"".concat(j(-100/m,0,e),"%")),k=i.useRef(1);return(0,b.p)((e,t)=>{let a=k.current*s*(t/1e3);0>d.get()?k.current=-1:d.get()>0&&(k.current=1),a+=k.current*a*d.get(),r.set(r.get()+a)}),(0,a.jsx)("div",{ref:u,className:"w-full overflow-hidden whitespace-nowrap",...n,children:(0,a.jsx)(y.E.div,{className:"inline-block",style:{x:N},children:Array.from({length:m}).map((e,s)=>(0,a.jsxs)("span",{ref:0===s?w:null,children:[t," "]},s))})})}function N(e){let{defaultVelocity:t=5,numRows:s=2,children:r,className:i,...l}=e;return(0,a.jsx)("div",{className:(0,n.cn)("relative w-full text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem]",i),...l,children:Array.from({length:s}).map((e,s)=>(0,a.jsx)(w,{baseVelocity:t*(s%2==0?1:-1),children:r},s))})}var k=s(8614);let E=e=>{let{words:t,duration:s=2e3,className:r,color:l=""}=e,[o,c]=(0,i.useState)(t[0]),[d,m]=(0,i.useState)(!1),x=(0,i.useCallback)(()=>{c(t[t.indexOf(o)+1]||t[0]),m(!0)},[o,t]);return(0,i.useEffect)(()=>{d||setTimeout(()=>{x()},s)},[d,s,x]),(0,a.jsx)(k.M,{onExitComplete:()=>{m(!1)},children:(0,a.jsx)(y.E.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:10},exit:{opacity:0,y:-40,x:40,filter:"blur(8px)",scale:2,position:"absolute"},className:(0,n.cn)("z-10 inline-block relative text-left px-2",r),style:{color:l},children:o.split(" ").map((e,t)=>(0,a.jsxs)(y.E.span,{initial:{opacity:0,y:10,filter:"blur(8px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},transition:{delay:.3*t,duration:.3},className:"inline-block whitespace-nowrap",children:[e.split("").map((s,n)=>(0,a.jsx)(y.E.span,{initial:{opacity:0,y:10,filter:"blur(8px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},transition:{delay:.3*t+.05*n,duration:.2},className:"inline-block",children:s},e+n)),(0,a.jsx)("span",{className:"inline-block",children:"\xa0"})]},e+t))},o)})};function C(){let{ref:e,inView:t}=(0,o.YD)({threshold:.4,rootMargin:"-100px 0px"}),{setSectionInView:s}=(0,l.P)();(0,i.useEffect)(()=>{t&&s("me")},[t,s]);let c=[{icon:(0,a.jsx)(S.badminton,{}),delay:25,radius:280},{icon:(0,a.jsx)(S.programming,{}),delay:15,radius:280},{icon:(0,a.jsx)(S.guitar,{}),delay:10,radius:280}],u=[{icon:(0,a.jsx)(S.W_LOGO,{}),delay:15,radius:330},{icon:(0,a.jsx)(S.wuCut,{}),delay:10,radius:330}];return(0,a.jsx)("section",{ref:e,id:"me",className:"relative overflow-visible mt-12 sm:mt-16 md:mt-[50px] px-6 py-4 md:py-10 lg:py-12 flex flex-col lg:items-center lg:flex-row justify-between rounded-2xl",children:(0,a.jsxs)("div",{className:"relative flex h-[900px] w-full flex-col items-center justify-center overflow-visible rounded-lg bg-background md:shadow-orange-50",children:[(0,a.jsx)(d,{containerClassName:(0,n.cn)("mt-0","w-[400px] h-[450px]","ml-[20px]","mt-[20px]","flex items-start justify-start p-4 relative card-container"),children:(0,a.jsxs)(m,{className:(0,n.cn)("mt-0","w-[350px] h-[400px] bg-[#DEB1CB]/90 shadow-lg rounded-lg","flex items-start justify-start p-4 relative card-body"),children:[(0,a.jsx)(x,{rotateX:5,rotateY:5,translateZ:60,className:"text-left font-bold text-[#DFF8EB]",children:"My name is:"}),(0,a.jsx)(x,{rotateX:5,rotateY:5,translateZ:60,children:(0,a.jsxs)("div",{className:"flex text-5xl font-bold font-kumbh relative z-10",style:{position:"absolute",top:"70px",left:"-20px",color:"#280003"},children:[(0,a.jsx)(E,{words:["Zongze Wu","吴宗泽"]})," ",(0,a.jsx)("br",{})]})}),(0,a.jsx)(N,{defaultVelocity:2.5,numRows:3,className:"text-5xl md:text-4xl relative z-10",style:{position:"absolute",top:"250px",left:"0px"},children:"Dub Programmer Badminton player guitar player"})]})}),c.map((e,t)=>(0,a.jsx)(r,{className:"size-[70px] border-none bg-transparent ",duration:20,delay:e.delay,radius:e.radius,children:e.icon},t)),u.map((e,t)=>(0,a.jsx)(r,{className:" size-[200px] border-none bg-transparent ",duration:15,delay:e.delay,radius:e.radius,children:e.icon},t))]})})}let S={wuCut:()=>(0,a.jsx)("div",{style:{width:"200px",height:"200px",borderRadius:"50%",overflow:"hidden"},children:(0,a.jsx)("img",{src:"/WuCut.png",alt:"Avatar",style:{width:"100%",height:"100%",objectFit:"cover"}})}),guitar:()=>(0,a.jsx)("div",{style:{width:"50px",height:"50px"},children:(0,a.jsx)("img",{src:"/guitar.svg",alt:"Avatar",style:{width:"100%",height:"100%",objectFit:"cover"}})}),programming:()=>(0,a.jsx)("div",{style:{width:"70px",height:"70px"},children:(0,a.jsx)("img",{src:"/computer.png",alt:"Avatar",style:{width:"100%",height:"100%",objectFit:"cover"}})}),W_LOGO:()=>(0,a.jsx)("div",{style:{width:"130px",height:"80px"},children:(0,a.jsx)("img",{src:"/W-Logo_Purple_vector.svg",alt:"Avatar",style:{width:"90%",height:"90%",objectFit:"cover"}})}),badminton:()=>(0,a.jsx)("div",{style:{width:"50px",height:"50px"},children:(0,a.jsx)("img",{src:"/badminton.svg",alt:"Avatar",style:{width:"100%",height:"100%",objectFit:"cover"}})})};function M(e){let{text:t,duration:s=.2,delayMultiple:r=.04,framerProps:i={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0}},className:l}=e;return(0,a.jsx)("div",{className:"flex justify-center space-x-1",children:(0,a.jsx)(k.M,{children:t.split("").map((e,t)=>(0,a.jsx)(y.E.h1,{initial:"hidden",animate:"visible",exit:"hidden",variants:i,transition:{duration:s,delay:t*r},className:(0,n.cn)("drop-shadow-sm ",l),children:" "===e?(0,a.jsx)("span",{children:"\xa0"}):e},t))})})}function P(){let{setSectionInView:e}=(0,l.P)(),{ref:t,inView:s}=(0,o.YD)({threshold:.1,rootMargin:"-100px 0px"}),[n,r]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{s&&e("about")},[s,e]),(0,i.useEffect)(()=>{s&&!n&&r(!0)},[s,n]),(0,a.jsxs)("section",{className:"std-backdrop-blur overflow-y-hidden card mt-12 sm:mt-16 md:mt-[100px] px-6 py-4 md:py-10 lg:py-12 flex flex-col lg:items-center justify-between rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]",ref:t,id:"about",children:[(0,a.jsx)(M,{className:"font-display text-center text-1xl -tracking-widest text-black dark:text-white md:text-1xl md:leading-[5rem] break-words",text:"I am Zongzewu, currently pursuing a Bachelor's degree.",framerProps:s||n?{visible:{opacity:1,x:0}}:{hidden:{opacity:0,x:-20}}}),(0,a.jsx)(M,{className:"font-display text-center text-1xl -tracking-widest text-black dark:text-white md:text-1xl md:leading-[5rem]",text:"At the University of Washington Paul G. Allen School of Computer Science,",framerProps:s||n?{visible:{opacity:1,x:0}}:{hidden:{opacity:0,x:-20}}}),(0,a.jsx)(M,{className:"font-display text-center text-1xl -tracking-widest text-black dark:text-black md:text-1xl md:leading-[5rem]",text:"I am passionate about technology and aspire to become a software & Web developer.",framerProps:s||n?{visible:{opacity:1,x:0}}:{hidden:{opacity:0,x:-20}}}),(0,a.jsx)(M,{className:"font-display text-center text-1xl -tracking-widest text-black dark:text-white md:text-1xl md:leading-[5rem]",text:"Beyond academics, I am a passionate badminton enthusiast",framerProps:s||n?{visible:{opacity:1,x:0}}:{hidden:{opacity:0,x:-20}}}),(0,a.jsx)(M,{className:"font-display text-center text-1xl -tracking-widest text-black dark:text-white md:text-1xl md:leading-[5rem]",text:"and a rock music lover, with Pink Floyd and Queen being my favorite bands.",framerProps:s||n?{visible:{opacity:1,x:0}}:{hidden:{opacity:0,x:-20}}}),(0,a.jsx)(M,{className:"font-display text-center text-1xl -tracking-widest text-black dark:text-black md:text-1xl md:leading-[5rem]",text:"I believe learning with passion can unlock endless possibilities.",framerProps:s||n?{visible:{opacity:1,x:0}}:{hidden:{opacity:0,x:-20}}})]})}var I=s(635),B=s.n(I),R=s(9653);function L(e){let{children:t,className:s,wordSpace:n,charSpace:r}=e,l=(0,R._)(),{ref:c,inView:d}=(0,o.YD)({threshold:.1,triggerOnce:!0});(0,i.useEffect)(()=>{d&&l.start("visible"),d||l.start("hidden")},[l,d]);let m={hidden:{},visible:{}},x={hidden:{opacity:0,y:"0.25em"},visible:{opacity:1,y:"0em",transition:{duration:1,ease:[.2,.65,.3,.9]}}};return(0,a.jsx)("h2",{role:"heading",className:s,children:t.split(" ").map((e,t)=>(0,a.jsx)(y.E.span,{ref:c,"aria-hidden":"true",initial:"hidden",animate:l,variants:m,transition:{delayChildren:.25*t,staggerChildren:.05},className:"inline-block whitespace-nowrap select-none ".concat(n),children:e.split("").map((e,t)=>(0,a.jsx)(y.E.span,{"aria-hidden":"true",variants:x,className:"inline-block ".concat(r),children:e},t))},t))})}var T=s(7648),O=s(9646),A=s(9501),D=s(6595),_=s(7261),z=s(257);function Z(){var e,t,s;let{setSectionInView:n}=(0,l.P)(),[r,c]=(0,i.useState)(0),[d,m]=(0,i.useState)(!1),{ref:x,inView:u}=(0,o.YD)({threshold:.25,rootMargin:"-100px 0px"});(0,i.useEffect)(()=>{u&&n("contact")},[u,n]),(0,i.useEffect)(()=>{u&&c(e=>e+1)},[u,n]);let{formState:p,register:f,handleSubmit:h,reset:g}=(0,A.cI)(),{errors:v}=p,b=(0,i.useRef)(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("section",{ref:x,id:"contact",style:{transform:"".concat(d?"perspective(300px) rotateY(-180deg)":"perspective(300px) rotateY(-360deg)")},className:"overflow-y-hidden card mt-12 sm:mt-16 md:mt-[100px] px-6 py-4 md:py-10 lg:py-12 flex flex-col lg:items-center lg:flex-row justify-between rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]",children:d?(0,a.jsx)(k.M,{children:(0,a.jsxs)(y.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.2},exit:{opacity:0},style:{transform:"".concat(d?"perspective(300px) rotateY(-180deg)":"perspective(300px) rotateY(0deg)")},className:"w-full",children:[(0,a.jsx)("div",{className:"ml-auto float-right md:absolute right-0 -top-5 text-2xl opacity-50",children:(0,a.jsx)(O.JO,{icon:"gg:close","data-blobity":!0,onClick:()=>{m(!1),g()}})}),(0,a.jsx)("div",{className:"flex items-center h-full gap-2 w-full",children:(0,a.jsxs)("form",{ref:b,onSubmit:h(function(e){console.log(e),D.ZP.sendForm("".concat(z.env.NEXT_PUBLIC_SERVICE_ID),"".concat(z.env.NEXT_PUBLIC_TEMPLATE_ID),b.current,{publicKey:"".concat(z.env.NEXT_PUBLIC_PUBLIC_KEY)}).then(()=>{console.log("SUCCESS!"),_.Am.success("Message sent",{position:"bottom-left",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark",className:"custom-toast font-kumbhSans"}),g(),setTimeout(()=>m(!d),5e3)},e=>{console.log("FAILED...",e.text),_.Am.error("Message not sent, check your network",{position:"bottom-left",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark",className:"custom-toast font-kumbhSans"})})}),className:"back w-full flex flex-col gap-3 grow-[2] basis-0",children:[(0,a.jsxs)("div",{className:"flex gap-1 flex-col",children:[(0,a.jsx)("label",{htmlFor:"userName",className:"opacity-70 text-sm lg:text-base ",children:"Name"}),(0,a.jsx)("input",{type:"text",id:"userName",...f("userName",{required:"I need to know your name",pattern:{value:/^[a-zA-Z][a-zA-Z0-9]{2,}/,message:"Please enter a valid name."}}),className:"bg-transparent rounded-md border border-[#737373c4] focus:border-[#9f9d9dc4] outline-none py-1 pl-2"}),(null==v?void 0:v.userName)&&(0,a.jsx)("span",{className:"text-red-400 text-xs",children:null==v?void 0:null===(e=v.userName)||void 0===e?void 0:e.message})]}),(0,a.jsxs)("div",{className:"flex gap-1 flex-col",children:[(0,a.jsx)("label",{htmlFor:"userEmail",className:"opacity-70 text-sm lg:text-base ",children:"Email"}),(0,a.jsx)("input",{id:"userEmail",type:"email",...f("userEmail",{required:"Enter a correct email address",pattern:{value:/\S+@\S+\.\S+/,message:"Please provide a valid email address"}}),className:"bg-transparent rounded-md border border-[#737373c4] focus:border-[#9f9d9dc4] outline-none py-1 pl-2"}),(null==v?void 0:v.userEmail)&&(0,a.jsx)("span",{className:"text-red-400 text-xs",children:null==v?void 0:null===(t=v.userEmail)||void 0===t?void 0:t.message})]}),(0,a.jsxs)("div",{className:"flex gap-1 flex-col",children:[(0,a.jsx)("label",{htmlFor:"userMessage",className:"opacity-70 text-sm lg:text-base",children:"Message"}),(0,a.jsx)("textarea",{id:"userMessage",...f("userMessage",{required:"I'll appreciate what you have to say."}),rows:4,cols:50,className:"bg-transparent rounded-md border border-[#737373c4] focus:border-[#9f9d9dc4] outline-none py-1 pl-2"}),(null==v?void 0:v.userMessage)&&(0,a.jsx)("span",{className:"text-red-400 text-xs",children:null==v?void 0:null===(s=v.userMessage)||void 0===s?void 0:s.message})]}),(0,a.jsx)("button",{className:" rounded-md bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] py-3 px-5 ".concat(B().className," font-bold uppercase mt-4"),children:"Send"})]})})]})}):(0,a.jsxs)("div",{className:" ".concat(B().className," flex justify-between items-center w-full duration-1000 ").concat(d&&"opacity-0"),children:[(0,a.jsxs)("div",{className:"inline w-full",children:[(0,a.jsx)(L,{wordSpace:"mr-2 md:mr-[12px]",charSpace:"mr-[0.001em]",className:"text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-bold",children:"GOT A PROJECT IN MIND?"}),(0,a.jsx)(T.default,{href:"#footer","data-no-blobity":!0,children:(0,a.jsx)("span",{"data-blobity":!0,onClick:()=>{m(!d)},className:"sm:mt-0 text-xl sm:text-2xl md:text-[32px] w-fit underline lg:text-[40px] font-bold leading-tight hidden sm:block lg:hidden",children:"CONTACT ME"})})]}),(0,a.jsx)(T.default,{href:"#footer",children:(0,a.jsx)("button",{className:"text-base ml-auto mt-6 lg:mt-0 lg:ml-0 block sm:hidden lg:block lg:text-2xl font-semibold px-4 py-2 md:px-3 lg:py-4 rounded-xl border-2 border-white leading-none ".concat(r<=1&&"duration-500 delay-[1500ms]"," ").concat(u?" opacity-100 translate-y-0":"opacity-0 translate-y-16"),"data-blobity-radius":"12",onClick:()=>{m(!d)},children:"CONTACT\xa0ME"})})]})}),(0,a.jsx)(_.Ix,{})]})}let F=new Date().getFullYear();function Y(){let{setSectionInView:e}=(0,l.P)();return(0,a.jsxs)("section",{id:"footer",className:"my-6 sm:my-8 text-sm sm:text-base lg:text-lg flex md:justify-between justify-center",children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"text-xl sm:text-2xl",children:"\xa9"})," ",F," . ZONGZE WU . ALL RIGHTS RESERVED"]}),(0,a.jsxs)(T.default,{className:"md:flex hidden items-center gap-1 leading-tight",href:"#home","data-blobity-offset-x":"2","data-blobity-offset-y":"0",onClick:()=>e("home"),children:[(0,a.jsx)(O.JO,{icon:"mdi:arrow-top",className:"text-2xl rounded-2xlt"}),(0,a.jsx)("p",{className:"underline leading-tight",children:"SCROLL TO TOP"})]})]})}let W={licenseKey:"opensource",focusableElementsOffsetX:4,focusableElementsOffsetY:4,color:"#E3D3BE",dotColor:"#08233b",invert:!0,focusableElements:"[data-blobity], a:not([data-no-blobity]), button:not([data-no-blobity]),  PinContainer:not([data-no-blobity]), [data-blobity-tooltip]",font:"'Kumbh Sans', -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",fontSize:16,fontWeight:500,opacity:1,fontColor:"#08233b",zIndex:1e3,magnetic:!0};var G=s(2840),H=s.n(G),X=s(4938),J=s(3044),q=s(3815),U=s(2194),V=s(9345),Q=s(9865),K=s(5330),$=s(2042);let ee=[{title:"BetterCallWu - Backend",description:"BCW is a food delivery platform with a management system and a mobile client built using Java and Spring Boot. It employs MySQL for data storage and Redis for caching email verification codes to ensure efficient authentication. The RESTful backend interacts seamlessly with the frontend and mobile app via AJAX for real-time updates. Maven manages dependencies and build automation, ensuring a robust architecture. The mobile app allows customers to place orders, while the management system handles operations. ",tags:["Java","Spring Boot","MySQL","Maven","Redis"],icons:["logos:java","logos:spring","logos:mysql","logos:maven","logos:redis"],imageUrl:"https://i.ibb.co/gJRFJBZ/BCW1.jpg",githubLink:"https://github.com/zongzewu23/BetterCallWu-Takeaway",demoLink:""},{title:"GoBangGo! - Full Stack",description:"GoBangGo! is a web-based Gomoku game with a responsive frontend built using JavaScript, HTML, CSS, and the Canvas API for dynamic rendering. The backend is powered by Node.js and Express, with PostgreSQL managing user data and game statistics. It features advanced AI using the minimax algorithm with caching and board evaluation for optimized performance. The project includes user authentication, avatar uploads, RESTful APIs, and integrates media assets for an interactive experience. Development tools include Visual Studio Code and Git for a modular and maintainable workflow.",tags:["JS","Node.js","Express","HTML","CSS","PostgreSQL"],icons:["logos:javascript","logos:nodejs","logos:express","devicon:html5","devicon:css3","logos:postgresql"],imageUrl:"https://i.ibb.co/ZhtwxBc/Go-Bang-Go1.jpg",urlLink:"https://gobang-869r.onrender.com/",githubLink:"https://github.com/zongzewu23/GoBang"}];X.Z,J.Z,q.Z,U.Z,V.Z,U.Z;let et=[{label:"Front-end Development",icon:Q.Z,desc:"I love to create beautiful responsive websites from scratch",skills:[{name:"HTML",icon:"/icons/html3d.png"},{name:"CSS",icon:"/icons/css3d.png"},{name:"TailwindCSS",icon:"/icons/devicon--tailwindcss.svg"},{name:"Javascript",icon:"/icons/js.png"},{name:"Typescript",icon:"/icons/ts.png"},{name:"ReactJs",icon:"/icons/devicon--react.svg"},{name:"NextJs",icon:"/icons/devicon--nextjs.svg"},{name:"Socket.io",icon:"/icons/devicon--socketio.svg"}]},{label:"Back-end & Databases",icon:K.Z,desc:"I design scalable applications and build them with utmost optimisation",skills:[{name:"NodeJS",icon:"/icons/node.png"},{name:"Spring Boot",icon:"/icons/devicon--spring.svg"},{name:"MySQL",icon:"/icons/devicon--mysql.svg"},{name:"Socket.io",icon:"/icons/devicon--socketio.svg"},{name:"Redis",icon:"/icons/devicon--redis.svg"},{name:"Postgresql",icon:"/icons/devicon--postgresql.svg"},{name:"MongoDB",icon:"/icons/mongo.png"},{name:"Serverless",icon:"/icons/lambda.png"},{name:"Microservices",icon:"/icons/microservices.png"}]},{label:"DevOps",icon:$.Z,desc:"I can automate operations for seamless workflow",skills:[{name:"AWS",icon:"/icons/aws.png"},{name:"GitLabCI/CD",icon:"/icons/devicon--gitlab.svg"},{name:"Docker",icon:"/icons/docker.png"},{name:"Kubernetes",icon:"/icons/kubernetes.png"},{name:"Terraform",icon:"/icons/devicon--terraform.svg"},{name:"Prometheus",icon:"/icons/devicon--prometheus.svg"},{name:"Helm",icon:"/icons/devicon--helm.svg"},{name:"Vault",icon:"/icons/devicon--vault.svg"}]}];var es=s(3145),ea=e=>{let{Label:t,Desc:s,Icon:n,skills:r}=e;return(0,a.jsxs)("div",{className:"w-full md:w-[33.33%] border-b md:border-r md:border-b-0 pt-16 p-10 border-collapse flex flex-col flex-grow",children:[(0,a.jsxs)("div",{className:"flex flex-col space-y-5 items-center ",children:[(0,a.jsx)("div",{className:"relative flex items-center justify-center  bg-[#55D6BE] h-24 w-24 rounded-full",children:(0,a.jsx)(n,{className:"h-[100%] w-10"})}),(0,a.jsx)("span",{className:"text-xl lg:text-2xl tracking-wide font-semibold text-center ",children:t}),(0,a.jsx)("p",{className:"text-center font-medium text-md lg:text-lg",children:s})]}),(0,a.jsxs)("div",{className:"mt-5 md:mt-12",children:[(0,a.jsx)("h1",{className:"text-center text-lg lg:text-xl text-primary text-[#200714]",children:"Technologies I know:"}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2 mt-4 justify-center items-center text-lg",children:null==r?void 0:r.map((e,t)=>(0,a.jsxs)("div",{className:"p-1 lg:p-2 shadow-md rounded-md border transition-all hover:shadow-[inset_0_0px_4px_rgba(0,0,0,0.3)] cursor-pointer flex items-center",children:[(null==e?void 0:e.icon)&&(0,a.jsx)("div",{className:"relative h-5 w-5 lg:h-6 lg:w-6 p-0 mr-1 rounded-sm ",children:(0,a.jsx)(es.default,{fill:!0,src:null==e?void 0:e.icon,alt:""})}),(0,a.jsx)("span",{className:"text-md","data-blobity":!0,children:e.name})]},t))})]})]})},en=()=>{let{ref:e,inView:t}=(0,o.YD)({threshold:.25,rootMargin:"-100px 0px"}),{setSectionInView:s}=(0,l.P)();return(0,i.useEffect)(()=>{t&&s("skills")},[t,s]),(0,a.jsx)("section",{ref:e,id:"skills",className:"std-backdrop-blur overflow-hidden card mt-12 sm:mt-16 md:mt-[50px] px-6 py-4 md:py-10 lg:py-12 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]",children:(0,a.jsx)("div",{className:"w-[90%] md:w-[85%] xl:w-[70%] min-h-[600px]   rounded-2xl flex flex-col md:flex-row overflow-hidden",children:et.map((e,t)=>(0,a.jsx)(ea,{Label:e.label,Desc:e.desc,Icon:e.icon,skills:e.skills},t))})})},er=s(3253),ei=s(3400);function el(e){let{title:t,description:s,tags:n,icons:r,imageUrl:l,githubLink:o,demoLink:c,urlLink:d}=e,m=(0,i.useRef)(null),{scrollYProgress:x}=(0,f.v)({target:m,offset:["0 1","1.33 1"]}),u=(0,v.H)(x,[0,1],[.8,1]),p=(0,v.H)(x,[0,1],[.6,1]);return(0,a.jsx)(y.E.div,{ref:m,style:{scale:u,opacity:p},className:"group mb-3 sm:mb-8 last:mb-0",children:(0,a.jsxs)("section",{className:" max-w-[58rem] border rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem]  transition dark:text-white dark:hover:bg-white/20",children:[(0,a.jsxs)("div",{className:"pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col h-full",children:[(0,a.jsx)("h3",{className:"text-2xl font-semibold mb-4",children:t}),(0,a.jsx)("ul",{className:"flex flex-wrap gap-2 mb-3 sm:mt-auto",children:r.map((e,t)=>(0,a.jsx)(O.JO,{icon:e,className:"mr-3 text-2xl"},t))}),(0,a.jsx)("p",{className:"mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3",children:s}),(0,a.jsxs)("div",{className:"flex",children:[d&&(0,a.jsxs)("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-full hover:scale-105",children:[(0,a.jsx)(er.rpH,{className:"mr-1"})," Live"]}),c&&(0,a.jsxs)("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"flex items-center bg-[#111827] text-white py-2 px-4 mr-2 rounded-full hover:scale-105",children:[(0,a.jsx)(ei.b1v,{className:"mr-1"})," Demo"]}),o&&(0,a.jsxs)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"flex items-center border border-[#111827] py-2 px-4 rounded-full mr-2 text-[#111827] hover:scale-105 dark:border-white dark:text-white dark:border-opacity-40",children:[(0,a.jsx)(ei.RrF,{className:"mr-1 opacity-70"})," ",(0,a.jsx)("span",{className:"opacity-70",children:"GitHub"})]})]})]}),(0,a.jsx)(es.default,{src:l,alt:"Project I worked on",quality:95,width:500,height:300,className:"absolute hidden lg:block top-[60px] -right-10 w-[28.25rem] rounded-lg shadow-2xl scale-[1.0]   transition   lg:scale-[1.1]   "})]})})}s(9397);var eo=()=>{let{ref:e,inView:t}=(0,o.YD)({threshold:.4,rootMargin:"-100px 0px"}),{setSectionInView:s}=(0,l.P)();return(0,i.useEffect)(()=>{t&&s("projects")},[t,s]),(0,a.jsx)("section",{ref:e,id:"projects",className:"std-backdrop-blur overflow-hidden card mt-12 sm:mt-16 md:mt-[50px] px-6 py-4 md:py-10 lg:py-12 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]",children:(0,a.jsx)("div",{children:ee.map((e,t)=>(0,a.jsx)(i.Fragment,{children:(0,a.jsx)(el,{...e})},t))})})},ec=s(3433),ed=e=>{let{children:t,width:s="fit-content",boxColor:n,duration:r}=e,l=(0,R._)(),o=(0,R._)(),c=(0,i.useRef)(null),d=(0,ec.Y)(c,{once:!1});return(0,i.useEffect)(()=>{d?(o.start("visible"),l.start("visible")):(o.start("hidden"),l.start("hidden"))},[d,l,o]),(0,a.jsxs)("div",{ref:c,style:{position:"relative",width:s,overflow:"hidden"},children:[(0,a.jsx)(y.E.div,{variants:{hidden:{opacity:0,y:75},visible:{opacity:1,y:0}},initial:"hidden",animate:l,transition:{duration:r||.5,delay:.25},children:t}),(0,a.jsx)(y.E.div,{variants:{hidden:{left:0},visible:{left:"100%"}},initial:"hidden",animate:o,transition:{duration:r||.5,ease:"easeIn"},style:{position:"absolute",top:4,bottom:4,left:0,right:0,zIndex:20,background:n||"#5046e6"}})]})};let em=e=>{let{children:t,zoomFactor:s=1.5,lensSize:n=170,isStatic:r=!1,position:l={x:200,y:150},hovering:o,setHovering:c}=e,d=(0,i.useRef)(null),[m,x]=(0,i.useState)(!1),u=c||x,[p,f]=(0,i.useState)({x:100,y:100});return(0,a.jsxs)("div",{ref:d,className:"relative overflow-hidden rounded-lg z-20",onMouseEnter:()=>{u(!0)},onMouseLeave:()=>u(!1),onMouseMove:e=>{let t=e.currentTarget.getBoundingClientRect();f({x:e.clientX-t.left,y:e.clientY-t.top})},children:[t,r?(0,a.jsx)("div",{children:(0,a.jsx)(y.E.div,{initial:{opacity:0,scale:.58},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3,ease:"easeOut"},className:"absolute inset-0 overflow-hidden",style:{maskImage:"radial-gradient(circle ".concat(n/2,"px at ").concat(l.x,"px ").concat(l.y,"px, black 100%, transparent 100%)"),WebkitMaskImage:"radial-gradient(circle ".concat(n/2,"px at ").concat(l.x,"px ").concat(l.y,"px, black 100%, transparent 100%)"),transformOrigin:"".concat(l.x,"px ").concat(l.y,"px")},children:(0,a.jsx)("div",{className:"absolute inset-0",style:{transform:"scale(".concat(s,")"),transformOrigin:"".concat(l.x,"px ").concat(l.y,"px")},children:t})})}):(0,a.jsx)(k.M,{children:(void 0!==o?o:m)&&(0,a.jsx)("div",{children:(0,a.jsx)(y.E.div,{initial:{opacity:0,scale:.58},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.3,ease:"easeOut"},className:"absolute inset-0 overflow-hidden",style:{maskImage:"radial-gradient(circle ".concat(n/2,"px at ").concat(p.x,"px ").concat(p.y,"px, black 100%, transparent 100%)"),WebkitMaskImage:"radial-gradient(circle ".concat(n/2,"px at ").concat(p.x,"px ").concat(p.y,"px, black 100%, transparent 100%)"),transformOrigin:"".concat(p.x,"px ").concat(p.y,"px"),zIndex:50},children:(0,a.jsx)("div",{className:"absolute inset-0",style:{transform:"scale(".concat(s,")"),transformOrigin:"".concat(p.x,"px ").concat(p.y,"px")},children:t})})})})]})};var ex=s(9235),eu=s(5293);let ep=(0,s(535).j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),ef=i.forwardRef((e,t)=>{let{className:s,variant:r,size:i,asChild:l=!1,...o}=e,c=l?eu.g7:"button";return(0,a.jsx)(c,{className:(0,n.cn)(ep({variant:r,size:i,className:s})),ref:t,...o})});ef.displayName="Button";let eh=(0,i.createContext)({});(0,i.forwardRef)((e,t)=>{let{options:s,globalOptions:n={resize:!0,useWorker:!0},manualstart:r=!1,children:l,...o}=e,c=(0,i.useRef)(null),d=(0,i.useCallback)(e=>{null!==e?c.current||(c.current=ex.Z.create(e,{...n,resize:!0})):c.current&&(c.current.reset(),c.current=null)},[n]),m=(0,i.useCallback)(async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var t;await (null===(t=c.current)||void 0===t?void 0:t.call(c,{...s,...e}))}catch(e){console.error("Confetti error:",e)}},[s]),x=(0,i.useMemo)(()=>({fire:m}),[m]);return(0,i.useImperativeHandle)(t,()=>x,[x]),(0,i.useEffect)(()=>{r||(async()=>{try{await m()}catch(e){console.error("Confetti effect error:",e)}})()},[r,m]),(0,a.jsxs)(eh.Provider,{value:x,children:[(0,a.jsx)("canvas",{ref:d,...o}),l]})}).displayName="Confetti";let eg=e=>{let{options:t,children:s,...n}=e,r=async e=>{try{let s=e.currentTarget.getBoundingClientRect(),a=s.left+s.width/2,n=s.top+s.height/2;await (0,ex.Z)({...t,origin:{x:a/window.innerWidth,y:n/window.innerHeight}})}catch(e){console.error("Confetti button error:",e)}};return(0,a.jsx)(ef,{onClick:r,...n,children:s})};eg.displayName="ConfettiButton";var ev=()=>{let[e,t]=(0,i.useState)(!1);return(0,a.jsxs)("section",{className:(0,n.cn)("std-backdrop-blur overflow-y-hidden card mt-12 sm:mt-16 md:mt-[100px]","px-6 py-4 md:py-10 lg:py-12","flex flex-col lg:flex-row","items-center justify-center gap-8","rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]"),children:[(0,a.jsxs)("div",{className:"size-full max-w-lg flex-1 flex flex-col items-start justify-center overflow-hidden pt-8",children:[(0,a.jsx)(ed,{boxColor:"#32006E",duration:.5,children:(0,a.jsxs)("p",{className:"text-[3.5rem] font-semibold",children:["Zongze Wu",(0,a.jsx)("span",{className:"text-[#32006E]",children:"."})]})}),(0,a.jsx)(ed,{boxColor:"#32006E",duration:.5,children:(0,a.jsxs)("h2",{className:"mt-[.5rem] text-[1rem]",children:["An adaptable and challenge-driven"," ",(0,a.jsx)("span",{className:"text-[#32006E]",children:"full-stack developer"})]})}),(0,a.jsx)(ed,{boxColor:"#32006E",duration:.5,children:(0,a.jsx)("div",{className:"mt-6",children:(0,a.jsxs)("p",{children:["-> A dedicated problem-solver with a",(0,a.jsx)("span",{className:"font-semibold text-[#32006E]",children:" Passion "}),"for delivering impactful software solutions. ",(0,a.jsx)("br",{}),"-> Committed to continuous",(0,a.jsx)("span",{className:"font-semibold text-[#32006E]",children:" Learning "}),"and ",(0,a.jsx)("span",{className:"font-semibold text-[#32006E]",children:" Innovation "}),", thriving in collaborative and fast-paced environments. ",(0,a.jsx)("br",{}),"-> Aspiring to create technology that not only meets requirements but also ",(0,a.jsx)("span",{className:"font-semibold text-[#32006E]",children:" Inspires Users "}),"and ",(0,a.jsx)("span",{className:"font-semibold text-[#32006E]",children:"Drives Business Success"}),".",(0,a.jsx)("br",{})]})})}),(0,a.jsx)(ed,{boxColor:"#CDFF91",duration:.5,children:(0,a.jsx)("a",{href:"/Resume.pdf",download:!0,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)(eg,{className:"mt-[1.6rem] bg-[#CDFF91] text-[#32006E]",children:"Download Resume"})})})]}),(0,a.jsx)("div",{className:"flex-1 flex items-center justify-center",children:(0,a.jsx)(em,{hovering:e,setHovering:t,children:(0,a.jsx)(es.default,{src:"/Resume.png",alt:"image",width:500,height:500,className:"rounded-2xl"})})})]})};function eb(){return H()(W),(0,a.jsxs)("main",{children:[(0,a.jsx)(C,{}),(0,a.jsx)(P,{}),(0,a.jsx)(en,{}),(0,a.jsx)(eo,{}),(0,a.jsx)(ev,{}),(0,a.jsx)(Z,{}),(0,a.jsx)(Y,{})]})}},7584:function(e,t,s){"use strict";s.d(t,{P:function(){return l},ViewProvider:function(){return i}});var a=s(7437),n=s(2265);let r=(0,n.createContext)(void 0);function i(e){let{children:t}=e,[s,i]=(0,n.useState)("home");return(0,a.jsx)(r.Provider,{value:{sectionInView:s,setSectionInView:i},children:t})}function l(){let e=(0,n.useContext)(r);if(void 0===e)throw Error("ViewContext was used outside of ViewProvider");return e}}},function(e){e.O(0,[675,614,259,609,701,62,971,117,744],function(){return e(e.s=6996)}),_N_E=e.O()}]);