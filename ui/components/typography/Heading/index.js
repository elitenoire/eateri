import React from 'react'
import { Heading as TUIHeading } from '@theme-ui/components'

const _sx = ({ title, weight, sx }) => ({
    ...(title && { fontFamily: 'title' }),
    ...(weight && { fontWeight: weight }),
    ...sx,
})

const Heading = React.forwardRef(({ title, weight, sx, children, ...rest }, ref) => (
    <TUIHeading ref={ref} sx={_sx({ title, weight, sx })} {...rest}>
        {children}
    </TUIHeading>
))

Heading.displayName = 'Heading'

export default Heading
