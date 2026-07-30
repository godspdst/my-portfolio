"use client";
import React, { useState, useEffect } from "react";
import { C, BASE_CSS, Header, Marquee, SiteFooter, EMAIL, LINKEDIN } from "./shared";

const PAGE_CSS = `
  ${BASE_CSS}
  .facepic .pop{position:absolute;opacity:0;pointer-events:none;z-index:3;image-rendering:pixelated;}
  .facepic:hover .pop1{animation:pop 1.15s ease-in-out infinite}
  .facepic:hover .pop2{animation:pop 1.15s ease-in-out infinite .38s}
  .facepic:hover .pop3{animation:pop 1.15s ease-in-out infinite .72s}
  .pc-deere:hover .jd-logo{animation:hop .8s ease-in-out infinite}
  .pc-plume:hover .plume-logo{animation:twirl .9s linear infinite}
  .pc-pit:hover .eq-bar{animation:eqDance .6s ease-in-out infinite alternate}
  .pc-pit:hover .eq-bar:nth-child(2){animation-delay:.1s}
  .pc-pit:hover .eq-bar:nth-child(3){animation-delay:.2s}
  .pc-pit:hover .eq-bar:nth-child(4){animation-delay:.3s}
  .contact-sweep{display:block;font-weight:600;font-size:14px;text-decoration:none;color:${C.ink};padding:4px 0;background-image:linear-gradient(${C.pink},${C.pink});background-repeat:no-repeat;background-size:0% 88%;background-position:0 95%;transition:background-size .25s ease}
  .contact-sweep:hover{background-size:100% 88%}
  .viewall-sweep{color:${C.paper};font-weight:600;font-size:13px;text-decoration:none;background-image:linear-gradient(${C.lime},${C.lime});background-repeat:no-repeat;background-size:0% 88%;background-position:0 95%;transition:background-size .25s ease}
  .viewall-sweep:hover{background-size:100% 88%}
  .aboutlink-sweep{font-weight:600;text-decoration:none;color:${C.ink};background-image:linear-gradient(${C.pink},${C.pink});background-repeat:no-repeat;background-size:0% 88%;background-position:0 95%;transition:background-size .25s ease}
  .aboutlink-sweep:hover{background-size:100% 88%}
  .footer-sweep:hover{background-size:100% 88%!important}
  .top5-link:hover .top5-title{color:${C.magenta}}
  @media(max-width:900px){
    .profile-grid{grid-template-columns:1fr!important}
    .top5-inner{grid-template-columns:repeat(2,1fr)!important}
  }
  @media(max-width:760px){
    .top5-inner{grid-template-columns:1fr!important}
  }
`;

/* ── SPLASH ─────────────────────────────────────────────── */
function Splash() {
  const [gone, setGone] = useState(false);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("splash")) { setGone(true); return; }
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const holdTime = prefersReduced ? 900 : 3200;
    const t = setTimeout(() => {
      setSliding(true);
      sessionStorage.setItem("splash", "1");
      setTimeout(() => setGone(true), 760);
    }, holdTime);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;
  return (
    <div style={{
      position:"fixed",inset:0,zIndex:9999,background:C.paper,
      display:"flex",alignItems:"center",justifyContent:"center",
      willChange:"transform",
      transform:sliding?"translateY(-102%)":"translateY(0)",
      transition:sliding?"transform .7s cubic-bezier(.7,0,.2,1)":"none",
    }}>
      <h1 style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontWeight:800,fontSize:"clamp(44px,9vw,120px)",lineHeight:1.02,letterSpacing:"-.03em",animation:"splashCopy .8s cubic-bezier(.2,.7,.2,1) both",color:C.ink,textAlign:"center",padding:"0 28px"}}>
        <span style={{display:"block"}}>
          design{" "}
          <img src="/assets/doodle-spiral.png" alt="" style={{display:"inline-block",verticalAlign:"middle",width:".78em",height:".78em",imageRendering:"pixelated",animation:"spin 3s linear infinite",border:"none"}} onError={e=>e.currentTarget.style.display="none"}/>{" "}with{" "}
          <img src="/assets/doodle-sparkle.png" alt="" style={{display:"inline-block",verticalAlign:"middle",width:".68em",height:".68em",imageRendering:"pixelated",animation:"twinkle 1.6s ease-in-out infinite",border:"none"}} onError={e=>e.currentTarget.style.display="none"}/>
        </span>
        <span style={{display:"block"}}>
          sound{" "}
          <img src="/assets/doodle-amp.png" alt="" style={{display:"inline-block",verticalAlign:"middle",width:".82em",height:".82em",imageRendering:"pixelated",animation:"ampBounce 1.4s ease-in-out infinite",border:"none"}} onError={e=>e.currentTarget.style.display="none"}/>{" "}vision
        </span>
      </h1>
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:"6px",background:"rgba(43,31,28,.12)"}}>
        <div style={{height:"100%",background:C.blue,animation:"splashBar 2.9s cubic-bezier(.5,0,.2,1) forwards"}}/>
      </div>
    </div>
  );
}

