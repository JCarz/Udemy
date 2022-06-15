import React from "react"
import Card from "../componets/shared/Card"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>ABout this Project</h1>

        <p>THis is a react app </p>

        <p>Version 1.0.0</p>

        <p>
          <a href="/">Back to home</a>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
