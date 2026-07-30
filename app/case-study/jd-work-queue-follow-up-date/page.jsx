"use client";
import React from "react";
import { C, BASE_CSS, Header, SiteFooter, PAGE_X } from "../../shared";

const PROCESS_COLORS = [C.blue, C.pink, C.tangerine, C.blue, C.pink];

const PAGE_CSS = `
  ${BASE_CSS}
  .jd-section-card{background:${C.card};border-radius:12px;border:1.5px solid ${C.ink};overflow:hidden;margin-bottom:24px;}
  .jd-section-header{padding:9px 18px;border-bottom:1.5px solid ${C.ink};}
  .jd-section-body{padding:18px 22px;}
  .jd-proc-tile{border-radius:10px;border:1.5px solid ${C.ink};overflow:hidden;}
  .jd-cs-img{border:1.5px solid ${C.ink};border-radius:8px;overflow:hidden;display:block;margin-bottom:24px;}
  .jd-cs-img img{width:100%;height:100%;object-fit:cover;display:block;border:none;border-radius:0;}
  .research-row{display:flex;align-items:stretch;}
  @media(max-width:900px){
    .jd-page-wrap{padding:32px 24px!important}
    .overview-two-col{grid-template-columns:1fr!important}
    .proc-strip{grid-template-columns:1fr 1fr 1fr!important}
    .research-row{flex-direction:column!important}
    .feat-cards{grid-template-columns:1fr!important}
    .finding-inner{flex-direction:column!important;gap:16px!important}
  }
  @media(max-width:600px){
    .proc-strip{grid-template-columns:1fr 1fr!important}
  }
`;

