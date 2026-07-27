"use client";
import React, { useState } from "react";
import { C, BASE_CSS, Header, SiteFooter, EMAIL, LINKEDIN } from "../shared";

const PAGE_CSS = `
  ${BASE_CSS}
  .contact-grid{display:grid;grid-template-columns:1.3fr 1fr;gap:48px;align-items:start}
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
  .email-btn:hover{background:${C.pink}!important;color:${C.ink}!important;}
  @media(max-width:900px){
    .contact-grid{grid-template-columns:1fr!important}
  }
  @media(max-width:760px){
    .contact-wrap{padding:40px 24px!important}
    [style*="font-size:100px"]{font-size:52px!important}
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

      <div style={{flex:1,maxWidth:"1700px",margin:"0 auto",width:"100%",boxSizing:"border-box"}} className="contact-wrap" style2={{padding:"64px 28px 56px"}}>
        <div style={{padding:"64px 28px 56px"}}>
          <div className="contact-grid">

            {/* LEFT — headline + CTA */}
            <div>
              <h1 style={{margin:0,fontWeight:800,fontSize:"100px",lineHeight:1,letterSpacing:"-3px",fontFamily:"'Bricolage Grotesque',sans-serif"}}>
                talk design to me
              </h1>
              <p style={{margin:"28px 0 0",maxWidth:"46ch",fontSize:"16.5px",lineHeight:1.6}}>
                hiring, collaborating, or just want to argue about the best Bowie record? my inbox is open.
              </p>
              <div style={{display:"flex",gap:"16px",marginTop:"36px",alignItems:"center",flexWrap:"wrap"}}>
                <a href={`mailto:${EMAIL}`} className="email-btn"
                  style={{display:"inline-block",background:C.ink,color:C.paper,padding:"14px 28px",fontWeight:700,fontSize:"15px",letterSpacing:"-.3px",textDecoration:"none",borderRadius:"999px",transition:"background .15s,color .15s"}}>
                  email me →
                </a>
              </div>
            </div>

            {/* RIGHT — form card rotated */}
            <div style={{border:`1.5px solid ${C.ink}`,borderRadius:"12px",overflow:"hidden",background:C.card,transform:"rotate(.8deg)"}}>
              <div style={{background:C.tangerine,color:C.ink,padding:"10px 16px",fontWeight:800,fontSize:"14px",letterSpacing:"-.2px"}}>
                leave a comment ♥
              </div>
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
                  placeholder={"say hi, pitch a project, defend your favorite record"}
                  rows={5}
                  value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))}
                />
                <button type="submit" className="form-submit">post comment →</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter/>
    </div>
  );
}
