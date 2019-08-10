import is, { match } from 'styled-is'
import styled, { css, keyframes } from 'styled-components'

const spin = keyframes`
{
    0% { transform: rotate(0);}
    100% { transform: rotate(360deg);}
}
`

const Base = styled.button.attrs(({ theme, color }) => ({
    cssColor: theme.colors[color],
}))`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    transition: all 0.2s ease-in;
    ${is('curved')`
        border-radius: 5px;
    `}
    ${is('raised')`
        box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.25);
    `}
    :disabled {
        cursor: not-allowed;
        opacity: 0.5;
        box-shadow: none !important;
    }
    svg {
        fill: currentColor;
        width: 1em;
        height: 1em;
    }
    ${match('variant', 'solid')`
    ${({ askew, hasShadow, cssColor }) => css`
        &,
        :disabled:hover {
            background: ${cssColor[5]};
            color: white;
        }
        :hover,
        :active {
            background: ${cssColor[7]};
            box-shadow: none;
        }
        ${(askew &&
            css`
                box-shadow: 8px 8px 0 ${cssColor[1]};
                margin-right: 8px;
                margin-bottom: 8px;
            `) ||
            (hasShadow &&
                css`
                    box-shadow: ${cssColor[4]} 0px 13px 10px -8px;
                `)}
    `}
    `}
    ${match('variant', 'outline')`
    ${({ hasShadow, cssColor }) => css`
        border: 2px solid ${cssColor[5]};
        &,
        :disabled:hover {
            color: ${cssColor[5]};
            background: transparent;
        }
        ${hasShadow
            ? css`
                  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
                  :hover,
                  :active {
                      box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
                      background: ${cssColor[1]};
                  }
              `
            : css`
                  :hover,
                  :active {
                      background: ${cssColor[5]};
                      color: white;
                  }
              `}
    `}
    `}
`

export const Button = styled(Base)`
    ${({
        size,
        theme: {
            sizes: { button },
        },
    }) =>
        css`
            padding: ${button[size]}em ${button[size] * 2}em;
        `};
    letter-spacing: 2px;
    text-transform: uppercase;
    width: ${props => (props.fluid ? '100%' : 'initial')};
    font-weight: 700;
    .icon-left {
        margin-right: 0.5em;
    }
    .icon-right {
        margin-left: 0.5em;
    }
    .loading {
        animation: ${spin} 1s linear infinite;
        margin: 0 0.15em;
        ${({ size, variant }) =>
            variant !== 'link' &&
            (size === 0 || size === 1
                ? css`
                      width: 1.5em;
                      height: 1.5em;
                      margin: -0.25em;
                  `
                : css`
                      width: 2em;
                      height: 2em;
                      margin: -0.5em;
                  `)}
    }
    ${is('rounded')`
        border-radius: 50px;
    `}
    ${match('variant', 'default')`
        ${({ theme: { colors }, cssColor }) => css`
            &,
            :disabled:hover {
                background: ${colors.gray[0]};
                color: ${cssColor[5]};
            }
            :hover,
            :active {
                background: ${colors.gray[1]};
                color: ${cssColor[7]};
            }
        `}
    `}
    ${match('variant', 'link')`
        ${({ cssColor }) => css`
            background: transparent;
            padding: 0 0.15em;
            height: initial;
            text-transform: none;
            text-decoration: underline;
            box-shadow: none !important;
            border-radius: 0;
            &,
            :disabled:hover,
            :visited {
                color: ${cssColor[5]};
            }
            :hover,
            :active {
                color: ${cssColor[7]};
            }
        `}
    `}
`

export const IconButton = styled(Base)`
    ${({
        size,
        theme: {
            sizes: { icon },
        },
    }) => css`
        padding: ${icon[size] - 0.6}em;
        svg {
            width: ${icon[size]}em;
            height: ${icon[size]}em;
            margin: -${(icon[size] - 1) / 2}em;
        }
    `}
    ${is('circle')`
        border-radius: 50%;
    `}
    ${match('variant', 'default')`
        ${({ theme: { colors }, cssColor }) => css`
            background: transparent;
            color: ${colors.gray[9]};
            :hover {
                background: ${cssColor[0]};
                color: ${cssColor[5]};
            }
        `}
    `}
`
