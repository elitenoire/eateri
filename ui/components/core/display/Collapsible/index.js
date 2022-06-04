import { forwardRef, cloneElement, Children as ReactChildren } from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import useSizer from 'use-resize-observer'
import { Disclosure, DisclosureContent, useDisclosureState } from 'ariakit/disclosure'
import { Box } from '@theme-ui/components'
import { ListItem } from '~@core/display'
import { Text } from '~@core/typography'

import styles from './style'

function CollapsibleHeading({ state, children, ...rest }) {
    const { visible } = state
    return (
        <Disclosure
            as={ListItem}
            state={state}
            extra={visible ? 'subtract' : 'add'}
            px={2}
            py={1}
            weight="bold"
            icon="faq"
            iconBoxed
            plain
            {...(visible && { bg: 'primary.pale' })}
            sx={styles.heading}
            {...rest}
        >
            {children}
        </Disclosure>
    )
}

function CollapsiblePanel({ state, children, ...rest }) {
    const { ref, height = 150 } = useSizer()
    const { visible, stopAnimation } = state

    const props = useSpring({
        height: visible ? height : 0,
        opacity: visible ? 1 : 0,
        onRest: stopAnimation,
        config: visible ? config.gentle : config.default,
    })
    return (
        <DisclosureContent as={animated.div} state={state} style={props} className="hide-overflow">
            <div ref={ref}>
                <Text pt={4} px={2} {...rest}>
                    {children}
                </Text>
            </div>
        </DisclosureContent>
    )
}

const Collapsible = forwardRef(function Collapsible({ children, ...rest }, ref) {
    const disclosure = useDisclosureState({ animated: true })

    return (
        <Box sx={styles.wrapper} {...rest} ref={ref}>
            {ReactChildren.map(children, child => cloneElement(child, { state: disclosure }))}
        </Box>
    )
})

Collapsible.Heading = CollapsibleHeading
Collapsible.Panel = CollapsiblePanel

export default Collapsible
