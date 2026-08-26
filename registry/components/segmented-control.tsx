"use client"

import { motion } from "framer-motion"

type Option={value:string;label:string}
export function SegmentedControl({options,value,onChange}:{options:Option[];value:string;onChange:(v:string)=>void}){
  return <div className="inline-flex rounded-2xl bg-zinc-900 p-1 text-sm text-zinc-300">
    {options.map(o=><button key={o.value} onClick={()=>onChange(o.value)} className="relative rounded-xl px-4 py-2">
      {value===o.value&&<motion.span layoutId="segment" className="absolute inset-0 rounded-xl bg-white" transition={{type:"spring",stiffness:350,damping:30}}/>}
      <span className={`relative ${value===o.value?'text-zinc-950':'text-zinc-300'}`}>{o.label}</span>
    </button>)}
  </div>
}
