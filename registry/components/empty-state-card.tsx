import * as React from "react"

export function EmptyStateCard({icon="✦",title,description,action}:{icon?:React.ReactNode;title:string;description:string;action?:React.ReactNode}){
  return <div className="rounded-3xl border border-dashed border-zinc-700 bg-zinc-950 p-8 text-center text-white">
    <div className="mx-auto mb-4 grid size-14 place-items-center rounded-2xl bg-white/5 text-2xl">{icon}</div><h3 className="m-0 text-lg font-bold">{title}</h3><p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-zinc-400">{description}</p>{action&&<div className="mt-5">{action}</div>}
  </div>
}
