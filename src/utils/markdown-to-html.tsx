import { micromark } from "micromark"
import { gfm, gfmHtml } from "micromark-extension-gfm"

export default async function markdownToHtml(markdown: string) {
  return micromark(markdown, {
    extensions: [gfm()],
    htmlExtensions: [gfmHtml()],
    allowDangerousHtml: true,
  })
}
