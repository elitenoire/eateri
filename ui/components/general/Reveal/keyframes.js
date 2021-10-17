import { keyframes } from '@emotion/react'

export const fadeIn = keyframes`
    0% {
        opacity: 0;
        animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    100% {
        opacity: 1;
    }
`
export const fadeInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(20px);
        animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

export const fadeInRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-20px);
        animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

export const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
        animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`
export const fadeInDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-20px);
        animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`
export const fadeOutDown = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    100% {
        opacity: 0;
        transform: translateY(20px);
    }
`

export const slideUp = keyframes`
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0);
    }
`
export const slideDown = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(100%);
    }
`

// From https://github.com/Martz90/vivify
export const rollInBottom = keyframes`
	0% {
		-webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
		animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
		-webkit-transform: translateY(400px) rotate(-445deg);
		transform: translateY(400px) rotate(-445deg);
		opacity: 0;
	}
	30% {
		opacity: 1;
	}
	50% {
		-webkit-transform: translateY(-20px) rotate(-20deg);
		transform: translateY(-20px) rotate(-20deg);
	}
	100% {
		-webkit-animation-timing-function: cubic-bezier(
			0.455,
			0.03,
			0.515,
			0.955
		);
		animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
		-webkit-transform: translateY(0) rotate(0deg);
		transform: translateY(0) rotate(0deg);
	}
`
// From https://github.com/Martz90/vivify
export const popIn = keyframes`
    0% {
        -webkit-transform: scale3d(0, 0, 0);
        transform: scale3d(0, 0, 0);
        opacity: 0; }
    20% {
        opacity: 1; }
    40% {
        -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
        animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
        -webkit-transform: scale3d(1.08, 1.08, 1.08);
        transform: scale3d(1.08, 1.08, 1.08); }
    60% {
        -webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1); }
    80% {
        -webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
        -webkit-transform: scale3d(1.03, 1.03, 1.03);
        transform: scale3d(1.03, 1.03, 1.03); }
    100% {
        -webkit-animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
}
`

export const zoomInUp = keyframes`
    from {
        opacity: 0;
        transform: scale3d(0.5, 0.5, 0.5) translate3d(0, 60px, 0);
        animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }
    '60%' {
        opacity: 1;
        transform: scale3d(0.875, 0.875, 0.875) translate3d(0, -20px, 0);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
`

export const grow = keyframes`
    0% {
        opacity: 0;
        transform: translateY(10%) scale(0.7);
        animation-timing-function: ease-out;
    }
    60% {
        opacity: 1;
    }
    100% {
        transform: translateY(0) scale(1);
    }
`

export const jelly = keyframes`
    0%,
    100% {
        transform: scale(1, 1);
    }
    25% {
        transform: scale(0.9, 1.1);
    }
    50% {
        transform: scale(1.1, 0.9);
    }
    75% {
        transform: scale(0.95, 1.05);
    }
`
