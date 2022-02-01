import { forwardRef } from 'react'
import { a } from '@react-spring/web'

import { Text } from '~@core/typography'
import { Button, AspectImage } from '~@core/general'

import styles from './style'

import url from '~/public/dish.png'

const stopBubbling = e => {
    e.stopPropagation()
}
const addToBag = () => console.log('ADDED TO BAG')

const AnimatedText = a(Text)
const AnimatedButton = a(Button)

const CarouselCard = forwardRef(function CarouselCard({ data, isMobile, spring }, ref) {
    return (
        <a.div
            ref={ref}
            sx={styles.carouselCard}
            {...(spring && {
                style: { boxShadow: spring.shadow.to(s => `0 ${s}px ${s * 2}px ${s / 2}px rgba(0, 0, 0, 0.2)`) },
            })}
        >
            <a.div
                sx={styles.cardImage}
                {...(spring && { style: { y: spring.imageMove.to(y => `${y}%`), rotate: spring.imageRotate } })}
            >
                <AspectImage src={url} alt={data.name} />
            </a.div>
            <div sx={styles.cardContent}>
                {!isMobile && (
                    <Text line="snug" truncate={3}>
                        {data.name}
                    </Text>
                )}
                {isMobile && (
                    <a.div {...(spring && { style: { y: spring.contentMove.to(y => `${y}em`) } })}>
                        <Text line="tight" weight="bold" size={3} spacing="normal" color="textOnSecondary" truncate>
                            {data.name}
                        </Text>
                        <AnimatedText
                            size={1}
                            mt={3}
                            mb={6}
                            line="snug"
                            truncate={3}
                            color="whiteFade.70"
                            {...(spring && {
                                style: { y: spring.detailMove.to(y => `${y}em`), opacity: spring.detailOpacity },
                            })}
                        >
                            {data.description}
                        </AnimatedText>
                        <AnimatedButton
                            size="lg"
                            icon="add"
                            ariaLabel="Add to bag"
                            onClick={addToBag}
                            onMouseDown={stopBubbling}
                            onTouchStart={stopBubbling}
                            {...(spring && { style: { opacity: spring.detailOpacity, scale: spring.buttonScale } })}
                        >
                            {`₦${data.price}`}
                        </AnimatedButton>
                    </a.div>
                )}
            </div>
        </a.div>
    )
})

export default CarouselCard
