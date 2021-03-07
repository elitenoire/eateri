import { useState, useCallback } from 'react'
import constate from 'constate'
import { useCompositeState } from 'reakit/Composite'
import { clamp, selector } from '~/lib/utils'

// state hook
const useStepState = ({ step = 0, linear = true, maxStep = 2, ...initialComposite } = {}) => {
    const [currentStep, setCurrentStep] = useState(step)
    const composite = useCompositeState(initialComposite)

    const moveStep = useCallback(_step => setCurrentStep(clamp(_step, 0, maxStep)), [maxStep])

    const prevStep = useCallback(() => setCurrentStep(oldStep => clamp(oldStep - 1, 0, maxStep)), [maxStep])

    const nextStep = useCallback(() => setCurrentStep(oldStep => clamp(oldStep + 1, 0, maxStep)), [maxStep])

    const isFirst = currentStep === 0

    const isLast = currentStep === maxStep

    return {
        composite,
        currentStep,
        moveStep,
        prevStep,
        nextStep,
        isFirst,
        isLast,
        linear,
    }
}

export const [StepProvider, useCompositeContext, useStepValue, useStepStatus, useStepControl] = constate(
    useStepState,
    selector('composite'),
    selector('currentStep', 'linear'),
    selector('isFirst', 'isLast'),
    selector('moveStep', 'prevStep', 'nextStep')
)
