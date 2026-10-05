# orfloresti website

The orfloresti website is a personal project that showcases my journey as a developer and my passion for technology. It serves as a portfolio to highlight my skills, projects, and experiences in the field of software engineering. Through this website, I aim to connect with like-minded individuals and share insights into my work and interests.

## Powered by

- [Astro](https://astro.build/)
- [MultiTerm](https://github.com/stelcodes/multiterm-astro)

## Languages

The site is bilingual: English lives at the root (`/`) and Spanish under `/es`.

- **Posts:** `src/content/posts/en/<slug>.md` and `src/content/posts/es/<slug>.md`. A post and its translation share the same filename, which is how the language switcher and `hreflang` links find each other. A post with no translation just isn't offered in the other language.
- **Home and footer note:** `src/content/home.md` / `addendum.md` (English) and `home.es.md` / `addendum.es.md` (Spanish).
- **About page:** `src/pages/about.md` and `src/pages/es/about.md`.
- **UI text:** `src/i18n/ui.ts`. To add a language, add it there, add a folder under `src/pages/<lang>` (copy `src/pages/es`) and the matching entry in `astro.config.mjs`.
