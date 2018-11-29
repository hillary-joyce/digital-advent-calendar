import React from "react"

const CalendarDay = props => (
  <div className="calendar-day" id={props.id}>{props.day}</div>
)

export default CalendarDay
