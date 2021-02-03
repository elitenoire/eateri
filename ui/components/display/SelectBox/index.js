import React, { useContext } from 'react'
import { useCompositeState, Composite, CompositeItem } from 'reakit/Composite'
import { Checkbox, useCheckboxState } from 'reakit/Checkbox'

import Scrollable from '~@/display/Scrollable'

const isString = value => typeof value === 'string' || value instanceof String

// function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }
const isNumber = value => typeof value === 'number' && !isNaN(value - value)

const SelectBoxContext = React.createContext()

const useSelectBoxState = ({ multi, value, loop = true, ...compositeState }) => {
    let state = []

    if (value) {
        if (Array.isArray(value)) {
            state = value
        }
        if (isString(value) || isNumber(value)) {
            state = [value]
        }
    }
    const { state: selected, setState: setSelected } = useCheckboxState({ state })

    const composite = useCompositeState({
        ...compositeState,
        currentId: undefined,
        loop,
    })

    const _value = selected // multi ? selected : selected[selected.length - 1]

    const onChange = val => {
        // Value from reakit's checkbox is always an array
        // if value is passed to a checkbox
        if (Array.isArray(val)) {
            setSelected(multi ? val : val[val.length - 1])
        }
    }

    return {
        ...composite,
        value: _value,
        onChange,
        multi,
    }
}

export const SelectBox = React.forwardRef(
    ({ value, onChange, multi, toggleable, loop = true, children, compositeState, ...rest }, ref) => {
        const composite = useCompositeState({
            ...compositeState,
            currentId: undefined,
            loop,
        })

        const ariaProps = {
            role: 'listbox',
            'aria-orientation': 'horizontal',
            ...(multi && { 'aria-multiselectable': multi }),
        }

        // Allows an already selected item (single-select) to be unselected.
        // By default, multi-select operates this way.
        const state = multi || toggleable ? value : [value]

        const setState = _value => {
            // Value from reakit's checkbox is always an array
            // if value is passed to a checkbox
            if (Array.isArray(_value) && onChange) {
                onChange(multi ? _value : _value[_value.length - 1])
            }
        }

        const contextValue = { ...composite, state, setState }

        return (
            <Composite {...composite} {...ariaProps} {...rest} ref={ref}>
                {compositeProps => (
                    <Scrollable as="ul" {...compositeProps}>
                        <SelectBoxContext.Provider value={contextValue}>{children}</SelectBoxContext.Provider>
                    </Scrollable>
                )}
            </Composite>
        )
    }
)

SelectBox.displayName = 'SelectBox'

export const SelectBoxOption = React.forwardRef(({ value, disabled, children, ...rest }, ref) => {
    const context = useContext(SelectBoxContext)
    return (
        <CompositeItem role="option" {...context} {...rest} ref={ref}>
            {itemProps => (
                <Checkbox as="li" value={value} {...itemProps} data-option-disabled={disabled}>
                    {children}
                </Checkbox>
            )}
        </CompositeItem>
    )
})

SelectBoxOption.displayName = 'SelectBoxOption'
