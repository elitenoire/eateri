import { forwardRef } from 'react'
import { Text } from '../Text'

const base = {
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading',
}

export const Heading = forwardRef(function Heading(props, ref) {
    return <Text ref={ref} as="h2" variant="heading" spacing={0} {...props} __css={base} />
})
