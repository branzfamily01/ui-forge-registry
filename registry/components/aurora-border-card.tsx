"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function AuroraBorderCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[28px] p-[1px] ${className}`}>
      <motion.div aria-hidden className="absolute -inset-24 bg-[conic-gradient(from_0deg,#8b5cf6,#22d3ee,#34d399,#f472b6,#8b5cf6)] opacity-70 blur-xl"
        animate={{ rotate: 360 }} transition={{ duration: 9, repeat: Infinity, ease: "linear" }} />
      <div className="relative rounded-[27px] bg-zinc-950 p-6 text-white">{children}</div>
    </div>
  )
}