/* ── SVG BRAND LOGOS ────────────────────────────────────── */
const JD_PATH = "M11.9985 1.1609c-3.457.0002-6.9828.7454-10.2957 2.3475C.5331 6.3093 0 9.1929 0 12.0069c0 2.806.5258 5.6572 1.6956 8.4841 3.3292 1.61 6.8415 2.3481 10.3041 2.3481 3.4644 0 6.9774-.738 10.3029-2.348C23.4723 17.6637 24 14.8127 24 12.0068c0-2.814-.5345-5.6976-1.7034-8.4985-3.3123-1.602-6.8372-2.3473-10.2969-2.3475h-.0006zm0 .916c3.4185 0 6.6966.7568 9.5728 2.1054.9712 2.4297 1.5026 5.0671 1.5026 7.8246 0 2.7508-.5279 5.3856-1.496 7.8096-2.8779 1.3506-6.1578 2.1073-9.5794 2.1073-3.4197 0-6.6996-.7567-9.5775-2.1073-.967-2.424-1.4967-5.0586-1.4967-7.8096 0-2.7574.5304-5.3947 1.502-7.8246 2.8783-1.3487 6.155-2.1055 9.5722-2.1055zm-.0006.687c-3.1279 0-6.2393.6677-9.0219 1.9239-.8997 2.3398-1.3586 4.7996-1.3586 7.319 0 2.5135.4581 4.968 1.3532 7.3066 2.783 1.258 5.8979 1.9227 9.0273 1.9227 3.131 0 6.2453-.6647 9.0279-1.9227l.0041-.003-.0006-.0006c-.6049-.9957-1.4173-1.7997-1.4261-1.8073-.01-.005-.1691-.0544-.1691-.0544-1.7246-.53-2.8551-.9283-3.3548-1.1872-.6876-.3571-1.41-1.2241-1.4895-1.3216-.8061-.0608-1.4729-.0478-2.1145.0299l-.4087.0531c-.7793.1006-1.584.2073-2.3726.0807-.525-.086-1.0346-.2537-1.5749-.4296-.8324-.2726-1.685-.5524-2.6594-.5509H5.421l.0167.0347c.2214.4306 1.0958 1.7369 2.191 2.096.2416.058.4165.1223.4923.1816 0 .0026.4192.8556.5335 1.0862-.6814-.3094-2.789-1.3813-4.4894-3.4504v-.003c0-.0276-.044-.43-.0532-.518 1.0126-.3778 3.2927-.597 3.5496-.6214l.0186-.0018.0083-.0203c.1361-1.1996.4201-2.1597.9524-3.2109.0153-.0317.0245-.0608.0245-.086a.1175.1175 0 0 0-.0132-.052c-.0298-.0566-.1026-.0675-.1057-.0675L6.9946 9.219a222.297 222.297 0 0 0-.1678-.5126c1.1184-.416 2.4974-.8055 3.2867-.9769.1334-.213.1708-.3286.1708-.4678 0-.1181-.0569-.219-.1708-.2963-.5595-.3794-2.3215-.1508-4.104.533-.004-.0073-.0037-.0092-.009-.0168.3701-.2769 1.0317-.688 1.5223-.916l.0191-.0107-.006-.0185c-.133-.4509-1.0038-.796-1.1017-.8311.002-.0153.0039-.0252.0054-.037.8852-.0605 1.4727.3536 1.652.6488l.009.0143.0173-.0053c.1136-.0367.5135-.1639.9464-.2151l.0257-.0012-.0072-.0263c-.1422-.7583-.8658-1.2647-1.1125-1.4172.007-.0123.0093-.017.0162-.0257.8546.0661 1.6439.8023 1.8217 1.4244l.0047.0167.018.0018c.2294.008.5074.0332.6936.0645l.0192.0036.0071-.0161a1.3133 1.3133 0 0 0 .1034-.5174c0-.5602-.3164-1.1606-.7056-1.5403.0076-.0107.011-.0207.0209-.0299 1.1227.426 1.4082 1.2351 1.4082 1.9884 0 .5273-.1398 1.0297-.23 1.3497l-.0376.1326 1.7649-.2133c-.1682.213-.5309.5922-1.2547.9918 0-.0038-.7462-.095-.7462-.095l-.0192-.003-.0065.0192c-.0501.154-.487 1.5335-.4894 2.5476 0 .376.1068.6676.3167.8687.374.3599.9933.3801 1.4262.3633 1.8404-.0673 3.2765.0457 4.2731.3406l.0592.0161.009-.0137c.0619-.0953.1105-.272.1105-.5061 0-.4443-.1781-1.1067-.7762-1.8558.0065-.0053.0067-.0092.0144-.0149.099.0547 1.7136.9716 1.9292 2.3558-.0378.0146-.7737.315-.7737.315l.0239.0238c.6822.7143.9176 1.5776 1.1065 2.2686.1503.5476.3298.897.5676 1.1024.2757.2378 1.32.7366 1.6335.883.2607.3705.7092 1.0643 1.0343 1.6019a20.315 20.315 0 0 0 1.067-6.5077c0-2.5195-.46-4.9795-1.3586-7.3191-2.7818-1.2561-5.896-1.9239-9.0237-1.9239Z";
const PLUME_PATH = "M4.528 9.532c0-.368.095-.735.284-1.063v-.001l2.94-5.093a3.776 3.776 0 0 1 3.27-1.887l6.644.002c.294 0 .526.262.476.565-.038.238-.261.402-.502.402l-6.618-.002c-1.004 0-1.93.535-2.433 1.404L5.65 8.95h.001a1.17 1.17 0 0 0-.002 1.16l-.001-.002 2.75 4.764a.087.087 0 0 1-.074.13h-.767a.348.348 0 0 1-.301-.173L4.81 10.592v-.001a2.127 2.127 0 0 1-.282-1.059Zm.819 6.926v.001a2.133 2.133 0 0 0 1.837 1.064h4.894c.124 0 .24-.065.301-.173l.384-.664a.087.087 0 0 0-.076-.13H7.186h.001a1.163 1.163 0 0 1-1.003-.583v.002l-2.94-5.092a2.809 2.809 0 0 1 0-2.81l3.312-5.73c.12-.208.089-.483-.098-.636a.483.483 0 0 0-.727.13L2.407 7.59a3.776 3.776 0 0 0 0 3.776Zm14.126-1.99c0 .368-.096.735-.284 1.063v.001l-2.941 5.093a3.776 3.776 0 0 1-3.27 1.887l-6.643-.002a.484.484 0 0 1-.477-.565c.038-.238.262-.402.502-.402l6.618.002a2.81 2.81 0 0 0 2.433-1.404l2.94-5.092a1.171 1.171 0 0 0 .001-1.16l-2.75-4.763a.087.087 0 0 1 .076-.13h.766c.124 0 .24.066.302.174l2.444 4.237.001.002c.188.328.282.694.282 1.059zm-6.937 5.525H6.655a3.776 3.776 0 0 1-3.27-1.888L.065 12.35a.483.483 0 0 1 .222-.683c.23-.104.503.005.63.224l3.306 5.73a2.809 2.809 0 0 0 2.432 1.405h5.88-.002a1.171 1.171 0 0 0 1.006-.578v.001l2.75-4.764a.087.087 0 0 1 .151 0l.383.663a.349.349 0 0 1 0 .349l-2.447 4.236v.001a2.128 2.128 0 0 1-1.84 1.06zm11.399-8.341-3.32-5.755a3.776 3.776 0 0 0-3.27-1.888h-5.88a2.134 2.134 0 0 0-1.84 1.059l-.001.002-2.447 4.236a.348.348 0 0 0 0 .348l.383.663a.087.087 0 0 0 .15 0l2.751-4.764v.001a1.163 1.163 0 0 1 1.005-.578h5.88c1.003 0 1.93.535 2.431 1.405l3.306 5.73c.127.22.4.328.63.224a.483.483 0 0 0 .222-.683zM18.653 7.54l2.94 5.093a3.775 3.775 0 0 1 0 3.775l-3.324 5.753a.484.484 0 0 1-.727.13c-.187-.152-.218-.427-.097-.636l3.31-5.73a2.81 2.81 0 0 0 .001-2.809l-2.94-5.09a1.173 1.173 0 0 0-1.003-.583h-5.5a.087.087 0 0 1-.076-.13l.384-.664a.348.348 0 0 1 .301-.174l4.892.001h.002a2.128 2.128 0 0 1 1.837 1.064z";

