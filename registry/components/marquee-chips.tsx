"use client"

import { motion } from "framer-motion"

export function MarqueeChips({items,speed=18}:{items:string[];speed?:number}){
  const doubled=[...items,...items]
  return <div className="max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
    <motion.div className="flex w-max gap-2" animate={{x:[0,"-50%"]}} transition={{duration:speed,repeat:Infinity,ease:"linear"}}>
      {doubled.map((item,i)=><span key={`${item}-${i}`} className="whitespace-nowrap rounded-full border border-white/10 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-200">{item}</span>)}
    </motion.div>
  </div>
}
