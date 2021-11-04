import { useFormContext } from 'react-hook-form'
import { Image } from '@theme-ui/components'

import { Divider, Icon } from '~@/general'
import { Text } from '~@/typography'

import svgUrl from '~/public/reserve-badge.svg'

import styles from './style'

function StepConfirmation() {
    const { getValues } = useFormContext()
    const values = getValues()

    return (
        <div sx={styles.confirmLayout}>
            <div sx={styles.confirmIcon}>
                <Icon name="reservedfill" />
            </div>
            <Text weight="bold" size={5} transform="capitalize">
                {values.name}
            </Text>
            <Text line="snug" mx="auto" mt={2}>
                This is your reservation overview.
            </Text>
            <Text line="snug" mx="auto" mb={7}>
                Now all you need to do is confirm your reservation.
            </Text>
            <div sx={styles.confirmDetailsBox}>
                <div sx={styles.confirmDetails}>
                    <div>
                        <Text size={0} weight="bold">
                            Guests
                        </Text>
                        <Text weight="bold">{values.guest}</Text>
                    </div>
                    <Divider bg="text" my={1} mx={2} vertical />
                    <div>
                        <Text size={0} weight="bold">
                            Date
                        </Text>
                        <Text weight="bold">{values.date?.toDateString()}</Text>
                    </div>
                    <Divider bg="text" my={1} mx={2} vertical />
                    <div>
                        <Text size={0} weight="bold">
                            Time
                        </Text>
                        <Text weight="bold">{values.time}pm</Text>
                    </div>
                </div>
                <Image src={svgUrl} alt="" sx={styles.confirmSvg} />
            </div>
            {values.note && (
                <div sx={styles.confirmNoteBox}>
                    <Text variant="badge" bg={styles.confirmNoteBoxTextBg} color="accent.hover">
                        Note
                    </Text>
                    <Text size={1} mt={4} color="textFade">
                        {values.note}
                    </Text>
                </div>
            )}
        </div>
    )
}

export default StepConfirmation
