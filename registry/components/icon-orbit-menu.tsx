"use client"

import * as React from "react"
import { motion } from "framer-motion"

type OrbitItem={id:string;label:string;icon:React.ReactNode;onClick?:()=>void}
export function IconOrbitMenu({ items, center="＋" }:{items:OrbitItem[];center?:React.ReactNode}){
  const radius=78
  return <div className="relative size-56">
    <div className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-violet-600 text-2xl text-white shadow-xl">{center}</div>
    {items.map((item,i)=>{const a=(Math.PI*2*i)/items.length-Math.PI/2;return <motion.button key={item.id} onClick={item.onClick} aria-label={item.label} title={item.label}
      className="absolute grid size-11 place-items-center rounded-2xl border border-white/10 bg-zinc-900 text-white shadow-lg"
      style={{left:`calc(50% + ${Math.cos(a)*radius}px - 22px)`,top:`calc(50% + ${Math.sin(a)*radius}px - 22px)`}}
      initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:i*.05,type:"spring"}}>{item.icon}</motion.button>})}
  </div>
}
