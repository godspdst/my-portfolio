"use client";
import React, { useState } from "react";

/* ── PALETTE ─────────────────────────────────────────── */
export const C = {
  darkBg:"#333333", darkerBg:"#333333", lightBg:"#F3F3FB",
  cream:"#F7ECDC", lavender:"#E6DFF1", white:"#FFFFFF",
  black:"#333333", midGray:"#333333", textLight:"#EBEBEB", textMuted:"#888888",
};

/* ── TYPOGRAPHY ──────────────────────────────────────── */
export const serif = { fontFamily:"'Pigeon','Cormorant Garamond',Georgia,serif", fontStyle:"italic" };

/* ── SITE CONFIG ─────────────────────────────────────── */
export const NAV = ["home","about","process","projects","contact"];
export const EMAIL = "stephanie.a.guarino@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/stephanie-guarino/";

/* ── BASE CSS (shared reset + fonts + keyframes) ─────── */
export const BASE_CSS = `
  @font-face {
    font-family: 'Pigeon';
    src: url('/fonts/Pigeon.otf') format('opentype');
    font-weight: normal;
    font-style: italic;
  }
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@1,400;1,500;1,600&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{background:${C.darkBg};font-family:'Inter',sans-serif;overflow-x:hidden}
  @keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
`;

/* ── MARQUEE ─────────────────────────────────────────── */
export function Marquee() {
  const t = "I DON'T KNOW WHERE I'M GOING FROM HERE, BUT I CAN PROMISE IT WON'T BE BORING. —DAVID BOWIE";
  return (
    <div style={{background:"#333333",overflow:"hidden",whiteSpace:"nowrap",padding:"30px 0",borderTop:"1px solid #1b1b1b",borderBottom:"1px solid #1b1b1b"}}>
      <div style={{display:"inline-block",animation:"marquee 35s linear infinite",fontSize:"11px",letterSpacing:"0.08em",color:"#F7ECDC",fontFamily:"'Inter',sans-serif"}}>
        {Array(8).fill(t).join("   ·   ")}
      </div>
    </div>
  );
}

/* ── NAV ─────────────────────────────────────────────── */
export function Nav({ isCaseStudy = false, activePage = "home" }) {
  const [open, setOpen] = useState(false);
  const [hovLink, setHovLink] = useState(null);
  const linkHref = (l) => {
    if (isCaseStudy) return l === "home" ? "/" : `/#${l}`;
    return `#${l}`;
  };
  return (
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:200,background:"#333333",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"17px 40px",borderBottom:"1px solid #1b1b1b"}}>
      <a href={isCaseStudy ? "/" : "#home"} style={{...serif,fontSize:"22px",color:"#F3F3FB",textDecoration:"none",display:"inline-block",width:"30.46px",height:"27px",lineHeight:"27px"}}>sG</a>
      <div className="desk-nav" style={{display:"flex",gap:"28px",fontSize:"16px",letterSpacing:"0.06em",fontFamily:"'Inter',sans-serif"}}>
        {NAV.map(l => (
          <a key={l} href={linkHref(l)}
            style={{
              color:"#F7ECDC",
              textDecoration:"none",
              border: hovLink === l ? "1px solid #F7ECDC" : "1px solid transparent",
              borderRadius:"20px",
              padding:"4px 14px",
              margin:"-4px -14px",
              transition:"border-color 0.25s ease",
            }}
            onMouseEnter={()=>setHovLink(l)}
            onMouseLeave={()=>setHovLink(null)}>{l}</a>
        ))}
      </div>
      <button className="mob-btn" onClick={()=>setOpen(!open)}
        style={{background:"none",border:"none",cursor:"pointer",display:"none",flexDirection:"column",gap:"5px",padding:"4px"}}>
        {[0,1,2].map(i=>(
          <span key={i} style={{display:"block",width:"22px",height:"1.5px",background:"#F7ECDC",opacity:open&&i===1?0:1,transition:"opacity 0.2s"}}/>
        ))}
      </button>
      {open && (
        <div style={{position:"absolute",top:"100%",left:0,right:0,background:C.darkBg,padding:"24px 40px",display:"flex",flexDirection:"column",gap:"20px",borderBottom:"1px solid #333333"}}>
          {NAV.map(l=>(
            <a key={l} href={linkHref(l)} onClick={()=>setOpen(false)}
              style={{color:"#F7ECDC",textDecoration:"none",fontFamily:"'Inter',sans-serif",fontSize:"16px"}}>{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ── CTA (kept for case study pages) ─────────────────── */
export function CTA() {
  return (
    <section id="contact" className="cta-section" style={{background:C.darkBg,padding:"120px 80px 80px",textAlign:"center",borderTop:"1px solid #333333"}}>
      <h2 style={{...serif,fontSize:"clamp(52px,8vw,96px)",color:C.white,lineHeight:1.0,letterSpacing:"-0.03em",margin:"0 0 48px"}}>
        Talk design<br/>to me.
      </h2>
      <a href={`mailto:${EMAIL}`}
        style={{fontFamily:"'Inter',sans-serif",fontSize:"12px",letterSpacing:"0.18em",color:C.textMuted,textDecoration:"none",textTransform:"uppercase",borderBottom:`1px solid ${C.textMuted}`,paddingBottom:"3px"}}
        onMouseEnter={e=>{e.target.style.color=C.white;e.target.style.borderBottomColor=C.white}}
        onMouseLeave={e=>{e.target.style.color=C.textMuted;e.target.style.borderBottomColor=C.textMuted}}>
        Get in touch →
      </a>
    </section>
  );
}

/* ── FOOTER (kept for case study pages) ──────────────── */
export function Footer({ isCaseStudy = false }) {
  const linkHref = (l) => {
    if (l === "linkedin") return LINKEDIN;
    if (isCaseStudy) return l === "home" ? "/" : `/#${l}`;
    return `#${l}`;
  };
  return (
    <footer className="site-footer">
      <div style={{background:C.darkerBg,padding:"50px 80px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px"}}>
        <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
          {[...NAV,"linkedin"].map(l => (
            <a key={l} href={linkHref(l)}
              style={{fontFamily:"'Inter',sans-serif",fontSize:"16px",color:"#E6DFF1",textDecoration:"none",letterSpacing:"0.05em",transition:"opacity 0.2s"}}
              onMouseEnter={e=>e.target.style.opacity="0.7"}
              onMouseLeave={e=>e.target.style.opacity="1"}>{l}</a>
          ))}
        </div>
      </div>
      <div style={{background:"#333333",padding:"20px 80px"}}>
        <p style={{fontFamily:"'Inter',sans-serif",fontSize:"10px",color:"#EBE6E0",margin:0,textAlign:"center"}}>
          ©2025 Stephanie Guarino. All Rights Reserved. Designed and developed by Stephanie Guarino.
        </p>
      </div>
    </footer>
  );
}
