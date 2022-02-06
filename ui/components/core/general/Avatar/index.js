import { forwardRef } from 'react'
import { useThemeUI } from '@theme-ui/core'
import BoringAvatar from 'boring-avatars'

import styles from './style'

const Avatar = forwardRef(function Avatar(
    { as: Tag = 'span', size = '100%', variant = 'beam', ring = 'ringLight', name, ...rest },
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
        <Tag ref={ref} sx={styles.wrapper(ring)} {...rest}>
            <BoringAvatar name={name} size={size} variant={variant} colors={colorScheme} />
        </Tag>
    )
})

export default Avatar
