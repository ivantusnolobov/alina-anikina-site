import * as React from "react"
import { SVGProps } from "react"

export default function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      strokeWidth={1.5}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 5 2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5 9 13.5m0 0V19l3.249-3.277"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
