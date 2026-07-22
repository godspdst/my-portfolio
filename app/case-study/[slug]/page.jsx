"use client";
import React, { useState } from "react";
import { C, serif, BASE_CSS, Nav, EMAIL, LINKEDIN } from "../../shared";

const STUDIES = {
  "the-pit": {
    title: "the pit app",
    responsibilities: ["App design","UX Strategy","Research","Prototyping","Branding","Design System"],
    goal: "The Pit is a social media platform built for music lovers that allows users to discover music, share what they're listening to, and connect with other fans who share the same musical interests and passions around the world.",
    featureImages: ["the-pit-feature-1.png","the-pit-feature-2.jpg","the-pit-feature-3.jpg"],
    heroImage: "the-pit-hero.jpg",
    contextPhoto: "the-pit-context.jpg",
    process: ["STRATEGY","RESEARCH","WIREFRAME","BRANDING","PROTOTYPE","TEST"],
    hasResearch: true, numCompetitors: 3,
    competitorLogos: ["the-pit-competitor-1.png","the-pit-competitor-2.png","the-pit-competitor-3.png"],
    competitorLogoSizes: [{w:33,h:19},{w:28,h:28},{w:33,h:33}],
    researchSummary: "To understand the space I was entering, I conducted competitive analysis across existing social and music platforms with 5 or more users. I created a survey to better understand what people were currently using to discover and share music with their friends.",
    researchPhoto: "the-pit-research.jpg",
    hasMoodBoard: true, moodBoardImage: "the-pit-moodboard.jpg",
    branding: { colors:["#1a1a1a","#f5f5f5","#e8c84a"], fonts:["Roboto Mono Bold","Roboto Mono Regular"], brandingImage:"the-pit-branding.jpg", styleGuideImage:"the-pit-styleguide.png" },
    wireframes: ["the-pit-wf-1.png","the-pit-wf-2.png","the-pit-wf-3.png"],
    wireframeStyle: "the-pit",
    finalPhoto: "the-pit-final.jpg",
    prototypeTitle: "follow and message a user",
    screens: ["the-pit-screen-1.png","the-pit-screen-2.png","the-pit-screen-3.png"],
    closingPhoto: "the-pit-closing.jpg",
  },
  "plume-homepass-landing-page": {
    title: "plume homepass landing page",
    responsibilities: ["UX & UI design","Competitive research","Design system","Prototype","Developer handoff"],
    goal: "With the launch of Plume HomePass's newest product, the SuperPod G6, the landing page needed to do two things: introduce the new product and help users understand which SuperPod was right for them. Awareness alone wasn't enough. Users needed guidance to make a confident purchase.",
    featureImages: ["plume-landing-feature-1.jpg","plume-landing-feature-2.jpg","plume-landing-feature-3.jpg"],
    heroImage: "plume-landing-hero.jpg",
    contextPhoto: "plume-landing-context.jpg",
    process: ["STRATEGY","RESEARCH","WIREFRAME","PROTOTYPE","TEST","IMPLEMENT"],
    hasStrategy: true,
    strategyText: "The existing landing page put the burden of comparison on the user. They had to browse the lineup, compare differences between products and decide. But for the SuperPod, the right choice depends on home size, internet speed and the user's number of IoT devices. The strategic direction was to shift from a passive display to active guidance.",
    hasResearch: true, numCompetitors: 2, competitorLogos: ["plume-competitor-eero.png","plume-competitor-nest.png"], competitorLogoSizes: [{w:50,h:25},{w:30,h:12.92}],
    competitiveAnalysisText: null,
    researchSummary: "I examined how competitors structured their product pages and how they handled comparison, decision support and purchase flow. Most relied on static spec tables that assumed users already knew what they were looking for. The opportunity for Plume was to meet users where they were: uncertain, comparing options, needing a recommendation rather than a data dump.",
    researchPhoto: "plume-landing-research.jpg",
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
    closingPhoto: "plume-landing-closing.jpg",
  },
  "plume-homepass-online-store": {
    title: "plume homepass ecommerce store",
    responsibilities: ["UX & UI design","Shopify redesign","Competitive research","Prototype","Developer handoff"],
    goal: "Plume HomePass had an existing e-commerce store that wasn't working hard enough. The visual design felt off-brand, the navigation was difficult to move through and the product display was cluttered enough to slow users down before they ever reached checkout. Plume needed the store migrated to Shopify and simplified in a way that actually converted.",
    featureImages: ["plume-store-feature-1.jpg","plume-store-feature-2.jpg","plume-store-feature-3.jpg"],
    heroImage: "plume-store-hero.jpg",
    contextPhoto: "plume-store-mid.jpg",
    process: ["STRATEGY","RESEARCH","WIREFRAME","PROTOTYPE","TEST","IMPLEMENT"],
    hasStrategy: true,
    strategyText: "The core problem wasn't aesthetic. A cluttered store with too many products competing for attention creates decision fatigue, and decision fatigue kills conversions. The strategic direction was restraint: show fewer products at once, clean up the layout and give users a clearer path from browsing to buying. Shopify would give Plume the platform stability they needed.",
    hasResearch: true, numCompetitors: 0,
    researchSummary: "I looked at how comparable e-commerce stores handled product display, navigation structure and checkout flow. The stores converting best were showing just the right amount. Simplified layouts with deliberate hierarchy outperformed dense, feature-heavy pages across the competitive set.",
    researchPhoto: null,
    hasBeforeAfter: false,
    hasMoodBoard: false,
    branding: null,
    wireframes: [],
    wireframeBeforeImage: "plume-store-before.png",
    wireframeText: "I created store wireframes that reduced visual noise. Fewer products surfaced at once, there was a cleaner category structure and I adjusted the layout to move users toward checkout. The before state showed a page asking users to do too much work to find what they needed.",
    finalPhoto: null,
    prototypeTitle: null,
    prototypeText: "I extended Plume's existing design system to build out the redesigned store in Figma, adding components as needed to support the Shopify environment and the simplified product display. The prototype was built to handoff fidelity: detailed enough that developers could build directly from the files without ambiguity.",
    screens: [],
    testText: "Plume's user research team tested the new store with real users before launch. Users moved through the store more fluidly and reached checkout with less friction. The feedback validated that restraint was the right direction.",
    implementText: "I handed off Figma files directly to the development team, who built and deployed the store to Shopify. Conversion rates increased enough that Plume decided to roll the same design approach across their other brands, which I also designed.",
    implementAfterImage: "plume-store-after.png",
    implementStyleGuideImage: "plume-store-styleguide.png",
    implementScreens: ["plume-store-checkout-1.png","plume-store-checkout-2.png","plume-store-checkout-3.png"],
    takeawayText: "The instinct in e-commerce is often to show more: more products, more options, more information. This project was a case for the opposite. Removing friction and reducing choices gave users a faster, clearer path to what they came for. Sometimes the most effective design decision is knowing what to take away.",
    closingPhoto: "plume-store-closing.jpg",
  },
  "personal-portfolio": {
    title: "personal portfolio",
    responsibilities: ["UX & UI design","Research","Brand guide","Design system","Prototype","Implement"],
    goal: "Creating a portfolio for any designer is an intimidating yet exciting task. This is the documentation of my design vision and process. I wanted to create something elegant, refined and approachable. My goal was to take all I had from the past few years and mold it into a website. A big deal, right?",
    featureImages: ["portfolio-feature-1.jpg","portfolio-feature-2.jpg","portfolio-feature-3.jpg"],
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
  },
};

