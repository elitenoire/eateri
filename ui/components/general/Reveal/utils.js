import { css, jsx } from '@emotion/react'

export const getAnimationCss = ({
    duration = 1000,
    timingFunction = 'ease',
    fillMode = 'both',
    delay = 0,
    keyframes = 'fadeInUp',
    iterationCount = 1,
}) => css`
    animation-duration: ${duration}ms;
    animation-timing-function: ${timingFunction};
    animation-delay: ${delay}ms;
    animation-name: ${keyframes};
    animation-direction: normal;
    animation-fill-mode: ${fillMode};
    animation-iteration-count: ${iterationCount};
`
// See issue https://github.com/emotion-js/emotion/issues/1404
export const cloneElement = (element, props) =>
    jsx(
        element.props.__EMOTION_TYPE_PLEASE_DO_NOT_USE__
            ? element.props.__EMOTION_TYPE_PLEASE_DO_NOT_USE__
            : element.type,
        {
            key: element.key !== null ? element.key : undefined,
            ref: element.ref,
            ...element.props,
            ...props,
        }
    )
