"use client";
import React from "react";
import { C, BASE_CSS, Header, SiteFooter, PAGE_X } from "../shared";

const SKILLS = [
  { label:"ux strategy",    bg:"transparent", color:C.ink,   rotate:null },
  { label:"research ✳",     bg:C.pink,        color:C.ink,   rotate:"-1deg" },
  { label:"prototyping",    bg:C.blue,        color:C.paper, rotate:null },
  { label:"design systems", bg:C.tangerine,   color:C.ink,   rotate:".8deg" },
  { label:"a/b testing",    bg:"transparent", color:C.ink,   rotate:null },
  { label:"branding",       bg:C.pink,        color:C.ink,   rotate:"-.6deg" },
];

const PROCESS_STEPS = [
  { n:"1", title:"strategy",  color:C.blue,      textColor:C.paper, body:"align on measurable goals before anything moves forward" },
  { n:"2", title:"research",  color:C.pink,      textColor:C.ink,   body:"user interviews, competitive research, A/B testing, analytics. I listen to what the data shows" },
  { n:"3", title:"ideate",    color:C.tangerine, textColor:C.ink,   body:"based on the research, I brainstorm various solutions, involving stakeholders and engineers as I go for feasibility" },
  { n:"4", title:"design",    color:C.tangerine, textColor:C.ink,   body:"ideas become wireframes to get a sense of information hierarchy" },
  { n:"5", title:"prototype", color:C.blue,      textColor:C.paper, body:"wireframes become clickable prototypes so I can put them in front of users" },
  { n:"6", title:"test",      color:C.pink,      textColor:C.ink,   body:"I take the prototypes to users and make some more discoveries. based on what the numbers say, I'll continue iterating or stamp the designs as ready to ship" },
];

const PAGE_CSS = `
  ${BASE_CSS}
  .about-grid{display:grid;grid-template-columns:340px minmax(0,1fr);gap:24px;align-items:start}
  .process-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
  .umbphoto .caption{
    position:absolute;bottom:0;left:0;right:0;
    background:rgba(43,31,28,.86);color:${C.paper};
    font:600 11.5px 'IBM Plex Mono',monospace;letter-spacing:.2px;line-height:1.4;
    padding:9px 12px;text-align:center;
    transform:translateY(101%);transition:transform .34s cubic-bezier(.2,.7,.2,1);
  }
  .umbphoto:hover .caption{transform:translateY(0)}
  @media(max-width:900px){
    .about-grid{grid-template-columns:1fr!important}
    .process-grid{grid-template-columns:1fr!important}
    .umbphoto{height:auto!important;aspect-ratio:4/3}
  }
  @media(max-width:760px){
    .about-page-wrap{padding:24px 24px 48px!important}
  }
`;

