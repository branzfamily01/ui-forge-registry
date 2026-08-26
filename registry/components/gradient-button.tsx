"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function GradientButton({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-5 py-3 font-semibold text-white shadow-lg ${className}`}
      {...props}>
      <motion.span aria-hidden className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/25 blur-sm"
        animate={{ x: ["0%", "430%"] }} transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.5 }} />
      <span className="relative">{children}</span>
    </motion.button>
  )
}
