import { forwardRef, createContext, useContext, useCallback } from 'react'
import { useCompositeState, Composite, CompositeItem } from 'ariakit/Composite'
import { Checkbox, useCheckboxState } from 'ariakit/Checkbox'
import Scrollable from '~@core/display/Scrollable'

const SelectBoxContext = createContext()

export const SelectBox = forwardRef(function SelectBox(
    { value, onChange, unselect, loop = true, children, compositeState, ...rest },
    ref
) {
    const composite = useCompositeState({
        ...compositeState,
        focusLoop: loop,
    })

    const checkbox = useCheckboxState({ value, setValue: onChange })

    const ariaProps = {
        role: 'listbox',
        ...(Array.isArray(checkbox.value) && { 'aria-multiselectable': true }),
    }

    const contextValue = { ...composite, ...checkbox, unselect }

    return (
        <Composite state={composite} {...rest} {...ariaProps} ref={ref}>
            {compositeProps => (
                <Scrollable as="ul" {...compositeProps}>
                    <SelectBoxContext.Provider value={contextValue}>{children}</SelectBoxContext.Provider>
                </Scrollable>
            )}
        </Composite>
    )
})

export const SelectBoxOption = forwardRef(function SelectBoxOption({ value, children, ...rest }, ref) {
    const { unselect, setValue: _setValue, ...context } = useContext(SelectBoxContext)

    const setValue = useCallback(
        ariakitCallback => {
            _setValue(prevValue => {
                if (unselect && !Array.isArray(prevValue)) {
                    return prevValue === value ? '' : value
                }
                return ariakitCallback(prevValue)
            })
        },
        [_setValue, unselect, value]
    )

    // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
    const checkbox = { ...context, setValue }

    return (
        <Checkbox as={CompositeItem} value={value} state={checkbox} {...rest} ref={ref}>
            {({ 'aria-checked': ariaChecked, ...checkboxProps }) => (
                <li {...checkboxProps} role="option" aria-selected={ariaChecked}>
                    {children}
                </li>
            )}
        </Checkbox>
    )
})
