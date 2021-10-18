import { createMedia } from '@artsy/fresnel'
import { findDevice } from '@artsy/detect-responsive-traits'
import chalk from 'chalk'

import { theme } from '~/theme'

const log = ({ userAgent, onlyMatch, device }) => {
    console.log(
        `Render: ${chalk.green(onlyMatch ? onlyMatch.join(', ') : 'ALL')}\n` +
            `Device: ${device ? chalk.green(device) : chalk.red('n/a')}\n` +
            `User-Agent: ${chalk.yellow(userAgent)}\n`
    )
}

const AppMedia = createMedia({
    breakpoints: theme.fresnelBreakpoints,
    interactions: {
        hover: '(pointer: coarse), (-moz-touch-enabled: 1)',
        notHover: 'not all and (pointer: coarse), not all and (-moz-touch-enabled: 1)',
    },
})

// Make styles for injection into the header of the page
export const mediaStyles = AppMedia.createMediaStyle()

export const {
    Media,
    MediaContextProvider,
    findBreakpointsForWidths,
    findBreakpointAtWidth,
    // SortedBreakpoints,
} = AppMedia

//
export const onlyMatchListForUserAgent = userAgent => {
    const device = findDevice(userAgent)
    if (!device) {
        log({ userAgent })
        return undefined
    }
    const supportsHover = device.touch ? 'notHover' : 'hover'
    const onlyMatch = device.resizable
        ? [supportsHover, ...findBreakpointsForWidths(device.minWidth, device.maxWidth)]
        : [supportsHover, findBreakpointAtWidth(device.minWidth), findBreakpointAtWidth(device.maxWidth)]
    log({ userAgent, onlyMatch, device: device.description })
    return onlyMatch
}

export const SSRStyleID = 'ssr-fresnel-style'
