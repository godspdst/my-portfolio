"use client";
import React, { useState, useEffect, useRef } from "react";

/* ── PALETTE ─────────────────────────────────────────── */
export const C = {
  ink:       "#2b1f1c",
  paper:     "#f5efe3",
  card:      "#fbf6ea",
  blue:      "#3d55f0",
  pink:      "#ee6fb5",
  magenta:   "#c23d86",
  tangerine: "#f4611c",
  lime:      "#c6f24e",
  muted:     "#8a7566",
  footerDim: "#d9e0ff",
  white:     "#ffffff",
};

/* ── SITE CONFIG ─────────────────────────────────────── */
export const EMAIL = "stephanie.a.guarino@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/stephanie-guarino/";

/* ── RESPONSIVE HORIZONTAL PADDING ───────────────────── */
// 28px at ≤800px, scales to 64px at ≥1828px — keeps proportions consistent across viewport widths
export const PAGE_X = "clamp(28px, 3.5vw, 64px)";

/* ── BASE CSS ────────────────────────────────────────── */
export const BASE_CSS = `
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{
    background:${C.paper};
    color:${C.ink};
    font-family:'Inter Tight',sans-serif;
    overflow-x:hidden;
    cursor:url('/assets/cursor-pink.png') 2 2, auto;
  }
  a{color:${C.ink};cursor:url('/assets/cursor-pink.png') 2 2,pointer;}
  a:hover{color:${C.magenta};}
  button,[role=button]{cursor:url('/assets/cursor-pink.png') 2 2,pointer;}
  h1,h2,h3{font-family:'Bricolage Grotesque',sans-serif;}
  @keyframes mq{to{transform:translateX(-50%)}}
  @keyframes dz-spin{from{transform:translateY(-.05em) rotate(-8deg)}to{transform:translateY(-.05em) rotate(352deg)}}
  @keyframes splashCopy{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}
  @keyframes splashBar{from{width:0}to{width:100%}}
  @keyframes spin{to{transform:rotate(360deg)}}
  @keyframes twinkle{0%,100%{transform:scale(.72) rotate(0deg);opacity:.6}50%{transform:scale(1.15) rotate(45deg);opacity:1}}
  @keyframes ampBounce{0%,100%{transform:translateY(0) rotate(-6deg)}50%{transform:translateY(-16%) rotate(6deg)}}
  @keyframes pop{0%{opacity:0;transform:translateY(6px) scale(0) rotate(-12deg)}35%{opacity:1;transform:translateY(-2px) scale(1.18) rotate(8deg)}70%{opacity:1;transform:translateY(-7px) scale(1) rotate(-4deg)}100%{opacity:0;transform:translateY(-16px) scale(.85) rotate(0)}}
  @keyframes hop{0%,100%{transform:translateY(0)}40%{transform:translateY(-40%)}}
  @keyframes twirl{to{transform:rotate(360deg)}}
  @keyframes eqDance{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}
  @media(prefers-reduced-motion:reduce){*{animation:none!important}}
  #site-header{--hb-pad:19px;--nav-pad:12px;--nav-gap:9px;transition:transform .3s ease;}
  #site-header.shrunk{--hb-pad:12px;--nav-pad:8px;--nav-gap:6px}
  #site-header.header-hidden{transform:translateY(-110%);}
  .footer-sweep:hover{background-size:100% 88%!important}
  @media(max-width:540px){
    #site-header>div{padding-left:14px!important;padding-right:14px!important}
    .header-brand-pill{padding:12px 16px!important}
    .header-brand-name{font-size:13px!important}
    .header-brand-role{font-size:13px!important}
    .header-nav-pill{justify-content:space-between!important;gap:4px!important}
    .header-nav-link{padding:6px 11px!important;font-size:12px!important}
  }
  @media(max-width:380px){
    .header-nav-link{padding:5px 7px!important;font-size:11px!important;letter-spacing:-.3px!important}
    .header-brand-name,.header-brand-role{font-size:12px!important}
  }
`;

