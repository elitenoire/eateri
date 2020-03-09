import { interpolate } from 'react-spring'

const getInputRangeFromIndexes = (range, index, itemWidth) => {
    const inputRange = []
    for (let i = 0; i < range.length; i += 1) {
        inputRange.push((index - range[i]) * itemWidth)
    }
    return inputRange
}
const makeRange = (from, to, inclusive = true) => {
    const result = []
    for (let i = from; inclusive ? i <= to : i < to; i += 1) {
        result.push(i)
    }
    return result
}
const mapValues = (range, visible, visibleVal, edgeVal) =>
    range.map(idx => (idx >= 0 && idx < visible ? visibleVal : edgeVal))

// Stack Effect
const stackAnimationSlideStyle = ({ animatedValues, itemWidth, itemOffset = 18 }) => {
    const item1Scale = 0.9
    const item2Scale = 0.8

    // Limit centerOffset
    const centerOffset = (100 - itemWidth) / 2

    const getTranslateFromScale = (itemIndex, scale) => {
        const centerFactor = (1 / scale) * itemIndex
        const centeredPosition = -Math.round(itemWidth * centerFactor)
        const edgeAlignment = Math.round((itemWidth - itemWidth * scale) / 2)
        const offset = Math.round((itemOffset * Math.abs(itemIndex)) / scale)

        return centeredPosition - edgeAlignment - offset + itemIndex * itemWidth
    }

    const { x, z, o } = animatedValues

    const sc = x.interpolate({
        range: [-1, 0, 1, 2],
        output: [item1Scale, 1, item1Scale, item2Scale],
        extrapolate: 'clamp',
    })

    // const _x = x.interpolate({
    //     range: [-1, 0, 1, 2, 3],
    //     output: [
    //         itemWidth * 1.5,
    //         0,
    //         getTranslateFromScale(1, item1Scale),
    //         getTranslateFromScale(2, item2Scale),
    //         getTranslateFromScale(3, item2Scale),
    //     ],
    //     extrapolate: 'clamp',
    // })
    const _x = x.interpolate({
        range: [-1, 0, 1, 2, 3],
        output: [-itemWidth * 2, 0, 0.5 * centerOffset, 1 * centerOffset, 1.5 * centerOffset],
        extrapolate: 'clamp',
    })

    const opacity = o.interpolate({
        range: [0, 1, 2, 3],
        output: [1, 0.8, 0.5, 0],
        extrapolate: 'clamp',
    })

    const zIndex = z.interpolate({
        range: [-1, 0, 1, 2, 3],
        output: [4, 3, 2, 1, 0],
        extrapolate: 'clamp',
    })

    const transform = interpolate([_x, sc], (xt, s) => `scale(${s}) translateX(${xt - 50}%)`)

    return {
        opacity,
        zIndex,
        transform,
        left: '50%',
    }
}

const stackAnimationItemStyle = ({ animatedValues }) => {
    const { peek = 0 } = animatedValues

    return {
        transform: peek.interpolate(p => `translate(${p}%)`),
    }
}

// Shift Effect
const shiftAnimationSlideStyle = ({ animatedValues, visible, itemOffset = 0 }) => {
    const itemOpacity = 0.5

    const range = makeRange(-1, visible + 1)
    const ocOutput = []
    const zOutput = []
    const xOutput = []
    let oc
    let zdx

    for (let i = 0; i < range.length; i += 1) {
        // Edge Idx
        if (range[i] > 0 && range[i] < visible) {
            oc = 1
            zdx = 2
        } else if (range[i] === -1 || range[i] === visible) {
            oc = itemOpacity
            zdx = 1
        } else if (range[i] === 0) {
            // Active Idx
            oc = 1
            zdx = 3
        } else {
            // Defaults
            oc = 0
            zdx = 0
        }
        ocOutput.push(oc)
        zOutput.push(zdx)
        xOutput.push((range[i] + itemOffset / 2) * 100)
    }

    const { x, z } = animatedValues

    const opacity = x.interpolate({
        range,
        output: ocOutput,
        extrapolate: 'clamp',
    })

    const zIndex = z.interpolate({
        range,
        output: zOutput,
        extrapolate: 'clamp',
    })

    const _x = x.interpolate({
        range,
        output: xOutput,
        extrapolate: 'clamp',
    })

    const transform = _x.interpolate(xt => `translate(${xt}%)`)

    return { opacity, zIndex, transform }
}

const shiftAnimationItemStyle = ({ animatedValues, visible }) => {
    const item1Scale = 0.925
    const item2Scale = 0.85

    const range = makeRange(-1, visible)
    const scOutput = []
    let sc

    for (let i = 0; i < range.length; i += 1) {
        // Extreme Idx
        if (range[i] > 0 && range[i] < visible) {
            sc = item1Scale
        } else if (range[i] === -1 || range[i] === visible) {
            sc = item2Scale
        } else if (range[i] === 0) {
            // Active Idx
            sc = 1
        } else {
            // Defaults
            sc = item2Scale
        }
        scOutput.push(sc)
    }
    const { x } = animatedValues

    const scale = x.interpolate({
        range,
        output: scOutput,
        extrapolate: 'clamp',
    })
    const shadow = x.interpolate({
        range: [-1, 0, 1],
        output: [0, 5, 0],
        extrapolate: 'clamp',
    })
    const boxShadow = shadow.interpolate(_s => `0 ${_s}px ${2 * _s}px 0 rgba(0, 0, 0, 0.1)`)
    const transform = scale.interpolate(s => `scale(${s})`)

    return { boxShadow, transform, width: '90%', margin: '5% auto' }
}

// Slide Effect
const slideAnimationSlideStyle = ({ animatedValues, itemWidth, visible }) => {
    const item1Scale = 0.85
    const range = makeRange(-1, visible)
    const scOutput = mapValues(range, visible, 1, item1Scale)

    // const scOutput = [item1Scale, 1, item1Scale]

    const { x, z } = animatedValues

    // const opacity = x.interpolate({
    //     range,
    //     output: mapValues(range, visible, 1, 0)
    //     extrapolate: 'clamp',
    // })

    const sc = x.interpolate({
        range,
        output: scOutput,
        extrapolate: 'clamp',
    })

    const zIndex = z.interpolate({
        range,
        output: mapValues(range, visible, 2, 1),
        extrapolate: 'clamp',
    })

    const display = x.interpolate(x_ => (x_ < range[0] || x_ > range[range.length - 1] ? 'none' : 'block'))

    const _x = x.interpolate({
        range,
        output: range.map((idx, i) => idx * (100 + (1 - scOutput[i]) * (100 / scOutput[i]))), // + (1 - scOutput[i]) * (idx < 0 ? -100 : 100)),
        extrapolate: 'clamp',
    })

    const transform = interpolate([_x, sc], (xt, s) => `scale(${s}) translateX(${xt}%)`)

    return { display, zIndex, transform }
}

const slideAnimationItemStyle = ({ animatedValues }) => {
    const { peek = 0 } = animatedValues

    return {
        transform: peek.interpolate(p => `translate(${p}%)`),
        width: '100%',
    }
}

export const stackAnimation = {
    slideStyle: stackAnimationSlideStyle,
    itemStyle: stackAnimationItemStyle,
}

export const shiftAnimation = {
    slideStyle: shiftAnimationSlideStyle,
    itemStyle: shiftAnimationItemStyle,
}

export const slideAnimation = {
    slideStyle: slideAnimationSlideStyle,
    itemStyle: slideAnimationItemStyle,
}
