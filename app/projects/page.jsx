"use client";
import React from "react";
import { C, BASE_CSS, Header, SiteFooter } from "../shared";

const PROJECTS = [
  {
    n:"01", id:"jd-work-queue-follow-up-date",
    type:"jd",
    title:"john deere work queue follow-up date",
    cat:"enterprise ux",
    desc:"reframed a scoped layout fix as a change-management problem and shipped follow-up tracking analysts could trust",
    tags:[{label:"design systems",bg:C.tangerine,color:C.ink},{label:"workflows",bg:C.blue,color:C.paper}],
    headerColor:C.blue,
    headerCatColor:"#d9e0ff",
    hoverShadow:C.pink,
    hoverRot:"-0.5deg",
  },
  {
    n:"02", id:"jd-credit-hub-guarantor",
    type:"jd",
    title:"john deere credit hub · guarantor",
    cat:"enterprise ux",
    desc:"designed the guarantor detail and inline guarantee-type selection inside credit hub's involved-parties view",
    tags:[{label:"forms",bg:C.tangerine,color:C.ink},{label:"data density",bg:C.blue,color:C.paper}],
    headerColor:C.blue,
    headerCatColor:"#d9e0ff",
    hoverShadow:C.blue,
    hoverRot:"0.5deg",
  },
  {
    n:"03", id:"plume-homepass-online-store",
    type:"plume",
    title:"plume homepass online store",
    cat:"e-commerce",
    desc:"migrated a store to shopify with a cleaner path to buy, resulting in higher conversion rates",
    tags:[{label:"checkout ux",bg:C.pink,color:C.ink},{label:"research",bg:C.tangerine,color:C.ink}],
    headerColor:C.pink,
    headerCatColor:C.ink,
    hoverShadow:C.blue,
    hoverRot:"-0.5deg",
  },
  {
    n:"04", id:"plume-homepass-landing-page",
    type:"plume",
    title:"plume homepass landing page",
    cat:"web · launch",
    desc:"a superpod g6 launch page with a product configurator that guides shoppers to the right setup",
    tags:[{label:"ux strategy",bg:C.blue,color:C.paper},{label:"a/b testing",bg:C.tangerine,color:C.ink}],
    headerColor:C.tangerine,
    headerCatColor:C.ink,
    hoverShadow:C.pink,
    hoverRot:"0.5deg",
  },
  {
    n:"05", id:"the-pit",
    type:"pit",
    title:"the pit",
    cat:"app · branding",
    desc:"a 0→1 music social app, with a follow-and-message flow",
    tags:[{label:"branding",bg:C.tangerine,color:C.ink},{label:"prototyping",bg:C.blue,color:C.paper}],
    headerColor:C.pink,
    headerCatColor:C.ink,
    hoverShadow:C.blue,
    hoverRot:"-0.5deg",
  },
];

const PAGE_CSS = `
  ${BASE_CSS}
  .pc-deere:hover .jd-logo{animation:hop .8s ease-in-out}
  .pc-plume:hover .plume-logo{animation:twirl .9s linear}
  .pc-pit:hover .eq-bar{animation:eqDance .6s ease-in-out infinite alternate}
  .pc-pit:hover .eq-bar:nth-child(2){animation-delay:.1s}
  .pc-pit:hover .eq-bar:nth-child(3){animation-delay:.2s}
  .pc-pit:hover .eq-bar:nth-child(4){animation-delay:.3s}
  .proj-card{transition:transform .22s ease,box-shadow .22s ease;}
  @media(max-width:900px){.projects-grid{grid-template-columns:1fr!important}}
`;

