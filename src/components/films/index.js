import React from "react"
import PropTypes from "prop-types"
import FilmCard from "./FilmCard"
import Message from "../Message"

const FilmsList = ({films}) => {
  return (
    <div className="ui four cards">
      {films ? (
        films.map(film => <FilmCard key={film._id} film={film} />)
      ) : (
        <Message msg="No films..." color="red" type="star outline" />
      )}
    </div>
  )
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default FilmsList
