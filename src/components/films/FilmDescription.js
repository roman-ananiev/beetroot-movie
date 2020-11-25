import React from "react"
import PropTypes from "prop-types"
import Featured from "./Featured"

function FilmDescription({description}) {
  return (
    <div className="description" style={{minHeight: 394, padding: 20}}>
      <p>{description}</p>
    </div>
  )
}

FilmDescription.propTypes = {description: PropTypes.string.isRequired}

export default FilmDescription
