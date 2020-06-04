/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { useState } from 'react'
import { useDayzed } from 'dayzed'
// import subDays from 'date-fns/subDays'
import startOfDay from 'date-fns/startOfDay'
import addMonths from 'date-fns/addMonths'
import Scrollable from '~@/display/Scrollable'
import Button from '~@/general/Button'

import styles from './style'

const monthNamesShort = [
'Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun',
'Jul',
'Aug',
'Sep',
'Oct',
'Nov',
'Dec'
]
const weekdayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const getDateStatus = ({selectable, selected}) => {
    const _status = selectable ? 'Available. ' : 'Not available. '
    return selected ? 'Selected. ' : _status
}

const Calender = ({ariaDateStatus, ...rest}) => {
    const { calendars, getBackProps, getForwardProps, getDateProps } = useDayzed(rest)

    if (!calendars.length) return null

    return (
        <div sx={styles.container} tabIndex="0" aria-hidden="false">
            <div sx={styles.nav}>
                <Button type="outline" color="secondary" size="sm" icon="arrowleft" title="Previous Month" {...getBackProps({ calendars })}/>
                <Button type="outline" color="secondary" size="sm" icon="arrowright" title="Next Month" {...getForwardProps({ calendars })}/>
            </div>
            {calendars.map(calendar => (
                <div key={`${calendar.month}${calendar.year}`} sx={styles.month}>
                    <div id="id-calendar-label" role="heading" aria-live="polite" aria-atomic="true" sx={styles.monthTitle}><span className="visually-hidden">Currently viewing calender month </span>{monthNamesShort[calendar.month]} <span>{calendar.year}</span></div>
                    <div role="grid" aria-labelledby="id-calendar-label" sx={styles.monthBody}>
                        <div role="rowgroup">
                            <div role="row" sx={styles.monthWeekDays}>
                            {weekdayNamesShort.map(weekday => (
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
                                    {week.map((dateObj, index) => {
                                        if(!dateObj) {
                                            return (
                                            <button
                                            key={key + index}
                                            sx={styles.monthDayCell}
                                            role="gridcell"
                                            tabIndex="-1"
                                            aria-hidden="true"
                                            disabled
                                            >
                                            {null}
                                            </button>
                                            )
                                        }
                                        const { date, selected, selectable, today } = dateObj
                                        // TODO: use full weekday in label
                                        const dateLabel = `${today? 'Today, ':''}${date.toDateString()}`
                                        return (
                                        <button
                                        key={key + index}
                                        sx={styles.monthDayCell}
                                        {...getDateProps({
                                            dateObj,
                                            role: 'gridcell',
                                            disabled: null, // use aria-disabled to allow for sr
                                            tabIndex: selected ? '0' : '-1',
                                            title: selectable ? dateLabel :'Unavailable Date',
                                            'aria-label': `${!ariaDateStatus ? getDateStatus({selected, selectable}):''}${dateLabel}`,
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
                                    })}
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
    const [ selected, setSelected ] = useState(new Date())

    const minDate = startOfDay(new Date()) // subDays(new Date(), 1)
    const maxDate = addMonths(new Date(), 3)

    const onSelectDate = ({ selected, selectable, date },e) => {
        if (selectable && !selected) setSelected(date)
    }
    return (
        <Calender selected={selected} onDateSelected={onSelectDate} minDate={minDate} maxDate={maxDate}/>
    )
}

export default Single

/**
 * Layout -> default, normal, strip
 * enableMonthPicker
 * enableYearPicker
 */