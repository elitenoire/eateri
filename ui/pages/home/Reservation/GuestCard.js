/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Avatar, Image } from '@theme-ui/components'
import { Text } from '~@/typography'
import styles from './style'

import imgUrl from '~/public/c-rice.jpg'
import svgUrl from '~/public/peep8.svg'

const GuestCard = ({ showOverlay }) => (
    <div sx={styles.guestCard} data-has-overlay={showOverlay ? '' : null}>
        <Avatar src={imgUrl} sx={styles.guestCardAvatar} />
        <div>
            <Text size={1} weight="bold">
                Eva Raymond
            </Text>
            <Text size={1}>ev****r**d@gm**l</Text>
            <Text size={0} mt={2} decoration="underline">
                Not you?
            </Text>
        </div>
        <Image src={svgUrl} sx={styles.guestCardSvg} />
        {showOverlay && (
            <div sx={styles.guestCardOverlay}>
                <Text weight="bold" decoration="underline">
                    Continue as user
                </Text>
            </div>
        )}
    </div>
)

export default GuestCard
