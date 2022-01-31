import React from "react"
import PropTypes from "prop-types"

function Card({ children, reverse }) {
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  )
}
Card.defaultProps = {
  reverse: false,
}
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}
//Style is conditional 

export default Card
//Conditional class for the reverse class card can be white or black. The class will only be there if the Prop is true `` put in a string template. The card class will always be there, but the reverse is conditional  `card ${reverse && "reverse"}`. If reverse then call class reverse.

// Conditional Style:
