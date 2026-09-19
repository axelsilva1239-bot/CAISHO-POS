"use client";
import { useState, useEffect } from 'react';
export default function CAISHO() {
  const [rate, setRate] = useState({ venta: 19.00, caisho: 18.50 });
  const [q, setQ] = useState("");
  const casas = [
    { id: "CAISHO-042", dir: "Playas de Tijuana", precio: 1500, fuente: "FB Marketplace", verified: true },
    { id: "CAISHO-043", dir: "Zona Rio", precio: 1200, fuente: "Inmuebles24", verified: true },
    { id: "CAISHO-044", dir: "Rosarito Centro", precio: 900, fuente: "WhatsApp", verified: false },
  ];
  return (
    <div style={{background:"#fff", minHeight:"100vh", color:"#111"}}>
      <header style={{display:"flex", justifyContent:"space-between", padding:"22px 24px", borderBottom:"1px solid #eee"}}>
        <div style={{letterSpacing:"8px", fontWeight:200}}>CAISHO</div>
        <div style={{textAlign:"right", fontSize:"11px"}}><div>RATE ${rate.venta.toFixed(2)}</div><div style={{fontWeight:700}}>with us you pay ${rate.caisho.toFixed(2)}</div><div style={{opacity:0.4, fontSize:"9px"}}>where your dollars go further</div></div>
      </header>
      <main style={{maxWidth:"1100px", margin:"0 auto", padding:"40px 16px"}}>
        <div style={{textAlign:"center", marginBottom:"40px"}}>
          <h1 style={{fontSize:"48px", fontWeight:200, margin:0}}>Tijuana</h1>
          <p style={{letterSpacing:"3px", fontSize:"11px", opacity:0.5}}>PRIVATE RENTAL NETWORK • FASE 1</p>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search Playas, Zona Rio, Rosarito..." style={{marginTop:"24px", width:"100%", maxWidth:"600px", padding:"18px 22px", borderRadius:"40px", border:"1px solid #111", fontSize:"16px"}} />
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(280px,1fr))", gap:"16px"}}>
          {casas.filter(c=>c.dir.toLowerCase().includes(q.toLowerCase())).map(c=>(
            <div key={c.id} style={{border:"1px solid #eee", padding:"16px"}}>
              <div style={{fontSize:"10px", opacity:0.4}}>{c.id} • {c.fuente}</div>
              <div style={{marginTop:"10px", fontSize:"18px"}}>{c.dir}</div>
              <div style={{marginTop:"6px", fontSize:"13px"}}>${c.precio} USD • RATE ${rate.caisho}</div>
              <div style={{marginTop:"12px", fontSize:"10px", letterSpacing:"2px", borderTop:"1px solid #f5f5f5", paddingTop:"10px"}}>REQUEST ACCESS →</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
  }
