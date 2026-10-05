import rss from '@astrojs/rss'
import siteConfig from '~/site.config'
import { getSortedPosts } from '~/utils'
import { postPath, useTranslations, type Lang } from '~/i18n'
import sanitizeHtml from 'sanitize-html'
import MarkdownIt from 'markdown-it'
const parser = new MarkdownIt()

// https://docs.astro.build/en/recipes/rss/
export async function buildRss(lang: Lang) {
  if (!siteConfig.site) {
    console.warn(
      'Site URL is required for RSS feed generation. Skipping RSS feed generation.',
    )
    return
  }
  const t = useTranslations(lang)
  const posts = await getSortedPosts(lang)
  return rss({
    stylesheet: '/rss.xsl',
    title: siteConfig.title,
    description: t('site.description'),
    site: siteConfig.site,
    customData: `<language>${lang}</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.published,
      description: post.data.description,
      author: post.data.author || siteConfig.author,
      link: postPath(post),
      content: sanitizeHtml(parser.render(post.body || ''), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
    })),
    trailingSlash: false,
  })
}
