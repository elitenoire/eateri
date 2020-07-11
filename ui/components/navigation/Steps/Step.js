/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import React, { useContext } from 'react'
import { CompositeItem } from 'reakit/Composite'

import { StepContext } from './useStepState'
import { stepStyle } from './style'

const CURRENT = 'current'
const COMPLETED = 'completed'

const getStatus = (currentStep, index) => {
    if (index === currentStep) {
        return CURRENT
    }
    if (index < currentStep) {
        return COMPLETED
    }

    return undefined
}

const Step = React.forwardRef(({ as: Tag, status, title, index, children, ...rest }, ref) => {
    const label = `Step ${index}: ${children}`
    if (status === COMPLETED) {
        const ariaLabel = `Go to completed ${label}`
        return (
            <>
                <button
                    {...rest}
                    ref={ref}
                    className="step--dot"
                    type="button"
                    aria-label={ariaLabel}
                    title={ariaLabel}
                    sx={stepStyle.stepButton}
                />
                <span className="step--label" aria-hidden sx={stepStyle.stepLabel}>
                    {children}
                </span>
            </>
        )
    }
    // current or incomplete step
    const isCurrent = status === CURRENT
    const _title = title || 'You are here'
    return (
        <Tag
            {...rest}
            ref={ref}
            title={isCurrent ? _title : 'Complete previous step'}
            aria-current={isCurrent ? 'step' : null}
            data-step-incomplete={isCurrent ? null : ''}
        >
            <span aria-hidden className="step--dot" sx={stepStyle.stepButton} />
            <span className="visually-hidden">{`Step ${index}: `}</span>
            <span className="step--label" sx={stepStyle.stepLabel}>
                {children}
            </span>
            {!isCurrent && <span className="visually-hidden">button disabled, complete previous step</span>}
        </Tag>
    )
})

const StepItem = ({ index, title, children }) => {
    const step = useContext(StepContext)
    const { currentStep, setCurrentStep, ...composite } = step

    const stepIndex = index + 1
    const status = getStatus(currentStep, index)
    const moveStep = _index => () => setCurrentStep(_index)

    if (status === COMPLETED) {
        return (
            <li data-step-complete="">
                <CompositeItem {...composite} onClick={moveStep(index)}>
                    {stepProps => (
                        <Step {...stepProps} title={title} status={status} index={stepIndex}>
                            {children}
                        </Step>
                    )}
                </CompositeItem>
            </li>
        )
    }

    return (
        <CompositeItem {...composite} role="listitem" onClick={moveStep(index)}>
            {stepProps => (
                <Step {...stepProps} as="li" title={title} status={status} index={stepIndex}>
                    {children}
                </Step>
            )}
        </CompositeItem>
    )
}

export default StepItem
