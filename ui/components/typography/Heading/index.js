import React from 'react'
import { Heading as TUIHeading } from '@theme-ui/components'

const _sx = ({ title, sx }) => ({
    ...(title && { fontFamily: 'title' }),
    ...sx,
})

const Heading = React.forwardRef(({ title, sx, children, ...rest }, ref) => (
    <TUIHeading ref={ref} sx={_sx({ title, sx })} {...rest}>
        {children}
    </TUIHeading>
))

Heading.displayName = 'Heading'

export default Heading
