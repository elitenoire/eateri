const withPlugins = require('next-compose-plugins')
const withSvgr = require('@newhighsco/next-plugin-svgr')

const nextConfig = {
    pageExtensions: ['page.js'],
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
}

const svgrOptions = {
    titleProp: true,
    svgoConfig: {
        plugins: [
            {
                cleanupIDs: false,
            },
            { prefixIds: false },
            { prefixClassNames: false },
        ],
    },
}
module.exports = withPlugins([[withSvgr, { svgrOptions }]], nextConfig)
