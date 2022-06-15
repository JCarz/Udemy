import React from "react"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)
  //Uses the feedback property from the FeedbackContext to get the feedback array

  // calculate Ratings avg . High Order array method
  // Higher order functions are functions that operate on other functions, either by receiving them as arguments or by returning them. It is a function that accepts a function as a parameter or returns a function as the output.
  // Accumulator is what collects the average tha accepts numbers and stores them

  // Take sum divide the feedback ratings(items there are)
  let average =
    feedback.reduce((acaccumulator, current) => {
      return acaccumulator + current.rating
    }, 0) / feedback.length

  // toFixed() formats the number to one decimal place
  // let fixed = average.toFixed(1)
  average = average.toFixed(1).replace(/[.,]0$/, "")

  //REGULAR Expression: /[.,]0$/,'' gets rid of any trailing 0's
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>{isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
