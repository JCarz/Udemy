import PropTypes from "prop-types"
import Card from "./shared/Card"
//Todo create delete function to item using ReactIcons
import { FaTimes } from "react-icons/fa"
function FeedbackItem({ mapItem, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{mapItem.rating}</div>
      <button onClick={() => handleDelete(mapItem.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{mapItem.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}
// On click handle the delete button pressed by grabbing the mapID and console loging the ID number, 

FeedbackItem.propTypes = {
  mapItem: PropTypes.object.isRequired,
}
// The mapItem is an object

export default FeedbackItem

/*State with Funtional Compents app and gobal level state if you want to change state youll have to re-set each state

 const handleClick = () {
   setRating(10)
  } 

 //The direct value is set, but you can get pass ratings aswell
 */

//   const [rating, setRating] = useState(7)
//   const [text, setText] = useState("This is a test of a Feedback Item")

/*  const handleClick = () => {
    setRating((prev)) => {
        console.log(prev)
        return prev + 1

    })
  }
*/
