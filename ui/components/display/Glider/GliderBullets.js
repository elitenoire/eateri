import { useGlideTo, useIndex } from './hooks'

import { bulletStyles } from './style'

const getColor = (i, _colors) => {
    const _color = 'grayDark'

    if (Array.isArray(_colors) && _colors.length !== 0) {
        return _colors[i] || _color
    }

    return _colors || _color
}

function GliderBullets({ count, colors }) {
    const bullets = [...Array(count)]

    const glideTo = useGlideTo()
    const { index } = useIndex()

    const handleClick = i => () => {
        if (glideTo) {
            glideTo(i)
        }
    }

    return (
        <div className="glider--bullets" sx={bulletStyles.wrapper}>
            {bullets.map((_, i) => (
                <button
                    key={i}
                    type="button"
                    sx={bulletStyles.bullet(getColor(i, colors))}
                    aria-label={`Go to ${i + 1}`}
                    title={`Go to ${i + 1}`}
                    data-isactive={index === i ? '' : null}
                    onClick={handleClick(i)}
                />
            ))}
        </div>
    )
}

export default GliderBullets
