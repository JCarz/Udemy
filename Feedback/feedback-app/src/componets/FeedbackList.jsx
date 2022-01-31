import React from "react"
import FeedbackItem from "./FeedbackItem"
import PropTypes from "prop-types"

function FeedbackList({ feedback, handleDelete }) {
  console.log(feedback)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }
  // If there is no feedback or feedback size is 0

  return (
    <div className="feedback-list">
      {feedback.map((mapItem) => (
        <FeedbackItem
          key={mapItem.id}
          mapItem={mapItem}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  )
}
//Return feedback div(feedback-list) that holds rating and text Map is used to place multiple data types as one object Key is used to identify therfore use id and mapItem is used for each iteration that is mapped and displayed for each piece of feedback. It is coming through as the Prop mapItem
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}
// Passes an object FeedbackList that holds the propertys of the feedback mapItem, the array is shaped with arrayOf(). The propertys of the object  FeedBackItem

export default FeedbackList
