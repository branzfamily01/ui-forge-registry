"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function ShimmerBadge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`relative inline-flex overflow-hidden rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-bold text-violet-700 dark:text-violet-200 ${className}`}>
    <motion.span aria-hidden className="absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-20deg] bg-white/50 blur-sm" animate={{ x: ["0%", "520%"] }} transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.2 }} />
    <span className="relative">{children}</span>
  </span>
}
