"use client";
import React from "react";
import { C, BASE_CSS, Header, SiteFooter } from "../../shared";

const PROCESS_COLORS = [C.blue, C.pink, C.tangerine, C.blue, C.pink];

const PAGE_CSS = `
  ${BASE_CSS}
  .jd2-section-card{background:${C.card};border-radius:12px;border:1.5px solid ${C.ink};overflow:hidden;margin-bottom:24px;}
  .jd2-section-header{padding:9px 18px;border-bottom:1.5px solid ${C.ink};}
  .jd2-section-body{padding:18px 22px;overflow:hidden;}
  .jd2-proc-tile{border-radius:10px;border:1.5px solid ${C.ink};overflow:hidden;}
  .jd2-options-grid>*{min-width:0;overflow:hidden;}
  @media(max-width:900px){
    .jd2-page-wrap{padding:32px 24px!important}
    .jd2-meta{grid-template-columns:1fr!important}
    .jd2-proc-strip{grid-template-columns:1fr 1fr 1fr!important}
    .jd2-options-grid{grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important}
  }
  @media(max-width:600px){
    .jd2-proc-strip{grid-template-columns:1fr 1fr!important}
    .jd2-options-grid{grid-template-columns:minmax(0,1fr)!important}
  }
`;

function SectionCard({ headerColor = C.blue, eyebrow, children }) {
  const headerText = headerColor === C.blue ? C.paper : C.ink;
  return (
    <div className="jd2-section-card">
      <div className="jd2-section-header" style={{background:headerColor}}>
        <span style={{fontFamily:"'Inter Tight','Inter',sans-serif",fontSize:"13.5px",fontWeight:800,color:headerText}}>{eyebrow}</span>
      </div>
      <div className="jd2-section-body">{children}</div>
    </div>
  );
}

function BodyText({ children, style={} }) {
  return <p style={{fontFamily:"'Inter Tight','Inter',sans-serif",fontSize:"clamp(15px,1.8vw,18px)",color:C.ink,lineHeight:1.65,margin:0,...style}}>{children}</p>;
}


const OPTIONS = [
  { n:"01", title:"Banner + separate section", body:"A prominent alert at the top of the tab, with a dedicated guarantee section below", img:"/images/jd-guarantor-01-banner.png" },
  { n:"02", title:"Cards", body:"Guarantors grouped into expandable cards, with the guarantee type input inside each card", img:"/images/jd-guarantor-02-cards.png" },
  { n:"03", title:"Integrated table row", body:"Guarantors added as rows inside the existing Involved Parties table, with guarantee type as a column", img:"/images/jd-guarantor-03-table-row.png" },
  { n:"04", title:"Inline dropdown", body:"A dropdown placed directly inside the expanded applicant row, where the guarantor's information already appeared", img:"/images/jd-guarantor-04-inline.png" },
];

