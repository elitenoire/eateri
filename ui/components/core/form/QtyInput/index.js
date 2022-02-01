import { useReducer, useCallback, useEffect } from 'react'
import { Text } from '~@core/typography'
import { Button } from '~@core/general'
import useCounter from '~/hooks/useCounter'

import styles from './style'

const reducer = (state, { type, qty, isMinQty, isMaxQty }) => {
    switch (type) {
        case 'SET':
            return {
                ...state,
                qty,
                isMinQty,
                isMaxQty,
                reset: false,
            }
        case 'RESET':
            return {
                ...state,
                qty: state.defaultQty,
                reset: true,
            }
        default:
            return state
    }
}

export function useQtyInputState(defaultQty = 1) {
    const initialState = { qty: defaultQty, defaultQty, reset: false }
    const [qtyState, dispatch] = useReducer(reducer, initialState)
    const onQtyChange = useCallback(state => dispatch({ type: 'SET', ...state }), [dispatch])
    const resetQty = useCallback(() => dispatch({ type: 'RESET' }), [dispatch])

    return { ...qtyState, resetQty, onQtyChange }
}

export function QtyInput({
    qty: count,
    minQty: start = 1,
    maxQty: end = 5,
    onChange,
    decrementLabel = 'Decrease meal quantity',
    incrementLabel = 'Increase meal quantity',
    disabled,
    className,
    vertical,
    reset,
    ...rest
}) {
    const {
        count: qty,
        defaultCount: defaultQty,
        goto,
        increment,
        decrement,
        isStart: isMinQty,
        isEnd: isMaxQty,
    } = useCounter({
        start,
        end,
        count,
    })

    useEffect(() => {
        onChange?.({ qty, isMinQty, isMaxQty, defaultQty })
    }, [qty, isMinQty, isMaxQty, defaultQty, onChange])

    useEffect(() => {
        if (reset) {
            goto(defaultQty)
        }
    }, [reset, goto, defaultQty])

    return (
        <div sx={styles.qtyWrapper} className={`qty-input ${className || ''}`} data-vertical={vertical ? '' : null}>
            <Button
                className="qty-input--btn qty-input--btn-dec"
                brand="ghost"
                color="secondary"
                icon="subtract"
                {...rest}
                ariaLabel={decrementLabel}
                onClick={decrement}
                disabled={disabled || isMinQty}
            />
            <Text sx={styles.qtyText} className="qty-input--text" mx={3}>
                {qty}
            </Text>
            <Button
                className="qty-input--btn qty-input--btn-inc"
                brand="ghost"
                color="secondary"
                icon="add"
                {...rest}
                ariaLabel={incrementLabel}
                onClick={increment}
                disabled={disabled || isMaxQty}
            />
        </div>
    )
}
