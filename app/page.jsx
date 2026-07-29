"use client";
import React, { useState, useEffect } from "react";
import { C, BASE_CSS, Header, Marquee, SiteFooter, EMAIL, LINKEDIN } from "./shared";

const PAGE_CSS = `
  ${BASE_CSS}
  .facepic .pop{position:absolute;opacity:0;pointer-events:none;z-index:3;image-rendering:pixelated;}
  .facepic:hover .pop1{animation:pop 1.15s ease-in-out infinite}
  .facepic:hover .pop2{animation:pop 1.15s ease-in-out infinite .38s}
  .facepic:hover .pop3{animation:pop 1.15s ease-in-out infinite .72s}
  .pc-deere:hover .jd-logo{animation:hop .8s ease-in-out}
  .pc-plume:hover .plume-logo{animation:twirl .9s linear}
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
      position:"fixed",inset:0,zIndex:9999,
      background:C.paper,
      display:"flex",alignItems:"center",justifyContent:"center",
      willChange:"transform",
      transform:sliding ? "translateY(-102%)" : "translateY(0)",
      transition:sliding ? "transform .7s cubic-bezier(.7,0,.2,1)" : "none",
    }}>
      <h1 style={{
        fontFamily:"'Bricolage Grotesque',sans-serif",
        fontWeight:800,
        fontSize:"clamp(44px,9vw,120px)",
        lineHeight:1.02,
        letterSpacing:"-.03em",
        animation:"splashCopy .8s cubic-bezier(.2,.7,.2,1) both",
        color:C.ink,
        textAlign:"center",
        padding:"0 28px",
      }}>
        <span style={{display:"block"}}>
          design{" "}
          <img src="/assets/doodle-spiral.png" alt="" style={{display:"inline-block",verticalAlign:"middle",width:".78em",height:".78em",imageRendering:"pixelated",animation:"spin 3s linear infinite",border:"none"}}
            onError={e=>e.currentTarget.style.display="none"}
          />{" "}with{" "}
          <img src="/assets/doodle-sparkle.png" alt="" style={{display:"inline-block",verticalAlign:"middle",width:".68em",height:".68em",imageRendering:"pixelated",animation:"twinkle 1.6s ease-in-out infinite",border:"none"}}
            onError={e=>e.currentTarget.style.display="none"}
          />
        </span>
        <span style={{display:"block"}}>
          sound{" "}
          <img src="/assets/doodle-amp.png" alt="" style={{display:"inline-block",verticalAlign:"middle",width:".82em",height:".82em",imageRendering:"pixelated",animation:"ampBounce 1.4s ease-in-out infinite",border:"none"}}
            onError={e=>e.currentTarget.style.display="none"}
          />{" "}vision
        </span>
      </h1>
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:"6px",background:"rgba(43,31,28,.12)"}}>
        <div style={{height:"100%",background:C.blue,animation:"splashBar 2.9s cubic-bezier(.5,0,.2,1) forwards"}}/>
      </div>
    </div>
  );
}

/* ── THUMBNAIL ILLUSTRATIONS ────────────────────────────── */
function JdThumb({ h = 130, pill = "John Deere" }) {
  const r = h < 200 ? 72 : 104;
  const fs = h < 200 ? 20 : 30;
  const pf = h < 200 ? "9px" : "10.5px";
  const pp = h < 200 ? "3px 8px" : "4px 10px";
  const wm = h < 200 ? 32 : 64;
  return (
    <div style={{height:`${h}px`,position:"relative",background:C.ink,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
      <div style={{position:"absolute",bottom:"12px",right:"12px",opacity:.08,fontSize:`${wm}px`,fontWeight:800,color:"#fff",lineHeight:1,userSelect:"none",pointerEvents:"none",fontFamily:"serif"}}>JD</div>
      <div className="jd-logo" style={{width:`${r}px`,height:`${r}px`,borderRadius:"50%",background:"#367c2b",border:"1.5px solid rgba(255,255,255,.15)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:1}}>
        <span style={{color:"#fff",fontWeight:800,fontSize:`${fs}px`,fontFamily:"'Bricolage Grotesque',sans-serif",letterSpacing:"-.5px"}}>{pill === "John Deere" ? "JD" : "JD"}</span>
      </div>
      <div style={{position:"absolute",top:"10px",right:"10px",background:"#367c2b",color:"#fff",padding:pp,borderRadius:"999px",font:`600 ${pf} 'IBM Plex Mono',monospace`}}>{pill}</div>
    </div>
  );
}

function PlumeThumb({ h = 130 }) {
  const r = h < 200 ? 72 : 104;
  const pf = h < 200 ? "9px" : "10.5px";
  const pp = h < 200 ? "3px 8px" : "4px 10px";
  const brandColor = "#7c5cf1";
  return (
    <div style={{height:`${h}px`,position:"relative",background:C.ink,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
      <div style={{position:"absolute",bottom:"12px",right:"12px",opacity:.08,userSelect:"none",pointerEvents:"none"}}>
        <svg width={h < 200 ? 40 : 72} height={h < 200 ? 32 : 56} viewBox="0 0 72 56" fill="none">
          <path d="M8 36 Q36 8 64 36" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round"/>
          <path d="M18 46 Q36 20 54 46" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round"/>
          <circle cx="36" cy="52" r="5" fill="#fff"/>
        </svg>
      </div>
      <div className="plume-logo" style={{width:`${r}px`,height:`${r}px`,borderRadius:"50%",background:brandColor,border:"1.5px solid rgba(255,255,255,.15)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:1}}>
        <svg width={r * 0.5} height={r * 0.4} viewBox="0 0 36 28" fill="none">
          <path d="M4 18 Q18 4 32 18" stroke="#fff" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
          <path d="M10 24 Q18 10 26 24" stroke="#fff" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
          <circle cx="18" cy="26" r="3" fill="#fff"/>
        </svg>
      </div>
      <div style={{position:"absolute",top:"10px",right:"10px",background:brandColor,color:"#fff",padding:pp,borderRadius:"999px",font:`600 ${pf} 'IBM Plex Mono',monospace`}}>Plume</div>
    </div>
  );
}

function PitThumb({ h = 130 }) {
  const r = h < 200 ? 72 : 104;
  const bw = h < 200 ? 6 : 8;
  const pf = h < 200 ? "9px" : "10.5px";
  const pp = h < 200 ? "3px 8px" : "4px 10px";
  const bars = [
    { height: h < 200 ? 20 : 30, delay: 0 },
    { height: h < 200 ? 28 : 42, delay: 0.1 },
    { height: h < 200 ? 16 : 24, delay: 0.2 },
    { height: h < 200 ? 24 : 36, delay: 0.3 },
  ];
  return (
    <div style={{height:`${h}px`,position:"relative",background:C.ink,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
      <div style={{position:"absolute",bottom:"10px",right:"10px",opacity:.12,display:"flex",gap:"3px",alignItems:"flex-end",pointerEvents:"none"}}>
        {bars.map((b,i) => <div key={i} style={{width:`${bw}px`,height:`${b.height}px`,background:C.lime,borderRadius:"2px 2px 0 0"}}/>)}
      </div>
      <div style={{width:`${r}px`,height:`${r}px`,borderRadius:"50%",background:C.lime,border:"1.5px solid rgba(0,0,0,.15)",display:"flex",alignItems:"flex-end",justifyContent:"center",gap:"4px",paddingBottom:r * 0.18 + "px",boxSizing:"border-box",position:"relative",zIndex:1,overflow:"hidden"}}>
        {bars.map((b,i) => (
          <div key={i} className="eq-bar" style={{width:`${bw}px`,height:`${b.height}px`,background:C.ink,borderRadius:"2px 2px 0 0",transformOrigin:"bottom"}}/>
        ))}
      </div>
      <div style={{position:"absolute",top:"10px",right:"10px",background:C.lime,color:C.ink,padding:pp,borderRadius:"999px",font:`600 ${pf} 'IBM Plex Mono',monospace`}}>The Pit</div>
    </div>
  );
}

const PROJECTS = [
  { id:"jd-work-queue-follow-up-date",   cls:"pc-deere", type:"jd",    title:"john deere work queue",            cat:"enterprise ux"  },
  { id:"jd-credit-hub-guarantor",        cls:"pc-deere", type:"jd",    title:"john deere credit hub — guarantor", cat:"enterprise ux" },
  { id:"plume-homepass-online-store",    cls:"pc-plume", type:"plume", title:"plume online store",               cat:"e-commerce"     },
  { id:"plume-homepass-landing-page",    cls:"pc-plume", type:"plume", title:"plume landing page",               cat:"web · launch"   },
  { id:"the-pit",                        cls:"pc-pit",   type:"pit",   title:"the pit",                          cat:"app · branding" },
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
                <img src="/assets/about-portrait.png" alt="Stephanie Guarino"
                  style={{width:"100%",height:"100%",objectFit:"cover",display:"block",filter:"saturate(.92) contrast(1.05)",border:"none",borderRadius:0}}
                  onError={e=>{e.currentTarget.src="/assets/home-portrait.png";}}
                />
                <div style={{position:"absolute",inset:0,pointerEvents:"none",background:C.pink,mixBlendMode:"color",opacity:.14}}/>
                <div style={{position:"absolute",inset:0,pointerEvents:"none",opacity:.22,backgroundImage:"repeating-linear-gradient(0deg,rgba(43,31,28,.5) 0 1px,transparent 1px 4px),repeating-linear-gradient(90deg,rgba(43,31,28,.5) 0 1px,transparent 1px 4px)"}}/>
                {/* Sparkle pops */}
                <div className="pop pop1" style={{left:"15%",top:"22%",width:"20px",height:"18px",fontSize:"16px",color:C.pink}}>♥</div>
                <div className="pop pop2" style={{right:"16%",top:"30%",width:"18px",height:"18px",fontSize:"14px",color:C.lime}}>✦</div>
                <div className="pop pop3" style={{left:"34%",bottom:"20%",width:"16px",height:"14px",fontSize:"13px",color:C.tangerine}}>♥</div>
              </div>
              <div style={{display:"flex",gap:"6px",flexWrap:"wrap",marginTop:"14px"}}>
                {SKILLS_PILLS.map(p => (
                  <span key={p.label} style={{
                    font:`500 12px 'IBM Plex Mono',monospace`,
                    padding:"6px 13px",borderRadius:"999px",
                    border:`1.5px solid ${C.ink}`,
                    background:p.bg,color:p.color,
                    transform:p.rotate?`rotate(${p.rotate})`:"none",
                    display:"inline-block",
                  }}>{p.label}</span>
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
                    <span style={{display:"block",position:"relative",border:`1.5px solid ${C.ink}`,borderRadius:"8px",overflow:"hidden"}}>
                      {p.type === "jd"    && <JdThumb h={130}/>}
                      {p.type === "plume" && <PlumeThumb h={130}/>}
                      {p.type === "pit"   && <PitThumb h={130}/>}
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
