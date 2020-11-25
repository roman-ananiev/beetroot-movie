import React, {Component} from "react"
import {films} from "../data"
import FilmsList from "./films"
import {orderBy, sortBy} from "lodash"

const AppContext = React.createContext()
export {AppContext}

class App extends Component {
  state = {
    films: [],
  }
  componentDidMount() {
    this.setState({
      films: this.sortFilms(films, ["director"]),
    })
  }

  sortFilms = films => orderBy(films, ["featured", "title"], ["desc", "asc"])

  toggleFeatured = id => {
    this.setState(({films}) => ({
      films: this.sortFilms(
        films.map(item =>
          item._id === id ? {...item, featured: !item.featured} : item,
        ),
      ),
    }))
  }

  render() {
    const {films} = this.state
    return (
      <AppContext.Provider value={{toggleFeatured: this.toggleFeatured}}>
        <div className="ui container mt-3">
          <FilmsList films={films} />
        </div>
      </AppContext.Provider>
    )
  }
}

export default App
