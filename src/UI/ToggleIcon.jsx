import PropTypes from "prop-types";

ToggleIcon.propTypes = {
    onClick:PropTypes.any.isRequired
  };
function ToggleIcon({onClick}) {
  return (
    <svg width="44" onClick={onClick} height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 16H38" stroke="#C7C7C7" strokeWidth="2"/>
    <path d="M6 28H38" stroke="#C7C7C7" strokeWidth="2"/>
    </svg> 
  )
}

export default ToggleIcon