/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Text } from '~@/typography'
import Button from '~@/general/Button'
import styles from './style'
import url from '~/public/dish.png'

const stopBubbling = e => {
    e.stopPropagation()
}
const CarouselCard = ({ data, isMobile }) => {
    const addToBag = e => console.log('ADDED TO BAG')

    return (
        <div sx={styles.carouselCard}>
            <img src={url} alt={data.name} />
            <div>
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
