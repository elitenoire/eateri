// const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withSvgr = require('next-svgr')

// module.exports = withPlugins([[withFonts], [withImages], [withSvgr]])
module.exports = withSvgr()
// module.exports = withImages({
//     webpack: config => {
//         config.module.rules.push({
//             test: /\.(svg)$/,
//             use: [
//                 {
//                     loader: '@svgr/webpack',
//                     options: {
//                         icon: true,
//                         titleProp: true,
//                         svgoConfig: {
//                             plugins: {
//                                 removeViewBox: false,
//                             },
//                         },
//                     },
//                 },
//             ],
//         })
//         return config
//     },
// })
