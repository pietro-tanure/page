# Critical Theory & Marxism Study Group

Reading notes and write-ups from an ongoing study group on critical theory
and Marxism, published as a static site.

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Content**: [Contentlayer](https://www.contentlayer.dev/), reading `.mdx`
  files from `content/` as `Blog` documents
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Deployment**: [Vercel](https://vercel.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Running locally

This application requires Node.js v16.13+.

```bash
pnpm install
pnpm dev
```

## Adding a new meeting write-up

Add a new `.mdx` file to `content/`, e.g. `content/meeting-2-....mdx`, with
frontmatter matching the schema in `contentlayer.config.js`:

```mdx
---
title: 'Meeting 2: ...'
publishedAt: '2026-01-01'
summary: 'One-sentence summary shown in the meeting list.'
---

Your content here.
```

It will automatically appear at `/blog/<filename>` and in the meetings list
at `/blog`. Images referenced from a post with an absolute path (e.g.
`/images/foo.png`) should live under `public/images/`.
