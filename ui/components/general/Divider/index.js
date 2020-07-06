import React from 'react'
import { Box } from '@theme-ui/components'
// import styles from './style.js'

const _sx = ({ vertical, height, width, sx }) => ({
    height: height || (vertical ? 'inherit' : '1px'),
    width: width || (vertical ? '1px' : 'inherit'),
    ...sx,
})

const Divider = ({ as = 'hr', width, height, vertical, sx, ...rest }) => (
    <Box as={vertical ? 'i' : as} sx={_sx({ vertical, height, width, sx })} {...rest} />
)

export default Divider
