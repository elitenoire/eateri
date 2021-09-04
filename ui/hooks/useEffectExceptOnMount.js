/**
 * Code from - https://stackoverflow.com/a/61000836
 *
 * Identical to React.useEffect, except that it never runs on mount. This is
 * the equivalent of the componentDidUpdate lifecycle function.
 *
 * @param {function:function} effect - A useEffect effect.
 * @param {array} [dependencies] - useEffect dependency list.
 */
import { useRef, useEffect } from 'react'

function useEffectExceptOnMount(effect, dependencies = []) {
    const mounted = useRef(false)
    useEffect(() => {
        if (mounted.current) {
            const unmount = effect()
            return () => unmount && unmount()
        }
        mounted.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies)

    // Reset on unmount for the next mount.
    useEffect(() => () => (mounted.current = false), [])
}

export default useEffectExceptOnMount
