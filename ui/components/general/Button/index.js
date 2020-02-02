import React from 'react'
import { useThemeUI } from '@theme-ui/core'
import { Button as Btn } from '@theme-ui/components'
import Icon from '~components/general/Icon'
import LoadingDots from '~components/feedback/LoadingDots'
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

const Button = ({ sx, size, shape, type, color, icon, fluid, borderless, isLoading, ariaLabel, children, ...rest }) => {
    const { theme } = useThemeUI()
    const { sizes, shapes, types } = theme.buttons
    const iconOnly = icon && !children
    const buttonWithIcon = icon && children

    return (
        <Btn
            sx={{
                ...styles._base,
                ...types[type]({ color, borderless }),
                ...shapes[shape],
                ...sizes[size],
                ...(children && styles.button),
                ...(buttonWithIcon && styles.buttonWithIcon),
                ...(iconOnly && styles.icon),
                ...(fluid && { width: 'fluid' }),
                ...sx,
            }}
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
        </Btn>
    )
}

Button.defaultProps = {
    shape: 'pill',
    size: 'md',
    type: 'solid',
    color: 'primary',
}

export default Button
