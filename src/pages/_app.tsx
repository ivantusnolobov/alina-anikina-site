import type { AppProps } from "next/app"

import "@app/styles/global.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
