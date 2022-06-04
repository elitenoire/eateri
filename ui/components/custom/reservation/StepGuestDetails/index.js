import { useState, useCallback } from 'react'
import { useFormContext } from 'react-hook-form'
import { Reveal, fadeInDown } from '~@core/general'
import { FormFieldInput, FormFieldTextArea } from '../formFields'
import GuestCard from '../GuestCard'

import styles from './style'

function StepGuestDetails() {
    const {
        register,
        formState: { errors },
    } = useFormContext()

    // TODO: retrieve authenticated user
    const isAuth = true

    const [switchUser, setSwitchUser] = useState(true)

    const toggle = useCallback(() => {
        setSwitchUser(_switchUser => !_switchUser)
    }, [])
    // Unauth user -> show form, hide guestCard
    // Auth user -> hide form, show guestCard (no overlay)
    // Auth user +  switch -> show form, show guestCard (with overlay)
    return (
        <div>
            {isAuth && <GuestCard toggle={toggle} showOverlay={switchUser} />}
            {(!isAuth || (isAuth && switchUser)) && (
                <Reveal motion={fadeInDown} duration={500}>
                    <div sx={styles.inputWrap}>
                        <FormFieldInput
                            id="rsvp-guest-name"
                            name="name"
                            label="Name"
                            required
                            error={errors?.name?.message}
                            {...register('name', { required: 'Name is required.' })}
                        />
                        <FormFieldInput
                            id="rsvp-guest-email"
                            name="email"
                            label="Email"
                            type="email"
                            required
                            error={errors?.email?.message}
                            {...register('email', {
                                required: 'Email is required.',
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: 'Email is not valid.',
                                },
                            })}
                        />
                    </div>
                </Reveal>
            )}
            <FormFieldTextArea
                id="rsvp-guest-note"
                name="note"
                label="Note"
                placeholder="(optional)"
                {...register('note')}
            />
        </div>
    )
}

export default StepGuestDetails
