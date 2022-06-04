import { useCallback, forwardRef, useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { useDialogState, Dialog, DialogDismiss } from 'ariakit/dialog'
import format from 'date-fns/format'
import { Text } from '~@core/typography'
import { Button, ButtonAria, Icon } from '~@core/general'
import { useStepControl } from '~@core/navigation'
import { useStyle, useFormRefs } from '../context'

import styles from './style'

function Placeholder({ label }) {
    return (
        <span sx={styles.placeholder}>
            <Text as="span" weight="bold" size={1}>
                {label}
            </Text>
            <Text as="span" opacity={0.35}>
                select
            </Text>
        </span>
    )
}

function DateText({ title }) {
    const { getValues } = useFormContext()
    const [value, isToday] = getValues(['date', 'isToday'])

    if (value) {
        const label = isToday ? `Today, ${format(value, 'd MMM')}` : format(value, 'eee, d MMM')
        return <Text weight="medium">{label}</Text>
    }
    return <Placeholder label={title} />
}

function TimeText({ title }) {
    const { getValues } = useFormContext()
    const value = getValues('time')

    if (value) {
        return <Text weight="medium">{`${value} pm`}</Text>
    }
    return <Placeholder label={title} />
}

function GuestText({ title }) {
    const { getValues } = useFormContext()
    const value = getValues('guest')

    if (value) {
        const label = Number(value) === 1 ? 'Guest' : 'Guests'
        return <Text weight="medium">{`${value} ${label}`}</Text>
    }
    return <Placeholder label={title} />
}

const ModalBackdrop = forwardRef(function ModalBackdrop(props, ref) {
    return <div ref={ref} sx={styles.modalBg} {...props} />
})

function FormModal({ className, children }) {
    const { guestRef, dateRef, timeRef } = useFormRefs()
    const focusFieldRef = useRef()

    const { ringProp } = useStyle()
    const { moveStep } = useStepControl()
    const dialog = useDialogState({ animated: true })

    const { visible } = dialog

    const focusForm = ref => () => {
        focusFieldRef.current = ref?.current
        dialog.toggle()
    }

    const closeForm = useCallback(() => {
        moveStep(0)
    }, [moveStep])

    return (
        <>
            <div sx={styles.selectWrap} {...ringProp}>
                <div sx={styles.selectLayout}>
                    <ButtonAria focusable onClick={focusForm(guestRef)} sx={styles.selectButton}>
                        <span sx={styles.iconWrap}>
                            <Icon name="user" />
                        </span>
                        <GuestText title="Party Size" />
                        <Icon className="mobile-hidden" name="arrowdropdown" />
                    </ButtonAria>
                    <ButtonAria focusable onClick={focusForm(dateRef)} sx={styles.selectButton}>
                        <span sx={styles.iconWrap}>
                            <Icon name="calendar" />
                        </span>
                        <DateText title="Date" />
                        <Icon className="mobile-hidden" name="arrowdropdown" />
                    </ButtonAria>
                    <ButtonAria focusable onClick={focusForm(timeRef)} sx={styles.selectButton}>
                        <span sx={styles.iconWrap}>
                            <Icon name="time" />
                        </span>
                        <TimeText title="Time" />
                        <Icon className="mobile-hidden" name="arrowdropdown" />
                    </ButtonAria>
                </div>
                <div sx={styles.action} {...ringProp}>
                    {!visible && (
                        <Button type="submit" color="secondary" onClick={dialog.toggle} noFade>
                            Find Table
                        </Button>
                    )}
                </div>
            </div>
            <Dialog
                state={dialog}
                backdrop={ModalBackdrop}
                aria-label="Make Reservation"
                className={className}
                sx={styles.modal}
                initialFocusRef={focusFieldRef}
            >
                <div sx={styles.modalContent}>{children}</div>
                <Button
                    as={DialogDismiss}
                    brand="ghost"
                    color="secondary"
                    ghostText
                    icon="close"
                    sx={styles.modalClose}
                    onClick={closeForm}
                />
            </Dialog>
        </>
    )
}

export default FormModal
