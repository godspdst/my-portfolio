"use client";
import React, { useState } from "react";
import { C, serif, BASE_CSS, Marquee, Nav, EMAIL, LINKEDIN } from "./shared";

const PROJECTS = [
  {id:"plume-homepass-landing-page",title:"PLUME HOMEPASS LANDING PAGE",desc:"Landing page redesign for the release of the SuperPod G6",bg:C.cream,dark:true},
  {id:"plume-homepass-online-store",title:"PLUME HOMEPASS ONLINE STORE",desc:"Improvement of Plume HomePass's online shop UX",bg:C.white,dark:true},
  {id:"the-pit",title:"THE PIT",desc:"Social media app for music lovers",bg:"#333333",dark:false},
  {id:"nuleaf",title:"NULEAF",desc:"Website for improved UX of finding a therapist",bg:"#C8D8C0",dark:true},
  {id:"personal-portfolio",title:"PERSONAL PORTFOLIO",desc:"Updated UX and UI of my personal portfolio website",bg:C.lightBg,dark:true},
];

const PAGE_CSS = `
  ${BASE_CSS}
  @keyframes cardJitter {
    0%   { transform: translate(0, 0); }
    20%  { transform: translate(-6px, -5px); }
    45%  { transform: translate(-2px, -3px); }
    65%  { transform: translate(-5px, -4px); }
    85%  { transform: translate(-1px, -2px); }
    100% { transform: translate(0, 0); }
  }
  @media(max-width:1100px){
    .hero-grid{grid-template-columns:1fr!important;min-height:auto!important}
    .hero-img{min-height:120vw!important;border-right:none!important}
    .hero-text{padding:40px 48px 48px!important;min-height:auto!important}
    .proj-section{padding:60px 48px 80px!important}
    .proj-grid{grid-template-columns:1fr 1fr!important;gap:40px!important}
    .proj-card{margin-top:0!important}
    .proj-section > div:first-child{margin-bottom:52px!important}
    .approach-wrap{padding:60px 48px 80px!important}
    .about-text{padding:60px 48px 60px 48px!important}
    .cta-section{padding:100px 48px 80px!important}
    .footer-links{padding:36px 48px!important}
    .footer-copy{padding:20px 48px!important}
  }
  @media(max-width:768px){
    .desk-nav{display:none!important}.mob-btn{display:flex!important}
    .hero-img{min-height:120vw!important}.hero-text{padding:40px 24px 48px!important}
    .approach-wrap{padding:60px 24px!important}
    .approach-inner{flex-direction:column!important;gap:16px!important}
    .approach-label{min-width:auto!important}
    .proj-section{padding:40px 24px 80px!important}
    .proj-grid{grid-template-columns:1fr!important}
    .proj-card{margin-top:0!important}
    .about-grid{grid-template-columns:1fr!important}
    .about-text{padding:60px 24px!important}
    .cta-section{padding:80px 24px!important}
    .footer-links{padding:32px 24px!important;flex-wrap:wrap!important;justify-content:center!important;gap:12px 16px!important}
    .footer-links > div{display:contents!important}
    .footer-copy{padding:16px 24px!important}
  }
`;

