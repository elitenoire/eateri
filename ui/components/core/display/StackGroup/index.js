import { forwardRef, Children as RC } from 'react'
import { Box } from '@theme-ui/components'

import styles from './style'

const StackGroup = forwardRef(function StackGroup(
    {
        as = 'div',
        max = 0,
        radius = 'circle',
        borderColor = 'white',
        size,
        gap,
        total,
        unstack,
        indicator,
        children,
        ...rest
    },
    ref
) {
    const groupChildren = RC.toArray(children).map((child, index) => (
        <li key={`stack-item-${index}`} sx={styles.listItem({ radius, unstack, gap, borderColor, size })}>
            {child}
        </li>
    ))
    const _total = total || groupChildren.length
    const _excess = max && max < _total

    if (_excess) {
        const _excessValue = _total - max
        const groupChildrenShown = groupChildren.slice(0, max)
        const groupChildrenHidden = groupChildren.slice(max, _total)
        return (
            <Box as={as} ref={ref} {...rest}>
                <ul sx={styles.groupList}>
                    {groupChildrenShown}
                    {indicator ? (
                        <li>{indicator(_excessValue, groupChildrenHidden)}</li>
                    ) : (
                        <li sx={styles.listItem({ radius, unstack, gap, borderColor, size })}>
                            <span sx={styles.excessItem}>{`+${_excessValue}`}</span>
                        </li>
                    )}
                </ul>
            </Box>
        )
    }
    return (
        <Box as={as} ref={ref} {...rest}>
            <ul sx={styles.groupList}>{groupChildren}</ul>
        </Box>
    )
})

export default StackGroup
