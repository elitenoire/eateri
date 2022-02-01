import { useFormContext, useController } from 'react-hook-form'
import startOfDay from 'date-fns/startOfDay'
import addMonths from 'date-fns/addMonths'

import { Calendar, SelectBox, SelectBoxOption } from '~@core/form'
import { Text } from '~@core/typography'
import { useFormDialogUpdate } from './useFormDialogState'
import { combineRefs } from '~/lib/utils'

import styles from './style'

// wraps form section with reacthookform controller
function Controller({ children, ...rest }) {
    const controls = useController(rest)

    return children(controls)
}

// handles selecting reservation guest, time & date ;
// the refs are used to focus on each form section / field
// when the dialog modal opens
function StepFindTable({ guestRef, dateRef, timeRef }) {
    // TODO: pass min & max date as props
    const minDate = startOfDay(new Date())
    const maxDate = addMonths(new Date(), 3)
    // reacthookform control
    const { control } = useFormContext()
    // updates dialog modal disclosure with the selected
    const updateFormDialog = useFormDialogUpdate()
    // FormDialogProvider only wraps for non-mobile hence the check
    const isFunction = typeof updateFormDialog === 'function'

    // update form state and dialog modal (date)
    const onSelectDate = onChange => dateObj => {
        const { selectable, date, today } = dateObj
        if (selectable) {
            onChange(date)
            if (isFunction) updateFormDialog('date', date, today)
        }
    }
    // update form state and dialog modal (guest, time)
    const onSelect = (name, onChange) => value => {
        onChange(value)
        if (isFunction) updateFormDialog(name, value)
    }

    return (
        <div sx={styles.formLayout}>
            <Controller name="guest" control={control} rules={{ required: 'Please select party size.' }}>
                {({ field: { onChange, value, name, ref }, fieldState: { error, invalid } }) => (
                    <div className="form-section" sx={styles.formSectionGuest} data-form-error={invalid ? '' : null}>
                        <p id="form-label-guest" sx={styles.formSectionLabel}>
                            What's your party size?
                        </p>
                        <SelectBox
                            name={name}
                            value={value}
                            onChange={onSelect('guest', onChange)}
                            gap={4}
                            pad="1px"
                            hideScroll
                            sx={styles.selectBox}
                            aria-labelledby="form-label-guest"
                            aria-invalid={invalid ? 'true' : 'false'}
                            aria-required="true"
                        >
                            <SelectBoxOption value="1" ref={combineRefs(ref, guestRef)}>
                                1
                            </SelectBoxOption>
                            <SelectBoxOption value="2">2</SelectBoxOption>
                            <SelectBoxOption value="3">3</SelectBoxOption>
                            <SelectBoxOption value="4">4</SelectBoxOption>
                            <SelectBoxOption value="5-7">5-7</SelectBoxOption>
                            <SelectBoxOption value="8+">8+</SelectBoxOption>
                        </SelectBox>
                        {invalid && (
                            <Text role="alert" align="center" pb={2} sx={styles.formError}>
                                {error?.message}
                            </Text>
                        )}
                    </div>
                )}
            </Controller>
            <Controller name="date" control={control} rules={{ required: 'Please select a date.' }}>
                {({ field: { onChange, value, ref }, fieldState: { error, invalid } }) => (
                    <div className="form-section" sx={styles.formSectionDate} data-form-error={invalid ? '' : null}>
                        <p id="form-label-date" sx={styles.formSectionLabel}>
                            Select a Date
                        </p>
                        <Calendar
                            selected={value}
                            onDateSelected={onSelectDate(onChange)}
                            minDate={minDate}
                            maxDate={maxDate}
                            ref={combineRefs(ref, dateRef)}
                        />
                        {invalid && (
                            <Text role="alert" align="center" pb={2} sx={styles.formError}>
                                {error?.message}
                            </Text>
                        )}
                    </div>
                )}
            </Controller>
            <Controller name="time" control={control} rules={{ required: 'Please select a time slot.' }}>
                {({ field: { onChange, value, name, ref }, fieldState: { error, invalid } }) => (
                    <div className="form-section" sx={styles.formSectionTime} data-form-error={invalid ? '' : null}>
                        <p id="form-label-time" sx={styles.formSectionLabel}>
                            At what Time?
                        </p>
                        <div>
                            <SelectBox
                                value={value}
                                name={name}
                                onChange={onSelect('time', onChange)}
                                pad="0.5em"
                                flex
                                sx={styles.selectBox}
                                aria-labelledby="form-label-time"
                                aria-invalid={invalid ? 'true' : 'false'}
                                aria-required="true"
                            >
                                <SelectBoxOption value="17:00" ref={combineRefs(ref, timeRef)}>
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
                            {invalid && (
                                <Text role="alert" sx={styles.formError} align="center" pb={2}>
                                    {error?.message}
                                </Text>
                            )}
                        </div>
                    </div>
                )}
            </Controller>
        </div>
    )
}

export default StepFindTable
