import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
// import {Link} from 'gatsby'

import CalendarContainer from '../components/calendar-container'

const getCurrentDay = () => {
  // return new Date().getDate()
  return 10
}

const DogPage = props => (
  <div>
    <h1>Hello gatsby-image</h1>
    <div className="image-container">
      <Img fixed={props.data.imageOne.childImageSharp.fixed} />
      <Img fixed={props.data.imageTwo.childImageSharp.fixed} />
      <Img fixed={props.data.imageOne.childImageSharp.fixed} />
      <Img fixed={props.data.imageTwo.childImageSharp.fixed} />
      <Img fixed={props.data.imageOne.childImageSharp.fixed} />
      <Img fixed={props.data.imageTwo.childImageSharp.fixed} />
      <Img fixed={props.data.imageOne.childImageSharp.fixed} />
      <Img fixed={props.data.imageTwo.childImageSharp.fixed} />
      <Img fixed={props.data.imageOne.childImageSharp.fixed} />
      <Img fixed={props.data.imageTwo.childImageSharp.fixed} />
      <Img fixed={props.data.imageOne.childImageSharp.fixed} />
      <Img fixed={props.data.imageTwo.childImageSharp.fixed} />
      <Img fixed={props.data.imageOne.childImageSharp.fixed} />
      <Img fixed={props.data.imageTwo.childImageSharp.fixed} />
      <Img fixed={props.data.imageOne.childImageSharp.fixed} />
      <Img fixed={props.data.imageTwo.childImageSharp.fixed} />
      <Img fixed={props.data.imageOne.childImageSharp.fixed} />
      <Img fixed={props.data.imageTwo.childImageSharp.fixed} />
      <Img fixed={props.data.imageOne.childImageSharp.fixed} />
      <Img fixed={props.data.imageTwo.childImageSharp.fixed} />
      <Img fixed={props.data.imageOne.childImageSharp.fixed} />
      <Img fixed={props.data.imageTwo.childImageSharp.fixed} />
      <Img fixed={props.data.imageOne.childImageSharp.fixed} />
      <Img fixed={props.data.imageTwo.childImageSharp.fixed} />
      <Img fixed={props.data.imageOne.childImageSharp.fixed} />
    </div>
    <CalendarContainer currentDay={getCurrentDay()}/>
  </div>
)

export default DogPage

export const fixedImage = graphql`
fragment fixedImage on File {
  childImageSharp {
    fixed(width: 125, height: 125) {
      ...GatsbyImageSharpFixed
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      ...fixedImage
    }
    imageTwo: file(relativePath: {eq: "gatsby-icon.png"}) {
      ...fixedImage
    }
  }
`
