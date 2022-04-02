import { forwardRef } from 'react'
import { useThemeUI } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import BoringAvatar from 'boring-avatars'

import styles from './style'

const Avatar = forwardRef(function Avatar(
    { as = 'span', size = '100%', variant = 'beam', ring = 'ringLight', name, ...rest },
    ref
) {
    const {
        theme: {
            colors: { primary, secondary },
        },
    } = useThemeUI()

    // eslint-disable-next-line react-perf/jsx-no-new-array-as-prop
    const colorScheme = [primary.light, secondary.hover]

    return (
        <Box as={as} ref={ref} sx={styles.wrapper(ring)} {...rest}>
            <BoringAvatar name={name} size={size} variant={variant} colors={colorScheme} />
        </Box>
    )
})

export default Avatar
