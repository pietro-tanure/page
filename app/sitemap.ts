import { allBlogs } from 'contentlayer/generated';
import { siteConfig } from 'lib/site-config';

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ['', '/blog'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
