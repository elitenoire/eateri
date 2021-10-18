import { useFormContext, Controller } from 'react-hook-form'
import { Image } from '@theme-ui/components'

import { Divider, Icon } from '~@/general'
import { Text } from '~@/typography'

import svgUrl from '~/public/reserve-badge.svg'

import styles from './style'

function StepConfirmation() {
    // const {} = useFormContext()
    return (
        <div sx={styles.confirmLayout}>
            <div sx={styles.confirmIcon}>
                <Icon name="reservedfill" />
            </div>
            <Text weight="bold" size={5} color="accent.dark">
                Eva Raymond
            </Text>
            <Text mx="auto" mt={2}>
                This is your reservation overview.
            </Text>
            <Text mx="auto" mb={7}>
                Now all you need to do is confirm your reservation.
            </Text>
            <div sx={styles.confirmDetailsBox}>
                <div sx={styles.confirmDetails}>
                    <div>
                        <Text size={0} weight="bold">
                            Guests
                        </Text>
                        <Text color="accent.dark" weight="bold">
                            2
                        </Text>
                    </div>
                    <Divider bg="text" my={1} mx={2} vertical />
                    <div>
                        <Text size={0} weight="bold">
                            Date
                        </Text>
                        <Text color="accent.dark" weight="bold">
                            18 Jul 2020
                        </Text>
                    </div>
                    <Divider bg="text" my={1} mx={2} vertical />
                    <div>
                        <Text size={0} weight="bold">
                            Time
                        </Text>
                        <Text color="accent.dark" weight="bold">
                            17:00pm
                        </Text>
                    </div>
                </div>
                <Image src={svgUrl} sx={styles.confirmSvg} />
            </div>
        </div>
    )
}

export default StepConfirmation
