import React, {useState} from "react"
import PropTypes from "prop-types"
import Featured from "./Featured"
import FilmDescription from "./FilmDescription"
import DescriptionEye from "./DescriptionEye"

const FilmCard = ({film}) => {
  const [visibleDescription, setVisibleDescription] = useState(false)

  const toggleDescription = () => {
    setVisibleDescription(!visibleDescription)
  }
  return (
    <div className="ui card">
      {visibleDescription ? (
        <FilmDescription description={film.description} />
      ) : (
        <>
          <Featured featured={film.featured} id={film._id} />
          <div className="image">
            <span className="ui green label ribbon">$ {film?.price} </span>
            <img src={film?.img} alt="{film.title}" />
          </div>
        </>
      )}

      <div className="content">
        <div className="header">
          <span href="#" className="content">
            {film?.title}
          </span>
          <DescriptionEye
            toggleDescription={toggleDescription}
            visibleDescription={visibleDescription}
          />
        </div>

        <div className="meta">
          <i className="icon users" /> {film?.director}
          <span className="right floated">
            <i className="icon wait right" /> {film?.duration} min
          </span>
        </div>
      </div>
    </div>
  )
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    featured: PropTypes.bool.isRequired,
  }),
}

export default React.memo(FilmCard)
