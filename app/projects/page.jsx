"use client";
import React, { useState } from "react";
import { C, BASE_CSS, Header, SiteFooter } from "../shared";

const PROJECTS = [
  {
    n:"01", id:"jd-work-queue-follow-up-date",
    img:"/images/jd-wq-imac-mockup.png", pos:"center 28%", scale:1.4,
    title:"John Deere Work Queue Follow-Up Date",
    desc:"Validated a follow-up date column to stop applications from stalling in equipment lender's queue. Reduced friction for loan officers and improved turnaround time.",
    tags:["UX Design","Research","Enterprise","Figma"],
    headerColor:C.blue,
  },
  {
    n:"02", id:"jd-credit-hub-guarantor",
    img:"/images/jd-imac-mockup.png", pos:"center 28%", scale:1.4,
    title:"John Deere Credit Hub — Guarantor",
    desc:"Four design directions for surfacing guarantee type selection in a dense, daily-use credit interface — one recommended, one shipped.",
    tags:["UX Design","Enterprise","Interaction Design"],
    headerColor:C.pink,
  },
  {
    n:"03", id:"plume-homepass-online-store",
    img:"/images/plume-store-hero.jpg", pos:"center 30%", scale:1.25,
    title:"Plume HomePass Ecommerce Store",
    desc:"End-to-end redesign of the HomePass ecommerce store, improving conversion and streamlining the checkout flow for smart home hardware.",
    tags:["UI Design","Ecommerce","Prototyping"],
    headerColor:C.tangerine,
  },
  {
    n:"04", id:"plume-homepass-landing-page",
    img:"/images/plume-landing-hero.jpg", pos:"center 20%", scale:1.3,
    title:"Plume HomePass Landing Page",
    desc:"Landing page redesign timed to the release of the SuperPod G6, balancing marketing needs with a clean, conversion-focused layout.",
    tags:["Landing Page","UI Design","Marketing"],
    headerColor:C.pink,
  },
];

const PORTFOLIO_PROJECT = {
  n:"05", id:"the-pit",
  img:"/images/the-pit-hero.jpg",
  title:"The Pit App",
  desc:"A social media platform built for music lovers — discover music, share what you're listening to, and connect with fans worldwide.",
  tags:["App Design","Branding","Design System","Research"],
  headerColor:C.blue,
};

const PAGE_CSS = `
  ${BASE_CSS}
  .proj-card{transition:transform 0.22s ease, box-shadow 0.22s ease;}
  .proj-card:nth-child(odd):hover{transform:rotate(-0.5deg) translateY(-4px);box-shadow:6px 6px 0 ${C.blue};}
  .proj-card:nth-child(even):hover{transform:rotate(0.5deg) translateY(-4px);box-shadow:6px 6px 0 ${C.pink};}
  .tag-pill{display:inline-block;border-radius:999px;border:1.5px solid ${C.ink};padding:3px 10px;font-family:'Inter Tight','Inter',sans-serif;font-size:12px;font-weight:500;color:${C.ink};}
  @media(max-width:900px){
    .projects-grid{grid-template-columns:1fr!important}
  }
  @media(max-width:600px){
    .projects-page-wrap{padding:40px 24px!important}
  }
`;

function ProjectCard({ project }) {
  return (
    <a href={`/case-study/${project.id}`} className="proj-card"
      style={{
        display:"block",textDecoration:"none",
        background:C.card,borderRadius:"12px",border:`1.5px solid ${C.ink}`,
        overflow:"hidden",
      }}>
      {/* Colored header bar */}
      <div style={{background:project.headerColor,padding:"12px 20px",borderBottom:`1.5px solid ${C.ink}`,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"12px",fontWeight:500,color:C.white,letterSpacing:"0.06em"}}>{project.n}</span>
        <span style={{fontFamily:"'Inter Tight','Inter',sans-serif",fontSize:"12px",fontWeight:500,color:C.white,opacity:0.8}}>view case study ↗</span>
      </div>
      {/* Image */}
      <div style={{height:"260px",overflow:"hidden",borderBottom:`1.5px solid ${C.ink}`}}>
        <img src={project.img} alt={project.title}
          style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:project.pos||"center center",display:"block",transform:project.scale?`scale(${project.scale})`:"none",transformOrigin:"center center",filter:"sepia(0.35) contrast(1.05) brightness(0.88)"}}
        />
      </div>
      {/* Content */}
      <div style={{padding:"24px"}}>
        <h2 style={{fontFamily:"'Bricolage Grotesque','Inter Tight',sans-serif",fontSize:"22px",fontWeight:700,color:C.ink,marginBottom:"12px",letterSpacing:"-0.02em",lineHeight:1.2}}>{project.title}</h2>
        <p style={{fontFamily:"'Inter Tight','Inter',sans-serif",fontSize:"14px",color:C.muted,lineHeight:1.6,marginBottom:"16px"}}>{project.desc}</p>
        <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
          {project.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
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

      <main className="projects-page-wrap" style={{padding:"64px 28px 80px",maxWidth:"1700px",margin:"0 auto"}}>
        <h1 style={{
          fontFamily:"'Bricolage Grotesque','Inter Tight',sans-serif",
          fontSize:"76px",fontWeight:800,lineHeight:0.92,
          letterSpacing:"-0.04em",color:C.ink,
          marginBottom:"48px",
        }}>my top five</h1>

        <div className="projects-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px",marginBottom:"24px"}}>
          {PROJECTS.map(p => <ProjectCard key={p.id} project={p}/>)}
        </div>

        {/* Portfolio card — centered wide */}
        <a href={`/case-study/${PORTFOLIO_PROJECT.id}`} className="proj-card"
          style={{
            display:"block",textDecoration:"none",
            background:C.card,borderRadius:"12px",border:`1.5px solid ${C.ink}`,
            overflow:"hidden",
          }}>
          <div style={{background:PORTFOLIO_PROJECT.headerColor,padding:"12px 20px",borderBottom:`1.5px solid ${C.ink}`,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:"12px",fontWeight:500,color:C.white,letterSpacing:"0.06em"}}>{PORTFOLIO_PROJECT.n}</span>
            <span style={{fontFamily:"'Inter Tight','Inter',sans-serif",fontSize:"12px",fontWeight:500,color:C.white,opacity:0.8}}>view case study ↗</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:0}}>
            <div style={{height:"220px",overflow:"hidden",borderRight:`1.5px solid ${C.ink}`}}>
              <img src={PORTFOLIO_PROJECT.img} alt={PORTFOLIO_PROJECT.title}
                style={{width:"100%",height:"100%",objectFit:"cover",display:"block",filter:"sepia(0.35) contrast(1.05) brightness(0.88)"}}
              />
            </div>
            <div style={{padding:"32px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <h2 style={{fontFamily:"'Bricolage Grotesque','Inter Tight',sans-serif",fontSize:"26px",fontWeight:700,color:C.ink,marginBottom:"12px",letterSpacing:"-0.02em"}}>{PORTFOLIO_PROJECT.title}</h2>
              <p style={{fontFamily:"'Inter Tight','Inter',sans-serif",fontSize:"14px",color:C.muted,lineHeight:1.6,marginBottom:"16px"}}>{PORTFOLIO_PROJECT.desc}</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:"6px"}}>
                {PORTFOLIO_PROJECT.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
              </div>
            </div>
          </div>
        </a>
      </main>

      <SiteFooter/>
    </div>
  );
}
