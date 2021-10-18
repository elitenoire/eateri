import { useCallback } from 'react'
import { useForm, useFormContext, Controller } from 'react-hook-form'
import startOfDay from 'date-fns/startOfDay'
import addMonths from 'date-fns/addMonths'

import { Calendar, SelectBox, SelectBoxOption } from '~@/form'
import { Text } from '~@/typography'
import { useFormDialogUpdate } from './useFormDialogState'

import styles from './style'

function StepFindTable({ guestRef, dateRef, timeRef }) {
    const minDate = startOfDay(new Date())
    const maxDate = addMonths(new Date(), 3)

    // const { handleSubmit, errors, control } = useForm({
    //     mode: 'onSubmit',
    //     submitFocusError: false,
    // })
    const { errors, control } = useFormContext()
    const updateFormDialog = useFormDialogUpdate()
    // Needed as the function only exists for non-mobile
    // This is because the Provider only wraps for non-mobile
    const isFunction = typeof updateFormDialog === 'function'

    // handle on date selected
    const onSelectDate = onChange => dateObj => {
        const { selected, selectable, date, today } = dateObj
        if (selectable && !selected) {
            onChange(date)
            if (isFunction) updateFormDialog('date', date, today)
        }
    }

    const onSelect = (name, onChange) => value => {
        onChange(value)
        if (isFunction) updateFormDialog(name, value)
    }

    return (
        <div sx={styles.formLayout}>
            <div className="form-section" sx={styles.formSectionGuest} data-form-error={errors.guest ? '' : null}>
                <p id="form-label-guest" sx={styles.formSectionLabel}>
                    What's your party size?
                </p>
                <Controller
                    name="guest"
                    control={control}
                    rules={{ required: 'Please select party size.' }}
                    // defaultValue={initialGuestValue}
                    render={({ onChange, onBlur, value, name, ref }) => (
                        <SelectBox
                            // ref={ref}
                            name={name}
                            value={value}
                            onChange={onSelect('guest', onChange)}
                            gap={4}
                            pad="1px"
                            hideScroll
                            sx={styles.selectBox}
                            aria-labelledby="form-label-guest"
                        >
                            <SelectBoxOption
                                value="1"
                                ref={e => {
                                    ref.current = e
                                    if (guestRef) guestRef.current = e
                                }}
                            >
                                1
                            </SelectBoxOption>
                            <SelectBoxOption value="2">2</SelectBoxOption>
                            <SelectBoxOption value="3">3</SelectBoxOption>
                            <SelectBoxOption value="4">4</SelectBoxOption>
                            <SelectBoxOption value="5-7">5-7</SelectBoxOption>
                            <SelectBoxOption value="8+">8+</SelectBoxOption>
                        </SelectBox>
                    )}
                />
                {errors.guest && (
                    <Text align="center" pb={2} sx={styles.formError}>
                        {errors.guest.message}
                    </Text>
                )}
            </div>
            <div className="form-section" sx={styles.formSectionDate} data-form-error={errors.date ? '' : null}>
                <p id="form-label-date" sx={styles.formSectionLabel}>
                    Select a Date
                </p>
                <Controller
                    name="date"
                    control={control}
                    rules={{ required: 'Please select a date.' }}
                    // defaultValue={initialDateValue}
                    render={({ onChange, onBlur, value, name, ref }) => (
                        <Calendar
                            selected={value}
                            onDateSelected={onSelectDate(onChange)}
                            minDate={minDate}
                            maxDate={maxDate}
                            ref={e => {
                                ref.current = e
                                if (dateRef) dateRef.current = e
                            }}
                        />
                    )}
                />
                {errors.date && (
                    <Text align="center" pb={2} sx={styles.formError}>
                        {errors.date.message}
                    </Text>
                )}
            </div>
            <div className="form-section" sx={styles.formSectionTime} data-form-error={errors.time ? '' : null}>
                <p id="form-label-time" sx={styles.formSectionLabel}>
                    At what Time?
                </p>
                <div>
                    <Controller
                        name="time"
                        control={control}
                        rules={{ required: 'Please select a time slot.' }}
                        // defaultValue={initialTimeValue}
                        render={({ onChange, onBlur, value, name, ref }) => (
                            <SelectBox
                                // ref={ref}
                                value={value}
                                name={name}
                                onChange={onSelect('time', onChange)}
                                pad="0.5em"
                                flex
                                sx={styles.selectBox}
                                aria-labelledby="form-label-time"
                            >
                                <SelectBoxOption
                                    value="17:00"
                                    ref={e => {
                                        ref.current = e
                                        if (timeRef) timeRef.current = e
                                    }}
                                >
                                    17:00
                                </SelectBoxOption>
                                <SelectBoxOption value="17:30">17:30</SelectBoxOption>
                                <SelectBoxOption value="18:00">18:00</SelectBoxOption>
                                <SelectBoxOption value="18:15">18:15</SelectBoxOption>
                                <SelectBoxOption value="18:30">18:30</SelectBoxOption>
                                <SelectBoxOption value="18:45">18:45</SelectBoxOption>
                                <SelectBoxOption value="19:00">19:00</SelectBoxOption>
                                <SelectBoxOption value="19:15">19:15</SelectBoxOption>
                                <SelectBoxOption value="19:30">19:30</SelectBoxOption>
                                <SelectBoxOption value="19:45">19:45</SelectBoxOption>
                                <SelectBoxOption value="20:00">20:00</SelectBoxOption>
                                <SelectBoxOption value="20:15">20:15</SelectBoxOption>
                                <SelectBoxOption value="20:30">20:30</SelectBoxOption>
                                <SelectBoxOption value="20:45">20:45</SelectBoxOption>
                                <SelectBoxOption value="21:00">21:00</SelectBoxOption>
                                <SelectBoxOption value="21:45">21:45</SelectBoxOption>
                                <SelectBoxOption value="22:00">22:00</SelectBoxOption>
                            </SelectBox>
                        )}
                    />
                </div>
                {errors.time && (
                    <Text sx={styles.formError} align="center" pb={2}>
                        {errors.time.message}
                    </Text>
                )}
            </div>
        </div>
    )
}

export default StepFindTable
