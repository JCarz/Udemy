import PropTypes from "prop-types"

function Button({ children, version, type, isDisabled }) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn
    btn-${version}`}
    >
      {children}
    </button>
  )
}

{
  /*The button has props tied to it children, version,type,isDisabled. 
@type will always be a button
@disabled will check if it submittable
@version is depending on the props the css styling will change for the different style of buttons
*/
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: "false",
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default Button
