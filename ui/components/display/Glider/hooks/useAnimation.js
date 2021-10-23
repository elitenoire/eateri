import { useRef } from 'react'
import { useSpring } from '@react-spring/web'

const useAnimation = ({ totalGlides, onChange }) => {
    const prevIndex = useRef(0)

    const [{ index }, api] = useSpring(() => ({
        index: 0,
        onChange: ({ value }) => {
            if (!onChange) return

            const newIndex = ((Math.round(value.index) % totalGlides) + totalGlides) % totalGlides
            if (newIndex === prevIndex.current) return

            prevIndex.current = newIndex

            onChange(newIndex)
        },
    }))

    return { index, animate: api }
}

export default useAnimation
