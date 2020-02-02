/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { keyframes } from '@emotion/core'

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

const LoadingDots = () => (
    <span
        sx={{
            '& > span': {
                animation: `${blink} 1.4s ease infinite`,
                animationFillMode: 'both',
            },
            '& > span:nth-child(2)': {
                animationDelay: '0.2s',
            },
            '& > span:nth-child(3)': {
                animationDelay: '0.4s',
            },
        }}
    >
        <span>•</span>
        <span>•</span>
        <span>•</span>
    </span>
)

export default LoadingDots
