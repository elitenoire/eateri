import { useState, useMemo } from 'react'
import Star from './star'

import styles from './style'

export default function StarRating({ noOfStars = 5, selectedRating = 0, ...rest }) {
    const [noOfHoveredStars, setNoOfHoveredStars] = useState(0)
    const [selectedStars, setSelectedRating] = useState(() => Math.round(selectedRating))

    const stars = useMemo(() => Array.from(Array(noOfStars), (_, i) => i + 1), [noOfStars])

    return (
        <div sx={styles.rating}>
            {stars.map(i => (
                <Star
                    key={i}
                    id={i}
                    fill={i <= (Math.max(noOfHoveredStars, selectedStars) || 0)}
                    dim={i > noOfHoveredStars && i <= selectedStars && noOfHoveredStars}
                    setNoOfHoveredStars={setNoOfHoveredStars}
                    setSelectedRating={setSelectedRating}
                    {...rest}
                />
            ))}
        </div>
    )
}
