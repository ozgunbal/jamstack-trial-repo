import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>I'm Özgün Bal.</p>
    <p>I am a software developer with an engineering background. I started my career working on a team that builds software for embedded systems. Currently, my main focus is web development practices. I am also coding as a hobbyist for my personal projects. I contribute to open source projects and follow up-to-date news related to new technologies. I also publish articles on Medium.</p>
    <p><a href="https://github.com/ozgunbal">Github</a></p>
    <p><a href="https://medium.com/@ozgunbal">Medium</a></p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
