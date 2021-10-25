import { Input } from '@theme-ui/components'
import { useFormContext } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'

import { Text } from '~@/typography'
import GuestCard from './GuestCard'

import styles from './style'

function StepGuestDetails() {
    const {
        register,
        formState: { errors },
    } = useFormContext()
    return (
        <div>
            <GuestCard showOverlay={false} />
            <div sx={styles.guestInputWrap}>
                <div className="form-section" sx={styles.formSection} data-form-error={errors.name ? '' : null}>
                    <label htmlFor="rsvp-guest-name" sx={styles.formSectionLabel}>
                        Name
                    </label>
                    <Input
                        sx={styles.formInput}
                        id="rsvp-guest-name"
                        name="name"
                        placeholder="Name"
                        aria-invalid={errors.name ? 'true' : 'false'}
                        aria-required="true"
                        {...register('name', { required: 'Name is required.' })}
                    />
                    {errors.name && (
                        <Text role="alert" pt={2} pl={6} sx={styles.formError}>
                            {errors.name?.message}
                        </Text>
                    )}
                </div>
                <div className="form-section" sx={styles.formSection} data-form-error={errors.email ? '' : null}>
                    <label htmlFor="rsvp-guest-email" sx={styles.formSectionLabel}>
                        Email
                    </label>
                    <Input
                        sx={styles.formInput}
                        id="rsvp-guest-email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-required="true"
                        {...register('email', {
                            required: 'Email is required.',
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: 'Email is not valid.',
                            },
                        })}
                    />
                    {errors.email && (
                        <Text role="alert" pt={2} pl={6} sx={styles.formError}>
                            {errors.email?.message}
                        </Text>
                    )}
                </div>
            </div>
            <div className="form-section" sx={styles.formSection}>
                <label htmlFor="rsvp-guest-note" sx={styles.formSectionLabel}>
                    Note
                </label>
                <TextareaAutosize
                    id="rsvp-guest-note"
                    type="text"
                    name="note"
                    minRows={3}
                    maxRows={8}
                    placeholder="(optional)"
                    cacheMeasurements
                    sx={styles.formInput}
                    {...register('note')}
                />
            </div>
        </div>
    )
}

export default StepGuestDetails
