/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Icon } from '~@/general'

const styles = {
    marker: {
        color: 'primary.base',
        size: '2.5em',
        placeSelf: 'end center',
        svg: {
            size: 'fluid',
        },
    },
}

const MapMarker = () => (
    <div sx={styles.marker}>
        <Icon name="location" />
    </div>
)

export default MapMarker
