import { forwardRef } from 'react'
import { useThemeUI } from '@theme-ui/core'
import { Box, Link as TUILink } from '@theme-ui/components'
import { Button as AriaButton } from 'ariakit/button'
import { Icon } from '~@core/general'
import LoadingDots from '~@core/feedback/LoadingDots'
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

const _sxBase = ({ fluid, buttonWithIcon, iconOnly, radius, px, py }) => ({
    ...styles._base,
    ...(buttonWithIcon && styles.buttonWithIcon),
    ...(iconOnly && styles.icon),
    ...(fluid && { width: 'fluid' }),
    ...(radius && { borderRadius: radius }),
    ...(px && { px }),
    ...(py && { py }),
})

const _sx = ({
    buttons,
    size,
    shape,
    brand,
    color,
    borderless,
    ghostText,
    opaque,
    alpha,
    bg,
    outline,
    outlineColor,
    radius,
    px,
    py,
    link,
    children,
}) => ({
    ...styles._baseExtra,
    ...buttons.brands[brand]({ color, borderless, opaque, alpha, bg, outline, outlineColor, ghostText, link }),
    ...buttons.shapes[shape],
    ...(buttons.sizes[size] || { fontSize: size }),
    ...(children && styles.button),
    ...(radius && { borderRadius: radius }),
    ...(px && { px }),
    ...(py && { py }),
})

export const ButtonAria = forwardRef(function ButtonAria({ dropdown, active, children, ...rest }, ref) {
    return (
        <Box as={AriaButton} ref={ref} sx={styles._aria} {...rest}>
            {children}
            {dropdown && (
                <span sx={styles.arrow} data-open={active ? '' : null}>
                    <Icon name="arrowdropdown" />
                </span>
            )}
        </Box>
    )
})

export const ButtonBase = forwardRef(function ButtonBase(
    {
        icon,
        link,
        fluid,
        radius,
        px,
        py,
        noFade,
        noHoverUp,
        active,
        dropdown,
        scaleIcon,
        isLoading,
        type,
        ariaLabel,
        children,
        ...rest
    },
    ref
) {
    const iconOnly = icon && !children
    const buttonWithIcon = icon && children
    const Tag = link ? TUILink : ButtonAria

    return (
        <Tag
            ref={ref}
            aria-label={iconOnly ? ariaLabel || icon : undefined}
            data-no-fade={noFade ? '' : null}
            data-no-hoverup={noHoverUp ? '' : null}
            data-active={active ? '' : null}
            data-scale={scaleIcon || null}
            title={iconOnly ? ariaLabel || icon : undefined}
            onMouseDown={handleClick}
            onKeyUp={handleKeyPress}
            sx={_sxBase({ fluid, buttonWithIcon, iconOnly, radius, px, py })}
            {...(!link && { active, dropdown })}
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
})

export const Button = forwardRef(function Button(
    {
        // sx,
        size = 'md',
        shape = 'pill',
        brand = 'solid',
        color = 'primary',
        borderless,
        ghostText,
        opaque,
        alpha,
        bg,
        outline,
        outlineColor,
        radius,
        px,
        py,
        link,
        children,
        ...rest
    },
    ref
) {
    const {
        theme: { buttons },
    } = useThemeUI()
    return (
        <ButtonBase
            ref={ref}
            link={link}
            sx={_sx({
                buttons,
                size,
                shape,
                brand,
                color,
                borderless,
                ghostText,
                opaque,
                alpha,
                bg,
                outline,
                outlineColor,
                radius,
                px,
                py,
                link,
                children,
            })}
            {...rest}
        >
            {children}
        </ButtonBase>
    )
})