/* ── HERO ─────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="home" className="hero-grid" style={{background:C.darkBg,minHeight:"100vh",display:"grid",gridTemplateColumns:"2fr 3fr",paddingTop:"60px"}}>
      <div className="hero-img" style={{position:"relative",minHeight:"calc(100vh - 60px)",overflow:"hidden",borderRight:"1px solid #1b1b1b",borderBottom:"1px solid #1b1b1b"}}>
        <img src="/images/hero.jpg" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}} alt="Stephanie Guarino"/>
      </div>
      <div className="hero-text" style={{display:"flex",alignItems:"center",padding:"60px 80px 60px 60px",minHeight:"calc(100vh - 60px)"}}>
        <h1 style={{...serif,fontSize:"clamp(40px, 5.9vw, 85px)",color:C.white,lineHeight:1.1,letterSpacing:"-0.025em",margin:0}}>
          intentional, holistic<br/>
          <span style={{position:"relative",display:"inline-block",padding:"6px 48px",marginLeft:"-48px"}}>
            <span style={{position:"relative",zIndex:1}}>product design</span>
            <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible",pointerEvents:"none"}} viewBox="0 0 200 52" fill="none" preserveAspectRatio="none">
              <path d="M12 26 C10 8, 40 2, 100 3 C160 4, 192 10, 190 26 C188 42, 158 50, 100 50 C42 50, 12 44, 12 26 Z" stroke="#1b1b1b" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.85"/>
            </svg>
          </span>
        </h1>
      </div>
    </section>
  );
}

/* ── APPROACH ─────────────────────────────────────────── */
function Approach() {
  return (
    <section id="process" className="approach-wrap" style={{background:C.darkBg,padding:"80px 80px 100px",borderTop:"1px solid #333333"}}>
      <div className="approach-inner" style={{display:"flex",gap:"60px",alignItems:"flex-start",maxWidth:"1200px",margin:"0 auto"}}>
        <span className="approach-label" style={{fontFamily:"'Inter',sans-serif",fontSize:"15px",letterSpacing:"0.16em",color:"#F7ECDC",textTransform:"uppercase",whiteSpace:"nowrap",paddingTop:"10px",minWidth:"90px"}}>MY APPROACH</span>
        <p style={{fontFamily:"'Inter',sans-serif",fontSize:"clamp(22px, 3.9vw, 56px)",fontWeight:"200",color:C.white,lineHeight:1,letterSpacing:"0.02em",margin:0,textTransform:"uppercase",maxWidth:"1000px"}}>
          I ANALYZE DATA TO CREATE DIGITAL PRODUCTS THAT ARE FUN AND ENGAGING. I ITERATE ON DESIGNS UNTIL THEY EXCEED USER EXPECTATIONS.
        </p>
      </div>
    </section>
  );
}

