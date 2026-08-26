"use client"

import { motion } from "framer-motion"

type ProgressRingProps = { value: number; size?: number; strokeWidth?: number; label?: string }

export function ProgressRing({ value, size = 120, strokeWidth = 10, label }: ProgressRingProps) {
  const r = (size - strokeWidth) / 2
  const c = 2 * Math.PI * r
  const p = Math.max(0, Math.min(100, value))
  return <div className="relative inline-grid place-items-center" style={{ width: size, height: size }}>
    <svg className="-rotate-90" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="currentColor" strokeWidth={strokeWidth} className="text-zinc-200 dark:text-zinc-800" />
      <motion.circle cx={size/2} cy={size/2} r={r} fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={strokeWidth} className="text-violet-500" strokeDasharray={c} initial={{ strokeDashoffset: c }} animate={{ strokeDashoffset: c * (1 - p/100) }} />
    </svg>
    <div className="absolute text-center"><strong className="text-2xl">{p}%</strong>{label && <div className="text-xs text-zinc-500">{label}</div>}</div>
  </div>
}
