import { forwardRef } from 'react'
import { Icon, Button } from '~@core/general'

import { ddButtonSX } from './style'

const DropdownButton = forwardRef(function DropdownButton(
    { brand = 'muted', bg, icon, label, value, children, ...rest },
    ref
) {
    return (
        <Button ref={ref} brand={brand} {...rest} dropdown sx={ddButtonSX.button({ bg })}>
            {icon && (
                <span sx={ddButtonSX.icon}>
                    <Icon name={icon} />
                </span>
            )}
            {children}
            {value && <span sx={ddButtonSX.value}>{value}</span>}
        </Button>
    )
})

export default DropdownButton
