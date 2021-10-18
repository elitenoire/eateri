import { Box } from '@theme-ui/components'

const _sx = ({ vertical, height, width, sx }) => ({
    height: height || (vertical ? 'inherit' : '1px'),
    width: width || (vertical ? '1px' : 'inherit'),
    ...sx,
})

function Divider({ as = 'hr', width, height, vertical, sx, ...rest }) {
    return <Box as={vertical ? 'i' : as} sx={_sx({ vertical, height, width, sx })} {...rest} />
}

export default Divider
