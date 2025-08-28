/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

// If you deploy to a *project* page (e.g., github.com/ProdanRaduMatei/portfolio),
// set basePath and assetPrefix to '/portfolio'. For a *user* page
// (ProdanRaduMatei.github.io), leave them empty.

const basePath = ''           // '/portfolio' if project page
const assetPrefix = ''        // '/portfolio/' if project page

export default {
    output: 'export',
    images: { unoptimized: true }, // ensures images work with static export
    basePath,
    assetPrefix,
}