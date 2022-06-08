import { useRef, useState, useCallback, useEffect } from 'react'
import { useInView } from 'react-cool-inview'
import { BottomSheet } from 'react-spring-bottom-sheet'
import { useSpring } from '@react-spring/web'
import { Heading } from '~@core/typography'
import { Icon } from '~@core/general'
import { useStepControl } from '~@core/navigation'

import 'react-spring-bottom-sheet/dist/style.css'

import styles from './style'

const getBackdropStyle = style => ({ '--rsbs-backdrop-opacity': style.opacity })

// TODO: After mobile sheet reveal, page becomes unresponsive due to body scroll lock
function FormBottomSheet({ children }) {
    const sheetRef = useRef()
    const snapPointsRef = useRef([])

    // reveal sheet when page ends
    const { observe, inView } = useInView({
        threshold: 0,
        rootMargin: '200px 0px 20px 0px',
    })

    const { moveStep } = useStepControl()

    // state to mimic open-close of sheet
    const [expand, setExpand] = useState(false)
    const [blocking, setBlocking] = useState(false)

    // custom override to animate backdrop
    const animatedBackdropStyle = useSpring({ opacity: expand ? 1 : 0 })

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
                    // if (index) setBlocking(true)
                    setBlocking(!!index)
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
            <div ref={observe} style={styles.mobileSheetTrigger} />
            <BottomSheet
                ref={sheetRef}
                open={inView}
                blocking={blocking}
                skipInitialTransition
                expandOnContentDrag
                sx={styles.mobileSheet}
                style={getBackdropStyle(animatedBackdropStyle)}
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

export default FormBottomSheet
