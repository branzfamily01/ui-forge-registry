"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function CelebrationButton({label="完了！"}:{label?:string}){
  const [burst,setBurst]=React.useState(0)
  return <div className="relative grid place-items-center">
    <motion.button whileTap={{scale:.92}} onClick={()=>setBurst(v=>v+1)} className="relative z-10 rounded-2xl bg-emerald-400 px-5 py-3 font-black text-emerald-950">✓ {label}</motion.button>
    {Array.from({length:10},(_,i)=><motion.i key={`${burst}-${i}`} className="absolute size-2 rounded-full bg-fuchsia-400" initial={{opacity:0,scale:0}} animate={burst?{opacity:[0,1,0],scale:[0,1,1],x:Math.cos(i*.628)*70,y:Math.sin(i*.628)*70}:{}} transition={{duration:.65}}/>)}
  </div>
}
