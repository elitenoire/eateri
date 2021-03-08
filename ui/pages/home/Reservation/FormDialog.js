/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Container } from '@theme-ui/components'
import { useRef, useCallback, useEffect } from 'react'
import { useDialogState, Dialog, DialogDisclosure } from 'reakit/Dialog'
import format from 'date-fns/format'

import { Text } from '~@/typography'
import { Button, Divider, fadeInUp, Icon, Reveal, fadeOutDown, zoomInUp } from '~@/general'
import { useStepControl } from '~@/navigation/Steps'

import FormWizard from './FormWizard'
import { useDateValue, useGuestValue, useTimeValue, useIsToday } from './useFormDialogState'

import styles from './style'

const dividerBgStyle = ['text', null, 'secondary.light']

function DateText({ title }) {
    const value = useDateValue()
    const isToday = useIsToday()
    if (value) {
        const label = isToday ? `Today, ${format(value, 'd MMM')}` : format(value, 'eee, d MMM')
        return <Text weight="medium">{label}</Text>
    }
    return (
        <Text size={0} weight="bold">
            {title}
            <Text as="span" weight="light" opacity={0.5}>
                select
            </Text>
        </Text>
    )
}

function TimeText({ title }) {
    const value = useTimeValue()
    if (value) {
        return <Text weight="medium">{`${value} pm`}</Text>
    }
    return (
        <Text size={0} weight="bold">
            {title}
            <Text as="span" weight="light" opacity={0.5}>
                select
            </Text>
        </Text>
    )
}

function GuestText({ title }) {
    const value = useGuestValue()
    if (value) {
        const label = Number(value) === 1 ? 'Guest' : 'Guests'
        return <Text weight="medium">{`${value} ${label}`}</Text>
    }
    return (
        <Text size={0} weight="bold">
            {title}
            <Text as="span" weight="light" opacity={0.5}>
                select
            </Text>
        </Text>
    )
}

function FormDialog({ defaultValues }) {
    const guestRef = useRef()
    const dateRef = useRef()
    const timeRef = useRef()
    const initialFocusRef = useRef({ focus: () => null })

    const dialog = useDialogState({ modal: false, animated: 200 })
    const { moveStep } = useStepControl()

    const { visible, hide } = dialog

    const focusForm = ref => () => {
        initialFocusRef.current = ref.current
    }

    const closeForm = useCallback(() => {
        hide()
        moveStep(0)
    }, [moveStep, hide])

    useEffect(() => {
        if (visible) {
            initialFocusRef?.current?.focus()
        }
    }, [visible])

    return (
        <Container sx={styles.dialogWrap} data-leave={dialog.animating && !visible ? '' : null}>
            <div data-show-halo={!visible} className="card-halo" sx={styles.selectWrap}>
                <div className="card-halo--content" sx={styles.selectLayout}>
                    <DialogDisclosure
                        {...dialog}
                        disabled={visible}
                        focusable
                        onClick={focusForm(guestRef)}
                        sx={styles.selectButton}
                    >
                        <div>
                            <Icon name="user" />
                            <GuestText title="Party Size" />
                            <Icon className="mobile-hidden" name="arrowdropdown" />
                        </div>
                    </DialogDisclosure>
                    <Divider bg={dividerBgStyle} my={1} mx={2} vertical />
                    <DialogDisclosure
                        {...dialog}
                        disabled={visible}
                        focusable
                        onClick={focusForm(dateRef)}
                        sx={styles.selectButton}
                    >
                        <div>
                            <Icon name="calendar" />
                            <DateText title="Date" />
                            <Icon className="mobile-hidden" name="arrowdropdown" />
                        </div>
                    </DialogDisclosure>
                    <Divider bg={dividerBgStyle} my={1} mx={2} vertical />
                    <DialogDisclosure
                        {...dialog}
                        disabled={visible}
                        focusable
                        onClick={focusForm(timeRef)}
                        sx={styles.selectButton}
                    >
                        <div>
                            <Icon name="time" />
                            <TimeText title="Time" />
                            <Icon className="mobile-hidden" name="arrowdropdown" />
                        </div>
                    </DialogDisclosure>
                </div>
                <div className="card-halo--action mobile-hidden" sx={styles.action}>
                    {!visible && (
                        <Reveal motion={zoomInUp} duration={500}>
                            <Button type="submit" noFade>
                                Find Table
                            </Button>
                        </Reveal>
                    )}
                </div>
            </div>
            <Dialog {...dialog} aria-label="Make Reservation" hideOnClickOutside={false} sx={styles.formDialog}>
                <Reveal motion={visible ? fadeInUp : fadeOutDown} cascade>
                    <div>
                        <FormWizard
                            guestRef={guestRef}
                            dateRef={dateRef}
                            timeRef={timeRef}
                            defaultValues={defaultValues}
                        />
                    </div>
                    <Button
                        className="mobile-hidden"
                        color="secondary"
                        icon="close"
                        sx={styles.formClose}
                        onClick={closeForm}
                    />
                </Reveal>
            </Dialog>
        </Container>
    )
}

export default FormDialog
