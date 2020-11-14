import useInView from 'react-cool-inview'

const InView = ({ triggerOnce, threshold, children, ...rest }) => {
    const { ref, inView } = useInView({
        threshold,
        unobserveOnEnter: triggerOnce,
        ...rest,
    })

    return children({ ref, inView })
}

InView.defaultProps = {
    triggerOnce: true,
    threshold: 0.8,
}

export default InView
