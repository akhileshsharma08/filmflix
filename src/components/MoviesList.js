      import React, {useEffect, useState} from "react"
import "./Movie.css"
import { useParams } from "react-router-dom"
import MovieCard from "./MovieCard"


const MoviesList = () => { 
     const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4985a084b07afd132b4316ba30d8a6fd&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

  return (
  

<div className="movie__list">
             <div className="container px-5 pt-10 pb-14 mx-auto">
             <h1 className="list__title 2xl ml-24 pl-5 mt-5 mb-5">{(type ? type : "POPULAR MOVIES").toUpperCase()}</h1>

            <div className=" mycontainer">
                {
                    movieList.map(movie => (
                        <MovieCard movie={movie} key={movie.id}/>
                    ))
                }
            </div>
            </div>
        </div>



  )
}

export default MoviesList
