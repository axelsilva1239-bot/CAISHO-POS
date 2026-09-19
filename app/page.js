"use client";
import { useState } from 'react';
export default function CAISHO() {
  const [q,setQ]=useState("");
  const rate={venta:19.00,caisho:18.50};
  const casas=[
    {id:"CAISHO-042",dir:"Playas de Tijuana",precio:1500,fuente:"FB Marketplace"},
    {id:"CAISHO-043",dir:"Zona Rio",precio:1200,fuente:"Inmuebles24"},
    {id:"CAISHO-044",dir:"Rosarito Centro",precio:900,fuente:"WhatsApp"},
  ];
  return(
    <div style={{background:"#fff",minHeight:"100vh",color:"#111",fontFamily:"system-ui"}}>
      <header style={{display:"flex",justifyContent:"space-between",padding:"20px 24px",borderBottom:"1px solid #eee"}}>
        <div style={{letterSpacing:"8px"}}>CAISHO</div>
        <div style={{fontSize:"11px",textAlign:"right"}}>RATE ${rate.venta} <br/><b>with us you pay ${rate.caisho}</b></div>
      </header>
      <main style={{maxWidth:"1000px",margin:"0 auto",padding:"32px 16px",textAlign:"center"}}>
        <h1 style={{fontSize:"46px",fontWeight:200,margin:0}}>Tijuana</h1>
        <p style={{fontSize:"10px",letterSpacing:"3px",opacity:0.5}}>PRIVATE RENTAL NETWORK</p>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search Playas, Zona Rio..." style={{width:"100%",maxWidth:"500px",padding:"16px 20px",borderRadius:"40px",border:"1px solid #111",marginTop:"20px"}}/>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"12px",marginTop:"30px",textAlign:"left"}}>
          {casas.filter(c=>c.dir.toLowerCase().includes(q.toLowerCase())).map(c=>(
            <div key={c.id} style={{border:"1px solid #eee",padding:"14px"}}>
              <div style={{fontSize:"9px",opacity:0.4}}>{c.id} • {c.fuente}</div>
              <div style={{marginTop:"8px"}}>{c.dir}</div>
              <div style={{fontSize:"12px",marginTop:"4px"}}>${c.precio} USD • RATE {rate.caisho}</div>
              <div style={{marginTop:"10px",fontSize:"10px",letterSpacing:"2px"}}>REQUEST ACCESS →</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
            }
