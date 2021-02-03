import React from 'react'
import { Heading as TUIHeading } from '@theme-ui/components'

const _sx = ({ title, weight, size, sx }) => ({
    ...(title && { fontFamily: 'title' }),
    ...(weight && { fontWeight: weight }),
    ...((size || size === 0) && { fontSize: size }),
    ...sx,
})

const Heading = React.forwardRef(({ title, weight, size, sx, children, ...rest }, ref) => (
    <TUIHeading ref={ref} sx={_sx({ title, weight, size, sx })} {...rest}>
        {children}
    </TUIHeading>
))

Heading.displayName = 'Heading'

export default Heading
