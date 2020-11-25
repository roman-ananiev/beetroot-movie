import React from "react"
import PropTypes from "prop-types"
import Featured from "./Featured"

function DescriptionEye({visibleDescription, toggleDescription}) {
  const cls = visibleDescription ? "eye slash" : "eye"
  return (
    <span className="right floated" onClick={() => toggleDescription()}>
      <i className={`icon link ${cls}`}></i>
    </span>
  )
}
DescriptionEye.propTypes = {
  visibleDescription: PropTypes.bool.isRequired,
  toggleDescription: PropTypes.func.isRequired,
}

export default DescriptionEye
