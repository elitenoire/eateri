import { to } from '@react-spring/web'

const makeRange = (from, _to, inclusive = true) => {
    const result = []
    for (let i = from; inclusive ? i <= _to : i < _to; i += 1) {
        result.push(i)
    }
    return result
}
const mapValues = (range, visible, visibleVal, edgeVal) =>
    range.map(index => (index >= 0 && index < visible ? visibleVal : edgeVal))

// Shift Effect
const shiftAnimationSlideStyle = ({ animatedValues, itemWidth, itemOffset = 0 }) => {
    const range = [-2, -1, 0, 1, 2]
    const xOutput = []
    const center = (1 * (1 - itemWidth)) / (2 * itemWidth)

    for (let i = 0; i < range.length; i += 1) {
        xOutput.push(range[i] + center + itemOffset / 100)
    }

    const { idx, x } = animatedValues

    const display = idx.to(_xd => (_xd < -2 || _xd > 2 ? 'none' : 'block'))

    const opacity = idx.to({
        range,
        output: [0, 1, 1, 1, 0],
        extrapolate: 'clamp',
    })

    const zIndex = idx.to({
        range,
        output: [1, 2, 3, 2, 1],
        extrapolate: 'clamp',
    })

    const _x = idx.to({
        range,
        output: xOutput,
        extrapolate: 'clamp',
    })

    const transform = to([_x, x], (_xt, xt) => {
        return `translateX(${(_xt + xt / 200) * 100}%)`
    })

    return { display, zIndex, transform, opacity }
}

const shiftAnimationItemStyle = ({ animatedValues: { idx }, itemGap = 5 }) => {
    const scale = idx.to({
        range: [-1, 0, 1],
        output: [0.9, 1, 0.9],
        extrapolate: 'clamp',
    })
    const translateX = idx.to({
        range: [-1, 0, 1],
        output: ['5%', '0%', '-5%'],
        extrapolate: 'clamp',
    })

    return { margin: `0 ${itemGap}%`, scale, translateX }
}

// Slide Effect
const slideAnimationSlideStyle = ({ animatedValues: { idx }, visible }) => {
    const itemScale = 0.85
    const range = makeRange(-1, visible)
    const scOutput = mapValues(range, visible, 1, itemScale)

    const display = idx.to(_x => (_x < range[0] || _x > range[range.length - 1] ? 'none' : 'block'))

    const scale = idx.to({
        range,
        output: scOutput,
        extrapolate: 'clamp',
    })

    const zIndex = idx.to({
        range,
        output: mapValues(range, visible, 2, 1),
        extrapolate: 'clamp',
    })

    const translateX = idx.to({
        range,
        output: range.map((index, i) => index * (100 + (1 - scOutput[i]) * (100 / scOutput[i]))),
        extrapolate: 'clamp',
    })

    const transform = to([translateX, scale], (_x, _s) => `scale(${_s}) translateX(${_x}%)`)

    return { display, zIndex, transform }
}

const slideAnimationItemStyle = ({ animatedValues: { x = 0, idx }, visible }) => {
    const display = idx.to(_x => (_x >= -1 || _x <= visible ? 'block' : 'none'))

    return { display, translateX: x }
}

export const shiftAnimation = {
    slideStyle: shiftAnimationSlideStyle,
    itemStyle: shiftAnimationItemStyle,
}

export const slideAnimation = {
    slideStyle: slideAnimationSlideStyle,
    itemStyle: slideAnimationItemStyle,
}

// expand card animation
export const expandStyle = {
    shadow: 5, // px
    imageMove: 0, // %
    imageRotate: 0, // deg
    contentMove: 0, // em
    detailOpacity: 1,
    detailMove: 0, // em
    buttonScale: 1,
}

export const compactStyle = {
    shadow: 0, // px
    imageMove: 40, // %
    imageRotate: 90, // deg
    contentMove: 7, // em
    detailOpacity: 0,
    detailMove: 1, // em
    buttonScale: 0.2,
}
