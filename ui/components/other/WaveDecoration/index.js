import styles from './style'

import WaveSvg from '~/public/inlineSvg/wave-curve.svg'
import ForkSvg from '~/public/inlineSvg/fork.svg'
import SpoonSvg from '~/public/inlineSvg/spoon.svg'
import KnifeSvg from '~/public/inlineSvg/knife.svg'

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
