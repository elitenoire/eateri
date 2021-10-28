import styles from './style'

import { ReactComponent as WaveSvg } from '~/public/inlineSvg/wave-curve.svg'
import { ReactComponent as ForkSvg } from '~/public/inlineSvg/fork.svg'
import { ReactComponent as SpoonSvg } from '~/public/inlineSvg/spoon.svg'
import { ReactComponent as KnifeSvg } from '~/public/inlineSvg/knife.svg'

function WaveDecoration({ color }) {
    return (
        <div className="wave-decoration" sx={styles.wrapper}>
            <WaveSvg sx={styles.svgWave(color)} />
            <div sx={styles.svgCutlery}>
                <ForkSvg />
                <KnifeSvg />
                <SpoonSvg />
            </div>
        </div>
    )
}

export default WaveDecoration
