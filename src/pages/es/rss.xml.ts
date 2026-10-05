import type { AstroGlobal } from 'astro'
import { buildRss } from '~/rss'

export async function GET(_context: AstroGlobal) {
  return buildRss('es')
}
