import React from "react"

const CalendarDay = props => (
  <div onClick={props.activateDay} className={props.class} id={props.id}>
    <h1>{props.day}</h1>
  </div>
)

export default CalendarDay