export default function AboutPage() {
  return (
    <div style={{background:C.paper,minHeight:"100vh",fontFamily:"'Inter Tight',sans-serif",color:C.ink}}>
      <style>{PAGE_CSS}</style>
      <Header activePage="about"/>

      <div className="about-page-wrap" style={{maxWidth:"1700px",margin:"0 auto",padding:`24px ${PAGE_X} 48px`}}>
        <div className="about-grid">

          {/* LEFT COL */}
          <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>

            {/* Photo card — rotated, caption hover */}
            <div className="photo-card" style={{border:`1.5px solid ${C.ink}`,borderRadius:"12px",overflow:"hidden",background:C.card,transform:"rotate(-.6deg)"}}>
              <div style={{background:C.pink,color:C.ink,padding:"10px 16px",fontWeight:800,fontSize:"14px",letterSpacing:"-.2px"}}>
                stephanie guarino ✳
              </div>
              <div style={{padding:"14px"}}>
                <div className="umbphoto" style={{height:"clamp(320px,42vw,480px)",position:"relative",border:`1.5px solid ${C.ink}`,borderRadius:"8px",overflow:"hidden"}}>
                  <img src="/assets/about-about-me.png" alt="Stephanie Guarino"
                    style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"50% 25%",display:"block",filter:"saturate(.92) contrast(1.05)",border:"none",borderRadius:0}}
                    onError={e=>{e.currentTarget.src="/assets/about-portrait.png";}}
                  />
                  <div style={{position:"absolute",inset:0,pointerEvents:"none",background:C.pink,mixBlendMode:"color",opacity:.14}}/>
                  <div style={{position:"absolute",inset:0,pointerEvents:"none",opacity:.22,backgroundImage:"repeating-linear-gradient(0deg,rgba(43,31,28,.5) 0 1px,transparent 1px 4px),repeating-linear-gradient(90deg,rgba(43,31,28,.5) 0 1px,transparent 1px 4px)"}}/>
                  <div className="caption">walking the rainy streets of tokyo <span style={{color:"#c6f24e"}}>✳</span></div>
                </div>
                <div style={{marginTop:"10px",display:"flex",justifyContent:"center",font:`400 11px 'IBM Plex Mono',monospace`,letterSpacing:"4px",color:C.pink}}>♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥</div>
              </div>
            </div>

            {/* Skills card */}
            <div style={{border:`1.5px solid ${C.ink}`,borderRadius:"12px",overflow:"hidden",background:C.card}}>
              <div style={{background:C.tangerine,color:C.ink,padding:"10px 16px",fontWeight:800,fontSize:"14px",letterSpacing:"-.2px"}}>skills</div>
              <div style={{padding:"16px",display:"flex",gap:"6px",flexWrap:"wrap"}}>
                {SKILLS.map(s => (
                  <span key={s.label} style={{
                    font:`500 12px 'IBM Plex Mono',monospace`,
                    padding:"6px 13px",borderRadius:"999px",
                    border:`1.5px solid ${C.ink}`,
                    background:s.bg,color:s.color,
                    transform:s.rotate?`rotate(${s.rotate})`:"none",
                    display:"inline-block",
                  }}>{s.label}</span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COL */}
          <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>

            {/* About card */}
            <div style={{border:`1.5px solid ${C.ink}`,borderRadius:"12px",overflow:"hidden",background:C.card}}>
              <div style={{background:C.blue,color:C.paper,padding:"10px 16px",fontWeight:800,fontSize:"14px",letterSpacing:"-.2px"}}>about me</div>
              <div style={{padding:"clamp(16px,2.2vw,22px) clamp(16px,2.4vw,24px)",display:"flex",flexDirection:"column",gap:"14px",fontSize:"clamp(13.5px,1.5vw,15.5px)",lineHeight:1.65}}>
                <p style={{margin:0}}>I've been a product designer for 5+ years, but my love for web design and user experience extends well past that.</p>
                <p style={{margin:0}}>I started designing MySpace layouts for myself and friends when I was 13. I loved playing with the code, changing colors and font styles until the design was both functional and conveyed the personality of whoever I was designing for.</p>
                <p style={{margin:0}}>Flash forward to college: I studied marketing. I loved getting to know customers and why they chose our brand over others. Sifting through data was energizing because it gave me insight into how our brand could do better for our customers.</p>
                <p style={{margin:0}}>A few years later, I returned back to my love of design, combining my interest in learning user trends with creating intuitive and engaging digital products. I've partnered with startups, agencies and Fortune 500 companies, ranging in industries from e-commerce, finance and SaaS. My specialty is taking complex, data-heavy products and making them increasingly user-friendly and intuitive — even for non-technical users.</p>
                <p style={{margin:0}}>My passion for creating beautiful things extends into my free time. I love to paint, write, write music and DJ.</p>
              </div>
            </div>

            {/* Process */}
            <div id="process" style={{scrollMarginTop:"24px"}}>
              <h2 style={{margin:"12px 0 20px",fontWeight:800,fontSize:"clamp(30px,4.6vw,44px)",lineHeight:1,letterSpacing:"-1.3px",fontFamily:"'Bricolage Grotesque',sans-serif"}}>my process</h2>
              <div className="process-grid">
                {PROCESS_STEPS.map(step => (
                  <div key={step.n} style={{border:`1.5px solid ${C.ink}`,borderRadius:"12px",overflow:"hidden",background:C.card}}>
                    <div style={{background:step.color,color:step.textColor,padding:"9px 16px",fontWeight:800,fontSize:"13.5px",letterSpacing:"-.2px"}}>
                      {step.n} — {step.title}
                    </div>
                    <p style={{margin:0,padding:"clamp(10px,1.4vw,14px) clamp(12px,1.6vw,18px)",fontSize:"clamp(12px,1.3vw,14px)",lineHeight:1.6}}>{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter/>
    </div>
  );
}
