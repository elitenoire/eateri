/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Composite } from 'reakit/Composite'

import useStepState, { StepContext } from './useStepState'

import { stepListStyle } from './style'

const StepList = ({ children, ...rest }) => {
    // const [currentStep, setCurrentStep] = useState(0)
    // const [completedSteps, setCompletedSteps] = useState([])

    // const moveStep = newStep => {
    //     if (stepIdx === currentStep) return
    //     // if (stepIdx)
    //     setCurrentStep(_currentStep => {
    //         if (_currentStep < newStep) {

    //         }
    //     })
    // }

    const { currentStep, setCurrentStep, ...composite } = useStepState()
    const value = { currentStep, setCurrentStep, ...composite }

    return (
        <StepContext.Provider value={value}>
            <Composite as="ol" role="list" {...composite} sx={stepListStyle}>
                {children}
            </Composite>
        </StepContext.Provider>
    )
}

export default StepList
