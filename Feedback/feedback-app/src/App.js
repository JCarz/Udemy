import { useState } from "react"
import Header from "./componets/Header"
import FeedbackList from "./componets/FeedbackList"
//Todo manage global State
import FeedbackData from "./data/FeedbackData"
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  // FeedbackData holds 3 states id,rating and text

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((mapItem) => mapItem.id !== id))
    }
  }
  // Set feedback to the new array minus the feedback we are reading, setFeedback() will pass and replace the exisitng feedBack value. Window will confirm. The feedback is set with a new array and fliter() through that calls a function, loops through that can condicion something out the one we deleted.

  // For each feedback filter where mapItem.id is not equal to the mapId that was passed in.

  return (
    <>
      <Header />
      <div className="Container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}
export default App

//Todo Create Feedback list of items that holds off the feedback items
// Create feedback list and item display

//State with Funtional Compents app and gobal level state
