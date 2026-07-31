"use client";
import React, { useState, useEffect, useRef } from "react";
import { C } from "./shared";
import { validateCaseStudyPassword } from "./actions";

/* ── Pixel-art padlock (8×8 grid) ─────────────────────── */
function PadlockSVG({ size = 16, color = "#f5efe3" }) {
  const px = [
    [2,0],[3,0],[4,0],[5,0],
    [1,1],[6,1],
    [1,2],[6,2],
    [0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],
    [0,4],[2,4],[3,4],[4,4],[5,4],[7,4],
    [0,5],[2,5],[5,5],[7,5],
    [0,6],[2,6],[3,6],[4,6],[5,6],[7,6],
    [0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7],
  ];
  return (
    <svg width={size} height={size} viewBox="0 0 8 8" style={{imageRendering:"pixelated",display:"block",flexShrink:0}}>
      {px.map(([x,y],i) => <rect key={i} x={x} y={y} width={1} height={1} fill={color}/>)}
    </svg>
  );
}

/* ── "password protected" badge ───────────────────────── */
export function LockBadge({ fontSize = 7.5 }) {
  return (
    <span style={{
      position:"absolute",top:"8px",right:"8px",zIndex:3,pointerEvents:"none",
      background:C.paper,border:`1.5px solid ${C.ink}`,borderRadius:"999px",
      padding:"2px 7px",font:`600 ${fontSize}px 'IBM Plex Mono',monospace`,
      color:C.ink,letterSpacing:".3px",whiteSpace:"nowrap",
    }}>
      password protected
    </span>
  );
}

/* ── Lock hover overlay (opacity/scale driven by parent CSS) */
export function LockOverlay({ circleSize = 38 }) {
  return (
    <div className="lock-ovl" style={{
      position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",
      pointerEvents:"none",
    }}>
      <div className="lock-circ">
        <PadlockSVG size={Math.round(circleSize * 0.6)} color={C.paper}/>
      </div>
    </div>
  );
}

/* ── Password gate modal ──────────────────────────────── */
export function PasswordGateModal({ open, onClose, title, num, href }) {
  const [value, setValue]     = useState("");
  const [error, setError]     = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setValue(""); setError(false); setSuccess(false);
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [open]);

  useEffect(() => {
    const onKey = e => { if (e.key === "Escape") onClose(); };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const ok = await validateCaseStudyPassword(num, value);
    setLoading(false);
    if (ok) {
      setSuccess(true);
    } else {
      setValue("");
      setError(true);
    }
  };

  return (
    <div
      style={{position:"fixed",inset:0,background:"rgba(43,31,28,.6)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"}}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <style>{`@keyframes pgShake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}`}</style>
      <div style={{width:"100%",maxWidth:"420px",background:C.card,border:`1.5px solid ${C.ink}`,borderRadius:"12px",boxShadow:`8px 8px 0 ${C.blue}`,overflow:"hidden"}}>

        {/* Header */}
        <div style={{background:C.blue,padding:"16px 20px",display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"12px"}}>
          <div style={{display:"flex",flexDirection:"column",gap:"6px",minWidth:0}}>
            <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
              <PadlockSVG size={18} color={C.paper}/>
              <span style={{font:`600 9.5px 'IBM Plex Mono',monospace`,color:"rgba(245,239,227,.7)",letterSpacing:"1px",textTransform:"uppercase"}}>
                case study № {num} · restricted
              </span>
            </div>
            <span style={{font:`800 17px 'Inter Tight',sans-serif`,color:C.paper,letterSpacing:"-.3px",lineHeight:1.2}}>{title}</span>
          </div>
          <button
            onClick={onClose}
            style={{background:"none",border:"none",color:C.paper,fontSize:"22px",cursor:"pointer",padding:0,lineHeight:1,opacity:.7,flexShrink:0,marginTop:"2px"}}
          >×</button>
        </div>

        {/* Body */}
        <div style={{padding:"24px 20px"}}>
          {!success ? (
            <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"12px"}}>
              <label style={{font:`600 9.5px 'IBM Plex Mono',monospace`,color:C.muted,letterSpacing:"1px",textTransform:"uppercase"}}>
                enter password
              </label>
              <input
                ref={inputRef}
                type="password"
                value={value}
                onChange={e => { setValue(e.target.value); setError(false); }}
                style={{background:"#fff",border:`1.5px solid ${C.ink}`,borderRadius:"8px",padding:"12px 14px",font:`400 14px 'IBM Plex Mono',monospace`,color:C.ink,outline:"none",width:"100%",boxSizing:"border-box"}}
              />
              {error && (
                <div style={{background:C.tangerine,border:`1.5px solid ${C.ink}`,borderRadius:"8px",padding:"10px 14px",font:`700 13px 'Inter Tight',sans-serif`,color:C.ink,animation:"pgShake .5s ease"}}>
                  incorrect password
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                style={{background:C.blue,color:C.paper,border:"none",borderRadius:"999px",padding:"12px 20px",font:`700 14px 'Inter Tight',sans-serif`,cursor:loading?"default":"pointer",transition:"background .15s",opacity:loading?.7:1}}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.background = C.ink; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.blue; }}
              >
                {loading ? "checking…" : "unlock case study →"}
              </button>
            </form>
          ) : (
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px",textAlign:"center",padding:"8px 0"}}>
              <div style={{width:"52px",height:"52px",borderRadius:"999px",background:C.lime,border:`1.5px solid ${C.ink}`,display:"flex",alignItems:"center",justifyContent:"center",font:`700 22px 'Inter Tight',sans-serif`,color:C.ink}}>✓</div>
              <span style={{font:`800 20px 'Inter Tight',sans-serif`,color:C.ink,letterSpacing:"-.3px"}}>access granted</span>
              <a
                href={href}
                style={{background:C.ink,color:C.paper,borderRadius:"999px",padding:"12px 24px",font:`700 14px 'Inter Tight',sans-serif`,textDecoration:"none",transition:"background .15s"}}
                onMouseEnter={e => e.currentTarget.style.background = C.blue}
                onMouseLeave={e => e.currentTarget.style.background = C.ink}
              >
                view case study →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
