import { useRef, useCallback, useEffect } from 'react'

/**
 *
 * Adapted from https://github.com/primer/components hooks
 *
 * This hook ensures that all timeouts are cleared when un-mounting
 */

export default function useSafeTimeout() {
    const timers = useRef(new Set())

    const safeSetTimeout = useCallback((handler, timeout, ...args) => {
        const id = setTimeout(handler, timeout, ...args)
        timers.current.add(id)
        return id
    }, [])

    const safeClearTimeout = useCallback(id => {
        clearTimeout(id)
        timers.current.delete(id)
    }, [])

    useEffect(
        () => () => {
            for (const id of timers.current) {
                clearTimeout(id)
            }
        },
        []
    )

    return { safeSetTimeout, safeClearTimeout }
}