/* ── THUMBNAILS ─────────────────────────────────────────── */
function JdThumb() {
  return (
    <div style={{height:"240px",position:"relative",background:C.ink,display:"flex",alignItems:"center",justifyContent:"center",borderBottom:`1.5px solid ${C.ink}`,overflow:"hidden"}}>
      <div style={{position:"absolute",bottom:"18px",right:"18px",opacity:.08,fontSize:"64px",fontWeight:800,color:"#fff",lineHeight:1,userSelect:"none",pointerEvents:"none",fontFamily:"serif"}}>JD</div>
      <div className="jd-logo" style={{width:"104px",height:"104px",borderRadius:"50%",background:"#367c2b",border:"1.5px solid rgba(255,255,255,.15)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:1}}>
        <span style={{color:"#fff",fontWeight:800,fontSize:"30px",fontFamily:"'Bricolage Grotesque',sans-serif",letterSpacing:"-.5px"}}>JD</span>
      </div>
      <div style={{position:"absolute",top:"12px",right:"12px",background:"#367c2b",color:"#fff",padding:"4px 10px",borderRadius:"999px",font:`600 10.5px 'IBM Plex Mono',monospace`}}>John Deere</div>
    </div>
  );
}

function PlumeThumb() {
  const brandColor = "#7c5cf1";
  return (
    <div style={{height:"240px",position:"relative",background:C.ink,display:"flex",alignItems:"center",justifyContent:"center",borderBottom:`1.5px solid ${C.ink}`,overflow:"hidden"}}>
      <div style={{position:"absolute",bottom:"18px",right:"18px",opacity:.08,userSelect:"none",pointerEvents:"none"}}>
        <svg width="64" height="52" viewBox="0 0 64 52" fill="none">
          <path d="M6 34 Q32 6 58 34" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round"/>
          <path d="M16 44 Q32 18 48 44" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round"/>
          <circle cx="32" cy="49" r="5" fill="#fff"/>
        </svg>
      </div>
      <div className="plume-logo" style={{width:"104px",height:"104px",borderRadius:"50%",background:brandColor,border:"1.5px solid rgba(255,255,255,.15)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:1}}>
        <svg width="52" height="42" viewBox="0 0 52 42" fill="none">
          <path d="M6 26 Q26 4 46 26" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round"/>
          <path d="M14 36 Q26 14 38 36" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round"/>
          <circle cx="26" cy="39" r="4" fill="#fff"/>
        </svg>
      </div>
      <div style={{position:"absolute",top:"12px",right:"12px",background:brandColor,color:"#fff",padding:"4px 10px",borderRadius:"999px",font:`600 10.5px 'IBM Plex Mono',monospace`}}>Plume</div>
    </div>
  );
}

function PitThumb() {
  const bars = [
    { height:30 }, { height:48 }, { height:22 }, { height:40 },
  ];
  return (
    <div style={{height:"240px",position:"relative",background:C.ink,display:"flex",alignItems:"center",justifyContent:"center",borderBottom:`1.5px solid ${C.ink}`,overflow:"hidden"}}>
      <div style={{position:"absolute",bottom:"14px",right:"14px",opacity:.13,display:"flex",gap:"4px",alignItems:"flex-end",pointerEvents:"none"}}>
        {bars.map((b,i) => <div key={i} style={{width:"8px",height:`${b.height}px`,background:C.lime,borderRadius:"2px 2px 0 0"}}/>)}
      </div>
      <div style={{width:"104px",height:"104px",borderRadius:"50%",background:C.lime,border:"1.5px solid rgba(0,0,0,.15)",display:"flex",alignItems:"flex-end",justifyContent:"center",gap:"5px",paddingBottom:"18px",boxSizing:"border-box",position:"relative",zIndex:1,overflow:"hidden"}}>
        {bars.map((b,i) => (
          <div key={i} className="eq-bar" style={{width:"8px",height:`${b.height}px`,background:C.ink,borderRadius:"2px 2px 0 0",transformOrigin:"bottom"}}/>
        ))}
      </div>
      <div style={{position:"absolute",top:"12px",right:"12px",background:C.lime,color:C.ink,padding:"4px 10px",borderRadius:"999px",font:`600 10.5px 'IBM Plex Mono',monospace`}}>The Pit</div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <a href={`/case-study/${project.id}`}
      className={`proj-card pc-${project.type}`}
      style={{
        display:"block",textDecoration:"none",
        background:C.card,borderRadius:"12px",border:`1.5px solid ${C.ink}`,
        overflow:"hidden",
        "--hover-shadow":project.hoverShadow,
        "--hover-rot":project.hoverRot,
      }}
      onMouseEnter={e=>{ e.currentTarget.style.transform=`rotate(${project.hoverRot}) translateY(-4px)`; e.currentTarget.style.boxShadow=`6px 6px 0 ${project.hoverShadow}`; }}
      onMouseLeave={e=>{ e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=""; }}
    >
      {/* Header bar */}
      <div style={{background:project.headerColor,padding:"10px 16px",fontWeight:800,fontSize:"14px",letterSpacing:"-.2px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <span style={{color:project.headerColor===C.blue ? C.paper : C.ink}}>
          {project.n} · {project.title}
        </span>
        <span style={{font:`500 11px 'IBM Plex Mono',monospace`,color:project.headerCatColor,opacity:.9}}>{project.cat}</span>
      </div>
      {/* Thumbnail */}
      {project.type === "jd"    && <JdThumb/>}
      {project.type === "plume" && <PlumeThumb/>}
      {project.type === "pit"   && <PitThumb/>}
      {/* Body */}
      <div style={{padding:"18px 20px"}}>
        <p style={{margin:"0 0 14px",fontSize:"14.5px",lineHeight:1.55,color:C.ink}}>{project.desc}</p>
        <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
          {project.tags.map(t => (
            <span key={t.label} style={{display:"inline-block",borderRadius:"999px",border:`1.5px solid ${C.ink}`,padding:"4px 11px",font:`500 12px 'IBM Plex Mono',monospace`,background:t.bg,color:t.color}}>{t.label}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function ProjectsPage() {
  return (
    <div style={{background:C.paper,minHeight:"100vh"}}>
      <style>{PAGE_CSS}</style>
      <Header activePage="projects"/>

      <div style={{maxWidth:"1700px",margin:"0 auto",padding:"64px 28px 44px"}}>
        <h1 style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontWeight:800,fontSize:"clamp(42px,8.5vw,96px)",lineHeight:1,letterSpacing:"-3px",color:C.ink}}>
          my top five
        </h1>
      </div>

      <div className="projects-grid" style={{maxWidth:"1700px",margin:"0 auto",padding:"0 28px 72px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"}}>
        {PROJECTS.map(p => <ProjectCard key={p.id} project={p}/>)}
      </div>

      <SiteFooter/>
    </div>
  );
}
