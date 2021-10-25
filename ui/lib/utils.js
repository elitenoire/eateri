import { useMemo } from 'react'
import { getColor } from '@theme-ui/color'
import { mediaQueries as mq } from '~/theme/tokens/rhythm'

export const isString = value => typeof value === 'string' || value instanceof String

export const isObject = value => typeof value === 'object' && value !== null && !Array.isArray(value)

// function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }
export const isNumber = value => typeof value === 'number' && !isNaN(value - value)

// https://youmightnotneed.com/lodash/#clamp
export const clamp = (num, lower, upper) => (upper ? Math.min(Math.max(num, lower), upper) : Math.min(num, lower))

export const combineRefs = (...refs) => {
    return node => {
        refs.forEach(ref => {
            if (typeof ref === 'function') {
                ref(node)
            } else if (isObject(ref)) {
                ref.current = node
            }
        })
    }
}

export const shouldRunOnMobile = defaultValue => {
    if (window && window.matchMedia) {
        const mqString = mq.tabletS.replace('@media ', '')
        const mediaQuery = window.matchMedia(mqString)
        return mediaQuery.matches
    }
    return defaultValue || false
}

// context selector for constate
// returns context slice, memoized object for multiple values
export const selector =
    (...args) =>
    v => {
        if (args.length === 1) {
            return v[args[0]]
        }
        const deps = args.map(a => v[a])
        return useMemo(
            () =>
                args.reduce((acc, a) => {
                    acc[a] = v[a]
                    return acc
                }, {}),
            // eslint-disable-next-line react-hooks/exhaustive-deps
            deps
        )
    }

// color utils
const hex2rgb = hex => {
    const reg = /^#[a-fA-F0-9]{3,6}$/
    if (!hex) return
    if (!reg.test(hex)) {
        // console.warn('this is not a hex string')
        return
    }
    let colorStr = hex.slice(1)
    if (colorStr.length === 3) {
        colorStr = colorStr.replace(/([a-fA-F0-9])/g, '$1$1')
    }

    return {
        r: parseInt(colorStr.substring(0, 2), 16),
        g: parseInt(colorStr.substring(2, 4), 16),
        b: parseInt(colorStr.substring(4, 6), 16),
    }
}

const extractRGB = rgb => {
    const reg =
        /rgba?\(((?:(?:25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2})(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01]\.?\d*?)?\)$/
    if (!rgb) return

    const match = rgb.match(reg)

    if (!match) {
        // console.warn('this is not a valid rgb string')
        return
    }

    const rg = match[1].split(',')

    return {
        r: parseInt(rg[0]),
        g: parseInt(rg[1]),
        b: parseInt(match[2]),
    }
}

export const isDark = color => {
    // YIQ equation from http://24ways.org/2010/calculating-color-contrast
    const rgb = hex2rgb(color) || extractRGB(color) || {}
    const yiq = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000
    return yiq < 128
}

export const readableColor =
    (color, lightColor = 'white', darkColor = 'black') =>
    t => {
        try {
            return isDark(getColor(t, color)) ? getColor(t, lightColor) : getColor(t, darkColor)
        } catch {
            return getColor(t, darkColor)
        }
    }
