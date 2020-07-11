import React, { useState } from 'react'
import { useCompositeState } from 'reakit/Composite'

export const StepContext = React.createContext()

const useStepState = ({ step = 0, ...initialComposite } = {}) => {
    const [currentStep, setCurrentStep] = useState(step)
    const composite = useCompositeState(initialComposite)

    return {
        ...composite,
        currentStep,
        setCurrentStep,
    }
}

export default useStepState