const PAGE_CSS = `
  ${BASE_CSS}
  .proc-row:hover { background:#333333; }
  @media(max-width:1400px){
    .before-after-grid{grid-template-columns:1fr 1fr!important}
  }
  @media(max-width:1100px){
    .content-section{padding:60px 48px!important}
    .content-section > div:first-child{margin-bottom:36px!important}
    .overview-grid{gap:48px!important;padding:60px 48px!important}
    .feature-scatter{justify-content:center!important;gap:24px!important;padding:40px 48px 56px!important}
    .feat-img-inner{width:clamp(160px,20vw,300px)!important;height:auto!important;aspect-ratio:6/5!important}
    .full-photo{height:480px!important}
    .wf-item-wide{height:auto!important}
    .wf-item-wide img{height:auto!important;object-fit:unset!important}
    .wf-row{gap:24px!important}
    .mood-board-img{max-width:100%!important;width:100%!important;height:auto!important}
    .mood-board-img img{height:auto!important}
    .wf-item-pit{width:23vw!important;height:auto!important}
    .wf-item-pit img{height:auto!important}
    .proto-phone-item{width:23vw!important;height:auto!important}
    .proto-phone-item img{height:auto!important;object-fit:contain!important}
    .proto-overflow-item{width:min(500px,45vw)!important;height:auto!important}
    .proto-section{padding-bottom:32px!important}
    .process-section{padding:0 48px 0!important}
    .proc-inner{margin-left:80px!important}
    .cs-title{padding:72px 48px!important}
    .cta-section{padding:100px 48px 80px!important}
    .footer-links{padding:36px 48px!important}
    .footer-copy{padding:20px 48px!important}
  }
  @media(max-width:900px){
    .before-after-grid{grid-template-columns:1fr!important}
  }
  @media(max-width:768px){
    .desk-nav{display:none!important} .mob-btn{display:flex!important}
    .cs-title{padding:40px 24px 36px!important}
    .overview-grid{grid-template-columns:1fr!important;gap:36px!important;padding:48px 24px!important}
    .feature-scatter{padding:32px 24px 48px!important;flex-direction:column!important;gap:12px!important;align-items:flex-start!important}
    .feature-scatter .feat-img{width:40%!important;margin-top:0!important;margin-left:0!important}
    .feature-scatter .feat-img-right{margin-left:60%!important}
    .feat-img-inner{width:100%!important;aspect-ratio:6/5!important;height:auto!important}
    .process-section{padding:0 24px 0!important}
    .proc-inner{margin-left:0!important;padding-bottom:0!important}
    .proc-row{margin-right:-24px!important}
    .content-section{padding:48px 24px!important}
    .content-section > div:first-child{margin-bottom:28px!important}
    .two-col{grid-template-columns:1fr!important;gap:28px!important}
    .wf-grid{grid-template-columns:1fr!important}
    .wf-wide-outer{width:100%!important;position:static!important;left:auto!important;transform:none!important}
    .wf-row{flex-direction:column!important;align-items:center!important;gap:16px!important}
    .wf-item-wide{flex:none!important;width:100%!important;height:auto!important;aspect-ratio:auto!important;align-self:stretch!important;border-radius:12px!important}
    .wf-item-wide img{height:auto!important}
    .wf-section-wrap{padding-bottom:48px!important}
    .wf-item-pit{width:44%!important;height:auto!important}
    .wf-item-pit img{height:auto!important;object-fit:contain!important}
    .proto-grid{grid-template-columns:1fr!important}
    .brand-row{flex-direction:column!important;gap:32px!important}
    .before-after-grid{grid-template-columns:1fr!important}
    .before-after-label{font-size:32px!important}
    .full-photo{height:clamp(200px,45vw,650px)!important}
    .ui-kit-section{padding:48px 24px 0!important;overflow:hidden!important}
    .ui-kit-inner{position:static!important;left:auto!important;transform:none!important;width:auto!important;margin:0 -24px!important}
    .ui-kit-img-box{height:260px!important}
    .proto-overflow-wrap{width:100%!important;position:static!important;left:auto!important;transform:none!important;overflow:visible!important}
    .proto-overflow-row{flex-direction:column!important;align-items:center!important;gap:16px!important}
    .proto-overflow-item{width:100%!important;height:auto!important}
    .proto-overflow-item img{height:auto!important}
    .proto-phone-item{width:44%!important;height:auto!important}
    .proto-phone-item img{height:auto!important;object-fit:contain!important}
    .mood-board-img{max-width:100%!important;width:100%!important;height:auto!important}
    .mood-board-img img{height:auto!important}
    .cta-section{padding:80px 24px!important}
    .footer-links{padding:32px 24px!important;flex-wrap:wrap!important;justify-content:center!important;gap:12px 16px!important}
    .footer-links > div{display:contents!important}
    .footer-copy{padding:16px 24px!important}
  }
  @media(max-width:480px){
    .process-label{display:none!important}
  }
`;

