"use client"

import * as React from "react"
import { animate, motion, useMotionValue, useTransform } from "framer-motion"

export function NumberTicker({value,suffix="",duration=.8,className=""}:{value:number;suffix?:string;duration?:number;className?:string}){
  const n=useMotionValue(0);const text=useTransform(n,v=>`${Math.round(v).toLocaleString()}${suffix}`)
  React.useEffect(()=>{const c=animate(n,value,{duration,ease:"easeOut"});return c.stop},[value,duration,n])
  return <motion.span className={`tabular-nums ${className}`}>{text}</motion.span>
}
