import React from 'react'
import CalendarDay from './calendar-day'

const generateCalendarDays = () => {
  let calendarDays = []
  for (let i = 1; i < 26; i++) {
    calendarDays.push(<CalendarDay id={i} day={i}/>)
  }
  return calendarDays
}

const CalendarContainer = props => (
  <div className="calendar-container">
    {generateCalendarDays()}
  </div>
)

export default CalendarContainer
