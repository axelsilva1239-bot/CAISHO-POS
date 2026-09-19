"use client"
import { useState } from 'react'

export default function Pagina(){
  return (
    <div style={{background:'#F5F1E8', minHeight:'100vh', padding:20, fontFamily:'sans-serif'}}>
      <h1 style={{fontSize:28, fontWeight:900, letterSpacing:'-1px'}}>caisho</h1>
      <p style={{fontSize:10, opacity:0.6, fontWeight:700}}>AGENTE AUTÓNOMO 1.0 - EXCLUSIVIDAD 60 DÍAS</p>

      <h2 style={{fontSize:40, fontWeight:900, lineHeight:0.9, marginTop:25}}>
        La página<br/>es el agente.<br/>
        <span style={{color:'#8B2500'}}>Nunca duerme.</span>
      </h2>

      <p style={{marginTop:15, fontSize:14, lineHeight:1.3}}>
        CAISHO 1.0 capta dueños y rentadores por algoritmo en FB, IG y portales. 
        Los une, agenda cita, genera contrato 60 días y cobra comisión automática.
      </p>

      <div style={{marginTop:20, display:'grid', gap:10}}>
        <div style={{background:'white', padding:14, borderRadius:16, fontSize:13}}><b>M1 Landing</b> - Buscador nacional 32 ciudades + SEO</div>
        <div style={{background:'white', padding:14, borderRadius:16, fontSize:13}}><b>M2 Subir casa</b> - Vector + Folio CAISHO-XXXX + $500 referido</div>
        <div style={{background:'white', padding:14, borderRadius:16, fontSize:13}}><b>M3 Algoritmo Ultra &gt;0.85</b> - WhatsApp cada 5 días + Stripe</div>
        <div style={{background:'white', padding:14, borderRadius:16, fontSize:13}}><b>M4 Blindaje Legal</b> - NIP 2h + Contrato PDF + Anti-brinco</div>
      </div>

      <div style={{marginTop:20, background:'black', color:'white', padding:15, borderRadius:30, textAlign:'center', fontWeight:800}}>
        SUBIR CASA + ACTIVAR RASTREO →
      </div>

      <p style={{fontSize:8, marginTop:25, opacity:0.5, textAlign:'center'}}>
        CAISHO es plataforma de contacto. No somos inmobiliaria ni custodiamos inmuebles. 
        Verifica documentación antes de pagar. contacto@caisho.com
      </p>
    </div>
  )
}
