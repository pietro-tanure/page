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
      <div className="flex items-center mt-2 mb-2 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(PUBLISHED_AT)}
        </p>
      </div>
      <p className="text-sm italic text-neutral-500 dark:text-neutral-500 mb-8 max-w-[650px]">
        Nota: prioriza profundidade analítica em vez de tempo estrito — corte por seção para uma
        apresentação oral de 40 minutos, ou use como leitura.
      </p>
      <MeetingClient />
    </section>
  );
}
