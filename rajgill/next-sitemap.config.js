module.exports = {
  siteUrl: 'https://rajgilllaw.com', // Replace with your domain
  generateRobotsTxt: true,        // Generate robots.txt
  sitemapSize: 5000,              // Splits sitemap if more than 5000 entries
  changefreq: 'daily',            // Frequency of content change
  priority: null,                 // Default priority, overridden per route
  transform: async (config, path) => {
    let priority = 0.7; // Default priority

    if (path === '/') {
      priority = 1.0; // Home page
    } else if (path.startsWith('/blog')) {
      priority = 0.6; // Blog posts
    } else if (path === '/about' || path === '/contact') {
      priority = 0.8; // Key pages
    }

    return {
      loc: path,
      changefreq: 'daily',
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
