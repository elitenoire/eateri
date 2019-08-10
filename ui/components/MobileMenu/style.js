import styled, { css } from 'styled-components'
import is from 'styled-is'
import { up } from 'styled-breakpoints'

const Container = styled.div`
    ${({
        theme: {
            colors: { primary, gray },
        },
        pastel,
        isOpen,
    }) => css`
        .bm-cross-button {
            transform: translate(calc(2vw - 100vw + 2.4em), 10px);
            display: flex;
            width: initial !important;
            height: initial !important;
            padding: 0.4em;
            button {
                border-radius: inherit;
                :focus {
                    box-shadow: 0 0 0 2px ${pastel ? gray[8] : primary[0]};
                }
            }
            svg {
                width: 1.2em !important;
                height: 1.2em !important;
                margin: -0.1em;
            }
        }
        .bm-menu-wrap {
            top: 0;
            left: 0;
            transition: initial !important;
            font-size: 0.8em;
            ${up('sm')} {
                font-size: 1em;
            }
        }
        .bm-menu {
            width: 100%;
            padding: 2.5em 0.5em 1em;
            font-size: 1.1em;
            background: transparent;
        }
        .bm-morph-shape {
            fill: transparent;
        }
        .bm-item-list {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            background: transparent;
            padding-top: 0.8em;
            opacity: ${isOpen ? 1 : 0};
            transform: ${isOpen ? 'scale(1)' : 'scale(0.8)'};
            transition: opacity 0.3s ease-in 0.1s, transform 0.3s ease-in 0.1s;
            padding-left: 5%;
            ${up('xs')} {
                padding-left: 10%;
            }
        }
        a.bm-item {
            text-decoration: none;
            margin: 0.25em 0;
            padding: 0.45em 1.3em 0.45em 0.8em;
            backface-visibility: hidden;
            font-weight: bold;
            :hover,
            :focus {
                transform: translateX(1.5em);
            }
            svg {
                margin-right: 0.5em;
                vertical-align: text-bottom;
            }
        }
        .bm-cross-button,
        .bm-item {
            ${!pastel && css`color: ${primary[0]};`}
            border-radius: 50px;
            transition: transform 0.4s;
            :hover,
            :focus {
                color: ${pastel ? primary[5] : 'white'};
                background: ${pastel ? 'rgba(255,255,255,0.5)' : primary[5]};
                box-shadow: rgba(0, 0, 0, 0.08) 0px 10px 14px -2px;
            }
        }
        ${is('pastel')`
            & + #page-wrap::before {
                background: ${primary[5]};
                opacity: 0.7;
            }
            & + #page-wrap::after {
                background: ${primary[5]};
                opacity: 0.4;
            }
        `}
    `}
`

export default Container
