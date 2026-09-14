import type { Metadata } from 'next';
import Balancer from 'react-wrap-balancer';
import { siteConfig } from 'lib/site-config';
import { formatDate } from 'lib/format-date';
import { MISCONCEPTIONS } from './data';

const TITLE = 'Encontro 2: O que não é marxismo';
const SUMMARY =
  'Uma lista de equívocos e preconceitos clássicos sobre a visão marxista, para deixar claro o que o materialismo histórico não afirma antes de estudar o que ele afirma.';
const PUBLISHED_AT = '2026-09-20';
const SLUG = 'meeting-2-o-que-nao-e-marxismo';
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
        <Balancer>
          O que <u>não</u> é marxismo
        </Balancer>
      </h1>
      <div className="flex items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(PUBLISHED_AT)}
        </p>
      </div>

      <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
        Lista de equívocos e preconceitos clássicos sobre a visão marxista
      </p>

      <ol className="space-y-3 list-none pl-0">
        {MISCONCEPTIONS.map((item, i) => (
          <li key={i}>
            <details className="group rounded-lg border border-neutral-200 dark:border-neutral-800 px-4 py-3">
              <summary className="flex cursor-pointer items-start gap-3 [&::-webkit-details-marker]:hidden">
                <span className="mt-0.5 text-sm text-neutral-400 dark:text-neutral-600 tabular-nums">
                  {i + 1}.
                </span>
                <span className="flex-1 italic font-medium text-neutral-900 dark:text-neutral-100">
                  {item.quote}
                </span>
                <span className="mt-1 shrink-0 text-neutral-400 dark:text-neutral-600 transition-transform duration-200 group-open:rotate-90">
                  ›
                </span>
              </summary>
              <p className="mt-3 pl-7 text-sm text-neutral-700 dark:text-neutral-300">
                {item.explanation}
              </p>
            </details>
          </li>
        ))}
      </ol>
    </section>
  );
}
