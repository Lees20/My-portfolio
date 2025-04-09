// src/app/sitemap.xml/route.js

export async function GET() {
    const baseUrl = 'https://www.panteliskarabetsos.com';
  
    const routes = ['/', '/projects', '/about', '/contact'];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map(
        (route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`
      )
      .join('')}
  </urlset>`;
  
    return new Response(sitemap.trim(), {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
  