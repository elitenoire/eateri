import { forwardRef, createContext, useContext, useCallback, useEffect } from 'react'
import { useCompositeState, Composite, CompositeItem } from 'ariakit/composite'
import { Checkbox, useCheckboxState } from 'ariakit/checkbox'
import Scrollable from '~@core/display/Scrollable'

const SelectBoxContext = createContext()

export const SelectBox = forwardRef(function SelectBox(
    { value, onChange, unselect, loop = true, virtual, focusSelect, children, compositeState, ...rest },
    ref
) {
    const composite = useCompositeState({
        ...compositeState,
        virtualFocus: virtual,
        focusLoop: loop,
    })

    const checkbox = useCheckboxState({ value, setValue: onChange })

    const { activeId, items, moves, setMoves, virtualFocus } = composite
    const { setValue } = checkbox
    const contextValue = { ...composite, ...checkbox, unselect }

    const multiSelectable = Array.isArray(checkbox.value)
    const selectOnMove = (virtualFocus || focusSelect) && !multiSelectable

    const ariaProps = {
        role: 'listbox',
        ...(multiSelectable && { 'aria-multiselectable': true }),
    }

    // Reset moves to allow select onClick
    const handleMouse = useCallback(() => {
        if (!selectOnMove) return
        setMoves(0)
    }, [selectOnMove, setMoves])

    // Select option on focus / move
    useEffect(() => {
        if (!selectOnMove || !moves) return

        const selected = items.find(item => item.id === activeId)
        if (!selected) return

        setValue(selected.value)
    }, [selectOnMove, activeId, items, moves, setValue])

    return (
        <Composite state={composite} {...rest} {...ariaProps} onMouseDown={handleMouse} ref={ref}>
            {compositeProps => (
                <Scrollable as="ul" {...compositeProps}>
                    <SelectBoxContext.Provider value={contextValue}>{children}</SelectBoxContext.Provider>
                </Scrollable>
            )}
        </Composite>
    )
})

export const SelectBoxOption = forwardRef(function SelectBoxOption({ value, disabled, children, ...rest }, ref) {
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

    const getItem = useCallback(item => ({ ...item, value: disabled ? undefined : value }), [disabled, value])

    // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
    const checkbox = { ...context, setValue }

    return (
        <Checkbox
            as={CompositeItem}
            value={value}
            state={checkbox}
            getItem={getItem}
            disabled={disabled}
            {...rest}
            ref={ref}
        >
            {({ 'aria-checked': ariaChecked, ...checkboxProps }) => (
                <li {...checkboxProps} aria-selected={ariaChecked} role="option">
                    {children}
                </li>
            )}
        </Checkbox>
    )
})
