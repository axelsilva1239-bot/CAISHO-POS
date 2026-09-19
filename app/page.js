"use client"
import { useState } from 'react'
export default function Page(){
 const [cart,setCart]=useState([])
 const [total,setTotal]=useState(0)
 const products=[{id:1,name:"Taco",price:25},{id:2,name:"Burrito",price:65}]
 return <div style={{padding:20,background:'#111',color:'white',minHeight:'100vh'}}>
 <h1>CAISHO-POS</h1>
 {products.map(p=><button key={p.id} onClick={()=>{setCart([...cart,p]);setTotal(total+p.price)}} style={{display:'block',width:'100%',padding:15,margin:'10px 0',background:'white',color:'black',borderRadius:10}}>{p.name} - ${p.price}</button>)}
 <div style={{background:'white',color:'black',padding:20,borderRadius:10,marginTop:20}}>
 {cart.map((c,i)=><div key={i}>{c.name}</div>)}<h2>Total: ${total}</h2>
 </div></div>
}
