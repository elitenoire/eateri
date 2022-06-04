import { forwardRef } from 'react'
import { Button } from '~@core/general'
import { Link } from '~@core/navigation'

export const LinkButton = forwardRef(function LinkButton(props, ref) {
    return <Button ref={ref} {...props} as={Link} />
})
