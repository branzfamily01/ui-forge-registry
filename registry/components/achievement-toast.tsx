"use client"

import { AnimatePresence, motion } from "framer-motion"

export function AchievementToast({show,title="実績を解除！",detail="新しいバッジを獲得しました"}:{show:boolean;title?:string;detail?:string}){
  return <AnimatePresence>{show&&<motion.div initial={{opacity:0,y:20,scale:.96}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:12}}
    className="flex max-w-sm items-center gap-3 rounded-2xl border border-amber-300/20 bg-zinc-950 p-4 text-white shadow-2xl">
    <div className="grid size-11 place-items-center rounded-xl bg-amber-300 text-xl text-amber-950">★</div><div><b>{title}</b><p className="m-0 mt-1 text-xs text-zinc-400">{detail}</p></div>
  </motion.div>}</AnimatePresence>
}
