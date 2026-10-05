export const languages = {
  en: 'English',
  es: 'Español',
} as const

export type Lang = keyof typeof languages

export const defaultLang: Lang = 'en'

export const langs = Object.keys(languages) as Lang[]

const en = {
  'site.description':
    'A personal blog about web development, and other tech topics by Orlando Flores Teomitzi.',
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.archive': 'Archive',
  'nav.github': 'GitHub',
  'lang.label': 'Language',
  'footer.poweredBy': 'Powered by',
  'search.open': 'Open Search',
  'search.label': 'search',
  'search.devOnly': 'Search is only available in production builds.',
  'search.devHint': 'Try building and previewing the site to test it out locally.',
  'theme.select': 'Select Theme',
  'home.series': 'Series',
  'home.tags': 'Tags',
  'home.latest': 'Latest Posts',
  'home.archive': 'Archive',
  'archive.title': 'Archive',
  'archive.titlePage': 'Archive - Page {page}',
  'archive.description': 'All posts in the archive',
  'pagination.newer': 'Newer Posts',
  'pagination.older': 'Older Posts',
  'pagination.prevAria': 'Previous Page',
  'pagination.nextAria': 'Next Page',
  'pagination.prev': 'Previous',
  'pagination.next': 'Next',
  'tag.title': 'Tag: {tag}',
  'tag.titlePage': 'Tag: {tag} - Page {page}',
  'tag.description': 'All posts tagged with {tag}',
  'series.title': 'Series: {series}',
  'series.description': 'All posts in the {series} series',
  'series.suffix': '{series} Series',
  'path.tags': 'tags',
  'path.series': 'series',
  'path.home': 'home',
  'post.next': 'Next: {title}',
  'post.more': 'More Posts',
  'post.comments': 'Comments',
  'post.read': 'Read',
  'post.continue': 'Continue',
  'post.minRead': '{minutes} min read',
  'toc.title': 'Table of Contents',
  'calendar.months': 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec',
  'calendar.total': '{count} contributions in {period}',
  'calendar.lastYear': 'the last year',
  'calendar.less': 'Less',
  'calendar.more': 'More',
} as const

export type UiKey = keyof typeof en

const es: Record<UiKey, string> = {
  'site.description':
    'Un blog personal sobre desarrollo web y otros temas de tecnología, por Orlando Flores Teomitzi.',
  'nav.home': 'Inicio',
  'nav.about': 'Sobre mí',
  'nav.archive': 'Archivo',
  'nav.github': 'GitHub',
  'lang.label': 'Idioma',
  'footer.poweredBy': 'Hecho con',
  'search.open': 'Abrir búsqueda',
  'search.label': 'búsqueda',
  'search.devOnly':
    'La búsqueda solo está disponible en las compilaciones de producción.',
  'search.devHint': 'Compila y previsualiza el sitio para probarla de forma local.',
  'theme.select': 'Seleccionar tema',
  'home.series': 'Series',
  'home.tags': 'Etiquetas',
  'home.latest': 'Últimas publicaciones',
  'home.archive': 'Archivo',
  'archive.title': 'Archivo',
  'archive.titlePage': 'Archivo - Página {page}',
  'archive.description': 'Todas las publicaciones del archivo',
  'pagination.newer': 'Más recientes',
  'pagination.older': 'Más antiguas',
  'pagination.prevAria': 'Página anterior',
  'pagination.nextAria': 'Página siguiente',
  'pagination.prev': 'Anterior',
  'pagination.next': 'Siguiente',
  'tag.title': 'Etiqueta: {tag}',
  'tag.titlePage': 'Etiqueta: {tag} - Página {page}',
  'tag.description': 'Todas las publicaciones con la etiqueta {tag}',
  'series.title': 'Serie: {series}',
  'series.description': 'Todas las publicaciones de la serie {series}',
  'series.suffix': 'Serie {series}',
  'path.tags': 'etiquetas',
  'path.series': 'series',
  'path.home': 'inicio',
  'post.next': 'Siguiente: {title}',
  'post.more': 'Más publicaciones',
  'post.comments': 'Comentarios',
  'post.read': 'Leer',
  'post.continue': 'Continuar',
  'post.minRead': '{minutes} min de lectura',
  'toc.title': 'Tabla de contenido',
  'calendar.months': 'Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic',
  'calendar.total': '{count} contribuciones en {period}',
  'calendar.lastYear': 'el último año',
  'calendar.less': 'Menos',
  'calendar.more': 'Más',
}

export const ui: Record<Lang, Record<UiKey, string>> = { en, es }

// Translations for the Pagefind search UI (the "en" ones are Pagefind's defaults).
export const pagefindTranslations: Partial<Record<Lang, Record<string, string>>> = {
  es: {
    placeholder: 'Buscar',
    clear_search: 'Limpiar',
    load_more: 'Cargar más resultados',
    search_label: 'Buscar en este sitio',
    filters_label: 'Filtros',
    zero_results: 'No se encontraron resultados para [SEARCH_TERM]',
    many_results: '[COUNT] resultados para [SEARCH_TERM]',
    one_result: '[COUNT] resultado para [SEARCH_TERM]',
    alt_search:
      'No se encontraron resultados para [SEARCH_TERM]. Mostrando resultados para [DIFFERENT_TERM]',
    search_suggestion:
      'No se encontraron resultados para [SEARCH_TERM]. Prueba con alguna de estas búsquedas:',
    searching: 'Buscando [SEARCH_TERM]...',
  },
}
