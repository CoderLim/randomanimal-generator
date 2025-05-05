import { type MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapRoutes: MetadataRoute.Sitemap = [
    {
      url: 'https://www.randomanimal-generator.com', // home
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  return sitemapRoutes;
}
