"use client";
import React, { useState } from "react";
import { C, serif, BASE_CSS, Nav, EMAIL, LINKEDIN } from "../../shared";

const PAGE_CSS = `
  ${BASE_CSS}
  @media(max-width:1100px){
    .cs-title{padding:72px 48px!important}
    .overview-grid{grid-template-columns:1fr!important;gap:48px!important;padding:60px 48px!important}
    .content-section{padding:60px 48px!important}
    .process-section{padding:0 48px 0!important}
    .proc-inner{margin-left:80px!important}
    .full-photo{height:480px!important}
    .feat-grid{grid-template-columns:1fr 1fr!important;gap:32px!important;padding:60px 48px 80px!important}
    .finding-wrap{padding:60px 48px!important}
    .wq-embed{padding:60px 48px 60px!important}
    .comparison-wrap{padding:40px 48px!important}
    .cta-section{padding:100px 48px 80px!important}
    .footer-links{padding:36px 48px!important}
    .footer-copy{padding:20px 48px!important}
  }
  @media(max-width:768px){
    .desk-nav{display:none!important}
    .mob-btn{display:flex!important}
    .cs-title{padding:40px 24px 36px!important}
    .overview-grid{padding:48px 24px!important}
    .content-section{padding:48px 24px!important}
    .process-section{padding:0 24px 0!important}
    .proc-inner{margin-left:0!important}
    .proc-row{margin-right:-24px!important}
    .process-label{display:none!important}
    .full-photo{height:clamp(200px,45vw,480px)!important}
    .feat-grid{display:flex!important;flex-direction:column!important;align-items:flex-start!important;gap:80px!important;padding:32px 24px 48px!important;overflow:hidden!important;max-width:100vw!important}
    .feat-grid>div{width:36vw!important;margin-top:0!important;margin-left:0!important;max-width:none!important;overflow:hidden!important;min-width:0!important}
    .feat-grid>div:nth-child(2){margin-left:52vw!important}
    .research-row{flex-direction:column!important}
    .research-row>div{padding:40px 24px!important}
    .finding-wrap{padding:48px 24px!important}
    .finding-inner{flex-direction:column!important;gap:20px!important}
    .wq-embed{padding:40px 24px 40px!important}
    .comparison-wrap{padding:24px!important}
    .cta-section{padding:80px 24px!important}
    .footer-links{padding:32px 24px!important;flex-wrap:wrap!important;justify-content:center!important;gap:12px 16px!important}
    .footer-copy{padding:16px 24px!important}
  }
`;

function Rule() {
  return <div style={{width:"100%", height:"1px", background:"#333333"}}/>;
}

function FullPhoto({ src, alt="", height="650px", position="50% 50%", grayscale=true }) {
  return (
    <div className="full-photo" style={{width:"100%", height, overflow:"hidden", background:"#1b1b1b"}}>
      <img src={src} alt={alt} style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:position, display:"block", filter:grayscale?"grayscale(100%)":"none"}}/>
    </div>
  );
}

