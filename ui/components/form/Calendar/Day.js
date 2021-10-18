import { useRef, useEffect, memo } from 'react'
import format from 'date-fns/format'

import { weekDayNames } from './locale'
import { dayStyles } from './style'

const getDateStatus = ({ selectable, selected }) => {
    const _status = selectable ? 'Available. ' : 'Not available. '
    return selected ? 'Selected. ' : _status
}

function Day({
    rowId,
    index,
    day,
    month,
    year,
    selected,
    selectable,
    today,
    prevMonth,
    nextMonth,
    isFocused,
    allowDayFocus,
    canTabFirstDay,
    getDateProps,
    ariaDateStatus,
    onWeekChange,
    onDayKeyDown,
}) {
    const dayRef = useRef()
    const date = new Date(year, month, day)
    const dateObj = { date, selected, selectable, today, prevMonth, nextMonth }

    useEffect(() => {
        if (allowDayFocus.current && isFocused && dayRef.current && document.activeElement !== dayRef.current) {
            dayRef.current.focus()
        }
    }, [isFocused, allowDayFocus])

    const handleKeyDown = (_date, _rowId) => e => {
        onDayKeyDown(e, _date, _rowId)
    }

    const handleClick = _rowId => e => {
        onWeekChange(_rowId, e)
    }

    // Empty Day
    if (!day) {
        return (
            <button sx={dayStyles.monthDayCell} role="gridcell" type="button" tabIndex="-1" aria-hidden="true" disabled>
                {null}
            </button>
        )
    }
    const dateLabel = `${today ? 'Today, ' : ''}${format(date, 'eeee, do MMMM yyyy')}`
    const _isTabbed = isFocused || selected || canTabFirstDay

    return (
        <button
            ref={dayRef}
            className="calendar--day"
            sx={dayStyles.monthDayCell}
            type="button"
            onKeyDown={handleKeyDown(date, rowId)}
            {...getDateProps({
                onClick: handleClick(rowId),
                dateObj,
                role: 'gridcell',
                disabled: null,
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
                <span sx={dayStyles.monthDayWeek}>{weekDayNames[index].short}</span>
                <span sx={dayStyles.monthDayValue}>{day}</span>
            </span>
        </button>
    )
}

const updateDay = (prev, next) =>
    prev.isFocused === next.isFocused &&
    prev.selected === next.selected &&
    prev.selectable === next.selectable &&
    prev.today === next.today &&
    prev.canTabFirstDay === next.canTabFirstDay

const CalendarDay = memo(Day, updateDay)

export default CalendarDay
