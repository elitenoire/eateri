/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Composite } from 'reakit/Composite'

import { useCompositeContext } from './useStepState'

import { stepListStyle } from './style'

const StepList = ({ children, ...rest }) => {
    const composite = useCompositeContext()

    return (
        <Composite as="ol" {...composite} role="list" sx={stepListStyle}>
            {children}
        </Composite>
    )
}

export default StepList
