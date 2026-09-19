"use client"
import { useState } from 'react'

export default function Page() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const products = [
    { id: 1, name: "Taco", price: 25 },
    { id: 2, name: "Burrito", price: 65 },
    { id: 3, name: "Refresco", price: 30 },
  ]

  const addToCart = (p) => {
    setCart([...cart, p])
    setTotal(total + p.price)
  }

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif', background: '#111', color: 'white', minHeight: '100vh' }}>
      <h1 style={{ fontSize: 32, fontWeight: 'bold' }}>CAISHO-POS</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 20 }}>
        <div>
          <h2>Productos</h2>
          {products.map(p => (
            <button key={p.id} onClick={() => addToCart(p)} style={{ display: 'block', width: '100%', padding: 15, margin: '10px 0', background: 'white', color: 'black', borderRadius: 10, fontWeight: 'bold' }}>
              {p.name} - ${p.price}
            </button>
          ))}
        </div>
        <div style={{ background: 'white', color: 'black', padding: 20, borderRadius: 10 }}>
          <h2>Ticket</h2>
          {cart.map((c,i) => <div key={i}>{c.name} - ${c.price}</div>)}
          <hr style={{ margin: '15px 0' }} />
          <h2>Total: ${total}</h2>
          <button onClick={() => { setCart([]); setTotal(0) }} style={{ width: '100%', padding: 10, background: '#22c55e', borderRadius: 10, marginTop: 10, fontWeight: 'bold' }}>COBRAR</button>
        </div>
      </div>
    </div>
  )
}
