"use client"

import * as React from "react"
import { motion } from "framer-motion"

type FloatingActionButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { label?: string }

export function FloatingActionButton({ label = "追加", children = "+", className = "", ...props }: FloatingActionButtonProps) {
  return <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: .92 }} aria-label={label}
    className={`grid size-14 place-items-center rounded-full bg-zinc-950 text-2xl text-white shadow-2xl ring-1 ring-white/10 ${className}`} {...props}>{children}</motion.button>
}
