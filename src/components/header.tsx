import Link from "@app/components/link"
import BehanceIcon from "@app/components/svg/behance-icon"
import { useRouter } from "next/router"
import * as React from "react"

import TelegramIcon from "./svg/telegram-icon"

export default function Header({ className }: Props) {
  const { pathname } = useRouter()

  return (
    <header className={className}>
      <nav className="flex h-16 items-center gap-3 sm:gap-8">
        <Link href="/" className="whitespace-nowrap p-0.5 font-semibold sm:py-2">
          🦄 Alina Anikina
        </Link>
        <Link
          href="/projects"
          className={`rounded-md p-1 font-medium transition-colors hover:bg-gray-100 sm:px-3 sm:py-2 ${
            pathname === "/projects" ? "bg-gray-100" : ""
          }`}
        >
          Projects
        </Link>

        <Link
          href="https://t.me/anikina_alina"
          className="ml-auto rounded-md p-0.5 transition-colors hover:bg-gray-100 sm:p-2"
        >
          <TelegramIcon />
        </Link>
        <Link
          href="https://www.behance.net/anikina_alina"
          className="rounded-md p-0.5 transition-colors hover:bg-gray-100 sm:p-2"
        >
          <BehanceIcon />
        </Link>
      </nav>
    </header>
  )
}

type Props = {
  className?: string
}
