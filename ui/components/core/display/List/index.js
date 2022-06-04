import { forwardRef, Fragment } from 'react'
import { Card, Box } from '@theme-ui/components'
import { Icon, Divider } from '~@core/general'
import { Text } from '~@core/typography'

import { isString } from '~/lib/utils'

import styles from './style'

export function ListSeparator(props) {
    return <Divider bg="grayMedium" my={2} {...props} />
}

export const List = forwardRef(function List({ animated, transformOrigin, children, ...rest }, ref) {
    return (
        <Card ref={ref} variant="dropdown" sx={styles.list({ animated, transformOrigin })} {...rest}>
            {children}
        </Card>
    )
})

function renderIcon({ icon, iconColor, iconSize, boxed, boxedBg }) {
    return isString(icon) ? (
        <span sx={styles.itemIcon({ iconColor, iconSize, boxed, boxedBg })}>
            <Icon name={icon} />
        </span>
    ) : (
        icon
    )
}

function renderContent({ title, text, size = 2, truncate = 2, weight = 'medium', children }) {
    if (children || (text && !title))
        return (
            <Text as="span" size={size} weight={weight} truncate={truncate}>
                {children || text}
            </Text>
        )
    return (
        text &&
        title && (
            <span sx={styles.content}>
                <Text as="span" size={size} weight="bold" truncate>
                    {title}
                </Text>
                <Text as="span" size={1} color="textFade" weight={weight} truncate={truncate}>
                    {text}
                </Text>
            </span>
        )
    )
}

function FlexSpan({ children }) {
    return <span sx={styles.flexFluid}>{children}</span>
}

export const ListItem = forwardRef(function ListItem(
    {
        icon,
        iconColor,
        iconSize,
        iconBoxed,
        iconBoxedBg,
        extra,
        extraColor,
        extraSize,
        extraBoxed,
        extraBoxedBg,
        title,
        text,
        size,
        truncate,
        weight,
        gap,
        plain,
        noHover,
        custom,
        use,
        as,
        children,
        ...rest
    },
    ref
) {
    const Wrapper = extra ? FlexSpan : Fragment
    return (
        <Box ref={ref} as={use || as} sx={styles.listItem({ gap, plain, noHover })} {...rest}>
            {custom ? (
                children
            ) : (
                <>
                    {icon && renderIcon({ icon, iconColor, iconSize, boxed: iconBoxed, boxedBg: iconBoxedBg })}
                    <Wrapper>{renderContent({ title, text, weight, size, truncate, children })}</Wrapper>
                    {extra &&
                        renderIcon({
                            icon: extra,
                            iconColor: extraColor || 'grayDarker',
                            iconSize: extraSize,
                            boxed: extraBoxed,
                            boxedBg: extraBoxedBg,
                        })}
                </>
            )}
        </Box>
    )
})

const _optionIcons = {
    radio: 'radiooff',
    radioon: 'radioon',
    checkbox: 'checkboxoff',
    checkboxon: 'checkboxon',
    switch: 'switchoff',
    switchon: 'switchon',
}

const _getOptionIcon = ({ type, checked }) => {
    const _checked = checked ? 'on' : ''
    return _optionIcons[type + _checked]
}

export const ListItemOption = forwardRef(function ListItemOption(
    { type, checked, hideIcon, gap = 2, reverse, className, use, as, children, ...rest },
    ref
) {
    return (
        <Box ref={ref} as={use || as} className={className} sx={styles.listItem({ gap })} {...rest}>
            {!hideIcon && renderIcon({ icon: _getOptionIcon({ type, checked }), iconColor: 'grayMedium', iconSize: 1 })}
            <ListItem as="span" plain noHover {...rest}>
                {children}
            </ListItem>
        </Box>
    )
})
