import styled, { css } from 'styled-components'
import is from 'styled-is'

const g =
    'linear-gradient(to left top, rgb(255, 192, 2), rgb(255, 200, 0), rgb(254, 209, 0), rgb(253, 217, 0), rgb(252, 226, 5))'

export const Container = styled.div`
    ${({
        theme: {
            colors: { primary },
        },
    }) => css`
        height: 100%;
        background-image: ${g};
        background-image: linear-gradient(to left, ${primary[5]}, ${primary[6]});
        ${is('pastel')`
            background: ${primary[1]};
        `}
    `}
`

export const PageWrap = styled.div`
    height: 100%;
    background: white;
    transform-origin: 50% 50%;
    border-radius: 0;
    .hide-overflow {
        position: relative;
        overflow: auto;
        height: inherit;
        border-radius: inherit;
        z-index: 0;
    }
    ${({ isOpen, theme: { colors } }) =>
        isOpen &&
        css`
            position: relative;
            cursor: pointer;
            z-index: 1300;
            border-radius: 30px;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 18px 48px -12px;
            transform: translate3d(80%, 0, -800px) !important;
            transition: transform 0.5s ease 0s !important;
            overflow: initial !important;
            ::before,
            ::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border-radius: inherit;
            }
            ::before {
                transform: translate3d(-8%, 0, -300px) rotateY(5deg);
                background: ${colors.primary[1]};
                opacity: 0.9;
            }
            ::after {
                transform: translate3d(-16%, 0, -600px) rotateY(2.5deg);
                background: rgba(255, 255, 255, 0.4);
            }
            .hide-overflow {
                overflow: hidden;
                pointer-events: none;
                :focus {
                    box-shadow: none;
                }
            }
        `}
`
