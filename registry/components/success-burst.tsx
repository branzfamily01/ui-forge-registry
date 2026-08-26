"use client"

import { AnimatePresence, motion } from "framer-motion"

const particles = Array.from({ length: 14 }, (_, i) => ({
  angle: (Math.PI * 2 * i) / 14,
  distance: 52 + (i % 4) * 10,
}))

type SuccessBurstProps = { show: boolean; label?: string }

export function SuccessBurst({ show, label = "できた！" }: SuccessBurstProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="relative grid min-h-36 place-items-center" initial={{ scale: .8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: .9, opacity: 0 }}>
          {particles.map((p, i) => <motion.span key={i} className="absolute h-2 w-2 rounded-full bg-fuchsia-400"
            initial={{ x: 0, y: 0, opacity: 1 }} animate={{ x: Math.cos(p.angle) * p.distance, y: Math.sin(p.angle) * p.distance, opacity: 0 }}
            transition={{ duration: .7, delay: i * .015 }} />)}
          <motion.div initial={{ scale: .5, rotate: -8 }} animate={{ scale: [1.18, 1], rotate: 0 }} className="rounded-3xl bg-emerald-400 px-6 py-4 text-xl font-black text-emerald-950 shadow-xl">✓ {label}</motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
