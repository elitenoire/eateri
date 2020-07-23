import React from 'react'
import { useStepContext } from './useStepState'

const StepPanel = ({ step, children, ...rest }) => {
    const { currentStep } = useStepContext()

    return <div {...rest}>{step === currentStep && children}</div>
}

export default StepPanel
