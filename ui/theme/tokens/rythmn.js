const breakpointsPX = [360, 505, 760, 960, 1200, 1600]

const toEm = size => `${size / 16}em`

const breakpoints = breakpointsPX.map(toEm)
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
export const mediaQueries = breakpointsAlias.reduce((mq, alias, i) => {
    mq[alias] = `@media screen and (max-height: ${toEm(breakpointsPX[i] - 1)})`
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

const space = [
    '0', // [0]
    '0.25em', // [1]
    '0.5em', // [2]
    '0.75em', // [3]
    '1em', // [4]
    '1.2em', // [5]
    '1.5em', // [6]
    '2em', // [7]
    '2.5em', // [8]
    '3em', // [9]
    '3.5em', // [10]
    '4em', // [11]
    '4.5em', // [12]
    '5em', // [13]
]
// aliases
space.header = space[9]

export default {
    space,
    sizes: {
        container: '',
        fluid: '100%',
        header: space[9],
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
