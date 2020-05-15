/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import styles from './style'

import MArch from '~/public/inlineSvg/m-arch.svg'
import MBean from '~/public/inlineSvg/m-bean.svg'
import MWing from '~/public/inlineSvg/m-wing.svg'

// Only using inline-svgs to make it themeable otherwise
// for large svgs, loading as images is preferred.
const MemphisFrame = ({ children }) => (
    <div sx={styles.frame}>
        <MWing className="m m-wing m-wing--left" />
        <MWing className="m m-wing m-wing--right" />
        <MBean className="m m-bean" />
        <MArch className="m m-arch" />
        <div className="m-wrapper">{children}</div>
    </div>
)

export default MemphisFrame
