/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Composite } from 'reakit/Composite'

import { useCompositeContext } from './useStepState'

import { stepListStyle } from './style'

const StepList = ({ children, ...rest }) => {
    const composite = useCompositeContext()

    return (
        <Composite as="ol" role="list" {...composite} sx={stepListStyle}>
            {children}
        </Composite>
    )
}

export default StepList
