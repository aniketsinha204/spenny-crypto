/** @type {import('next-sitemap').IConfig} */
// TODO: add post initial setup
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://coinza.in',
    generateRobotsTxt: true, // (optional)
    // sitemapSize: 7000, add sitemapSize for making chunks
    // ...other options
};
