import React from "react"

const CalendarDay = props => (
  <div onClick={props.activateDay} className="calendar-div" id={props.id}>
    <div className="dog-img">{props.img}</div>
    <div className={props.class}>
      <h1>{props.day}</h1>
    </div>
  </div>
)

export default CalendarDay
