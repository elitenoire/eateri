/** @jsx jsx */
import { jsx } from '@theme-ui/core'

import styles from './styles'

const MapLoading = () => (
    <div sx={styles.errorOverlay}>
        <span>🗺 Loading...</span>
        <noscript>Sorry, (╥_╥) maps need js enabled</noscript>
    </div>
)

export default MapLoading
