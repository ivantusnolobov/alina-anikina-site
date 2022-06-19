import * as React from "react"
import { SVGProps } from "react"

export default function Sparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width={15} height={15} viewBox="0 0 184 184" fill="none" {...props}>
      <path
        d="M92 0s4 63.473 16.263 75.737C120.527 88 184 92 184 92s-65.473 6-75.737 16.263C98 118.527 92 184 92 184s-5.527-65-16.263-75.737C65 97.527 0 92 0 92s63.973-4.5 75.737-16.263C87.5 63.973 92 0 92 0Z"
        fill="#ffe88a"
      />
    </svg>
  )
}
