const path = require('path')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const pageExtensions = ['page.js']

const otherOptions = {
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	images: {
		disableStaticImages: true,
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
const imgOptions = {
    exclude: [path.resolve(__dirname, 'public/inlineSvg'), path.resolve(__dirname, 'node_modules/remixicon')],
}

const withSvgr = (nextConfig = {}) => ({
    ...nextConfig,
    webpack(config, options) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: nextConfig.svgrOptions,
                },
            ],
        })

        if (typeof nextConfig.webpack === 'function') {
            return nextConfig.webpack(config, options)
        }

        return config
    },
})

module.exports = withPlugins([
    [withImages, imgOptions],
    [withSvgr, { svgrOptions, pageExtensions, ...otherOptions }],
])
