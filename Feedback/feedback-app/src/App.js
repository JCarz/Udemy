import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import Header from "./componets/Header"
import FeedbackList from "./componets/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./componets/FeedbackStats"
import FeedbackForm from "./componets/FeedbackForm"
import { FeedbackProvider } from "./context/FeedbackContext"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  // FeedbackData holds 3 states id,rating and text

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((mapItem) => mapItem.id !== id))
    }
  } // Set feedback to the new array minus the feedback we are reading, setFeedback() will pass and replace the exisitng feedBack value. Window will confirm. The feedback is set with a new array and fliter() through that calls a function, loops through that can condicion something out the one we deleted.

  // For each feedback filter where mapItem.id is not equal to the mapId that was passed in.
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    //uuid is a npm that will generate unique ids
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <FeedbackProvider>
      <Header />
      <div className="Container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats />
        <FeedbackList handleDelete={deleteFeedback} />
      </div>
    </FeedbackProvider>
  )
}
export default App
