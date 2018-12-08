import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import NewCalendarForm from "../components/form"
// import {Link} from 'gatsby'

// import CalendarContainer from '../components/calendar-container'
import CalendarDay from '../components/calendar-day'


class IndexPage extends React.Component {
  state = {
    totalDays: 0,
    title: "",
    calendarView: false,
    wrongID: false,
    dogImgs: [<Img fixed={this.props.data.dogThree.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogOne.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogFour.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogFive.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogSix.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogSeven.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogEight.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogTwo.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogNine.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogTen.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogEleven.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogTwelve.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogThirteen.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogFourteen.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogFifteen.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogSixteen.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogSeventeen.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogEighteen.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogNineteen.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogTwenty.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogTwentyOne.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogTwentyTwo.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogTwentyThree.childImageSharp.fixed} />,
    <Img fixed={this.props.data.dogTwentyFour.childImageSharp.fixed} />
  ],
    calendarDays: []
  }

  getCurrentDay = () => {
    return new Date()
  }

  convertDateToString = () => {
    let date = this.getCurrentDay()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    return `${year}/${month}/${day}`
  }






  renderCalendar = (start, end) => {
    let calendarCount = Math.abs(new Date(start) - new Date(end))/(1000 * 60 * 60 * 24)
    let daysCompleted = Math.abs(new Date(this.convertDateToString()) - new Date(end))/(1000 * 60 * 60 * 24)

    this.setState({totalDays: calendarCount})

    let calendarDays = []
    for(let i=1; i <= calendarCount; i++){
      calendarDays.unshift(<CalendarDay
        key={i}
        day={i}
        class="calendar-div"
        img={this.state.dogImgs[Math.floor(Math.random() * 23)]}
        class={i <= daysCompleted ? "calendar-day-card" : "calendar-day-card  hidden-day"}
      />)
    }
    calendarDays.push(<div className="final-day-div"><h2>You Made It!!!</h2></div>)
    this.setState({calendarDays: calendarDays})
  }


  createNewCalendar = (e) => {
    e.preventDefault()
    let inputs = e.target.querySelectorAll("input")

    let date = this.convertDateToString()

    let data = {
      start_date: date,
      end_date: inputs[0].value,
      title: inputs[1].value
    }
    fetch("http://localhost:3000/api/v1/calendars", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(r => r.json()).then(d => {
      this.renderCalendar(d.start_date, d.end_date)
      this.setState({
        title: d.title,
        calendarView: true
      })
    })
  }

  findCalendar = (e) => {
    e.preventDefault()
    let calendarId = e.target.querySelectorAll("input")[0].value

    fetch(`http://localhost:3000/api/v1/calendars/${calendarId}`)
      .then(r => r.json())
      .then(d => {
        if(d.status === 404){
          this.setState({wrongID: true})
        } else {
          this.renderCalendar(d.start_date, d.end_date)
          this.setState({title: d.title, calendarView: true})
        }
      })
  }


  render(){
    return(
      <div>
        <div className="header-dog-div">
          <Img fixed={this.props.data.dogThree.childImageSharp.fixed} />
        </div>
        <h1>{this.state.title != "" ? `${this.state.totalDays} days until ${this.state.title}` : "Dog Countdown Calendar"}</h1>
        {this.state.calendarView ?
          <div className="calendar-grid">
            {this.state.calendarDays}
          </div>
          :
          <NewCalendarForm createNewCalendar={this.createNewCalendar} findCalendar={this.findCalendar}/>}
      </div>
    )
  }
}

export default IndexPage

export const fixedImage = graphql`
fragment fixedImage on File {
  childImageSharp {
    fixed(width: 125, height: 125) {
      ...GatsbyImageSharpFixed
    }
  }
}
`;

export const largeImage = graphql`
fragment largeImage on File {
  childImageSharp {
    fixed(width: 400, height: 400) {
      ...GatsbyImageSharpFixed
    }
  }
}
`;

const dogImgNames = ["dogOne", "dogTwo", "dogThree", "dogFour", "dogFive"]

export const pageQuery = graphql`
  query {
    dogOne: file(relativePath: { eq: "dog-1.png" }) {
      ...fixedImage
    }
    dogTwo: file(relativePath: {eq: "dog-2.png"}) {
      ...fixedImage
    }
    dogThree: file(relativePath: {eq: "dog-3.png"}) {
      ...fixedImage
    }
    dogFour: file(relativePath: {eq: "dog-4.png"}) {
      ...fixedImage
    }
    dogFive: file(relativePath: {eq: "dog-5.png"}) {
      ...fixedImage
    }
    dogSix: file(relativePath: {eq: "dog-6.png"}) {
      ...fixedImage
    }
    dogSeven: file(relativePath: {eq: "dog-7.png"}) {
      ...fixedImage
    }
    dogEight: file(relativePath: {eq: "dog-8.png"}) {
      ...fixedImage
    }
    dogNine: file(relativePath: {eq: "dog-9.png"}) {
      ...fixedImage
    }
    dogTen: file(relativePath: {eq: "dog-10.png"}) {
      ...fixedImage
    }
    dogEleven: file(relativePath: {eq: "dog-11.png"}) {
      ...fixedImage
    }
    dogTwelve: file(relativePath: {eq: "dog-12.png"}) {
      ...fixedImage
    }
    dogThirteen: file(relativePath: {eq: "dog-13.png"}) {
      ...fixedImage
    }
    dogFourteen: file(relativePath: {eq: "dog-14.png"}) {
      ...fixedImage
    }
    dogFifteen: file(relativePath: {eq: "dog-15.png"}) {
      ...fixedImage
    }
    dogSixteen: file(relativePath: {eq: "dog-16.png"}) {
      ...fixedImage
    }
    dogSeventeen: file(relativePath: {eq: "dog-17.png"}) {
      ...fixedImage
    }
    dogEighteen: file(relativePath: {eq: "dog-18.png"}) {
      ...fixedImage
    }
    dogNineteen: file(relativePath: {eq: "dog-20.png"}) {
      ...fixedImage
    }
    dogTwenty: file(relativePath: {eq: "dog-19.png"}) {
      ...fixedImage
    }
    dogTwentyOne: file(relativePath: {eq: "dog-21.png"}) {
      ...fixedImage
    }
    dogTwentyTwo: file(relativePath: {eq: "dog-22.png"}) {
      ...fixedImage
    }
    dogTwentyThree: file(relativePath: {eq: "dog-23.png"}) {
      ...fixedImage
    }
    dogTwentyFour: file(relativePath: {eq: "dog-24.png"}) {
      ...fixedImage
    }
    dogTwentyFive: file(relativePath: {eq: "dog-25.png"}) {
      ...largeImage
    }
  }
`
