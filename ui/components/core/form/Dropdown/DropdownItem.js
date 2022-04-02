import { forwardRef } from 'react'

import { Button } from 'reakit/Button'
import { Icon } from '~@core/general'

import { isString } from '~/lib/utils'

// import { ddItemSX } from './style'

function renderIcon(icon) {
    return isString(icon) ? <Icon name={icon} /> : icon
}

function renderLeft({ icon, showCheckbox, checked }) {
    if (!(icon || showCheckbox)) return null
    const _icon = renderIcon(icon)
    const _checkbox = <Icon name={checked ? 'checkboxon' : 'checkboxoff'} />
    return <span>{showCheckbox ? _checkbox : _icon}</span>
}

function renderRight({ iconR, showCheckbox, showCheck, checked }) {
    if (showCheckbox && !iconR) return null
    const _iconR = renderIcon(iconR)
    return (
        <span>
            {_iconR && <span>{_iconR}</span>}
            {checked && showCheck && !showCheckbox && (
                <span>
                    <Icon name="check" />
                </span>
            )}
        </span>
    )
}

function renderMiddle({ label, meta, children }) {
    if (children) return children
    return (
        <span>
            {label && <span>{label}</span>}
            {label && meta && <span>{meta}</span>}
        </span>
    )
}

const DropdownItem = forwardRef(function DropdownItem(
    { as: Tag, icon, iconR, showCheck, showCheckbox, checked, label, meta, children, ...rest },
    ref
) {
    // const isFuncChildren = typeof children === 'function'
    const Element = Tag || Button
    return (
        <Element ref={ref} {...rest}>
            <span>
                {renderLeft({ icon, showCheckbox, checked })}
                {renderMiddle({ label, meta, children })}
                {renderRight({ iconR, showCheckbox, showCheck, checked })}
            </span>
        </Element>
    )
})

export default DropdownItem
