/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { forwardRef } from 'react'

// import { DropdownContext } from './DropdownContext'

import { ddListSX } from './style'

const DropdownList = forwardRef(function ({ as: Tag, outline, multi, tags, select, children, ...rest }, ref) {
    // const dropdown = useContext(DropdownContext)
    const Element = Tag || 'div'
    return (
        <Element ref={ref} {...rest}>
            {children}
        </Element>
    )
})

export default DropdownList
