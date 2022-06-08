const withPlugins = require('next-compose-plugins')
const withSvgr = require('@newhighsco/next-plugin-svgr')

const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    compiler: {
        removeConsole: {
            exclude: ['error', 'warn'],
        },
    },
    experimental: {
        emotion: true,
    },
}

const svgrOptions = {
    titleProp: true,
    svgoConfig: {
        plugins: [
            {
                name: 'preset-default',
                params: {
                    overrides: {
                        cleanupIDs: false,
                        prefixIds: false,
                        removeTitle: false,
                    },
                },
            },
            'convertStyleToAttrs',
        ],
    },
}
module.exports = withPlugins([[withSvgr, { svgrOptions }]], nextConfig)
