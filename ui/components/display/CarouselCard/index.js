import { Text } from '~@/typography'
import { Button, AspectImage } from '~@/general'

import styles from './style'

import url from '~/public/dish.png'

const stopBubbling = e => {
    e.stopPropagation()
}
const addToBag = () => console.log('ADDED TO BAG')

function CarouselCard({ data, isMobile }) {
    return (
        <div sx={styles.carouselCard}>
            <div sx={styles.cardImage}>
                <AspectImage src={url} alt={data.name} />
            </div>
            <div sx={styles.cardContent}>
                {isMobile && <Text>{`₦${data.price}`}</Text>}
                <Text line="snug" truncate={3}>
                    {data.name}
                </Text>
                {isMobile && (
                    <Button
                        brand="solid"
                        size="sm"
                        color="primary"
                        icon="bag"
                        ariaLabel="Add to bag"
                        onClick={addToBag}
                        onMouseDown={stopBubbling}
                        onTouchStart={stopBubbling}
                    />
                )}
            </div>
        </div>
    )
}

export default CarouselCard
