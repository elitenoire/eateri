/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { useState, useCallback, useEffect } from 'react'
import { Text } from '~@/typography'
import Button from '~@/general/Button'
import useCounter from '~/hooks/useCounter'

import styles from './style'

export function useQtyInputState(defaultQty) {
    const [qtyState, setQtyState] = useState({ qty: defaultQty })
    const onQtyChange = useCallback((qty, isMinQty, isMaxQty) => {
        setQtyState(prevQtyState => ({ ...prevQtyState, qty, isMinQty, isMaxQty }))
    }, [])

    return { ...qtyState, onQtyChange }
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
    ...rest
}) {
    const { count: _qty, increment, decrement, isStart: isMinQty, isEnd: isMaxQty } = useCounter({
        start,
        end,
        count,
    })

    useEffect(() => {
        onChange?.(_qty, isMinQty, isMaxQty)
    }, [_qty, isMinQty, isMaxQty, onChange])

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
                {_qty}
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
