"use client"

import { motion } from "framer-motion"

export function StepProgress({steps,current}:{steps:string[];current:number}){
  return <div className="flex w-full items-start">
    {steps.map((label,i)=><div key={label} className="relative flex flex-1 flex-col items-center gap-2 text-center text-xs text-zinc-400">
      {i<steps.length-1&&<div className="absolute left-1/2 top-4 h-1 w-full bg-zinc-800"><motion.div className="h-full bg-violet-500" initial={{width:0}} animate={{width:i<current?'100%':'0%'}}/></div>}
      <motion.div animate={{scale:i===current?1.15:1}} className={`relative z-10 grid size-8 place-items-center rounded-full font-bold ${i<=current?'bg-violet-500 text-white':'bg-zinc-800'}`}>{i<current?'✓':i+1}</motion.div>
      <span>{label}</span>
    </div>)}
  </div>
}
