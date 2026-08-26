"use client"

import { motion } from "framer-motion"

export function NotificationPulse({count=1,label="通知"}:{count?:number;label?:string}){
  return <div className="relative inline-flex">
    <button aria-label={`${label} ${count}件`} className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-zinc-950 text-xl text-white">🔔</button>
    {count>0&&<><motion.span aria-hidden className="absolute -right-1 -top-1 size-4 rounded-full bg-rose-500" animate={{scale:[1,1.65],opacity:[.6,0]}} transition={{duration:1.4,repeat:Infinity}}/><span className="absolute -right-1 -top-1 grid min-h-4 min-w-4 place-items-center rounded-full bg-rose-500 px-1 text-[9px] font-black text-white">{count}</span></>}
  </div>
}
