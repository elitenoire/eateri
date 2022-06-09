import { Composite } from 'ariakit/composite'
import { useCompositeContext } from './useStepState'

import { stepListStyle } from './style'

function StepList({ children, ...rest }) {
    const composite = useCompositeContext()

    return (
        <Composite as="ol" state={composite} role="list" sx={stepListStyle} {...rest}>
            {children}
        </Composite>
    )
}

export default StepList
