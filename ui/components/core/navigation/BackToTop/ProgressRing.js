import { a } from '@react-spring/web'

import styles from './style'

const getValueNow = max => value => Math.min(100, Math.round((value / max.get()) * 1000) / 10)

const getOffset = (max, circumference) => value => {
    const offset = circumference - (value / max.get()) * circumference
    return isNaN(offset) ? circumference : offset
}

function ProgressRing({ size = 50, strokeWidth = size / 12.5, value = 0, max = 100, color, ...rest }) {
    const center = size / 2
    const radius = center - strokeWidth / 2
    const circumference = 2 * Math.PI * radius

    return (
        <a.svg
            role="progressbar"
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={value.to(getValueNow(max))}
            viewBox={`0 0 ${size} ${size}`}
            {...rest}
        >
            <circle sx={styles.ringBg(color)} cx={center} cy={center} r={radius} strokeWidth={strokeWidth * 0.5} />
            <a.circle
                sx={styles.ringFill(color)}
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={value.to(getOffset(max, circumference))}
                strokeLinecap="round"
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
        </a.svg>
    )
}

export default ProgressRing
