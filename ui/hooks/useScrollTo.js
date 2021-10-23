import { useSpring } from '@react-spring/web'

const documentObject = typeof document !== `undefined` && document

function useScrollTo({ offset: initialOffset = 0, ...initialSpringProps } = {}) {
    const [, api] = useSpring(() => ({
        y: 0,
    }))

    const smoothScrollTo = (to = 0, { offset = 0, ...springProps } = {}) => {
        let $element = to
        let topPos = to
        if (typeof to === 'string') {
            $element = documentObject.getElementById(to)
            if (!$element) return
        }

        if (typeof to !== 'number') {
            $element = $element?.current || $element
            const { top } = $element.getBoundingClientRect()
            const { scrollTop } = documentObject.documentElement
            topPos = top + scrollTop
        }

        if (!topPos && topPos !== 0) return

        api.start({
            y: topPos - (offset || initialOffset),
            reset: true,
            from: { y: window.scrollY || 0 },
            onChange: ({ value: { y } }) => {
                window.scroll(0, y)
            },
            ...initialSpringProps,
            ...springProps,
        })
    }

    const linkScroll = e => {
        e?.stopPropagation()
        // TODO: this removes the hash in the browser url
        // e?.preventDefault()
        smoothScrollTo(e?.target.hash.slice(1) || 0)
    }

    return { smoothScrollTo, linkScroll }
}

export default useScrollTo
