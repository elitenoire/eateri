const styles = {
    link: ({ color, hoverColor }) => ({
        '&,&:active,&:visited': {
            color: color || 'inherit',
        },
        ...(hoverColor && {
            '&:hover': {
                color: hoverColor,
            },
        }),
    }),
}

export default styles
