# franzejr.github.io

Personal site and blog, built with [Astro](https://astro.build) and hosted on
GitHub Pages. Available in English, French, and Portuguese (Brazil).

- English: https://franzejr.github.io/
- French: https://franzejr.github.io/fr/
- Portuguese (Brazil): https://franzejr.github.io/pt-br/

## Project structure

```text
/
├── src/
│   ├── content/
│   │   └── blog/
│   │       ├── en/*.yaml
│   │       ├── fr/*.yaml
│   │       └── pt-br/*.yaml
│   ├── content.config.ts     # blog collection schema (zod)
│   ├── i18n/                 # UI strings dictionary + helpers
│   ├── layouts/               # BaseLayout (head, header, main)
│   ├── components/            # Header, LanguageSwitcher, PostCard
│   └── pages/
│       ├── index.astro        # English (default, no prefix)
│       ├── fr/                # French routes
│       └── pt-br/             # Portuguese (Brazil) routes
└── astro.config.mjs           # i18n config (default: en)
```

English is the default locale and lives at the root (`/`, `/blog/`,
`/contact/`); French and Portuguese live under `/fr/` and `/pt-br/`.

## Writing a blog post

Each post is a plain YAML file under `src/content/blog/<lang>/<slug>.yaml`:

```yaml
title: "Post title"
description: "One-sentence summary."
publishDate: 2024-01-05
lang: en
translationId: some-shared-id
tags: [career]
body: |
  Markdown content goes here.
```

To publish a translation of an existing post, add a file with the same
`translationId` under the other language's folder (the slug/filename can
differ). The language switcher on a post page links to the matching
translation when one exists, and falls back to that language's blog index
otherwise.

## Local development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
npm run preview   # preview the production build locally
```

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds
the site and publishes it to GitHub Pages (Pages is configured with
"GitHub Actions" as its source).
