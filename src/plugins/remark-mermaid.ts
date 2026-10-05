import type { Html, Root } from 'mdast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

/** Escapes text so it can be safely embedded in HTML element content. */
function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/**
 * Converts ```mermaid fenced blocks into `<pre class="mermaid">` HTML nodes so that
 * Expressive Code does not process them. Diagrams are rendered client-side.
 */
export const remarkMermaid: Plugin<[], Root> = () => (tree) => {
  visit(tree, 'code', (node, index, parent) => {
    if (!parent || index === undefined || node.lang !== 'mermaid') return
    const html: Html = {
      type: 'html',
      value: `<pre class="mermaid">${escapeHtml(node.value)}</pre>`,
    }
    parent.children[index] = html
  })
}
