import React from 'react'
import { Card as TUIcard, Heading } from '@theme-ui/components'
// import { Base, Image, Content } from './style'
// import url from '~static/dish.png'

// const Card = () => {
// 	return (
// 		<Base>
// 			<Image>
// 				<img src={url} alt="dish-01" />
// 			</Image>
// 			<Content>
// 				Beautiful food to eat. Be happy and enjoy. Taste of greek.
// 			</Content>
// 		</Base>
// 	)
// }

const Card = ({ data }) => (
    <TUIcard p={4} bg="primary.light" style={{ height: '100%' }}>
        <Heading>{data}</Heading>
    </TUIcard>
)

export default Card
