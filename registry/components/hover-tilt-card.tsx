"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function HoverTiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0), y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-.5,.5], [7,-7]), { stiffness: 180, damping: 18 })
  const ry = useSpring(useTransform(x, [-.5,.5], [-9,9]), { stiffness: 180, damping: 18 })
  return <motion.div style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
    onPointerMove={(e)=>{const r=e.currentTarget.getBoundingClientRect();x.set((e.clientX-r.left)/r.width-.5);y.set((e.clientY-r.top)/r.height-.5)}}
    onPointerLeave={()=>{x.set(0);y.set(0)}} className={`rounded-3xl border border-white/10 bg-zinc-950 p-6 text-white shadow-2xl ${className}`}>{children}</motion.div>
}
