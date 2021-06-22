/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Box } from '@theme-ui/components'
import styles from './style'

import SquiggleSvg from '~/public/inlineSvg/squiggle.svg'
import Squiggle2Svg from '~/public/inlineSvg/squiggle-2.svg'

const squiggles = {
    1: SquiggleSvg,
    2: Squiggle2Svg,
}

export default function Squiggle({ color, bg = 'primary.base', size = null, shape = null, design = 1, ...props }) {
    const SquiggleDesign = squiggles[design]
    return (
        <Box bg={bg} color={color} data-shape={shape} data-size={size} sx={styles.shape} {...props}>
            <SquiggleDesign sx={styles.squiggle} />
        </Box>
    )
}
