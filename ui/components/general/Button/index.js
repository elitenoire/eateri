import React from 'react'
import { useThemeUI } from '@theme-ui/core'
import { Button as TUIButton } from '@theme-ui/components'
import Icon from '~@/general/Icon'
import LoadingDots from '~@/feedback/LoadingDots'
import styles from './style'

// Prevent focusing on button and maintain accessibility
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
    type,
    color,
    fluid,
    borderless,
    ghostText,
    children,
    sx,
    buttonWithIcon,
    iconOnly,
}) => ({
    ...styles._base,
    ...buttons.types[type]({ color, borderless, ghostText }),
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
        { sx, size, shape, type, color, icon, fluid, borderless, ghostText, isLoading, ariaLabel, children, ...rest },
        ref
    ) => {
        const {
            theme: { buttons },
        } = useThemeUI()
        // const { sizes, shapes, types } = theme.buttons
        const iconOnly = icon && !children
        const buttonWithIcon = icon && children

        return (
            <TUIButton
                ref={ref}
                sx={_sx({
                    buttons,
                    size,
                    shape,
                    type,
                    color,
                    fluid,
                    borderless,
                    ghostText,
                    iconOnly,
                    buttonWithIcon,
                    children,
                    sx,
                })}
                aria-label={iconOnly ? ariaLabel || icon : undefined}
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
            </TUIButton>
        )
    }
)

Button.defaultProps = {
    shape: 'pill',
    size: 'md',
    type: 'solid',
    color: 'primary',
}

Button.displayName = 'Button'

export default Button
