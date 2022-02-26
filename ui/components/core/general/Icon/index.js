import { memo } from 'react'
import { Box } from '@theme-ui/components'
import { icons } from '~/lib/icons'
import { isString } from '~/lib/utils'

const getIconStyle = ({ size }) => ({
    ...(size && { fontSize: size }),
})

function Icon({ name, standalone, size, className, ...rest }) {
    const IconSvg = isString(name) ? icons[name] : name
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
    return <Box as={IconSvg} sx={getIconStyle({ size })} className={`ri-icon ${className || ''}`} {...svgProps} />
}

export default memo(Icon)
