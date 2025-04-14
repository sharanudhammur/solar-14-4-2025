// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://comforting-souffle-be19ad.netlify.app/", // 🔥 very important (your live site URL)
  generateRobotsTxt: true, // (creates a robots.txt automatically too)
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7
};
