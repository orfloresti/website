import type { GetStaticPathsResult, PaginateFunction } from 'astro'
import { getCollection } from 'astro:content'
import { langs, postLang, postPath, postSlug, type Lang } from '~/i18n'
import siteConfig from '~/site.config'
import { SeriesGroup, TagsGroup, getSortedPosts, getPostSequenceContext } from '~/utils'

/** Paths shared by the per-language page files (src/pages and src/pages/<lang>). */

export async function postPaths(lang: Lang) {
  const posts = await getSortedPosts(lang)
  // A post is "translated" when another language has a post with the same slug
  const allPosts = await getCollection('posts')
  return posts.map((post) => {
    const { prev, next } = getPostSequenceContext(post, posts)
    const alternates = Object.fromEntries(
      allPosts
        .filter((other) => postSlug(other) === postSlug(post))
        .filter((other) => langs.includes(postLang(other)))
        .map((other) => [postLang(other), postPath(other)]),
    ) as Partial<Record<Lang, string>>
    return {
      params: { slug: postSlug(post) },
      props: { post, prev, next, alternates },
    }
  })
}

export async function archivePaths(paginate: PaginateFunction, lang: Lang) {
  const sortedPosts = await getSortedPosts(lang)
  return paginate(sortedPosts.reverse(), { pageSize: siteConfig.pageSize })
}

export async function tagPaths(paginate: PaginateFunction, lang: Lang) {
  const tagsGroup = await TagsGroup.build(undefined, lang)
  return tagsGroup.collations.flatMap((tags) =>
    paginate(tags.entries.reverse(), {
      props: { tagTitle: tags.title },
      params: { tag: tags.titleSlug },
      pageSize: siteConfig.pageSize,
    }),
  ) satisfies GetStaticPathsResult
}

export async function seriesPaths(lang: Lang) {
  const seriesGroup = await SeriesGroup.build(undefined, lang)
  return seriesGroup.collations.map((series) => ({
    params: { slug: series.titleSlug },
    props: { posts: series.entries, seriesTitle: series.title },
  }))
}
