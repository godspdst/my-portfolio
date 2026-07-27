"use client";
import React, { useState } from "react";
import { C, BASE_CSS, Header, Marquee, SiteFooter, EMAIL, LINKEDIN } from "./shared";

const PROJECTS = [
  { id:"jd-work-queue-follow-up-date",   img:"/images/jd-hero.jpg",                     title:"john deere work queue",   cat:"enterprise ux", pos:"center 40%" },
  { id:"plume-homepass-online-store",     img:"/images/plume-store-hero.jpg",            title:"plume online store",       cat:"e-commerce" },
  { id:"plume-homepass-landing-page",     img:"/images/plume-homepass-landing-page.jpg", title:"plume landing page",       cat:"web · launch" },
  { id:"the-pit",                         img:"/images/the-pit-hero.jpg",                title:"the pit",                  cat:"app · branding" },
  { id:"personal-portfolio",              img:"/images/portfolio-hero.jpg",              title:"personal portfolio",       cat:"ux · ui" },
];

const PAGE_CSS = `
  ${BASE_CSS}
  .dz-spin:hover{animation:dz-spin 1.5s linear infinite}
  @keyframes dz-sparkle{
    0%,100%{transform:translateY(-.05em) rotate(6deg) scale(1)}
    30%{transform:translateY(-.05em) rotate(28deg) scale(1.25)}
    65%{transform:translateY(-.05em) rotate(-12deg) scale(0.85)}
  }
  .dz-sparkle:hover{animation:dz-sparkle 0.6s ease-in-out infinite}
  @keyframes dz-jiggle{
    0%,100%{transform:translateY(-.06em) rotate(-4deg)}
    20%{transform:translateY(-.06em) rotate(-14deg)}
    40%{transform:translateY(-.06em) rotate(8deg)}
    60%{transform:translateY(-.06em) rotate(-10deg)}
    80%{transform:translateY(-.06em) rotate(6deg)}
  }
  .dz-jiggle:hover{animation:dz-jiggle 0.35s ease-in-out infinite}
  .cta-btn-fill:hover{background:#ee6fb5!important;color:#2b1f1c!important}
  .cta-btn-outline:hover{background:#f4611c!important;color:#2b1f1c!important}
  .top5-link:hover .top5-title{color:#c23d86}
  @media(max-width:900px){
    .profile-grid{grid-template-columns:1fr!important}
    .top5-inner{grid-template-columns:repeat(2,1fr)!important}
  }
  @media(max-width:760px){
    .cta-row{flex-direction:column;align-items:center}
    .top5-inner{grid-template-columns:1fr!important}
  }
`;

/* ── HERO ──────────────────────────────────────────────── */
function Hero() {
  return (
    <>
      <div style={{maxWidth:"1700px",margin:"0 auto",padding:"64px 28px 56px",position:"relative"}}>
        <h1 className="hero-h1" style={{
          margin:0,fontWeight:800,
          fontSize:"min(10.5vw,228px)",
          lineHeight:1.02,letterSpacing:"-.032em",
          textAlign:"center",whiteSpace:"nowrap",
          fontFamily:"'Bricolage Grotesque',sans-serif",
          color:C.ink,
        }}>
          <span style={{display:"block"}}>
            design{" "}
            <img src="/assets/doodle-spiral.png" alt="" className="dz-spin"
              style={{display:"inline-block",verticalAlign:"middle",width:".78em",height:".78em",imageRendering:"pixelated",margin:"0 .05em",transform:"translateY(-.05em) rotate(-8deg)",border:"none"}}
              onError={e=>e.currentTarget.style.display="none"}
            />{" "}with{" "}
            <img src="/assets/doodle-sparkle.png" alt="" className="dz-sparkle"
              style={{display:"inline-block",verticalAlign:"middle",width:".72em",height:".72em",imageRendering:"pixelated",margin:"0 .15em 0 .05em",transform:"translateY(-.05em) rotate(6deg)",border:"none"}}
              onError={e=>e.currentTarget.style.display="none"}
            />
          </span>
          <span style={{display:"block"}}>
            sound{" "}
            <img src="/assets/doodle-amp.png" alt="&" className="dz-jiggle"
              style={{display:"inline-block",verticalAlign:"middle",width:".86em",height:".86em",imageRendering:"pixelated",margin:"0 .05em",transform:"translateY(-.06em) rotate(-4deg)",border:"none"}}
              onError={e=>e.currentTarget.style.display="none"}
            />{" "}vision
          </span>
        </h1>
      </div>

      <div style={{maxWidth:"1700px",margin:"0 auto",padding:"0 28px 56px"}}>
        <div className="cta-row" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"20px",flexWrap:"wrap"}}>
          <a href={`mailto:${EMAIL}`} className="cta-btn-fill"
            style={{display:"inline-block",background:C.ink,color:C.paper,padding:"14px 28px",fontWeight:700,fontSize:"15px",letterSpacing:"-.3px",textDecoration:"none",borderRadius:"999px",transition:"background .15s,color .15s"}}>
            say hi ↗
          </a>
          <a href="#good-stuff" className="cta-btn-outline"
            style={{display:"inline-block",border:`1.5px solid ${C.ink}`,color:C.ink,padding:"12.5px 26px",fontWeight:700,fontSize:"15px",letterSpacing:"-.3px",textDecoration:"none",borderRadius:"999px",transition:"background .15s,color .15s"}}>
            the good stuff ↓
          </a>
        </div>
      </div>
    </>
  );
}