export default function JDCreditHubGuarantor() {
  return (
    <div style={{background:C.paper}}>
      <style>{PAGE_CSS}</style>
      <Header/>

      <main className="jd2-page-wrap" style={{padding:"48px 28px 80px",maxWidth:"1700px",margin:"0 auto"}}>

        {/* EYEBROW + HEADLINE */}
        <div style={{font:`500 12px 'IBM Plex Mono',monospace`,letterSpacing:"2px",textTransform:"uppercase",color:C.blue,marginBottom:"16px"}}>case study № 02 · enterprise ux · john deere · 2026</div>
        <h1 style={{fontFamily:"'Bricolage Grotesque','Inter Tight',sans-serif",fontSize:"76px",fontWeight:800,lineHeight:1,letterSpacing:"-2.2px",color:C.ink,marginBottom:"36px",maxWidth:"1000px"}}>
          john deere credit hub — guarantor
        </h1>

        {/* META CARDS */}
        <div className="jd2-meta" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"16px",marginBottom:"32px",maxWidth:"920px"}}>
          <div style={{background:C.card,borderRadius:"10px",border:`1.5px solid ${C.ink}`,overflow:"hidden"}}>
            <div style={{background:C.blue,color:C.paper,padding:"7px 14px",fontWeight:800,fontSize:"12px"}}>role</div>
            <div style={{padding:"12px 14px",fontSize:"13.5px",lineHeight:1.5}}>sole ux designer, embedded with product & engineering</div>
          </div>
          <div style={{background:C.card,borderRadius:"10px",border:`1.5px solid ${C.ink}`,overflow:"hidden"}}>
            <div style={{background:C.pink,padding:"7px 14px",fontWeight:800,fontSize:"12px"}}>responsibilities</div>
            <div style={{padding:"12px 14px",fontSize:"13.5px",lineHeight:1.5}}>design exploration, interaction & interface design, stakeholder presentation</div>
          </div>
          <div style={{background:C.card,borderRadius:"10px",border:`1.5px solid ${C.ink}`,overflow:"hidden"}}>
            <div style={{background:C.tangerine,padding:"7px 14px",fontWeight:800,fontSize:"12px"}}>outcome</div>
            <div style={{padding:"12px 14px",fontSize:"13.5px",lineHeight:1.5}}>four directions explored, one recommended + shipped</div>
          </div>
        </div>

        {/* BRIEF */}
        <SectionCard headerColor={C.blue} eyebrow="1 — strategy · the brief">
          <BodyText>When a dealer adds a guarantor to a financing application, the analyst needs to select a guarantee type before making a credit decision. The existing interface had no way to handle it. I needed to add that capability without disrupting a dense, daily-use interface.</BodyText>
        </SectionCard>

        {/* PROCESS STRIP */}
        <div style={{marginBottom:"32px"}}>
          <p style={{font:`500 12px 'IBM Plex Mono',monospace`,letterSpacing:"2px",textTransform:"uppercase",color:C.blue,marginBottom:"16px"}}>the process</p>
          <div className="jd2-proc-strip" style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"10px"}}>
            {["strategy","explore","evaluate","recommend","implement"].map((step,i) => (
              <div key={step} className="jd2-proc-tile"
                style={{background:PROCESS_COLORS[i],color:PROCESS_COLORS[i]===C.blue?C.paper:C.ink,textAlign:"center",padding:"16px 8px",display:"block"}}>
                <span style={{display:"block",fontWeight:800,fontSize:"26px",fontFamily:"'Bricolage Grotesque',sans-serif"}}>{i+1}</span>
                <span style={{display:"block",fontWeight:600,fontSize:"12.5px",marginTop:"2px"}}>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CONTEXT */}
        <SectionCard headerColor={C.tangerine} eyebrow="context">
          <BodyText>Guarantors appear on Canada installment and lease applications only — a small percentage of cases, but a required step when they do. Analysts working the Involved Parties tab had no place to record the guarantee type and no path to a decision without it.</BodyText>
        </SectionCard>

        {/* THE OPTIONS */}
        <SectionCard headerColor={C.pink} eyebrow="the options">
          <BodyText>Three guarantee types needed to be selectable: Guarantee Already on File, Unlimited Guarantee and Limited Guarantee. The question was where and how to surface these options without adding friction to an already steady workflow.</BodyText>
        </SectionCard>

        {/* EXPLORE */}
        <SectionCard headerColor={C.blue} eyebrow="2 — explore">
          <BodyText style={{marginBottom:"24px"}}>I spoke with a credit analyst to understand how the guarantor workflow operated before designing anything. From there I explored four directions.</BodyText>
          <div className="jd2-options-grid" style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",gap:"16px"}}>
            {OPTIONS.map((opt,i) => (
              <div key={opt.n} style={{background:C.paper,border:`1.5px solid ${C.ink}`,borderRadius:"10px",overflow:"hidden",minWidth:0,width:"100%"}}>
                <div style={{background:PROCESS_COLORS[i % PROCESS_COLORS.length],padding:"8px 16px",borderBottom:`1.5px solid ${C.ink}`}}>
                  <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"12px",fontWeight:700,color:PROCESS_COLORS[i % PROCESS_COLORS.length]===C.blue?C.paper:C.ink,letterSpacing:"0.06em"}}>{opt.n}</span>
                </div>
                <div style={{padding:"16px",overflow:"hidden"}}>
                  <p style={{fontFamily:"'Bricolage Grotesque','Inter Tight',sans-serif",fontSize:"16px",fontWeight:700,color:C.ink,margin:"0 0 8px",letterSpacing:"-0.02em"}}>{opt.title}</p>
                  <p style={{fontFamily:"'Inter Tight','Inter',sans-serif",fontSize:"14px",color:C.muted,lineHeight:1.6,margin:"0 0 16px"}}>{opt.body}</p>
                  <div style={{borderRadius:"8px",overflow:"hidden",border:`1.5px solid ${C.ink}`,width:"100%",boxSizing:"border-box"}}>
                    <img src={opt.img} alt={opt.title} style={{width:"100%",maxWidth:"100%",height:"auto",display:"block",border:"none",borderRadius:0}}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* EVALUATE */}
        <SectionCard headerColor={C.tangerine} eyebrow="3 — evaluate">
          <BodyText>Each option solved the problem, but not equally. The banner and separate section added a new layer of navigation. The cards introduced a UI pattern that didn't exist elsewhere within the platform. The integrated row created visual ambiguity between applicants and guarantors. The inline dropdown required nothing new: no new section, patterns, nor relearning.</BodyText>
        </SectionCard>

        {/* RECOMMEND */}
        <SectionCard headerColor={C.pink} eyebrow="4 — recommend">
          <BodyText>I recommended the inline dropdown. It kept the guarantee type selection in context, next to the guarantor it applied to, inside the table analysts were already using. I presented all four options to the PM with rationale for each. We both agreed the dropdown was the best solution.</BodyText>
        </SectionCard>

        {/* IMAGE: final dropdown */}
        <div style={{background:C.card,borderRadius:"12px",border:`1.5px solid ${C.ink}`,overflow:"hidden",marginBottom:"24px"}}>
          <div style={{padding:"8px 16px",borderBottom:`1.5px solid ${C.ink}`}}>
            <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",fontWeight:500,letterSpacing:"0.1em",textTransform:"uppercase",color:C.muted}}>recommended — inline dropdown</span>
          </div>
          <div style={{padding:"24px"}}>
            <div style={{borderRadius:"8px",overflow:"hidden",border:`1.5px solid ${C.ink}`}}>
              <img src="/images/jd-guarantor-04-inline.png" alt="Inline dropdown — recommended solution" style={{width:"100%",height:"auto",display:"block",border:"none",borderRadius:0}}/>
            </div>
          </div>
        </div>

        {/* IMPLEMENT */}
        <SectionCard headerColor={C.blue} eyebrow="5 — implement">
          <BodyText>The final design included a validation state: if an analyst attempted a credit decision with a guarantor present but no guarantee type selected, the system surfaced a warning and blocked them from proceeding. With this addition, the feature shipped to production.</BodyText>
        </SectionCard>

        {/* IMAGE: decision modal */}
        <div style={{background:C.card,borderRadius:"12px",border:`1.5px solid ${C.ink}`,overflow:"hidden",marginBottom:"24px"}}>
          <div style={{padding:"8px 16px",borderBottom:`1.5px solid ${C.ink}`}}>
            <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",fontWeight:500,letterSpacing:"0.1em",textTransform:"uppercase",color:C.muted}}>decision modal — guarantor warning</span>
          </div>
          <div style={{padding:"40px 24px",display:"flex",justifyContent:"center"}}>
            <div style={{borderRadius:"8px",overflow:"hidden",border:`1.5px solid ${C.ink}`,maxWidth:"520px",width:"100%"}}>
              <img src="/images/jd-guarantor-05-decision-modal.png" alt="Decision modal with guarantor warning" style={{width:"100%",height:"auto",display:"block",border:"none",borderRadius:0}}/>
            </div>
          </div>
        </div>

        {/* TAKEAWAY */}
        <SectionCard headerColor={C.tangerine} eyebrow="takeaway">
          <BodyText>In a dense, daily-use interface, the solution that requires the least relearning serves the user most reliably. The dropdown won not because it was the most elegant option, but because it was the most respectful of the context it was entering.</BodyText>
        </SectionCard>

        {/* NEXT UP */}
        <a href="/case-study/plume-homepass-online-store" style={{display:"block",textDecoration:"none"}}>
          <div style={{background:C.card,borderRadius:"12px",border:`1.5px solid ${C.ink}`,overflow:"hidden",transition:"transform 0.22s, box-shadow 0.22s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow=`5px 5px 0 ${C.ink}`;}}
            onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
            <div style={{background:C.blue,padding:"12px 24px",borderBottom:`1.5px solid ${C.ink}`}}>
              <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",fontWeight:500,color:C.white,letterSpacing:"0.1em",textTransform:"uppercase"}}>next up</span>
            </div>
            <div style={{padding:"24px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px"}}>
              <h3 style={{fontFamily:"'Bricolage Grotesque','Inter Tight',sans-serif",fontSize:"24px",fontWeight:700,color:C.ink,margin:0,letterSpacing:"-0.02em"}}>Plume HomePass Ecommerce Store</h3>
              <span style={{fontFamily:"'Inter Tight','Inter',sans-serif",fontSize:"22px",color:C.blue,flexShrink:0}}>→</span>
            </div>
          </div>
        </a>

      </main>

      <SiteFooter/>
    </div>
  );
}
