function App() {
  const title = "Blog Post"
  const body = "This is Blog Post"
  const comments = [
    { id: 1, text: "Comment one" },
    { id: 2, text: "Comment two" },
    { id: 3, text: "Comment three" },
  ]

  return (
    // Div container holds the Header,Body,Comment Header and comments
    //Div comments displaying each comment inside of a map, for each comment display comments variable and index
    //Best Practice when using li give it a Key or you will get "Each child in a list should have a unique "key" prop"
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      <div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comments, index) => (
            <li key={index}>{comments.text}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
