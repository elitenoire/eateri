import { useFormContext } from 'react-hook-form'
import startOfDay from 'date-fns/startOfDay'
import addMonths from 'date-fns/addMonths'
import { Calendar, SelectBox, SelectBoxOption } from '~@core/form'
// import { useFormDialogUpdate } from './useFormDialogState'
import { combineRefs } from '~/lib/utils'
import { FormField, Controller } from '../formFields'
import { useStyle, useFormRefs } from '../context'

import styles from './style'

const guestRules = { required: 'Please select party size.' }
const dateRules = { required: 'Please select a date.' }
const timeRules = { required: 'Please select a time slot.' }

// handles selecting reservation guest, time & date ;
// the refs are used to focus on each form section / field
// when the dialog modal opens
function StepFindTable() {
    // TODO: pass min & max date as props
    const minDate = startOfDay(new Date())
    const maxDate = addMonths(new Date(), 3)

    const { guestRef, dateRef, timeRef } = useFormRefs()

    const { styleProp } = useStyle()

    const { control, setValue } = useFormContext()

    const handleSelectDate =
        onChange =>
        (date, { selectable, today }) => {
            if (selectable) {
                onChange(date)
                setValue('isToday', today)
            }
        }

    return (
        <div sx={styles.layout}>
            <div sx={styles.fieldGuest}>
                <Controller name="guest" control={control} rules={guestRules}>
                    {({ field: { onChange, value, ref }, fieldState: { error, invalid } }) => (
                        <FormField htmlFor="rf-ft-g" label="What's your party size?" error={invalid && error?.message}>
                            <SelectBox
                                id="rf-ft-g"
                                value={value}
                                onChange={onChange}
                                unselect
                                gap={4}
                                pad="1px"
                                hideScroll
                                aria-labelledby="form-label-guest"
                                aria-invalid={invalid ? 'true' : 'false'}
                                aria-required="true"
                                virtual
                                ref={combineRefs(ref, guestRef)}
                                sx={styles.selectBox}
                                {...styleProp}
                            >
                                <SelectBoxOption value="1">1</SelectBoxOption>
                                <SelectBoxOption value="2">2</SelectBoxOption>
                                <SelectBoxOption value="3">3</SelectBoxOption>
                                <SelectBoxOption value="4">4</SelectBoxOption>
                                <SelectBoxOption value="5">5</SelectBoxOption>
                                <SelectBoxOption value="6-8">6-8</SelectBoxOption>
                            </SelectBox>
                        </FormField>
                    )}
                </Controller>
            </div>
            <div sx={styles.fieldDate} {...styleProp}>
                <Controller name="date" control={control} rules={dateRules}>
                    {({ field: { onChange, value, ref }, fieldState: { error, invalid } }) => (
                        <FormField id="rf-ft-d" label="Select a Date" error={invalid && error?.message}>
                            <Calendar
                                value={value}
                                onChange={handleSelectDate(onChange)}
                                minDate={minDate}
                                maxDate={maxDate}
                                ref={combineRefs(ref, dateRef)}
                            />
                        </FormField>
                    )}
                </Controller>
            </div>
            <div sx={styles.fieldTime}>
                <Controller name="time" control={control} rules={timeRules}>
                    {({ field: { onChange, value, ref }, fieldState: { error, invalid } }) => (
                        <FormField htmlFor="rf-ft-t" label="At what Time?" error={invalid && error?.message}>
                            <SelectBox
                                id="rf-ft-t"
                                value={value}
                                onChange={onChange}
                                unselect
                                pad="0.5em"
                                flex
                                aria-labelledby="form-label-time"
                                aria-invalid={invalid ? 'true' : 'false'}
                                aria-required="true"
                                virtual
                                ref={combineRefs(ref, timeRef)}
                                sx={styles.selectBox}
                                {...styleProp}
                            >
                                <SelectBoxOption value="17:00">17:00</SelectBoxOption>
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
                        </FormField>
                    )}
                </Controller>
            </div>
        </div>
    )
}

export default StepFindTable
