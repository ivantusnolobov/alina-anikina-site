import * as React from "react"

import Sparkle from "./sparkle"

export default function SparkleWrapper({ children }: Props) {
  return (
    <div className="relative w-fit">
      <Sparkle className="absolute top-0 left-[10%]" />
      <Sparkle className="absolute top-2/4 left-1/2 " />
      <Sparkle className="absolute bottom-[15%] scale-75 left-2 " />
      <Sparkle className="absolute top-0 scale-75 left-1/2 " />
      <Sparkle className="absolute scale-50 left-1/4 top-1/4 " />
      <Sparkle className="absolute right-0 scale-75 top-[15%] " />
      <Sparkle className="absolute bottom-[15%] right-0 scale-75 " />
      <Sparkle className="absolute top-[25%] scale-50 right-[15%] " />
      {children}
    </div>
  )
}

type Props = {
  children: React.ReactNode
}
