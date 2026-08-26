"use client"

import { motion } from "framer-motion"

export function LoadingDots({label="Loading"}:{label?:string}){
  return <div className="inline-flex items-center gap-2" role="status" aria-label={label}>
    {[0,1,2].map(i=><motion.span key={i} className="size-2.5 rounded-full bg-violet-400" animate={{y:[0,-7,0],opacity:[.45,1,.45]}} transition={{duration:.75,repeat:Infinity,delay:i*.12}}/>)}
  </div>
}
