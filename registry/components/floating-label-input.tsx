"use client"

import * as React from "react"

export function FloatingLabelInput({label,id,...props}:React.InputHTMLAttributes<HTMLInputElement>&{label:string}){
  const uid=React.useId();const inputId=id||uid
  return <div className="relative">
    <input id={inputId} placeholder=" " {...props} className="peer w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 pb-3 pt-6 text-white outline-none focus:border-violet-500"/>
    <label htmlFor={inputId} className="pointer-events-none absolute left-4 top-4 text-sm text-zinc-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-violet-300 [:not(:placeholder-shown)~&]:top-2 [:not(:placeholder-shown)~&]:text-[10px]">{label}</label>
  </div>
}
