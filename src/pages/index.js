import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
// import {Link} from 'gatsby'

import CalendarContainer from '../components/calendar-container'

const getCurrentDay = () => {
  return new Date().getDate()
}

const IndexPage = props => (
  <div>
    <h1 className="advent-calendar-header">Dog Advent Calendar</h1>
    <div className="image-container">
      <Img fixed={props.data.dogOne.childImageSharp.fixed} />
      <Img fixed={props.data.dogThirteen.childImageSharp.fixed} />
      <Img fixed={props.data.dogTwo.childImageSharp.fixed} />
      <Img fixed={props.data.dogThree.childImageSharp.fixed} />
      <Img fixed={props.data.dogSixteen.childImageSharp.fixed} />
      <Img fixed={props.data.dogFour.childImageSharp.fixed} />
      <Img fixed={props.data.dogFive.childImageSharp.fixed} />
      <Img fixed={props.data.dogTwentyTwo.childImageSharp.fixed} />
      <Img fixed={props.data.dogNineteen.childImageSharp.fixed} />
      <Img fixed={props.data.dogSix.childImageSharp.fixed} />
      <Img fixed={props.data.dogTwentyFour.childImageSharp.fixed} />
      <Img fixed={props.data.dogSeven.childImageSharp.fixed} />
      <Img fixed={props.data.dogEight.childImageSharp.fixed} />
      <Img fixed={props.data.dogNine.childImageSharp.fixed} />
      <Img fixed={props.data.dogTen.childImageSharp.fixed} />
      <Img fixed={props.data.dogEleven.childImageSharp.fixed} />
      <Img fixed={props.data.dogFifteen.childImageSharp.fixed} />
      <Img fixed={props.data.dogSeventeen.childImageSharp.fixed} />
      <Img fixed={props.data.dogFourteen.childImageSharp.fixed} />
      <Img fixed={props.data.dogTwelve.childImageSharp.fixed} />
      <Img fixed={props.data.dogTwenty.childImageSharp.fixed} />
      <Img fixed={props.data.dogTwentyOne.childImageSharp.fixed} />
      <Img fixed={props.data.dogEighteen.childImageSharp.fixed} />
      <Img fixed={props.data.dogTwentyThree.childImageSharp.fixed} />
      <Img className="christmas-grid-cell" fixed={props.data.dogTwentyFive.childImageSharp.fixed} />
    </div>
    <CalendarContainer currentDay={getCurrentDay()}/>
  </div>
)

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
