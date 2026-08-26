"use client"

import * as React from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

type SpotlightCardProps = React.HTMLAttributes<HTMLDivElement> & {
  radius?: number
}

export function SpotlightCard({ children, className = "", radius = 220, ...props }: SpotlightCardProps) {
  const x = useMotionValue(-radius)
  const y = useMotionValue(-radius)
  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${x}px ${y}px, rgba(255,255,255,.18), transparent 70%)`

  return (
    <div
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        x.set(event.clientX - rect.left)
        y.set(event.clientY - rect.top)
      }}
      onPointerLeave={() => { x.set(-radius); y.set(-radius) }}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-6 text-white ${className}`}
      {...props}
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background }} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
