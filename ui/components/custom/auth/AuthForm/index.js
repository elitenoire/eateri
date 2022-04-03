import { Box } from '@theme-ui/components'
import { Icon, Divider, Button, ButtonBase, Reveal, fadeIn } from '~@core/general'
import { Link } from '~@core/navigation'
import { Text, Heading } from '~@core/typography'
import { Input } from '~@core/form'
import { ReactComponent as GoogleIcon } from '~/public/inlineSvg/google.svg'

import styles from './style'

export default function AuthForm({ title, subtitle, altPath, altPathName, altPathPrompt, children, ...rest }) {
    return (
        <Box {...rest}>
            <div sx={styles.authFlow}>
                <Reveal motion={fadeIn} duration={200}>
                    <header sx={styles.header}>
                        <Heading as="h1" mb={1} variant="h2" spacing="tighter" title>
                            {title}
                        </Heading>
                        <Text color="textFade">{subtitle}</Text>
                    </header>
                </Reveal>
                <div sx={styles.socials}>
                    <Button
                        brand="subtle"
                        color="secondary"
                        bg="gray"
                        outlineColor="gray"
                        px={4}
                        outline
                        fluid
                        aria-label={`${title} with Google`}
                    >
                        <Icon name={GoogleIcon} mr={2} />
                        <Text as="span" size={1}>
                            Google
                        </Text>
                    </Button>
                    <Button
                        brand="subtle"
                        color="secondary"
                        bg="gray"
                        outlineColor="gray"
                        px={4}
                        outline
                        fluid
                        aria-label={`${title} with Twitter`}
                    >
                        <Icon name="twitterfill" size={3} color="#1da1f2" mr={1} />
                        <Text as="span" size={1}>
                            Twitter
                        </Text>
                    </Button>
                    <Button
                        brand="subtle"
                        color="secondary"
                        bg="gray"
                        outlineColor="gray"
                        px={4}
                        outline
                        fluid
                        aria-label={`${title} with Github`}
                    >
                        <Icon name="github" size={3} mr={1} />
                        <Text as="span" size={1}>
                            Github
                        </Text>
                    </Button>
                </div>
                <Divider height="1.5px" my={5} bg="gray" color="textFade">
                    or
                </Divider>
                <form>
                    <Input mb={4} placeholder="Email" brand="solid" />
                    <Button color="secondary" radius="tiny" fluid>
                        <Icon name="bolt" mr={2} />
                        Continue
                    </Button>
                    <Reveal motion={fadeIn}>
                        <Text size={1} mt={2} align="center" weight="medium" color="blackFade.30">
                            {`We'll send you a code to ${title.toLowerCase()}.`}
                        </Text>
                    </Reveal>
                </form>
                <footer sx={styles.footer}>
                    <Reveal motion={fadeIn} duration={200}>
                        <Text color="textFade">{altPathPrompt}</Text>
                    </Reveal>
                    <Link href={altPath} variant="arrow" color="primary.base" hoverColor="primary.hover" scroll={false}>
                        {altPathName}
                    </Link>
                </footer>
            </div>
            <Box pb={2} px={2}>
                <Text
                    as={ButtonBase}
                    size={1}
                    py={4}
                    bg="highlight.pale"
                    color="blackFade.30"
                    decoration="underline"
                    align="center"
                    weight="bold"
                    fluid
                    radius={20}
                >
                    Use demo user
                </Text>
            </Box>
        </Box>
    )
}
