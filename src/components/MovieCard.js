import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
// import "./Movie.css"
import { Link } from "react-router-dom"
import { AiFillStar } from "react-icons/ai"


const MovieCard = ({movie}) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 
    return (
        <>
        {isLoading
        ?
        <div className="cards ">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={3} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none"}} >
        <div className="cards mx-4">
            <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
            <div className="cards__overlay">
                <div className="card__title">{movie?movie.original_title:""}</div>
                <div className="card__runtime">
                    {movie?movie.release_date:""}
                    <span className="card__rating">{movie?movie.vote_average:""}<AiFillStar/></span>
                </div>
            </div>
        </div>
    </Link>
}
        </>
    )
}

export default MovieCard
