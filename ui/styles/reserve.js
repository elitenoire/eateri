const style = {
    flex: {
        display: 'flex',
        gap: 7,
        pt: 9,
        pb: 11,
        '& > *': {
            flex: 1,
            minHeight: ['8em', null, null, '10em'],
            borderRadius: 'default',
        },
    },
    imageWrap: {
        position: 'relative',
        display: ['none', null, null, 'block'],
        bg: 'gray',
        overflow: 'hidden',
    },
    enquiryBox: {
        flexFlow: 'wrap-reverse',
        p: 6,
        columnGap: 4,
        bg: 'primary.light',
        ':hover': {
            bg: 'highlight.pale',
        },
        svg: {
            fontSize: 9,
            fill: 'primary.hover',
        },
    },
}

export default style
