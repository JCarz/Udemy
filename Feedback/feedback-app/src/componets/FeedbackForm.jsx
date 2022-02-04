import React from "react"
import RatingSelect from "./RatingSelect"
import { useState } from "react" //Hook
import Card from "./shared/Card"
import Button from "./shared/Button"

function FeedbackForm() {
  //@Todo Realtime validation
  //button will be disabled until 10 chars are typed
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState("")

  const [text, setText] = useState("")
  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters")
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>Rate your service with us?</h2>
        <RatingSelect select={(rating) => console.log(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
        {/* if there is a message that is greater than 10 show the message if empty dont show */}
      </form>
    </Card>
  )
}

export default FeedbackForm
{
  /*Component level state is a instace of a React Component class it is an object of a set of observable properties that control the behavior of a component therefore each imput in the form has its own state */
  /*setText is what is updated. What is inputed in the form will be updated through the onChange eventHandler, you need to get whatever is typed in: console.log(e.target.value)   will get what is typed in. This needs to be set in the piece of state @text */
}
