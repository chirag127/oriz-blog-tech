# oriz-blog-tech

> Software, drawn to scale — a software-engineering blog for developers and engineers.

**Live:** https://tech-blog.oriz.in

[![License: MIT](https://img.shields.io/badge/License-MIT-c8102e.svg)](./LICENSE)
![Astro](https://img.shields.io/badge/Astro-6-1b3a6b.svg)

Deep, buildable notes on shipping and running production software. Read like an
engineering drawing set — every post a sheet, dimensioned so you can build from it.

## Design

"Blueprint" identity: warm drafting-paper surface, graphite ink, an engineer's
red-pencil accent, blueprint-navy graph-paper grid. Type: Space Grotesk display,
Newsreader serif body, IBM Plex Mono metadata. The hero is a drafted title-block
cartouche. Distinct from every sibling oriz.in site.

## Stack

Astro 6 · content collections (typed frontmatter) · MDX · Pagefind search · RSS +
Atom + JSON feeds · sitemap · expressive-code.

## Develop

```bash
npm install --legacy-peer-deps
npm run dev      # local dev
npm run build    # static build → dist/
```

## Content

Posts live in `src/content/blog/`. Schema in `src/content.config.ts` — required
frontmatter: `title`, `description`, `pubDate`.

## License

MIT © Chirag Singhal
