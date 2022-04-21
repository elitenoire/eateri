import { memo, forwardRef, useState, useRef, useEffect, useCallback } from 'react'
import { useDayzed } from 'dayzed'
import startOfDay from 'date-fns/startOfDay'
import addMonths from 'date-fns/addMonths'
import addDays from 'date-fns/addDays'
import isEqual from 'date-fns/isEqual'
import startOfWeek from 'date-fns/startOfWeek'
import lastDayOfWeek from 'date-fns/lastDayOfWeek'
import getWeekOfMonth from 'date-fns/getWeekOfMonth'

import { Scrollable } from '~@core/display'
import { Button } from '~@core/general'
import CalendarWeek from './Week'

import { monthNames, weekDayNames } from './locale'
import styles from './style'

import { ESC, ENTER, SPACE, LEFT, UP, DOWN, RIGHT, HOME, END, PAGEUP, PAGEDOWN } from './keys'

function WeekDays({ month, year }) {
    return (
        <div role="rowgroup">
            <div role="row" sx={styles.monthWeekDays}>
                {weekDayNames.map(({ short: weekday, long: weekdayLong }) => (
                    <div role="columnheader" key={`${month}${year}${weekday}`}>
                        <abbr title={weekdayLong}>{weekday}</abbr>
                    </div>
                ))}
            </div>
        </div>
    )
}

const MemoizedWeekDay = memo(WeekDays)