/* ── PRESERVED FEATURE CARDS (unchanged UI) ───────────── */
function FilterCard() {
  return (
    <div style={{overflow:"hidden",aspectRatio:"6/5",background:"#FFFFFF",fontFamily:"'Hanken Grotesk',sans-serif",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{padding:"20px 16px",width:"100%"}}>
        <p style={{fontSize:"10px",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#A99C8A",margin:"0 0 10px"}}>Presets</p>
        <div style={{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"20px"}}>
          {["All Overdue","My Queue","High Priority"].map(label => (
            <div key={label} style={{display:"flex",alignItems:"center",gap:"5px",background:"#E3E8EF",border:"1px solid #C0CBDB",borderRadius:"3px",height:"26px",padding:"0 10px"}}>
              <span style={{fontWeight:600,fontSize:"12px",color:"#16294A"}}>{label}</span>
              <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 2l6 6M8 2l-6 6" stroke="#34547E" strokeWidth="1.3" strokeLinecap="round"/></svg>
            </div>
          ))}
        </div>
        <p style={{fontSize:"10px",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#A99C8A",margin:"0 0 10px"}}>Status</p>
        <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
          <div style={{background:"#E8EDF5",border:"1.5px solid #16294A",borderRadius:"3px",height:"26px",padding:"0 10px",display:"flex",alignItems:"center"}}><span style={{fontWeight:600,fontSize:"12px",color:"#16294A"}}>In Review</span></div>
          <div style={{background:"#E5EFE4",border:"1px solid #CABFB0",borderRadius:"3px",height:"26px",padding:"0 10px",display:"flex",alignItems:"center"}}><span style={{fontWeight:600,fontSize:"12px",color:"#2C5629"}}>Qualified</span></div>
          <div style={{background:"#EFEAE2",border:"1px solid #CABFB0",borderRadius:"3px",height:"26px",padding:"0 10px",display:"flex",alignItems:"center"}}><span style={{fontWeight:600,fontSize:"12px",color:"#635A4E"}}>Pending</span></div>
        </div>
      </div>
    </div>
  );
}

function FollowUpCard() {
  const rows = [
    {date:"Jun 11, 2026",bar:"#8C2020",bg:"#FDF7F7",borderColor:"#EDE5E5"},
    {date:"Jun 13, 2026",bar:"#8C2020",bg:"#FDF7F7",borderColor:"#EDE5E5"},
    {date:"Jun 20, 2026",bar:"#7A5000",bg:"#FDFBF5",borderColor:"transparent"},
  ];
  return (
    <div style={{overflow:"hidden",aspectRatio:"6/5",background:"#FFFFFF",fontFamily:"'Hanken Grotesk',sans-serif",marginTop:"60px",display:"flex",flexDirection:"column"}}>
      <div style={{display:"grid",gridTemplateColumns:"4px 1fr",background:"#F7F4EF",borderBottom:"2px solid #E1DACE",height:"40px",alignItems:"stretch",flexShrink:0}}>
        <div/>
        <div style={{padding:"0 16px",fontWeight:600,fontSize:"11px",letterSpacing:"0.1em",textTransform:"uppercase",color:"#16294A",display:"flex",alignItems:"center",gap:"5px",borderBottom:"2px solid #16294A",marginBottom:"-2px"}}>
          Follow-Up Date
          <svg width="8" height="9" viewBox="0 0 8 9" fill="none"><path d="M4 8V1M1.5 3.5L4 1l2.5 2.5" stroke="#16294A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>
      {rows.map((row,i) => (
        <div key={i} style={{display:"grid",gridTemplateColumns:"4px 1fr",background:row.bg,borderBottom:`1px solid ${row.borderColor}`,flex:1,alignItems:"center"}}>
          <div style={{background:row.bar,alignSelf:"stretch"}}/>
          <div style={{padding:"0 16px",display:"flex",alignItems:"center",gap:"8px"}}>
            <span style={{fontSize:"14px",color:"#2B261F",whiteSpace:"nowrap"}}>{row.date}</span>
            <span style={{display:"inline-flex",background:"#F9EAEA",padding:"3px 8px",borderRadius:"3px",fontWeight:700,fontSize:"10px",color:"#8C2020",letterSpacing:"0.07em",textTransform:"uppercase",whiteSpace:"nowrap"}}>Overdue</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function OverdueCard() {
  return (
    <div style={{overflow:"hidden",aspectRatio:"6/5",background:"#F7F4EF",fontFamily:"'Hanken Grotesk',sans-serif",marginTop:"28px",display:"flex",alignItems:"center"}}>
      <div style={{padding:"0 28px",width:"100%"}}>
        <h1 style={{fontFamily:"Archivo,sans-serif",fontWeight:700,fontSize:"28px",letterSpacing:"-0.012em",color:"#367C2B",margin:"0 0 10px",lineHeight:1}}>Work Queue</h1>
        <div style={{fontSize:"13px",color:"#847868",display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}}>
          <span>127 applications</span>
          <span style={{color:"#E1DACE"}}>·</span>
          <span style={{display:"flex",alignItems:"center",gap:"6px"}}>
            <span style={{width:"7px",height:"7px",borderRadius:"50%",background:"#8C2020",display:"inline-block",flexShrink:0}}/>
            <span style={{color:"#8C2020",fontWeight:700,fontSize:"14px"}}>6 follow-ups overdue</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── HELPERS ─────────────────────────────────────────── */
function SectionCard({ headerColor = C.blue, eyebrow, children }) {
  const headerText = headerColor === C.blue ? C.paper : C.ink;
  return (
    <div className="jd-section-card">
      <div className="jd-section-header" style={{background:headerColor}}>
        <span style={{fontFamily:"'Inter Tight','Inter',sans-serif",fontSize:"13.5px",fontWeight:800,color:headerText}}>{eyebrow}</span>
      </div>
      <div className="jd-section-body">{children}</div>
    </div>
  );
}

function BodyText({ children, style={} }) {
  return <p style={{fontFamily:"'Inter Tight','Inter',sans-serif",fontSize:"clamp(15px,1.8vw,18px)",color:C.ink,lineHeight:1.65,margin:0,...style}}>{children}</p>;
}

function ColLabel({ children }) {
  return <p style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",fontWeight:500,letterSpacing:"0.1em",textTransform:"uppercase",color:C.muted,marginBottom:"12px"}}>{children}</p>;
}

/* ── PAGE ───────────────────────────────────────────────── */
export default function CECCaseStudy() {
  return (
    <div style={{background:C.paper}}>
      <style>{PAGE_CSS}</style>
      <Header/>

      <main className="jd-page-wrap" style={{padding:`24px ${PAGE_X} 80px`,maxWidth:"1700px",margin:"0 auto"}}>

        {/* EYEBROW + HEADLINE */}
        <div style={{font:`500 12px 'IBM Plex Mono',monospace`,letterSpacing:"2px",textTransform:"uppercase",color:C.blue,marginBottom:"16px"}}>case study № 01 · enterprise ux · john deere · 2026</div>
        <h1 style={{fontFamily:"'Bricolage Grotesque','Inter Tight',sans-serif",fontSize:"76px",fontWeight:800,lineHeight:1,letterSpacing:"-2.2px",color:C.ink,marginBottom:"36px",maxWidth:"1000px"}}>
          john deere work queue follow-up date
        </h1>

        {/* META CARDS */}
        <div className="overview-two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"16px",marginBottom:"32px",maxWidth:"920px"}}>
          <div style={{background:C.card,borderRadius:"10px",border:`1.5px solid ${C.ink}`,overflow:"hidden"}}>
            <div style={{background:C.blue,color:C.paper,padding:"7px 14px",fontWeight:800,fontSize:"12px"}}>role</div>
            <div style={{padding:"12px 14px",fontSize:"13.5px",lineHeight:1.5}}>sole ux designer, embedded with product & engineering</div>
          </div>
          <div style={{background:C.card,borderRadius:"10px",border:`1.5px solid ${C.ink}`,overflow:"hidden"}}>
            <div style={{background:C.pink,padding:"7px 14px",fontWeight:800,fontSize:"12px"}}>responsibilities</div>
            <div style={{padding:"12px 14px",fontSize:"13.5px",lineHeight:1.5}}>research, synthesis, interaction & interface design, stakeholder comms</div>
          </div>
          <div style={{background:C.card,borderRadius:"10px",border:`1.5px solid ${C.ink}`,overflow:"hidden"}}>
            <div style={{background:C.tangerine,padding:"7px 14px",fontWeight:800,fontSize:"12px"}}>outcome</div>
            <div style={{padding:"12px 14px",fontSize:"13.5px",lineHeight:1.5}}>reframed a layout fix as a <strong>change-management problem</strong> — and shipped tracking analysts actually use</div>
          </div>
        </div>

        {/* BRIEF */}
        <SectionCard headerColor={C.blue} eyebrow="1 — strategy · the brief">
          <BodyText>John Deere needed a way to stop applications from stalling in analysts' queues. A solution had already been scoped. As the sole UX designer embedded with the product and engineering team, I set out to validate it before building it.</BodyText>
        </SectionCard>

        {/* PROCESS STRIP */}
        <div style={{marginBottom:"32px"}}>
          <p style={{font:`500 12px 'IBM Plex Mono',monospace`,letterSpacing:"2px",textTransform:"uppercase",color:C.blue,marginBottom:"16px"}}>the process</p>
          <div className="proc-strip" style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"10px"}}>
            {["strategy","research","synthesis","design","test"].map((step,i) => (
              <a key={step} href={`#step-${i+1}`} className="jd-proc-tile"
                style={{
                  background:PROCESS_COLORS[i],
                  color:PROCESS_COLORS[i]===C.blue?C.paper:C.ink,
                  textDecoration:"none",textAlign:"center",padding:"16px 8px",display:"block",
                }}>
                <span style={{display:"block",fontWeight:800,fontSize:"26px",fontFamily:"'Bricolage Grotesque',sans-serif"}}>{i+1}</span>
                <span style={{display:"block",fontWeight:600,fontSize:"12.5px",marginTop:"2px"}}>{step}</span>
              </a>
            ))}
          </div>
        </div>

        {/* COMBINE PHOTO */}
        <div className="jd-cs-img" style={{height:"420px"}}>
          <img src="/images/jd-combine.jpg" alt="Combine harvester" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"50% 40%",display:"block",border:"none",borderRadius:0}}/>
        </div>

        {/* CONTEXT */}
        <SectionCard headerColor={C.tangerine} eyebrow="context">
          <BodyText>John Deere's credit analysts work inside Credit Hub, reviewing applications and moving each one toward a decision from a shared queue called the Work Queue. Applications that should resolve in hours or days were sitting untouched for weeks, sometimes months.</BodyText>
        </SectionCard>

        {/* PROPOSAL */}
        <SectionCard headerColor={C.pink} eyebrow="proposal">
          <BodyText>The proposed fix was a Follow-Up Date column, set using an existing application status: Pending. On paper, it was clean and didn't require any massive rework. Before committing, I wanted to understand how analysts actually worked the queue, and whether a Pending-driven follow-up date would fit how analysts moved through Credit Hub. I created some design concepts and put them in front of our users.</BodyText>
        </SectionCard>

        {/* WORK QUEUE BEFORE */}
        <div style={{background:C.card,borderRadius:"12px",border:`1.5px solid ${C.ink}`,overflow:"hidden",marginBottom:"32px"}}>
          <div style={{background:C.blue,padding:"14px 24px",borderBottom:`1.5px solid ${C.ink}`}}>
            <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",fontWeight:500,color:C.white,letterSpacing:"0.12em",textTransform:"uppercase"}}>work queue — before</span>
          </div>
          <div style={{padding:"24px"}}>
            <div style={{borderRadius:"8px",overflow:"hidden",border:`1.5px solid ${C.ink}`}}>
              <img src="/images/jd-before.png" alt="Work Queue before" loading="lazy" style={{width:"100%",height:"auto",display:"block",border:"none",borderRadius:0}}/>
            </div>
          </div>
        </div>

        {/* RESEARCH */}
        <SectionCard headerColor={C.pink} eyebrow="2 — research">
          <div className="research-row" style={{gap:"0",margin:"0 -32px"}}>
            {[
              {n:"01",label:"Observe",text:"Watched analysts work their actual applications in real time: how they moved through the queue, what they tracked and used within the system."},
              {n:"02",label:"Probe",text:"Asked directly about the Pending status: did they use it, and in what cases?"},
              {n:"03",label:"Test",text:"Showed new design options and asked for their preference."},
            ].map((step,i,arr) => (
              <div key={step.n} style={{flex:1,padding:"24px 32px",borderRight:i<arr.length-1?`1.5px solid ${C.ink}`:"none",display:"flex",flexDirection:"column",gap:"12px"}}>
                <div style={{display:"inline-block",background:PROCESS_COLORS[i],borderRadius:"4px",padding:"2px 8px",alignSelf:"flex-start"}}>
                  <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"10px",fontWeight:500,color:C.white,letterSpacing:"0.06em"}}>{step.n}</span>
                </div>
                <h3 style={{fontFamily:"'Bricolage Grotesque','Inter Tight',sans-serif",fontSize:"20px",fontWeight:700,color:C.ink,margin:0,textTransform:"uppercase",letterSpacing:"-0.01em"}}>{step.label}</h3>
                <p style={{fontFamily:"'Inter Tight','Inter',sans-serif",fontSize:"14px",color:C.ink,lineHeight:1.65,margin:0}}>{step.text}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* FINDING CALLOUT */}
        <div style={{border:`1.5px solid ${C.ink}`,borderRadius:"8px",background:C.pink,padding:"16px 18px",marginBottom:"18px"}}>
          <div style={{font:`500 11px 'IBM Plex Mono',monospace`,letterSpacing:"2px",textTransform:"uppercase",marginBottom:"6px"}}>finding</div>
          <p style={{margin:0,fontSize:"16px",lineHeight:1.5,fontWeight:700}}>Neither analyst used Pending. Neither knew it existed.</p>
          <p style={{margin:"10px 0 0",fontSize:"14px",lineHeight:1.6}}>One set applications to Qualified instead; the other wasn't sure they could set Pending at all. The mechanism the proposed solution depended on was invisible to the people meant to use it — if the Follow-Up Date could only be set through Pending, the column would ship empty.</p>
        </div>

        {/* SYNTHESIS */}
        <SectionCard headerColor={C.tangerine} eyebrow="3 — synthesis">
          <BodyText>Two problems were wearing one solution: analysts needed a visible way to track follow-ups inside the workflow they already used, and the business wanted analysts to adopt a status they didn't know existed. This was a change-management effort, not a layout fix. Once separated, the two weren't mutually exclusive. We could give analysts follow-up tracking, while the business pursued Pending adoption on its own track.</BodyText>
        </SectionCard>

        {/* DESIGN */}
        <SectionCard headerColor={C.blue} eyebrow="4 — design">
          <BodyText>Both analysts independently preferred a plain Follow-Up Date over a day-count. It was easier to glance at and interpret. Beyond the column, they responded to OVERDUE and NEW labels, a queue color-coded by priority, and filters tucked into a drawer instead of crowding the table.</BodyText>
        </SectionCard>

        {/* COMPARISON */}
        <div style={{background:C.card,borderRadius:"12px",border:`1.5px solid ${C.ink}`,overflow:"hidden",marginBottom:"24px"}}>
          <div style={{padding:"24px",display:"flex",justifyContent:"center"}}>
            <img src="/images/jd-comparison.png" alt="Date vs. day-count comparison" style={{display:"block",maxWidth:"100%",border:"none"}}/>
          </div>
        </div>

        {/* WORK QUEUE AFTER */}
        <div style={{background:C.card,borderRadius:"12px",border:`1.5px solid ${C.ink}`,overflow:"hidden",marginBottom:"32px"}}>
          <div style={{background:C.blue,padding:"14px 24px",borderBottom:`1.5px solid ${C.ink}`}}>
            <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",fontWeight:500,color:C.white,letterSpacing:"0.12em",textTransform:"uppercase"}}>work queue — after</span>
          </div>
          <div style={{padding:"24px"}}>
            <div style={{borderRadius:"8px",overflow:"hidden",border:`1.5px solid ${C.ink}`}}>
              <img src="/images/jd-after.png" alt="Work Queue after" loading="lazy" style={{width:"100%",height:"auto",display:"block",border:"none",borderRadius:0}}/>
            </div>
          </div>
        </div>

        {/* NEXT UP */}
        <a href="/case-study/jd-credit-hub-guarantor" style={{display:"block",textDecoration:"none"}}>
          <div style={{background:C.card,borderRadius:"12px",border:`1.5px solid ${C.ink}`,overflow:"hidden",transition:"transform 0.22s, box-shadow 0.22s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow=`5px 5px 0 ${C.ink}`;}}
            onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
            <div style={{background:C.blue,padding:"12px 24px",borderBottom:`1.5px solid ${C.ink}`}}>
              <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",fontWeight:500,color:C.white,letterSpacing:"0.1em",textTransform:"uppercase"}}>next up</span>
            </div>
            <div style={{padding:"24px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px"}}>
              <h3 style={{fontFamily:"'Bricolage Grotesque','Inter Tight',sans-serif",fontSize:"24px",fontWeight:700,color:C.ink,margin:0,letterSpacing:"-0.02em"}}>John Deere Credit Hub — Guarantor</h3>
              <span style={{fontFamily:"'Inter Tight','Inter',sans-serif",fontSize:"22px",color:C.blue,flexShrink:0}}>→</span>
            </div>
          </div>
        </a>
      </main>

      <SiteFooter/>
    </div>
  );
}
