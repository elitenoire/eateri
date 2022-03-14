import { Box, Container } from '@theme-ui/components'
import { Logo } from '~@core/general'
import { Link } from '~@core/navigation'
import { Text } from '~@core/typography'
import Squiggle from '~@core/other/Squiggle'

import styles from './style'

export default function AuthLayout({ altPath, altPathName, children }) {
    return (
        <Box as="section" bg="grayLight" pt={8} pb={4} className="hide-overflow" sx={styles.section}>
            <Container variant="mini" sx={styles.container}>
                <div sx={styles.centered}>
                    <div sx={styles.decoration}>
                        <Squiggle as="span" bg="primary.light" />
                        <Squiggle as="span" bg="highlight.light" design={2} shape="diamond" />
                        <div sx={styles.logoWrap}>
                            <Logo href="/" size={6} link plain color="grayDark" hoverColor="secondary.hover" />
                        </div>
                        <Box sx={styles.frame}>
                            <div sx={styles.content}>
                                {altPath && altPathName && (
                                    <div sx={styles.nextLink}>
                                        <Link
                                            href={altPath}
                                            variant="arrow:massive"
                                            color="gray"
                                            hoverColor="grayDark"
                                            scroll={false}
                                        >
                                            <Text as="span" spacing="tight" weight="extrabold" title>
                                                {altPathName}
                                            </Text>
                                        </Link>
                                    </div>
                                )}
                                {children}
                            </div>
                        </Box>
                    </div>
                </div>
                <Text size={0} color="grayDarker" align="center">
                    Made with 💛 by{' '}
                    <Link
                        href="https://www.github.com/elitenoire"
                        variant="emphasis"
                        hoverColor="primary.base"
                        external
                    >
                        @elitenoire
                    </Link>
                </Text>
            </Container>
        </Box>
    )
}

export function getLayout(page, props) {
    return <AuthLayout {...props}>{page}</AuthLayout>
}
