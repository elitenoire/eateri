import { memo } from 'react'
import { icons } from '~/lib/icons'

function Icon({ name, standalone, className, ...rest }) {
    const IconSvg = icons[name]
    const svgProps = {
        ...(!standalone && { 'aria-hidden': true, focusable: false }),
        ...rest,
    }
    try {
        if (!IconSvg) throw new Error(`Unknown icon '${name}'`)
    } catch (err) {
        console.warn(err)
        return name
    }
    return <IconSvg className={`ri-icon ${className || ''}`} {...svgProps} />
}

export default memo(Icon)
