import { createContext, useMemo, useState, useEffect } from 'react'

import { useMenuState } from 'reakit/Menu'

import { isString, isObject } from '~/lib/utils'

function getObjectValue(obj) {
    const keys = Object.keys(obj)
    return obj[keys[keys.length - 1]]
}

function normalizer(name, value) {
    if (Array.isArray(value) || isString(value)) {
        return { [name]: value }
    }
    return value
}

function makeOptions({ value, multi, group }) {
    return function () {
        const noInitialValue = value == null // value === undefined
        const isGroup = isObject(value) || (group && noInitialValue)
        const isMulti =
            Array.isArray(value) ||
            (multi && noInitialValue) ||
            (isObject(value) && Array.isArray(getObjectValue(value)))
        return { isGroup, isMulti }
    }
}

export const SelectContext = createContext()

/**
 *
 * autoClose - applies only to single select
 * autoSelect -> select on focus
 * hasTags -> multi select options as tags
 * searchable -> search box in the listbox
 * collapsible -> group options are collapsible
 * placeholder
 * showCheckbox
 * selectionLimit -> applies only to multi select
 */

export function Select({ name = 'select-item', value, onChange, multi, group, children, ...initialState }) {
    const menu = useMenuState({ unstable_values: normalizer(name, value), ...initialState })

    const [{ isGroup, isMulti }] = useState(makeOptions({ value, multi, group }))
    const context = { ...initialState, ...menu, isMulti, isGroup }
    const values = useMemo(() => context, Object.values(context))

    const _value = values.unstable_values

    useEffect(() => {
        let selected = _value

        if (!isGroup) {
            // const keys = Object.keys(_value)
            // const latest = _value[keys[keys.length - 1]]
            selected = getObjectValue(_value)
        }

        onChange?.(selected)
    }, [_value, isGroup, onChange])
    return <SelectContext.Provider value={values}>{children}</SelectContext.Provider>
}
