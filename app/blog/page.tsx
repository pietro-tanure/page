import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';

export const metadata: Metadata = {
  title: 'Encontros',
  description: 'Notas e registros de cada encontro do grupo de estudos.',
};

export default function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">Notas dos encontros</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">{post.summary}</p>
            </div>
          </Link>
        ))}
    </section>
  );
}
