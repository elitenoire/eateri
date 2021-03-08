import { useState, useCallback } from 'react'
import constate from 'constate'

const useFormDialogState = ({ date, time, guest }) => {
    const [values, setValues] = useState({ date, time, guest })
    const [isToday, setIsToday] = useState(false)

    const update = useCallback((name, value, today = false) => {
        setValues(prevValues => ({ ...prevValues, [name]: value }))
        setIsToday(today)
    }, [])

    return {
        values,
        isToday,
        update,
    }
}

export const [
    FormDialogProvider,
    useFormDialogUpdate,
    useFormDialogValues,
    useIsToday,
    useDateValue,
    useTimeValue,
    useGuestValue,
] = constate(
    useFormDialogState,
    state => state.update,
    state => state.values,
    state => state.isToday,
    state => state.values.date,
    state => state.values.time,
    state => state.values.guest
)
