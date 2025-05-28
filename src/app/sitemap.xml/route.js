// src/app/sitemap.xml/route.js

import { metadata } from '@/seo/metadatas';
import fs from 'fs';



export async function GET() {
  const baseUrl = 'https://thekowcompany.com';

  // Read blog JSON files
  const blog2D = JSON.parse(fs.readFileSync('public/data/blog2D.json'));
  const blog3D = JSON.parse(fs.readFileSync('public/data/blog3D.json'));
  const allBlogs = [...blog2D, ...blog3D];

  // Slugify like in [slug]/page.js
  const blogPages = allBlogs.map((item) => {
    const slug = item.slug;
    return {
      loc: `${baseUrl}/blog/${slug}`,
      lastmod: new Date().toISOString().split('T')[0],
    };
  });

  // Static pages from metadata
  const staticPages = Object.values(metadata).map((page) => ({
    loc: page.link,
    lastmod: new Date().toISOString().split('T')[0],
  }));

  const urls = [...staticPages, ...blogPages];

  // Build XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
  </url>`
  )
  .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
