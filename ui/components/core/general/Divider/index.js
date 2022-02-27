import { Box } from '@theme-ui/components'
import { Text } from '~@core/typography'

const _sx = ({ bg, vertical, height, width, radius, opacity }) => ({
    height: height || (vertical ? 'inherit' : '1px'),
    width: width || (vertical ? '1px' : 'inherit'),
    bg: bg || 'currentColor',
    ...(radius && { borderRadius: radius }),
    ...(opacity && { opacity }),
    border: 'none',
})
const _wrapper = ({ vertical }) => ({
    display: 'flex',
    alignItems: 'center',
    ...(vertical && {
        flexDirection: 'column',
    }),
    'i,hr': {
        flex: 'auto',
    },
})
function Divider({ width, height, vertical, bg, gap = 4, radius, opacity, children, ...rest }) {
    const as = vertical ? 'i' : 'hr'
    if (children) {
        return (
            <Text as="div" sx={_wrapper({ vertical })} {...rest}>
                <Box as={as} sx={_sx({ bg, vertical, height, width, radius, opacity })} />
                <Box as="span" {...{ [vertical ? 'py' : 'px']: gap }}>
                    {children}
                </Box>
                <Box as={as} sx={_sx({ bg, vertical, height, width, radius, opacity })} />
            </Text>
        )
    }
    return <Box as={as} sx={_sx({ bg, vertical, height, width, radius, opacity })} {...rest} />
}

export default Divider
