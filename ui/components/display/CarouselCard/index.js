/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import Text from '~@/typography/Text'
import Button from '~@/general/Button'
import styles from './style'
import url from '~/public/dish.png'

const CarouselCard = ({ data, isMobile }) => {
    const addToCart = e => console.log('ADDED TO CART')

    const stopBubbling = e => {
        e.stopPropagation()
    }

    return (
        <div sx={styles.carouselCard}>
            <img src={url} alt={data.name} />
            <div>
                {isMobile && <Text>{`₦${data.price}`}</Text>}
                <Text truncate={3}>{data.name}</Text>
                {isMobile && (
                    <Button
                        brand="solid"
                        size="sm"
                        color="primary"
                        icon="cart"
                        ariaLabel="Add to cart"
                        onClick={addToCart}
                        onMouseDown={stopBubbling}
                        onTouchStart={stopBubbling}
                    />
                )}
            </div>
        </div>
    )
}

export default CarouselCard
