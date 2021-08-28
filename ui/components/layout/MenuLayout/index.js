/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { useState, useCallback } from 'react'
import { Box, Container } from '@theme-ui/components'

import Headroom from 'react-headroom'

import { Heading, Text } from '~@/typography'
import { Scrollable } from '~@/display'
import { SearchBar, Switcher } from '~@/form'
import Select from '~@/form/SelectMenu'
import { Button } from '~@/general'

import MenuTitle from './MenuTitle'
import CategoryLink from './CategoryLink'
import { getLayout as getDefaultLayout } from '../DefaultLayout'

import AllIcon from '~/public/inlineSvg/icons/all.svg'
import PizzaIcon from '~/public/inlineSvg/icons/pizza.svg'
import SaladIcon from '~/public/inlineSvg/icons/salad.svg'

import { styles } from './style'

import { category } from './data'

const items = ['Apple', 'Orange', 'Banana', 'Pear', 'Mango']
const name = 'test-item'
const color = 'secondary'

export default function MenuLayout({ children }) {
    const [value, setValue] = useState()

    const handleChange = useCallback(_value => {
        setValue(_value)
    }, [])

    return (
        <Container variant="maxi">
            <Box p={13} bg="orange" />
            <div sx={styles.layoutGrid}>
                <div sx={styles.menuTitle}>
                    <MenuTitle />
                </div>
                <div sx={styles.searchFilter}>
                    <div sx={styles.searchContainer}>
                        <SearchBar color="secondary" outline>
                            <Button brand="pale" color="secondary" icon="filter" opaque />
                        </SearchBar>
                    </div>
                </div>
                <div sx={styles.menuNav}>
                    <Scrollable pad="0.5em" flex hideScroll sx={styles.scrollable}>
                        <nav sx={styles.nav}>
                            {category.map((c, i) => (
                                <CategoryLink
                                    key={c.id || i}
                                    href={`/${c.name === 'all' ? '' : c.name}`}
                                    icon={AllIcon}
                                >
                                    {c.name}
                                </CategoryLink>
                            ))}
                        </nav>
                    </Scrollable>
                </div>
                <div sx={styles.searchTermCount}>
                    <Heading as="h3" variant="h6" mb={1} mt={[2, null, 4]}>
                        All (178)
                    </Heading>
                </div>
                <div sx={styles.sortView}>
                    <div sx={styles.sortViewContainer}>
                        <div>
                            <Select hasTags multi value={value} onChange={handleChange}>
                                <Select.Button brand="subtle" icon="sort" value="newest" color={color} noHoverUp>
                                    Sort by
                                </Select.Button>
                                <Select.List prefix="list">
                                    <Select.Group>
                                        <Select.Item name={name} value={items[0]}>
                                            {items[0]}
                                        </Select.Item>
                                        <Select.Item name={name} value={items[1]}>
                                            {items[1]}
                                        </Select.Item>
                                        <Select.Item name={name} value={items[2]}>
                                            {items[2]}
                                        </Select.Item>
                                    </Select.Group>
                                    <Select.Group id="weird" name="yessir">
                                        <Select.Item value={items[3]}>{items[3]}</Select.Item>
                                        <Select.Item value={items[4]}>{items[4]}</Select.Item>
                                    </Select.Group>
                                </Select.List>
                            </Select>
                        </div>
                        <Switcher
                            id="test4"
                            checkedIcon="layoutlist"
                            checkedTitle="List View"
                            uncheckedIcon="layoutgrid"
                            uncheckedTitle="Grid View"
                            ariaLabel="View as list or grid"
                            color="secondary"
                            outline
                            subtle
                        />
                    </div>
                </div>
                <div sx={styles.content}>{children}</div>
            </div>
        </Container>
    )
}

export function getLayout(page, props) {
    return getDefaultLayout(<MenuLayout {...props}>{page}</MenuLayout>, props)
}
