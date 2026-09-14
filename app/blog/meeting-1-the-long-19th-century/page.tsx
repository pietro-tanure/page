import type { Metadata } from 'next';
import Balancer from 'react-wrap-balancer';
import { siteConfig } from 'lib/site-config';
import { formatDate } from 'lib/format-date';
import MeetingClient from './MeetingClient';

const TITLE = 'Encontro 1: O Longo Século XIX';
const SUMMARY =
  'Um resumo materialista-dialético do "longo século XIX" de Hobsbawm (1789–1914): as revoluções inglesa, americana e francesa como revoluções burguesas, as Eras da Revolução, do Capital e dos Impérios, e a evolução intelectual do próprio Marx.';
const PUBLISHED_AT = '2026-09-13';
const SLUG = 'meeting-1-the-long-19th-century';
const OG_IMAGE = `${siteConfig.url}/og?title=${encodeURIComponent(TITLE)}`;

export const metadata: Metadata = {
  title: TITLE,
  description: SUMMARY,
  openGraph: {
    title: TITLE,
    description: SUMMARY,
    type: 'article',
    publishedTime: PUBLISHED_AT,
    url: `${siteConfig.url}/blog/${SLUG}`,
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SUMMARY,
    images: [OG_IMAGE],
  },
};

export default function Page() {
  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: TITLE,
            datePublished: PUBLISHED_AT,
            dateModified: PUBLISHED_AT,
            description: SUMMARY,
            image: OG_IMAGE,
            url: `${siteConfig.url}/blog/${SLUG}`,
            author: { '@type': 'Organization', name: siteConfig.name },
          }),
        }}
      ></script>
      <h1 className="font-bold text-2xl tracking-tighter max-w-[650px]">
        <Balancer>{TITLE}</Balancer>
      </h1>
      <div className="flex items-center mt-2 mb-4 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(PUBLISHED_AT)}
        </p>
      </div>
      <details className="group mb-8 max-w-[650px] rounded-lg border border-amber-300/70 dark:border-amber-800/60 bg-amber-50 dark:bg-amber-950/30">
        <summary
          className="flex cursor-pointer items-center gap-2 px-4 py-3 text-sm font-semibold text-amber-900 dark:text-amber-200 [&::-webkit-details-marker]:hidden"
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400 dark:bg-amber-700 text-white text-xs leading-none transition-transform duration-200 group-open:rotate-45">
            +
          </span>
          Para o próximo encontro
        </summary>
        <ul className="space-y-2 px-4 pb-4 pt-1 pl-9 text-sm text-amber-950 dark:text-amber-100 list-disc marker:text-amber-500 dark:marker:text-amber-600">
          <li>
            <a
              href="https://www.youtube.com/watch?v=trG5Mn9ATTg&t=3374s"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-amber-500 underline-offset-2 hover:text-amber-700 dark:hover:text-amber-300"
            >
              Assistir o vídeo
            </a>
          </li>
          <li>
            Ler os 3 primeiros capítulos (até a pág. 65) de{' '}
            <em>O que é Marxismo</em>, de Milcíades Peña
          </li>
        </ul>
      </details>
      <MeetingClient />
    </section>
  );
}
