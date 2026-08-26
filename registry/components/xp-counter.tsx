"use client"

import { AnimatePresence, motion } from "framer-motion"

type XpCounterProps = { xp: number; gained?: number; level?: number }

export function XpCounter({ xp, gained = 0, level = 1 }: XpCounterProps) {
  const withinLevel = xp % 100
  return (
    <div className="w-full max-w-sm rounded-3xl border border-violet-400/20 bg-zinc-950 p-4 text-white">
      <div className="mb-2 flex items-center justify-between"><span className="text-sm text-zinc-400">LEVEL {level}</span><strong>{xp} XP</strong></div>
      <div className="h-3 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" initial={{ width: 0 }} animate={{ width: `${withinLevel}%` }} /></div>
      <AnimatePresence>{gained > 0 && <motion.div key={gained} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-2 text-right text-sm font-bold text-cyan-300">+{gained} XP</motion.div>}</AnimatePresence>
    </div>
  )
}
