import { useStepValue } from './useStepState'

function StepPanel({ step, children, ...rest }) {
    const { currentStep } = useStepValue()

    return <div {...rest}>{step === currentStep && children}</div>
}

export default StepPanel
