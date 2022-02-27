import { forwardRef, useState, useCallback } from 'react'
import { Input } from '@theme-ui/components'
import { Icon, Divider } from '~@core/general'

import styles from './style'

const SearchBar = forwardRef(function SearchBar(
    {
        radius = 'pill',
        bg,
        color = 'secondary',
        placeholder = 'Search...',
        shadow,
        outline,
        children,
        id = 'search',
        onFocus,
        onBlur,
        ...rest
    },
    ref
) {
    const [focused, setFocused] = useState(false)

    const handleFocus = useCallback(() => {
        setFocused(true)
        onFocus?.()
    }, [onFocus])

    const handleBlur = useCallback(() => {
        setFocused(false)
        onBlur?.()
    }, [onBlur])

    return (
        <div data-focused={focused ? '' : null} sx={styles.wrapper({ radius, shadow, bg, outline, color })}>
            <div sx={styles.search}>
                <label htmlFor={id}>
                    <Icon name="search" />
                </label>
                <form sx={styles.form}>
                    <Input
                        ref={ref}
                        id={id}
                        type="search"
                        placeholder={placeholder}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        sx={styles.input({ color })}
                    />
                </form>
            </div>
            {children && (
                <>
                    <Divider width="1.5px" height="2em" opacity={0.25} mr={2} vertical />
                    <div sx={styles.filter}>{children}</div>
                </>
            )}
        </div>
    )
})

export default SearchBar
