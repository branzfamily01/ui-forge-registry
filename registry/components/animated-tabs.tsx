"use client"

import { motion } from "framer-motion"

type Tab = { id: string; label: string }
type AnimatedTabsProps = { tabs: Tab[]; value: string; onValueChange: (id: string) => void }

export function AnimatedTabs({ tabs, value, onValueChange }: AnimatedTabsProps) {
  return <div className="inline-flex rounded-2xl bg-zinc-100 p-1 dark:bg-zinc-900">
    {tabs.map((tab) => <button key={tab.id} onClick={() => onValueChange(tab.id)} className="relative rounded-xl px-4 py-2 text-sm font-medium">
      {value === tab.id && <motion.span layoutId="active-tab" className="absolute inset-0 rounded-xl bg-white shadow-sm dark:bg-zinc-800" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
      <span className="relative z-10">{tab.label}</span>
    </button>)}
  </div>
}
