import { Flipped } from 'react-flip-toolkit'
import { Card } from '@theme-ui/components'
import { Reveal } from '~@core/general/Reveal'
import styles from './style'

export default function MorphCard({ bg, color, svg, title, className = '', children }) {
    return (
        <Flipped flipId={`sc-${title}-bg`}>
            <Card as="article" title={title} bg={bg} color={color} sx={styles.morphCard} className={className}>
                <Reveal as="div" threshold={0.15} duration={500} cascade whenInView>
                    {children}
                </Reveal>
                {svg}
            </Card>
        </Flipped>
    )
}
