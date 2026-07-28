"use client";
import React, { useState } from "react";
import { C, BASE_CSS, Header, SiteFooter, EMAIL, LINKEDIN } from "../../shared";

const STUDIES = {
  "the-pit": {
    title: "the pit app",
    role: "app design & ux strategy — concept to prototype",
    responsibilities: ["research","prototyping","branding","design system"],
    outcome: "a 0→1 social platform for music lovers — brand, system & product",
    goal: "The Pit is a social media platform built for music lovers that allows users to discover music, share what they're listening to, and connect with other fans who share the same musical interests and passions around the world.",
    heroImage: null,
    contextPhoto: null,
    process: ["STRATEGY","RESEARCH","WIREFRAME","BRANDING","PROTOTYPE","TEST"],
    hasResearch: true, numCompetitors: 3,
    competitorLogos: ["the-pit-competitor-1.png","the-pit-competitor-2.png","the-pit-competitor-3.png"],
    competitorLogoSizes: [{w:33,h:19},{w:28,h:28},{w:33,h:33}],
    researchSummary: "To understand the space I was entering, I conducted competitive analysis across existing social and music platforms with 5 or more users. I created a survey to better understand what people were currently using to discover and share music with their friends.",
    researchPhoto: null,
    hasMoodBoard: true, moodBoardImage: "the-pit-moodboard.jpg",
    branding: null,
    wireframes: ["the-pit-wf-1.png","the-pit-wf-2.png","the-pit-wf-3.png"],
    wireframeStyle: "the-pit",
    finalPhoto: "the-pit-final.jpg",
    prototypeTitle: "follow and message a user",
    screens: ["the-pit-screen-1.png","the-pit-screen-2.png","the-pit-screen-3.png"],
    closingPhoto: null,
    nextSlug: "jd-work-queue-follow-up-date", nextTitle: "John Deere Work Queue Follow-Up Date",
  },
  "plume-homepass-landing-page": {
    title: "plume homepass landing page",
    role: "ux & ui designer",
    responsibilities: ["competitive research","design system","prototype","developer handoff"],
    outcome: "A/B testing confirmed users preferred guided recommendations over unassisted browsing—moving through decisions faster and with more confidence.",
    goal: "With the launch of Plume HomePass's newest product, the SuperPod G6, the landing page needed to do two things: introduce the new product and help users understand which SuperPod was right for them. Awareness alone wasn't enough. Users needed guidance to make a confident purchase.",
    heroImage: null,
    contextPhoto: null,
    process: ["STRATEGY","RESEARCH","WIREFRAME","PROTOTYPE","TEST","IMPLEMENT"],
    hasStrategy: true,
    strategyText: "The existing landing page put the burden of comparison on the user. They had to browse the lineup, compare differences between products and decide. But for the SuperPod, the right choice depends on home size, internet speed and the user's number of IoT devices. The strategic direction was to shift from a passive display to active guidance.",
    hasResearch: true, numCompetitors: 2, competitorLogos: ["plume-competitor-eero.png","plume-competitor-nest.png"], competitorLogoSizes: [{w:50,h:25},{w:30,h:12.92}],
    competitiveAnalysisText: null,
    researchSummary: "I examined how competitors structured their product pages and how they handled comparison, decision support and purchase flow. Most relied on static spec tables that assumed users already knew what they were looking for. The opportunity for Plume was to meet users where they were: uncertain, comparing options, needing a recommendation rather than a data dump.",
    researchPhoto: null,
    hasMoodBoard: false,
    branding: null,
    hasUIKit: true, uiKitImage: "plume-landing-uikit.png",
    wireframes: [],
    wireframeText: "With the direction set, I created landing page wireframes. These led with the SuperPod G6 and integrated the configurator as the primary decisioning tool. The page structure moved users from awareness to action.",
    finalPhoto: null,
    prototypeTitle: "product configurator",
    prototypeText: "I extended Plume's existing design system while building out the new landing page with the configurator section. I added a few new components in Figma to support the new product.",
    screens: ["plume-landing-screen-1.png","plume-landing-screen-2.png","plume-landing-screen-3.png"],
    testText: "Plume's user research team ran A/B testing with real users, comparing the configurator experience against unassisted browsing. Users strongly preferred the guided approach; they were given a recommendation and no longer had to compare specs on their own. They moved through their decision faster and with more confidence. The data validated the core strategic bet: guidance over browsing.",
    implementText: "I handed off the designs to the development team, talking through the prototype, clarifying interaction details and aligning on what would ship. The landing page launched with a modified configurator section—a common constraint of the development process. The guided recommendation approach remained the foundation of the final landing page.",
    closingPhoto: null,
    nextSlug: "the-pit", nextTitle: "The Pit App",
  },
  "plume-homepass-online-store": {
    title: "plume homepass ecommerce store",
    role: "ux & ui design — shopify migration through dev handoff",
    responsibilities: ["shopify redesign","competitive research","prototype","developer handoff"],
    outcome: "conversion rose enough that Plume rolled the approach across its other brands",
    goal: "Plume HomePass had an existing e-commerce store that wasn't working hard enough. The visual design felt off-brand, the navigation was difficult to move through and the product display was cluttered enough to slow users down before they ever reached checkout. Plume needed the store migrated to Shopify and simplified in a way that actually converted.",
    heroImage: null,
    contextPhoto: null,
    process: ["STRATEGY","RESEARCH","WIREFRAME","PROTOTYPE","TEST","IMPLEMENT"],
    hasStrategy: true,
    strategyText: "The core problem wasn't aesthetic. A cluttered store with too many products competing for attention creates decision fatigue, and decision fatigue kills conversions. The strategic direction was restraint: show fewer products at once, clean up the layout and give users a clearer path from browsing to buying. Shopify would give Plume the platform stability they needed.",
    hasResearch: true, numCompetitors: 0,
    researchSummary: "I looked at how comparable e-commerce stores handled product display, navigation structure and checkout flow. The stores converting best were showing just the right amount. Simplified layouts with deliberate hierarchy outperformed dense, feature-heavy pages across the competitive set.",
    researchPhoto: "plume-store-pod.webp",
    researchPhotoGrayscale: true,
    hasBeforeAfter: false,
    hasMoodBoard: false,
    branding: null,
    wireframes: [],
    wireframeBeforeImage: null,
    wireframeText: "I created store wireframes that reduced visual noise. Fewer products surfaced at once, there was a cleaner category structure and I adjusted the layout to move users toward checkout. The before state showed a page asking users to do too much work to find what they needed.",
    styleGuideImage: "plume-store-styleguide.png",
    finalPhoto: null,
    prototypeTitle: null,
    prototypeText: "I extended Plume's existing design system to build out the redesigned store in Figma, adding components as needed to support the Shopify environment and the simplified product display. The prototype was built to handoff fidelity: detailed enough that developers could build directly from the files without ambiguity.",
    screens: [],
    postPrototypeScreens: ["plume-store-checkout-1.png","plume-store-checkout-2.png","plume-store-checkout-3.png"],
    testText: "Plume's user research team tested the new store with real users before launch. Users moved through the store more fluidly and reached checkout with less friction. The feedback validated that restraint was the right direction.",
    implementText: "I handed off Figma files directly to the development team, who built and deployed the store to Shopify. Conversion rates increased enough that Plume decided to roll the same design approach across their other brands, which I also designed.",
    implementAfterImage: null,
    implementStyleGuideImage: null,
    implementScreens: [],
    postImplementBeforeAfter: true,
    beforeImage: "plume-store-before.png",
    afterImage: "plume-store-after.png",
    takeawayText: "The instinct in e-commerce is often to show products, options and information. This project was a case for the opposite. Removing friction and reducing choices gave users a faster, clearer path. Sometimes the most effective decision is knowing what to take away.",
    closingPhoto: null,
    nextSlug: "plume-homepass-landing-page", nextTitle: "Plume HomePass Landing Page",
  },
  "personal-portfolio": {
    title: "personal portfolio",
    role: "Designer & Developer",
    responsibilities: ["UX & UI design","Research","Brand guide","Design system","Prototype","Implement"],
    outcome: "A portfolio that reflects my design philosophy and showcases my process end-to-end.",
    goal: "Creating a portfolio for any designer is an intimidating yet exciting task. This is the documentation of my design vision and process. I wanted to create something elegant, refined and approachable. My goal was to take all I had from the past few years and mold it into a website. A big deal, right?",
    heroImage: "portfolio-hero.jpg",
    contextPhoto: "portfolio-context.jpg",
    process: ["STRATEGY","RESEARCH","WIREFRAME","BRANDING","PROTOTYPE","IMPLEMENT"],
    hasResearch: false,
    hasStrategy: true,
    hasMoodBoard: true, moodBoardImage: "portfolio-moodboard.jpg", moodBoardDimensions: {w:768, h:889},
    branding: { colors:["#f3f3fb","#1b1b1b","#888888"], fonts:["Pigeon Italic","Inter Regular"], brandingImage:"portfolio-branding.jpg", styleGuideImage:"portfolio-styleguide.png" },
    wireframes: ["portfolio-wf-1.png","portfolio-wf-2.png"],
    wireframeStyle: "wide",
    finalPhoto: null,
    prototypeTitle: null,
    screens: [],
    closingPhoto: "portfolio-closing.jpg",
    nextSlug: "jd-work-queue-follow-up-date", nextTitle: "John Deere Work Queue",
  },
};

