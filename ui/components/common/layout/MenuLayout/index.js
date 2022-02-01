import { useState, useCallback } from 'react'
import { Container } from '@theme-ui/components'
import Image from 'next/image'

import { Heading, Text } from '~@core/typography'
import { Scrollable } from '~@core/display'
import { SearchBar, Switcher, Select } from '~@core/form'
import { Button } from '~@core/general'

import MenuTitle from './MenuTitle'
import CategoryLink from './CategoryLink'
import { getLayout as getDefaultLayout } from '../DefaultLayout'

import { ReactComponent as AllIcon } from '~/public/inlineSvg/icons/all.svg'
import { ReactComponent as PizzaIcon } from '~/public/inlineSvg/icons/pizza.svg'
import { ReactComponent as SaladIcon } from '~/public/inlineSvg/icons/salad.svg'
// import url from '~/public/bannerindian.svg'
// import url from '~/public/bannerafrican.svg'
// import url from '~/public/bannersoups.svg'
// import url from '~/public/bannerseafood.svg'
// import url from '~/public/bannermeat.svg'
// import url from '~/public/bannerbarbeque.svg'
// import url from '~/public/bannerpizza.svg'
// import url from '~/public/bannerbreakfast.svg'
// import url from '~/public/bannersandwich.svg'
// import url from '~/public/bannerfastfood.svg'
// import url from '~/public/bannersalad.svg'
// import url from '~/public/bannerdessert.svg'
// import url from '~/public/bannerchinese.svg'
// import url from '~/public/bannerpasta.svg'
// import url from '~/public/bannerdrinks.svg'
// import url from '~/public/bannerall.svg'
// import url from '~/public/bannerrice.svg'
import url from '~/public/bannerspecials.svg'

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
            <div sx={styles.banner}>
                <div sx={styles.imageWrap}>
                    <Image src={url} alt="" layout="fill" objectFit="cover" objectPosition="center" />
                </div>
                <div sx={styles.textWrap}>
                    <Heading as="h1" variant="intro" title>
                        <Text as="span" line="relaxed" spacing="tight" sx={styles.bgText}>
                            Spicy Indian
                        </Text>
                    </Heading>
                    <Text size={1} weight="medium" sx={styles.subText}>
                        <Text as="span" line={3} sx={styles.bgText}>
                            Made from organic ingredients that are healthy, rich in variety and flavours.
                        </Text>
                    </Text>
                </div>
            </div>
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
                    <Heading as="h3" variant="h5" sx={styles.searchTermCountHeading}>
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
