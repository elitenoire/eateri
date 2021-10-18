import { memo } from 'react'
import isEqual from 'date-fns/isEqual'
import CalendarDay from './Day'
import { weekStyles } from './style'

function WeekRow({ month, year, rowId, dates, focused, canTabFirstDay, onWeekChange, willChange, ...dayProps }) {
    return (
        <div role="row" sx={weekStyles.monthRowDays}>
            {dates.map((dateObj, index) => {
                const { date, selected, selectable, today, prevMonth, nextMonth } = dateObj || {}
                const isFocused = isEqual(focused, date)
                const _day = date && date.getDate()
                const _canTabFirstDay = _day === 1 ? canTabFirstDay : undefined
                return (
                    <CalendarDay
                        key={`${month}${year}${rowId}${index}`}
                        index={index}
                        rowId={rowId}
                        onWeekChange={onWeekChange}
                        isFocused={isFocused}
                        canTabFirstDay={_canTabFirstDay}
                        day={_day}
                        month={month}
                        year={year}
                        selected={selected}
                        selectable={selectable}
                        today={today}
                        prevMonth={prevMonth}
                        nextMonth={nextMonth}
                        {...dayProps}
                    />
                )
            })}
        </div>
    )
}

const updateWeek = (prev, next) => !next.willChange && prev.canTabFirstDay === next.canTabFirstDay

const CalendarWeek = memo(WeekRow, updateWeek)

export default CalendarWeek
