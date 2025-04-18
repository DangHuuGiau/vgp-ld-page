/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://vinhome-quan9.info.vn",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.9,
  sitemapSize: 5000,
  exclude: [
    '/404*',
    '/500*',
    '/api*',
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/*', '/admin/*'] },
    ],
    additionalSitemaps: [
      'https://vinhome-quan9.info.vn/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Customize priority based on path depth
    const priority = path === '/' ? 1.0 : 
                     path.split('/').filter(Boolean).length === 1 ? 0.8 : 
                     0.6;
    
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
