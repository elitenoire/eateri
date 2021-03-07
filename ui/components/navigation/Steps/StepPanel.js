import React from 'react'
import { useStepValue } from './useStepState'

const StepPanel = ({ step, children, ...rest }) => {
    const { currentStep } = useStepValue()

    return <div {...rest}>{step === currentStep && children}</div>
}

export default StepPanel
