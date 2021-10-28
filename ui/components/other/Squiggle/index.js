import { Box } from '@theme-ui/components'
import styles from './style'

import { ReactComponent as SquiggleSvg } from '~/public/inlineSvg/squiggle.svg'
import { ReactComponent as Squiggle2Svg } from '~/public/inlineSvg/squiggle-2.svg'
import { ReactComponent as Squiggle3Svg } from '~/public/inlineSvg/squiggle-3.svg'

const squiggles = {
    1: SquiggleSvg,
    2: Squiggle2Svg,
    3: Squiggle3Svg,
}

export default function Squiggle({ color, bg = 'primary.base', size = null, shape = null, design = 1, ...props }) {
    const SquiggleDesign = squiggles[design]
    return (
        <Box bg={bg} color={color} data-shape={shape} data-size={size} sx={styles.shape} {...props}>
            <SquiggleDesign sx={styles.squiggle} />
        </Box>
    )
}
