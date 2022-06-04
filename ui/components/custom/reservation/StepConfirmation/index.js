import { useFormContext } from 'react-hook-form'
import { Image } from '@theme-ui/components'

import { Divider, Icon } from '~@core/general'
import { Text } from '~@core/typography'

import svgUrl from '~/public/reserve-badge.svg'

import styles from './style'
import { useStyle } from '../context'

function StepConfirmation() {
    const { getValues } = useFormContext()
    const values = getValues()
    const { styleProp } = useStyle()

    return (
        <div sx={styles.layout} {...styleProp}>
            <div sx={styles.iconWrap} {...styleProp}>
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
            <div sx={styles.detailsWrap} {...styleProp}>
                <div sx={styles.details}>
                    <div>
                        <Text size={0} weight="bold">
                            Party Size
                        </Text>
                        <Text weight="bold">{values.guest}</Text>
                    </div>
                    <Divider my={1} mx={2} vertical />
                    <div>
                        <Text size={0} weight="bold">
                            Date
                        </Text>
                        <Text weight="bold">{values.date?.toDateString()}</Text>
                    </div>
                    <Divider my={1} mx={2} vertical />
                    <div>
                        <Text size={0} weight="bold">
                            Time
                        </Text>
                        <Text weight="bold">{values.time}pm</Text>
                    </div>
                </div>
                <Image src={svgUrl} alt="" sx={styles.svgImage} />
            </div>
            {values.note && (
                <div sx={styles.noteWrap} {...styleProp}>
                    <Text variant="badge" color="accent.hover" style={styles.noteBadge} {...styleProp}>
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
