import styled, { css, keyframes } from 'styled-components'
import { up } from 'styled-breakpoints'

const upwards = keyframes`
from {
    transform: translateY(-100%);
    opacity: 0;
}
to {
    transform: translateY(0);
    opacity: 1;
}
`

const downwards = keyframes`
from {
    transform: translateY(100%);
    opacity: 0;
}
to {
    transform: translateY(0);
    opacity: 1;
}
`
export const StyledHeader = styled.header`
    ${({ inlineHeight }) =>
        inlineHeight &&
        css`
            height: ${inlineHeight}px;
        `}
`
export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 5px 2%;
    background: white;
    z-index: 3;
    transition: box-shadow 0.2s ease-in-out;
    ${props =>
        props.showHeaderShadow &&
        css`
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        `}
    ${up('sm')} {
        padding: 10px 2%;
    }
    ${up('lg')} {
        justify-content: flex-end;
    }
    & > :nth-child(1) {
        ${up('lg')} {
            margin-right: auto;
        }
    }
    & > :nth-child(2) {
        order: -1;
        ${up('lg')} {
            display: none;
        }
    }
`

export const Nav = styled.nav`
    ${({
        theme: {
            colors: { primary, gray },
        },
    }) => css`
        display: none;
        ${up('lg')} {
            display: initial;
        }
        ul {
            list-style: none;
            & > :nth-child(odd) {
                animation: ${upwards} 1s forwards;
            }
            & > :nth-child(even) {
                animation: ${downwards} 1s forwards;
            }
            li {
                display: inline-block;
                padding: 0 10px;
                margin: 0 10px;
            }
            li:not(:last-of-type) a {
                transition: all 0.3s ease;
                position: relative;
                ::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    bottom: -5px;
                    width: 110%;
                    height: 2px;
                    background-color: ${primary[5]};
                    transform-origin: center;
                    transform: translate(-50%, 0) scaleX(0);
                    transition: transform 0.3s ease-in-out;
                }
                :hover::before {
                    transform: translate(-50%, 0) scaleX(1);
                }
            }
            li:last-child a {
                border: 1.5px solid;
                border-radius: 5px;
                padding: 5px 10px;
                transition: all 0.3s ease-in;
                :hover {
                    border: 4.5px solid ${primary[4]};
                    color: ${primary[5]};
                    background: ${gray[9]};
                    background-clip: padding-box;
                    border-radius: 20px/10px;
                    margin: -3px;
                }
            }
            a {
                text-decoration: none;
                color: inherit;
            }
        }
    `}
`
export const LogoBox = styled.div`
    display: flex;
    margin-right: -1.8em;
    a {
        display: inline-flex;
        align-items: center;
        svg:nth-child(1) {
            width: 2em;
            height: 2em;
            ${up('sm')} {
                margin-right: 0;
                width: 2.5em;
                height: 2.5em;
            }
        }
        svg:nth-child(2) {
            display: none;
            fill: currentColor;
            ${up('sm')} {
                display: initial;
                width: 6em;
                height: auto;
            }
        }
    }
`
