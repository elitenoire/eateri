import { Image } from '@theme-ui/components'
import { Avatar, ButtonBase, Reveal, fadeIn } from '~@core/general'
import { Text } from '~@core/typography'
import styles from './style'
import { useStyle } from '../context'

function GuestCard({ toggle, showOverlay }) {
    const { styleProp } = useStyle()
    return (
        <div sx={styles.wrapper} {...styleProp} data-overlay={showOverlay ? '' : null}>
            <Avatar name="Eva Raymond" sx={styles.avatar} />
            <div>
                <Text size={1} weight="bold">
                    Eva Raymond
                </Text>
                <Text size={1}>ev****r**d@gm**l</Text>
                <Text as={ButtonBase} size={0} mt={2} decoration="underline" onClick={toggle}>
                    Not you?
                </Text>
            </div>
            <Image alt="" src="/peep8.svg" sx={styles.svgImage} />
            {showOverlay && (
                <Reveal motion={fadeIn}>
                    <div sx={styles.overlay} {...styleProp}>
                        <Text as={ButtonBase} size={1} weight="bold" decoration="underline" onClick={toggle}>
                            Continue with profile
                        </Text>
                    </div>
                </Reveal>
            )}
        </div>
    )
}

export default GuestCard
