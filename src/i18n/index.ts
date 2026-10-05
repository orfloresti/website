import { defaultLang, langs, ui, type Lang, type UiKey } from './ui'

export { defaultLang, langs, languages, pagefindTranslations } from './ui'
export type { Lang, UiKey } from './ui'

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (langs as string[]).includes(value)
}

/** Language of a URL: the first path segment if it is a locale, else the default. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/')
  return isLang(first) ? first : defaultLang
}

/** Translate a UI string, replacing `{name}` placeholders with `vars`. */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey, vars?: Record<string, string | number>): string {
    let text: string = ui[lang][key] ?? ui[defaultLang][key]
    for (const [name, value] of Object.entries(vars ?? {})) {
      text = text.replaceAll(`{${name}}`, String(value))
    }
    return text
  }
}

/** Remove a leading locale segment from a path: `/es/posts/x` -> `/posts/x`. */
export function stripLang(path: string): string {
  const [, first, ...rest] = path.split('/')
  return isLang(first) && first !== defaultLang
    ? '/' + rest.join('/')
    : path.startsWith('/')
      ? path
      : '/' + path
}

/** Prefix a site-relative path with the locale (the default locale has no prefix). */
export function localePath(lang: Lang, path = '/'): string {
  const clean = stripLang(path.startsWith('/') ? path : '/' + path)
  if (lang === defaultLang) return clean
  return clean === '/' ? `/${lang}` : `/${lang}${clean}`
}

/** Posts live in `src/content/posts/<lang>/<slug>.md`. */
export function postLang(post: { id: string }): Lang {
  const [first] = post.id.split('/')
  return isLang(first) ? first : defaultLang
}

/** The slug used in URLs: the entry id without its language folder. */
export function postSlug(post: { id: string }): string {
  const [first, ...rest] = post.id.split('/')
  return isLang(first) ? rest.join('/') : post.id
}

export function postPath(post: { id: string }): string {
  return localePath(postLang(post), `/posts/${postSlug(post)}`)
}
