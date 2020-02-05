const breakpointsPX = [360, 505, 760, 960, 1200, 1600]
const breakpoints = breakpointsPX.map(w => `${w / 16}em`)
const breakpointsAlias = ['mobile', 'tabletS', 'tablet', 'tabletL', 'laptop', 'desktop']
// const breakpoints = {
// 	xs: '22.5em',
// 	sm: '31.5625em',
// 	md: '47.5em',
//  lg: '60em',
// 	xl: '75em',
// 	xxl: '100em',
// 	fluidStart: '22.5em',
// }
const mediaQueries = breakpointsAlias.reduce((mq, alias, i) => {
    mq[alias] = `@media screen and (min-width: ${breakpoints[i]})`
    return mq
}, {})

// To be used with @artsy/fresnel
// TODO: Limit breakpoints to only usable ones to reduce fresnel generated css
const fresnelBreakpoints = breakpointsAlias.reduce((bp, alias, i) => {
    bp[alias] = breakpointsPX[i]
    return bp
}, {})
fresnelBreakpoints.default = 0

// For fluid typography
breakpoints.fluidStart = breakpoints[0]
// console.log(breakpoints)
mediaQueries.default = '@media screen and (min-width: 0)'
const space = [
    '0',
    '0.25em',
    '0.5em',
    '0.75em',
    '1em',
    '1.2em',
    '1.5em',
    '2em',
    '2.5em',
    '3em',
    '3.5em',
    '4em',
    '4.5em',
]
// aliases
space.header = space[8]

export default {
    space,
    sizes: {
        container: '',
        fluid: '100%',
        header: '2.5em', // space[8]
    },
    breakpoints,
    fresnelBreakpoints,
    mediaQueries,
    bootstrapbreakpoints: {
        xs: '375px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1280px',
    },
    gatsbybreakpoints: {
        xs: '400px',
        sm: '550px',
        md: '750px',
        lg: '1000px',
        xl: '1200px',
        xxl: '1600px',
    },
}
