import { keyframes } from '@emotion/react'
import strip1Url from '~/public/strip-1.png'
import strip2Url from '~/public/strip-2.png'

const slide = keyframes`
    0% {
        transform: translate3d(0, 0, 0);
    }
    100% {
        transform: translate3d(-40%, 0, 0);
    }
`

const styles = {
    section: {
        pt: [null, null, 7, null, 13],
    },
    subText: {
        position: 'relative',
        display: 'inline-block',
        textAlign: 'center',
        left: '100%',
        transform: 'translateX(-100%)',
        opacity: 0.7,
        pr: 7,
        mt: 6,
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        '&,&:visited': {
            color: 'textLight',
        },
        '&:hover': {
            color: 'accent.hover',
            pr: 6,
            svg: {
                color: 'textLight',
                opacity: 0.3,
            },
        },
        span: {
            display: 'block',
            lineHeight: 1,
        },
        svg: {
            position: 'absolute',
            right: 0,
            top: '-0.35em',
            fontSize: '3.5em',
            color: 'accent.base',
            zIndex: -1,
            transition: 'inherit',
        },
    },
    stripWrapper: {
        position: 'relative',
        overflow: 'hidden',
        mx: ['bodyNegative', null, '-9.52%', '-12.5%'], // reverses container's padding
        ':before,:after': {
            content: '""',
            width: '2%',
            position: 'absolute',
            top: 0,
            bottom: 0,
            zIndex: 1,
            backgroundImage: t => `linear-gradient(to right, ${t.colors.white} 0%, transparent 100%)`,
        },
        ':before': {
            left: 0,
        },
        ':after': {
            right: 0,
            transform: 'rotateZ(180deg)',
        },
    },
    strip: {
        willChange: 'transform',
        backfaceVisibility: 'hidden',

        backgroundRepeat: 'repeat-x',
        backgroundSize: 'contain',

        width: 'calc(63em * 2.5)', // 1890px -> by 2.5, larger screens don't see cutoff
        height: '9em', // 270px -> 7:1 aspect ratio
        mb: 7,

        '&[data-strip-left]': {
            backgroundImage: `url('${strip1Url}')`,
            animation: `${slide} 17s linear infinite`,
        },
        '&[data-strip-right]': {
            backgroundImage: `url('${strip2Url}')`,
            animation: `${slide} 17s linear reverse infinite`,
        },

        '&[data-strip-paused]': {
            animationPlayState: 'paused',
        },
    },
}

export default styles
