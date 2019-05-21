import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
// import "/home/cabox/workspace/gatsby-hello-world/src/styles/global.css"

export default () => (
  <div /*style={{ color: `purple` }} */>
    <Header headerText="Zach's Weather App!" />
    <ul>
    <li><Link to="/">Home Page</Link></li> 
    <li><Link to="/darkabout/">DarkSky Source Info</Link> </li>
    <li><Link to="/openabout/">OpenWeather Source Info</Link> </li>
      </ul>
    </div>
)
