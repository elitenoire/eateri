/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { memo } from 'react'
import { Heading, Text } from '~@/typography'
import { Icon, Button, Reveal, popIn, fadeInRight } from '~@/general'
import { InputBar } from '~@/form'
import { SocialMedia } from '~@/other'
import useScrollTo from '~/hooks/useScrollTo'

import FooterWithLinks from './FooterWithLinks'
import FooterWithMap from './FooterWithMap'
import { HASH_ID_CONTACT } from '~/constants'

import styles from './style'

function Footer({ hasMap, mini }) {
    const { linkScroll } = useScrollTo({ offset: 20 })

    return (
        <footer sx={styles.footer}>
            {!mini && (
                <>
                    <div sx={styles.footerSlide}>
                        <div sx={styles.container}>
                            <div sx={styles.newsletterWrap} data-footer-compact={hasMap ? null : ''}>
                                <Reveal motion={popIn} delay={400} whenInView>
                                    <>
                                        <div sx={styles.iconWrap}>
                                            <Icon name="newsletter" />
                                        </div>
                                    </>
                                </Reveal>
                                <div sx={styles.flexWrap}>
                                    <Reveal as="div" sx={styles.newsletterText} motion={fadeInRight} cascade whenInView>
                                        <Heading variant="h2" title color="primary.base">
                                            Don't miss out!
                                        </Heading>
                                        <Text size={3}>
                                            Stay up-to-date with our exciting news and exclusive deals.
                                        </Text>
                                        <Text size={3}>No spam, we promise.</Text>
                                    </Reveal>
                                    <div sx={styles.formWrap}>
                                        <InputBar sx={styles.inputBar} placeholder="Your email...">
                                            <Button>Subscribe</Button>
                                        </InputBar>
                                    </div>
                                </div>
                            </div>
                            <div
                                id={HASH_ID_CONTACT}
                                sx={styles.footerContentWrap}
                                data-footer-compact={hasMap ? null : ''}
                            >
                                {hasMap ? (
                                    <FooterWithMap linkScroll={linkScroll} />
                                ) : (
                                    <Reveal whenInView threshold={0.2}>
                                        <>
                                            <FooterWithLinks linkScroll={linkScroll} />
                                        </>
                                    </Reveal>
                                )}
                            </div>
                        </div>
                    </div>
                    {hasMap && (
                        <div sx={styles.footerReveal}>
                            <div sx={styles.footerRevealPane} />
                            <div sx={styles.footerRevealContent}>
                                <Text weight="bold" variant="title">
                                    &#128081; The <span className="underline">Messi</span> of Great Food &#128081;
                                </Text>
                            </div>
                        </div>
                    )}
                </>
            )}
            <div sx={styles.copywright} data-footer-sticky={!mini && hasMap ? '' : null}>
                <div sx={styles.container}>
                    <Text size={0} spacing="wide">
                        © 2021 Eateri Inc by{' '}
                        <Text
                            as="a"
                            color="primary.base"
                            weight="bold"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.github.com/elitenoire"
                        >
                            @elitenoire
                        </Text>{' '}
                        · Made with &#128153;
                    </Text>
                    <SocialMedia sx={styles.socialMediaWrap} />
                </div>
            </div>
        </footer>
    )
}

export default memo(Footer)
