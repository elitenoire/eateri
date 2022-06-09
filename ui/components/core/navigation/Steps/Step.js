import { forwardRef, useCallback } from 'react'
import { CompositeItem } from 'ariakit/composite'
import { CURRENT, COMPLETED } from '~/constants'
import { useCompositeContext, useStepValue, useStepControl } from './useStepState'

import { stepStyle } from './style'

const getStatus = (currentStep, index) => {
    if (index === currentStep) {
        return CURRENT
    }
    if (index < currentStep) {
        return COMPLETED
    }

    return undefined
}

const Step = forwardRef(function Step({ as: Tag, status, title, index, children, ...rest }, ref) {
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

function StepItem({ index, title, children }) {
    const composite = useCompositeContext()
    const { currentStep, linear } = useStepValue()
    const { moveStep } = useStepControl()

    const stepIndex = index + 1
    const status = getStatus(currentStep, index)

    const handleStepClick = useCallback(() => {
        if (linear) return
        moveStep(index)
    }, [index, moveStep, linear])

    if (status === COMPLETED) {
        return (
            <li data-step-complete="">
                <CompositeItem state={composite} onClick={handleStepClick}>
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
        <CompositeItem state={composite} role="listitem" onClick={handleStepClick}>
            {stepProps => (
                <Step {...stepProps} as="li" title={title} status={status} index={stepIndex}>
                    {children}
                </Step>
            )}
        </CompositeItem>
    )
}

export default StepItem
