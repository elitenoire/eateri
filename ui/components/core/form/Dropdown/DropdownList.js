import { forwardRef } from 'react'

// import { DropdownContext } from './DropdownContext'

// import { ddListSX } from './style'

const DropdownList = forwardRef(function DropdownList(
    { as: Tag, outline, multi, tags, select, children, ...rest },
    ref
) {
    // const dropdown = useContext(DropdownContext)
    const Element = Tag || 'div'
    return (
        <Element ref={ref} {...rest}>
            {children}
        </Element>
    )
})

export default DropdownList
