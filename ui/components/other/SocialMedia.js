import React from 'react'
import { Icon } from '~@/general'

const SocialMedia = () => (
    <>
        <a
            target="_blank"
            rel="nofollow noreferrer noopener"
            href="https://github.com/elitenoire/eateri"
            aria-label="See source code"
            title="See source code"
        >
            <Icon name="github" />
        </a>
        <a href="# " aria-label="See our tweets" title="See our tweets">
            <Icon name="twitter" />
        </a>
        <a href="# " aria-label="See instagram gallery" title="See instagram gallery">
            <Icon name="instagram" />
        </a>
    </>
)

export default SocialMedia