const Calendar = forwardRef(function Calendar(
    { ariaDateStatus, onKeyDown, onClose, value, onChange, className, ...rest },
    ref
) {
    /** *****************************************
     * STATE + COMPUTED PROPERTIES
     ***************************************** */

    const [focused, setFocused] = useState()
    const [offset, setOffset] = useState(0)

    const weeksToChange = useRef({})
    const allowDayFocus = useRef(false)

    const selected = startOfDay(value)
    const _selectedRowId = getWeekOfMonth(selected) - 1
    const _focusedRowId = getWeekOfMonth(focused) - 1

    const selectedRef = useRef(selected)

    const onOffsetChanged = _offset => {
        allowDayFocus.current = false
        setOffset(_offset)
    }

    const onDateSelected = (dateObj, e) => {
        const { date, ...props } = dateObj

        // focus on selected date
        allowDayFocus.current = true
        setFocused(date)

        // support unselect date
        const _value = props.selected ? null : date

        // handle date selection
        if (onChange) {
            onChange(_value, props, e)
        }
    }

    const {
        calendars = [],
        getBackProps,
        getForwardProps,
        getDateProps,
    } = useDayzed({
        selected,
        onDateSelected,
        offset,
        onOffsetChanged,
        ...rest,
    })

    const _getDateProps = useCallback(_props => getDateProps(_props), [])

    const { firstDayOfMonth, lastDayOfMonth, month: currentMonth } = calendars[0] || {}

    const {
        disabled: isPreviousMonthDisabled,
        onClick: goPrevMonth,
        ...backProps
    } = calendars.length ? getBackProps({ calendars }) : {}

    const {
        disabled: isNextMonthDisabled,
        onClick: goNextMonth,
        ...forwardProps
    } = calendars.length ? getForwardProps({ calendars }) : {}

    const { disabled: isPreviousYearDisabled, onClick: goPrevYear } = calendars.length
        ? getBackProps({ calendars, offset: 12 })
        : {}

    const { disabled: isNextYearDisabled, onClick: goNextYear } = calendars.length
        ? getForwardProps({ calendars, offset: 12 })
        : {}

    const _monthHasFocused = focused && focused.getMonth() === currentMonth
    const _monthHasSelected = selected && selected.getMonth() === currentMonth

    const canTabFirstDay = !(_monthHasFocused || _monthHasSelected)

    /** *****************************************
     * SIDE EFFECTS
     ***************************************** */

    useEffect(() => {
        selectedRef.current = selected
    }, [selected])

    useEffect(() => {
        weeksToChange.current = {}
    }, [offset])

    useEffect(() => {
        if (_monthHasSelected) {
            weeksToChange.current.selected = _selectedRowId
            weeksToChange.current.new = _selectedRowId
        }
    }, [_selectedRowId, _monthHasSelected])

    useEffect(() => {
        if (_monthHasFocused) {
            weeksToChange.current.new = _focusedRowId
        }
    }, [_focusedRowId, _monthHasFocused])

    /** *****************************************
     * EVENT HANDLERS
     ***************************************** */

    const _onWeekChange = useCallback((rowId, e) => {
        if (e) {
            e.stopPropagation()
        }
        if (weeksToChange.current) {
            weeksToChange.current.old = weeksToChange.current.new
        } else {
            weeksToChange.current.selected = undefined
        }
        weeksToChange.current.new = rowId
    }, [])

    const handleCalendarKeyDown = useCallback(
        e => {
            e.persist()

            switch (e.keyCode) {
                case LEFT: // show previous month
                    e.preventDefault()
                    allowDayFocus.current = false
                    if (!isPreviousMonthDisabled) {
                        setOffset(_offset => _offset - 1)
                    }
                    break
                case RIGHT: // show next month
                    e.preventDefault()
                    allowDayFocus.current = false
                    if (!isNextMonthDisabled) {
                        setOffset(_offset => _offset + 1)
                    }
                    break
                case UP: // show previous year
                    allowDayFocus.current = false
                    if (!isPreviousYearDisabled) {
                        goPrevYear(e)
                    }
                    e.preventDefault()
                    break
                case DOWN: // show next year
                    allowDayFocus.current = false
                    if (!isNextYearDisabled) {
                        goNextYear(e)
                    }
                    e.preventDefault()
                    break
                case ESC: // close calendar
                    // Calendar that's part of a picker won't have onClose
                    // hence ESC bubbles up to picker to handle close by itself
                    if (onClose) {
                        // event is passed to onClose to handle
                        // preventDefault() || stopPropagation() if necessary
                        allowDayFocus.current = false
                        onClose(e)
                    }
                    break
                default:
                    break
            }

            if (onKeyDown) {
                onKeyDown(e)
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [isPreviousMonthDisabled, isNextMonthDisabled, isPreviousYearDisabled, isNextYearDisabled, onClose, onKeyDown]
    )

    const handleDayKeyDown = useCallback(
        (e, focused_, rowId) => {
            e.persist()

            let newFocused
            let willChangeMonth

            allowDayFocus.current = true

            switch (e.keyCode) {
                case UP: // focus previous week
                    e.preventDefault()
                    e.stopPropagation()
                    newFocused = addDays(focused_, -7)
                    willChangeMonth = newFocused.getMonth() !== currentMonth
                    if (!(isPreviousMonthDisabled && willChangeMonth)) {
                        if (willChangeMonth) {
                            setOffset(_offset => _offset - 1)
                        } else {
                            _onWeekChange(rowId - 1)
                        }
                        setFocused(newFocused)
                    }
                    break
                case DOWN: // focus next week
                    e.preventDefault()
                    e.stopPropagation()
                    newFocused = addDays(focused_, 7)
                    willChangeMonth = newFocused.getMonth() !== currentMonth
                    if (!(isNextMonthDisabled && willChangeMonth)) {
                        if (willChangeMonth) {
                            setOffset(_offset => _offset + 1)
                        } else {
                            _onWeekChange(rowId + 1)
                        }
                        setFocused(newFocused)
                    }
                    break
                case LEFT: // focus previous day
                    e.preventDefault()
                    e.stopPropagation()
                    newFocused = addDays(focused_, -1)
                    willChangeMonth = isEqual(focused_, firstDayOfMonth)
                    if (!(isPreviousMonthDisabled && willChangeMonth)) {
                        if (willChangeMonth) {
                            setOffset(_offset => _offset - 1)
                        } else {
                            _onWeekChange(getWeekOfMonth(newFocused) - 1)
                        }
                        setFocused(newFocused)
                    }
                    break
                case RIGHT: // focus next day
                    e.preventDefault()
                    e.stopPropagation()
                    newFocused = addDays(focused_, 1)
                    willChangeMonth = isEqual(focused_, lastDayOfMonth)
                    if (!(isNextMonthDisabled && willChangeMonth)) {
                        if (willChangeMonth) {
                            setOffset(_offset => _offset + 1)
                        } else {
                            _onWeekChange(getWeekOfMonth(newFocused) - 1)
                        }
                        setFocused(newFocused)
                    }
                    break
                case PAGEUP: // focus previous month
                    e.preventDefault()
                    e.stopPropagation()
                    if (!isPreviousMonthDisabled) {
                        setOffset(_offset => _offset - 1)
                        setFocused(_focused => addMonths(_focused, -1))
                    }
                    break
                case PAGEDOWN: // focus next month
                    e.preventDefault()
                    e.stopPropagation()
                    if (!isNextMonthDisabled) {
                        setOffset(_offset => _offset + 1)
                        setFocused(_focused => addMonths(_focused, 1))
                    }
                    break
                case HOME: // focus start of week
                    e.preventDefault()
                    e.stopPropagation()
                    newFocused = startOfWeek(focused_)
                    willChangeMonth = newFocused.getMonth() !== currentMonth
                    if (!(isPreviousMonthDisabled && willChangeMonth)) {
                        if (willChangeMonth) {
                            setOffset(_offset => _offset - 1)
                        } else {
                            _onWeekChange(rowId)
                        }
                        setFocused(newFocused)
                    }
                    break
                case END: // focus end of week
                    e.preventDefault()
                    e.stopPropagation()
                    newFocused = lastDayOfWeek(focused_)
                    willChangeMonth = newFocused.getMonth() !== currentMonth
                    if (!(isNextMonthDisabled && willChangeMonth)) {
                        if (willChangeMonth) {
                            setOffset(_offset => _offset + 1)
                        } else {
                            _onWeekChange(rowId)
                        }
                        setFocused(newFocused)
                    }
                    break
                case ENTER:
                case SPACE: // select focused date
                    // allow default which calls the onClick handler
                    // only stop event from bubbling up
                    e.stopPropagation()
                    break
                default:
                    break
            }
        }, // change in offset results in first and last day change
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentMonth, offset, isNextMonthDisabled, isPreviousMonthDisabled, _onWeekChange]
    )

    /** *****************************************
     * RENDER
     ***************************************** */

    if (!calendars.length) return null

    return (
        <div
            ref={ref}
            sx={styles.container}
            role="presentation"
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex="0"
            aria-hidden="false"
            className={className}
            onKeyDown={handleCalendarKeyDown}
        >
            <div sx={styles.nav}>
                <Button
                    type="button"
                    brand="outline"
                    color="secondary"
                    icon="arrowleft"
                    title={isPreviousMonthDisabled ? 'Minimum month reached' : 'Previous month'}
                    {...backProps}
                    aria-disabled={isPreviousMonthDisabled}
                    aria-label={isPreviousMonthDisabled ? 'Minimum month reached' : 'Previous month'}
                    onClick={isPreviousMonthDisabled ? undefined : goPrevMonth}
                />
                <Button
                    ml={2}
                    type="button"
                    brand="outline"
                    color="secondary"
                    icon="arrowright"
                    title={isNextMonthDisabled ? 'Maximum month reached' : 'Next month'}
                    {...forwardProps}
                    aria-disabled={isNextMonthDisabled}
                    aria-label={isNextMonthDisabled ? 'Maximum month reached' : 'Next month'}
                    onClick={isNextMonthDisabled ? undefined : goNextMonth}
                />
            </div>
            {calendars.map(calendar => (
                <div key={`${calendar.month}${calendar.year}`} sx={styles.month}>
                    <div id="id-calendar-label" aria-live="polite" aria-atomic="true" sx={styles.monthTitle}>
                        <span className="visually-hidden">{`Currently viewing calender month, ${
                            monthNames[calendar.month].long
                        }`}</span>
                        <span aria-hidden="true">{monthNames[calendar.month].short}</span>
                        <span>{calendar.year}</span>
                    </div>
                    <div role="grid" aria-labelledby="id-calendar-label" sx={styles.monthBody}>
                        <MemoizedWeekDay month={calendar.month} year={calendar.year} />
                        <Scrollable
                            role="rowgroup"
                            cursor="default"
                            pad="0.5em"
                            flex
                            hideScroll
                            sx={styles.monthGridDays}
                        >
                            {calendar.weeks.map((week, weekIndex) => {
                                const key = `${calendar.month}${calendar.year}${weekIndex}`
                                const _canTabFirstDay = weekIndex === 0 ? canTabFirstDay : undefined
                                const willChange = weeksToChange.current
                                    ? weekIndex === weeksToChange.current.new ||
                                      weekIndex === weeksToChange.current.old ||
                                      (weekIndex === weeksToChange.current.selected && _selectedRowId !== weekIndex)
                                    : undefined

                                return (
                                    <CalendarWeek
                                        key={key}
                                        rowId={weekIndex}
                                        month={calendar.month}
                                        year={calendar.year}
                                        dates={week}
                                        focused={focused}
                                        willChange={willChange}
                                        canTabFirstDay={_canTabFirstDay}
                                        allowDayFocus={allowDayFocus}
                                        getDateProps={_getDateProps}
                                        onWeekChange={_onWeekChange}
                                        onDayKeyDown={handleDayKeyDown}
                                        ariaDateStatus={ariaDateStatus}
                                    />
                                )
                            })}
                        </Scrollable>
                    </div>
                </div>
            ))}
        </div>
    )
})

// Example of how to use
export function Single() {
    const [value, setValue] = useState(new Date())

    const minDate = startOfDay(new Date())
    const maxDate = addMonths(new Date(), 3)

    const handleChange = useCallback((date, { selected: isSelected, selectable }) => {
        if (selectable && !isSelected) {
            setValue(date)
        }
    }, [])

    return <Calendar value={value} onChange={handleChange} minDate={minDate} maxDate={maxDate} />
}

export default Calendar

/**
 * Layout -> default, normal, strip
 * enableMonthPicker
 * enableYearPicker
 * Memoized version
 */
