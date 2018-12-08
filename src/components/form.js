import React from "react"

const NewCalendarForm = props => (
  <div className="form-div">
    <p className="form-header">Create a new countdown calendar</p>
    <form onSubmit={props.createNewCalendar} className="calendar-form">
      <div className="form-block">
        <label htmlFor="end_date">Date to Countdown:</label>
        <input type="text" name="end_date" placeholder="yyyy/mm/dd" id="end_date"/>
      </div>
      <div className="form-block">
        <label htmlFor="title">Type of Event: </label>
        <input type="text" name="title" id="title" placeholder="Jim's Birthday etc."/>
      </div>
      <input className="button submit-btn" id="create-calendar" type="submit" value="CREATE CALENDAR"/>
    </form>

    <p className="form-header">...or find a previously created calendar</p>
    <form onSubmit={props.findCalendar} className="find-form">
      <label htmlFor="calendar_id">Calendar ID</label>
      <input type="text" name="calendar_id"/>
      <input className="button submit-btn" type="submit" value="FIND CALENDAR"/>
      {props.wrongID ? <p>Calendar ID not found</p> : null}
    </form>
  </div>
)

export default NewCalendarForm;