/* ── HELPER COMPONENTS ────────────────────────────────── */

function SectionTitle({ children, light=true }) {
  return (
    <h2 style={{...serif, fontSize:"clamp(40px, 5.9vw, 85px)", color:light?C.white:C.midGray, letterSpacing:"-0.01em", lineHeight:1.1, margin:0}}>
      {children}
    </h2>
  );
}

function ColLabel({ children }) {
  return <p style={{fontSize:"15px", letterSpacing:"0.1em", color:"#F7ECDC", textTransform:"uppercase", marginBottom:"16px", lineHeight:1.0, fontFamily:"'Inter',sans-serif"}}>{children}</p>;
}

function Rule() {
  return <div style={{width:"100%", height:"1px", background:"#333333"}}/>;
}

function FullPhoto({ src, alt="", height="400px" }) {
  return (
    <div className="full-photo" style={{width:"100%", height, overflow:"hidden", background:"#333333", display:"flex", alignItems:"center", justifyContent:"center"}}>
      {src
        ? <img src={`/images/${src}`} alt={alt} loading="lazy" style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
        : <span style={{color:"#333333", fontSize:"10px", letterSpacing:"0.16em"}}>[ PHOTO ]</span>
      }
    </div>
  );
}

/* ── FEATURE SCATTER — loose collage layout ───────────── */
function FeatureScatter({ images }) {
  if (!images || images.length === 0) return null;
  const [img1, img2, img3] = images;
  return (
    <div className="feature-scatter" style={{
      padding:"48px 80px 64px",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"flex-start",
      position:"relative",
      background:C.darkBg,
      gap:"20px",
      flexWrap:"wrap",
    }}>
      {/* Left — top-aligned */}
      <div className="feat-img" style={{flexShrink:0}}>
        <div className="feat-img-inner" style={{width:"300px", height:"250px", background:"#333333", overflow:"hidden"}}>
          <img src={`/images/${img1}`} alt="Feature 1" loading="lazy" style={{width:"100%", height:"100%", display:"block", objectFit:"cover"}}/>
        </div>
      </div>
      {/* Center — offset right */}
      <div className="feat-img feat-img-right" style={{flexShrink:0, marginTop:"60px"}}>
        <div className="feat-img-inner" style={{width:"300px", height:"250px", background:"#333333", overflow:"hidden"}}>
          <img src={`/images/${img2}`} alt="Feature 2" loading="lazy" style={{width:"100%", height:"100%", display:"block", objectFit:"cover"}}/>
        </div>
      </div>
      {/* Right — offset slightly */}
      <div className="feat-img" style={{flexShrink:0, marginTop:"20px"}}>
        <div className="feat-img-inner" style={{width:"300px", height:"250px", background:"#333333", overflow:"hidden"}}>
          <img src={`/images/${img3}`} alt="Feature 3" loading="lazy" style={{width:"100%", height:"100%", display:"block", objectFit:"cover"}}/>
        </div>
      </div>
    </div>
  );
}

