"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

type DockItem = { id: string; label: string; icon: React.ReactNode; onClick?: () => void }

type MagneticDockProps = { items: DockItem[] }

function DockButton({ item, mouseX }: { item: DockItem; mouseX: ReturnType<typeof useMotionValue<number>> }) {
  const ref = React.useRef<HTMLButtonElement>(null)
  const distance = useTransform(mouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect()
    return bounds ? value - (bounds.left + bounds.width / 2) : 999
  })
  const widthRaw = useTransform(distance, [-140, 0, 140], [48, 76, 48])
  const width = useSpring(widthRaw, { mass: 0.12, stiffness: 180, damping: 16 })

  return (
    <motion.button ref={ref} style={{ width, height: width }} onClick={item.onClick}
      className="grid shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/10 text-xl text-white shadow-lg backdrop-blur-xl"
      aria-label={item.label} title={item.label}>
      {item.icon}
    </motion.button>
  )
}

export function MagneticDock({ items }: MagneticDockProps) {
  const mouseX = useMotionValue(9999)
  return (
    <motion.nav onPointerMove={(e) => mouseX.set(e.clientX)} onPointerLeave={() => mouseX.set(9999)}
      className="flex items-end gap-2 rounded-3xl border border-white/10 bg-zinc-950/85 p-2 backdrop-blur-xl">
      {items.map((item) => <DockButton key={item.id} item={item} mouseX={mouseX} />)}
    </motion.nav>
  )
}