/* ── PROJECT CARD ─────────────────────────────────────── */
function ProjectCard({project, index}) {
  const [jitter, setJitter] = useState(false);
  const offsets = [0, 100, 0, 80, 0];
  const topOffset = offsets[index] || 0;
  return (
    <a href={`/case-study/${project.id}`} className="proj-card"
      onMouseEnter={()=>setJitter(true)}
      style={{display:"block",textDecoration:"none",marginTop:`${topOffset}px`}}>
      <div
        onAnimationEnd={()=>setJitter(false)}
        style={{background:project.bg,aspectRatio:"4/3",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",position:"relative",border:"1px solid #1b1b1b",animation:jitter?"cardJitter 0.4s ease-in-out forwards":"none"}}>
        <img src={`/images/${project.id}.jpg`} loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} alt={project.title}/>
      </div>
      <div style={{marginTop:"25px"}}>
        <p style={{fontFamily:"'Inter',sans-serif",fontSize:"15px",fontWeight:"300",letterSpacing:"0.16em",color:C.textLight,margin:"0 0 16px",textTransform:"uppercase"}}>{project.title}</p>
        <p style={{fontFamily:"'Inter',sans-serif",fontSize:"14px",color:"#F3F3FB",margin:0,lineHeight:1.6}}>{project.desc}</p>
      </div>
    </a>
  );
}

/* ── PROJECTS GRID ────────────────────────────────────── */
function Projects() {
  return (
    <section id="projects" className="proj-section" style={{background:C.darkBg,padding:"80px 80px 120px"}}>
      <div style={{textAlign:"center",marginBottom:"80px"}}>
        <div style={{position:"relative",display:"inline-block",padding:"10px 52px"}}>
          <h2 style={{...serif,fontSize:"clamp(40px, 5.9vw, 85px)",color:C.white,margin:0,position:"relative",zIndex:1}}>projects</h2>
          <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",overflow:"visible",pointerEvents:"none"}} viewBox="0 0 200 52" fill="none" preserveAspectRatio="none">
            <path d="M12 26 C10 8, 40 2, 100 3 C160 4, 192 10, 190 26 C188 42, 158 50, 100 50 C42 50, 12 44, 12 26 Z" stroke="#1b1b1b" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.85"/>
          </svg>
        </div>
      </div>
      <div className="proj-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"40px 400px",maxWidth:"1244px",margin:"0 auto"}}>
        {PROJECTS.map((p,i) => (
          <ProjectCard key={p.id} project={p} index={i}/>
        ))}
      </div>
    </section>
  );
}


/* ── ABOUT ────────────────────────────────────────────── */
function About() {
  const paras = [
    "I started designing MySpace layouts for myself and friends when I was 13. I loved playing with the code, changing colors and font styles until the design was just the way I wanted.",
    "Flash forward to college—I went into marketing because I loved learning about how social media worked and how it captivated users.",
    "A few years later, I returned back to my love of web design, combining my interest in learning user trends with creating intuitive and engaging digital products. Since then, I've partnered with startups, agencies and Fortune 500 companies alike, ranging in industries from e-commerce to financial.",
    "My passion for creating beautiful things extends into my free time. I love to paint, write, create music and DJ."
  ];
  return (
    <section id="about" className="about-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
      <div className="about-text" style={{background:C.lavender,padding:"80px 60px 80px 80px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <h2 style={{...serif,fontSize:"clamp(40px, 5.9vw, 85px)",color:C.midGray,marginBottom:"32px",letterSpacing:"-0.01em"}}>about me</h2>
        <div style={{display:"flex",flexDirection:"column",gap:"18px"}}>
          {paras.map((p,i) => (
            <p key={i} style={{fontFamily:"'Inter',sans-serif",fontSize:"16px",color:C.midGray,lineHeight:1.6,letterSpacing:0,margin:0}}>{p}</p>
          ))}
        </div>
      </div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"500px",overflow:"hidden",borderBottom:"1px solid #1b1b1b",borderLeft:"1px solid #1b1b1b"}}>
        <img src="/images/about.jpg" loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover"}} alt="Stephanie Guarino"/>
      </div>
    </section>
  );
}

/* ── TALK DESIGN TO ME (CTA) ──────────────────────────── */
function TalkDesign() {
  const [hov, setHov] = useState(false);
  return (
    <section id="contact" className="cta-section" style={{background:"#333333",padding:"120px 80px 100px",textAlign:"center",borderTop:"1px solid #333333"}}>
      <a href={`mailto:${EMAIL}`} style={{textDecoration:"none",display:"inline-block"}}
        onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
        <h2 style={{...serif,fontSize:"clamp(48px, 8.9vw, 128px)",color:hov?C.lavender:C.white,lineHeight:1.0,letterSpacing:"-0.03em",margin:0,transition:"color 0.3s"}}>
          Talk{" "}
          <span style={{position:"relative",display:"inline-block"}}>
            design
            <svg style={{position:"absolute",top:"100%",marginTop:"6px",left:0,width:"100%",overflow:"visible",pointerEvents:"none"}} height="10" viewBox="0 0 200 10" fill="none" preserveAspectRatio="none">
              <path d="M2 6 C40 2, 90 9, 130 4 C165 1, 185 8, 198 5" stroke={hov?C.lavender:C.white} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" style={{transition:"stroke 0.3s"}}/>
            </svg>
          </span>
          <br/>to me.
        </h2>
      </a>
    </section>
  );
}

/* ── FOOTER ───────────────────────────────────────────── */
function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-links" style={{background:"#E6DFF1",padding:"50px 80px",display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid #1b1b1b"}}>
        <div style={{display:"flex",gap:"24px",flexWrap:"wrap"}}>
          {["home","about","process","projects","contact"].map(l => (
            <a key={l} href={`#${l}`}
              style={{fontFamily:"'Inter',sans-serif",fontSize:"16px",color:"#333333",textDecoration:"none",letterSpacing:"0.05em",transition:"opacity 0.2s"}}
              onMouseEnter={e=>e.target.style.opacity="0.7"}
              onMouseLeave={e=>e.target.style.opacity="1"}>{l}</a>
          ))}
        </div>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
          style={{fontFamily:"'Inter',sans-serif",fontSize:"16px",color:"#333333",textDecoration:"none",letterSpacing:"0.05em",transition:"opacity 0.2s"}}
          onMouseEnter={e=>e.target.style.opacity="0.7"}
          onMouseLeave={e=>e.target.style.opacity="1"}>linkedin</a>
      </div>
      <div className="footer-copy" style={{background:"#333333",padding:"20px 80px"}}>
        <p style={{fontFamily:"'Inter',sans-serif",fontSize:"16px",color:"#EBE6E0",margin:0,textAlign:"center"}}>
          ©2026 Stephanie Guarino. All Rights Reserved. Designed and developed by Stephanie Guarino.
        </p>
      </div>
    </footer>
  );
}

/* ── PAGE ─────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div>
      <style>{PAGE_CSS}</style>
      <Nav/>
      <Hero/>
      <Approach/>
      <Projects/>

      <Marquee/>
      <About/>
      <TalkDesign/>
      <SiteFooter/>
    </div>
  );
}
