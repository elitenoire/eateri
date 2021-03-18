/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import Link from 'next/link'
import { Flipped } from 'react-flip-toolkit'
import { Container, Box, Card } from '@theme-ui/components'
import { Heading, Text } from '~@/typography'
import { Reveal } from '~@/general/Reveal'
import styles from './style'

const onStartImmediate = el => (el.style.zIndex = 10)

const onComplete = el => (el.style.zIndex = '')

function MorphCard({ color, svg, href, title, className = '', children }) {
    return (
        // <div title={title} sx={styles.cardWrap}>
        <Card title={title} sx={styles.morphCard} className={className}>
            <Flipped flipId={`sc-${title}-bg`} onStartImmediate={onStartImmediate} onComplete={onComplete}>
                <Box bg={color} />
            </Flipped>
            <Reveal as="div" threshold={0.1} duration={500} cascade whenInView>
                {children}
            </Reveal>
            <Flipped flipId={`sc-${title}-svg`} onStartImmediate={onStartImmediate} onComplete={onComplete}>
                {svg}
            </Flipped>
        </Card>
        //     {/* <Link href={href} passHref>
        //         <a sx={styles.cardLink}>
        //             <span className="visually-hidden">{title}</span>
        //         </a>
        //     </Link>
        // </div> */}
    )
}

export default MorphCard
