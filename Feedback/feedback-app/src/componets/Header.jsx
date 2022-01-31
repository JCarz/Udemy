import PropTypes from "prop-types"

//Header has constant prop, Props are argments passes into React Componetns
//Props are passes to components via HTML attributes. They are like funtion arguments in JS and attributes in HTML
function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}
// The name of the component this is a prop
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
}

//This is for extra valiation you can set the prop type to be specific string,boolean
Header.propTypes = {
  text: PropTypes.string,
}

export default Header
