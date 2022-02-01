import { useState, useRef, useCallback } from 'react'
import constate from 'constate'
import { selector } from '~/lib/utils'

const useGliderState = ({ autoplay, autoplayInterval, onChange, onPlayChange }) => {
    const ref = useRef()
    const [isPlaying, setIsPlaying] = useState(autoplay && autoplayInterval > 0)
    const [index, setIndex] = useState(0)

    const handleChange = useCallback(
        newIndex => {
            setIndex(newIndex)
            if (onChange) {
                onChange(newIndex)
            }
        },
        [onChange]
    )

    const handlePlayChange = useCallback(
        play => {
            setIsPlaying(play)
            if (onPlayChange) {
                onPlayChange(play)
            }
        },
        [onPlayChange]
    )

    // Glider controls
    const togglePlay = useCallback(() => {
        ref.current.togglePlay()
    }, [])

    const glideTo = useCallback(idx => {
        ref.current.glideTo(idx)
    }, [])

    return {
        ref,
        index,
        setIndex,
        onChange: handleChange,
        onPlayChange: handlePlayChange,
        autoplay,
        autoplayInterval,
        isPlaying,
        togglePlay,
        glideTo,
    }
}

export const [GliderProvider, useGliderContext, useIndex, useGliderProps, useGlideTo, usePlay] = constate(
    useGliderState,
    values => values,
    selector('index', 'setIndex'),
    selector('ref', 'autoplay', 'autoplayInterval', 'onChange', 'onPlayChange'),
    selector('glideTo'),
    selector('isPlaying', 'togglePlay')
)