/* ── MARQUEE ─────────────────────────────────────────── */
export function Marquee() {
  const quote = "\u201CI don\u2019t know where I\u2019m going from here, but I can promise it won\u2019t be boring.\u201D \u2014David Bowie\u00a0\u00a0";
  const items = Array(4).fill(quote);
  return (
    <div style={{overflow:"hidden",padding:"16px 0",background:C.pink,borderTop:`1.5px solid ${C.ink}`,borderBottom:`1.5px solid ${C.ink}`}}>
      <div style={{display:"flex",whiteSpace:"nowrap",animation:"mq 32s linear infinite",width:"max-content"}}>
        {items.map((s,i) => (
          <span key={i} style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontWeight:600,fontSize:"23px",letterSpacing:"-.2px",color:C.ink}}>
            {s}<span style={{color:C.blue}}>✳</span>&nbsp;&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── HEADER ──────────────────────────────────────────── */
export function Header({ activePage = "home" }) {
  const [shrunk, setShrunk] = useState(false);
  const lastY = useRef(0);
  const hiddenAt = useRef(0);

  useEffect(() => {
    const el = document.getElementById("site-header");
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      el.classList.toggle("shrunk", y > 40);
      setShrunk(y > 40);
      if (y < 80) {
        el.classList.remove("header-hidden");
        lastY.current = y;
        hiddenAt.current = y;
      } else if (el.classList.contains("header-hidden")) {
        // Track the highest point reached while hidden
        if (y > hiddenAt.current) hiddenAt.current = y;
        // Only show after scrolling up 60px from peak
        if (y < hiddenAt.current - 60) {
          el.classList.remove("header-hidden");
          lastY.current = y;
        }
      } else {
        // Header visible — hide after 48px of downward scroll
        if (y > lastY.current + 48) {
          el.classList.add("header-hidden");
          hiddenAt.current = y;
        }
        lastY.current = y;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "home",     href: "/" },
    { label: "projects", href: "/projects" },
    { label: "about",    href: "/about" },
    { label: "contact",  href: "/contact" },
  ];

  return (
    <div id="site-header" style={{position:"sticky",top:0,zIndex:200,background:C.paper,maxWidth:"100%"}}>
      <div style={{maxWidth:"1700px",margin:"0 auto",padding:`12px ${PAGE_X} 10px`}}>
        {/* Branding pill */}
        <div className="header-brand-pill" style={{
          display:"flex",justifyContent:"space-between",alignItems:"center",
          border:`1.5px solid ${C.ink}`,borderRadius:"999px",
          padding:`var(--hb-pad,19px) 24px`,
          transition:"padding .25s ease",
          marginBottom:"10px",
        }}>
          <a href="/" className="header-brand-name" style={{fontWeight:700,fontSize:"15px",letterSpacing:"-.3px",textDecoration:"none",color:C.ink}}>
            stephanie guarino <span style={{color:C.tangerine}}>✳</span>
          </a>
          <span className="header-brand-role" style={{fontWeight:700,fontSize:"15px",letterSpacing:"-.3px",color:C.magenta}}>ux designer</span>
        </div>
        {/* Blue nav pill */}
        <nav className="header-nav-pill" style={{
          display:"flex",gap:"var(--nav-gap,9px)",
          background:C.blue,borderRadius:"999px",
          padding:`var(--nav-pad,12px) 10px`,
          alignItems:"center",
          transition:"padding .25s ease, gap .25s ease",
        }}>
          {navLinks.map(({label, href}) => {
            const isActive = activePage === label;
            return (
              <a key={label} href={href}
                className="header-nav-link"
                style={{
                  fontWeight: isActive ? 700 : 600,
                  fontSize:"13px",letterSpacing:"-.2px",
                  color: isActive ? C.blue : C.paper,
                  background: isActive ? C.paper : "transparent",
                  textDecoration:"none",
                  padding:"7px 18px",
                  borderRadius:"999px",
                  transition:"background .15s, color .15s",
                }}
                onMouseEnter={e=>{ if(!isActive){ e.currentTarget.style.background=C.paper; e.currentTarget.style.color=C.ink; } }}
                onMouseLeave={e=>{ if(!isActive){ e.currentTarget.style.background="transparent"; e.currentTarget.style.color=C.paper; } }}
              >{label}</a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

/* ── SCROLL TO TOP ────────────────────────────────────── */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible((window.scrollY || document.documentElement.scrollTop) > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Scroll to top"
      style={{
        position:"fixed",bottom:"32px",right:"32px",zIndex:400,
        width:"52px",height:"52px",borderRadius:"50%",
        background:hovered ? C.pink : C.paper,
        border:`1.5px solid ${C.ink}`,
        display:"flex",alignItems:"center",justifyContent:"center",
        cursor:`url('/assets/cursor-pink.png') 2 2, pointer`,
        opacity:visible?1:0,
        transition:"opacity .35s ease, background .15s ease",
        pointerEvents:visible?"auto":"none",
      }}
    >
      <span style={{fontSize:"20px",color:C.ink,lineHeight:1,fontFamily:"'Inter Tight',sans-serif"}}>↑</span>
    </button>
  );
}

/* ── SITE FOOTER ─────────────────────────────────────── */
export function SiteFooter() {
  return (
    <footer style={{background:C.blue,color:C.paper,position:"relative"}}>
      <ScrollToTop/>
      <div style={{maxWidth:"1700px",margin:"0 auto",padding:`72px ${PAGE_X} 48px`}}>
        <a href={`mailto:${EMAIL}`}
          style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontWeight:800,fontSize:"88px",lineHeight:.98,letterSpacing:"-2.6px",color:C.paper,textDecoration:"none",display:"inline-block"}}
          onMouseEnter={e=>e.currentTarget.style.color=C.ink}
          onMouseLeave={e=>e.currentTarget.style.color=C.paper}
        >
          talk design to me{" "}
          <img src="/assets/doodle-arrow-ne-pink.png" alt="" style={{display:"inline-block",verticalAlign:"middle",width:".9em",height:".9em",imageRendering:"pixelated",transform:"translateY(-.06em)",border:"none"}} onError={e=>e.currentTarget.style.display="none"}/>
        </a>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"56px",font:`400 12px 'IBM Plex Mono',monospace`,color:C.footerDim,flexWrap:"wrap",gap:"12px"}}>
          <div style={{display:"flex",gap:"20px"}}>
            <a href={`mailto:${EMAIL}`} className="footer-sweep" style={{color:C.footerDim,backgroundImage:`linear-gradient(${C.lime},${C.lime})`,backgroundRepeat:"no-repeat",backgroundSize:"0% 88%",backgroundPosition:"0 95%",transition:"background-size .25s ease"}}>email</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="footer-sweep" style={{color:C.footerDim,backgroundImage:`linear-gradient(${C.lime},${C.lime})`,backgroundRepeat:"no-repeat",backgroundSize:"0% 88%",backgroundPosition:"0 95%",transition:"background-size .25s ease"}}>linkedin</a>
          </div>
          <span>©2026 stephanie guarino ✳</span>
        </div>
      </div>
    </footer>
  );
}
