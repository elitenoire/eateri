import { useRouter } from 'next/router'
import { Text, Heading } from '~@core/typography'

import { styles } from './style'

export default function MenuTitle() {
    const router = useRouter()
    const title = 'Pizza'

    return (
        <Heading as="h2" variant="h3" mb={0} sx={styles.titleMenu}>
            Menu{' '}
            <Text as="span" size={1} color="primary.base" italic>
                {title}
            </Text>
        </Heading>
    )
}
