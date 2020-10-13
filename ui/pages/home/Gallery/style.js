import strip1Url from '~/public/strip-1.png'
import strip2Url from '~/public/strip-2.png'
import strip3Url from '~/public/strip-3.png'

const styles = {
    section: {
        bg: 'muted',
        pt: [null, null, 7, null, 13],
        textAlign: 'right',
        'h2, p': {
            textAlign: 'left',
        },
    },
    subText: {
        position: 'relative',
        display: 'inline-block',
        opacity: 0.5,
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
                opacity: 0.4,
            },
        },
        span: {
            display: 'block',
            lineHeight: 1,
            mr: 12,
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
        overflow: 'hidden',
        mx: ['-1.5em', null, '-9.52%', '-12.5%'], // reverses container's padding
        '& > div:nth-of-type(1)': {
            backgroundImage: `url('${strip1Url}')`,
        },
        '& > div:nth-of-type(2)': {
            backgroundImage: `url('${strip2Url}')`,
            position: 'relative',
            right: '300%', // Calc(400% - 100%)
        },
        '& > div:nth-of-type(3)': {
            backgroundImage: `url('${strip3Url}')`,
        },
    },
    strip: {
        willChange: 'transform',
        backfaceVisibility: 'hidden',

        backgroundSize: 'contain',
        backgroundRepeatY: 'no-repeat',

        width: '400%',
        height: '9em', // 180px
        mb: 7,
    },
}

export default styles
