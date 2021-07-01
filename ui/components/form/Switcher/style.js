import { alpha } from '@theme-ui/color'

const styles = {
    wrapper: ({ color, outline, simple }) => ({
        position: 'relative',
        display: 'inline-block',
        // py: 1,
        // px: 3,
        ...(simple && {
            'input[type="checkbox"]:checked + label': {
                bg: `${color}.base`,
                borderColor: `${color}.base`,
            },
        }),
        'input[type="checkbox"]:checked + label:before': {
            transform: simple ? 'translateX(100%)' : 'translateX(92%)',
            ...(simple && outline && { bg: 'white' }),
        },
        'input[type="checkbox"]:focus + label': {
            ...(!outline && !simple && { borderColor: `${color}.base` }),
            boxShadow: t => `0 0 0 3px ${t.colors[color].light}`,
        },
        'input[type="checkbox"]:checked + label > span:first-of-type,label > span:last-of-type': {
            opacity: 0.5,
        },
        'input[type="checkbox"]:checked + label > span:last-of-type': {
            opacity: 1,
        },
        'input[type="checkbox"]:disabled + label,input[type="checkbox"][aria-disabled="true"] + label': {
            opacity: 0.4,
            cursor: 'not-allowed',
        },
    }),
    label: ({ color, radius, outline, simple }) => ({
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        color: `${color}.hover`,
        userSelect: 'none',
        borderWidth: '1px',
        borderStyle: 'solid',
        // borderColor: outline ? `${color}.base` : 'transparent',
        borderRadius: radius,
        ...(simple
            ? {
                  borderColor: outline ? 'black' : 'transparent',
                  bg: outline ? 'transparent' : 'gray',
                  width: '3.5em',
                  height: '2em',
                  transition: 'background-color 0.3s, border-color 0.3s',
              }
            : {
                  borderColor: outline ? `${color}.base` : 'transparent',
                  bg: outline ? 'transparent' : `${color}.pale`,
                  px: '1.25em', // 0.5em + 0.75em
                  py: '0.85em', // 0.6em + 0.25em
              }),
        ...(!outline && { boxShadow: 'inner' }),
        '::before': {
            position: 'absolute',
            content: '""',
            borderRadius: 'inherit',
            top: '0.3em',
            bottom: '0.3em',
            ...(simple
                ? {
                      bg: outline ? `${color}.base` : 'white',
                      left: '0.3em',
                      right: '50%',
                      ...(!outline && { boxShadow: 'lg' }),
                      transitionProperty: outline ? 'transform,background-color' : 'transform',
                  }
                : {
                      bg: outline ? `${color}.pale` : 'white',
                      left: 2,
                      right: '48%',
                      boxShadow: t =>
                          `0 0 0 0.1875em transparent, 0 0.375em 0.375em ${alpha(`${color}.base`, 0.15)(t)}`,
                      transitionProperty: 'transform',
                  }),
            transitionDuration: '0.3s',
            // transition: 'transform 0.3s',
        },
        span: {
            zIndex: 1,
            transition: 'opacity 0.3s',
        },
        'span:last-of-type': {
            ml: 6,
        },
    }),
}

export default styles
