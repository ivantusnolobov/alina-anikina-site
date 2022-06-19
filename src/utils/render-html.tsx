import htmr from "htmr"
import type { HtmrOptions } from "htmr"
import Image from "next/image"

import Link from "@app/components/link"

export default function renderHTML(
  html: string,
  config: { imageSize: { width: number; height: number } }
) {
  const options: HtmrOptions = {
    transform: {
      a: Link,
      img: (props) => {
        const src = props.src
        const alt = props.alt ?? ""

        if (src) {
          return (
            <div className="leading-0">
              <Image
                src={src}
                alt={alt}
                width={config.imageSize.width}
                height={config.imageSize.height}
              />
            </div>
          )
        }
        return null
      },
    },
  }

  return htmr(html, options)
}
