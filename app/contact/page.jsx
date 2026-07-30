"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { C, BASE_CSS, Header, ScrollToTop, PAGE_X } from "../shared";

const EMAILJS_SERVICE  = "service_6rg2drg";
const EMAILJS_TEMPLATE = "template_lbhj07g";
const EMAILJS_KEY      = "Y6zgNqbz_3v7LGOz9";

const PAGE_CSS = `
  ${BASE_CSS}
  .form-input{
    width:100%;background:${C.paper};
    border:1.5px solid rgba(43,31,28,.5);border-radius:10px;
    padding:16px 18px;font:400 16px 'Inter Tight',sans-serif;color:${C.ink};
    outline:none;transition:border-color .2s;resize:vertical;overflow:hidden;
    box-sizing:border-box;
  }
  .form-input:focus{border-color:${C.blue};}
  .form-submit{
    display:block;width:100%;text-align:center;
    background:${C.blue};color:${C.paper};
    padding:17px 20px;border-radius:12px;border:none;
    font:800 16px 'Inter Tight',sans-serif;
    cursor:url('/assets/cursor-pink.png') 2 2,pointer;
    text-decoration:none;transition:background .15s,color .15s;
  }
  .form-submit:hover{background:${C.pink};color:${C.ink};}
  @media(max-width:900px){
    .form-input{font-size:14px!important;padding:13px 14px!important}
  }
  @media(max-width:760px){
    .contact-wrap{padding:24px 24px 72px!important}
  }
`;

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        { name: form.name, email: form.email, message: form.message },
        EMAILJS_KEY
      );
      setStatus("sent");
      setForm({ name:"", email:"", message:"" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div style={{background:C.paper,minHeight:"100vh",display:"flex",flexDirection:"column",fontFamily:"'Inter Tight',sans-serif",color:C.ink}}>
      <style>{PAGE_CSS}</style>
      <Header activePage="contact"/>

      <div className="contact-wrap" style={{flex:1,maxWidth:"1700px",margin:"0 auto",width:"100%",padding:`24px ${PAGE_X} 72px`,boxSizing:"border-box",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h1 style={{fontFamily:"'Bricolage Grotesque',sans-serif",fontWeight:800,fontSize:"clamp(44px,8.8vw,100px)",lineHeight:1,letterSpacing:"-3px",color:C.ink,marginBottom:"0",textAlign:"center"}}>
          drop a note
        </h1>

        <div style={{width:"100%",maxWidth:"860px",marginTop:"40px",border:`1.5px solid ${C.ink}`,borderRadius:"16px",background:C.card,padding:"28px",boxSizing:"border-box"}}>
          <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"16px"}}>
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
              placeholder="say hi, pitch a project, defend your favorite bowie record (low is the correct answer)"
              rows={7}
              value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))}
            />
            <button type="submit" className="form-submit" disabled={status==="sending"||status==="sent"}>
              {status==="sending" ? "sending…" : status==="sent" ? "sent ✓" : status==="error" ? "failed — try again" : "send →"}
            </button>
            {status==="error" && (
              <p style={{textAlign:"center",color:C.tangerine,fontSize:"14px",margin:0}}>
                something went wrong — please try again or email directly.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Compact strip footer — contact page only */}
      <footer style={{background:C.blue,color:"#d9e0ff",padding:"16px 28px",font:`400 12px 'IBM Plex Mono',monospace`,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px"}}>
        <span>©2026 stephanie guarino ✳</span>
        <span>made with sound &amp; vision</span>
      </footer>
      <ScrollToTop/>
    </div>
  );
}