/* ── TALK DESIGN CTA ──────────────────────────────────── */
function TalkDesign() {
  const [hov, setHov] = useState(false);
  return (
    <div className="cta-section" style={{background:C.darkBg, padding:"120px 80px 100px", textAlign:"center", borderTop:"1px solid #333333"}}>
      <a href={`mailto:${EMAIL}`} style={{textDecoration:"none", display:"inline-block"}}
        onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
        <h2 style={{...serif, fontSize:"clamp(48px, 8.9vw, 128px)", color:hov?C.lavender:C.white, lineHeight:0.95, letterSpacing:"-0.02em", margin:0, transition:"color 0.3s"}}>
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

/* ── CASE STUDY FOOTER ────────────────────────────────── */
function CaseStudyFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-links" style={{background:"#E6DFF1", padding:"50px 80px", display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"1px solid #1b1b1b"}}>
        <div style={{display:"flex", gap:"24px", flexWrap:"wrap"}}>
          {["home","about","process","projects","contact"].map(l => (
            <a key={l} href={l==="home"?"/":"/#"+l}
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
        <p style={{fontFamily:"'Inter',sans-serif", fontSize:"16px", color:"#EBE6E0", margin:0, textAlign:"center"}}>
          ©2026 Stephanie Guarino. All Rights Reserved. Designed and developed by Stephanie Guarino.
        </p>
      </div>
    </footer>
  );
}

/* ── MAIN PAGE ────────────────────────────────────────── */
export default function CaseStudyPage({ params }) {
  const slug = React.use(params).slug;
  const cs = STUDIES[slug];

  if (!cs) return (
    <div style={{background:C.darkBg, minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", color:C.textMuted, fontFamily:"'Inter',sans-serif", gap:"8px"}}>
      Case study not found. <a href="/" style={{color:C.white}}>← Go home</a>
    </div>
  );

  return (
    <div style={{background:C.darkBg, fontFamily:"'Inter',sans-serif"}}>
      <style>{PAGE_CSS}</style>
      <Nav isCaseStudy/>

      {/* 1 · TITLE */}
      <div className="cs-title" style={{marginTop:"56px", textAlign:"center", padding:"100px 80px 100px", borderBottom:"1px solid #333333"}}>
        <h1 style={{...serif, fontSize:"clamp(40px, 5.9vw, 85px)", color:C.white, letterSpacing:"-0.02em", lineHeight:1.1, margin:0}}>
          {cs.title}
        </h1>
      </div>

      {/* 2 · HERO IMAGE */}
      <FullPhoto src={cs.heroImage} alt={cs.title} height="650px"/>

      {/* 3 · OVERVIEW */}
      <Rule/>
      <div className="overview-grid" style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"80px", padding:"72px 80px", maxWidth:"1200px", margin:"0 auto"}}>
        <div>
          <ColLabel>RESPONSIBILITIES</ColLabel>
          <ul style={{listStyle:"none", display:"flex", flexDirection:"column", gap:"10px"}}>
            {cs.responsibilities.map((r,i) => (
              <li key={i} style={{display:"flex", alignItems:"center", gap:"16px", fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, letterSpacing:0, fontFamily:"'Inter',sans-serif"}}>
                <span style={{width:"4px", height:"4px", background:C.textMuted, borderRadius:"50%", flexShrink:0}}/>{r}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ColLabel>THE GOAL</ColLabel>
          <p style={{fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, letterSpacing:0, fontFamily:"'Inter',sans-serif"}}>{cs.goal}</p>
        </div>
      </div>

      {/* 4 · FEATURE IMAGES — scattered collage */}
      <FeatureScatter images={cs.featureImages}/>

      {/* 5 · PROCESS — hand-drawn circles with vertical label */}
      <Rule/>
      <div className="process-section" style={{padding:"0 80px 0", position:"relative", borderTop:"1px solid #F3F3FB"}}>
        <div className="process-label" style={{position:"absolute", left:"-20px", top:"50%", transform:"translateY(-50%) rotate(-90deg)", ...serif, fontSize:"clamp(40px, 5.9vw, 85px)", letterSpacing:"-0em", color:C.textLight, whiteSpace:"nowrap", opacity:0.9}}>
          process
        </div>
        <div className="proc-inner" style={{borderLeft:"1px solid #F3F3FB", marginLeft:"100px"}}>
          {cs.process.map((step,i) => (
            <div key={i} className="proc-row" style={{display:"flex", alignItems:"center", gap:"40px", padding:"0 40px 0 50px", marginRight:"-80px", borderBottom: i < cs.process.length - 1 ? "1px solid #F3F3FB" : "none", cursor:"default", transition:"background 0.2s"}}>
              <div style={{position:"relative", width:"clamp(72px, 10vw, 148px)", height:"clamp(72px, 10vw, 148px)", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center"}}>
                <svg style={{position:"absolute", inset:0, width:"100%", height:"100%", overflow:"visible"}} viewBox="0 0 80 80" fill="none">
                  <path d="M40 5 C57 4, 75 18, 75 40 C75 62, 57 76, 40 75 C23 74, 5 62, 6 40 C7 18, 23 4, 40 5 Z"
                    stroke={C.textLight} strokeWidth="1.2" fill={C.darkBg} strokeLinecap="round" opacity="0.6"/>
                </svg>
                <span style={{fontFamily:"'Pigeon','Cormorant Garamond',Georgia,serif", fontSize:"clamp(40px, 5.9vw, 85px)", color:C.textLight, lineHeight:1, position:"relative", zIndex:1}}>{i+1}</span>
              </div>
              <span style={{fontFamily:"'Inter',sans-serif", fontSize:"clamp(24px, 3.9vw, 56px)", fontWeight:"600", letterSpacing:"-0.02em", color:C.textLight, textTransform:"uppercase", lineHeight:1.04}}>{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 6 · CONTEXT PHOTO */}
      <FullPhoto src={cs.contextPhoto} alt="Context" height="650px"/>

      {/* 7 · STRATEGY */}
      {cs.hasStrategy && (<>
        <Rule/>
        <div className="content-section" style={{padding:"72px 80px"}}>
          <div style={{textAlign:"center", marginBottom:"50px"}}><SectionTitle>strategy</SectionTitle></div>
          {cs.strategyText ? (
            <p style={{fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, letterSpacing:0, fontFamily:"'Inter',sans-serif", maxWidth:"960px", margin:"0 auto"}}>{cs.strategyText}</p>
          ) : (
            <div className="two-col" style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"60px", maxWidth:"960px", margin:"0 auto"}}>
              <p style={{fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, letterSpacing:0, fontFamily:"'Inter',sans-serif"}}>I began my process researching design portfolios that I loved and compiled a list of things that conveyed the feelings I was going for: elegant yet approachable.</p>
              <p style={{fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, letterSpacing:0, fontFamily:"'Inter',sans-serif"}}>While narrowing the colors for my portfolio, I used AI to translate the images I chose from a color palette. I found a mood board and style guide that perfectly conveyed the feelings I wanted to capture.</p>
            </div>
          )}
        </div>
      </>)}

      {/* 8 · RESEARCH */}
      {cs.hasResearch && (<>
        <Rule/>
        <div className="content-section" style={{padding:"72px 80px"}}>
          <div style={{textAlign:"center", marginBottom:"50px"}}>
            <div style={{position:"relative", display:"inline-block"}}>
              <SectionTitle>research</SectionTitle>
              <svg style={{position:"absolute", bottom:"-8px", left:0, width:"100%", overflow:"visible", pointerEvents:"none"}} height="12" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                <path d="M2 8 C40 3, 90 11, 130 5 C165 1, 185 10, 198 6" stroke="#1b1b1b" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
              </svg>
            </div>
          </div>
          {cs.numCompetitors > 0 ? (
            <div className="two-col" style={{display:"grid", gridTemplateColumns:cs.competitiveAnalysisText?"1fr 1fr":"200px 1fr", gap:"64px", maxWidth:"960px", margin:"0 auto", alignItems:"start"}}>
              <div>
                <ColLabel>COMPETITIVE ANALYSIS</ColLabel>
                <div style={{display:"flex", gap:"12px", flexWrap:"wrap", marginBottom:cs.competitiveAnalysisText?"16px":"0"}}>
                  {Array(cs.numCompetitors).fill(0).map((_,i) => (
                    <div key={i} style={{width:"50px", height:"50px", borderRadius:"50%", background:"#F3F3FB", border:"1px solid rgba(243,243,251,0.3)", overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center"}}>
                      {cs.competitorLogos && cs.competitorLogos[i]
                        ? <img src={`/images/${cs.competitorLogos[i]}`} alt={`Competitor ${i+1}`} style={{width:cs.competitorLogoSizes?.[i]?.w?`${cs.competitorLogoSizes[i].w}px`:"100%", height:cs.competitorLogoSizes?.[i]?.h?`${cs.competitorLogoSizes[i].h}px`:"100%", objectFit:"contain"}}/>
                        : null
                      }
                    </div>
                  ))}
                </div>
                {cs.competitiveAnalysisText && (
                  <p style={{fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, letterSpacing:0, fontFamily:"'Inter',sans-serif", margin:0}}>{cs.competitiveAnalysisText}</p>
                )}
              </div>
              <div>
                <ColLabel>FINDINGS</ColLabel>
                <p style={{fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, letterSpacing:0, fontFamily:"'Inter',sans-serif"}}>{cs.researchSummary}</p>
              </div>
            </div>
          ) : (
            <p style={{fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, letterSpacing:0, fontFamily:"'Inter',sans-serif", maxWidth:"960px", margin:"0 auto"}}>{cs.researchSummary}</p>
          )}
        </div>
        {cs.researchPhoto && <FullPhoto src={cs.researchPhoto} alt="Research" height="650px"/>}
      </>)}

      {/* 9 · BEFORE / AFTER */}
      {cs.hasBeforeAfter && (<>
        <Rule/>
        <div className="content-section" style={{padding:"72px 80px"}}>
          <div className="before-after-grid" style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"40px", maxWidth:"1360px", margin:"0 auto"}}>
            {[["BEFORE", cs.beforeImage],["AFTER", cs.afterImage]].map(([label, src]) => (
              <div key={label}>
                <p className="before-after-label" style={{fontSize:"clamp(28px, 3.9vw, 56px)", fontWeight:"400", lineHeight:1.04, letterSpacing:"-0.02em", color:"#F3F3FB", marginBottom:"16px", textAlign:"center", fontFamily:"'Inter',sans-serif"}}>{label}</p>
                <div style={{overflow:"hidden", background:"#333333", borderRadius:"12px"}}>
                  {src && <img src={`/images/${src}`} alt={label} loading="lazy" style={{width:"100%", height:"auto", display:"block"}}/>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <FullPhoto src={cs.midPhoto} alt="Mid section" height="650px"/>
      </>)}

      {/* 10 · MOOD BOARD */}
      {cs.hasMoodBoard && (<>
        <Rule/>
        <div className="content-section" style={{padding:"72px 80px"}}>
          <div style={{textAlign:"center", marginBottom:"50px"}}><SectionTitle>mood board</SectionTitle></div>
          {(() => { const mbW = cs.moodBoardDimensions?.w || 595; const mbH = cs.moodBoardDimensions?.h || 763; return (
          <div className="mood-board-img" style={{width:`${mbW}px`, height:`${mbH}px`, margin:"0 auto", overflow:"hidden", background:"#333333"}}>
            {cs.moodBoardImage && <img src={`/images/${cs.moodBoardImage}`} alt="Mood board" loading="lazy" style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>}
          </div>
          ); })()}
        </div>
      </>)}

      {/* 11 · BRANDING / STYLE GUIDE */}
      {cs.branding && (<>
        <Rule/>
        <div className="content-section" style={{padding:"72px 80px"}}>
          {cs.branding.styleGuideImage ? (
            <>
              <div style={{textAlign:"center", marginBottom:"50px"}}><SectionTitle>{cs.branding.hasStyleGuide ? "style guide" : "branding"}</SectionTitle></div>
              <div style={{maxWidth:"960px", margin:"0 auto", overflow:"hidden", background:"#333333"}}>
                <img src={`/images/${cs.branding.styleGuideImage}`} alt="Style guide" loading="lazy" style={{width:"100%", height:"auto", display:"block"}}/>
              </div>
            </>
          ) : (
            <>
              <div style={{textAlign:"center", marginBottom:"50px"}}><SectionTitle>branding</SectionTitle></div>
              <div className="brand-row" style={{display:"flex", gap:"72px", flexWrap:"wrap", maxWidth:"900px", margin:"0 auto", alignItems:"flex-start"}}>
                <div>
                  <ColLabel>COLORS</ColLabel>
                  <div style={{display:"flex", gap:"10px"}}>
                    {cs.branding.colors.map((hex,i) => (
                      <div key={i} style={{width:"30px", height:"30px", borderRadius:"50%", background:hex, border:"1px solid #333333"}}/>
                    ))}
                  </div>
                </div>
                <div>
                  <ColLabel>LOGO / BRANDING</ColLabel>
                  {cs.branding.brandingImage
                    ? <img src={`/images/${cs.branding.brandingImage}`} alt="Branding" style={{maxHeight:"60px", width:"auto", objectFit:"contain"}}/>
                    : <div style={{background:"#333333", padding:"10px 20px", display:"inline-flex", minWidth:"72px", minHeight:"44px", alignItems:"center", justifyContent:"center", color:"#555", fontSize:"10px"}}>[ LOGO ]</div>
                  }
                </div>
                <div>
                  <ColLabel>TYPOGRAPHY</ColLabel>
                  <div style={{display:"flex", flexDirection:"column", gap:"8px"}}>
                    {cs.branding.fonts.map((f,i) => (
                      <p key={i} style={{fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, letterSpacing:0, margin:0, fontFamily:"'Inter',sans-serif"}}>{f}</p>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </>)}

      {/* 12 · UI KIT */}
      {cs.hasUIKit && (
        <div className="ui-kit-section" style={{background:C.lightBg, padding:"72px 80px 0"}}>
          <div style={{textAlign:"center", marginBottom:"50px"}}>
            <h2 style={{...serif, fontSize:"clamp(40px, 5.9vw, 85px)", color:C.midGray, margin:0}}>UI kit</h2>
          </div>
          <div className="ui-kit-inner" style={{position:"relative", left:"50%", transform:"translateX(-50%)", width:"100vw"}}>
            <div className="ui-kit-img-box" style={{height:"492px", overflow:"hidden", background:"#e8e8e8"}}>
              {cs.uiKitImage && <img src={`/images/${cs.uiKitImage}`} alt="UI Kit" loading="lazy" style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>}
            </div>
          </div>
        </div>
      )}

      {/* 13 · WIREFRAMES */}
      {(cs.wireframes.length > 0 || cs.wireframeText || cs.wireframeBeforeImage) && (<>
        <Rule/>
        <div className="content-section wf-section-wrap" style={{padding:"72px 80px"}}>
          <div className="wf-title" style={{textAlign:"center", marginBottom:"50px"}}><SectionTitle>wireframes</SectionTitle></div>
          {cs.wireframeText && (
            <p style={{fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, letterSpacing:0, fontFamily:"'Inter',sans-serif", maxWidth:"960px", margin:"0 auto", marginBottom:(cs.wireframeBeforeImage || cs.wireframes.length > 0) ? "48px" : 0}}>{cs.wireframeText}</p>
          )}
          {cs.wireframeBeforeImage && (
            <div style={{overflow:"hidden", background:"#333333"}}>
              <img src={`/images/${cs.wireframeBeforeImage}`} alt="Before" loading="lazy" style={{width:"100%", height:"auto", display:"block"}}/>
            </div>
          )}
          {cs.wireframes.length > 0 && (cs.wireframeStyle === "the-pit" ? (
            /* 337×727, 30px gap, 3 images centered */
            <div style={{display:"flex", gap:"30px", justifyContent:"center"}}>
              {cs.wireframes.map((src,i) => (
                <div key={i} className="wf-item-pit" style={{width:"337px", height:"727px", flexShrink:0, overflow:"hidden", background:"#333333"}}>
                  <img src={`/images/${src}`} alt={`Wireframe ${i+1}`} style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
                </div>
              ))}
            </div>
          ) : cs.wireframeStyle === "wide" ? (
            /* 735×641, 40px gap, bleeds off page via 100vw */
            <div className="wf-wide-outer" style={{position:"relative", left:"50%", transform:"translateX(-50%)", width:"100vw", overflow:"hidden"}}>
              <div className="wf-row" style={{display:"flex", gap:"40px", justifyContent:"center"}}>
                {cs.wireframes.map((src,i) => (
                  <div key={i} className="wf-item-wide" style={{width:"735px", height:"641px", flexShrink:0, overflow:"hidden", background:"#333333", borderRadius:"12px"}}>
                    <img src={`/images/${src}`} alt={`Wireframe ${i+1}`} style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* default grid */
            <div className="wf-grid" style={{display:"grid", gridTemplateColumns:`repeat(${cs.wireframes.length},1fr)`, gap:"20px", maxWidth:"960px", margin:"0 auto"}}>
              {cs.wireframes.map((src,i) => (
                <div key={i} style={{background:"#333333", overflow:"hidden"}}>
                  <img src={`/images/${src}`} alt={`Wireframe ${i+1}`} loading="lazy" style={{width:"100%", height:"auto", display:"block"}}/>
                </div>
              ))}
            </div>
          ))}
        </div>
      </>)}

      {/* 14 · FINAL PHOTO */}
      {cs.finalPhoto && <FullPhoto src={cs.finalPhoto} alt="Final design" height="650px"/>}

      {/* 15 · PROTOTYPE */}
      {((cs.prototypeTitle && cs.screens.length > 0) || cs.prototypeText) && (<>
        <Rule/>
        <div className="content-section proto-section" style={{padding:"72px 80px"}}>
          <div style={{textAlign:"center", marginBottom:"50px"}}><SectionTitle>{cs.prototypeTitle || "prototype"}</SectionTitle></div>
          {cs.prototypeText && (
            <p style={{fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, letterSpacing:0, fontFamily:"'Inter',sans-serif", maxWidth:"960px", margin: cs.prototypeTitle && cs.screens.length > 0 ? "0 auto 48px" : "0 auto"}}>{cs.prototypeText}</p>
          )}
          {cs.screens.length > 0 && ((cs.prototypeTitle === "shopify checkout flow" || cs.prototypeTitle === "product configurator") ? (
            /* full source width, sides overflow off page edges */
            <div className="proto-overflow-wrap" style={{position:"relative", left:"50%", transform:"translateX(-50%)", width:"100vw", overflow:"hidden"}}>
              <div className="proto-overflow-row" style={{display:"flex", justifyContent:"center", gap:"30px"}}>
                {cs.screens.map((src,i) => (
                  <div key={i} className="proto-overflow-item" style={{width:"700px", height:"652px", flexShrink:0, overflow:"hidden"}}>
                    <img src={`/images/${src}`} alt={`Screen ${i+1}`} loading="lazy" style={{width:"100%", height:"auto", display:"block"}}/>
                  </div>
                ))}
              </div>
            </div>
          ) : cs.prototypeTitle === "follow and message a user" ? (
            /* 337×726, 30px gap, 3 images centered */
            <div className="proto-phone-row" style={{display:"flex", gap:"30px", justifyContent:"center"}}>
              {cs.screens.map((src,i) => (
                <div key={i} className="proto-phone-item" style={{width:"337px", height:"726px", flexShrink:0, overflow:"hidden", background:"#333333"}}>
                  <img src={`/images/${src}`} alt={`Screen ${i+1}`} style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}/>
                </div>
              ))}
            </div>
          ) : (
            <div className="proto-grid" style={{display:"grid", gridTemplateColumns:`repeat(${cs.screens.length},1fr)`, gap:"16px", maxWidth:"880px", margin:"0 auto"}}>
              {cs.screens.map((src,i) => (
                <div key={i} style={{background:"#333333", borderRadius:"12px", overflow:"hidden"}}>
                  <img src={`/images/${src}`} alt={`Screen ${i+1}`} style={{width:"100%", height:"auto", display:"block", borderRadius:"12px"}}/>
                </div>
              ))}
            </div>
          ))}
        </div>
      </>)}

      {/* 16 · TEST */}
      {cs.testText && (<>
        <Rule/>
        <div className="content-section" style={{padding:"72px 80px"}}>
          <div style={{textAlign:"center", marginBottom:"50px"}}><SectionTitle>test</SectionTitle></div>
          <p style={{fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, letterSpacing:0, fontFamily:"'Inter',sans-serif", maxWidth:"960px", margin:"0 auto"}}>{cs.testText}</p>
        </div>
      </>)}

      {/* 17 · IMPLEMENT */}
      {(cs.implementText || cs.implementAfterImage || cs.implementScreens?.length > 0) && (<>
        <Rule/>
        <div className="content-section" style={{padding:"72px 80px"}}>
          <div style={{textAlign:"center", marginBottom:"50px"}}><SectionTitle>implement</SectionTitle></div>
          {cs.implementText && (
            <p style={{fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, letterSpacing:0, fontFamily:"'Inter',sans-serif", maxWidth:"960px", margin: (cs.implementAfterImage || cs.implementStyleGuideImage || cs.implementScreens?.length > 0) ? "0 auto 48px" : "0 auto"}}>{cs.implementText}</p>
          )}
          {cs.implementAfterImage && (
            <div style={{overflow:"hidden", background:"#333333", marginBottom: (cs.implementStyleGuideImage || cs.implementScreens?.length > 0) ? "48px" : 0}}>
              <img src={`/images/${cs.implementAfterImage}`} alt="After" loading="lazy" style={{width:"100%", height:"auto", display:"block"}}/>
            </div>
          )}
          {cs.implementStyleGuideImage && (
            <div style={{overflow:"hidden", background:"#333333", maxWidth:"960px", margin: cs.implementScreens?.length > 0 ? "0 auto 48px" : "0 auto"}}>
              <img src={`/images/${cs.implementStyleGuideImage}`} alt="Style guide" loading="lazy" style={{width:"100%", height:"auto", display:"block"}}/>
            </div>
          )}
          {cs.implementScreens?.length > 0 && (
            <div className="proto-overflow-wrap" style={{position:"relative", left:"50%", transform:"translateX(-50%)", width:"100vw", overflow:"hidden"}}>
              <div className="proto-overflow-row" style={{display:"flex", justifyContent:"center", gap:"30px"}}>
                {cs.implementScreens.map((src,i) => (
                  <div key={i} className="proto-overflow-item" style={{width:"700px", height:"652px", flexShrink:0, overflow:"hidden"}}>
                    <img src={`/images/${src}`} alt={`Screen ${i+1}`} loading="lazy" style={{width:"100%", height:"auto", display:"block"}}/>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </>)}

      {/* 18 · TAKEAWAY */}
      {cs.takeawayText && (<>
        <Rule/>
        <div className="content-section" style={{padding:"72px 80px"}}>
          <div style={{textAlign:"center", marginBottom:"50px"}}><SectionTitle>takeaway</SectionTitle></div>
          <p style={{fontSize:"clamp(16px, 2.5vw, 24px)", color:"#F3F3FB", lineHeight:1.6, letterSpacing:0, fontFamily:"'Inter',sans-serif", maxWidth:"960px", margin:"0 auto"}}>{cs.takeawayText}</p>
        </div>
      </>)}

      {/* 19 · CLOSING PHOTO */}
      <FullPhoto src={cs.closingPhoto} alt="Closing" height="650px"/>

      {/* 17 · CTA */}
      <TalkDesign/>

      {/* 18 · FOOTER */}
      <CaseStudyFooter/>
    </div>
  );
}
