// import { motion, AnimatePresence } from "framer-motion"
import FeedbackItem from "./FeedbackItem"

import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
function FeedbackList({ handleDelete }) {
  const { feedback } = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }
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

// Passes an object FeedbackList that holds the propertys of the feedback mapItem, the array is shaped with arrayOf(). The propertys of the object  FeedBackItem

export default FeedbackList
