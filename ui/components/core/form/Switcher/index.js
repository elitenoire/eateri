import { forwardRef } from 'react'
import { Checkbox, useCheckboxState } from 'reakit/Checkbox'

import { Icon } from '~@core/general'

import styles from './style'

export const useSwitcherState = useCheckboxState

const Switcher = forwardRef(function Switcher(
    {
        color = 'secondary',
        radius = 'pill',
        outline,
        simple,
        subtle,
        id,
        checkedIcon,
        checkedTitle,
        uncheckedIcon,
        uncheckedTitle,
        ariaLabel,
        ...rest
    },
    ref
) {
    return (
        <div sx={styles.wrapper({ color, outline, subtle, simple })}>
            <Checkbox ref={ref} id={id} className="visually-hidden" {...rest} />
            <label
                htmlFor={id}
                {...(ariaLabel && { 'aria-label': ariaLabel })}
                sx={styles.label({ radius, color, outline, subtle, simple })}
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
