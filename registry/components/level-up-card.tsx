"use client"

import { motion } from "framer-motion"

type LevelUpCardProps = { level: number; title?: string; subtitle?: string }

export function LevelUpCard({ level, title = "LEVEL UP", subtitle = "次のステージが開きました" }: LevelUpCardProps) {
  return (
    <motion.div initial={{ opacity: 0, scale: .84, rotateX: 12 }} animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      className="relative overflow-hidden rounded-[2rem] border border-amber-300/30 bg-zinc-950 p-7 text-center text-white shadow-2xl">
      <motion.div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,.28),transparent_52%)]" animate={{ opacity: [.5, 1, .5] }} transition={{ duration: 2.2, repeat: Infinity }} />
      <div className="relative"><div className="text-xs font-bold tracking-[.35em] text-amber-300">{title}</div><div className="my-2 text-7xl font-black">{level}</div><div className="text-sm text-zinc-300">{subtitle}</div></div>
    </motion.div>
  )
}
