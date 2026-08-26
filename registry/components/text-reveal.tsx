"use client"

import { motion } from "framer-motion"

type TextRevealProps = { text: string; className?: string; delay?: number }

export function TextReveal({ text, className = "", delay = 0.03 }: TextRevealProps) {
  return (
    <span className={className} aria-label={text}>
      {Array.from(text).map((char, index) => (
        <motion.span key={`${char}-${index}`} aria-hidden className="inline-block"
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: index * delay, duration: 0.35 }}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}
