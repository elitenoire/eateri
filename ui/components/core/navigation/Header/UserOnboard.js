import { Box } from '@theme-ui/components'
import { Popover, PopoverArrow, PopoverDisclosure, usePopoverState } from 'ariakit/popover'
import { Button } from '~@core/general'
import { List, ListItem, ListSeparator } from '~@core/display'
import { Text } from '~@core/typography'
import { LinkButton } from '~@core/navigation'

export default function UserOnboard() {
    const popover = usePopoverState({ animated: true })
    return (
        <>
            <PopoverDisclosure
                as={Button}
                state={popover}
                brand="ghost"
                color="secondary"
                ml="tiny"
                size="lg"
                icon="usersmile"
                ariaLabel="Login / Signup"
                active={popover.visible}
                dropdown
            />
            <Popover state={popover} as={List} variant="dropdown" transformOrigin="top right" animated>
                <PopoverArrow as={Box} color="white" />
                <Box py={4} px={6}>
                    <Text size={2} weight="bold" mb={4}>
                        Do you have an account?
                    </Text>
                    <LinkButton size={2} color="secondary" href="/login">
                        Log in
                    </LinkButton>
                    <ListSeparator my={4} />
                    <Text size={2} weight="bold" mb={2}>
                        New here to Eateri?
                    </Text>
                    <Box as="ul" mb={2}>
                        <ListItem as="li" size={1} iconSize={1} icon="bag" iconBoxed>
                            Enjoy Express Checkout
                        </ListItem>
                        <ListItem as="li" size={1} iconSize={1} icon="orders" iconBoxed>
                            Track orders easily
                        </ListItem>
                        <ListItem as="li" size={1} iconSize={1} icon="award" iconBoxed>
                            Collect Eateri Rewards
                        </ListItem>
                        <ListItem as="li" size={1} noHover>
                            and other exclusive benefits!
                        </ListItem>
                    </Box>
                    <LinkButton size={2} brand="subtle" shape="round" bg="primary.light" href="/signup" fluid>
                        Create account
                    </LinkButton>
                </Box>
            </Popover>
        </>
    )
}
