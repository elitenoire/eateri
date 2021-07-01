/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { forwardRef } from 'react'
import { Checkbox, useCheckboxState } from 'reakit/Checkbox'

import { Icon } from '~@/general'

import styles from './style'

export const useSwitcherState = useCheckboxState

const Switcher = forwardRef(function (
    {
        color = 'secondary',
        radius = 'pill',
        outline,
        simple,
        id,
        checkedIcon,
        checkedTitle,
        uncheckedIcon,
        uncheckedTitle,
        ariaLabel,
        ...props
    },
    ref
) {
    return (
        <div sx={styles.wrapper({ color, outline, simple })}>
            <Checkbox ref={ref} id={id} className="visually-hidden" {...props} />
            <label
                htmlFor={id}
                {...(ariaLabel && { 'aria-label': ariaLabel })}
                sx={styles.label({ radius, color, outline, simple })}
            >
                {!simple && (
                    <>
                        {uncheckedIcon && (
                            <span title={uncheckedTitle}>
                                <Icon name={uncheckedIcon} />
                            </span>
                        )}
                        <span {...(checkedTitle && { title: checkedTitle })}>
                            {checkedIcon && <Icon name={checkedIcon} />}
                        </span>
                    </>
                )}
            </label>
        </div>
    )
})

export default Switcher
