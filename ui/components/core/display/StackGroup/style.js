const styles = {
    groupList: {
        display: 'flex',
        alignItems: 'center',
    },
    listItem: ({ unstack, radius, gap, borderColor, size }) => ({
        display: 'flex',
        alignItems: 'center',
        borderRadius: radius,
        boxShadow: `0 0 0 2px ${unstack ? 'transparent' : borderColor}`,
        ...(size && { size }),
        '&:not(:last-of-type)': {
            marginRight: `${unstack ? gap || 0 : `${-(gap || 8)}px`}`,
        },
    }),
    excessItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        size: '100%',
        borderRadius: 'inherit',
        bg: 'grayLight',
        fontSize: 0,
        fontWeight: 'medium',
    },
}

export default styles
