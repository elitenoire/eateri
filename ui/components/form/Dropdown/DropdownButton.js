/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { forwardRef } from 'react'
import { Icon, Button } from '~@/general'

import { ddButtonSX } from './style'

const DropdownButton = forwardRef(function (
    { brand = 'muted', bg, icon, label, value, active, hideArrow, children, ...rest },
    ref
) {
    return (
        <Button ref={ref} m={0} brand={brand} active={active} {...rest} sx={ddButtonSX.button({ bg })}>
            {icon && (
                <span sx={ddButtonSX.icon}>
                    <Icon name={icon} />
                </span>
            )}
            {children}
            {value && <span sx={ddButtonSX.value}>{value}</span>}
            {!hideArrow && (
                <span sx={ddButtonSX.arrow} data-open={active ? '' : null}>
                    <Icon name="arrowdropdown" />
                </span>
            )}
        </Button>
    )
})

export default DropdownButton
