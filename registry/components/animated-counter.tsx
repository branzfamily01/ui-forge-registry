"use client"

import * as React from "react"
import { animate, useMotionValue, useTransform, motion } from "framer-motion"

type AnimatedCounterProps = { value: number; duration?: number; className?: string }

export function AnimatedCounter({ value, duration = 0.7, className = "" }: AnimatedCounterProps) {
  const number = useMotionValue(0)
  const rounded = useTransform(number, (latest) => Math.round(latest).toLocaleString())
  React.useEffect(() => { const controls = animate(number, value, { duration }); return controls.stop }, [value, duration, number])
  return <motion.span className={`tabular-nums ${className}`}>{rounded}</motion.span>
}
