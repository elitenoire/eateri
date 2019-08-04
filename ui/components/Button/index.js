import React from 'react'
import Icon from '../Icon'
import { Button as StyledButton, IconButton } from './style'

const Button = ({ children, icon, iconLeft, iconRight, ariaLabel, loading, variant, ...props }) => {
    if (icon) {
        return (
            <IconButton variant={variant} aria-label={ariaLabel || icon} {...props}>
                <Icon name={icon} />
            </IconButton>
        )
    }

    return (
        <StyledButton variant={variant} {...props}>
            {loading && variant !== 'link' ? (
                <Icon name="loader" className="loading" />
            ) : (
                <>
                    {iconLeft && <Icon name={iconLeft} className="icon-left" />}
                    {children}
                    {iconRight && <Icon name={iconRight} className="icon-right" />}
                    {loading && variant === 'link' && <Icon name="loader" className="loading" />}
                </>
            )}
        </StyledButton>
    )
}

Button.defaultProps = {
    color: 'primary',
    variant: 'default',
    size: 2,
    fluid: false,
    curved: false,
    rounded: false,
    circle: false,
    raised: false,
    askew: false,
    hasShadow: false,
    icon: null,
}

export default Button
