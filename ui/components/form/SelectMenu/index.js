import { forwardRef, useContext, Children, isValidElement, cloneElement } from 'react'
import { MenuButton, Menu, MenuItemRadio, MenuItemCheckbox, MenuGroup } from 'reakit/Menu'
import { unstable_IdProvider as IdProvider, unstable_useId as useId } from 'reakit/Id'

import { Dropdown } from '../Dropdown'
import { SelectContext, Select } from './context'

export const SelectButton = forwardRef(function SelectButton({ children, ...rest }, ref) {
    const select = useContext(SelectContext)

    return (
        <MenuButton
            ref={ref}
            {...select}
            {...rest}
            // value={value}
            active={select.visible}
            aria-haspopup="listbox"
        >
            {htmlProps => <Dropdown.Button {...htmlProps}>{children}</Dropdown.Button>}
        </MenuButton>
    )
})

export const SelectList = forwardRef(function SelectList({ prefix, id, children, name, ...rest }, ref) {
    const { isGroup, isMulti, hasTags, ...select } = useContext(SelectContext)
    const asProp = isGroup ? 'div' : 'ul'
    const showTags = isMulti && hasTags
    const values = Object.values(select.unstable_values)

    return (
        <Menu ref={ref} {...select} {...rest} id={prefix || id}>
            {htmlProps => (
                <IdProvider prefix={`${htmlProps.id}-gp`}>
                    <Dropdown.List {...htmlProps} as={asProp} role="listbox">
                        {showTags && (
                            <div>
                                {values.map((array = [], i) =>
                                    array.map((_value, j) => <span key={i + j}>{_value}</span>)
                                )}
                            </div>
                        )}
                        {Children.map(children, child =>
                            !isGroup && name && isValidElement(child) ? cloneElement(child, { name }) : child
                        )}
                    </Dropdown.List>
                </IdProvider>
            )}
        </Menu>
    )
})

export const SelectGroup = forwardRef(function SelectGroup({ id: defaultId, label, name, children, ...rest }, ref) {
    const select = useContext(SelectContext)
    const { id } = useId({ id: defaultId })

    return (
        <MenuGroup ref={ref} {...select} {...rest}>
            {htmlProps => (
                <ul {...htmlProps} aria-labelledby={id}>
                    <li id={id} role="presentation">
                        {label}
                    </li>
                    {Children.map(children, child =>
                        name && isValidElement(child) ? cloneElement(child, { name }) : child
                    )}
                </ul>
            )}
        </MenuGroup>
    )
})

export const SelectOption = forwardRef(function SelectOption({ children, ...rest }, ref) {
    const { isMulti, ...select } = useContext(SelectContext)
    const Element = isMulti ? MenuItemCheckbox : MenuItemRadio

    return (
        <Element ref={ref} {...select} {...rest}>
            {({ 'aria-checked': ariaChecked, ...htmlProps }) => (
                <Dropdown.Item as="li" {...htmlProps} role="option" aria-selected={ariaChecked}>
                    {children}
                </Dropdown.Item>
            )}
        </Element>
    )
})

Select.Button = SelectButton
Select.List = SelectList
Select.Group = SelectGroup
Select.Item = SelectOption

export { Select }
