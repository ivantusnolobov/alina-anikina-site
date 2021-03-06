import Header from "@app/components/header"
import Head from "next/head"
import * as React from "react"

export default function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex min-h-full flex-col">
        <Header className="container my-4" />
        {children}
      </div>
    </>
  )
}

type Props = {
  children?: React.ReactNode
  title: string
}
