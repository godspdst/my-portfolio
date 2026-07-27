"use client";
import React, { useState } from "react";
import { C, BASE_CSS, Header, SiteFooter, EMAIL } from "../shared";

const PAGE_CSS = `
  ${BASE_CSS}
  .form-input{
    width:100%;background:${C.paper};border:1.5px solid ${C.ink};border-radius:8px;
    padding:12px 14px;font:400 14px 'Inter Tight',sans-serif;color:${C.ink};
    outline:none;transition:border-color .2s;resize:vertical;
  }
  .form-input:focus{border-color:${C.blue};}
  .form-submit{
    display:block;width:100%;text-align:center;
    background:${C.blue};color:${C.paper};
    padding:12px 20px;border-radius:999px;border:none;
    font:700 14px 'Inter Tight',sans-serif;cursor:pointer;
    text-decoration:none;transition:background .15s,color .15s;
  }
  .form-submit:hover{background:${C.pink};color:${C.ink};}
  @media(max-width:760px){
    .contact-wrap{padding:40px 24px!important}
  }
`;

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", message:"" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name || "portfolio visitor"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div style={{background:C.paper,minHeight:"100vh",display:"flex",flexDirection:"column",fontFamily:"'Inter Tight',sans-serif",color:C.ink}}>
      <style>{PAGE_CSS}</style>
      <Header activePage="contact"/>

      <div style={{flex:1,maxWidth:"680px",margin:"0 auto",width:"100%",padding:"64px 28px 56px",boxSizing:"border-box"}} className="contact-wrap">
        <h1 style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontWeight:800,fontSize:"76px",lineHeight:1,letterSpacing:"-2.2px",color:C.ink,marginBottom:"36px"}}>
          drop a note
        </h1>

        <div style={{border:`1.5px solid ${C.ink}`,borderRadius:"12px",overflow:"hidden",background:C.card,transform:"rotate(.8deg)"}}>
          <form onSubmit={handleSubmit} style={{padding:"18px",display:"flex",flexDirection:"column",gap:"12px"}}>
            <input
              className="form-input" type="text"
              aria-label="your name" placeholder="your name"
              value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))}
            />
            <input
              className="form-input" type="email"
              aria-label="your email" placeholder="your@email.com"
              value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))}
            />
            <textarea
              className="form-input"
              aria-label="your message"
              placeholder="say hi, pitch a project, defend your favorite bowie record"
              rows={5}
              value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))}
            />
            <button type="submit" className="form-submit">send →</button>
          </form>
        </div>
      </div>

      <SiteFooter/>
    </div>
  );
}
