import React from 'react'
import CalendarDay from './calendar-day'

const generateCalendarDays = (currentDay) => {
  let calendarDays = []
  for (let i = 1; i < 26; i++) {
    if(i === currentDay){
      calendarDays.push(<CalendarDay
        activateDay={(e) => activateDay(e)}
        key={i}
        id={i}
        day={i}
        class={i >= currentDay ? "calendar-day" : "calendar-day hidden-day"}/>)
    } else {
      calendarDays.push(<CalendarDay
        key={i}
        id={i}
        day={i}
        class={i >= currentDay ? "calendar-day" : "calendar-day hidden-day"}/>)
    }
  }
  return calendarDays
}

const activateDay = (e) => {
  e.currentTarget.style.opacity = 0
}

const CalendarContainer = props => (
  <div className="calendar-container">
    {generateCalendarDays(props.currentDay)}
  </div>
)

export default CalendarContainer
