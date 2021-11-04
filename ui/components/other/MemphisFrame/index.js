import styles from './style'

import { ReactComponent as MArch } from '~/public/inlineSvg/m-arch.svg'
import { ReactComponent as MBean } from '~/public/inlineSvg/m-bean.svg'
import { ReactComponent as MWing } from '~/public/inlineSvg/m-wing.svg'

// Only using inline-svgs to make it themeable otherwise
// for large svgs, loading as images is preferred.
function MemphisFrame({ children, ...rest }) {
    return (
        <div sx={styles.frame} {...rest}>
            <MWing className="m m-wing m-wing--left" />
            <MWing className="m m-wing m-wing--right" />
            <MBean className="m m-bean" />
            <MArch className="m m-arch" />
            <div className="m-wrapper">{children}</div>
        </div>
    )
}

export default MemphisFrame
