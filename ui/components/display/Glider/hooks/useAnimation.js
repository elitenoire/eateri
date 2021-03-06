import { useRef } from 'react'
import { useSpring } from 'react-spring'

const useAnimation = ({ totalGlides, onChange }) => {
    const prevIndex = useRef(0)

    const [{ index }, animate] = useSpring(() => ({
        index: 0,
        onFrame: value => {
            if (!onChange) return

            const newIndex = ((Math.round(value.index) % totalGlides) + totalGlides) % totalGlides
            if (newIndex === prevIndex.current) return

            prevIndex.current = newIndex

            onChange(newIndex)
        },
    }))

    return { index, animate }
}

export default useAnimation
