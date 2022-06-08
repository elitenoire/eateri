import  { useInView } from 'react-cool-inview'

function InView({ triggerOnce = true, threshold = '0.8', children, ...rest }) {
    const { observe, inView } = useInView({
        threshold,
        unobserveOnEnter: triggerOnce,
        ...rest,
    })

    return children({ observe, inView })
}

export default InView
