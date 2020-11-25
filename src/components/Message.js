import React from "react"
import PropTypes from "prop-types"

function Message({msg, type, color}) {
  return (
    <div className={`ui icon ${color} message`}>
      <i className={`icon ${type}`} />
      <div className="content">
        <div className="header">{msg}</div>
      </div>
    </div>
  )
}
Message.defaultProps = {
  type: "info",
  color: "olive",
}

Message.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
export default Message
