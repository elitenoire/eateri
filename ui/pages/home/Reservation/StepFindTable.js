/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { useCallback } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import startOfDay from 'date-fns/startOfDay'
import addMonths from 'date-fns/addMonths'

import Calendar from '~@/form/Calendar'
import { SelectBox, SelectBoxOption } from '~@/display'
import { Text } from '~@/typography'

import styles from './style'

const StepFindTable = () => {
    // TODO: Pass initial value as prop
    const initialValue = new Date()
    const minDate = startOfDay(new Date())
    const maxDate = addMonths(new Date(), 3)

    const { handleSubmit, errors, control } = useForm({
        mode: 'onSubmit',
        submitFocusError: false,
    })

    const onSubmit = d => console.log({ form: d })

    // handle on date selected
    // const onSelectDate = useCallback(
    //     (onChange) => {

    //     },
    //     [input],
    // )

    const onSelectDate = onChange => dateObj => {
        const { selected, selectable, date } = dateObj
        if (selectable && !selected) {
            console.log('Making a change:', date)
            onChange(date)
        }
    }

    return (
        <div>
            <DevTool control={control} />
            <form sx={styles.formLayout} onSubmit={handleSubmit(onSubmit)}>
                <div sx={styles.formSectionGuest}>
                    <p sx={styles.formSectionLabel}>Select Guests</p>
                    <Controller
                        name="guests"
                        control={control}
                        rules={{ required: true }}
                        defaultValue={initialValue}
                        render={({ onChange, onBlur, value }) => (
                            <SelectBox
                                value={value}
                                onChange={onChange}
                                sx={styles.selectBox}
                                gap={4}
                                pad="1px"
                                hideScroll
                            >
                                <SelectBoxOption value="1">1</SelectBoxOption>
                                <SelectBoxOption value="2">2</SelectBoxOption>
                                <SelectBoxOption value="3">3</SelectBoxOption>
                                <SelectBoxOption value="4">4</SelectBoxOption>
                                <SelectBoxOption value="5-7">5-7</SelectBoxOption>
                                <SelectBoxOption value="8+">8+</SelectBoxOption>
                            </SelectBox>
                        )}
                    />
                </div>
                <div sx={styles.formSectionDate}>
                    <p sx={styles.formSectionLabel}>Select Date</p>
                    <Controller
                        name="date"
                        control={control}
                        rules={{ required: true }}
                        defaultValue={initialValue}
                        render={({ onChange, onBlur, value }) => (
                            <Calendar
                                selected={value}
                                onDateSelected={onSelectDate(onChange)}
                                minDate={minDate}
                                maxDate={maxDate}
                            />
                        )}
                    />
                    {errors.date && (
                        <Text size={0} color="red">
                            {errors.date.message}
                        </Text>
                    )}
                </div>
                <div sx={styles.formSectionTime}>
                    <p sx={styles.formSectionLabel}>Select Time</p>
                    <div>
                        <Controller
                            name="time"
                            control={control}
                            rules={{ required: true }}
                            defaultValue={initialValue}
                            render={({ onChange, onBlur, value }) => (
                                <SelectBox value={value} onChange={onChange} sx={styles.selectBox} pad="0.5em" flex>
                                    <SelectBoxOption value="1">17:00</SelectBoxOption>
                                    <SelectBoxOption value="2">17:30</SelectBoxOption>
                                    <SelectBoxOption value="3">18:00</SelectBoxOption>
                                    <SelectBoxOption value="8+">18:15</SelectBoxOption>
                                    <SelectBoxOption value="4">18:30</SelectBoxOption>
                                    <SelectBoxOption value="4">18:45</SelectBoxOption>
                                    <SelectBoxOption value="5-7">19:00</SelectBoxOption>
                                    <SelectBoxOption value="8+">19:15</SelectBoxOption>
                                    <SelectBoxOption value="8+">19:30</SelectBoxOption>
                                    <SelectBoxOption value="8+">19:45</SelectBoxOption>
                                    <SelectBoxOption value="8+">20:00</SelectBoxOption>
                                    <SelectBoxOption value="8+">20:15</SelectBoxOption>
                                    <SelectBoxOption value="8+">20:30</SelectBoxOption>
                                    <SelectBoxOption value="8+">20:45</SelectBoxOption>
                                    <SelectBoxOption value="8+">21:00</SelectBoxOption>
                                    <SelectBoxOption value="8+">21:45</SelectBoxOption>
                                    <SelectBoxOption value="8+">22:00</SelectBoxOption>
                                </SelectBox>
                            )}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default StepFindTable