const PROCESS_COLORS = [C.blue, C.pink, C.tangerine, C.blue, C.pink, C.tangerine];

const PAGE_CSS = `
  ${BASE_CSS}
  .section-card{background:${C.card};border-radius:12px;border:1.5px solid ${C.ink};overflow:hidden;margin-bottom:24px;}
  .section-header{padding:9px 18px;border-bottom:1.5px solid ${C.ink};}
  .section-body{padding:18px 22px;}
  .proc-tile{border-radius:12px;border:1.5px solid ${C.ink};overflow:hidden;transition:transform 0.2s;}
  .proc-tile:hover{transform:translateY(-3px);}
  .cs-img{border:1.5px solid ${C.ink};border-radius:8px;overflow:hidden;display:block;}
  .cs-img img{width:100%;height:100%;object-fit:cover;display:block;border:none;border-radius:0;}
  .before-after-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;}
  @media(max-width:1024px){
    .proc-strip{grid-template-columns:repeat(3,1fr)!important}
    .meta-cards{grid-template-columns:1fr!important}
  }
  @media(max-width:768px){
    .cs-page-wrap{padding:32px 24px!important}
    .proc-strip{grid-template-columns:1fr 1fr!important}

    .feature-row>div{width:100%!important;margin-top:0!important}
    .before-after-grid{grid-template-columns:1fr!important}
    .wf-row{flex-direction:column!important;gap:16px!important}
    .wf-item-wide{width:100%!important;height:auto!important}
    .wf-item-pit{width:44%!important}
    .proto-phone-row{gap:12px!important}
    .proto-phone-item{width:28%!important}
    .two-col{grid-template-columns:1fr!important}
  }
  @media(max-width:480px){
    .proc-strip{grid-template-columns:1fr!important}
  }
`;

