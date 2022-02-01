import { keyframes } from '@emotion/react'

// https://github.com/jferrettiboke/ds/blob/master/src/components/LoadingDots.js

const blink = keyframes`
    0% {
    	opacity: 0.2;
    }
    20% {
    	opacity: 1;
    }
    100% {
    	opacity: 0.2;
    }
`
const style = {
    fontSize: 7,
    '& > span': {
        animation: `${blink} 1.4s ease infinite`,
        animationFillMode: 'both',
    },
    '& > span:nth-of-type(2)': {
        animationDelay: '0.2s',
    },
    '& > span:nth-of-type(3)': {
        animationDelay: '0.4s',
    },
}

function LoadingDots() {
    return (
        <span sx={style}>
            <span>•</span>
            <span>•</span>
            <span>•</span>
        </span>
    )
}

export default LoadingDots
