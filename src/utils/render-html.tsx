import Link from "@app/components/link"
import parse, { domToReact } from "html-react-parser"
import { HTMLReactParserOptions, Element } from "html-react-parser"
import Image from "next/image"

export default function renderHTML(
  html: string,
  config: { imageSize: { width: number; height: number } }
) {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && !domNode.attribs) {
        return
      }

      if (domNode instanceof Element && domNode.name === "img" && domNode.attribs.src) {
        return (
          <div className="leading-0">
            <Image
              src={domNode.attribs.src}
              alt={domNode.attribs.alt}
              width={config.imageSize.width}
              height={config.imageSize.height}
            />
          </div>
        )
      }

      if (domNode instanceof Element && domNode.name === "a") {
        return <Link href={domNode.attribs.href}>{domToReact(domNode.children, options)}</Link>
      }
    },
  }

  return parse(html, options)
}
