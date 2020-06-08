/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { useState, useRef, useEffect } from 'react'
import { useDayzed } from 'dayzed'
import startOfDay from 'date-fns/startOfDay'
import addMonths from 'date-fns/addMonths'
import addDays from 'date-fns/addDays'
import isEqual from 'date-fns/isEqual'
import startOfWeek from 'date-fns/startOfWeek'
import lastDayOfWeek from 'date-fns/lastDayOfWeek'
import format from 'date-fns/format'

import Scrollable from '~@/display/Scrollable'
import Button from '~@/general/Button'

import { ESC, ENTER, SPACE, LEFT, UP, DOWN, RIGHT, HOME, END, PAGEUP, PAGEDOWN } from './keys'

import styles from './style'

const monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const weekdayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const getDateStatus = ({ selectable, selected }) => {
    const _status = selectable ? 'Available. ' : 'Not available. '
    return selected ? 'Selected. ' : _status
}

const Day = ({ dateObj, getDateProps, ariaDateStatus, focused, onFocus, onDayFocus, onDayKeyDown }) => {
    const dayRef = useRef()

    const { date, selected, selectable, today } = dateObj || {}
    const _isFocused = isEqual(focused, date)

    useEffect(() => {
        if (_isFocused && dayRef.current) {
            dayRef.current.focus()
        }
    }, [_isFocused])

    const handleFocus = (e) => {
        if (!_isFocused) {
            onDayFocus(dateObj, e)

            if (onFocus) {
                onFocus(dateObj, e)
            }
        }
    }

    // Empty Day
    if (!dateObj) {
        return (
            <button sx={styles.monthDayCell} role="gridcell" type="button" tabIndex="-1" aria-hidden="true" disabled>
                {null}
            </button>
        )
    }

    // TODO: use full weekday in label
    const dateLabel = `${today ? 'Today, ' : ''}${format(date, 'eeee, do MMMM yyyy')}`
    // TODO: support when date is unavailable
    const _isTabbed = _isFocused || (!focused && selected)

    // console.log({ date, _isFocused, _isTabbed })

    return (
        <button
            ref={dayRef}
            sx={styles.monthDayCell}
            type="button"
            onKeyDown={onDayKeyDown}
            onFocus={handleFocus}
            {...getDateProps({
                dateObj,
                role: 'gridcell',
                disabled: null, // use aria-disabled to allow for sr
                // tabIndex:
                //     (focused || selected || today) && selectable ? '0' : '-1',
                tabIndex: _isTabbed ? '0' : '-1',
                title: selectable ? dateLabel : 'Unavailable Date',
                'aria-label': `${!ariaDateStatus ? getDateStatus({ selected, selectable }) : ''}${dateLabel}`,
                'aria-disabled': !selectable,
                'aria-pressed': null,
                'aria-selected': selected,
                'aria-current': today ? 'date' : null,
            })}
        >
            <span aria-hidden="true">
                <span sx={styles.monthDayWeek}>{weekdayNamesShort[date.getDay()]}</span>
                <span sx={styles.monthDayValue}>{date.getDate()}</span>
            </span>
        </button>
    )
}

