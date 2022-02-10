import { Image } from '@theme-ui/components'
import { Avatar } from '~@core/general'
import { Text } from '~@core/typography'
import styles from './style'

function GuestCard({ showOverlay }) {
    return (
        <div sx={styles.guestCard} data-has-overlay={showOverlay ? '' : null}>
            <Avatar name="Eva Raymond" sx={styles.guestCardAvatar} />
            <div>
                <Text size={1} weight="bold">
                    Eva Raymond
                </Text>
                <Text size={1}>ev****r**d@gm**l</Text>
                <Text size={0} mt={2} decoration="underline">
                    Not you?
                </Text>
            </div>
            <Image alt="" src="/peep8.svg" sx={styles.guestCardSvg} />
            {showOverlay && (
                <div sx={styles.guestCardOverlay}>
                    <Text weight="bold" decoration="underline">
                        Continue as user
                    </Text>
                </div>
            )}
        </div>
    )
}

export default GuestCard
