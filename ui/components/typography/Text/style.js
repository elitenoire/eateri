const styles = {
    truncate: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
    trim: {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    },
    overflow: {
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '5px',
            height: '5px',
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent',
        },
    },
}

export default styles
