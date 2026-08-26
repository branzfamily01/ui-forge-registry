"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function PulseButton({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <motion.button whileTap={{ scale: .95 }} className={`relative rounded-2xl bg-violet-600 px-5 py-3 font-bold text-white ${className}`} {...props}>
    <motion.span aria-hidden className="absolute inset-0 rounded-2xl border border-violet-300" animate={{ scale:[1,1.28], opacity:[.7,0] }} transition={{ duration:1.5, repeat:Infinity }} />
    <span className="relative">{children}</span>
  </motion.button>
}
