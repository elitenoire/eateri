import useInView from 'react-cool-inview'

function InView({ triggerOnce = true, threshold = '0.8', children, ...rest }) {
    const { ref, inView } = useInView({
        threshold,
        unobserveOnEnter: triggerOnce,
        ...rest,
    })

    return children({ ref, inView })
}

export default InView
