import { useRef, useEffect, useCallback } from 'react'

const useAutoplay = ({ interval, animate, index, autoplay, onPlayChange }) => {
    const canAutoplay = autoplay && interval > 0
    const timer = useRef(0)
    // enables autoplay
    const enabledRef = useRef(canAutoplay)
    // toggles play/stop
    const isPlayingRef = useRef(canAutoplay)
    // remembers play/stop state if autoplay is dynamically changed
    const stoppedRef = useRef(false)

    const stop = useCallback(() => {
        if (!timer.current) return

        window.clearInterval(timer.current)

        timer.current = 0
        isPlayingRef.current = false
        if (onPlayChange) {
            onPlayChange(isPlayingRef.current)
        }
    }, [timer, onPlayChange])

    const start = useCallback(() => {
        stop()
        if (!enabledRef.current) return

        timer.current = window.setInterval(() => {
            animate({ index: Math.ceil(index.get() + 1) })
        }, interval)

        isPlayingRef.current = true
        if (onPlayChange) {
            onPlayChange(isPlayingRef.current)
        }
    }, [index, interval, timer, animate, stop, onPlayChange])

    const isPlaying = useCallback(() => isPlayingRef.current, [])
    const enable = useCallback(val => {
        enabledRef.current = val
        stoppedRef.current = !val
    }, [])

    // controls autoplay -> enable / disable
    useEffect(() => {
        enabledRef.current = canAutoplay && !stoppedRef.current
    }, [canAutoplay])

    // start / stop playing
    useEffect(() => {
        if (!canAutoplay) return

        start()

        return () => {
            stop()
        }
    }, [start, stop, canAutoplay])

    return { start, stop, isPlaying, enable }
}

export default useAutoplay