/* ── HELPERS ─────────────────────────────────────────── */

function SectionCard({ headerColor = C.blue, eyebrow, children }) {
  const headerText = headerColor === C.blue ? C.paper : C.ink;
  return (
    <div className="section-card">
      <div className="section-header" style={{background:headerColor}}>
        <span style={{fontFamily:"'Inter Tight','Inter',sans-serif",fontSize:"13.5px",fontWeight:800,color:headerText}}>{eyebrow}</span>
      </div>
      <div className="section-body">{children}</div>
    </div>
  );
}

function BodyText({ children, style={} }) {
  return <p style={{fontFamily:"'Inter Tight','Inter',sans-serif",fontSize:"clamp(15px,1.8vw,18px)",color:C.ink,lineHeight:1.65,margin:0,...style}}>{children}</p>;
}

function ColLabel({ children }) {
  return <p style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",fontWeight:500,letterSpacing:"0.1em",textTransform:"uppercase",color:C.muted,marginBottom:"12px"}}>{children}</p>;
}

function FullImg({ src, alt="", height="480px", grayscale=false }) {
  if (!src) return null;
  return (
    <div className="cs-img" style={{width:"100%",height,marginBottom:"24px"}}>
      <img src={`/images/${src}`} alt={alt} loading="lazy" style={{filter:grayscale?"grayscale(1)":"none"}}/>
    </div>
  );
}


