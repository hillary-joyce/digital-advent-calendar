import React from 'react'
import CalendarDay from './calendar-day'

const generateCalendarDays = (currentDay) => {
  let calendarDays = []
  for (let i = 1; i < 25; i++) {
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

  if(currentDay === 25){
    calendarDays.push(<CalendarDay
      activateDay={(e) => activateDay(e)}
      key={25}
      id={25}
      day={25}
      class="calendar-day christmas-grid-cell"/>)
  } else {
    calendarDays.push(<CalendarDay
      key={25}
      id={25}
      day={25}
      class="calendar-day christmas-grid-cell"/>)
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