/* ── PROFILE SECTION ───────────────────────────────────── */
function ProfileSection() {
  const SKILLS_PILLS = [
    { label:"ux strategy",    bg:"transparent", color:C.ink, rotate:null },
    { label:"research ✳",     bg:C.pink,        color:C.ink, rotate:"-1deg" },
    { label:"prototyping",    bg:C.blue,        color:C.paper, rotate:null },
    { label:"design systems", bg:C.tangerine,   color:C.ink, rotate:".8deg" },
  ];

  return (
    <div id="good-stuff" style={{scrollMarginTop:"24px",maxWidth:"1700px",margin:"0 auto",padding:"56px 28px 72px"}}>
      <div className="profile-grid" style={{display:"grid",gridTemplateColumns:"340px minmax(0,1fr)",gap:"24px",alignItems:"start"}}>

        {/* LEFT COL */}
        <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>

          {/* Photo card */}
          <div style={{border:`1.5px solid ${C.ink}`,borderRadius:"12px",overflow:"hidden",background:C.card}}>
            <div style={{background:C.blue,color:C.paper,padding:"10px 16px",fontWeight:800,fontSize:"14px",letterSpacing:"-.2px"}}>
              stephanie guarino ✳
            </div>
            <div style={{padding:"14px"}}>
              <div style={{height:"280px",position:"relative",border:`1.5px solid ${C.ink}`,borderRadius:"8px",overflow:"hidden"}}>
                <img src="/assets/home-portrait.png" alt="Stephanie Guarino"
                  style={{width:"100%",height:"100%",objectFit:"cover",display:"block",filter:"saturate(.92) contrast(1.05)",border:"none",borderRadius:0}}
                  onError={e=>{e.currentTarget.src="/images/about.png";}}
                />
                <div style={{position:"absolute",inset:0,pointerEvents:"none",background:C.pink,mixBlendMode:"color",opacity:.14}}/>
                <div style={{position:"absolute",inset:0,pointerEvents:"none",opacity:.22,backgroundImage:"repeating-linear-gradient(0deg,rgba(43,31,28,.5) 0 1px,transparent 1px 4px),repeating-linear-gradient(90deg,rgba(43,31,28,.5) 0 1px,transparent 1px 4px)"}}/>
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
            <div style={{padding:"16px",display:"flex",flexDirection:"column",gap:"10px",fontWeight:600,fontSize:"14px"}}>
              <a href="/contact" style={{textDecoration:"none",color:C.ink}}>→ drop a comment</a>
              <a href={`mailto:${EMAIL}`} style={{textDecoration:"none",color:C.ink}}>→ send an email</a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:C.ink}}>→ linkedin</a>
            </div>
          </div>

          {/* Details card */}
          <div style={{border:`1.5px solid ${C.ink}`,borderRadius:"12px",overflow:"hidden",background:C.card}}>
            <div style={{background:C.pink,color:C.ink,padding:"10px 16px",fontWeight:800,fontSize:"14px",letterSpacing:"-.2px"}}>details</div>
            <div style={{padding:"16px",display:"flex",flexDirection:"column",gap:"9px",font:`400 12.5px 'IBM Plex Mono',monospace`}}>
              <div><span style={{color:C.muted}}>location:</span> chicago</div>
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
              <p style={{margin:0}}><a href="/about" style={{fontWeight:600}}>the long version →</a></p>
            </div>
          </div>

          {/* Top 5 card */}
          <div style={{border:`1.5px solid ${C.ink}`,borderRadius:"12px",overflow:"hidden",background:C.card}}>
            <div style={{background:C.blue,color:C.paper,padding:"10px 16px",fontWeight:800,fontSize:"14px",letterSpacing:"-.2px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span>top 5</span>
              <a href="/projects" style={{color:C.paper,fontWeight:600,fontSize:"13px",textDecoration:"underline",textUnderlineOffset:"3px"}}
                onMouseEnter={e=>e.currentTarget.style.textDecoration="none"}
                onMouseLeave={e=>e.currentTarget.style.textDecoration="underline"}
              >view all →</a>
            </div>
            <div style={{padding:"20px"}}>
              <div className="top5-inner" style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:"16px"}}>
                {PROJECTS.map(p => (
                  <a key={p.id} href={`/case-study/${p.id}`} className="top5-link"
                    style={{textDecoration:"none",color:C.ink,textAlign:"center"}}>
                    <span style={{display:"block",height:"130px",position:"relative",border:`1.5px solid ${C.ink}`,borderRadius:"8px",overflow:"hidden"}}>
                      <img src={p.img} alt={p.title}
                        style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:p.pos||"center center",display:"block",filter:"sepia(0.35) contrast(1.05) brightness(0.97)"}}
                      />
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
      <Header activePage="home"/>
      <Hero/>
      <ProfileSection/>
      <Marquee/>
      <SiteFooter/>
    </div>
  );
}