/* ── MAIN PAGE ────────────────────────────────────────── */
export default function CaseStudyPage({ params }) {
  const slug = React.use(params).slug;
  const cs = STUDIES[slug];

  if (!cs) return (
    <div style={{background:C.paper,minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"12px"}}>
      <p style={{fontFamily:"'Bricolage Grotesque','Inter Tight',sans-serif",fontSize:"24px",fontWeight:700,color:C.ink}}>Case study not found.</p>
      <a href="/" style={{fontFamily:"'Inter Tight','Inter',sans-serif",fontSize:"15px",color:C.blue,textDecoration:"underline"}}>← Go home</a>
    </div>
  );

  return (
    <div style={{background:C.paper}}>
      <style>{PAGE_CSS}</style>
      <Header/>

      <main className="cs-page-wrap" style={{padding:"48px 28px 80px",maxWidth:"1700px",margin:"0 auto"}}>

        {/* 1 · EYEBROW + HEADLINE */}
        <div style={{font:`500 12px 'IBM Plex Mono',monospace`,letterSpacing:"2px",textTransform:"uppercase",color:C.blue,marginBottom:"16px"}}>case study</div>
        <h1 style={{
          fontFamily:"'Bricolage Grotesque','Inter Tight',sans-serif",
          fontSize:"76px",fontWeight:800,lineHeight:1,
          letterSpacing:"-2.2px",color:C.ink,
          marginBottom:"36px",maxWidth:"1000px",
        }}>{cs.title}</h1>

        {/* 2 · META CARDS */}
        <div className="meta-cards" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"16px",marginBottom:"32px",maxWidth:"920px"}}>
          {[
            { label:"role", value:cs.role || "product designer", headerColor:C.blue, textColor:C.paper },
            { label:"responsibilities", value:cs.responsibilities.join(", "), headerColor:C.pink, textColor:C.ink },
            { label:"outcome", value:cs.outcome || cs.goal.slice(0,120)+"…", headerColor:C.tangerine, textColor:C.ink },
          ].map(({label,value,headerColor,textColor},i) => (
            <div key={label} style={{background:C.card,borderRadius:"10px",border:`1.5px solid ${C.ink}`,overflow:"hidden"}}>
              <div style={{background:headerColor,color:textColor,padding:"7px 14px",fontWeight:800,fontSize:"12px"}}>{label}</div>
              <div style={{padding:"12px 14px",fontSize:"13.5px",lineHeight:1.5}}>{value}</div>
            </div>
          ))}
        </div>

        {/* 3 · HERO IMAGE */}
        <FullImg src={cs.heroImage} alt={cs.title} height="520px"/>

        {/* 4 · THE GOAL */}
        <SectionCard headerColor={C.blue} eyebrow="the goal">
          <BodyText>{cs.goal}</BodyText>
        </SectionCard>

        {/* 6 · PROCESS STRIP */}
        <div style={{marginBottom:"32px"}}>
          <p style={{font:`500 12px 'IBM Plex Mono',monospace`,letterSpacing:"2px",textTransform:"uppercase",color:C.blue,marginBottom:"16px"}}>the process</p>
          <div className="proc-strip" style={{display:"grid",gridTemplateColumns:`repeat(${Math.min(cs.process.length,6)},1fr)`,gap:"10px"}}>
            {cs.process.map((step,i) => {
              const bg = PROCESS_COLORS[i%6];
              return (
                <div key={i} className="proc-tile"
                  style={{
                    background:bg,
                    color:bg===C.blue?C.paper:C.ink,
                    textAlign:"center",padding:"16px 8px",
                    border:`1.5px solid ${C.ink}`,borderRadius:"10px",
                  }}>
                  <span style={{display:"block",fontWeight:800,fontSize:"26px",fontFamily:"'Bricolage Grotesque',sans-serif"}}>{i+1}</span>
                  <span style={{display:"block",fontWeight:600,fontSize:"12.5px",marginTop:"2px"}}>{step.toLowerCase()}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 7 · CONTEXT PHOTO */}
        <FullImg src={cs.contextPhoto} alt="Context" height="480px"/>

        {/* 8 · STRATEGY */}
        {cs.hasStrategy && (
          <SectionCard headerColor={C.tangerine} eyebrow="strategy">
            {cs.strategyText ? (
              <BodyText>{cs.strategyText}</BodyText>
            ) : (
              <div className="two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px"}}>
                <BodyText>I began my process researching design portfolios that I loved and compiled a list of things that conveyed the feelings I was going for: elegant yet approachable.</BodyText>
                <BodyText>While narrowing the colors for my portfolio, I used AI to translate the images I chose from a color palette. I found a mood board and style guide that perfectly conveyed the feelings I wanted to capture.</BodyText>
              </div>
            )}
          </SectionCard>
        )}

        {/* 9 · RESEARCH */}
        {cs.hasResearch && (
          <SectionCard headerColor={C.pink} eyebrow="research">
            {cs.numCompetitors > 0 ? (
              <div className="two-col" style={{display:"grid",gridTemplateColumns:cs.competitiveAnalysisText?"1fr 1fr":"160px 1fr",gap:"40px",alignItems:"start"}}>
                <div>
                  <ColLabel>competitive analysis</ColLabel>
                  <div style={{display:"flex",gap:"10px",flexWrap:"wrap",marginBottom:"12px"}}>
                    {Array(cs.numCompetitors).fill(0).map((_,i) => (
                      <div key={i} style={{width:"44px",height:"44px",borderRadius:"50%",background:C.paper,border:`1.5px solid ${C.ink}`,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        {cs.competitorLogos?.[i] && (
                          <img src={`/images/${cs.competitorLogos[i]}`} alt={`Competitor ${i+1}`} style={{width:cs.competitorLogoSizes?.[i]?.w?`${cs.competitorLogoSizes[i].w}px`:"80%",height:cs.competitorLogoSizes?.[i]?.h?`${cs.competitorLogoSizes[i].h}px`:"80%",objectFit:"contain",border:"none",borderRadius:0}}/>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <ColLabel>findings</ColLabel>
                  <BodyText>{cs.researchSummary}</BodyText>
                </div>
              </div>
            ) : (
              <BodyText>{cs.researchSummary}</BodyText>
            )}
          </SectionCard>
        )}
        {cs.hasResearch && cs.researchPhoto && <FullImg src={cs.researchPhoto} alt="Research" height="480px" grayscale={!!cs.researchPhotoGrayscale}/>}

        {/* 10 · MOOD BOARD */}
        {cs.hasMoodBoard && cs.moodBoardImage && (
          <SectionCard headerColor={C.blue} eyebrow="mood board">
            <div style={{maxWidth:"600px",margin:"0 auto"}}>
              <div className="cs-img" style={{aspectRatio:"4/5",overflow:"hidden"}}>
                <img src={`/images/${cs.moodBoardImage}`} alt="Mood board" loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover",display:"block",border:"none",borderRadius:0}}/>
              </div>
            </div>
          </SectionCard>
        )}

        {/* 11 · BRANDING */}
        {cs.branding && (
          <SectionCard headerColor={C.pink} eyebrow="branding">
            {cs.branding.styleGuideImage ? (
              <div className="cs-img" style={{overflow:"hidden"}}>
                <img src={`/images/${cs.branding.styleGuideImage}`} alt="Style guide" loading="lazy" style={{width:"100%",height:"auto",display:"block",border:"none",borderRadius:0}}/>
              </div>
            ) : (
              <div style={{display:"flex",gap:"48px",flexWrap:"wrap",alignItems:"flex-start"}}>
                <div>
                  <ColLabel>colors</ColLabel>
                  <div style={{display:"flex",gap:"8px"}}>
                    {cs.branding.colors.map((hex,i) => (
                      <div key={i} style={{width:"28px",height:"28px",borderRadius:"50%",background:hex,border:`1.5px solid ${C.ink}`}}/>
                    ))}
                  </div>
                </div>
                <div>
                  <ColLabel>typography</ColLabel>
                  {cs.branding.fonts.map((f,i) => <p key={i} style={{fontFamily:"'Inter Tight','Inter',sans-serif",fontSize:"15px",color:C.ink,margin:"0 0 4px"}}>{f}</p>)}
                </div>
                {cs.branding.brandingImage && (
                  <div>
                    <ColLabel>logo</ColLabel>
                    <img src={`/images/${cs.branding.brandingImage}`} alt="Branding" style={{maxHeight:"52px",width:"auto",objectFit:"contain",border:"none",borderRadius:0}}/>
                  </div>
                )}
              </div>
            )}
          </SectionCard>
        )}

        {/* 12 · UI KIT */}
        {cs.hasUIKit && cs.uiKitImage && (
          <div className="section-card" style={{marginBottom:"24px"}}>
            <div className="section-header" style={{background:C.tangerine,borderBottom:"none"}}>
              <span style={{fontFamily:"'Inter Tight','Inter',sans-serif",fontSize:"13.5px",fontWeight:800,color:C.ink}}>UI kit</span>
            </div>
            <img src={`/images/${cs.uiKitImage}`} alt="UI Kit" loading="lazy" style={{width:"100%",height:"auto",display:"block",border:"none",borderRadius:0}}/>
          </div>
        )}

        {/* 13 · WIREFRAMES */}
        {(cs.wireframes?.length > 0 || cs.wireframeText || cs.wireframeBeforeImage) && (
          <SectionCard headerColor={C.blue} eyebrow="wireframes">
            {cs.wireframeText && <BodyText style={{marginBottom:cs.wireframes?.length > 0 ? "24px" : 0}}>{cs.wireframeText}</BodyText>}
            {cs.wireframeBeforeImage && (
              <div className="cs-img" style={{overflow:"hidden",marginTop:"16px"}}>
                <img src={`/images/${cs.wireframeBeforeImage}`} alt="Before" loading="lazy" style={{width:"100%",height:"auto",display:"block",border:"none",borderRadius:0}}/>
              </div>
            )}
            {cs.wireframes?.length > 0 && (
              <div style={{marginTop: cs.wireframeText ? "24px" : 0}}>
                {cs.wireframeStyle === "the-pit" ? (
                  <div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}>
                    {cs.wireframes.map((src,i) => (
                      <div key={i} className="wf-item-pit" style={{width:"280px",flexShrink:0,overflow:"hidden",aspectRatio:"337/727",border:`1.5px solid ${C.ink}`,borderRadius:"36px"}}>
                        <img src={`/images/${src}`} alt={`Wireframe ${i+1}`} style={{width:"100%",height:"100%",objectFit:"cover",display:"block",border:"none",borderRadius:0}}/>
                      </div>
                    ))}
                  </div>
                ) : cs.wireframeStyle === "wide" ? (
                  <div className="wf-row" style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}>
                    {cs.wireframes.map((src,i) => (
                      <div key={i} className="wf-item-wide cs-img" style={{flex:"0 0 calc(50% - 8px)",overflow:"hidden",aspectRatio:"735/641"}}>
                        <img src={`/images/${src}`} alt={`Wireframe ${i+1}`} style={{width:"100%",height:"100%",objectFit:"cover",display:"block",border:"none",borderRadius:0}}/>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{display:"grid",gridTemplateColumns:`repeat(${cs.wireframes.length},1fr)`,gap:"16px"}}>
                    {cs.wireframes.map((src,i) => (
                      <div key={i} className="cs-img" style={{overflow:"hidden"}}>
                        <img src={`/images/${src}`} alt={`Wireframe ${i+1}`} loading="lazy" style={{width:"100%",height:"auto",display:"block",border:"none",borderRadius:0}}/>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </SectionCard>
        )}

        {/* 13.5 · STYLE GUIDE (standalone) */}
        {cs.styleGuideImage && (
          <SectionCard headerColor={C.pink} eyebrow="style guide">
            <div className="cs-img" style={{overflow:"hidden",border:"none",borderRadius:0}}>
              <img src={`/images/${cs.styleGuideImage}`} alt="Style guide" loading="lazy" style={{width:"100%",height:"auto",display:"block",border:"none",borderRadius:0}}/>
            </div>
          </SectionCard>
        )}

        {/* 14 · FINAL PHOTO */}
        {cs.finalPhoto && <FullImg src={cs.finalPhoto} alt="Final design" height="480px"/>}

        {/* 15 · PROTOTYPE */}
        {((cs.prototypeTitle && cs.screens?.length > 0) || cs.prototypeText) && (
          <SectionCard headerColor={C.tangerine} eyebrow={cs.prototypeTitle || "prototype"}>
            {cs.prototypeText && <BodyText style={{marginBottom: cs.screens?.length > 0 ? "24px" : 0}}>{cs.prototypeText}</BodyText>}
            {cs.screens?.length > 0 && (
              (cs.prototypeTitle === "follow and message a user") ? (
                <div className="proto-phone-row" style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}>
                  {cs.screens.map((src,i) => (
                    <div key={i} className="proto-phone-item" style={{width:"240px",flexShrink:0,overflow:"hidden",aspectRatio:"337/726",border:`1.5px solid ${C.ink}`,borderRadius:"36px"}}>
                      <img src={`/images/${src}`} alt={`Screen ${i+1}`} style={{width:"100%",height:"100%",objectFit:"cover",display:"block",border:"none",borderRadius:0}}/>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{display:"flex",gap:"16px",flexWrap:"wrap",justifyContent:"center"}}>
                  {cs.screens.map((src,i) => (
                    <div key={i} className="cs-img" style={{flex:"0 0 calc(33% - 11px)",overflow:"hidden",minWidth:"200px"}}>
                      <img src={`/images/${src}`} alt={`Screen ${i+1}`} loading="lazy" style={{width:"100%",height:"auto",display:"block",border:"none",borderRadius:0}}/>
                    </div>
                  ))}
                </div>
              )
            )}
          </SectionCard>
        )}

        {/* 15.5 · POST-PROTOTYPE SCREENS */}
        {cs.postPrototypeScreens?.length > 0 && (
          <div style={{display:"flex",gap:"16px",flexWrap:"wrap",justifyContent:"center",marginBottom:"24px"}}>
            {cs.postPrototypeScreens.map((src,i) => (
              <div key={i} className="cs-img" style={{flex:"0 0 calc(33% - 11px)",overflow:"hidden",minWidth:"220px"}}>
                <img src={`/images/${src}`} alt={`Screen ${i+1}`} loading="lazy" style={{width:"100%",height:"auto",display:"block",border:"none",borderRadius:0}}/>
              </div>
            ))}
          </div>
        )}

        {/* 16 · TEST */}
        {cs.testText && (
          <SectionCard headerColor={C.blue} eyebrow="test">
            <BodyText>{cs.testText}</BodyText>
          </SectionCard>
        )}

        {/* 17 · IMPLEMENT */}
        {(cs.implementText || cs.implementAfterImage || cs.implementScreens?.length > 0) && (
          <SectionCard headerColor={C.pink} eyebrow="implement">
            {cs.implementText && <BodyText style={{marginBottom: (cs.implementAfterImage || cs.implementScreens?.length > 0) ? "24px" : 0}}>{cs.implementText}</BodyText>}
            {cs.implementAfterImage && (
              <div className="cs-img" style={{overflow:"hidden",marginBottom:"16px"}}>
                <img src={`/images/${cs.implementAfterImage}`} alt="After" loading="lazy" style={{width:"100%",height:"auto",display:"block",border:"none",borderRadius:0}}/>
              </div>
            )}
          </SectionCard>
        )}

        {/* 17.5 · POST-IMPLEMENT BEFORE/AFTER */}
        {cs.postImplementBeforeAfter && cs.beforeImage && (
          <div style={{marginBottom:"24px"}}>
            <div className="before-after-grid">
              {[["before",cs.beforeImage],["after",cs.afterImage]].map(([label,src]) => (
                <div key={label}>
                  <p style={{fontFamily:"'Bricolage Grotesque','Inter Tight',sans-serif",fontSize:"20px",fontWeight:700,color:C.ink,marginBottom:"10px",textAlign:"center",textTransform:"uppercase",letterSpacing:"-0.01em"}}>{label}</p>
                  <div className="cs-img" style={{overflow:"hidden",borderRadius:0}}>
                    {src && <img src={`/images/${src}`} alt={label} loading="lazy" style={{width:"100%",height:"auto",display:"block",border:"none",borderRadius:0}}/>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 18 · TAKEAWAY */}
        {cs.takeawayText && (
          <SectionCard headerColor={C.tangerine} eyebrow="takeaway">
            <BodyText>{cs.takeawayText}</BodyText>
          </SectionCard>
        )}

        {/* 19 · CLOSING PHOTO */}
        <FullImg src={cs.closingPhoto} alt="Closing" height="480px"/>

        {/* 20 · NEXT UP */}
        {cs.nextSlug && (
          <a href={`/case-study/${cs.nextSlug}`} style={{display:"block",textDecoration:"none"}}>
            <div style={{background:C.card,borderRadius:"12px",border:`1.5px solid ${C.ink}`,overflow:"hidden",transition:"transform 0.22s, box-shadow 0.22s"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow=`5px 5px 0 ${C.ink}`;}}
              onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
              <div style={{background:C.blue,padding:"12px 24px",borderBottom:`1.5px solid ${C.ink}`}}>
                <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"11px",fontWeight:500,color:C.white,letterSpacing:"0.1em",textTransform:"uppercase"}}>next up</span>
              </div>
              <div style={{padding:"24px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px"}}>
                <h3 style={{fontFamily:"'Bricolage Grotesque','Inter Tight',sans-serif",fontSize:"24px",fontWeight:700,color:C.ink,margin:0,letterSpacing:"-0.02em"}}>{cs.nextTitle}</h3>
                <span style={{fontFamily:"'Inter Tight','Inter',sans-serif",fontSize:"22px",color:C.blue,flexShrink:0}}>→</span>
              </div>
            </div>
          </a>
        )}
      </main>

      <SiteFooter/>
    </div>
  );
}
