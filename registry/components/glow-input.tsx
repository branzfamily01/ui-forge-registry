"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function GlowInput({className="",...props}:React.InputHTMLAttributes<HTMLInputElement>){
  const [focus,setFocus]=React.useState(false)
  return <div className={`relative rounded-2xl ${className}`}>
    <motion.div aria-hidden className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 blur-sm" animate={{opacity:focus?1:.18}}/>
    <input {...props} onFocus={e=>{setFocus(true);props.onFocus?.(e)}} onBlur={e=>{setFocus(false);props.onBlur?.(e)}} className="relative w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none"/>
  </div>
}
