"use client"

import { motion } from "framer-motion"

export function StreakCounter({days,label="day streak"}:{days:number;label?:string}){
  return <div className="inline-flex items-center gap-3 rounded-3xl border border-orange-400/20 bg-zinc-950 px-5 py-4 text-white">
    <motion.span className="text-3xl" animate={{scale:[1,1.16,1],rotate:[0,-4,3,0]}} transition={{duration:1.8,repeat:Infinity}}>🔥</motion.span>
    <div><strong className="block text-2xl tabular-nums">{days}</strong><span className="text-xs text-zinc-400">{label}</span></div>
  </div>
}
