/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { isFragment, isValidElementType } from 'react-is'
import { fadeInUp } from './keyframes'

import InView from './InView'

import { getAnimationCss, cloneElement } from './utils'

const textCss = {
    display: 'inline-block',
    whiteSpace: 'pre',
}

const hiddenCss = {
    opacity: 0,
    visibility: 'hidden',
    pointerEvents: 'none',
}

const AnimatedText = ({
    textRef,
    motion,
    delay,
    cascade,
    duration,
    timingFunction,
    damping,
    when,
    hideUntilReveal,
    children,
    ...rest
}) => {
    const _css = hideUntilReveal ? hiddenCss : null

    const words = children.split(' ')

    const animatedWords = words.map((word, index) => (
        <span
            key={index}
            css={
                when
                    ? getAnimationCss({
                          keyframes: motion,
                          delay: delay + (cascade ? index * duration * damping : 0),
                          duration,
                          timingFunction,
                      })
                    : _css
            }
            style={textCss}
        >
            {index !== words.length - 1 ? `${word} ` : word}
        </span>
    ))
    return <span ref={textRef}>{animatedWords}</span>
}

const Reveal = React.forwardRef(
    (
        {
            as: Tag,
            forwardAs: as,
            cascade,
            damping,
            duration,
            timingFunction,
            fillMode,
            motion,
            delay,
            when,
            whenInView,
            threshold,
            triggerOnce,
            className,
            style,
            children,
            ...rest
        },
        ref
    ) => {
        const animationProps = { cascade, damping, duration, timingFunction, fillMode, motion, delay }
        const styleProps = { className, style }

        const makeAnimated = nodes => {
            if (!nodes) return null

            if (typeof nodes === 'string') {
                if (whenInView) {
                    return (
                        <InView threshold={threshold} triggerOnce={triggerOnce}>
                            {({ inView, ref: targetRef }) => (
                                <AnimatedText textRef={targetRef} when={inView} hideUntilReveal {...animationProps}>
                                    {nodes}
                                </AnimatedText>
                            )}
                        </InView>
                    )
                }

                return (
                    <AnimatedText textRef={ref} when={when} {...animationProps}>
                        {nodes}
                    </AnimatedText>
                )
            }

            if (isFragment(nodes)) {
                if (whenInView) {
                    return (
                        <InView threshold={threshold} triggerOnce={triggerOnce}>
                            {({ inView, ref: targetRef }) => (
                                <div
                                    ref={targetRef}
                                    css={
                                        inView
                                            ? getAnimationCss({
                                                  keyframes: motion,
                                                  delay,
                                                  duration,
                                                  timingFunction,
                                                  fillMode,
                                              })
                                            : hiddenCss
                                    }
                                    {...(!Tag && styleProps)}
                                    {...(!Tag && rest)}
                                >
                                    {nodes}
                                </div>
                            )}
                        </InView>
                    )
                }
                return (
                    <div
                        ref={ref}
                        css={
                            when
                                ? getAnimationCss({ keyframes: motion, delay, duration, timingFunction, fillMode })
                                : null
                        }
                        {...(!Tag && styleProps)}
                        {...(!Tag && rest)}
                    >
                        {nodes}
                    </div>
                )
            }

            return React.Children.map(nodes, (node, index) => {
                if (!isValidElementType(node.type)) return node
                const nodeElement = node

                const getNodeCss = (theme, reveal, hiddencss) => {
                    const nodeCss = []

                    if (nodeElement.props.css) {
                        const _css =
                            typeof nodeElement.props.css === 'function'
                                ? nodeElement.props.css(theme)
                                : nodeElement.props.css
                        nodeCss.push(_css)
                    }

                    if (reveal) {
                        nodeCss.push(
                            getAnimationCss({
                                keyframes: motion,
                                delay: delay + (cascade ? index * duration * damping : 0),
                                duration,
                                timingFunction,
                                fillMode,
                            })
                        )
                    } else if (hiddencss) {
                        nodeCss.push(hiddencss)
                    }
                    return nodeCss
                }

                if (whenInView) {
                    return (
                        <InView threshold={threshold} triggerOnce={triggerOnce}>
                            {({ inView, ref: targetRef }) =>
                                cloneElement(nodeElement, {
                                    ref: targetRef,
                                    css: t => getNodeCss(t, inView, hiddenCss),
                                })
                            }
                        </InView>
                    )
                }

                return cloneElement(nodeElement, {
                    ref,
                    css: t => getNodeCss(t, when),
                })
            })
        }

        if (Tag) {
            const asProp = as ? { as } : {}
            return (
                <Tag {...asProp} className={className} style={style} {...rest}>
                    {makeAnimated(children)}
                </Tag>
            )
        }

        return <React.Fragment>{makeAnimated(children)}</React.Fragment>
    }
)

Reveal.defaultProps = {
    cascade: false,
    damping: 0.3,
    duration: 400,
    delay: 0,
    when: true,
    motion: fadeInUp,
}

Reveal.displayName = 'Reveal'

export default Reveal