function LogoSVG({ path, color = "currentColor" }) {
  return <svg viewBox="0 0 24 24" fill={color} style={{width:"100%",height:"100%"}}><path d={path}/></svg>;
}

/* ── MINI THUMBNAIL (top-5 home cards, h=130) ───────────── */
function MiniThumb({ bg, logoPath, logoColor, logoClass, wmColor, logoSize = 32, pill, pitStyle = false }) {
  const circleSize = 56;

  if (pitStyle) {
    const bars = [13,19,10,16];
    return (
      <div style={{height:"130px",position:"relative",background:C.ink,overflow:"hidden"}}>
        {/* Watermark EQ bars — right side, vertically centered (matches other watermarks) */}
        <div style={{position:"absolute",right:"-8px",top:"50%",transform:"translateY(-50%)",width:"90px",height:"90px",opacity:.15,display:"flex",alignItems:"flex-end",justifyContent:"center",gap:"5px",paddingBottom:"8px",boxSizing:"border-box",pointerEvents:"none"}}>
          {bars.map((h,i) => <div key={i} style={{width:"12px",height:`${Math.round(h/19*70)}px`,background:C.lime,borderRadius:"3px 3px 0 0"}}/>)}
        </div>
        {/* Circle with cream bg + lime bars, left-aligned like other logos */}
        <div style={{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",width:`${circleSize}px`,height:`${circleSize}px`,borderRadius:"50%",background:C.paper,border:`1.5px solid ${C.ink}`,display:"flex",alignItems:"flex-end",justifyContent:"center",gap:"3px",paddingBottom:"10px",boxSizing:"border-box",zIndex:1}}>
          {bars.map((h,i) => <div key={i} className="eq-bar" style={{width:"5px",height:`${Math.round(h/19*28)}px`,background:C.lime,borderRadius:"2px 2px 0 0",transformOrigin:"bottom"}}/>)}
        </div>
      </div>
    );
  }

  return (
    <div style={{height:"130px",position:"relative",background:bg,overflow:"hidden"}}>
      {/* Watermark logo */}
      <div style={{position:"absolute",right:"-10px",top:"50%",transform:"translateY(-50%)",width:"90px",height:"90px",opacity:.13,color:wmColor||C.paper,pointerEvents:"none"}}>
        <LogoSVG path={logoPath} color={wmColor||C.paper}/>
      </div>
      {/* Circle with logo (left-aligned, matching full thumbnails) */}
      <div style={{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",width:`${circleSize}px`,height:`${circleSize}px`,borderRadius:"50%",background:C.paper,border:`1.5px solid ${C.ink}`,display:"flex",alignItems:"center",justifyContent:"center",zIndex:1}}>
        <div className={logoClass||undefined} style={{width:`${logoSize}px`,height:`${logoSize}px`,color:logoColor}}>
          <LogoSVG path={logoPath} color={logoColor}/>
        </div>
      </div>
    </div>
  );
}

const PROJECTS = [
  { id:"jd-work-queue-follow-up-date",  cls:"pc-deere", logoClass:"jd-logo",    wmColor:C.paper, bg:C.ink,      logoPath:JD_PATH,    logoColor:"#367c2b", pill:"John Deere",    title:"john deere work queue",            cat:"enterprise ux"  },
  { id:"jd-credit-hub-guarantor",       cls:"pc-deere", logoClass:"jd-logo",    wmColor:C.paper, bg:C.blue,     logoPath:JD_PATH,    logoColor:"#367c2b", pill:"John Deere",    title:"john deere credit hub — guarantor", cat:"enterprise ux" },
  { id:"plume-homepass-online-store",   cls:"pc-plume", logoClass:"plume-logo", wmColor:C.ink,   bg:C.pink,     logoPath:PLUME_PATH, logoColor:"#6d2ef1", logoSize:44, pill:"Plume HomePass", title:"plume online store",               cat:"e-commerce"     },
  { id:"plume-homepass-landing-page",   cls:"pc-plume", logoClass:"plume-logo", wmColor:C.ink,   bg:C.tangerine,logoPath:PLUME_PATH, logoColor:"#6d2ef1", logoSize:44, pill:"Plume HomePass", title:"plume landing page",               cat:"web · launch"   },
  { id:"the-pit",                       cls:"pc-pit",   logoClass:null,         wmColor:null,    bg:C.ink,      logoPath:null,       logoColor:null,      pill:"The Pit",       title:"the pit",                          cat:"app · branding", pitStyle:true },
];

const SKILLS_PILLS = [
  { label:"ux strategy",    bg:"transparent", color:C.ink,   rotate:null },
  { label:"research ✳",     bg:C.pink,        color:C.ink,   rotate:"-1deg" },
  { label:"prototyping",    bg:C.blue,        color:C.paper, rotate:null },
  { label:"design systems", bg:C.tangerine,   color:C.ink,   rotate:".8deg" },
];

/* ── PROFILE SECTION ───────────────────────────────────── */
function ProfileSection() {
  return (
    <div id="good-stuff" style={{scrollMarginTop:"24px",maxWidth:"1700px",margin:"0 auto",padding:"24px 28px 72px"}}>
      <div className="profile-grid" style={{display:"grid",gridTemplateColumns:"340px minmax(0,1fr)",gap:"24px",alignItems:"start"}}>

        {/* LEFT COL */}
        <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>

          {/* Photo card */}
          <div style={{border:`1.5px solid ${C.ink}`,borderRadius:"12px",overflow:"hidden",background:C.card}}>
            <div style={{background:C.blue,color:C.paper,padding:"10px 16px",fontWeight:800,fontSize:"14px",letterSpacing:"-.2px"}}>
              stephanie guarino ✳
            </div>
            <div style={{padding:"14px"}}>
              <div className="facepic" style={{height:"280px",position:"relative",border:`1.5px solid ${C.ink}`,borderRadius:"8px",overflow:"hidden"}}>
                <img src="/assets/home-about-me.png" alt="Stephanie Guarino"
                  style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top",display:"block",filter:"saturate(.92) contrast(1.05)",border:"none",borderRadius:0}}
                  onError={e=>{e.currentTarget.src="/assets/about-portrait.png";}}
                />
                <div style={{position:"absolute",inset:0,pointerEvents:"none",background:C.pink,mixBlendMode:"color",opacity:.14}}/>
                <div style={{position:"absolute",inset:0,pointerEvents:"none",opacity:.22,backgroundImage:"repeating-linear-gradient(0deg,rgba(43,31,28,.5) 0 1px,transparent 1px 4px),repeating-linear-gradient(90deg,rgba(43,31,28,.5) 0 1px,transparent 1px 4px)"}}/>
                {/* Sparkle pops */}
                <div className="pop pop1" style={{left:"15%",top:"22%",fontSize:"16px",color:C.pink}}>♥</div>
                <div className="pop pop2" style={{right:"16%",top:"30%",fontSize:"14px",color:C.lime}}>✦</div>
                <div className="pop pop3" style={{left:"34%",bottom:"20%",fontSize:"13px",color:C.tangerine}}>♥</div>
              </div>
              <div style={{display:"flex",gap:"6px",flexWrap:"wrap",marginTop:"14px"}}>
                {SKILLS_PILLS.map(p => (
                  <span key={p.label} style={{font:`500 12px 'IBM Plex Mono',monospace`,padding:"6px 13px",borderRadius:"999px",border:`1.5px solid ${C.ink}`,background:p.bg,color:p.color,transform:p.rotate?`rotate(${p.rotate})`:"none",display:"inline-block"}}>{p.label}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Contacting card */}
          <div style={{border:`1.5px solid ${C.ink}`,borderRadius:"12px",overflow:"hidden",background:C.card}}>
            <div style={{background:C.tangerine,color:C.ink,padding:"10px 16px",fontWeight:800,fontSize:"14px",letterSpacing:"-.2px"}}>contacting stephanie</div>
            <div style={{padding:"16px",display:"flex",flexDirection:"column",gap:"10px"}}>
              <a href="/contact" className="contact-sweep">→ drop a comment</a>
              <a href={`mailto:${EMAIL}`} className="contact-sweep">→ send an email</a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="contact-sweep">→ linkedin</a>
            </div>
          </div>

          {/* Details card */}
          <div style={{border:`1.5px solid ${C.ink}`,borderRadius:"12px",overflow:"hidden",background:C.card}}>
            <div style={{background:C.pink,color:C.ink,padding:"10px 16px",fontWeight:800,fontSize:"14px",letterSpacing:"-.2px"}}>details</div>
            <div style={{padding:"16px",display:"flex",flexDirection:"column",gap:"9px",font:`400 12.5px 'IBM Plex Mono',monospace`}}>
              <div><span style={{color:C.muted}}>location:</span> chicago</div>
              <div><span style={{color:C.muted}}>currently listening:</span> siamese dream — the smashing pumpkins</div>
            </div>
          </div>
        </div>

        {/* RIGHT COL */}
        <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>

          {/* About card */}
          <div style={{border:`1.5px solid ${C.ink}`,borderRadius:"12px",overflow:"hidden",background:C.card}}>
            <div style={{background:C.pink,color:C.ink,padding:"10px 16px",fontWeight:800,fontSize:"14px",letterSpacing:"-.2px"}}>about me</div>
            <div style={{padding:"22px 24px",display:"flex",flexDirection:"column",gap:"14px",fontSize:"15.5px",lineHeight:1.65}}>
              <p style={{margin:0}}>I'm Stephanie, a UX designer and data nerd. I've been designing on the internet since I was 13, because my MySpace profile didn't look as cool as the other kids'. I turn messy data into products people can use no matter their technology comfortability: conversion pages, e-commerce flows and enterprise tools. I've worked with startups, agencies and Fortune 500s.</p>
              <p style={{margin:0}}><a href="/about" className="aboutlink-sweep">the long version →</a></p>
            </div>
          </div>

          {/* Top 5 card */}
          <div style={{border:`1.5px solid ${C.ink}`,borderRadius:"12px",overflow:"hidden",background:C.card}}>
            <div style={{background:C.blue,color:C.paper,padding:"10px 16px",fontWeight:800,fontSize:"14px",letterSpacing:"-.2px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span>top 5</span>
              <a href="/projects" className="viewall-sweep">view all →</a>
            </div>
            <div style={{padding:"20px"}}>
              <div className="top5-inner" style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:"16px"}}>
                {PROJECTS.map(p => (
                  <a key={p.id} href={`/case-study/${p.id}`} className={`top5-link ${p.cls}`}
                    style={{textDecoration:"none",color:C.ink,textAlign:"center"}}>
                    <span style={{display:"block",border:`1.5px solid ${C.ink}`,borderRadius:"8px",overflow:"hidden"}}>
                      <MiniThumb bg={p.bg} logoPath={p.logoPath} logoColor={p.logoColor} logoClass={p.logoClass} wmColor={p.wmColor} logoSize={p.logoSize} pill={p.pill} pitStyle={!!p.pitStyle}/>
                    </span>
                    <span className="top5-title" style={{display:"block",fontWeight:700,fontSize:"13.5px",letterSpacing:"-.2px",marginTop:"8px",transition:"color .15s"}}>{p.title}</span>
                    <span style={{display:"block",font:`400 10.5px 'IBM Plex Mono',monospace`,color:C.muted,marginTop:"2px"}}>{p.cat}</span>
                  </a>
                ))}
                {/* Placeholder */}
                <div style={{textAlign:"center"}}>
                  <div style={{height:"130px",border:`1.5px dashed ${C.magenta}`,borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 10px",boxSizing:"border-box"}}>
                    <span style={{fontWeight:600,fontSize:"14px",color:C.magenta,lineHeight:1.3}}>your project<br/>could be here</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── PAGE ───────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div style={{background:C.paper,minHeight:"100vh",fontFamily:"'Inter Tight',sans-serif",color:C.ink}}>
      <style>{PAGE_CSS}</style>
      <Splash/>
      <Header activePage="home"/>
      <ProfileSection/>
      <Marquee/>
      <SiteFooter/>
    </div>
  );
}
