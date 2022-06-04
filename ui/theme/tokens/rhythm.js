export const toEm = size => `${size / 16}em`

export const breakpointsMap = {
    mobile: 360, // '22.5em',
    tabletS: 505, // '31.5625em',
    tablet: 760, // '47.5em',
    tabletL: 960, // '60em',
    laptop: 1200, // '75em',
    desktop: 1600, // '100em',
}

const breakpointsAlias = Object.keys(breakpointsMap)
const breakpointsPX = breakpointsAlias.map(alias => breakpointsMap[alias])

const breakpoints = breakpointsPX.map(toEm)

export const mediaQueries = breakpointsAlias.reduce((mq, alias, i) => {
    mq[alias] = `@media screen and (max-width: ${toEm(breakpointsPX[i] - 1)})`
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
breakpoints.fluidStart = breakpoints[1]

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
space.header = space[10]
space.body = '1.25em'
space.bodyNegative = '-1.25em'
space.tiny = '6px'

export const rhythm = {
    space,
    sizes: {
        miniContainer: '30em',
        contentContainer: '35em',
        container: '45em',
        maxContainer: '75em',
        fluid: '100%',
        header: space[10],
    },
    breakpoints,
    fresnelBreakpoints,
    mediaQueries,
}

// export default rhythm
