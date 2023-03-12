import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import Trending from './Trending';
import { Link } from 'react-router-dom';
// import Review from './Review';
import './Home.css'
import { AiFillStar } from 'react-icons/ai';
import 'react-loading-skeleton/dist/skeleton.css'
import { MagnifyingGlass } from 'react-loader-spinner';
import MoviesList from './MoviesList';


const Home = () => {

  const [popularMovies, setPopularMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4985a084b07afd132b4316ba30d8a6fd')
      .then(resp => resp.data
      ).then((data) => {
        setPopularMovies(data.results)
        // setIsLoading(false)
      })
      .catch(err => console.log(err, "err in fetching"))
    }, 1500)
  }, [])

 
  return (
    <>
      {isLoading ?
        <div className='flex justify-center item-center my-24 py-24 h-100vh'><MagnifyingGlass
          visible={true}
          height="100"
          width="100"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{ marginLeft: "100px" }}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor='#c0efff'
          color='#e15b64'
        /></div>
        :
        <div className='poster'>

          <Carousel showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={false}
            showStatus={false}
          >
            {popularMovies.map((movie) => {
              return (
                <>
                  <Link to={`movie/${movie.id}`} key={movie.id}>
                    <div className='posterImage' >
                      <img src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} className='rounded-lg' alt='carousels poster' />
                    </div>
                    <div className='posterImage__overlay'>
                      <div className='posterImage__title'>{movie ? movie.original_title : ""}</div>
                      <h1 className='posterImage__runtime '>Released: {movie ? movie.release_date : ""} </h1>
                      <span className='  flex flex-wrap items-center text-xl'>Rating: {movie.vote_average}&nbsp;<AiFillStar className='text-yellow-400' /></span>
                    </div>
                  </Link>
                </>
              )
            })}
          </Carousel>
          <MoviesList />
        </div>
      }
    </>

  )
}

export default Home
