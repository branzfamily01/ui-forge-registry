import * as React from "react"

export function SkeletonShimmer({lines=3,className=""}:{lines?:number;className?:string}){
  return <div className={`animate-pulse space-y-3 rounded-3xl border border-white/10 bg-zinc-950 p-5 ${className}`} aria-hidden>
    <div className="h-8 w-12 rounded-xl bg-zinc-800"/>
    {Array.from({length:lines},(_,i)=><div key={i} className="h-3 rounded-full bg-zinc-800" style={{width:`${92-i*13}%`}}/>)}
  </div>
}
