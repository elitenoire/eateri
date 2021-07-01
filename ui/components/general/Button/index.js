import React from 'react'
import { useThemeUI } from '@theme-ui/core'
import { Button as TUIButton, Link as TUILink } from '@theme-ui/components'
import Icon from '~@/general/Icon'
import LoadingDots from '~@/feedback/LoadingDots'
import styles from './style'

// Prevent focusing on button click and maintain accessibility
// https://github.com/react-bootstrap/react-bootstrap/issues/1300#issuecomment-386425763
const handleClick = e => {
    if (e) {
        e.preventDefault()
    }
}
const handleKeyPress = e => {
    if (e.keyCode === 13 || e.keycode === 32) {
        handleClick()
    }
}

const _sx = ({
    buttons,
    size,
    shape,
    brand,
    color,
    fluid,
    borderless,
    ghostText,
    opaque,
    iconOnly,
    buttonWithIcon,
    link,
    children,
    sx,
}) => ({
    ...styles._base,
    ...buttons.brands[brand]({ color, borderless, opaque, ghostText, link }),
    ...buttons.shapes[shape],
    ...buttons.sizes[size],
    ...(children && styles.button),
    ...(buttonWithIcon && styles.buttonWithIcon),
    ...(iconOnly && styles.icon),
    ...(fluid && { width: 'fluid' }),
    ...sx,
})

const Button = React.forwardRef(
    (
        {
            sx,
            size,
            shape,
            brand,
            color,
            icon,
            fluid,
            borderless,
            ghostText,
            opaque,
            noFade,
            isLoading,
            ariaLabel,
            link,
            children,
            ...rest
        },
        ref
    ) => {
        const {
            theme: { buttons },
        } = useThemeUI()
        const iconOnly = icon && !children
        const buttonWithIcon = icon && children

        const Tag = link ? TUILink : TUIButton

        return (
            <Tag
                ref={ref}
                margin="6px"
                sx={_sx({
                    buttons,
                    size,
                    shape,
                    brand,
                    color,
                    fluid,
                    borderless,
                    ghostText,
                    opaque,
                    iconOnly,
                    buttonWithIcon,
                    link,
                    children,
                    sx,
                })}
                aria-label={iconOnly ? ariaLabel || icon : undefined}
                data-no-fade={noFade ? '' : null}
                title={iconOnly ? ariaLabel || icon : undefined}
                onMouseDown={handleClick}
                onKeyUp={handleKeyPress}
                {...rest}
            >
                {isLoading ? (
                    <LoadingDots />
                ) : (
                    <>
                        {children}
                        {buttonWithIcon && (
                            <span className="symbol">
                                <Icon name={icon} />
                            </span>
                        )}
                        {iconOnly && <Icon name={icon} />}
                    </>
                )}
            </Tag>
        )
    }
)

Button.defaultProps = {
    shape: 'pill',
    size: 'md',
    brand: 'solid',
    color: 'primary',
}

Button.displayName = 'Button'

export default Button
