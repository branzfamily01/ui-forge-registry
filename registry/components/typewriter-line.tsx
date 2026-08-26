"use client"

import * as React from "react"

export function TypewriterLine({text,speed=45,className=""}:{text:string;speed?:number;className?:string}){
  const [shown,setShown]=React.useState(0)
  React.useEffect(()=>{setShown(0);const id=setInterval(()=>setShown(v=>{if(v>=text.length){clearInterval(id);return v}return v+1}),speed);return()=>clearInterval(id)},[text,speed])
  return <span className={className}>{text.slice(0,shown)}<span className="animate-pulse" aria-hidden>▍</span></span>
}