const Calender = ({ ariaDateStatus, onKeyDown, onFocus, onClose, selected, onDateSelected, ...rest }) => {
    const [focused, setFocused] = useState()
    const [offset, setOffset] = useState(0)

    const onOffsetChanged = (_offset) => {
        setOffset(_offset)
    }

    const _normalizedSelected = startOfDay(selected || new Date())

    const { calendars = [], getBackProps, getForwardProps, getDateProps } = useDayzed({
        offset,
        onOffsetChanged,
        selected: _normalizedSelected,
        onDateSelected,
        ...rest,
    })

    const { disabled: isPreviousMonthDisabled, ...backProps } = calendars.length ? getBackProps({ calendars }) : {}
    const { disabled: isNextMonthDisabled, ...forwardProps } = calendars.length ? getForwardProps({ calendars }) : {}
    const { disabled: isPreviousYearDisabled } = calendars.length ? getBackProps({ calendars, offset: -12 }) : {}
    const { disabled: isNextYearDisabled } = calendars.length ? getForwardProps({ calendars, offset: 12 }) : {}

    const handleDayFocus = (dateObj, e) => {
        setFocused(dateObj.date)
    }

    const handleKeyDown = (e) => {
        e.persist()

        switch (e.keyCode) {
            case LEFT: // show previous month
                e.preventDefault()
                if (!isPreviousMonthDisabled) {
                    setOffset(offset - 1)
                    // TODO: make startofmonth tabable or next available date
                }
                break
            case RIGHT: // show next month
                e.preventDefault()
                if (!isNextMonthDisabled) {
                    setOffset(offset + 1)
                }
                break
            case UP: // show previous year
                e.preventDefault()
                if (!isPreviousYearDisabled) {
                    setOffset(offset - 12)
                }
                break
            case DOWN: // show next year
                e.preventDefault()
                if (!isNextYearDisabled) {
                    setOffset(offset + 12)
                }
                break
            case ESC: // close calendar
                // Calendar that's part of a picker won't have onClose
                // hence ESC bubbles up to picker to handle close by itself
                if (onClose) {
                    // event is passed to onClose to handle
                    // preventDefault() || stopPropagation() if necessary
                    onClose(e)
                }
                break
            default:
                break
        }

        if (onKeyDown) {
            onKeyDown(e)
        }
    }

    const handleDayKeyDown = (e) => {
        e.persist()

        const { firstDayOfMonth, lastDayOfMonth, month: currentMonth } = calendars[0]
        let newFocused
        let willChangeMonth

        switch (e.keyCode) {
            case PAGEUP: // focus previous month
                e.preventDefault()
                e.stopPropagation()
                if (!isPreviousMonthDisabled) {
                    setOffset(offset - 1)
                    setFocused(addMonths(focused, -1))
                }
                break
            case PAGEDOWN: // focus next month
                e.preventDefault()
                e.stopPropagation()
                if (!isNextMonthDisabled) {
                    setOffset(offset + 1)
                    setFocused(addMonths(focused, 1))
                }
                break
            case HOME: // focus start of week
                e.preventDefault()
                e.stopPropagation()
                newFocused = startOfWeek(focused)
                willChangeMonth = newFocused.getMonth() !== currentMonth
                if (!(isPreviousMonthDisabled && willChangeMonth)) {
                    if (willChangeMonth) {
                        setOffset(offset - 1)
                    }
                    setFocused(newFocused)
                }
                break
            case END: // focus end of week
                e.preventDefault()
                e.stopPropagation()
                newFocused = lastDayOfWeek(focused)
                willChangeMonth = newFocused.getMonth() !== currentMonth
                if (!(isNextMonthDisabled && willChangeMonth)) {
                    if (willChangeMonth) {
                        setOffset(offset + 1)
                    }
                    setFocused(newFocused)
                }
                break
            case UP: // focus previous week
                e.preventDefault()
                e.stopPropagation()
                newFocused = addDays(focused, -7)
                willChangeMonth = newFocused.getMonth() !== currentMonth
                if (!(isPreviousMonthDisabled && willChangeMonth)) {
                    if (willChangeMonth) {
                        setOffset(offset - 1)
                    }
                    setFocused(newFocused)
                }
                break
            case DOWN: // focus next week
                e.preventDefault()
                e.stopPropagation()
                newFocused = addDays(focused, 7)
                willChangeMonth = newFocused.getMonth() !== currentMonth
                if (!(isNextMonthDisabled && willChangeMonth)) {
                    if (willChangeMonth) {
                        setOffset(offset + 1)
                    }
                    setFocused(newFocused)
                }
                break
            case LEFT: // focus previous day
                e.preventDefault()
                e.stopPropagation()
                willChangeMonth = isEqual(focused, firstDayOfMonth)
                if (!(isPreviousMonthDisabled && willChangeMonth)) {
                    if (willChangeMonth) {
                        setOffset(offset - 1)
                    }
                    setFocused(addDays(focused, -1))
                }
                break
            case RIGHT: // focus next day
                e.preventDefault()
                e.stopPropagation()
                willChangeMonth = isEqual(focused, lastDayOfMonth)
                if (!(isNextMonthDisabled && willChangeMonth)) {
                    if (willChangeMonth) {
                        setOffset(offset + 1)
                    }
                    setFocused(addDays(focused, 1))
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
    }

    if (!calendars.length) return null

    // TODO: consider aria-disabled for navigation buttons
    return (
        <div sx={styles.container} role="presentation" tabIndex="0" aria-hidden="false" onKeyDown={handleKeyDown}>
            <div sx={styles.nav}>
                <Button
                    type="outline"
                    color="secondary"
                    size="sm"
                    icon="arrowleft"
                    title={isPreviousMonthDisabled ? 'Minimum month reached' : 'Previous month'}
                    disabled={isPreviousMonthDisabled}
                    {...backProps}
                    aria-label={isPreviousMonthDisabled ? 'Minimum month reached' : 'Previous month'}
                />
                <Button
                    type="outline"
                    color="secondary"
                    size="sm"
                    icon="arrowright"
                    title={isNextMonthDisabled ? 'Maximum month reached' : 'Next month'}
                    disabled={isNextMonthDisabled}
                    {...forwardProps}
                    aria-label={isNextMonthDisabled ? 'Maximum month reached' : 'Next month'}
                />
            </div>
            {calendars.map((calendar) => (
                <div key={`${calendar.month}${calendar.year}`} sx={styles.month}>
                    <div
                        id="id-calendar-label"
                        role="heading"
                        aria-live="polite"
                        aria-atomic="true"
                        sx={styles.monthTitle}
                    >
                        <span className="visually-hidden">Currently viewing calender month </span>
                        {monthNamesShort[calendar.month]} <span>{calendar.year}</span>
                    </div>
                    <div role="grid" aria-labelledby="id-calendar-label" sx={styles.monthBody}>
                        <div role="rowgroup">
                            <div role="row" sx={styles.monthWeekDays}>
                                {weekdayNamesShort.map((weekday) => (
                                    <div role="columnheader" key={`${calendar.month}${calendar.year}${weekday}`}>
                                        <abbr title={weekday}>{weekday}</abbr>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Scrollable role="rowgroup" flex hideScroll sx={styles.monthGridDays}>
                            {calendar.weeks.map((week, weekIndex) => {
                                const key = `${calendar.month}${calendar.year}${weekIndex}`
                                return (
                                    <div role="row" key={key} sx={styles.monthRowDays}>
                                        {week.map((dateObj, index) => (
                                            <Day
                                                key={key + index}
                                                dateObj={dateObj}
                                                getDateProps={getDateProps}
                                                focused={focused}
                                                onFocus={onFocus}
                                                onDayFocus={handleDayFocus}
                                                onDayKeyDown={handleDayKeyDown}
                                                ariaDateStatus={ariaDateStatus}
                                            />
                                        ))}
                                    </div>
                                )
                            })}
                        </Scrollable>
                    </div>
                </div>
            ))}
        </div>
    )
}

const Single = () => {
    const [selected, setSelected] = useState(new Date())

    const minDate = startOfDay(new Date())
    const maxDate = addMonths(new Date(), 3)

    const onSelectDate = ({ selected, selectable, date }, e) => {
        if (selectable && !selected) setSelected(date)
    }

    return <Calender selected={selected} onDateSelected={onSelectDate} minDate={minDate} maxDate={maxDate} />
}

export default Single

/**
 * Layout -> default, normal, strip
 * enableMonthPicker
 * enableYearPicker
 * Memoized version
 */
