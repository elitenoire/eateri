import { useRef, useEffect, useCallback } from 'react'

const useAutoplay = ({ interval = 5000, animate, index, autoplay = true }) => {
    const timer = useRef(0)
    const isPlayingRef = useRef(false)
    const enabledRef = useRef(autoplay)

    const stop = useCallback(() => {
        if (!timer.current) return

        window.clearInterval(timer.current)

        timer.current = 0
        isPlayingRef.current = false
    }, [timer])

    const start = useCallback(() => {
        stop()

        if (!(interval && enabledRef.current)) return

        timer.current = window.setInterval(() => {
            animate({ index: Math.ceil(index.get() + 1) })
        }, interval)

        isPlayingRef.current = true
    }, [index, interval, timer, animate, stop])

    const isPlaying = useCallback(() => isPlayingRef.current, [])
    const enable = useCallback(val => (enabledRef.current = val), [])

    useEffect(() => {
        start()

        return () => {
            stop()
        }
    }, [start, stop])

    return { start, stop, isPlaying, enable }
}

export default useAutoplay