function WobblyCircle({ n, size="clamp(72px, 10vw, 148px)", fontSize="clamp(40px, 5.9vw, 85px)" }) {
  return (
    <div style={{position:"relative", width:size, height:size, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center"}}>
      <svg style={{position:"absolute", inset:0, width:"100%", height:"100%", overflow:"visible"}} viewBox="0 0 80 80" fill="none">
        <path d="M40 5 C57 4, 75 18, 75 40 C75 62, 57 76, 40 75 C23 74, 5 62, 6 40 C7 18, 23 4, 40 5 Z"
          stroke="#EBEBEB" strokeWidth="1.2" fill="#333333" strokeLinecap="round" opacity="0.6"/>
      </svg>
      <span style={{...serif, fontSize, color:"#EBEBEB", lineHeight:1, position:"relative", zIndex:1}}>{n}</span>
    </div>
  );
}

/* ── FEATURE CARDS ──────────────────────────────────────── */

function FilterCard() {
  return (
    <div style={{overflow:"hidden", aspectRatio:"6/5", background:"#FFFFFF", fontFamily:"'Hanken Grotesk',sans-serif", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <div style={{padding:"20px 16px", width:"100%"}}>
        <p style={{fontSize:"10px", fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", color:"#A99C8A", margin:"0 0 10px"}}>Presets</p>
        <div style={{display:"flex", flexWrap:"wrap", gap:"6px", marginBottom:"20px"}}>
          {["All Overdue","My Queue","High Priority"].map(label => (
            <div key={label} style={{display:"flex", alignItems:"center", gap:"5px", background:"#E3E8EF", border:"1px solid #C0CBDB", borderRadius:"3px", height:"26px", padding:"0 10px"}}>
              <span style={{fontWeight:600, fontSize:"12px", color:"#16294A"}}>{label}</span>
              <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 2l6 6M8 2l-6 6" stroke="#34547E" strokeWidth="1.3" strokeLinecap="round"/></svg>
            </div>
          ))}
        </div>
        <p style={{fontSize:"10px", fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", color:"#A99C8A", margin:"0 0 10px"}}>Status</p>
        <div style={{display:"flex", flexWrap:"wrap", gap:"6px"}}>
          <div style={{background:"#E8EDF5", border:"1.5px solid #16294A", borderRadius:"3px", height:"26px", padding:"0 10px", display:"flex", alignItems:"center"}}><span style={{fontWeight:600, fontSize:"12px", color:"#16294A"}}>In Review</span></div>
          <div style={{background:"#E5EFE4", border:"1px solid #CABFB0", borderRadius:"3px", height:"26px", padding:"0 10px", display:"flex", alignItems:"center"}}><span style={{fontWeight:600, fontSize:"12px", color:"#2C5629"}}>Qualified</span></div>
          <div style={{background:"#EFEAE2", border:"1px solid #CABFB0", borderRadius:"3px", height:"26px", padding:"0 10px", display:"flex", alignItems:"center"}}><span style={{fontWeight:600, fontSize:"12px", color:"#635A4E"}}>Pending</span></div>
        </div>
      </div>
    </div>
  );
}

function FollowUpCard() {
  const rows = [
    {date:"Jun 11, 2026", bar:"#8C2020", bg:"#FDF7F7", borderColor:"#EDE5E5"},
    {date:"Jun 13, 2026", bar:"#8C2020", bg:"#FDF7F7", borderColor:"#EDE5E5"},
    {date:"Jun 20, 2026", bar:"#7A5000", bg:"#FDFBF5", borderColor:"transparent"},
  ];
  return (
    <div style={{overflow:"hidden", aspectRatio:"6/5", background:"#FFFFFF", fontFamily:"'Hanken Grotesk',sans-serif", marginTop:"80px", display:"flex", flexDirection:"column"}}>
      <div style={{display:"grid", gridTemplateColumns:"4px 1fr", background:"#F7F4EF", borderBottom:"2px solid #E1DACE", height:"40px", alignItems:"stretch", flexShrink:0}}>
        <div/>
        <div style={{padding:"0 16px", fontWeight:600, fontSize:"11px", letterSpacing:"0.1em", textTransform:"uppercase", color:"#16294A", display:"flex", alignItems:"center", gap:"5px", borderBottom:"2px solid #16294A", marginBottom:"-2px"}}>
          Follow-Up Date
          <svg width="8" height="9" viewBox="0 0 8 9" fill="none"><path d="M4 8V1M1.5 3.5L4 1l2.5 2.5" stroke="#16294A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>
      {rows.map((row, i) => (
        <div key={i} style={{display:"grid", gridTemplateColumns:"4px 1fr", background:row.bg, borderBottom:`1px solid ${row.borderColor}`, flex:1, alignItems:"center"}}>
          <div style={{background:row.bar, alignSelf:"stretch"}}/>
          <div style={{padding:"0 16px", display:"flex", alignItems:"center", gap:"8px"}}>
            <span style={{fontSize:"14px", color:"#2B261F", whiteSpace:"nowrap"}}>{row.date}</span>
            <span style={{display:"inline-flex", background:"#F9EAEA", padding:"3px 8px", borderRadius:"3px", fontWeight:700, fontSize:"10px", color:"#8C2020", letterSpacing:"0.07em", textTransform:"uppercase", whiteSpace:"nowrap"}}>Overdue</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function OverdueCard() {
  return (
    <div style={{overflow:"hidden", aspectRatio:"6/5", background:"#F7F4EF", fontFamily:"'Hanken Grotesk',sans-serif", marginTop:"28px", display:"flex", alignItems:"center"}}>
      <div style={{padding:"0 28px", width:"100%"}}>
        <h1 style={{fontFamily:"Archivo,sans-serif", fontWeight:700, fontSize:"28px", letterSpacing:"-0.012em", color:"#367C2B", margin:"0 0 10px", lineHeight:1}}>Work Queue</h1>
        <div style={{fontSize:"13px", color:"#847868", display:"flex", alignItems:"center", gap:"10px", flexWrap:"wrap"}}>
          <span>127 applications</span>
          <span style={{color:"#E1DACE"}}>·</span>
          <span style={{display:"flex", alignItems:"center", gap:"6px"}}>
            <span style={{width:"7px", height:"7px", borderRadius:"50%", background:"#8C2020", display:"inline-block", flexShrink:0}}/>
            <span style={{color:"#8C2020", fontWeight:700, fontSize:"14px"}}>6 follow-ups overdue</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── CTA + FOOTER ───────────────────────────────────────── */

function TalkDesign() {
  const [hov, setHov] = useState(false);
  return (
    <div className="cta-section" style={{background:"#333333", padding:"120px 80px 100px", textAlign:"center", borderTop:"1px solid #333333"}}>
      <a href={`mailto:${EMAIL}`} style={{textDecoration:"none", display:"inline-block"}}
        onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
        <h2 style={{...serif, fontSize:"clamp(48px, 8.9vw, 128px)", color:hov?"#E6DFF1":"#FFFFFF", lineHeight:0.95, letterSpacing:"-0.02em", margin:0, transition:"color 0.3s"}}>
          Talk{" "}
          <span style={{position:"relative", display:"inline-block"}}>
            design
            <svg style={{position:"absolute", top:"100%", marginTop:"6px", left:0, width:"100%", overflow:"visible", pointerEvents:"none"}} height="10" viewBox="0 0 200 10" fill="none" preserveAspectRatio="none">
              <path d="M2 6 C40 2, 90 9, 130 4 C165 1, 185 8, 198 5" stroke="#1b1b1b" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6"/>
            </svg>
          </span>
          <br/>to me.
        </h2>
      </a>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer>
      <div className="footer-links" style={{background:"#E6DFF1", padding:"50px 80px", display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"1px solid #1b1b1b"}}>
        <div style={{display:"flex", gap:"24px", flexWrap:"wrap"}}>
          {["home","about","process","projects","contact"].map(l => (
            <a key={l} href={l==="home"?"/":`/#${l}`}
              style={{fontFamily:"'Inter',sans-serif", fontSize:"16px", color:"#333333", textDecoration:"none", letterSpacing:"0.05em", transition:"opacity 0.2s"}}
              onMouseEnter={e=>e.target.style.opacity="0.7"}
              onMouseLeave={e=>e.target.style.opacity="1"}>{l}</a>
          ))}
        </div>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
          style={{fontFamily:"'Inter',sans-serif", fontSize:"16px", color:"#333333", textDecoration:"none", letterSpacing:"0.05em", transition:"opacity 0.2s"}}
          onMouseEnter={e=>e.target.style.opacity="0.7"}
          onMouseLeave={e=>e.target.style.opacity="1"}>linkedin</a>
      </div>
      <div className="footer-copy" style={{background:"#333333", padding:"20px 80px"}}>
        <p style={{fontFamily:"'Inter',sans-serif", fontSize:"16px", color:"#EBE6E0", margin:0, textAlign:"center"}}>©2026 Stephanie Guarino. All Rights Reserved. Designed and developed by Stephanie Guarino.</p>
      </div>
    </footer>
  );
}

/* ── PAGE ───────────────────────────────────────────────── */

export default function CECCaseStudy() {
  return (
    <div style={{background:"#333333", fontFamily:"'Inter',sans-serif"}}>
      <style>{PAGE_CSS}</style>
      <Nav isCaseStudy/>

      {/* TITLE */}
      <div className="cs-title" style={{marginTop:"56px", textAlign:"center", padding:"100px 80px", borderBottom:"1px solid #333333"}}>
        <h1 style={{...serif, fontSize:"clamp(40px, 5.9vw, 85px)", color:"#FFFFFF", letterSpacing:"-0.02em", lineHeight:1.1, margin:0}}>cec work queue follow-up date</h1>
      </div>

      {/* HERO PHOTO */}
      <div className="full-photo" style={{width:"100%", height:"800px", overflow:"hidden", background:"#1b1b1b"}}>
        <img src="/images/cec-hero-new.png" alt="Work Queue — the shipped design" style={{width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 30%", display:"block"}}/>
      </div>

      <Rule/>

      {/* OVERVIEW GRID */}
      <div className="overview-grid" style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"80px", padding:"72px 80px", maxWidth:"1200px", margin:"0 auto"}}>
        <div>
          <p style={{fontSize:"15px", letterSpacing:"0.1em", color:"#F7ECDC", textTransform:"uppercase", marginBottom:"16px", lineHeight:1.0, fontFamily:"'Inter',sans-serif"}}>RESPONSIBILITIES</p>
          <ul style={{listStyle:"none", display:"flex", flexDirection:"column", gap:"10px"}}>
            {["User research","Research synthesis","Interaction and interface design","Stakeholder communication"].map((r,i) => (
              <li key={i} style={{display:"flex", alignItems:"flex-start", gap:"16px", fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, fontFamily:"'Inter',sans-serif"}}>
                <span style={{width:"4px", height:"4px", background:"#888888", borderRadius:"50%", flexShrink:0, marginTop:"12px"}}/>
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p style={{fontSize:"15px", letterSpacing:"0.1em", color:"#F7ECDC", textTransform:"uppercase", marginBottom:"16px", lineHeight:1.0, fontFamily:"'Inter',sans-serif"}}>THE BRIEF</p>
          <p style={{fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, fontFamily:"'Inter',sans-serif"}}>Cornerstone Equipment Credit (CEC) needed a way to stop applications from stalling in analysts' queues. A solution had already been scoped. As the sole UX designer embedded with the product and engineering team, I set out to validate it before building it.</p>
        </div>
      </div>

      <Rule/>

      {/* FEATURE HIGHLIGHTS */}
      <div className="feat-grid" style={{width:"100%", background:"#333333", padding:"80px 100px 180px", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"56px", alignItems:"start"}}>
        <FilterCard/>
        <FollowUpCard/>
        <OverdueCard/>
      </div>

      {/* PROCESS STRIP */}
      <div className="process-section" style={{padding:"0 80px", position:"relative", borderTop:"1px solid #F3F3FB"}}>
        <div className="process-label" style={{position:"absolute", left:"-20px", top:"50%", transform:"translateY(-50%) rotate(-90deg)", ...serif, fontSize:"clamp(40px, 5.9vw, 85px)", color:"#EBEBEB", whiteSpace:"nowrap", opacity:0.9}}>process</div>
        <div className="proc-inner" style={{borderLeft:"1px solid #F3F3FB", marginLeft:"100px"}}>
          {["STRATEGY","RESEARCH","SYNTHESIS","DESIGN","TEST"].map((step, i, arr) => (
            <div key={step} className="proc-row" style={{display:"flex", alignItems:"center", gap:"40px", padding:"0 40px 0 50px", marginRight:"-80px", borderBottom: i < arr.length-1 ? "1px solid #F3F3FB" : "none", cursor:"default"}}>
              <WobblyCircle n={i+1}/>
              <span style={{fontFamily:"'Inter',sans-serif", fontSize:"clamp(24px, 3.9vw, 56px)", fontWeight:600, letterSpacing:"-0.02em", color:"#EBEBEB", textTransform:"uppercase", lineHeight:1.04}}>{step}</span>
            </div>
          ))}
        </div>
      </div>

      <Rule/>

      {/* PHOTO: Combine harvester */}
      <FullPhoto src="/images/cec-combine.jpg" alt="Combine harvester" position="50% 40%"/>

      <Rule/>

      {/* SECTION: context */}
      <div className="content-section" style={{padding:"72px 80px"}}>
        <div style={{textAlign:"center", marginBottom:"50px"}}>
          <h2 style={{...serif, fontSize:"clamp(40px, 5.9vw, 85px)", color:"#FFFFFF", letterSpacing:"-0.01em", lineHeight:1.1, margin:0}}>context</h2>
        </div>
        <div style={{maxWidth:"780px", margin:"0 auto"}}>
          <p style={{fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, fontFamily:"'Inter',sans-serif"}}>Cornerstone Equipment Credit (CEC) is a North American lender, financing commercial and agricultural equipment through a network of dealers. Its credit analysts work inside Credit Hub, reviewing applications and moving each one toward a decision from a shared queue called the Work Queue. Applications that should resolve in hours or days were sitting untouched for weeks, sometimes months.</p>
        </div>
      </div>

      <Rule/>

      {/* PHOTO: Farmer */}
      <FullPhoto src="/images/cec-farmer.jpg" alt="Farmer in field"/>

      <Rule/>

      {/* SECTION: proposal */}
      <div className="content-section" style={{padding:"72px 80px"}}>
        <div style={{textAlign:"center", marginBottom:"50px"}}>
          <h2 style={{...serif, fontSize:"clamp(40px, 5.9vw, 85px)", color:"#FFFFFF", letterSpacing:"-0.01em", lineHeight:1.1, margin:0}}>proposal</h2>
        </div>
        <div style={{maxWidth:"780px", margin:"0 auto"}}>
          <p style={{fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, fontFamily:"'Inter',sans-serif"}}>The proposed fix was a Follow-Up Date column, set using an existing application status: Pending. On paper, it was clean and didn't require any massive rework. Before committing, I wanted to understand how analysts actually worked the queue, and whether a Pending-driven follow-up date would fit how analysts moved through Credit Hub. I created some design concepts and put them in front of our users.</p>
        </div>
      </div>

      {/* WORK QUEUE BEFORE */}
      <div className="wq-embed" style={{width:"100%", background:"#333333", padding:"72px 80px 80px"}}>
        <div style={{textAlign:"center", marginBottom:"40px"}}>
          <h2 style={{...serif, fontSize:"clamp(40px, 5.9vw, 85px)", color:"#FFFFFF", letterSpacing:"-0.01em", lineHeight:1.1, margin:0}}>work queue before</h2>
        </div>
        <div style={{width:"100%", overflow:"hidden", borderRadius:"12px", boxShadow:"0 8px 48px rgba(0,0,0,0.5)"}}>
          <img src="/images/jd-before.png" alt="Work Queue before" loading="lazy" style={{width:"100%", height:"auto", display:"block"}}/>
        </div>
      </div>

      <Rule/>

      {/* SECTION: research */}
      <div className="content-section" style={{padding:"72px 80px"}}>
        <div style={{textAlign:"center"}}>
          <div style={{position:"relative", display:"inline-block"}}>
            <h2 style={{...serif, fontSize:"clamp(40px, 5.9vw, 85px)", color:"#FFFFFF", letterSpacing:"-0.01em", lineHeight:1.1, margin:0}}>research</h2>
            <svg style={{position:"absolute", bottom:"-8px", left:0, width:"100%", overflow:"visible", pointerEvents:"none"}} height="12" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
              <path d="M2 8 C40 3, 90 11, 130 5 C165 1, 185 10, 198 6" stroke="#1b1b1b" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
            </svg>
          </div>
        </div>
      </div>

      {/* RESEARCH STEPS */}
      <div style={{width:"100%", background:"#333333"}}>
        <div className="research-row" style={{display:"flex", alignItems:"stretch"}}>
          {[
            {n:1, label:"Observe", text:"Watched analysts work their actual applications in real time: how they moved through the queue, what they tracked and used within the system."},
            {n:2, label:"Probe",   text:"Asked directly about the Pending status: did they use it, and in what cases?"},
            {n:3, label:"Test",    text:"Showed new design options and asked for their preference."},
          ].map(step => (
            <div key={step.n} style={{flex:1, padding:"56px 48px", display:"flex", flexDirection:"column", gap:"20px"}}>
              <WobblyCircle n={step.n} size="clamp(64px, 8vw, 108px)" fontSize="clamp(36px, 4.5vw, 64px)"/>
              <span style={{fontFamily:"'Inter',sans-serif", fontWeight:600, fontSize:"clamp(18px, 2vw, 26px)", letterSpacing:"-0.01em", color:"#EBEBEB", textTransform:"uppercase"}}>{step.label}</span>
              <p style={{margin:0, fontFamily:"'Inter',sans-serif", fontSize:"clamp(15px, 1.4vw, 18px)", color:"#F3F3FB", lineHeight:1.7}}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FINDING CALLOUT */}
      <div className="finding-wrap" style={{background:"#333333", padding:"80px"}}>
        <div className="finding-inner" style={{display:"flex", gap:"60px", alignItems:"flex-start", maxWidth:"1200px", margin:"0 auto"}}>
          <span style={{fontFamily:"'Inter',sans-serif", fontSize:"15px", letterSpacing:"0.16em", color:"#F7ECDC", textTransform:"uppercase", whiteSpace:"nowrap", paddingTop:"10px", minWidth:"120px"}}>FINDING</span>
          <div style={{display:"flex", flexDirection:"column", gap:"28px", maxWidth:"900px"}}>
            <p style={{...serif, fontSize:"clamp(22px, 3.2vw, 52px)", color:"#FFFFFF", lineHeight:1.2, letterSpacing:"-0.01em", margin:0}}>Neither analyst used Pending. Neither knew it existed.</p>
            <p style={{fontFamily:"'Inter',sans-serif", fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, margin:0}}>One set applications to Qualified instead; the other wasn't sure they could change an application's status to Pending at all. The mechanism the proposed solution depended on was invisible to the people meant to use it. If the Follow-Up Date could only be set through Pending, the column we were building would ship empty.</p>
          </div>
        </div>
      </div>

      {/* SECTION: synthesis */}
      <div className="content-section" style={{padding:"72px 80px"}}>
        <div style={{textAlign:"center", marginBottom:"50px"}}>
          <h2 style={{...serif, fontSize:"clamp(40px, 5.9vw, 85px)", color:"#FFFFFF", letterSpacing:"-0.01em", lineHeight:1.1, margin:0}}>synthesis</h2>
        </div>
        <div style={{maxWidth:"780px", margin:"0 auto"}}>
          <p style={{fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, fontFamily:"'Inter',sans-serif"}}>Two problems were wearing one solution: analysts needed a visible way to track follow-ups inside the workflow they already used, and the business wanted analysts to adopt a status they didn't know existed. This was a change-management effort, not a layout fix. Once separated, the two weren't mutually exclusive. We could give analysts follow-up tracking, while the business pursued Pending adoption on its own track.</p>
        </div>
      </div>

      {/* PHOTO: Excavators */}
      <FullPhoto src="/images/cec-excavators.jpg" alt="Row of excavators"/>

      <Rule/>

      {/* SECTION: design */}
      <div className="content-section" style={{padding:"72px 80px"}}>
        <div style={{textAlign:"center", marginBottom:"50px"}}>
          <h2 style={{...serif, fontSize:"clamp(40px, 5.9vw, 85px)", color:"#FFFFFF", letterSpacing:"-0.01em", lineHeight:1.1, margin:0}}>design</h2>
        </div>
        <div style={{maxWidth:"780px", margin:"0 auto"}}>
          <p style={{fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, fontFamily:"'Inter',sans-serif"}}>Both analysts independently preferred a plain Follow-Up Date over a day-count. It was easier to glance at and interpret. Beyond the column, they responded to OVERDUE and NEW labels, a queue color-coded by priority, and filters tucked into a drawer instead of crowding the table.</p>
        </div>
      </div>

      {/* COMPARISON IMAGE */}
      <div className="comparison-wrap" style={{width:"100%", background:"#333333", display:"flex", justifyContent:"center", alignItems:"center", padding:"60px 80px"}}>
        <img src="/images/cec-comparison.png" alt="Date vs. day-count comparison" style={{display:"block", maxWidth:"100%"}}/>
      </div>

      {/* WORK QUEUE AFTER */}
      <div className="wq-embed" style={{width:"100%", background:"#333333", padding:"72px 80px 80px"}}>
        <div style={{textAlign:"center", marginBottom:"40px"}}>
          <h2 style={{...serif, fontSize:"clamp(40px, 5.9vw, 85px)", color:"#FFFFFF", letterSpacing:"-0.01em", lineHeight:1.1, margin:0}}>work queue after</h2>
        </div>
        <div style={{width:"100%", overflow:"hidden", borderRadius:"12px", boxShadow:"0 8px 48px rgba(0,0,0,0.5)"}}>
          <img src="/images/jd-after.png" alt="Work Queue after" loading="lazy" style={{width:"100%", height:"auto", display:"block"}}/>
        </div>
      </div>

      <TalkDesign/>
      <SiteFooter/>
    </div>
  );
}
