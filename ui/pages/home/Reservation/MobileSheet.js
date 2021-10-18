import { useRef, useState, useCallback, useEffect } from 'react'
import useInView from 'react-cool-inview'
import { BottomSheet } from 'react-spring-bottom-sheet'
import { useSpring } from 'react-spring'
import { Heading } from '~@/typography'
import { Icon } from '~@/general'
import { useStepControl } from '~@/navigation'

import 'react-spring-bottom-sheet/dist/style.css'

import styles from './style'

const getBackdropStyle = spring => ({ '--rsbs-backdrop-opacity': spring.opacity })

// TODO: After mobile sheet reveal, page becomes unresponsive due to body scroll lock
function MobileSheet({ children }) {
    const sheetRef = useRef()
    const snapPointsRef = useRef([])

    // reveal sheet when page ends
    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '200px 0px 20px 0px',
    })

    const { moveStep } = useStepControl()

    // state to mimic open-close of sheet
    const [expand, setExpand] = useState(false)
    const [blocking, setBlocking] = useState(false)

    // custom override to animate backdrop
    const backdropSpring = useSpring({ opacity: expand ? 1 : 0 })

    const setDefaultSnap = useCallback(({ headerHeight, snapPoints }) => {
        snapPointsRef.current = snapPoints
        return headerHeight
    }, [])

    const setSnapPoints = useCallback(({ maxHeight, headerHeight }) => [headerHeight, maxHeight - headerHeight / 2], [])

    // open-close sheet as snapPoint changes
    const onSnapStart = useCallback(event => {
        if (event.type === 'SNAP') {
            requestAnimationFrame(() => {
                // Get current snapPoint
                const index = snapPointsRef.current.indexOf(sheetRef.current.height)
                // 0 - close, 1 - open
                if (index > -1) {
                    setExpand(!!index)
                    // show backdrop for an open sheet
                    if (index) setBlocking(true)
                }
            })
        }
    }, [])
    // hide backdrop when sheet closes
    const onSnapEnd = useCallback(
        event => {
            if (event.type === 'SNAP' && !expand) {
                setBlocking(false)
            }
        },
        [expand]
    )

    const toggle = useCallback(() => {
        sheetRef.current.snapTo(({ snapPoints }) => (expand ? Math.min(...snapPoints) : Math.max(...snapPoints)))
    }, [expand])

    // reset form steps when sheet closes
    useEffect(() => {
        if (!expand) moveStep(0)
    }, [expand, moveStep])

    return (
        <>
            <div ref={ref} style={styles.mobileSheetTrigger} />
            <BottomSheet
                ref={sheetRef}
                open={inView}
                blocking={blocking}
                skipInitialTransition
                sx={styles.mobileSheet}
                style={getBackdropStyle(backdropSpring)}
                defaultSnap={setDefaultSnap}
                snapPoints={setSnapPoints}
                onSpringStart={onSnapStart}
                onSpringEnd={onSnapEnd}
                header={
                    <div sx={styles.mobileHeader}>
                        <Heading as="h3" variant="h4" mb={0}>
                            Reservations
                        </Heading>
                        <button type="button" aria-label="Toggle reservation form" onClick={toggle}>
                            <Icon name={expand ? 'arrowhide' : 'arrowopen'} />
                        </button>
                    </div>
                }
            >
                {children}
            </BottomSheet>
        </>
    )
}

export default MobileSheet
